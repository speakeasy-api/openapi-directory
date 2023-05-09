# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/artifactregistry/v1beta2/go
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
    res, err := s.Projects.ArtifactregistryProjectsLocationsList(ctx, operations.ArtifactregistryProjectsLocationsListRequest{
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
    }, operations.ArtifactregistryProjectsLocationsListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [ArtifactregistryProjectsLocationsList](docs/projects/README.md#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImport](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesaptartifactsimport) - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUpload](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesaptartifactsupload) - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [ArtifactregistryProjectsLocationsRepositoriesCreate](docs/projects/README.md#artifactregistryprojectslocationsrepositoriescreate) - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* [ArtifactregistryProjectsLocationsRepositoriesFilesList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesfileslist) - Lists files.
* [ArtifactregistryProjectsLocationsRepositoriesGetIamPolicy](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesgetiampolicy) - Gets the IAM policy for a given resource.
* [ArtifactregistryProjectsLocationsRepositoriesList](docs/projects/README.md#artifactregistryprojectslocationsrepositorieslist) - Lists repositories.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackageslist) - Lists packages.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreate](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagestagscreate) - Creates a tag.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesTagsList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagestagslist) - Lists tags.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatch](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagestagspatch) - Updates a tag.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagesversionsdelete) - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGet](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagesversionsget) - Gets a version
* [ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagesversionslist) - Lists versions.
* [ArtifactregistryProjectsLocationsRepositoriesSetIamPolicy](docs/projects/README.md#artifactregistryprojectslocationsrepositoriessetiampolicy) - Updates the IAM policy for a given resource.
* [ArtifactregistryProjectsLocationsRepositoriesTestIamPermissions](docs/projects/README.md#artifactregistryprojectslocationsrepositoriestestiampermissions) - Tests if the caller has a list of permissions on a resource.
* [ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImport](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesyumartifactsimport) - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUpload](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesyumartifactsupload) - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
