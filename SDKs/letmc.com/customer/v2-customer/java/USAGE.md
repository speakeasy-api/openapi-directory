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
                    shortName = "non";
                }};
                queryParams = new BranchControllerGetBranchesQueryParams() {{
                    count = 4584259282962304836;
                    offset = 6522010878451485155;
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