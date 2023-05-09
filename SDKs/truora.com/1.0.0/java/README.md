# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            org.openapis.openapi.models.shared.CreateBehaviorInput req = new CreateBehaviorInput(OffsetDateTime.parse("2021-10-25T05:21:43.948Z"), CreateBehaviorInputCountryEnum.CR, "quibusdam", CreateBehaviorInputDocumentTypeEnum.NAME, "nulla", OffsetDateTime.parse("2021-04-22T12:08:58.275Z"), "vel", "error", CreateBehaviorInputReasonEnum.DRUG_POSSESSION) {{
                phoneNumber = "suscipit";
            }};            

            ReportBehaviorResponse res = sdk.behavior.reportBehavior(req, new ReportBehaviorSecurity("iure") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [behavior](docs/behavior/README.md)

* [reportBehavior](docs/behavior/README.md#reportbehavior) - Report Behavior

### [checks](docs/checks/README.md)

* [getHealthDashboard](docs/checks/README.md#gethealthdashboard) - Get Health Dashboard
* [createCheck](docs/checks/README.md#createcheck) - Create a background check
* [getCheck](docs/checks/README.md#getcheck) - Get Background Check
* [listCheckDetails](docs/checks/README.md#listcheckdetails) - List Check Details
* [listChecks](docs/checks/README.md#listchecks) - List Checks

### [continuous](docs/continuous/README.md)

* [getContinuousCheck](docs/continuous/README.md#getcontinuouscheck) - Lists history associated with a Check. It can be paginated
* [listContinuousChecks](docs/continuous/README.md#listcontinuouschecks) - Lists all continuous checks
* [updateContinuousCheck](docs/continuous/README.md#updatecontinuouscheck) - Updates a continuous check
* [createContinuousCheck](docs/continuous/README.md#createcontinuouscheck) - Creates a continuous check that will run background checks recurrently according to the frequency provided.
* [getV1ContinuousChecksContinuousCheckIdHistory](docs/continuous/README.md#getv1continuouscheckscontinuouscheckidhistory) - Lists background check logs. It can be paginated


### [customType](docs/customtype/README.md)

* [deleteCustomType](docs/customtype/README.md#deletecustomtype) - Delete Custom Type
* [updateCustomType](docs/customtype/README.md#updatecustomtype) - Update Custom Type
* [createScoreConfig](docs/customtype/README.md#createscoreconfig) - Create Score Configurations
* [listScoreConfigs](docs/customtype/README.md#listscoreconfigs) - List Score Configurations

### [hooks](docs/hooks/README.md)

* [createHook](docs/hooks/README.md#createhook) - Creates a hook subscription
* [deletHook](docs/hooks/README.md#delethook) - Deletes hook
* [listHook](docs/hooks/README.md#listhook) - Lists all hooks
* [updateHook](docs/hooks/README.md#updatehook) - Updates hook

### [pdf](docs/pdf/README.md)

* [createPDF](docs/pdf/README.md#createpdf) - Create PDF
* [getPDF](docs/pdf/README.md#getpdf) - Get PDF

### [reports](docs/reports/README.md)

* [batchUpload](docs/reports/README.md#batchupload) - Batch Upload
* [createReport](docs/reports/README.md#createreport) - Create Report
* [getReport](docs/reports/README.md#getreport) - Get Report
* [listReports](docs/reports/README.md#listreports) - List Reports
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
