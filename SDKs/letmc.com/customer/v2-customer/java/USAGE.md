<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BranchControllerGetBranchesRequest;
import org.openapis.openapi.models.operations.BranchControllerGetBranchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BranchControllerGetBranchesRequest req = new BranchControllerGetBranchesRequest() {{
                count = 548814;
                offset = 592845;
                shortName = "distinctio";
            }}            

            BranchControllerGetBranchesResponse res = sdk.branchController.branchControllerGetBranches(req);

            if (res.branchModelResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->