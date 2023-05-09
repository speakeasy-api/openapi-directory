# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/run/v1/go
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
    res, err := s.Namespaces.RunNamespacesAuthorizeddomainsList(ctx, operations.RunNamespacesAuthorizeddomainsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PageSize: sdk.Int64(847252),
        PageToken: sdk.String("vel"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.RunNamespacesAuthorizeddomainsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedDomainsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Namespaces](docs/namespaces/README.md)

* [RunNamespacesAuthorizeddomainsList](docs/namespaces/README.md#runnamespacesauthorizeddomainslist) - List authorized domains.
* [RunNamespacesConfigurationsList](docs/namespaces/README.md#runnamespacesconfigurationslist) - List configurations.
* [RunNamespacesDomainmappingsCreate](docs/namespaces/README.md#runnamespacesdomainmappingscreate) - Create a new domain mapping.
* [RunNamespacesDomainmappingsDelete](docs/namespaces/README.md#runnamespacesdomainmappingsdelete) - Delete a domain mapping.
* [RunNamespacesDomainmappingsGet](docs/namespaces/README.md#runnamespacesdomainmappingsget) - Get information about a domain mapping.
* [RunNamespacesDomainmappingsList](docs/namespaces/README.md#runnamespacesdomainmappingslist) - List all domain mappings.
* [RunNamespacesExecutionsCancel](docs/namespaces/README.md#runnamespacesexecutionscancel) - Cancel an execution.
* [RunNamespacesExecutionsList](docs/namespaces/README.md#runnamespacesexecutionslist) - List executions.
* [RunNamespacesJobsCreate](docs/namespaces/README.md#runnamespacesjobscreate) - Create a job.
* [RunNamespacesJobsDelete](docs/namespaces/README.md#runnamespacesjobsdelete) - Delete a job.
* [RunNamespacesJobsList](docs/namespaces/README.md#runnamespacesjobslist) - List jobs.
* [RunNamespacesJobsReplaceJob](docs/namespaces/README.md#runnamespacesjobsreplacejob) - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [RunNamespacesJobsRun](docs/namespaces/README.md#runnamespacesjobsrun) - Trigger creation of a new execution of this job.
* [RunNamespacesRevisionsList](docs/namespaces/README.md#runnamespacesrevisionslist) - List revisions.
* [RunNamespacesRoutesList](docs/namespaces/README.md#runnamespacesrouteslist) - List routes.
* [RunNamespacesServicesCreate](docs/namespaces/README.md#runnamespacesservicescreate) - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* [RunNamespacesServicesDelete](docs/namespaces/README.md#runnamespacesservicesdelete) - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* [RunNamespacesServicesGet](docs/namespaces/README.md#runnamespacesservicesget) - Gets information about a service.
* [RunNamespacesServicesList](docs/namespaces/README.md#runnamespacesserviceslist) - Lists services for the given project and region.
* [RunNamespacesServicesReplaceService](docs/namespaces/README.md#runnamespacesservicesreplaceservice) - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [RunNamespacesTasksGet](docs/namespaces/README.md#runnamespacestasksget) - Get information about a task.
* [RunNamespacesTasksList](docs/namespaces/README.md#runnamespacestaskslist) - List tasks.

### [Projects](docs/projects/README.md)

* [RunProjectsLocationsAuthorizeddomainsList](docs/projects/README.md#runprojectslocationsauthorizeddomainslist) - List authorized domains.
* [RunProjectsLocationsConfigurationsList](docs/projects/README.md#runprojectslocationsconfigurationslist) - List configurations.
* [RunProjectsLocationsDomainmappingsCreate](docs/projects/README.md#runprojectslocationsdomainmappingscreate) - Create a new domain mapping.
* [RunProjectsLocationsDomainmappingsList](docs/projects/README.md#runprojectslocationsdomainmappingslist) - List all domain mappings.
* [RunProjectsLocationsList](docs/projects/README.md#runprojectslocationslist) - Lists information about the supported locations for this service.
* [RunProjectsLocationsRevisionsList](docs/projects/README.md#runprojectslocationsrevisionslist) - List revisions.
* [RunProjectsLocationsRoutesList](docs/projects/README.md#runprojectslocationsrouteslist) - List routes.
* [RunProjectsLocationsServicesCreate](docs/projects/README.md#runprojectslocationsservicescreate) - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* [RunProjectsLocationsServicesDelete](docs/projects/README.md#runprojectslocationsservicesdelete) - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* [RunProjectsLocationsServicesGet](docs/projects/README.md#runprojectslocationsservicesget) - Gets information about a service.
* [RunProjectsLocationsServicesGetIamPolicy](docs/projects/README.md#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
* [RunProjectsLocationsServicesList](docs/projects/README.md#runprojectslocationsserviceslist) - Lists services for the given project and region.
* [RunProjectsLocationsServicesReplaceService](docs/projects/README.md#runprojectslocationsservicesreplaceservice) - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [RunProjectsLocationsServicesSetIamPolicy](docs/projects/README.md#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [RunProjectsLocationsServicesTestIamPermissions](docs/projects/README.md#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
