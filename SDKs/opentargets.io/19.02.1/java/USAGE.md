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
                    datasource = "sit";
                    datastructure = "voluptas";
                    datatype = "culpa";
                    direct = false;
                    disease = "consequuntur";
                    facets = false;
                    fields = "expedita";
                    format = "voluptas";
                    from = 88.099998;
                    pathway = "nihil";
                    scorevalueMax = 47.200001;
                    scorevalueMin = 48.099998;
                    scorevalueTypes = "et";
                    search = "ut";
                    size = 50.099998;
                    sort = "voluptate";
                    target = "iste";
                    targetClass = "vitae";
                    therapeuticArea = "totam";
                    uniprotkw = "dolores";
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