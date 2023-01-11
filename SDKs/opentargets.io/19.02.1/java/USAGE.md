<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetAssociationFilterRequest req = new GetAssociationFilterRequest() {{
                queryParams = new GetAssociationFilterQueryParams() {{
                    datasource = "exercitationem";
                    datastructure = "qui";
                    datatype = "optio";
                    direct = false;
                    disease = "aut";
                    facets = false;
                    fields = "corrupti";
                    format = "laboriosam";
                    from = 21.200001;
                    pathway = "quibusdam";
                    scorevalueMax = 79.199997;
                    scorevalueMin = 59.200001;
                    scorevalueTypes = "blanditiis";
                    search = "mollitia";
                    size = 14.200000;
                    sort = "dolor";
                    target = "tempore";
                    targetClass = "recusandae";
                    therapeuticArea = "non";
                    uniprotkw = "ut";
                }};
            }};

            GetAssociationFilterResponse res = sdk.filter.getAssociationFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->