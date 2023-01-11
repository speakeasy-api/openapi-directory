# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            JobsProjectsClientEventsCreateRequest req = new JobsProjectsClientEventsCreateRequest() {{
                security = new JobsProjectsClientEventsCreateSecurity() {{
                    option1 = new JobsProjectsClientEventsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new JobsProjectsClientEventsCreatePathParams() {{
                    parent = "mollitia";
                }};
                queryParams = new JobsProjectsClientEventsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "commodi";
                    alt = "media";
                    callback = "occaecati";
                    fields = "qui";
                    key = "rerum";
                    oauthToken = "eos";
                    prettyPrint = true;
                    quotaUser = "est";
                    uploadType = "cupiditate";
                    uploadProtocol = "quas";
                }};
                request = new CreateClientEventRequest() {{
                    clientEvent = new ClientEvent() {{
                        createTime = "laborum";
                        eventId = "vel";
                        extraInfo = new java.util.HashMap<String, String>() {{
                            put("omnis", "est");
                            put("ut", "rerum");
                        }};
                        jobEvent = new JobEvent() {{
                            jobs = new String[]() {{
                                add("sit"),
                                add("praesentium"),
                                add("at"),
                            }};
                            type = "JOB_EVENT_TYPE_UNSPECIFIED";
                        }};
                        parentEventId = "voluptatem";
                        requestId = "accusantium";
                    }};
                }};
            }};

            JobsProjectsClientEventsCreateResponse res = sdk.projects.jobsProjectsClientEventsCreate(req);

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

* `jobsProjectsClientEventsCreate` - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* `jobsProjectsCompaniesCreate` - Creates a new company entity.
* `jobsProjectsCompaniesList` - Lists all companies associated with the service account.
* `jobsProjectsComplete` - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* `jobsProjectsJobsBatchDelete` - Deletes a list of Jobs by filter.
* `jobsProjectsJobsCreate` - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* `jobsProjectsJobsDelete` - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* `jobsProjectsJobsGet` - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* `jobsProjectsJobsList` - Lists jobs by filter.
* `jobsProjectsJobsPatch` - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* `jobsProjectsJobsSearch` - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* `jobsProjectsJobsSearchForAlert` - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
