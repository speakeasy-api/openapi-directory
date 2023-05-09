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
import org.openapis.openapi.models.operations.FactchecktoolsClaimsSearchRequest;
import org.openapis.openapi.models.operations.FactchecktoolsClaimsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FactchecktoolsClaimsSearchRequest req = new FactchecktoolsClaimsSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                languageCode = "corrupti";
                maxAgeDays = 847252L;
                oauthToken = "vel";
                offset = 623564L;
                pageSize = 645894L;
                pageToken = "suscipit";
                prettyPrint = false;
                query = "iure";
                quotaUser = "magnam";
                reviewPublisherSiteFilter = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            FactchecktoolsClaimsSearchResponse res = sdk.claims.factchecktoolsClaimsSearch(req);

            if (res.googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse != null) {
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


### [claims](docs/claims/README.md)

* [factchecktoolsClaimsSearch](docs/claims/README.md#factchecktoolsclaimssearch) - Search through fact-checked claims.

### [pages](docs/pages/README.md)

* [factchecktoolsPagesCreate](docs/pages/README.md#factchecktoolspagescreate) - Create `ClaimReview` markup on a page.
* [factchecktoolsPagesDelete](docs/pages/README.md#factchecktoolspagesdelete) - Delete all `ClaimReview` markup on a page.
* [factchecktoolsPagesGet](docs/pages/README.md#factchecktoolspagesget) - Get all `ClaimReview` markup on a page.
* [factchecktoolsPagesList](docs/pages/README.md#factchecktoolspageslist) - List the `ClaimReview` markup pages for a specific URL or for an organization.
* [factchecktoolsPagesUpdate](docs/pages/README.md#factchecktoolspagesupdate) - Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
