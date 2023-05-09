# organizations

### Available Operations

* [securitycenterOrganizationsAssetsGroup](#securitycenterorganizationsassetsgroup) - Filters an organization's assets and groups them by their specified properties.
* [securitycenterOrganizationsAssetsList](#securitycenterorganizationsassetslist) - Lists an organization's assets.
* [securitycenterOrganizationsAssetsRunDiscovery](#securitycenterorganizationsassetsrundiscovery) - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* [securitycenterOrganizationsOperationsCancel](#securitycenterorganizationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [securitycenterOrganizationsOperationsDelete](#securitycenterorganizationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [securitycenterOrganizationsSourcesCreate](#securitycenterorganizationssourcescreate) - Creates a source.
* [securitycenterOrganizationsSourcesFindingsCreate](#securitycenterorganizationssourcesfindingscreate) - Creates a finding. The corresponding source must exist for finding creation to succeed.
* [securitycenterOrganizationsSourcesFindingsGroup](#securitycenterorganizationssourcesfindingsgroup) - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* [securitycenterOrganizationsSourcesFindingsList](#securitycenterorganizationssourcesfindingslist) - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* [securitycenterOrganizationsSourcesFindingsSetState](#securitycenterorganizationssourcesfindingssetstate) - Updates the state of a finding.
* [securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks](#securitycenterorganizationssourcesfindingsupdatesecuritymarks) - Updates security marks.
* [securitycenterOrganizationsSourcesGet](#securitycenterorganizationssourcesget) - Gets a source.
* [securitycenterOrganizationsSourcesGetIamPolicy](#securitycenterorganizationssourcesgetiampolicy) - Gets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesList](#securitycenterorganizationssourceslist) - Lists all sources belonging to an organization.
* [securitycenterOrganizationsSourcesSetIamPolicy](#securitycenterorganizationssourcessetiampolicy) - Sets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesTestIamPermissions](#securitycenterorganizationssourcestestiampermissions) - Returns the permissions that a caller has on the specified source.

## securitycenterOrganizationsAssetsGroup

Filters an organization's assets and groups them by their specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GroupAssetsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsAssetsGroupRequest req = new SecuritycenterOrganizationsAssetsGroupRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                groupAssetsRequest = new GroupAssetsRequest() {{
                    compareDuration = "placeat";
                    filter = "voluptatum";
                    groupBy = "iusto";
                    pageSize = 568045;
                    pageToken = "nisi";
                    readTime = "recusandae";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            SecuritycenterOrganizationsAssetsGroupResponse res = sdk.organizations.securitycenterOrganizationsAssetsGroup(req, new SecuritycenterOrganizationsAssetsGroupSecurity("quo", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsAssetsList

Lists an organization's assets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsListRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsListResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsAssetsListRequest req = new SecuritycenterOrganizationsAssetsListRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                compareDuration = "quod";
                fieldMask = "esse";
                fields = "totam";
                filter = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                orderBy = "nam";
                pageSize = 639921L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                readTime = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            SecuritycenterOrganizationsAssetsListResponse res = sdk.organizations.securitycenterOrganizationsAssetsList(req, new SecuritycenterOrganizationsAssetsListSecurity("totam", "beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsAssetsRunDiscovery

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoveryResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsAssetsRunDiscoveryRequest req = new SecuritycenterOrganizationsAssetsRunDiscoveryRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("qui", "impedit");
                    put("cum", "esse");
                }};
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "perferendis";
                key = "ad";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "iste";
                uploadProtocol = "dolor";
            }};            

            SecuritycenterOrganizationsAssetsRunDiscoveryResponse res = sdk.organizations.securitycenterOrganizationsAssetsRunDiscovery(req, new SecuritycenterOrganizationsAssetsRunDiscoverySecurity("natus", "laboriosam") {{
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

## securitycenterOrganizationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsOperationsCancelRequest req = new SecuritycenterOrganizationsOperationsCancelRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("in", "corporis");
                    put("iste", "iure");
                    put("saepe", "quidem");
                }};
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "est";
                key = "mollitia";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            SecuritycenterOrganizationsOperationsCancelResponse res = sdk.organizations.securitycenterOrganizationsOperationsCancel(req, new SecuritycenterOrganizationsOperationsCancelSecurity("explicabo", "nobis") {{
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

## securitycenterOrganizationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsOperationsDeleteRequest req = new SecuritycenterOrganizationsOperationsDeleteRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "accusantium";
                key = "iure";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "sapiente";
                uploadProtocol = "architecto";
            }};            

            SecuritycenterOrganizationsOperationsDeleteResponse res = sdk.organizations.securitycenterOrganizationsOperationsDelete(req, new SecuritycenterOrganizationsOperationsDeleteSecurity("mollitia", "dolorem") {{
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

## securitycenterOrganizationsSourcesCreate

Creates a source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesCreateRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesCreateResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesCreateRequest req = new SecuritycenterOrganizationsSourcesCreateRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                source = new Source() {{
                    description = "repellat";
                    displayName = "mollitia";
                    name = "Francis Jerde";
                }};;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "quia";
                fields = "quis";
                key = "vitae";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            SecuritycenterOrganizationsSourcesCreateResponse res = sdk.organizations.securitycenterOrganizationsSourcesCreate(req, new SecuritycenterOrganizationsSourcesCreateSecurity("quo", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.source != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesFindingsCreate

Creates a finding. The corresponding source must exist for finding creation to succeed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsCreateRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsCreateResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1beta1Finding;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1beta1FindingStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1beta1SecurityMarks;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesFindingsCreateRequest req = new SecuritycenterOrganizationsSourcesFindingsCreateRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudSecuritycenterV1beta1Finding = new GoogleCloudSecuritycenterV1beta1Finding() {{
                    category = "id";
                    createTime = "possimus";
                    eventTime = "aut";
                    externalUri = "quasi";
                    name = "Dr. Jake Pacocha";
                    parent = "vero";
                    resourceName = "nihil";
                    securityMarks = new GoogleCloudSecuritycenterV1beta1SecurityMarks() {{
                        marks = new java.util.HashMap<String, String>() {{
                            put("voluptatibus", "ipsa");
                            put("omnis", "voluptate");
                            put("cum", "perferendis");
                        }};
                        name = "Bessie Grady II";
                    }};;
                    sourceProperties = new java.util.HashMap<String, Object>() {{
                        put("iusto", "dicta");
                        put("harum", "enim");
                    }};
                    state = GoogleCloudSecuritycenterV1beta1FindingStateEnum.INACTIVE;
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "ipsum";
                findingId = "quidem";
                key = "molestias";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "modi";
                uploadProtocol = "praesentium";
            }};            

            SecuritycenterOrganizationsSourcesFindingsCreateResponse res = sdk.organizations.securitycenterOrganizationsSourcesFindingsCreate(req, new SecuritycenterOrganizationsSourcesFindingsCreateSecurity("rem", "voluptates") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudSecuritycenterV1beta1Finding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesFindingsGroup

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsGroupRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsGroupResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsGroupSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GroupFindingsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesFindingsGroupRequest req = new SecuritycenterOrganizationsSourcesFindingsGroupRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                groupFindingsRequest = new GroupFindingsRequest() {{
                    filter = "sint";
                    groupBy = "veritatis";
                    pageSize = 929297;
                    pageToken = "incidunt";
                    readTime = "enim";
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "explicabo";
                key = "deserunt";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "labore";
                uploadProtocol = "modi";
            }};            

            SecuritycenterOrganizationsSourcesFindingsGroupResponse res = sdk.organizations.securitycenterOrganizationsSourcesFindingsGroup(req, new SecuritycenterOrganizationsSourcesFindingsGroupSecurity("qui", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesFindingsList

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsListRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsListResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesFindingsListRequest req = new SecuritycenterOrganizationsSourcesFindingsListRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "assumenda";
                fieldMask = "ipsam";
                fields = "alias";
                filter = "fugit";
                key = "dolorum";
                oauthToken = "excepturi";
                orderBy = "tempora";
                pageSize = 703737L;
                pageToken = "tempore";
                prettyPrint = false;
                quotaUser = "labore";
                readTime = "delectus";
                uploadType = "eum";
                uploadProtocol = "non";
            }};            

            SecuritycenterOrganizationsSourcesFindingsListResponse res = sdk.organizations.securitycenterOrganizationsSourcesFindingsList(req, new SecuritycenterOrganizationsSourcesFindingsListSecurity("eligendi", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesFindingsSetState

Updates the state of a finding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsSetStateRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsSetStateResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsSetStateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetFindingStateRequest;
import org.openapis.openapi.models.shared.SetFindingStateRequestStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesFindingsSetStateRequest req = new SecuritycenterOrganizationsSourcesFindingsSetStateRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                setFindingStateRequest = new SetFindingStateRequest() {{
                    startTime = "necessitatibus";
                    state = SetFindingStateRequestStateEnum.ACTIVE;
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "a";
                key = "dolorum";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "illum";
                uploadProtocol = "maiores";
            }};            

            SecuritycenterOrganizationsSourcesFindingsSetStateResponse res = sdk.organizations.securitycenterOrganizationsSourcesFindingsSetState(req, new SecuritycenterOrganizationsSourcesFindingsSetStateSecurity("rerum", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudSecuritycenterV1beta1Finding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks

Updates security marks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudSecuritycenterV1beta1SecurityMarks;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest req = new SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudSecuritycenterV1beta1SecurityMarks = new GoogleCloudSecuritycenterV1beta1SecurityMarks() {{
                    marks = new java.util.HashMap<String, String>() {{
                        put("ea", "aliquid");
                        put("laborum", "accusamus");
                        put("non", "occaecati");
                        put("enim", "accusamus");
                    }};
                    name = "Abraham McKenzie";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "amet";
                key = "deserunt";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "vel";
                startTime = "natus";
                updateMask = "omnis";
                uploadType = "molestiae";
                uploadProtocol = "perferendis";
            }};            

            SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse res = sdk.organizations.securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks(req, new SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity("nihil", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudSecuritycenterV1beta1SecurityMarks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesGet

Gets a source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesGetRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesGetResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesGetRequest req = new SecuritycenterOrganizationsSourcesGetRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "natus";
                filter = "nobis";
                key = "eum";
                oauthToken = "vero";
                pageSize = 135474L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "et";
                uploadProtocol = "excepturi";
            }};            

            SecuritycenterOrganizationsSourcesGetResponse res = sdk.organizations.securitycenterOrganizationsSourcesGet(req, new SecuritycenterOrganizationsSourcesGetSecurity("ullam", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.source != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesGetIamPolicy

Gets the access control policy on the specified Source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesGetIamPolicyRequest req = new SecuritycenterOrganizationsSourcesGetIamPolicyRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 33625;
                    }};;
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "ad";
                key = "eum";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "odit";
                uploadProtocol = "nemo";
            }};            

            SecuritycenterOrganizationsSourcesGetIamPolicyResponse res = sdk.organizations.securitycenterOrganizationsSourcesGetIamPolicy(req, new SecuritycenterOrganizationsSourcesGetIamPolicySecurity("quasi", "iure") {{
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

## securitycenterOrganizationsSourcesList

Lists all sources belonging to an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesListRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesListResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesListRequest req = new SecuritycenterOrganizationsSourcesListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "facilis";
                key = "in";
                oauthToken = "architecto";
                pageSize = 99569L;
                pageToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            SecuritycenterOrganizationsSourcesListResponse res = sdk.organizations.securitycenterOrganizationsSourcesList(req, new SecuritycenterOrganizationsSourcesListSecurity("repellat", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterOrganizationsSourcesSetIamPolicy

Sets the access control policy on the specified Source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
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

            SecuritycenterOrganizationsSourcesSetIamPolicyRequest req = new SecuritycenterOrganizationsSourcesSetIamPolicyRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("praesentium"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "magni";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("illum"),
                                            add("pariatur"),
                                            add("maxime"),
                                            add("ea"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "odit";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ab"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                            add("voluptate"),
                                            add("autem"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "eaque";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatibus"),
                                            add("perferendis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aut"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("hic"),
                                            add("libero"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "dignissimos";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "quis";
                                    expression = "nesciunt";
                                    location = "eos";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("minus"),
                                }};
                                role = "quam";
                            }}),
                        }};
                        etag = "dolor";
                        version = 874573;
                    }};;
                    updateMask = "nostrum";
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "facilis";
                key = "perspiciatis";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "consequuntur";
                uploadProtocol = "blanditiis";
            }};            

            SecuritycenterOrganizationsSourcesSetIamPolicyResponse res = sdk.organizations.securitycenterOrganizationsSourcesSetIamPolicy(req, new SecuritycenterOrganizationsSourcesSetIamPolicySecurity("error", "eaque") {{
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

## securitycenterOrganizationsSourcesTestIamPermissions

Returns the permissions that a caller has on the specified source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsSourcesTestIamPermissionsRequest req = new SecuritycenterOrganizationsSourcesTestIamPermissionsRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("asperiores"),
                    }};
                }};;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolorum";
                key = "deleniti";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nobis";
                uploadProtocol = "libero";
            }};            

            SecuritycenterOrganizationsSourcesTestIamPermissionsResponse res = sdk.organizations.securitycenterOrganizationsSourcesTestIamPermissions(req, new SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity("delectus", "quaerat") {{
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
