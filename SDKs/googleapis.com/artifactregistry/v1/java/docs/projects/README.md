# projects

### Available Operations

* [artifactregistryProjectsLocationsList](#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [artifactregistryProjectsLocationsRepositoriesAptArtifactsImport](#artifactregistryprojectslocationsrepositoriesaptartifactsimport) - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload](#artifactregistryprojectslocationsrepositoriesaptartifactsupload) - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesCreate](#artifactregistryprojectslocationsrepositoriescreate) - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* [artifactregistryProjectsLocationsRepositoriesDockerImagesList](#artifactregistryprojectslocationsrepositoriesdockerimageslist) - Lists docker images.
* [artifactregistryProjectsLocationsRepositoriesFilesList](#artifactregistryprojectslocationsrepositoriesfileslist) - Lists files.
* [artifactregistryProjectsLocationsRepositoriesGetIamPolicy](#artifactregistryprojectslocationsrepositoriesgetiampolicy) - Gets the IAM policy for a given resource.
* [artifactregistryProjectsLocationsRepositoriesGoogetArtifactsImport](#artifactregistryprojectslocationsrepositoriesgoogetartifactsimport) - Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesGoogetArtifactsUpload](#artifactregistryprojectslocationsrepositoriesgoogetartifactsupload) - Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload](#artifactregistryprojectslocationsrepositorieskfpartifactsupload) - Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
* [artifactregistryProjectsLocationsRepositoriesList](#artifactregistryprojectslocationsrepositorieslist) - Lists repositories.
* [artifactregistryProjectsLocationsRepositoriesMavenArtifactsList](#artifactregistryprojectslocationsrepositoriesmavenartifactslist) - Lists maven artifacts.
* [artifactregistryProjectsLocationsRepositoriesNpmPackagesList](#artifactregistryprojectslocationsrepositoriesnpmpackageslist) - Lists npm packages.
* [artifactregistryProjectsLocationsRepositoriesPackagesList](#artifactregistryprojectslocationsrepositoriespackageslist) - Lists packages.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate](#artifactregistryprojectslocationsrepositoriespackagestagscreate) - Creates a tag.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsList](#artifactregistryprojectslocationsrepositoriespackagestagslist) - Lists tags.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch](#artifactregistryprojectslocationsrepositoriespackagestagspatch) - Updates a tag.
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete](#artifactregistryprojectslocationsrepositoriespackagesversionsdelete) - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsList](#artifactregistryprojectslocationsrepositoriespackagesversionslist) - Lists versions.
* [artifactregistryProjectsLocationsRepositoriesPythonPackagesGet](#artifactregistryprojectslocationsrepositoriespythonpackagesget) - Gets a python package.
* [artifactregistryProjectsLocationsRepositoriesPythonPackagesList](#artifactregistryprojectslocationsrepositoriespythonpackageslist) - Lists python packages.
* [artifactregistryProjectsLocationsRepositoriesSetIamPolicy](#artifactregistryprojectslocationsrepositoriessetiampolicy) - Updates the IAM policy for a given resource.
* [artifactregistryProjectsLocationsRepositoriesTestIamPermissions](#artifactregistryprojectslocationsrepositoriestestiampermissions) - Tests if the caller has a list of permissions on a resource.
* [artifactregistryProjectsLocationsRepositoriesYumArtifactsImport](#artifactregistryprojectslocationsrepositoriesyumartifactsimport) - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload](#artifactregistryprojectslocationsrepositoriesyumartifactsupload) - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

## artifactregistryProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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

            ArtifactregistryProjectsLocationsListRequest req = new ArtifactregistryProjectsLocationsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            ArtifactregistryProjectsLocationsListResponse res = sdk.projects.artifactregistryProjectsLocationsList(req, new ArtifactregistryProjectsLocationsListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsListSecurityOption1("veritatis", "deserunt") {{
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

## artifactregistryProjectsLocationsRepositoriesAptArtifactsImport

Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ImportAptArtifactsGcsSource;
import org.openapis.openapi.models.shared.ImportAptArtifactsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest req = new ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                importAptArtifactsRequest = new ImportAptArtifactsRequest() {{
                    gcsSource = new ImportAptArtifactsGcsSource() {{
                        uris = new String[]{{
                            add("sapiente"),
                            add("quo"),
                            add("odit"),
                            add("at"),
                        }};
                        useWildcards = false;
                    }};;
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "quod";
                key = "quod";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "porro";
                uploadProtocol = "dolorum";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesAptArtifactsImport(req, new ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity("dicta", "nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload

Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest req = new ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "fugit".getBytes();
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "totam";
                key = "beatae";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload(req, new ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity("impedit", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.uploadAptArtifactMediaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesCreate

Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesCreateRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesCreateResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DockerRepository;
import org.openapis.openapi.models.shared.DockerRepositoryConfig;
import org.openapis.openapi.models.shared.DockerRepositoryPublicRepositoryEnum;
import org.openapis.openapi.models.shared.MavenRepository;
import org.openapis.openapi.models.shared.MavenRepositoryConfig;
import org.openapis.openapi.models.shared.MavenRepositoryConfigVersionPolicyEnum;
import org.openapis.openapi.models.shared.MavenRepositoryPublicRepositoryEnum;
import org.openapis.openapi.models.shared.NpmRepository;
import org.openapis.openapi.models.shared.NpmRepositoryPublicRepositoryEnum;
import org.openapis.openapi.models.shared.PythonRepository;
import org.openapis.openapi.models.shared.PythonRepositoryPublicRepositoryEnum;
import org.openapis.openapi.models.shared.RemoteRepositoryConfig;
import org.openapis.openapi.models.shared.RepositoryFormatEnum;
import org.openapis.openapi.models.shared.RepositoryInput;
import org.openapis.openapi.models.shared.RepositoryModeEnum;
import org.openapis.openapi.models.shared.UpstreamPolicy;
import org.openapis.openapi.models.shared.VirtualRepositoryConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesCreateRequest req = new ArtifactregistryProjectsLocationsRepositoriesCreateRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                repositoryInput = new RepositoryInput() {{
                    description = "excepturi";
                    dockerConfig = new DockerRepositoryConfig() {{
                        immutableTags = false;
                    }};;
                    format = RepositoryFormatEnum.DOCKER;
                    kmsKeyName = "perferendis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("natus", "sed");
                        put("iste", "dolor");
                    }};
                    mavenConfig = new MavenRepositoryConfig() {{
                        allowSnapshotOverwrites = false;
                        versionPolicy = MavenRepositoryConfigVersionPolicyEnum.RELEASE;
                    }};;
                    mode = RepositoryModeEnum.STANDARD_REPOSITORY;
                    name = "Elias Parker";
                    remoteRepositoryConfig = new RemoteRepositoryConfig() {{
                        description = "iste";
                        dockerRepository = new DockerRepository() {{
                            publicRepository = DockerRepositoryPublicRepositoryEnum.PUBLIC_REPOSITORY_UNSPECIFIED;
                        }};;
                        mavenRepository = new MavenRepository() {{
                            publicRepository = MavenRepositoryPublicRepositoryEnum.MAVEN_CENTRAL;
                        }};;
                        npmRepository = new NpmRepository() {{
                            publicRepository = NpmRepositoryPublicRepositoryEnum.NPMJS;
                        }};;
                        pythonRepository = new PythonRepository() {{
                            publicRepository = PythonRepositoryPublicRepositoryEnum.PUBLIC_REPOSITORY_UNSPECIFIED;
                        }};;
                    }};;
                    virtualRepositoryConfig = new VirtualRepositoryConfig() {{
                        upstreamPolicies = new org.openapis.openapi.models.shared.UpstreamPolicy[]{{
                            add(new UpstreamPolicy() {{
                                id = "faaa2352-c595-4590-baff-1a3a2fa94677";
                                priority = 244425;
                                repository = "error";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                repositoryId = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesCreateResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesCreate(req, new ArtifactregistryProjectsLocationsRepositoriesCreateSecurity("ipsam", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesDockerImagesList

Lists docker images.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesDockerImagesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesDockerImagesListRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "laborum";
                key = "quasi";
                oauthToken = "reiciendis";
                orderBy = "voluptatibus";
                pageSize = 878194L;
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "voluptatibus";
                uploadProtocol = "ipsa";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesDockerImagesList(req, new ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption1("omnis", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDockerImagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesFilesList

Lists files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesFilesListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesFilesListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesFilesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesFilesListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "maiores";
                filter = "dicta";
                key = "corporis";
                oauthToken = "dolore";
                orderBy = "iusto";
                pageSize = 118727L;
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "accusamus";
                uploadProtocol = "commodi";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesFilesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesFilesList(req, new ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1("repudiandae", "quae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listFilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesGetIamPolicy

Gets the IAM policy for a given resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest req = new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "pariatur";
                fields = "modi";
                key = "praesentium";
                oauthToken = "rem";
                optionsRequestedPolicyVersion = 916723L;
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "repudiandae";
                uploadProtocol = "sint";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesGetIamPolicy(req, new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption1("veritatis", "itaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesGoogetArtifactsImport

Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ImportGoogetArtifactsGcsSource;
import org.openapis.openapi.models.shared.ImportGoogetArtifactsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportRequest req = new ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportRequest("incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                importGoogetArtifactsRequest = new ImportGoogetArtifactsRequest() {{
                    gcsSource = new ImportGoogetArtifactsGcsSource() {{
                        uris = new String[]{{
                            add("est"),
                        }};
                        useWildcards = false;
                    }};;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "aliquid";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesGoogetArtifactsImport(req, new ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportSecurity("cupiditate", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesGoogetArtifactsUpload

Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadRequest req = new ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = "assumenda".getBytes();
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesGoogetArtifactsUpload(req, new ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadSecurity("delectus", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.uploadGoogetArtifactMediaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload

Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UploadKfpArtifactRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest req = new ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "sint".getBytes();
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "necessitatibus";
                fields = "sint";
                key = "officia";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "a";
                uploadProtocol = "dolorum";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload(req, new ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity("in", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.uploadKfpArtifactMediaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesList

Lists repositories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesListRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "cumque";
                key = "facere";
                oauthToken = "ea";
                pageSize = 396506L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "non";
                uploadProtocol = "occaecati";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesList(req, new ArtifactregistryProjectsLocationsRepositoriesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesListSecurityOption1("enim", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listRepositoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesMavenArtifactsList

Lists maven artifacts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest req = new ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "blanditiis";
                key = "deleniti";
                oauthToken = "sapiente";
                pageSize = 230533L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "vel";
                uploadProtocol = "natus";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesMavenArtifactsList(req, new ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1("omnis", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listMavenArtifactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesNpmPackagesList

Lists npm packages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "labore";
                key = "labore";
                oauthToken = "suscipit";
                pageSize = 618016L;
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "vero";
                uploadProtocol = "aspernatur";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesNpmPackagesList(req, new ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1("architecto", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listNpmPackagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesList

Lists packages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "sint";
                key = "accusantium";
                oauthToken = "mollitia";
                pageSize = 968962L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "eum";
                uploadProtocol = "dolor";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesList(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1("necessitatibus", "odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listPackagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate

Creates a tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                tag = new Tag() {{
                    name = "Melba Toy";
                    version = "deleniti";
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "architecto";
                key = "repudiandae";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "expedita";
                tagId = "nihil";
                uploadType = "repellat";
                uploadProtocol = "quibusdam";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity("sed", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesTagsList

Lists tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest("pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "magni";
                filter = "sunt";
                key = "quo";
                oauthToken = "illum";
                pageSize = 864934L;
                pageToken = "maxime";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "excepturi";
                uploadProtocol = "odit";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesTagsList(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1("ea", "accusantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch

Updates a tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                tag = new Tag() {{
                    name = "Clyde Kling";
                    version = "eaque";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "perferendis";
                key = "fugiat";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "aut";
                updateMask = "cumque";
                uploadType = "corporis";
                uploadProtocol = "hic";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity("libero", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete

Deletes a version and all of its content. The returned operation will complete once the version has been deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "quis";
                force = false;
                key = "nesciunt";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "dolores";
                uploadProtocol = "minus";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteSecurity("quam", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesVersionsList

Lists versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "facilis";
                key = "perspiciatis";
                oauthToken = "voluptatem";
                orderBy = "porro";
                pageSize = 164694L;
                pageToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "eaque";
                uploadProtocol = "occaecati";
                view = ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum.FULL;
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesVersionsList(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1("adipisci", "asperiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesPythonPackagesGet

Gets a python package.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest req = new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "pariatur";
                key = "provident";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "delectus";
                uploadProtocol = "quaerat";
                view = ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum.BASIC;
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPythonPackagesGet(req, new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1("aliquid", "dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.pythonPackage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesPythonPackagesList

Lists python packages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "excepturi";
                key = "cum";
                oauthToken = "voluptate";
                pageSize = 490459L;
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "dolorum";
                uploadProtocol = "numquam";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPythonPackagesList(req, new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption1("veritatis", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listPythonPackagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesSetIamPolicy

Updates the IAM policy for a given resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest req = new ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "quaerat";
                                    expression = "accusamus";
                                    location = "quidem";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("natus"),
                                    add("eos"),
                                }};
                                role = "atque";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "sit";
                                    expression = "fugiat";
                                    location = "ab";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("iusto"),
                                    add("voluptate"),
                                    add("dolorum"),
                                }};
                                role = "deleniti";
                            }}),
                        }};
                        etag = "omnis";
                        version = 896672;
                    }};;
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "ipsum";
                key = "voluptate";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "eius";
                uploadProtocol = "aspernatur";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesSetIamPolicy(req, new ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity("perferendis", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesTestIamPermissions

Tests if the caller has a list of permissions on a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest req = new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("saepe"),
                        add("suscipit"),
                    }};
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "repellendus";
                key = "totam";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "at";
                uploadProtocol = "quaerat";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesTestIamPermissions(req, new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1("tempora", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesYumArtifactsImport

Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ImportYumArtifactsGcsSource;
import org.openapis.openapi.models.shared.ImportYumArtifactsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest req = new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                importYumArtifactsRequest = new ImportYumArtifactsRequest() {{
                    gcsSource = new ImportYumArtifactsGcsSource() {{
                        uris = new String[]{{
                            add("dolorum"),
                        }};
                        useWildcards = false;
                    }};;
                }};;
                accessToken = "a";
                alt = AltEnum.MEDIA;
                callback = "harum";
                fields = "iusto";
                key = "ipsum";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "amet";
                uploadProtocol = "tempore";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesYumArtifactsImport(req, new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportSecurity("accusamus", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload

Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest req = new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = "sapiente".getBytes();
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "expedita";
                key = "neque";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "libero";
                uploadProtocol = "voluptas";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload(req, new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity("deserunt", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.uploadYumArtifactMediaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
