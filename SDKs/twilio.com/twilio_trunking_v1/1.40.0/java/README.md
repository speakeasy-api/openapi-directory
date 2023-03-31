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

import org.openapis.openapi.models.operations.CreateCredentialListSecurity;
import org.openapis.openapi.models.operations.CreateCredentialListPathParams;
import org.openapis.openapi.models.operations.CreateCredentialListCreateCredentialListRequest;
import org.openapis.openapi.models.operations.CreateCredentialListRequest;
import org.openapis.openapi.models.operations.CreateCredentialListResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialListRequest req = new CreateCredentialListRequest() {{
                security = new CreateCredentialListSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateCredentialListPathParams() {{
                    trunkSid = "corrupti";
                }};
                request = new CreateCredentialListCreateCredentialListRequest() {{
                    credentialListSid = "provident";
                }};
            }};            

            CreateCredentialListResponse res = sdk.createCredentialList(req);

            if (res.trunkingV1TrunkCredentialList.isPresent()) {
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

* `createCredentialList`
* `createIpAccessControlList` - Associate an IP Access Control List with a Trunk
* `createOriginationUrl`
* `createPhoneNumber`
* `createTrunk`
* `deleteCredentialList`
* `deleteIpAccessControlList` - Remove an associated IP Access Control List from a Trunk
* `deleteOriginationUrl`
* `deletePhoneNumber`
* `deleteTrunk`
* `fetchCredentialList`
* `fetchIpAccessControlList`
* `fetchOriginationUrl`
* `fetchPhoneNumber`
* `fetchRecording`
* `fetchTrunk`
* `listCredentialList`
* `listIpAccessControlList` - List all IP Access Control Lists for a Trunk
* `listOriginationUrl`
* `listPhoneNumber`
* `listTrunk`
* `updateOriginationUrl`
* `updateRecording`
* `updateTrunk`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
