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
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyRequest;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyResponse;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurity;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurityOption1;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysKeysLookupKeyRequest req = new ApikeysKeysLookupKeyRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                keyString = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            ApikeysKeysLookupKeyResponse res = sdk.keys.apikeysKeysLookupKey(req, new ApikeysKeysLookupKeySecurity() {{
                option1 = new ApikeysKeysLookupKeySecurityOption1("suscipit", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.v2LookupKeyResponse != null) {
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


### [keys](docs/keys/README.md)

* [apikeysKeysLookupKey](docs/keys/README.md#apikeyskeyslookupkey) - Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.

### [projects](docs/projects/README.md)

* [apikeysProjectsLocationsKeysCreate](docs/projects/README.md#apikeysprojectslocationskeyscreate) - Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysDelete](docs/projects/README.md#apikeysprojectslocationskeysdelete) - Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysGet](docs/projects/README.md#apikeysprojectslocationskeysget) - Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysGetKeyString](docs/projects/README.md#apikeysprojectslocationskeysgetkeystring) - Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysList](docs/projects/README.md#apikeysprojectslocationskeyslist) - Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysPatch](docs/projects/README.md#apikeysprojectslocationskeyspatch) - Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysUndelete](docs/projects/README.md#apikeysprojectslocationskeysundelete) - Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
