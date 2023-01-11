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

            GetActionsRequest req = new GetActionsRequest() {{
                queryParams = new GetActionsQueryParams() {{
                    id = 371370274143225203;
                    sort = "command:asc";
                    status = "error";
                }};
            }};

            GetActionsResponse res = sdk.actions.getActions(req);

            if (res.actionsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->