# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/jobs/v3p1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.JobsProjectsClientEventsCreateRequest{
        DollarXgafv: "2",
        CreateClientEventRequest: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: "provident",
                EventID: "distinctio",
                ExtraInfo: map[string]string{
                    "unde": "nulla",
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "magnam",
                        "debitis",
                    },
                    Type: "JOB_EVENT_TYPE_UNSPECIFIED",
                },
                ParentEventID: "delectus",
                RequestID: "tempora",
            },
        },
        AccessToken: "suscipit",
        Alt: "media",
        Callback: "minus",
        Fields: "placeat",
        Key: "voluptatum",
        OauthToken: "iusto",
        Parent: "excepturi",
        PrettyPrint: false,
        QuotaUser: "nisi",
        UploadType: "recusandae",
        UploadProtocol: "temporibus",
    }

    ctx := context.Background()
    res, err := s.Projects.JobsProjectsClientEventsCreate(ctx, req, operations.JobsProjectsClientEventsCreateSecurity{
        Option1: &operations.JobsProjectsClientEventsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientEvent != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `JobsProjectsClientEventsCreate` - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* `JobsProjectsCompaniesCreate` - Creates a new company entity.
* `JobsProjectsCompaniesList` - Lists all companies associated with the service account.
* `JobsProjectsComplete` - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* `JobsProjectsJobsBatchDelete` - Deletes a list of Jobs by filter.
* `JobsProjectsJobsCreate` - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* `JobsProjectsJobsDelete` - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* `JobsProjectsJobsList` - Lists jobs by filter.
* `JobsProjectsJobsPatch` - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* `JobsProjectsJobsSearch` - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* `JobsProjectsJobsSearchForAlert` - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
* `JobsProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
