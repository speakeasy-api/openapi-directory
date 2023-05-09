# catalog

### Available Operations

* [datacatalogCatalogSearch](#datacatalogcatalogsearch) - Searches Data Catalog for multiple resources like entries and tags that match a query. This is a [Custom Method] (https://cloud.google.com/apis/design/custom_methods) that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods. Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. For more information, see [Data Catalog search syntax] (https://cloud.google.com/data-catalog/docs/how-to/search-reference).

## datacatalogCatalogSearch

Searches Data Catalog for multiple resources like entries and tags that match a query. This is a [Custom Method] (https://cloud.google.com/apis/design/custom_methods) that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods. Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. For more information, see [Data Catalog search syntax] (https://cloud.google.com/data-catalog/docs/how-to/search-reference).

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1SearchCatalogRequest = new GoogleCloudDatacatalogV1SearchCatalogRequest() {{
                    orderBy = "deserunt";
                    pageSize = 20218;
                    pageToken = "ipsam";
                    query = "repellendus";
                    scope = new GoogleCloudDatacatalogV1SearchCatalogRequestScope() {{
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
                        includePublicTagTemplates = false;
                        restrictedLocations = new String[]{{
                            add("porro"),
                            add("dolorum"),
                            add("dicta"),
                        }};
                        starredOnly = false;
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

            if (res.googleCloudDatacatalogV1SearchCatalogResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
