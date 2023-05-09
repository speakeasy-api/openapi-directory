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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Applications.GetApplicationsApplicationID(ctx, operations.GetApplicationsApplicationIDRequest{
        ApplicationID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    })
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


### [Applications](docs/applications/README.md)

* [GetApplicationsApplicationID](docs/applications/README.md#getapplicationsapplicationid) - /applications/{application_id}
* [PostApplications](docs/applications/README.md#postapplications) - /applications
* [PutApplicationsApplicationID](docs/applications/README.md#putapplicationsapplicationid) - /applications/{application_id}

### [Auth](docs/auth/README.md)

* [PostAuthToken](docs/auth/README.md#postauthtoken) - /auth/token

### [Classifications](docs/classifications/README.md)

* [GetClassifications](docs/classifications/README.md#getclassifications) - /classifications/naics_index_entries

### [CoverageParameters](docs/coverageparameters/README.md)

* [GetCoverageParameters](docs/coverageparameters/README.md#getcoverageparameters) - /coverage_parameters

### [Files](docs/files/README.md)

* [GetFilesFileID](docs/files/README.md#getfilesfileid) - /files/{file_id}
* [PostFilesFileIDGetTemporaryLink](docs/files/README.md#postfilesfileidgettemporarylink) - /files/{file_id}/get_temporary_link

### [Institutions](docs/institutions/README.md)

* [GetInstitutions](docs/institutions/README.md#getinstitutions) - /institutions

### [Policies](docs/policies/README.md)

* [GetPoliciesPolicyID](docs/policies/README.md#getpoliciespolicyid) - /policies/{policy_id}
* [PostPolicies](docs/policies/README.md#postpolicies) - /policies

### [Producers](docs/producers/README.md)

* [GetProducers](docs/producers/README.md#getproducers) - /producers

### [Products](docs/products/README.md)

* [GetProducts](docs/products/README.md#getproducts) - /products

### [Quotes](docs/quotes/README.md)

* [GetQuotesQuoteID](docs/quotes/README.md#getquotesquoteid) - /quotes/{quote_id}

### [RiskParameters](docs/riskparameters/README.md)

* [GetRiskParameters](docs/riskparameters/README.md#getriskparameters) - /risk_parameters

### [Submissions](docs/submissions/README.md)

* [GetSubmissionsSubmissionID](docs/submissions/README.md#getsubmissionssubmissionid) - /submissions/{submission_id}
* [PostSubmissions](docs/submissions/README.md#postsubmissions) - /submissions

### [WelcomeAndHealthCheck](docs/welcomeandhealthcheck/README.md)

* [Get](docs/welcomeandhealthcheck/README.md#get) - /
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
