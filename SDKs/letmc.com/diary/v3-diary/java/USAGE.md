<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CompanyControllerGetBranchesPathParams;
import org.openapis.openapi.models.operations.CompanyControllerGetBranchesQueryParams;
import org.openapis.openapi.models.operations.CompanyControllerGetBranchesRequest;
import org.openapis.openapi.models.operations.CompanyControllerGetBranchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyControllerGetBranchesRequest req = new CompanyControllerGetBranchesRequest() {{
                pathParams = new CompanyControllerGetBranchesPathParams() {{
                    shortName = "corrupti";
                }};
                queryParams = new CompanyControllerGetBranchesQueryParams() {{
                    count = 592845;
                    offset = 715190;
                }};
            }};            

            CompanyControllerGetBranchesResponse res = sdk.companyController.companyControllerGetBranches(req);

            if (res.advertisingBranchModelResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->