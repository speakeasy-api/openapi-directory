# projects

### Available Operations

* [beyondcorpProjectsLocationsAppConnectionsCreate](#beyondcorpprojectslocationsappconnectionscreate) - Creates a new AppConnection in a given project and location.
* [beyondcorpProjectsLocationsAppConnectionsList](#beyondcorpprojectslocationsappconnectionslist) - Lists AppConnections in a given project and location.
* [beyondcorpProjectsLocationsAppConnectionsResolve](#beyondcorpprojectslocationsappconnectionsresolve) - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* [beyondcorpProjectsLocationsAppConnectorsCreate](#beyondcorpprojectslocationsappconnectorscreate) - Creates a new AppConnector in a given project and location.
* [beyondcorpProjectsLocationsAppConnectorsList](#beyondcorpprojectslocationsappconnectorslist) - Lists AppConnectors in a given project and location.
* [beyondcorpProjectsLocationsAppConnectorsPatch](#beyondcorpprojectslocationsappconnectorspatch) - Updates the parameters of a single AppConnector.
* [beyondcorpProjectsLocationsAppConnectorsReportStatus](#beyondcorpprojectslocationsappconnectorsreportstatus) - Report status for a given connector.
* [beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig](#beyondcorpprojectslocationsappconnectorsresolveinstanceconfig) - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* [beyondcorpProjectsLocationsAppGatewaysCreate](#beyondcorpprojectslocationsappgatewayscreate) - Creates a new AppGateway in a given project and location.
* [beyondcorpProjectsLocationsAppGatewaysList](#beyondcorpprojectslocationsappgatewayslist) - Lists AppGateways in a given project and location.
* [beyondcorpProjectsLocationsClientGatewaysGetIamPolicy](#beyondcorpprojectslocationsclientgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [beyondcorpProjectsLocationsClientGatewaysSetIamPolicy](#beyondcorpprojectslocationsclientgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [beyondcorpProjectsLocationsClientGatewaysTestIamPermissions](#beyondcorpprojectslocationsclientgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [beyondcorpProjectsLocationsList](#beyondcorpprojectslocationslist) - Lists information about the supported locations for this service.
* [beyondcorpProjectsLocationsOperationsCancel](#beyondcorpprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [beyondcorpProjectsLocationsOperationsDelete](#beyondcorpprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [beyondcorpProjectsLocationsOperationsGet](#beyondcorpprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [beyondcorpProjectsLocationsOperationsList](#beyondcorpprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## beyondcorpProjectsLocationsAppConnectionsCreate

Creates a new AppConnection in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectionsCreateRequest req = new BeyondcorpProjectsLocationsAppConnectionsCreateRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudBeyondcorpAppconnectionsV1AppConnectionInput = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput() {{
                    applicationEndpoint = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint() {{
                        host = "odit";
                        port = 870013;
                    }};;
                    connectors = new String[]{{
                        add("maiores"),
                        add("molestiae"),
                        add("quod"),
                        add("quod"),
                    }};
                    displayName = "esse";
                    gateway = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput() {{
                        appGateway = "totam";
                        type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum.GCP_REGIONAL_MIG;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("dicta", "nam");
                        put("officia", "occaecati");
                        put("fugit", "deleniti");
                    }};
                    name = "Ms. Earnest Lebsack";
                    type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum.TYPE_UNSPECIFIED;
                }};;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                appConnectionId = "cum";
                callback = "esse";
                fields = "ipsum";
                key = "excepturi";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                requestId = "ad";
                uploadType = "natus";
                uploadProtocol = "sed";
                validateOnly = false;
            }};            

            BeyondcorpProjectsLocationsAppConnectionsCreateResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectionsCreate(req, new BeyondcorpProjectsLocationsAppConnectionsCreateSecurity("iste", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsAppConnectionsList

Lists AppConnections in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsListRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsListResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectionsListRequest req = new BeyondcorpProjectsLocationsAppConnectionsListRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "in";
                filter = "corporis";
                key = "iste";
                oauthToken = "iure";
                orderBy = "saepe";
                pageSize = 697631L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "est";
            }};            

            BeyondcorpProjectsLocationsAppConnectionsListResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectionsList(req, new BeyondcorpProjectsLocationsAppConnectionsListSecurity("mollitia", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsAppConnectionsResolve

Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsResolveRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsResolveResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsResolveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectionsResolveRequest req = new BeyondcorpProjectsLocationsAppConnectionsResolveRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                appConnectorId = "nobis";
                callback = "enim";
                fields = "omnis";
                key = "nemo";
                oauthToken = "minima";
                pageSize = 570197L;
                pageToken = "accusantium";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "culpa";
                uploadProtocol = "doloribus";
            }};            

            BeyondcorpProjectsLocationsAppConnectionsResolveResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectionsResolve(req, new BeyondcorpProjectsLocationsAppConnectionsResolveSecurity("sapiente", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsAppConnectorsCreate

Creates a new AppConnector in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsCreateRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsCreateResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectorsCreateRequest req = new BeyondcorpProjectsLocationsAppConnectorsCreateRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudBeyondcorpAppconnectorsV1AppConnectorInput = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput() {{
                    displayName = "culpa";
                    labels = new java.util.HashMap<String, String>() {{
                        put("repellat", "mollitia");
                    }};
                    name = "Francis Jerde";
                    principalInfo = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo() {{
                        serviceAccount = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount() {{
                            email = "Linda.Cronin@gmail.com";
                        }};;
                    }};;
                    resourceInfo = new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo() {{
                        id = "aa52c3f5-ad01-49da-9ffe-78f097b0074f";
                        resource = new java.util.HashMap<String, Object>() {{
                            put("corporis", "dolore");
                        }};
                        status = GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum.UNHEALTHY;
                        sub = new org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo[]{{
                            add(new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo() {{}}),
                        }};
                        time = "harum";
                    }};;
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                appConnectorId = "commodi";
                callback = "repudiandae";
                fields = "quae";
                key = "ipsum";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestias";
                requestId = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
                validateOnly = false;
            }};            

            BeyondcorpProjectsLocationsAppConnectorsCreateResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectorsCreate(req, new BeyondcorpProjectsLocationsAppConnectorsCreateSecurity("praesentium", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsAppConnectorsList

Lists AppConnectors in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsListRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsListResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectorsListRequest req = new BeyondcorpProjectsLocationsAppConnectorsListRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "itaque";
                filter = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                orderBy = "est";
                pageSize = 842342L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "distinctio";
                uploadProtocol = "quibusdam";
            }};            

            BeyondcorpProjectsLocationsAppConnectorsListResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectorsList(req, new BeyondcorpProjectsLocationsAppConnectorsListSecurity("labore", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsAppConnectorsPatch

Updates the parameters of a single AppConnector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsPatchRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsPatchResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectorsPatchRequest req = new BeyondcorpProjectsLocationsAppConnectorsPatchRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudBeyondcorpAppconnectorsV1AppConnectorInput = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput() {{
                    displayName = "cupiditate";
                    labels = new java.util.HashMap<String, String>() {{
                        put("perferendis", "magni");
                        put("assumenda", "ipsam");
                        put("alias", "fugit");
                    }};
                    name = "Marshall Glover";
                    principalInfo = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo() {{
                        serviceAccount = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount() {{
                            email = "Vilma75@gmail.com";
                        }};;
                    }};;
                    resourceInfo = new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo() {{
                        id = "969e9a3e-fa77-4dfb-94cd-66ae395efb9b";
                        resource = new java.util.HashMap<String, Object>() {{
                            put("blanditiis", "deleniti");
                            put("sapiente", "amet");
                            put("deserunt", "nisi");
                        }};
                        status = GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum.UNHEALTHY;
                        sub = new org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo[]{{
                            add(new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo() {{}}),
                            add(new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo() {{}}),
                            add(new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo() {{}}),
                        }};
                        time = "omnis";
                    }};;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "nihil";
                fields = "magnam";
                key = "distinctio";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "labore";
                updateMask = "suscipit";
                uploadType = "natus";
                uploadProtocol = "nobis";
                validateOnly = false;
            }};            

            BeyondcorpProjectsLocationsAppConnectorsPatchResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectorsPatch(req, new BeyondcorpProjectsLocationsAppConnectorsPatchSecurity("eum", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsAppConnectorsReportStatus

Report status for a given connector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest req = new BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudBeyondcorpAppconnectorsV1ReportStatusRequest = new GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest() {{
                    requestId = "magnam";
                    resourceInfo = new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo() {{
                        id = "1959890a-fa56-43e2-916f-e4c8b711e5b7";
                        resource = new java.util.HashMap<String, Object>() {{
                            put("quibusdam", "sed");
                            put("saepe", "pariatur");
                            put("accusantium", "consequuntur");
                            put("praesentium", "natus");
                        }};
                        status = GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum.HEALTH_STATUS_UNSPECIFIED;
                        sub = new org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo[]{{
                            add(new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo() {{}}),
                        }};
                        time = "quo";
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "ea";
                key = "excepturi";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "accusantium";
                uploadProtocol = "ab";
            }};            

            BeyondcorpProjectsLocationsAppConnectorsReportStatusResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectorsReportStatus(req, new BeyondcorpProjectsLocationsAppConnectorsReportStatusSecurity("maiores", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig

Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest req = new BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "pariatur";
                key = "nemo";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "fugiat";
                uploadProtocol = "amet";
            }};            

            BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig(req, new BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity("aut", "cumque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsAppGatewaysCreate

Creates a new AppGateway in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppGatewaysCreateRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppGatewaysCreateResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppGatewaysCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppGatewayHostTypeEnum;
import org.openapis.openapi.models.shared.AppGatewayInput;
import org.openapis.openapi.models.shared.AppGatewayTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppGatewaysCreateRequest req = new BeyondcorpProjectsLocationsAppGatewaysCreateRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                appGatewayInput = new AppGatewayInput() {{
                    displayName = "libero";
                    hostType = AppGatewayHostTypeEnum.GCP_REGIONAL_MIG;
                    labels = new java.util.HashMap<String, String>() {{
                        put("quis", "totam");
                    }};
                    name = "Cynthia Hayes";
                    type = AppGatewayTypeEnum.TYPE_UNSPECIFIED;
                }};;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                appGatewayId = "quam";
                callback = "dolor";
                fields = "vero";
                key = "nostrum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                requestId = "omnis";
                uploadType = "facilis";
                uploadProtocol = "perspiciatis";
                validateOnly = false;
            }};            

            BeyondcorpProjectsLocationsAppGatewaysCreateResponse res = sdk.projects.beyondcorpProjectsLocationsAppGatewaysCreate(req, new BeyondcorpProjectsLocationsAppGatewaysCreateSecurity("voluptatem", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsAppGatewaysList

Lists AppGateways in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppGatewaysListRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppGatewaysListResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppGatewaysListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppGatewaysListRequest req = new BeyondcorpProjectsLocationsAppGatewaysListRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "rerum";
                filter = "adipisci";
                key = "asperiores";
                oauthToken = "earum";
                orderBy = "modi";
                pageSize = 613966L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "pariatur";
                uploadProtocol = "provident";
            }};            

            BeyondcorpProjectsLocationsAppGatewaysListResponse res = sdk.projects.beyondcorpProjectsLocationsAppGatewaysList(req, new BeyondcorpProjectsLocationsAppGatewaysListSecurity("nobis", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAppGatewaysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsClientGatewaysGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest req = new BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "dolorem";
                key = "dolor";
                oauthToken = "qui";
                optionsRequestedPolicyVersion = 218749L;
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "excepturi";
                uploadProtocol = "cum";
            }};            

            BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse res = sdk.projects.beyondcorpProjectsLocationsClientGatewaysGetIamPolicy(req, new BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity("voluptate", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsClientGatewaysSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1AuditConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleIamV1SetIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyRequest req = new BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsa"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("quaerat"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "quidem";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("natus"),
                                            add("eos"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fugiat"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolorum"),
                                            add("iusto"),
                                            add("voluptate"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("omnis"),
                                            add("necessitatibus"),
                                            add("distinctio"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "nihil";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("id"),
                                            add("saepe"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "aspernatur";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "amet";
                                    expression = "optio";
                                    location = "accusamus";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("suscipit"),
                                    add("deserunt"),
                                    add("provident"),
                                    add("minima"),
                                }};
                                role = "repellendus";
                            }}),
                        }};
                        etag = "totam";
                        version = 628982;
                    }};;
                    updateMask = "alias";
                }};;
                accessToken = "at";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "vel";
                key = "quod";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "dolorum";
                uploadProtocol = "a";
            }};            

            BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyResponse res = sdk.projects.beyondcorpProjectsLocationsClientGatewaysSetIamPolicy(req, new BeyondcorpProjectsLocationsClientGatewaysSetIamPolicySecurity("esse", "harum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsClientGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest req = new BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("tenetur"),
                        add("amet"),
                        add("tempore"),
                        add("accusamus"),
                    }};
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "sapiente";
                key = "totam";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "expedita";
                uploadProtocol = "neque";
            }};            

            BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse res = sdk.projects.beyondcorpProjectsLocationsClientGatewaysTestIamPermissions(req, new BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity("sed", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1TestIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsListRequest req = new BeyondcorpProjectsLocationsListRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "incidunt";
                filter = "qui";
                key = "cupiditate";
                oauthToken = "maxime";
                pageSize = 863856L;
                pageToken = "soluta";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "laborum";
                uploadProtocol = "totam";
            }};            

            BeyondcorpProjectsLocationsListResponse res = sdk.projects.beyondcorpProjectsLocationsList(req, new BeyondcorpProjectsLocationsListSecurity("incidunt", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudLocationListLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsOperationsCancelRequest req = new BeyondcorpProjectsLocationsOperationsCancelRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("aliquid", "quam");
                    put("molestias", "temporibus");
                    put("qui", "neque");
                }};
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "sunt";
                key = "ullam";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "voluptatem";
                uploadProtocol = "cumque";
            }};            

            BeyondcorpProjectsLocationsOperationsCancelResponse res = sdk.projects.beyondcorpProjectsLocationsOperationsCancel(req, new BeyondcorpProjectsLocationsOperationsCancelSecurity("soluta", "nobis") {{
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

## beyondcorpProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsOperationsDeleteRequest req = new BeyondcorpProjectsLocationsOperationsDeleteRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsum";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "quos";
                key = "tempore";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "delectus";
                uploadType = "dolorem";
                uploadProtocol = "dolore";
                validateOnly = false;
            }};            

            BeyondcorpProjectsLocationsOperationsDeleteResponse res = sdk.projects.beyondcorpProjectsLocationsOperationsDelete(req, new BeyondcorpProjectsLocationsOperationsDeleteSecurity("labore", "adipisci") {{
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

## beyondcorpProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsOperationsGetRequest req = new BeyondcorpProjectsLocationsOperationsGetRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "itaque";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "porro";
                uploadProtocol = "doloribus";
            }};            

            BeyondcorpProjectsLocationsOperationsGetResponse res = sdk.projects.beyondcorpProjectsLocationsOperationsGet(req, new BeyondcorpProjectsLocationsOperationsGetSecurity("ut", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beyondcorpProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsOperationsListRequest req = new BeyondcorpProjectsLocationsOperationsListRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "occaecati";
                filter = "voluptatibus";
                key = "quisquam";
                oauthToken = "vero";
                pageSize = 606476L;
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "delectus";
                uploadProtocol = "voluptate";
            }};            

            BeyondcorpProjectsLocationsOperationsListResponse res = sdk.projects.beyondcorpProjectsLocationsOperationsList(req, new BeyondcorpProjectsLocationsOperationsListSecurity("consectetur", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
