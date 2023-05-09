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
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateResponse;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsCreateRequest req = new YoutubereportingJobsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                job = new Job() {{
                    createTime = "provident";
                    expireTime = "distinctio";
                    id = "d9d8d69a-674e-40f4-a7cc-8796ed151a05";
                    name = "Timmy Satterfield";
                    reportTypeId = "at";
                    systemManaged = false;
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "quod";
                key = "esse";
                oauthToken = "totam";
                onBehalfOfContentOwner = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "dicta";
                uploadProtocol = "nam";
            }};            

            YoutubereportingJobsCreateResponse res = sdk.jobs.youtubereportingJobsCreate(req, new YoutubereportingJobsCreateSecurity() {{
                option1 = new YoutubereportingJobsCreateSecurityOption1("officia", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.job != null) {
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


### [jobs](docs/jobs/README.md)

* [youtubereportingJobsCreate](docs/jobs/README.md#youtubereportingjobscreate) - Creates a job and returns it.
* [youtubereportingJobsDelete](docs/jobs/README.md#youtubereportingjobsdelete) - Deletes a job.
* [youtubereportingJobsGet](docs/jobs/README.md#youtubereportingjobsget) - Gets a job.
* [youtubereportingJobsList](docs/jobs/README.md#youtubereportingjobslist) - Lists jobs.
* [youtubereportingJobsReportsGet](docs/jobs/README.md#youtubereportingjobsreportsget) - Gets the metadata of a specific report.
* [youtubereportingJobsReportsList](docs/jobs/README.md#youtubereportingjobsreportslist) - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

### [media](docs/media/README.md)

* [youtubereportingMediaDownload](docs/media/README.md#youtubereportingmediadownload) - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### [reportTypes](docs/reporttypes/README.md)

* [youtubereportingReportTypesList](docs/reporttypes/README.md#youtubereportingreporttypeslist) - Lists report types.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
