<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonConceptTypeEnum;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonFieldsEnum;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonRequest;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNameConceptTypeSpecificConceptJsonRequest req = new GetNameConceptTypeSpecificConceptJsonRequest(GetNameConceptTypeSpecificConceptJsonConceptTypeEnum.NYTD_ORG, "distinctio", "quibusdam") {{
                fields = GetNameConceptTypeSpecificConceptJsonFieldsEnum.GEOCODES;
            }};            

            GetNameConceptTypeSpecificConceptJsonResponse res = sdk.getNameConceptTypeSpecificConceptJson(req);

            if (res.getNameConceptTypeSpecificConceptJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->