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

            BranchControllerGetBranchesRequest req = new BranchControllerGetBranchesRequest() {{
                pathParams = new BranchControllerGetBranchesPathParams() {{
                    shortName = "sit";
                }};
                queryParams = new BranchControllerGetBranchesQueryParams() {{
                    count = 2259404117704393152;
                    offset = 6050128673802995827;
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