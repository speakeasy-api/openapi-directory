# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/bcdc/3.0.1/go
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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationActivityList(ctx, operations.GetActionOrganizationActivityListRequest{
        ID: sdk.String("89bd9d8d-69a6-474e-8f46-7cc8796ed151"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Action](docs/action/README.md)

* [GetActionOrganizationActivityList](docs/action/README.md#getactionorganizationactivitylist) - Get the activity stream of an organization
* [GetActionOrganizationActivityListHTML](docs/action/README.md#getactionorganizationactivitylisthtml) - Get the activity stream of an organization, HTML format
* [GetActionOrganizationAutocomplete](docs/action/README.md#getactionorganizationautocomplete) - Get names of organizations that match a query string
* [GetActionOrganizationFollowerCount](docs/action/README.md#getactionorganizationfollowercount) - Get number of followers of an organization
* [GetActionOrganizationFollowerList](docs/action/README.md#getactionorganizationfollowerlist) - Get users following an organization
* [GetActionOrganizationList](docs/action/README.md#getactionorganizationlist) - Get names of all organizations
* [GetActionOrganizationListForUser](docs/action/README.md#getactionorganizationlistforuser) - Get organizations that a user has a given permission for
* [GetActionOrganizationRevisionList](docs/action/README.md#getactionorganizationrevisionlist) - Get organization revisions
* [GetActionOrganizationShow](docs/action/README.md#getactionorganizationshow) - Get details of a specific organization
* [GetActionPackageActivityList](docs/action/README.md#getactionpackageactivitylist) - Get the activity stream of a package (dataset)
* [GetActionPackageActivityListHTML](docs/action/README.md#getactionpackageactivitylisthtml) - Get the activity stream of a package (dataset), HTML format
* [GetActionPackageAutocomplete](docs/action/README.md#getactionpackageautocomplete) - Find packages (datasets) matching a query
* [GetActionPackageList](docs/action/README.md#getactionpackagelist) - Get a list of all packages (datasets)
* [GetActionPackageRelationshipsList](docs/action/README.md#getactionpackagerelationshipslist) - Get package (dataset) relationships
* [GetActionPackageRevisionList](docs/action/README.md#getactionpackagerevisionlist) - Get list of revisions for a package (dataset)
* [GetActionPackageSearch](docs/action/README.md#getactionpackagesearch) - Find packages (datasets) matching query terms
* [GetActionPackageShow](docs/action/README.md#getactionpackageshow) - Get metadata about one specific package (dataset)
* [GetActionRelatedList](docs/action/README.md#getactionrelatedlist) - Gets items related to a package (dataset)
* [GetActionResourceSearch](docs/action/README.md#getactionresourcesearch) - Find resources
* [GetActionResourceShow](docs/action/README.md#getactionresourceshow) - Get metadata for a specific resource
* [GetActionStatusShow](docs/action/README.md#getactionstatusshow) - Get the site status
* [GetActionTagList](docs/action/README.md#getactiontaglist) - Get a list of tags
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
