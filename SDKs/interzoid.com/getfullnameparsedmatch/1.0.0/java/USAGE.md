<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetfullnameparsedmatchQueryParams;
import org.openapis.openapi.models.operations.GetfullnameparsedmatchRequest;
import org.openapis.openapi.models.operations.GetfullnameparsedmatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetfullnameparsedmatchRequest req = new GetfullnameparsedmatchRequest() {{
                queryParams = new GetfullnameparsedmatchQueryParams() {{
                    firstname = "Katharina";
                    lastname = "Medhurst";
                    license = "distinctio";
                }};
            }};            

            GetfullnameparsedmatchResponse res = sdk.fullNameParsedSimilarityKey.getfullnameparsedmatch(req);

            if (res.getfullnameparsedmatch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->