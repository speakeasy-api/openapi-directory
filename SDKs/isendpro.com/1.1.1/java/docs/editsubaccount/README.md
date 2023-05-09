# editSubaccount

### Available Operations

* [subaccountEdit](#subaccountedit) - Edit a subaccount

## subaccountEdit

Edit a subaccount

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubaccountEditResponse;
import org.openapis.openapi.models.shared.SubaccountRequest;
import org.openapis.openapi.models.shared.SubaccountRequestSubAccountEditEnum;
import org.openapis.openapi.models.shared.SubaccountRequestSubAccountRestrictionStopEnum;
import org.openapis.openapi.models.shared.SubaccountRequestSubAccountRestrictionTimeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubaccountRequest req = new SubaccountRequest("iusto", SubaccountRequestSubAccountEditEnum.ADD_CREDIT) {{
                subAccountAddCredit = "nisi";
                subAccountCountryCode = "recusandae";
                subAccountKeyId = "temporibus";
                subAccountPrice = "ab";
                subAccountRestrictionStop = SubaccountRequestSubAccountRestrictionStopEnum.ZERO;
                subAccountRestrictionTime = SubaccountRequestSubAccountRestrictionTimeEnum.ZERO;
            }};            

            SubaccountEditResponse res = sdk.editSubaccount.subaccountEdit(req);

            if (res.subaccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
