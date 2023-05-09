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
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchResponse;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KmsinventoryOrganizationsProtectedResourcesSearchRequest req = new KmsinventoryOrganizationsProtectedResourcesSearchRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                cryptoKey = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            KmsinventoryOrganizationsProtectedResourcesSearchResponse res = sdk.organizations.kmsinventoryOrganizationsProtectedResourcesSearch(req, new KmsinventoryOrganizationsProtectedResourcesSearchSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudKmsInventoryV1SearchProtectedResourcesResponse != null) {
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


### [organizations](docs/organizations/README.md)

* [kmsinventoryOrganizationsProtectedResourcesSearch](docs/organizations/README.md#kmsinventoryorganizationsprotectedresourcessearch) - Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.

### [projects](docs/projects/README.md)

* [kmsinventoryProjectsCryptoKeysList](docs/projects/README.md#kmsinventoryprojectscryptokeyslist) - Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.
* [kmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummary](docs/projects/README.md#kmsinventoryprojectslocationskeyringscryptokeysgetprotectedresourcessummary) - Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
