<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatacatalogCatalogSearchSecurity;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchQueryParams;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchRequest;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchResponse;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SearchCatalogRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SearchCatalogRequestScope;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogCatalogSearchRequest req = new DatacatalogCatalogSearchRequest() {{
                security = new DatacatalogCatalogSearchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new DatacatalogCatalogSearchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new GoogleCloudDatacatalogV1SearchCatalogRequest() {{
                    orderBy = "deserunt";
                    pageSize = 384382;
                    pageToken = "iure";
                    query = "magnam";
                    scope = new GoogleCloudDatacatalogV1SearchCatalogRequestScope() {{
                        includeGcpPublicDatasets = false;
                        includeOrgIds = new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }};
                        includeProjectIds = new String[]{{
                            add("minus"),
                            add("placeat"),
                        }};
                        includePublicTagTemplates = false;
                        restrictedLocations = new String[]{{
                            add("iusto"),
                            add("excepturi"),
                            add("nisi"),
                        }};
                        starredOnly = false;
                    }};
                }};
            }};            

            DatacatalogCatalogSearchResponse res = sdk.catalog.datacatalogCatalogSearch(req);

            if (res.googleCloudDatacatalogV1SearchCatalogResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->