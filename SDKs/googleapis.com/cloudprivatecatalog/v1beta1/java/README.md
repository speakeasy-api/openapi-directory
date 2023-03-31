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

import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchSecurity;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchPathParams;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchQueryParams;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogOrganizationsCatalogsSearchRequest req = new CloudprivatecatalogOrganizationsCatalogsSearchRequest() {{
                security = new CloudprivatecatalogOrganizationsCatalogsSearchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudprivatecatalogOrganizationsCatalogsSearchPathParams() {{
                    resource = "corrupti";
                }};
                queryParams = new CloudprivatecatalogOrganizationsCatalogsSearchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    query = "deserunt";
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            CloudprivatecatalogOrganizationsCatalogsSearchResponse res = sdk.organizations.cloudprivatecatalogOrganizationsCatalogsSearch(req);

            if (res.body.isPresent()) {
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

* `cloudprivatecatalogOrganizationsCatalogsSearch` - Search Catalog resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
* `cloudprivatecatalogOrganizationsProductsSearch` - Search Product resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
* `cloudprivatecatalogOrganizationsVersionsSearch` - Search Version resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
