<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostRegressionApiResponse;
import org.openapis.openapi.models.shared.RegressionApiBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RegressionApiBody req = new RegressionApiBody() {{
                convertDateTo = "month";
                data = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("distinctio", "quibusdam");
                        put("unde", "nulla");
                        put("corrupti", "illum");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }}),
                }};
                ignoreVariables = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("minus", "placeat");
                        put("voluptatum", "iusto");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                    }}),
                }};
                key = "abc123";
                outcomeVariable = "sales";
            }}            

            PostRegressionApiResponse res = sdk.postRegressionApi(req);

            if (res.inlineResponse200.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->