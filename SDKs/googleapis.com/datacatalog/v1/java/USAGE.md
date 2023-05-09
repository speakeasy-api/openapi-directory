<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchRequest;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchResponse;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SearchCatalogRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SearchCatalogRequestScope;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogCatalogSearchRequest req = new DatacatalogCatalogSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1SearchCatalogRequest = new GoogleCloudDatacatalogV1SearchCatalogRequest() {{
                    orderBy = "provident";
                    pageSize = 715190;
                    pageToken = "quibusdam";
                    query = "unde";
                    scope = new GoogleCloudDatacatalogV1SearchCatalogRequestScope() {{
                        includeGcpPublicDatasets = false;
                        includeOrgIds = new String[]{{
                            add("corrupti"),
                            add("illum"),
                            add("vel"),
                            add("error"),
                        }};
                        includeProjectIds = new String[]{{
                            add("suscipit"),
                            add("iure"),
                            add("magnam"),
                        }};
                        includePublicTagTemplates = false;
                        restrictedLocations = new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }};
                        starredOnly = false;
                    }};;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            DatacatalogCatalogSearchResponse res = sdk.catalog.datacatalogCatalogSearch(req, new DatacatalogCatalogSearchSecurity("ab", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1SearchCatalogResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->