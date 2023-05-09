# behavior

## Overview

Allows to anonymously report a person behavior. This information is fed to our machine learning platform to determine the reputational score of a person and produces a dataset; thus helping identify easily whether a candidate is reliable or not, based on all of their reputation against feedback reporters, visible via check API or user interface.

### Available Operations

* [reportBehavior](#reportbehavior) - Report Behavior

## reportBehavior

Creates a behavior item to report employee conducts that do not or might not be included in their background check. This report includes both possitive and negative behaviors and sorts them by severity.

### Reasons to report a person

<table>
  <tr>
    <td style="width: 100px"><center><b>Very High</b><br>(Score: 1)</td>
    <td>Rape, Drug Dealing, Sexual Harassment</td>
  </tr>
  <tr>
    <td><center><b>High</b><br>(Score: 0.8)</td>
    <td>Theft, Fights, Aggressive Behaviour, Identity Fraud, Drunk, Drug Possession</td>
  </tr>
  <tr>
    <td><center><b>Medium</b><br>(Score: 0.6)</td>
    <td>Absences</td>
  </tr>
  <tr>
    <td><center><b>Low</b><br>(Score: 0.4)</td>
    <td>Tardiness, Confidentiality Breach</td>
  </tr>
  <tr>
    <td><center><b>None</b><br>(Score: 0)</td>
    <td>Good Reputation</td>
  </tr>
  <tr>
    <td><center><b>Unknown</b></td>
    <td>No information</td>
  </tr>
</table>

**NOTE:** If the reason of your report is not here, please contact Truora support team.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportBehaviorResponse;
import org.openapis.openapi.models.operations.ReportBehaviorSecurity;
import org.openapis.openapi.models.shared.CreateBehaviorInput;
import org.openapis.openapi.models.shared.CreateBehaviorInputCountryEnum;
import org.openapis.openapi.models.shared.CreateBehaviorInputDocumentTypeEnum;
import org.openapis.openapi.models.shared.CreateBehaviorInputReasonEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateBehaviorInput req = new CreateBehaviorInput(OffsetDateTime.parse("2022-02-09T12:04:06.508Z"), CreateBehaviorInputCountryEnum.CO, "delectus", CreateBehaviorInputDocumentTypeEnum.FOREIGNER_CARD, "suscipit", OffsetDateTime.parse("2022-03-18T00:29:19.137Z"), "placeat", "voluptatum", CreateBehaviorInputReasonEnum.IDENTITY_FRAUD) {{
                phoneNumber = "excepturi";
            }};            

            ReportBehaviorResponse res = sdk.behavior.reportBehavior(req, new ReportBehaviorSecurity("nisi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.behaviourOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
