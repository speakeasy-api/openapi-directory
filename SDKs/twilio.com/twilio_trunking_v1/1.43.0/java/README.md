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
import org.openapis.openapi.models.operations.CreateCredentialListCreateCredentialListRequest;
import org.openapis.openapi.models.operations.CreateCredentialListRequest;
import org.openapis.openapi.models.operations.CreateCredentialListResponse;
import org.openapis.openapi.models.operations.CreateCredentialListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialListRequest req = new CreateCredentialListRequest("corrupti") {{
                requestBody = new CreateCredentialListCreateCredentialListRequest("provident");;
            }};            

            CreateCredentialListResponse res = sdk.createCredentialList(req, new CreateCredentialListSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkCredentialList != null) {
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

* [createCredentialList](docs/sdk/README.md#createcredentiallist)
* [createIpAccessControlList](docs/sdk/README.md#createipaccesscontrollist) - Associate an IP Access Control List with a Trunk
* [createOriginationUrl](docs/sdk/README.md#createoriginationurl)
* [createPhoneNumber](docs/sdk/README.md#createphonenumber)
* [createTrunk](docs/sdk/README.md#createtrunk)
* [deleteCredentialList](docs/sdk/README.md#deletecredentiallist)
* [deleteIpAccessControlList](docs/sdk/README.md#deleteipaccesscontrollist) - Remove an associated IP Access Control List from a Trunk
* [deleteOriginationUrl](docs/sdk/README.md#deleteoriginationurl)
* [deletePhoneNumber](docs/sdk/README.md#deletephonenumber)
* [deleteTrunk](docs/sdk/README.md#deletetrunk)
* [fetchCredentialList](docs/sdk/README.md#fetchcredentiallist)
* [fetchIpAccessControlList](docs/sdk/README.md#fetchipaccesscontrollist)
* [fetchOriginationUrl](docs/sdk/README.md#fetchoriginationurl)
* [fetchPhoneNumber](docs/sdk/README.md#fetchphonenumber)
* [fetchRecording](docs/sdk/README.md#fetchrecording)
* [fetchTrunk](docs/sdk/README.md#fetchtrunk)
* [listCredentialList](docs/sdk/README.md#listcredentiallist)
* [listIpAccessControlList](docs/sdk/README.md#listipaccesscontrollist) - List all IP Access Control Lists for a Trunk
* [listOriginationUrl](docs/sdk/README.md#listoriginationurl)
* [listPhoneNumber](docs/sdk/README.md#listphonenumber)
* [listTrunk](docs/sdk/README.md#listtrunk)
* [updateOriginationUrl](docs/sdk/README.md#updateoriginationurl)
* [updateRecording](docs/sdk/README.md#updaterecording)
* [updateTrunk](docs/sdk/README.md#updatetrunk)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
