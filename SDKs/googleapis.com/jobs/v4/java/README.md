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

import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurityOption2;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreatePathParams;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateQueryParams;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateResponse;
import org.openapis.openapi.models.shared.ClientEvent;
import org.openapis.openapi.models.shared.JobEventTypeEnum;
import org.openapis.openapi.models.shared.JobEvent;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsClientEventsCreateRequest req = new JobsProjectsTenantsClientEventsCreateRequest() {{
                security = new JobsProjectsTenantsClientEventsCreateSecurity() {{
                    option1 = new JobsProjectsTenantsClientEventsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new JobsProjectsTenantsClientEventsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new JobsProjectsTenantsClientEventsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new ClientEvent() {{
                    createTime = "suscipit";
                    eventId = "iure";
                    eventNotes = "magnam";
                    jobEvent = new JobEvent() {{
                        jobs = new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }};
                        type = "APPLICATION_REDIRECT";
                    }};
                    requestId = "minus";
                }};
            }};            

            JobsProjectsTenantsClientEventsCreateResponse res = sdk.projects.jobsProjectsTenantsClientEventsCreate(req);

            if (res.clientEvent.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `jobsProjectsTenantsClientEventsCreate` - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* `jobsProjectsTenantsCompaniesCreate` - Creates a new company entity.
* `jobsProjectsTenantsCompaniesList` - Lists all companies associated with the project.
* `jobsProjectsTenantsCompleteQuery` - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* `jobsProjectsTenantsCreate` - Creates a new tenant entity.
* `jobsProjectsTenantsJobsBatchCreate` - Begins executing a batch create jobs operation.
* `jobsProjectsTenantsJobsBatchDelete` - Begins executing a batch delete jobs operation.
* `jobsProjectsTenantsJobsBatchUpdate` - Begins executing a batch update jobs operation.
* `jobsProjectsTenantsJobsCreate` - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* `jobsProjectsTenantsJobsDelete` - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* `jobsProjectsTenantsJobsGet` - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* `jobsProjectsTenantsJobsList` - Lists jobs by filter.
* `jobsProjectsTenantsJobsPatch` - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* `jobsProjectsTenantsJobsSearch` - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* `jobsProjectsTenantsJobsSearchForAlert` - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
* `jobsProjectsTenantsList` - Lists all tenants associated with the project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
