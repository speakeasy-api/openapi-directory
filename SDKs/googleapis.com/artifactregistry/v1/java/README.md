# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsListRequest req = new ArtifactregistryProjectsLocationsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            ArtifactregistryProjectsLocationsListResponse res = sdk.projects.artifactregistryProjectsLocationsList(req, new ArtifactregistryProjectsLocationsListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsListSecurityOption1("debitis", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [artifactregistryProjectsLocationsList](docs/projects/README.md#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [artifactregistryProjectsLocationsRepositoriesAptArtifactsImport](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesaptartifactsimport) - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesaptartifactsupload) - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesCreate](docs/projects/README.md#artifactregistryprojectslocationsrepositoriescreate) - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* [artifactregistryProjectsLocationsRepositoriesDockerImagesList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesdockerimageslist) - Lists docker images.
* [artifactregistryProjectsLocationsRepositoriesFilesList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesfileslist) - Lists files.
* [artifactregistryProjectsLocationsRepositoriesGetIamPolicy](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesgetiampolicy) - Gets the IAM policy for a given resource.
* [artifactregistryProjectsLocationsRepositoriesGoogetArtifactsImport](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesgoogetartifactsimport) - Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesGoogetArtifactsUpload](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesgoogetartifactsupload) - Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload](docs/projects/README.md#artifactregistryprojectslocationsrepositorieskfpartifactsupload) - Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
* [artifactregistryProjectsLocationsRepositoriesList](docs/projects/README.md#artifactregistryprojectslocationsrepositorieslist) - Lists repositories.
* [artifactregistryProjectsLocationsRepositoriesMavenArtifactsList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesmavenartifactslist) - Lists maven artifacts.
* [artifactregistryProjectsLocationsRepositoriesNpmPackagesList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesnpmpackageslist) - Lists npm packages.
* [artifactregistryProjectsLocationsRepositoriesPackagesList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackageslist) - Lists packages.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagestagscreate) - Creates a tag.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagestagslist) - Lists tags.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagestagspatch) - Updates a tag.
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagesversionsdelete) - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespackagesversionslist) - Lists versions.
* [artifactregistryProjectsLocationsRepositoriesPythonPackagesGet](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespythonpackagesget) - Gets a python package.
* [artifactregistryProjectsLocationsRepositoriesPythonPackagesList](docs/projects/README.md#artifactregistryprojectslocationsrepositoriespythonpackageslist) - Lists python packages.
* [artifactregistryProjectsLocationsRepositoriesSetIamPolicy](docs/projects/README.md#artifactregistryprojectslocationsrepositoriessetiampolicy) - Updates the IAM policy for a given resource.
* [artifactregistryProjectsLocationsRepositoriesTestIamPermissions](docs/projects/README.md#artifactregistryprojectslocationsrepositoriestestiampermissions) - Tests if the caller has a list of permissions on a resource.
* [artifactregistryProjectsLocationsRepositoriesYumArtifactsImport](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesyumartifactsimport) - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload](docs/projects/README.md#artifactregistryprojectslocationsrepositoriesyumartifactsupload) - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
