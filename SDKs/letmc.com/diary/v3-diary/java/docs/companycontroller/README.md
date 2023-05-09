# companyController

### Available Operations

* [companyControllerGetBranches](#companycontrollergetbranches) - All branches defined for a company
* [getV3DiaryShortNameCompanyBranchesBranchID](#getv3diaryshortnamecompanybranchesbranchid) - Get a specific branch given its unique Object ID (OID)

## companyControllerGetBranches

All branches defined for a company

### Example Usage

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

            CompanyControllerGetBranchesRequest req = new CompanyControllerGetBranchesRequest(844266, 602763, "nulla");            

            CompanyControllerGetBranchesResponse res = sdk.companyController.companyControllerGetBranches(req);

            if (res.advertisingBranchModelResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV3DiaryShortNameCompanyBranchesBranchID

Get a specific branch given its unique Object ID (OID)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV3DiaryShortNameCompanyBranchesBranchIDRequest;
import org.openapis.openapi.models.operations.GetV3DiaryShortNameCompanyBranchesBranchIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV3DiaryShortNameCompanyBranchesBranchIDRequest req = new GetV3DiaryShortNameCompanyBranchesBranchIDRequest("corrupti", "illum");            

            GetV3DiaryShortNameCompanyBranchesBranchIDResponse res = sdk.companyController.getV3DiaryShortNameCompanyBranchesBranchID(req);

            if (res.advertisingBranchModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
