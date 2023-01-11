# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            ArtifactregistryProjectsLocationsListRequest req = new ArtifactregistryProjectsLocationsListRequest() {{
                security = new ArtifactregistryProjectsLocationsListSecurity() {{
                    option1 = new ArtifactregistryProjectsLocationsListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ArtifactregistryProjectsLocationsListPathParams() {{
                    name = "sit";
                }};
                queryParams = new ArtifactregistryProjectsLocationsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    filter = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    pageSize = 1543572285742637646;
                    pageToken = "nihil";
                    prettyPrint = true;
                    quotaUser = "dicta";
                    uploadType = "debitis";
                    uploadProtocol = "voluptatum";
                }};
            }};

            ArtifactregistryProjectsLocationsListResponse res = sdk.projects.artifactregistryProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `artifactregistryProjectsLocationsList` - Lists information about the supported locations for this service.
* `artifactregistryProjectsLocationsRepositoriesAptArtifactsImport` - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* `artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload` - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* `artifactregistryProjectsLocationsRepositoriesCreate` - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* `artifactregistryProjectsLocationsRepositoriesDockerImagesList` - Lists docker images.
* `artifactregistryProjectsLocationsRepositoriesFilesList` - Lists files.
* `artifactregistryProjectsLocationsRepositoriesGetIamPolicy` - Gets the IAM policy for a given resource.
* `artifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload` - Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
* `artifactregistryProjectsLocationsRepositoriesList` - Lists repositories.
* `artifactregistryProjectsLocationsRepositoriesMavenArtifactsList` - Lists maven artifacts.
* `artifactregistryProjectsLocationsRepositoriesNpmPackagesList` - Lists npm packages.
* `artifactregistryProjectsLocationsRepositoriesPackagesList` - Lists packages.
* `artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate` - Creates a tag.
* `artifactregistryProjectsLocationsRepositoriesPackagesTagsList` - Lists tags.
* `artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch` - Updates a tag.
* `artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete` - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* `artifactregistryProjectsLocationsRepositoriesPackagesVersionsList` - Lists versions.
* `artifactregistryProjectsLocationsRepositoriesPythonPackagesGet` - Gets a python package.
* `artifactregistryProjectsLocationsRepositoriesPythonPackagesList` - Lists python packages.
* `artifactregistryProjectsLocationsRepositoriesSetIamPolicy` - Updates the IAM policy for a given resource.
* `artifactregistryProjectsLocationsRepositoriesTestIamPermissions` - Tests if the caller has a list of permissions on a resource.
* `artifactregistryProjectsLocationsRepositoriesYumArtifactsImport` - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* `artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload` - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
