<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest;
import org.openapis.openapi.models.operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody;
import org.openapis.openapi.models.operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest req = new ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest(                new ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody(                new String[]{{
                                                add("provident"),
                                                add("distinctio"),
                                                add("quibusdam"),
                                            }});, "unde", 857946L);            

            ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponse res = sdk.actions.actionsAddCustomLabelsToSelfHostedRunnerForOrg(req);

            if (res.actionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->