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

            ActionHelpRequest req = new ActionHelpRequest() {{
                pathParams = new ActionHelpPathParams() {{
                    actionId = "magni";
                    serviceId = "optio";
                }};
            }};

            ActionHelpResponse res = sdk.osdb.actionHelp(req);

            if (res.actionHelpResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->