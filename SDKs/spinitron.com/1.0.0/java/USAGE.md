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
                    httpBearer = new SchemeHttpBearer() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetPersonasRequest req = new GetPersonasRequest() {{
                queryParams = new GetPersonasQueryParams() {{
                    count = 8717895732742165505;
                    expand = new String[]() {{
                        add("culpa"),
                    }};
                    fields = new String[]() {{
                        add("consequuntur"),
                        add("dolor"),
                    }};
                    name = "expedita";
                    page = 6044372234677422456;
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