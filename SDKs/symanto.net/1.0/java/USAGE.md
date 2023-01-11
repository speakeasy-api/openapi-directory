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
                    apiKeyHeader = new SchemeApiKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CommunicationRequest req = new CommunicationRequest() {{
                queryParams = new CommunicationQueryParams() {{
                    all = true;
                }};
                request = new openapisdk.models.shared.Post[]() {{
                    add(new Post() {{
                        id = "qui";
                        language = "excepturi";
                        text = "autem";
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