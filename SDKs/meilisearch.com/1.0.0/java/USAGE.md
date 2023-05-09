<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrReplaceDocumentsRequest;
import org.openapis.openapi.models.operations.AddOrReplaceDocumentsRequestBody;
import org.openapis.openapi.models.operations.AddOrReplaceDocumentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrReplaceDocumentsRequest req = new AddOrReplaceDocumentsRequest() {{
                requestBody = new org.openapis.openapi.models.operations.AddOrReplaceDocumentsRequestBody[]{{
                    add(new AddOrReplaceDocumentsRequestBody() {{
                        author = "Jane Austen";
                        genre = "romance";
                        id = 2;
                        price = 3.5;
                        title = "Pride and Prejudice";
                    }}),
                    add(new AddOrReplaceDocumentsRequestBody() {{
                        author = "Jane Austen";
                        genre = "romance";
                        id = 2;
                        price = 3.5;
                        title = "Pride and Prejudice";
                    }}),
                    add(new AddOrReplaceDocumentsRequestBody() {{
                        author = "Jane Austen";
                        genre = "romance";
                        id = 2;
                        price = 3.5;
                        title = "Pride and Prejudice";
                    }}),
                }};
                csvDelimiter = ";";
                primaryKey = "id";
            }};            

            AddOrReplaceDocumentsResponse res = sdk.documents.addOrReplaceDocuments(req);

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