<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateContactInMailinglistRequest req = new CreateContactInMailinglistRequest() {{
                pathParams = new CreateContactInMailinglistPathParams() {{
                    directoryId = "et";
                    mailingListId = "voluptate";
                }};
                request = new CreateContactInMailingList() {{
                    email = "iste";
                    firstName = "vitae";
                    lastName = "totam";
                    unsubscribed = true;
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