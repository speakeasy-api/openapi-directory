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

import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurityOption1;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurityOption2;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurity;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyQueryParams;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyRequest;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysKeysLookupKeyRequest req = new ApikeysKeysLookupKeyRequest() {{
                security = new ApikeysKeysLookupKeySecurity() {{
                    option1 = new ApikeysKeysLookupKeySecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new ApikeysKeysLookupKeyQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
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
            }};            

            ApikeysKeysLookupKeyResponse res = sdk.keys.apikeysKeysLookupKey(req);

            if (res.v2LookupKeyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### keys

* `apikeysKeysLookupKey` - Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.

### projects

* `apikeysProjectsLocationsKeysCreate` - Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* `apikeysProjectsLocationsKeysDelete` - Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* `apikeysProjectsLocationsKeysGet` - Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* `apikeysProjectsLocationsKeysGetKeyString` - Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* `apikeysProjectsLocationsKeysList` - Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* `apikeysProjectsLocationsKeysPatch` - Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* `apikeysProjectsLocationsKeysUndelete` - Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
