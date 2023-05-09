# employeeBenefitSetup

### Available Operations

* [updateOrAddEmployeeBenefitSetup](#updateoraddemployeebenefitsetup) - Add/update employee's benefit setup

## updateOrAddEmployeeBenefitSetup

Sends new or updated employee benefit setup information directly to Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrAddEmployeeBenefitSetupRequest;
import org.openapis.openapi.models.operations.UpdateOrAddEmployeeBenefitSetupResponse;
import org.openapis.openapi.models.operations.UpdateOrAddEmployeeBenefitSetupSecurity;
import org.openapis.openapi.models.shared.BenefitSetup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateOrAddEmployeeBenefitSetupRequest req = new UpdateOrAddEmployeeBenefitSetupRequest(                new BenefitSetup() {{
                                benefitClass = "debitis";
                                benefitClassEffectiveDate = "consectetur";
                                benefitSalary = 3581.07;
                                benefitSalaryEffectiveDate = "harum";
                                doNotApplyAdministrativePeriod = false;
                                isMeasureAcaEligibility = false;
                            }};, "laboriosam", "ipsa");            

            UpdateOrAddEmployeeBenefitSetupResponse res = sdk.employeeBenefitSetup.updateOrAddEmployeeBenefitSetup(req, new UpdateOrAddEmployeeBenefitSetupSecurity("voluptates") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
