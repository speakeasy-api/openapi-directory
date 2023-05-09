<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationFilterRequest;
import org.openapis.openapi.models.operations.GetAssociationFilterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationFilterRequest req = new GetAssociationFilterRequest() {{
                datasource = "corrupti";
                datastructure = "provident";
                datatype = "distinctio";
                direct = false;
                disease = "quibusdam";
                facets = false;
                fields = "unde";
                format = "nulla";
                from = 5448.83;
                pathway = "illum";
                scorevalueMax = 4236.55;
                scorevalueMin = 6235.64;
                scorevalueTypes = "deserunt";
                search = "suscipit";
                size = 4375.87;
                sort = "magnam";
                target = "debitis";
                targetClass = "ipsa";
                therapeuticArea = "delectus";
                uniprotkw = "tempora";
            }};            

            GetAssociationFilterResponse res = sdk.filter.getAssociationFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->