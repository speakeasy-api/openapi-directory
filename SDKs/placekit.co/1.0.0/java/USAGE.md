<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReverseRequestBody;
import org.openapis.openapi.models.operations.ReverseRequestBodyLanguageEnum;
import org.openapis.openapi.models.operations.ReverseResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReverseRequestBody req = new ReverseRequestBody() {{
                coordinates = "48.873662, 2.295063";
                countries = new String[]{{
                    add("distinctio"),
                    add("quibusdam"),
                    add("unde"),
                }};
                countryByIP = false;
                language = ReverseRequestBodyLanguageEnum.FR;
                maxResults = 857946L;
                types = new org.openapis.openapi.models.shared.TypesEnum[]{{
                    add(TypesEnum.MINUS_TOWNHALL),
                    add(TypesEnum.COUNTRY),
                    add(TypesEnum.MINUS_STREET),
                }};
            }};            

            ReverseResponse res = sdk.reverse(req);

            if (res.results != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->