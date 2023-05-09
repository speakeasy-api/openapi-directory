# projects

### Available Operations

* [artifactregistryProjectsLocationsList](#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [artifactregistryProjectsLocationsRepositoriesAptArtifactsImport](#artifactregistryprojectslocationsrepositoriesaptartifactsimport) - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload](#artifactregistryprojectslocationsrepositoriesaptartifactsupload) - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesCreate](#artifactregistryprojectslocationsrepositoriescreate) - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* [artifactregistryProjectsLocationsRepositoriesFilesList](#artifactregistryprojectslocationsrepositoriesfileslist) - Lists files.
* [artifactregistryProjectsLocationsRepositoriesGetIamPolicy](#artifactregistryprojectslocationsrepositoriesgetiampolicy) - Gets the IAM policy for a given resource.
* [artifactregistryProjectsLocationsRepositoriesList](#artifactregistryprojectslocationsrepositorieslist) - Lists repositories.
* [artifactregistryProjectsLocationsRepositoriesPackagesList](#artifactregistryprojectslocationsrepositoriespackageslist) - Lists packages.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate](#artifactregistryprojectslocationsrepositoriespackagestagscreate) - Creates a tag.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsList](#artifactregistryprojectslocationsrepositoriespackagestagslist) - Lists tags.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch](#artifactregistryprojectslocationsrepositoriespackagestagspatch) - Updates a tag.
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete](#artifactregistryprojectslocationsrepositoriespackagesversionsdelete) - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet](#artifactregistryprojectslocationsrepositoriespackagesversionsget) - Gets a version
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsList](#artifactregistryprojectslocationsrepositoriespackagesversionslist) - Lists versions.
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
import org.openapis.openapi.models.shared.MavenRepositoryConfig;
import org.openapis.openapi.models.shared.MavenRepositoryConfigVersionPolicyEnum;
import org.openapis.openapi.models.shared.RepositoryFormatEnum;
import org.openapis.openapi.models.shared.RepositoryInput;
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
                    name = "May Turcotte";
                }};;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "saepe";
                key = "quidem";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "ipsa";
                repositoryId = "reiciendis";
                uploadType = "est";
                uploadProtocol = "mollitia";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesCreateResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesCreate(req, new ArtifactregistryProjectsLocationsRepositoriesCreateSecurity("laborum", "dolores") {{
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

            ArtifactregistryProjectsLocationsRepositoriesFilesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesFilesListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "omnis";
                filter = "nemo";
                key = "minima";
                oauthToken = "excepturi";
                pageSize = 38425L;
                pageToken = "iure";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "doloribus";
                uploadProtocol = "sapiente";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesFilesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesFilesList(req, new ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1("architecto", "mollitia") {{
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

            ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest req = new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "occaecati";
                key = "numquam";
                oauthToken = "commodi";
                optionsRequestedPolicyVersion = 466311L;
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "velit";
                uploadProtocol = "error";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesGetIamPolicy(req, new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption1("quia", "quis") {{
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

            ArtifactregistryProjectsLocationsRepositoriesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesListRequest("vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "quo";
                key = "sequi";
                oauthToken = "tenetur";
                pageSize = 368725L;
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "aut";
                uploadProtocol = "quasi";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesList(req, new ArtifactregistryProjectsLocationsRepositoriesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesListSecurityOption1("error", "temporibus") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                key = "praesentium";
                oauthToken = "voluptatibus";
                pageSize = 55714L;
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "cum";
                uploadProtocol = "perferendis";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesList(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1("doloremque", "reprehenderit") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                tag = new Tag() {{
                    name = "Stacy Gulgowski MD";
                    version = "enim";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "quae";
                key = "ipsum";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestias";
                tagId = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity("praesentium", "rem") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "itaque";
                filter = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                pageSize = 667411L;
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "deserunt";
                uploadProtocol = "distinctio";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesTagsList(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1("quibusdam", "labore") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                tag = new Tag() {{
                    name = "Mr. Shelly Lueilwitz";
                    version = "ipsam";
                }};;
                accessToken = "alias";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "excepturi";
                key = "tempora";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "tempore";
                updateMask = "labore";
                uploadType = "delectus";
                uploadProtocol = "eum";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity("non", "eligendi") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "officia";
                force = false;
                key = "dolor";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "dolorum";
                uploadProtocol = "in";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteSecurity("in", "illum") {{
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

## artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet

Gets a version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "facere";
                key = "ea";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "accusamus";
                uploadProtocol = "non";
                view = ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum.BASIC;
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1("enim", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.version != null) {
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "blanditiis";
                key = "deleniti";
                oauthToken = "sapiente";
                orderBy = "amet";
                pageSize = 643990L;
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "natus";
                uploadProtocol = "omnis";
                view = ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum.BASIC;
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesVersionsList(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1("perferendis", "nihil") {{
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

            ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest req = new ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "labore";
                                    expression = "labore";
                                    location = "suscipit";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("eum"),
                                    add("vero"),
                                    add("aspernatur"),
                                }};
                                role = "architecto";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "magnam";
                                    expression = "et";
                                    location = "excepturi";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("quos"),
                                    add("sint"),
                                    add("accusantium"),
                                }};
                                role = "mollitia";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "reiciendis";
                                    expression = "mollitia";
                                    location = "ad";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("necessitatibus"),
                                }};
                                role = "odit";
                            }}),
                        }};
                        etag = "nemo";
                        version = 97260;
                    }};;
                }};;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "eius";
                key = "maxime";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "in";
                uploadProtocol = "architecto";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesSetIamPolicy(req, new ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity("architecto", "repudiandae") {{
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

            ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest req = new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("repellat"),
                        add("quibusdam"),
                    }};
                }};;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "accusantium";
                key = "consequuntur";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "magni";
                uploadProtocol = "sunt";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesTestIamPermissions(req, new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1("quo", "illum") {{
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

            ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest req = new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                importYumArtifactsRequest = new ImportYumArtifactsRequest() {{
                    gcsSource = new ImportYumArtifactsGcsSource() {{
                        uris = new String[]{{
                            add("excepturi"),
                            add("odit"),
                        }};
                        useWildcards = false;
                    }};;
                }};;
                accessToken = "ea";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "maiores";
                key = "quidem";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "autem";
                uploadProtocol = "nam";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesYumArtifactsImport(req, new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportSecurity("eaque", "pariatur") {{
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

            ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest req = new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest("nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "perferendis".getBytes();
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "aut";
                fields = "cumque";
                key = "corporis";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "nobis";
                uploadProtocol = "dolores";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload(req, new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity("quis", "totam") {{
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
