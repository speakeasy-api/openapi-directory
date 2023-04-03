<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateANewQuestionRequestBody;
import org.openapis.openapi.models.operations.CreateANewQuestionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateANewQuestionRequestBody req = new CreateANewQuestionRequestBody() {{
                choices = new String[]{{
                    add("provident"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                question = "unde";
            }}            

            CreateANewQuestionResponse res = sdk.createANewQuestion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->