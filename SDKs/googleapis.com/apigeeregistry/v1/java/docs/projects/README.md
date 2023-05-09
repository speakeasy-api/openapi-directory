# projects

### Available Operations

* [apigeeregistryProjectsLocationsApisCreate](#apigeeregistryprojectslocationsapiscreate) - Creates a specified API.
* [apigeeregistryProjectsLocationsApisDeploymentsCreate](#apigeeregistryprojectslocationsapisdeploymentscreate) - Creates a specified deployment.
* [apigeeregistryProjectsLocationsApisDeploymentsList](#apigeeregistryprojectslocationsapisdeploymentslist) - Returns matching deployments.
* [apigeeregistryProjectsLocationsApisList](#apigeeregistryprojectslocationsapislist) - Returns matching APIs.
* [apigeeregistryProjectsLocationsApisVersionsCreate](#apigeeregistryprojectslocationsapisversionscreate) - Creates a specified version.
* [apigeeregistryProjectsLocationsApisVersionsList](#apigeeregistryprojectslocationsapisversionslist) - Returns matching versions.
* [apigeeregistryProjectsLocationsApisVersionsSpecsCreate](#apigeeregistryprojectslocationsapisversionsspecscreate) - Creates a specified spec.
* [apigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision](#apigeeregistryprojectslocationsapisversionsspecsdeleterevision) - Deletes a revision of a spec.
* [apigeeregistryProjectsLocationsApisVersionsSpecsList](#apigeeregistryprojectslocationsapisversionsspecslist) - Returns matching specs.
* [apigeeregistryProjectsLocationsApisVersionsSpecsListRevisions](#apigeeregistryprojectslocationsapisversionsspecslistrevisions) - Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
* [apigeeregistryProjectsLocationsApisVersionsSpecsPatch](#apigeeregistryprojectslocationsapisversionsspecspatch) - Used to modify a specified spec.
* [apigeeregistryProjectsLocationsApisVersionsSpecsRollback](#apigeeregistryprojectslocationsapisversionsspecsrollback) - Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
* [apigeeregistryProjectsLocationsApisVersionsSpecsTagRevision](#apigeeregistryprojectslocationsapisversionsspecstagrevision) - Adds a tag to a specified revision of a spec.
* [apigeeregistryProjectsLocationsArtifactsCreate](#apigeeregistryprojectslocationsartifactscreate) - Creates a specified artifact.
* [apigeeregistryProjectsLocationsArtifactsGetContents](#apigeeregistryprojectslocationsartifactsgetcontents) - Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
* [apigeeregistryProjectsLocationsArtifactsList](#apigeeregistryprojectslocationsartifactslist) - Returns matching artifacts.
* [apigeeregistryProjectsLocationsArtifactsReplaceArtifact](#apigeeregistryprojectslocationsartifactsreplaceartifact) - Used to replace a specified artifact.
* [apigeeregistryProjectsLocationsInstancesCreate](#apigeeregistryprojectslocationsinstancescreate) - Provisions instance resources for the Registry.
* [apigeeregistryProjectsLocationsList](#apigeeregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [apigeeregistryProjectsLocationsOperationsCancel](#apigeeregistryprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [apigeeregistryProjectsLocationsOperationsDelete](#apigeeregistryprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [apigeeregistryProjectsLocationsOperationsGet](#apigeeregistryprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [apigeeregistryProjectsLocationsOperationsList](#apigeeregistryprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* [apigeeregistryProjectsLocationsRuntimeGetIamPolicy](#apigeeregistryprojectslocationsruntimegetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [apigeeregistryProjectsLocationsRuntimeSetIamPolicy](#apigeeregistryprojectslocationsruntimesetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [apigeeregistryProjectsLocationsRuntimeTestIamPermissions](#apigeeregistryprojectslocationsruntimetestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## apigeeregistryProjectsLocationsApisCreate

Creates a specified API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisCreateRequest req = new ApigeeregistryProjectsLocationsApisCreateRequest("quo") {{
                dollarXgafv = XgafvEnum.ONE;
                apiInput = new ApiInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                    }};
                    availability = "dolorum";
                    description = "dicta";
                    displayName = "nam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("occaecati", "fugit");
                        put("deleniti", "hic");
                        put("optio", "totam");
                    }};
                    name = "Lucy Krajcik";
                    recommendedDeployment = "impedit";
                    recommendedVersion = "cum";
                }};;
                accessToken = "esse";
                alt = AltEnum.JSON;
                apiId = "excepturi";
                callback = "aspernatur";
                fields = "perferendis";
                key = "ad";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "iste";
                uploadProtocol = "dolor";
            }};            

            ApigeeregistryProjectsLocationsApisCreateResponse res = sdk.projects.apigeeregistryProjectsLocationsApisCreate(req, new ApigeeregistryProjectsLocationsApisCreateSecurity("natus", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.api != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisDeploymentsCreate

Creates a specified deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisDeploymentsCreateResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisDeploymentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiDeploymentInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest req = new ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                apiDeploymentInput = new ApiDeploymentInput() {{
                    accessGuidance = "fuga";
                    annotations = new java.util.HashMap<String, String>() {{
                        put("corporis", "iste");
                        put("iure", "saepe");
                    }};
                    apiSpecRevision = "quidem";
                    description = "architecto";
                    displayName = "ipsa";
                    endpointUri = "reiciendis";
                    externalChannelUri = "est";
                    intendedAudience = "mollitia";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolores", "dolorem");
                        put("corporis", "explicabo");
                        put("nobis", "enim");
                    }};
                    name = "Corey Hane III";
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                apiDeploymentId = "sapiente";
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            ApigeeregistryProjectsLocationsApisDeploymentsCreateResponse res = sdk.projects.apigeeregistryProjectsLocationsApisDeploymentsCreate(req, new ApigeeregistryProjectsLocationsApisDeploymentsCreateSecurity("occaecati", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apiDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisDeploymentsList

Returns matching deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisDeploymentsListRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisDeploymentsListResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisDeploymentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisDeploymentsListRequest req = new ApigeeregistryProjectsLocationsApisDeploymentsListRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                filter = "quis";
                key = "vitae";
                oauthToken = "laborum";
                orderBy = "animi";
                pageSize = 317202L;
                pageToken = "odit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            ApigeeregistryProjectsLocationsApisDeploymentsListResponse res = sdk.projects.apigeeregistryProjectsLocationsApisDeploymentsList(req, new ApigeeregistryProjectsLocationsApisDeploymentsListSecurity("ipsam", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listApiDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisList

Returns matching APIs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisListRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisListResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisListRequest req = new ApigeeregistryProjectsLocationsApisListRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "laborum";
                filter = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                orderBy = "vero";
                pageSize = 468651L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            ApigeeregistryProjectsLocationsApisListResponse res = sdk.projects.apigeeregistryProjectsLocationsApisList(req, new ApigeeregistryProjectsLocationsApisListSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listApisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisVersionsCreate

Creates a specified version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsCreateRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsCreateResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiVersionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisVersionsCreateRequest req = new ApigeeregistryProjectsLocationsApisVersionsCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                apiVersionInput = new ApiVersionInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("ut", "maiores");
                        put("dicta", "corporis");
                    }};
                    description = "dolore";
                    displayName = "iusto";
                    labels = new java.util.HashMap<String, String>() {{
                        put("harum", "enim");
                    }};
                    name = "Mrs. Leslie VonRueden";
                    primarySpec = "molestias";
                    state = "excepturi";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                apiVersionId = "praesentium";
                callback = "rem";
                fields = "voluptates";
                key = "quasi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "veritatis";
                uploadProtocol = "itaque";
            }};            

            ApigeeregistryProjectsLocationsApisVersionsCreateResponse res = sdk.projects.apigeeregistryProjectsLocationsApisVersionsCreate(req, new ApigeeregistryProjectsLocationsApisVersionsCreateSecurity("incidunt", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apiVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisVersionsList

Returns matching versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsListRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsListResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisVersionsListRequest req = new ApigeeregistryProjectsLocationsApisVersionsListRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                filter = "quibusdam";
                key = "labore";
                oauthToken = "modi";
                orderBy = "qui";
                pageSize = 397821L;
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            ApigeeregistryProjectsLocationsApisVersionsListResponse res = sdk.projects.apigeeregistryProjectsLocationsApisVersionsList(req, new ApigeeregistryProjectsLocationsApisVersionsListSecurity("assumenda", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listApiVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsCreate

Creates a specified spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiSpecInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest req = new ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                apiSpecInput = new ApiSpecInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("excepturi", "tempora");
                        put("facilis", "tempore");
                        put("labore", "delectus");
                    }};
                    contents = "eum";
                    description = "non";
                    filename = "eligendi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aliquid", "provident");
                        put("necessitatibus", "sint");
                        put("officia", "dolor");
                    }};
                    mimeType = "debitis";
                    name = "Wilbur King";
                    sourceUri = "maiores";
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                apiSpecId = "magnam";
                callback = "cumque";
                fields = "facere";
                key = "ea";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "accusamus";
                uploadProtocol = "non";
            }};            

            ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse res = sdk.projects.apigeeregistryProjectsLocationsApisVersionsSpecsCreate(req, new ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity("occaecati", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision

Deletes a revision of a spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionRequest req = new ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "id";
                key = "blanditiis";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "amet";
                uploadProtocol = "deserunt";
            }};            

            ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionResponse res = sdk.projects.apigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision(req, new ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionSecurity("nisi", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsList

Returns matching specs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest req = new ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest("natus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "nihil";
                fields = "magnam";
                filter = "distinctio";
                key = "id";
                oauthToken = "labore";
                orderBy = "labore";
                pageSize = 383462L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "eum";
                uploadProtocol = "vero";
            }};            

            ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse res = sdk.projects.apigeeregistryProjectsLocationsApisVersionsSpecsList(req, new ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity("aspernatur", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listApiSpecsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsListRevisions

Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsRequest req = new ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "quos";
                filter = "sint";
                key = "accusantium";
                oauthToken = "mollitia";
                pageSize = 968962L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "eum";
                uploadProtocol = "dolor";
            }};            

            ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse res = sdk.projects.apigeeregistryProjectsLocationsApisVersionsSpecsListRevisions(req, new ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsSecurity("necessitatibus", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listApiSpecRevisionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsPatch

Used to modify a specified spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsPatchResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiSpecInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest req = new ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                apiSpecInput = new ApiSpecInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("doloribus", "debitis");
                        put("eius", "maxime");
                    }};
                    contents = "deleniti";
                    description = "facilis";
                    filename = "in";
                    labels = new java.util.HashMap<String, String>() {{
                        put("architecto", "repudiandae");
                    }};
                    mimeType = "ullam";
                    name = "Jessie Zulauf";
                    sourceUri = "saepe";
                }};;
                accessToken = "pariatur";
                allowMissing = false;
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "praesentium";
                key = "natus";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "sunt";
                updateMask = "quo";
                uploadType = "illum";
                uploadProtocol = "pariatur";
            }};            

            ApigeeregistryProjectsLocationsApisVersionsSpecsPatchResponse res = sdk.projects.apigeeregistryProjectsLocationsApisVersionsSpecsPatch(req, new ApigeeregistryProjectsLocationsApisVersionsSpecsPatchSecurity("maxime", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsRollback

Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RollbackApiSpecRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest req = new ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                rollbackApiSpecRequest = new RollbackApiSpecRequest() {{
                    revisionId = "ea";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quidem";
                key = "ipsam";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "nam";
                uploadProtocol = "eaque";
            }};            

            ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackResponse res = sdk.projects.apigeeregistryProjectsLocationsApisVersionsSpecsRollback(req, new ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackSecurity("pariatur", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsTagRevision

Adds a tag to a specified revision of a spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TagApiSpecRevisionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest req = new ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                tagApiSpecRevisionRequest = new TagApiSpecRevisionRequest() {{
                    tag = "fugiat";
                }};;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "corporis";
                key = "hic";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "dolores";
                uploadProtocol = "quis";
            }};            

            ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse res = sdk.projects.apigeeregistryProjectsLocationsApisVersionsSpecsTagRevision(req, new ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity("totam", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsArtifactsCreate

Creates a specified artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsCreateRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsCreateResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArtifactInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsArtifactsCreateRequest req = new ApigeeregistryProjectsLocationsArtifactsCreateRequest("eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                artifactInput = new ArtifactInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("eos", "perferendis");
                    }};
                    contents = "dolores";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quam", "dolor");
                        put("vero", "nostrum");
                        put("hic", "recusandae");
                        put("omnis", "facilis");
                    }};
                    mimeType = "perspiciatis";
                    name = "Robyn Cruickshank";
                }};;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                artifactId = "rerum";
                callback = "adipisci";
                fields = "asperiores";
                key = "earum";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolorum";
                uploadProtocol = "deleniti";
            }};            

            ApigeeregistryProjectsLocationsArtifactsCreateResponse res = sdk.projects.apigeeregistryProjectsLocationsArtifactsCreate(req, new ApigeeregistryProjectsLocationsArtifactsCreateSecurity("pariatur", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.artifact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsArtifactsGetContents

Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsGetContentsRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsGetContentsResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsGetContentsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsArtifactsGetContentsRequest req = new ApigeeregistryProjectsLocationsArtifactsGetContentsRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "aliquid";
                key = "dolorem";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "qui";
                uploadProtocol = "ipsum";
            }};            

            ApigeeregistryProjectsLocationsArtifactsGetContentsResponse res = sdk.projects.apigeeregistryProjectsLocationsArtifactsGetContents(req, new ApigeeregistryProjectsLocationsArtifactsGetContentsSecurity("hic", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.httpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsArtifactsList

Returns matching artifacts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsListRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsListResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsArtifactsListRequest req = new ApigeeregistryProjectsLocationsArtifactsListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "dolorum";
                filter = "numquam";
                key = "veritatis";
                oauthToken = "ipsa";
                orderBy = "ipsa";
                pageSize = 434417L;
                pageToken = "odio";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "accusamus";
                uploadProtocol = "quidem";
            }};            

            ApigeeregistryProjectsLocationsArtifactsListResponse res = sdk.projects.apigeeregistryProjectsLocationsArtifactsList(req, new ApigeeregistryProjectsLocationsArtifactsListSecurity("voluptatibus", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listArtifactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsArtifactsReplaceArtifact

Used to replace a specified artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsReplaceArtifactResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsArtifactsReplaceArtifactSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArtifactInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest req = new ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                artifactInput = new ArtifactInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("sit", "fugiat");
                        put("ab", "soluta");
                        put("dolorum", "iusto");
                    }};
                    contents = "voluptate";
                    labels = new java.util.HashMap<String, String>() {{
                        put("deleniti", "omnis");
                        put("necessitatibus", "distinctio");
                        put("asperiores", "nihil");
                    }};
                    mimeType = "ipsum";
                    name = "Alberta Ullrich";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "optio";
                fields = "accusamus";
                key = "ad";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "deserunt";
                uploadProtocol = "provident";
            }};            

            ApigeeregistryProjectsLocationsArtifactsReplaceArtifactResponse res = sdk.projects.apigeeregistryProjectsLocationsArtifactsReplaceArtifact(req, new ApigeeregistryProjectsLocationsArtifactsReplaceArtifactSecurity("minima", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.artifact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsInstancesCreate

Provisions instance resources for the Registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigInput;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsInstancesCreateRequest req = new ApigeeregistryProjectsLocationsInstancesCreateRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    config = new ConfigInput() {{
                        cmekKeyName = "alias";
                    }};;
                    name = "Alex Goodwin";
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "a";
                instanceId = "esse";
                key = "harum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quisquam";
                uploadProtocol = "tenetur";
            }};            

            ApigeeregistryProjectsLocationsInstancesCreateResponse res = sdk.projects.apigeeregistryProjectsLocationsInstancesCreate(req, new ApigeeregistryProjectsLocationsInstancesCreateSecurity("amet", "tempore") {{
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

## apigeeregistryProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsListRequest req = new ApigeeregistryProjectsLocationsListRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "totam";
                filter = "nihil";
                key = "sit";
                oauthToken = "expedita";
                pageSize = 207470L;
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "libero";
                uploadProtocol = "voluptas";
            }};            

            ApigeeregistryProjectsLocationsListResponse res = sdk.projects.apigeeregistryProjectsLocationsList(req, new ApigeeregistryProjectsLocationsListSecurity("deserunt", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## apigeeregistryProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsOperationsCancelRequest req = new ApigeeregistryProjectsLocationsOperationsCancelRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("cupiditate", "maxime");
                }};
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "laborum";
                key = "totam";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "dolores";
                uploadProtocol = "distinctio";
            }};            

            ApigeeregistryProjectsLocationsOperationsCancelResponse res = sdk.projects.apigeeregistryProjectsLocationsOperationsCancel(req, new ApigeeregistryProjectsLocationsOperationsCancelSecurity("facilis", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsOperationsDeleteRequest req = new ApigeeregistryProjectsLocationsOperationsDeleteRequest("quam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "fugit";
                force = false;
                key = "magni";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "ullam";
                uploadProtocol = "nam";
            }};            

            ApigeeregistryProjectsLocationsOperationsDeleteResponse res = sdk.projects.apigeeregistryProjectsLocationsOperationsDelete(req, new ApigeeregistryProjectsLocationsOperationsDeleteSecurity("hic", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsOperationsGetRequest req = new ApigeeregistryProjectsLocationsOperationsGetRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "ipsum";
                key = "veritatis";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "tempore";
                uploadProtocol = "cupiditate";
            }};            

            ApigeeregistryProjectsLocationsOperationsGetResponse res = sdk.projects.apigeeregistryProjectsLocationsOperationsGet(req, new ApigeeregistryProjectsLocationsOperationsGetSecurity("aperiam", "delectus") {{
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

## apigeeregistryProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsOperationsListRequest req = new ApigeeregistryProjectsLocationsOperationsListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "architecto";
                filter = "quae";
                key = "aut";
                oauthToken = "quas";
                pageSize = 929530L;
                pageToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "repellendus";
                uploadProtocol = "porro";
            }};            

            ApigeeregistryProjectsLocationsOperationsListResponse res = sdk.projects.apigeeregistryProjectsLocationsOperationsList(req, new ApigeeregistryProjectsLocationsOperationsListSecurity("doloribus", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigeeregistryProjectsLocationsRuntimeGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsRuntimeGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsRuntimeGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsRuntimeGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsRuntimeGetIamPolicyRequest req = new ApigeeregistryProjectsLocationsRuntimeGetIamPolicyRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "odio";
                key = "occaecati";
                oauthToken = "voluptatibus";
                optionsRequestedPolicyVersion = 787542L;
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "omnis";
                uploadProtocol = "quis";
            }};            

            ApigeeregistryProjectsLocationsRuntimeGetIamPolicyResponse res = sdk.projects.apigeeregistryProjectsLocationsRuntimeGetIamPolicy(req, new ApigeeregistryProjectsLocationsRuntimeGetIamPolicySecurity("ipsum", "delectus") {{
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

## apigeeregistryProjectsLocationsRuntimeSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity;
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

            ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest req = new ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "tenetur";
                                    expression = "dignissimos";
                                    location = "hic";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("odio"),
                                    add("similique"),
                                    add("facilis"),
                                    add("vero"),
                                }};
                                role = "ducimus";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "dolore";
                                    expression = "quibusdam";
                                    location = "illum";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("impedit"),
                                    add("aut"),
                                    add("voluptatibus"),
                                }};
                                role = "exercitationem";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nulla";
                                    expression = "fugit";
                                    location = "porro";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("iusto"),
                                    add("eligendi"),
                                    add("ducimus"),
                                    add("alias"),
                                }};
                                role = "officia";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "tempora";
                                    expression = "ipsam";
                                    location = "ea";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("possimus"),
                                    add("magnam"),
                                }};
                                role = "ratione";
                            }}),
                        }};
                        etag = "ex";
                        version = 511319;
                    }};;
                }};;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quasi";
                key = "ex";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "voluptatibus";
                uploadProtocol = "nostrum";
            }};            

            ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse res = sdk.projects.apigeeregistryProjectsLocationsRuntimeSetIamPolicy(req, new ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity("sapiente", "quisquam") {{
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

## apigeeregistryProjectsLocationsRuntimeTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest req = new ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("corporis"),
                        add("veniam"),
                        add("aliquid"),
                        add("inventore"),
                    }};
                }};;
                accessToken = "magnam";
                alt = AltEnum.MEDIA;
                callback = "quo";
                fields = "consectetur";
                key = "recusandae";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "eaque";
                uploadProtocol = "a";
            }};            

            ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsResponse res = sdk.projects.apigeeregistryProjectsLocationsRuntimeTestIamPermissions(req, new ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsSecurity("libero", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
