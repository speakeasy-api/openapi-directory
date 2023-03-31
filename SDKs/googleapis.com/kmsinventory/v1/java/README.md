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

import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchPathParams;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchQueryParams;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KmsinventoryOrganizationsProtectedResourcesSearchRequest req = new KmsinventoryOrganizationsProtectedResourcesSearchRequest() {{
                security = new KmsinventoryOrganizationsProtectedResourcesSearchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new KmsinventoryOrganizationsProtectedResourcesSearchPathParams() {{
                    scope = "corrupti";
                }};
                queryParams = new KmsinventoryOrganizationsProtectedResourcesSearchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    cryptoKey = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            KmsinventoryOrganizationsProtectedResourcesSearchResponse res = sdk.organizations.kmsinventoryOrganizationsProtectedResourcesSearch(req);

            if (res.googleCloudKmsInventoryV1SearchProtectedResourcesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### organizations

* `kmsinventoryOrganizationsProtectedResourcesSearch` - Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.

### projects

* `kmsinventoryProjectsCryptoKeysList` - Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.
* `kmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummary` - Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
