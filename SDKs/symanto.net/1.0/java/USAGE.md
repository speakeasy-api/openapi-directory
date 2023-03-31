<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CommunicationQueryParams;
import org.openapis.openapi.models.operations.CommunicationRequest;
import org.openapis.openapi.models.operations.CommunicationResponse;
import org.openapis.openapi.models.shared.Post;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CommunicationRequest req = new CommunicationRequest() {{
                queryParams = new CommunicationQueryParams() {{
                    all = false;
                }};
                request = new org.openapis.openapi.models.shared.Post[]{{
                    add(new Post() {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post() {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                    add(new Post() {{
                        id = "1";
                        language = "en";
                        text = "I love the service";
                    }}),
                }};
            }};            

            CommunicationResponse res = sdk.textAnalysis.communication(req);

            if (res.predictionResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->