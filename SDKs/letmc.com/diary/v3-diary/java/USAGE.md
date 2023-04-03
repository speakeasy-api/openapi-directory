<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CompanyControllerGetBranchesRequest;
import org.openapis.openapi.models.operations.CompanyControllerGetBranchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyControllerGetBranchesRequest req = new CompanyControllerGetBranchesRequest() {{
                count = 548814;
                offset = 592845;
                shortName = "distinctio";
            }}            

            CompanyControllerGetBranchesResponse res = sdk.companyController.companyControllerGetBranches(req);

            if (res.advertisingBranchModelResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->