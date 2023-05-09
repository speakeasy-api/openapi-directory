<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionsRequest;
import org.openapis.openapi.models.operations.GetActionsResponse;
import org.openapis.openapi.models.operations.GetActionsSortParameterSortEnum;
import org.openapis.openapi.models.operations.GetActionsStatusParameterStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetActionsRequest req = new GetActionsRequest() {{
                id = 548814L;
                sort = GetActionsSortParameterSortEnum.PROGRESS_ASC;
                status = GetActionsStatusParameterStatusEnum.ERROR;
            }};            

            GetActionsResponse res = sdk.actions.getActions(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->