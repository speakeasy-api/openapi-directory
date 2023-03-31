<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateContactInMailinglistPathParams;
import org.openapis.openapi.models.operations.CreateContactInMailinglistRequest;
import org.openapis.openapi.models.operations.CreateContactInMailinglistResponse;
import org.openapis.openapi.models.shared.CreateContactInMailingList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateContactInMailinglistRequest req = new CreateContactInMailinglistRequest() {{
                pathParams = new CreateContactInMailinglistPathParams() {{
                    directoryId = "corrupti";
                    mailingListId = "provident";
                }};
                request = new CreateContactInMailingList() {{
                    email = "Rosalinda_Mitchell84@hotmail.com";
                    firstName = "Henry";
                    lastName = "Mueller";
                    unsubscribed = false;
                }};
            }};            

            CreateContactInMailinglistResponse res = sdk.createContactInMailinglist(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->