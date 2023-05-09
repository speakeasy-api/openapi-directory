# persona

### Available Operations

* [getPersonas](#getpersonas) - Get Personas
* [getPersonasId](#getpersonasid) - Get Persona by id

## getPersonas

Get Personas

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPersonasRequest;
import org.openapis.openapi.models.operations.GetPersonasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPersonasRequest req = new GetPersonasRequest() {{
                count = 963663L;
                expand = new String[]{{
                    add("suscipit"),
                    add("molestiae"),
                }};
                fields = new String[]{{
                    add("placeat"),
                    add("voluptatum"),
                    add("iusto"),
                    add("excepturi"),
                }};
                name = "Mrs. Sophie Smith MD";
                page = 20218L;
            }};            

            GetPersonasResponse res = sdk.persona.getPersonas(req);

            if (res.getPersonas200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPersonasId

Get Persona by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPersonasIdRequest;
import org.openapis.openapi.models.operations.GetPersonasIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPersonasIdRequest req = new GetPersonasIdRequest(368241L) {{
                expand = new String[]{{
                    add("sapiente"),
                    add("quo"),
                    add("odit"),
                    add("at"),
                }};
                fields = new String[]{{
                    add("maiores"),
                    add("molestiae"),
                    add("quod"),
                    add("quod"),
                }};
            }};            

            GetPersonasIdResponse res = sdk.persona.getPersonasId(req);

            if (res.persona != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
