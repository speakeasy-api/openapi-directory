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

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationsStatusRequest;
import org.openapis.openapi.models.operations.GetApplicationsStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationsStatusRequest req = new GetApplicationsStatusRequest("provident");            

            GetApplicationsStatusResponse res = sdk.application.getApplicationsStatus(req);

            if (res.applicationStatus != null) {
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


### [application](docs/application/README.md)

* [getApplicationsStatus](docs/application/README.md#getapplicationsstatus) - Used to understand API usage

### [customReports](docs/customreports/README.md)

* [getReportsCustomCreate](docs/customreports/README.md#getreportscustomcreate) - Step 3 of executing custom report
* [getReportsCustomGenerate](docs/customreports/README.md#getreportscustomgenerate) - Step 1 of executing custom report
* [getReportsCustomInsert](docs/customreports/README.md#getreportscustominsert) - Step 2 of executing custom report
* [postReportsCustomCreate](docs/customreports/README.md#postreportscustomcreate) - Step 3 of executing custom report
* [postReportsCustomGenerate](docs/customreports/README.md#postreportscustomgenerate) - Step 1 of executing custom report
* [postReportsCustomInsert](docs/customreports/README.md#postreportscustominsert) - Step 2 of executing custom report

### [followerReports](docs/followerreports/README.md)

* [getReportsTwitterCreate](docs/followerreports/README.md#getreportstwittercreate) - Used to create twitter follower report
* [postReportsTwitterCreate](docs/followerreports/README.md#postreportstwittercreate) - Used to create twitter follower report

### [reports](docs/reports/README.md)

* [getReports](docs/reports/README.md#getreports) - Obtain report output
* [getReportsDates](docs/reports/README.md#getreportsdates) - Get report dates available for a specific report
* [getReportsStatus](docs/reports/README.md#getreportsstatus) - Get list of generated reports
* [postReports](docs/reports/README.md#postreports) - Obtain report output
* [postReportsDates](docs/reports/README.md#postreportsdates) - Get report dates available for a specific report
* [postReportsStatus](docs/reports/README.md#postreportsstatus) - Get list of generated reports

### [tweetReports](docs/tweetreports/README.md)

* [getReportsTweetCreate](docs/tweetreports/README.md#getreportstweetcreate) - Used to create tweet reports
* [postReportsTweetCreate](docs/tweetreports/README.md#postreportstweetcreate) - Used to create tweet reports
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
