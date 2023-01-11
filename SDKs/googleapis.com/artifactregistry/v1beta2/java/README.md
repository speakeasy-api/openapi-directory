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
                    name = "voluptatem";
                }};
                queryParams = new ArtifactregistryProjectsLocationsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "qui";
                    alt = "media";
                    callback = "nulla";
                    fields = "qui";
                    filter = "velit";
                    key = "explicabo";
                    oauthToken = "qui";
                    pageSize = 3126614124520816277;
                    pageToken = "debitis";
                    prettyPrint = true;
                    quotaUser = "voluptas";
                    uploadType = "officia";
                    uploadProtocol = "cupiditate";
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
* `artifactregistryProjectsLocationsRepositoriesFilesList` - Lists files.
* `artifactregistryProjectsLocationsRepositoriesGetIamPolicy` - Gets the IAM policy for a given resource.
* `artifactregistryProjectsLocationsRepositoriesList` - Lists repositories.
* `artifactregistryProjectsLocationsRepositoriesPackagesList` - Lists packages.
* `artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate` - Creates a tag.
* `artifactregistryProjectsLocationsRepositoriesPackagesTagsList` - Lists tags.
* `artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch` - Updates a tag.
* `artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete` - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* `artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet` - Gets a version
* `artifactregistryProjectsLocationsRepositoriesPackagesVersionsList` - Lists versions.
* `artifactregistryProjectsLocationsRepositoriesSetIamPolicy` - Updates the IAM policy for a given resource.
* `artifactregistryProjectsLocationsRepositoriesTestIamPermissions` - Tests if the caller has a list of permissions on a resource.
* `artifactregistryProjectsLocationsRepositoriesYumArtifactsImport` - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* `artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload` - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
