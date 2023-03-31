# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateBindingSecurity;
import org.openapis.openapi.models.operations.CreateBindingPathParams;
import org.openapis.openapi.models.operations.CreateBindingCreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingResponse;
import org.openapis.openapi.models.shared.BindingEnumBindingTypeEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBindingRequest req = new CreateBindingRequest() {{
                security = new CreateBindingSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateBindingPathParams() {{
                    serviceSid = "corrupti";
                }};
                request = new CreateBindingCreateBindingRequest() {{
                    address = "7868 Stamm Junctions";
                    bindingType = "fcm";
                    credentialSid = "deserunt";
                    endpoint = "suscipit";
                    identity = "iure";
                    notificationProtocolVersion = "magnam";
                    tag = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                }};
            }};            

            CreateBindingResponse res = sdk.createBinding(req);

            if (res.notifyV1ServiceBinding.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createBinding`
* `createCredential`
* `createNotification`
* `createService`
* `deleteBinding`
* `deleteCredential`
* `deleteService`
* `fetchBinding`
* `fetchCredential`
* `fetchService`
* `listBinding`
* `listCredential`
* `listService`
* `updateCredential`
* `updateService`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
