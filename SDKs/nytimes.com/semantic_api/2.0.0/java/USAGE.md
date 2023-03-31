<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonConceptTypeEnum;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonPathParams;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonFieldsEnum;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonQueryParams;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonRequest;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetNameConceptTypeSpecificConceptJsonRequest req = new GetNameConceptTypeSpecificConceptJsonRequest() {{
                pathParams = new GetNameConceptTypeSpecificConceptJsonPathParams() {{
                    conceptType = "nytd_org";
                    specificConcept = "provident";
                }};
                queryParams = new GetNameConceptTypeSpecificConceptJsonQueryParams() {{
                    fields = "article_list";
                    query = "quibusdam";
                }};
            }};            

            GetNameConceptTypeSpecificConceptJsonResponse res = sdk.getNameConceptTypeSpecificConceptJson(req);

            if (res.getNameConceptTypeSpecificConceptJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->