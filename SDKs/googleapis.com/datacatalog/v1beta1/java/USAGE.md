<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatacatalogCatalogSearchSecurity;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchRequest;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogCatalogSearchRequest req = new DatacatalogCatalogSearchRequest() {{
                dollarXgafv = "2";
                googleCloudDatacatalogV1beta1SearchCatalogRequest = new GoogleCloudDatacatalogV1beta1SearchCatalogRequest() {{
                    orderBy = "provident";
                    pageSize = 715190;
                    pageToken = "quibusdam";
                    query = "unde";
                    scope = new GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope() {{
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
                        restrictedLocations = new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }};
                    }};
                }};
                accessToken = "molestiae";
                alt = "proto";
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }}            

            DatacatalogCatalogSearchResponse res = sdk.catalog.datacatalogCatalogSearch(req, new DatacatalogCatalogSearchSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1SearchCatalogResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->