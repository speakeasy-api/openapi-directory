# catalog

### Available Operations

* [datacatalogCatalogSearch](#datacatalogcatalogsearch) - Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

## datacatalogCatalogSearch

Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchRequest;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchResponse;
import org.openapis.openapi.models.operations.DatacatalogCatalogSearchSecurity;
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
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1beta1SearchCatalogRequest = new GoogleCloudDatacatalogV1beta1SearchCatalogRequest() {{
                    orderBy = "deserunt";
                    pageSize = 20218;
                    pageToken = "ipsam";
                    query = "repellendus";
                    scope = new GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope() {{
                        includeGcpPublicDatasets = false;
                        includeOrgIds = new String[]{{
                            add("quo"),
                            add("odit"),
                            add("at"),
                            add("at"),
                        }};
                        includeProjectIds = new String[]{{
                            add("molestiae"),
                            add("quod"),
                            add("quod"),
                            add("esse"),
                        }};
                        restrictedLocations = new String[]{{
                            add("porro"),
                            add("dolorum"),
                            add("dicta"),
                        }};
                    }};;
                }};;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "fugit";
                key = "deleniti";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "totam";
                uploadProtocol = "beatae";
            }};            

            DatacatalogCatalogSearchResponse res = sdk.catalog.datacatalogCatalogSearch(req, new DatacatalogCatalogSearchSecurity("commodi", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1SearchCatalogResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
