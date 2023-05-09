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
import org.openapis.openapi.models.operations.CreateBindingCreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingRequest;
import org.openapis.openapi.models.operations.CreateBindingResponse;
import org.openapis.openapi.models.operations.CreateBindingSecurity;
import org.openapis.openapi.models.shared.BindingEnumBindingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBindingRequest req = new CreateBindingRequest("corrupti") {{
                requestBody = new CreateBindingCreateBindingRequest("provident", BindingEnumBindingTypeEnum.FACEBOOK_MESSENGER, "quibusdam") {{
                    credentialSid = "unde";
                    endpoint = "nulla";
                    notificationProtocolVersion = "corrupti";
                    tag = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                }};;
            }};            

            CreateBindingResponse res = sdk.createBinding(req, new CreateBindingSecurity("iure", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.notifyV1ServiceBinding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createBinding](docs/sdk/README.md#createbinding)
* [createCredential](docs/sdk/README.md#createcredential)
* [createNotification](docs/sdk/README.md#createnotification)
* [createService](docs/sdk/README.md#createservice)
* [deleteBinding](docs/sdk/README.md#deletebinding)
* [deleteCredential](docs/sdk/README.md#deletecredential)
* [deleteService](docs/sdk/README.md#deleteservice)
* [fetchBinding](docs/sdk/README.md#fetchbinding)
* [fetchCredential](docs/sdk/README.md#fetchcredential)
* [fetchService](docs/sdk/README.md#fetchservice)
* [listBinding](docs/sdk/README.md#listbinding)
* [listCredential](docs/sdk/README.md#listcredential)
* [listService](docs/sdk/README.md#listservice)
* [updateCredential](docs/sdk/README.md#updatecredential)
* [updateService](docs/sdk/README.md#updateservice)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
