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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ArtifactregistryProjectsLocationsListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Filter: "nulla",
        Key: "corrupti",
        Name: "illum",
        OauthToken: "vel",
        PageSize: 623564,
        PageToken: "deserunt",
        PrettyPrint: false,
        QuotaUser: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
    }

    ctx := context.Background()
    res, err := s.Projects.ArtifactregistryProjectsLocationsList(ctx, req, operations.ArtifactregistryProjectsLocationsListSecurity{
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


### Projects

* `ArtifactregistryProjectsLocationsList` - Lists information about the supported locations for this service.
* `ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImport` - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* `ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUpload` - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* `ArtifactregistryProjectsLocationsRepositoriesCreate` - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* `ArtifactregistryProjectsLocationsRepositoriesFilesList` - Lists files.
* `ArtifactregistryProjectsLocationsRepositoriesGetIamPolicy` - Gets the IAM policy for a given resource.
* `ArtifactregistryProjectsLocationsRepositoriesList` - Lists repositories.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesList` - Lists packages.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreate` - Creates a tag.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesTagsList` - Lists tags.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatch` - Updates a tag.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete` - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* `ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGet` - Gets a version
* `ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsList` - Lists versions.
* `ArtifactregistryProjectsLocationsRepositoriesSetIamPolicy` - Updates the IAM policy for a given resource.
* `ArtifactregistryProjectsLocationsRepositoriesTestIamPermissions` - Tests if the caller has a list of permissions on a resource.
* `ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImport` - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* `ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUpload` - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
