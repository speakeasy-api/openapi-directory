<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BranchControllerGetBranchesPathParams;
import org.openapis.openapi.models.operations.BranchControllerGetBranchesQueryParams;
import org.openapis.openapi.models.operations.BranchControllerGetBranchesRequest;
import org.openapis.openapi.models.operations.BranchControllerGetBranchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BranchControllerGetBranchesRequest req = new BranchControllerGetBranchesRequest() {{
                pathParams = new BranchControllerGetBranchesPathParams() {{
                    shortName = "corrupti";
                }};
                queryParams = new BranchControllerGetBranchesQueryParams() {{
                    count = 592845;
                    offset = 715190;
                }};
            }};            

            BranchControllerGetBranchesResponse res = sdk.branchController.branchControllerGetBranches(req);

            if (res.branchModelResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->