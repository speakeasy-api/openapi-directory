<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureIndexRequest;
import org.openapis.openapi.models.operations.ConfigureIndexResponse;
import org.openapis.openapi.models.shared.IndexConfiguration;
import org.openapis.openapi.models.shared.PodTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfigureIndexRequest req = new ConfigureIndexRequest(                new IndexConfiguration() {{
                                podType = PodTypeEnum.P1_X8;
                                replicas = 715190;
                            }};, "example");            

            ConfigureIndexResponse res = sdk.indexOperations.configureIndex(req);

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