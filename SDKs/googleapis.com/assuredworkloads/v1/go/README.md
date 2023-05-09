# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/assuredworkloads/v1/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsOperationsList(ctx, operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        Name: "Ben Mueller",
        OauthToken: sdk.String("iure"),
        PageSize: sdk.Int64(297534),
        PageToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.AssuredworkloadsOrganizationsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Organizations](docs/organizations/README.md)

* [AssuredworkloadsOrganizationsLocationsOperationsList](docs/organizations/README.md#assuredworkloadsorganizationslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [AssuredworkloadsOrganizationsLocationsWorkloadsCreate](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadscreate) - Creates Assured Workload.
* [AssuredworkloadsOrganizationsLocationsWorkloadsDelete](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsdelete) - Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.
* [AssuredworkloadsOrganizationsLocationsWorkloadsList](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadslist) - Lists Assured Workloads under a CRM Node.
* [AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsmutatepartnerpermissions) - Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* [AssuredworkloadsOrganizationsLocationsWorkloadsPatch](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadspatch) - Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* [AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsrestrictallowedresources) - Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
* [AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsviolationsacknowledge) - Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
* [AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGet](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsviolationsget) - Retrieves Assured Workload Violation based on ID.
* [AssuredworkloadsOrganizationsLocationsWorkloadsViolationsList](docs/organizations/README.md#assuredworkloadsorganizationslocationsworkloadsviolationslist) - Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
