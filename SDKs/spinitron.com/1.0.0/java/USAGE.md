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
                    count = 432317278959866118;
                    expand = new String[]() {{
                        add("pariatur"),
                        add("quasi"),
                    }};
                    fields = new String[]() {{
                        add("enim"),
                        add("qui"),
                        add("sit"),
                    }};
                    name = "possimus";
                    page = 9178255268999664835;
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