# companyCodes

### Available Operations

* [getAllCompanyCodesAndDescriptionsByResource](#getallcompanycodesanddescriptionsbyresource) - Get All Company Codes

## getAllCompanyCodesAndDescriptionsByResource

Get All Company Codes for the selected company and resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllCompanyCodesAndDescriptionsByResourceRequest;
import org.openapis.openapi.models.operations.GetAllCompanyCodesAndDescriptionsByResourceResponse;
import org.openapis.openapi.models.operations.GetAllCompanyCodesAndDescriptionsByResourceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllCompanyCodesAndDescriptionsByResourceRequest req = new GetAllCompanyCodesAndDescriptionsByResourceRequest("perferendis", "ipsam");            

            GetAllCompanyCodesAndDescriptionsByResourceResponse res = sdk.companyCodes.getAllCompanyCodesAndDescriptionsByResource(req, new GetAllCompanyCodesAndDescriptionsByResourceSecurity("repellendus") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.companyCodes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
