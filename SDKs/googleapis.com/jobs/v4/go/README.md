# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/jobs/v4/go
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

    req := operations.JobsProjectsTenantsClientEventsCreateRequest{
        DollarXgafv: "2",
        ClientEvent: &shared.ClientEvent{
            CreateTime: "provident",
            EventID: "distinctio",
            EventNotes: "quibusdam",
            JobEvent: &shared.JobEvent{
                Jobs: []string{
                    "nulla",
                    "corrupti",
                    "illum",
                },
                Type: "APPLICATION_QUICK_SUBMISSION",
            },
            RequestID: "error",
        },
        AccessToken: "deserunt",
        Alt: "media",
        Callback: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        Parent: "delectus",
        PrettyPrint: false,
        QuotaUser: "tempora",
        UploadType: "suscipit",
        UploadProtocol: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Projects.JobsProjectsTenantsClientEventsCreate(ctx, req, operations.JobsProjectsTenantsClientEventsCreateSecurity{
        Option1: &operations.JobsProjectsTenantsClientEventsCreateSecurityOption1{
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

* `JobsProjectsTenantsClientEventsCreate` - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* `JobsProjectsTenantsCompaniesCreate` - Creates a new company entity.
* `JobsProjectsTenantsCompaniesList` - Lists all companies associated with the project.
* `JobsProjectsTenantsCompleteQuery` - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* `JobsProjectsTenantsCreate` - Creates a new tenant entity.
* `JobsProjectsTenantsJobsBatchCreate` - Begins executing a batch create jobs operation.
* `JobsProjectsTenantsJobsBatchDelete` - Begins executing a batch delete jobs operation.
* `JobsProjectsTenantsJobsBatchUpdate` - Begins executing a batch update jobs operation.
* `JobsProjectsTenantsJobsCreate` - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* `JobsProjectsTenantsJobsDelete` - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* `JobsProjectsTenantsJobsGet` - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* `JobsProjectsTenantsJobsList` - Lists jobs by filter.
* `JobsProjectsTenantsJobsPatch` - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* `JobsProjectsTenantsJobsSearch` - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* `JobsProjectsTenantsJobsSearchForAlert` - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
* `JobsProjectsTenantsList` - Lists all tenants associated with the project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
