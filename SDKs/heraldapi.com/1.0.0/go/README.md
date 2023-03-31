# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/heraldapi.com/1.0.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    req := operations.GetApplicationsApplicationIDRequest{
        ApplicationID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    }

    ctx := context.Background()
    res, err := s.Applications.GetApplicationsApplicationID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationsApplicationID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Applications

* `GetApplicationsApplicationID` - /applications/{application_id}
* `PostApplications` - /applications
* `PutApplicationsApplicationID` - /applications/{application_id}

### Auth

* `PostAuthToken` - /auth/token

### Classifications

* `GetClassifications` - /classifications/naics_index_entries

### CoverageParameters

* `GetCoverageParameters` - /coverage_parameters

### Files

* `GetFilesFileID` - /files/{file_id}
* `PostFilesFileIDGetTemporaryLink` - /files/{file_id}/get_temporary_link

### Institutions

* `GetInstitutions` - /institutions

### Policies

* `GetPoliciesPolicyID` - /policies/{policy_id}
* `PostPolicies` - /policies

### Producers

* `GetProducers` - /producers

### Products

* `GetProducts` - /products

### Quotes

* `GetQuotesQuoteID` - /quotes/{quote_id}

### RiskParameters

* `GetRiskParameters` - /risk_parameters

### Submissions

* `GetSubmissionsSubmissionID` - /submissions/{submission_id}
* `PostSubmissions` - /submissions

### WelcomeAndHealthCheck

* `Get` - /
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
