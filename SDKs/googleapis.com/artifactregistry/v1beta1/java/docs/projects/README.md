# projects

### Available Operations

* [artifactregistryProjectsLocationsList](#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
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
import org.openapis.openapi.models.shared.RepositoryFormatEnum;
import org.openapis.openapi.models.shared.RepositoryInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsRepositoriesCreateRequest req = new ArtifactregistryProjectsLocationsRepositoriesCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                repositoryInput = new RepositoryInput() {{
                    description = "repellendus";
                    format = RepositoryFormatEnum.PYTHON;
                    kmsKeyName = "quo";
                    labels = new java.util.HashMap<String, String>() {{
                        put("at", "at");
                    }};
                    name = "Javier Schmidt";
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "dicta";
                key = "nam";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                repositoryId = "fugit";
                uploadType = "deleniti";
                uploadProtocol = "hic";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesCreateResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesCreate(req, new ArtifactregistryProjectsLocationsRepositoriesCreateSecurity("optio", "totam") {{
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

            ArtifactregistryProjectsLocationsRepositoriesFilesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesFilesListRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "impedit";
                filter = "cum";
                key = "esse";
                oauthToken = "ipsum";
                pageSize = 568434L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ad";
                uploadProtocol = "natus";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesFilesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesFilesList(req, new ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1("sed", "iste") {{
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

            ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest req = new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                key = "in";
                oauthToken = "corporis";
                optionsRequestedPolicyVersion = 613064L;
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "saepe";
                uploadProtocol = "quidem";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesGetIamPolicy(req, new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption1("architecto", "ipsa") {{
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

            ArtifactregistryProjectsLocationsRepositoriesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "dolorem";
                key = "corporis";
                oauthToken = "explicabo";
                pageSize = 750686L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "nemo";
                uploadProtocol = "minima";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesList(req, new ArtifactregistryProjectsLocationsRepositoriesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesListSecurityOption1("excepturi", "accusantium") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                pageSize = 161309L;
                pageToken = "repellat";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "occaecati";
                uploadProtocol = "numquam";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesList(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1("commodi", "quam") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                tag = new Tag() {{
                    name = "Miss Eugene Hauck";
                    version = "enim";
                }};;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "tenetur";
                key = "ipsam";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "possimus";
                tagId = "aut";
                uploadType = "quasi";
                uploadProtocol = "error";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity("temporibus", "laborum") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "praesentium";
                filter = "voluptatibus";
                key = "ipsa";
                oauthToken = "omnis";
                pageSize = 451159L;
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "doloremque";
                uploadProtocol = "reprehenderit";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesTagsList(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1("ut", "maiores") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                tag = new Tag() {{
                    name = "Heidi Carter";
                    version = "accusamus";
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "ipsum";
                key = "quidem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                updateMask = "pariatur";
                uploadType = "modi";
                uploadProtocol = "praesentium";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity("rem", "voluptates") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                force = false;
                key = "enim";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteSecurity("deserunt", "distinctio") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "cupiditate";
                key = "quos";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "assumenda";
                uploadProtocol = "ipsam";
                view = ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum.VERSION_VIEW_UNSPECIFIED;
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1("fugit", "dolorum") {{
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

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest req = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "delectus";
                key = "eum";
                oauthToken = "non";
                orderBy = "eligendi";
                pageSize = 576157L;
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "necessitatibus";
                uploadProtocol = "sint";
                view = ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum.BASIC;
            }};            

            ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesPackagesVersionsList(req, new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1("dolor", "debitis") {{
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

            ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest req = new ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest("a") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "in";
                                    expression = "illum";
                                    location = "maiores";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("magnam"),
                                }};
                                role = "cumque";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "facere";
                                    expression = "ea";
                                    location = "aliquid";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("non"),
                                    add("occaecati"),
                                    add("enim"),
                                    add("accusamus"),
                                }};
                                role = "delectus";
                            }}),
                        }};
                        etag = "quidem";
                        version = 588465;
                    }};;
                }};;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "deleniti";
                key = "sapiente";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nisi";
                uploadProtocol = "vel";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesSetIamPolicy(req, new ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity("natus", "omnis") {{
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

            ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest req = new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("magnam"),
                        add("distinctio"),
                    }};
                }};;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "suscipit";
                key = "natus";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "vero";
                uploadProtocol = "aspernatur";
            }};            

            ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse res = sdk.projects.artifactregistryProjectsLocationsRepositoriesTestIamPermissions(req, new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1("architecto", "magnam") {{
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
