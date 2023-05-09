# branchController

### Available Operations

* [branchControllerGetBranches](#branchcontrollergetbranches) - All branches defined for a company
* [getV2CustomerShortNameBranchBranchesBranchID](#getv2customershortnamebranchbranchesbranchid) - Get a specific branch given its unique Object ID (OID)

## branchControllerGetBranches

All branches defined for a company

### Example Usage

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

            BranchControllerGetBranchesRequest req = new BranchControllerGetBranchesRequest(844266, 602763, "nulla");            

            BranchControllerGetBranchesResponse res = sdk.branchController.branchControllerGetBranches(req);

            if (res.branchModelResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2CustomerShortNameBranchBranchesBranchID

Get a specific branch given its unique Object ID (OID)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CustomerShortNameBranchBranchesBranchIDRequest;
import org.openapis.openapi.models.operations.GetV2CustomerShortNameBranchBranchesBranchIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CustomerShortNameBranchBranchesBranchIDRequest req = new GetV2CustomerShortNameBranchBranchesBranchIDRequest("corrupti", "illum");            

            GetV2CustomerShortNameBranchBranchesBranchIDResponse res = sdk.branchController.getV2CustomerShortNameBranchBranchesBranchID(req);

            if (res.branchModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
