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

import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption2;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateQueryParams;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateResponse;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsCreateRequest req = new YoutubereportingJobsCreateRequest() {{
                security = new YoutubereportingJobsCreateSecurity() {{
                    option1 = new YoutubereportingJobsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new YoutubereportingJobsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    onBehalfOfContentOwner = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new Job() {{
                    createTime = "suscipit";
                    expireTime = "iure";
                    id = "magnam";
                    name = "debitis";
                    reportTypeId = "ipsa";
                    systemManaged = false;
                }};
            }};            

            YoutubereportingJobsCreateResponse res = sdk.jobs.youtubereportingJobsCreate(req);

            if (res.job.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### jobs

* `youtubereportingJobsCreate` - Creates a job and returns it.
* `youtubereportingJobsDelete` - Deletes a job.
* `youtubereportingJobsGet` - Gets a job.
* `youtubereportingJobsList` - Lists jobs.
* `youtubereportingJobsReportsGet` - Gets the metadata of a specific report.
* `youtubereportingJobsReportsList` - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

### media

* `youtubereportingMediaDownload` - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### reportTypes

* `youtubereportingReportTypesList` - Lists report types.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
