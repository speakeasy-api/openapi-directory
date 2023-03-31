<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetPersonasQueryParams;
import org.openapis.openapi.models.operations.GetPersonasRequest;
import org.openapis.openapi.models.operations.GetPersonasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = new SchemeAccessToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetPersonasRequest req = new GetPersonasRequest() {{
                queryParams = new GetPersonasQueryParams() {{
                    count = 548814;
                    expand = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    fields = new String[]{{
                        add("corrupti"),
                        add("illum"),
                        add("vel"),
                        add("error"),
                    }};
                    name = "deserunt";
                    page = 384382;
                }};
            }};            

            GetPersonasResponse res = sdk.persona.getPersonas(req);

            if (res.getPersonas200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->