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
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientEvent;
import org.openapis.openapi.models.shared.CreateClientEventRequest;
import org.openapis.openapi.models.shared.JobEvent;
import org.openapis.openapi.models.shared.JobEventTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsClientEventsCreateRequest req = new JobsProjectsClientEventsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                createClientEventRequest = new CreateClientEventRequest() {{
                    clientEvent = new ClientEvent() {{
                        createTime = "distinctio";
                        eventId = "quibusdam";
                        extraInfo = new java.util.HashMap<String, String>() {{
                            put("nulla", "corrupti");
                            put("illum", "vel");
                            put("error", "deserunt");
                        }};
                        jobEvent = new JobEvent() {{
                            jobs = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                            type = JobEventTypeEnum.INTERVIEW_GRANTED;
                        }};;
                        parentEventId = "ipsa";
                        requestId = "delectus";
                    }};;
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            JobsProjectsClientEventsCreateResponse res = sdk.projects.jobsProjectsClientEventsCreate(req, new JobsProjectsClientEventsCreateSecurity() {{
                option1 = new JobsProjectsClientEventsCreateSecurityOption1("recusandae", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.clientEvent != null) {
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


### [projects](docs/projects/README.md)

* [jobsProjectsClientEventsCreate](docs/projects/README.md#jobsprojectsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [jobsProjectsCompaniesCreate](docs/projects/README.md#jobsprojectscompaniescreate) - Creates a new company entity.
* [jobsProjectsCompaniesList](docs/projects/README.md#jobsprojectscompanieslist) - Lists all companies associated with the service account.
* [jobsProjectsComplete](docs/projects/README.md#jobsprojectscomplete) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [jobsProjectsJobsBatchDelete](docs/projects/README.md#jobsprojectsjobsbatchdelete) - Deletes a list of Jobs by filter.
* [jobsProjectsJobsCreate](docs/projects/README.md#jobsprojectsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsDelete](docs/projects/README.md#jobsprojectsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsGet](docs/projects/README.md#jobsprojectsjobsget) - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* [jobsProjectsJobsList](docs/projects/README.md#jobsprojectsjobslist) - Lists jobs by filter.
* [jobsProjectsJobsPatch](docs/projects/README.md#jobsprojectsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsSearch](docs/projects/README.md#jobsprojectsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [jobsProjectsJobsSearchForAlert](docs/projects/README.md#jobsprojectsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
