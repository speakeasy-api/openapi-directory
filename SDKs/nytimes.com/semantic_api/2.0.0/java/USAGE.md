<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetNameConceptTypeSpecificConceptJsonRequest req = new GetNameConceptTypeSpecificConceptJsonRequest() {{
                pathParams = new GetNameConceptTypeSpecificConceptJsonPathParams() {{
                    conceptType = "nytd_per";
                    specificConcept = "accusantium";
                }};
                queryParams = new GetNameConceptTypeSpecificConceptJsonQueryParams() {{
                    fields = "combinations";
                    query = "commodi";
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