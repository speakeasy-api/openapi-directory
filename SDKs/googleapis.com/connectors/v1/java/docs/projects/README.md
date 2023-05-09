# projects

### Available Operations

* [connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh](#connectorsprojectslocationsconnectionsconnectionschemametadatarefresh) - Refresh runtime schema of a connection.
* [connectorsProjectsLocationsConnectionsCreate](#connectorsprojectslocationsconnectionscreate) - Creates a new Connection in a given project and location.
* [connectorsProjectsLocationsConnectionsList](#connectorsprojectslocationsconnectionslist) - Lists Connections in a given project and location.
* [connectorsProjectsLocationsConnectionsRuntimeActionSchemasList](#connectorsprojectslocationsconnectionsruntimeactionschemaslist) - List schema of a runtime actions filtered by action name.
* [connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList](#connectorsprojectslocationsconnectionsruntimeentityschemaslist) - List schema of a runtime entities filtered by entity name.
* [connectorsProjectsLocationsEndpointAttachmentsCreate](#connectorsprojectslocationsendpointattachmentscreate) - Creates a new EndpointAttachment in a given project and location.
* [connectorsProjectsLocationsEndpointAttachmentsList](#connectorsprojectslocationsendpointattachmentslist) - List EndpointAttachments in a given project
* [connectorsProjectsLocationsGlobalManagedZonesCreate](#connectorsprojectslocationsglobalmanagedzonescreate) - Creates a new ManagedZone in a given project and location.
* [connectorsProjectsLocationsGlobalManagedZonesList](#connectorsprojectslocationsglobalmanagedzoneslist) - List ManagedZones in a given project
* [connectorsProjectsLocationsGlobalManagedZonesPatch](#connectorsprojectslocationsglobalmanagedzonespatch) - Updates the parameters of a single ManagedZone.
* [connectorsProjectsLocationsList](#connectorsprojectslocationslist) - Lists information about the supported locations for this service.
* [connectorsProjectsLocationsOperationsCancel](#connectorsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [connectorsProjectsLocationsOperationsDelete](#connectorsprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [connectorsProjectsLocationsOperationsList](#connectorsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [connectorsProjectsLocationsProvidersConnectorsList](#connectorsprojectslocationsprovidersconnectorslist) - Lists Connectors in a given project and location.
* [connectorsProjectsLocationsProvidersConnectorsVersionsGet](#connectorsprojectslocationsprovidersconnectorsversionsget) - Gets details of a single connector version.
* [connectorsProjectsLocationsProvidersConnectorsVersionsList](#connectorsprojectslocationsprovidersconnectorsversionslist) - Lists Connector Versions in a given project and location.
* [connectorsProjectsLocationsProvidersGetIamPolicy](#connectorsprojectslocationsprovidersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [connectorsProjectsLocationsProvidersList](#connectorsprojectslocationsproviderslist) - Lists Providers in a given project and location.
* [connectorsProjectsLocationsProvidersSetIamPolicy](#connectorsprojectslocationsproviderssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [connectorsProjectsLocationsProvidersTestIamPermissions](#connectorsprojectslocationsproviderstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh

Refresh runtime schema of a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest req = new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse res = sdk.projects.connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh(req, new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity("at", "at") {{
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

## connectorsProjectsLocationsConnectionsCreate

Creates a new Connection in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsCreateRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsCreateResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthConfig;
import org.openapis.openapi.models.shared.AuthConfigAuthTypeEnum;
import org.openapis.openapi.models.shared.ConfigVariable;
import org.openapis.openapi.models.shared.ConnectionInput;
import org.openapis.openapi.models.shared.ConnectionStatus;
import org.openapis.openapi.models.shared.ConnectionStatusStateEnum;
import org.openapis.openapi.models.shared.ConnectorsLogConfig;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.DestinationConfig;
import org.openapis.openapi.models.shared.JwtClaims;
import org.openapis.openapi.models.shared.LockConfig;
import org.openapis.openapi.models.shared.NodeConfig;
import org.openapis.openapi.models.shared.Oauth2AuthCodeFlow;
import org.openapis.openapi.models.shared.Oauth2ClientCredentials;
import org.openapis.openapi.models.shared.Oauth2JwtBearer;
import org.openapis.openapi.models.shared.Secret;
import org.openapis.openapi.models.shared.SshPublicKey;
import org.openapis.openapi.models.shared.SslConfig;
import org.openapis.openapi.models.shared.SslConfigClientCertTypeEnum;
import org.openapis.openapi.models.shared.SslConfigServerCertTypeEnum;
import org.openapis.openapi.models.shared.SslConfigTrustModelEnum;
import org.openapis.openapi.models.shared.SslConfigTypeEnum;
import org.openapis.openapi.models.shared.UserPassword;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsCreateRequest req = new ConnectorsProjectsLocationsConnectionsCreateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                connectionInput = new ConnectionInput() {{
                    authConfig = new AuthConfig() {{
                        additionalVariables = new org.openapis.openapi.models.shared.ConfigVariable[]{{
                            add(new ConfigVariable() {{
                                boolValue = false;
                                intValue = "quod";
                                key = "esse";
                                secretValue = new Secret() {{
                                    secretVersion = "totam";
                                }};
                                stringValue = "porro";
                            }}),
                            add(new ConfigVariable() {{
                                boolValue = false;
                                intValue = "dolorum";
                                key = "dicta";
                                secretValue = new Secret() {{
                                    secretVersion = "nam";
                                }};
                                stringValue = "officia";
                            }}),
                            add(new ConfigVariable() {{
                                boolValue = false;
                                intValue = "occaecati";
                                key = "fugit";
                                secretValue = new Secret() {{
                                    secretVersion = "deleniti";
                                }};
                                stringValue = "hic";
                            }}),
                            add(new ConfigVariable() {{
                                boolValue = false;
                                intValue = "optio";
                                key = "totam";
                                secretValue = new Secret() {{
                                    secretVersion = "beatae";
                                }};
                                stringValue = "commodi";
                            }}),
                        }};
                        authKey = "molestiae";
                        authType = AuthConfigAuthTypeEnum.USER_PASSWORD;
                        oauth2AuthCodeFlow = new Oauth2AuthCodeFlow() {{
                            authCode = "qui";
                            clientId = "impedit";
                            clientSecret = new Secret() {{
                                secretVersion = "cum";
                            }};;
                            enablePkce = false;
                            pkceVerifier = "esse";
                            redirectUri = "ipsum";
                            scopes = new String[]{{
                                add("aspernatur"),
                                add("perferendis"),
                                add("ad"),
                            }};
                        }};;
                        oauth2ClientCredentials = new Oauth2ClientCredentials() {{
                            clientId = "natus";
                            clientSecret = new Secret() {{
                                secretVersion = "sed";
                            }};;
                        }};;
                        oauth2JwtBearer = new Oauth2JwtBearer() {{
                            clientKey = new Secret() {{
                                secretVersion = "iste";
                            }};;
                            jwtClaims = new JwtClaims() {{
                                audience = "dolor";
                                issuer = "natus";
                                subject = "laboriosam";
                            }};;
                        }};;
                        sshPublicKey = new SshPublicKey() {{
                            certType = "hic";
                            sshClientCert = new Secret() {{
                                secretVersion = "saepe";
                            }};;
                            sshClientCertPass = new Secret() {{
                                secretVersion = "fuga";
                            }};;
                            username = "Issac.Hessel";
                        }};;
                        userPassword = new UserPassword() {{
                            password = new Secret() {{
                                secretVersion = "saepe";
                            }};;
                            username = "Maxie96";
                        }};;
                    }};;
                    configVariables = new org.openapis.openapi.models.shared.ConfigVariable[]{{
                        add(new ConfigVariable() {{
                            boolValue = false;
                            intValue = "mollitia";
                            key = "laborum";
                            secretValue = new Secret() {{
                                secretVersion = "dolores";
                            }};
                            stringValue = "dolorem";
                        }}),
                        add(new ConfigVariable() {{
                            boolValue = false;
                            intValue = "corporis";
                            key = "explicabo";
                            secretValue = new Secret() {{
                                secretVersion = "nobis";
                            }};
                            stringValue = "enim";
                        }}),
                        add(new ConfigVariable() {{
                            boolValue = false;
                            intValue = "omnis";
                            key = "nemo";
                            secretValue = new Secret() {{
                                secretVersion = "minima";
                            }};
                            stringValue = "excepturi";
                        }}),
                    }};
                    connectorVersion = "accusantium";
                    description = "iure";
                    destinationConfigs = new org.openapis.openapi.models.shared.DestinationConfig[]{{
                        add(new DestinationConfig() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    host = "sapiente";
                                    port = 102044;
                                    serviceAttachment = "mollitia";
                                }}),
                                add(new Destination() {{
                                    host = "dolorem";
                                    port = 635059;
                                    serviceAttachment = "consequuntur";
                                }}),
                                add(new Destination() {{
                                    host = "repellat";
                                    port = 653108;
                                    serviceAttachment = "occaecati";
                                }}),
                                add(new Destination() {{
                                    host = "numquam";
                                    port = 414369;
                                    serviceAttachment = "quam";
                                }}),
                            }};
                            key = "molestiae";
                        }}),
                        add(new DestinationConfig() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    host = "error";
                                    port = 158969;
                                    serviceAttachment = "quis";
                                }}),
                            }};
                            key = "vitae";
                        }}),
                        add(new DestinationConfig() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    host = "animi";
                                    port = 317202;
                                    serviceAttachment = "odit";
                                }}),
                                add(new Destination() {{
                                    host = "quo";
                                    port = 196582;
                                    serviceAttachment = "tenetur";
                                }}),
                                add(new Destination() {{
                                    host = "ipsam";
                                    port = 662527;
                                    serviceAttachment = "possimus";
                                }}),
                            }};
                            key = "aut";
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("error", "temporibus");
                    }};
                    lockConfig = new LockConfig() {{
                        locked = false;
                        reason = "laborum";
                    }};;
                    logConfig = new ConnectorsLogConfig() {{
                        enabled = false;
                    }};;
                    nodeConfig = new NodeConfig() {{
                        maxNodeCount = 96098;
                        minNodeCount = 971945;
                    }};;
                    serviceAccount = "voluptatibus";
                    sslConfig = new SslConfig() {{
                        additionalVariables = new org.openapis.openapi.models.shared.ConfigVariable[]{{
                            add(new ConfigVariable() {{
                                boolValue = false;
                                intValue = "nihil";
                                key = "praesentium";
                                secretValue = new Secret() {{
                                    secretVersion = "voluptatibus";
                                }};
                                stringValue = "ipsa";
                            }}),
                            add(new ConfigVariable() {{
                                boolValue = false;
                                intValue = "omnis";
                                key = "voluptate";
                                secretValue = new Secret() {{
                                    secretVersion = "cum";
                                }};
                                stringValue = "perferendis";
                            }}),
                            add(new ConfigVariable() {{
                                boolValue = false;
                                intValue = "doloremque";
                                key = "reprehenderit";
                                secretValue = new Secret() {{
                                    secretVersion = "ut";
                                }};
                                stringValue = "maiores";
                            }}),
                            add(new ConfigVariable() {{
                                boolValue = false;
                                intValue = "dicta";
                                key = "corporis";
                                secretValue = new Secret() {{
                                    secretVersion = "dolore";
                                }};
                                stringValue = "iusto";
                            }}),
                        }};
                        clientCertType = SslConfigClientCertTypeEnum.CERT_TYPE_UNSPECIFIED;
                        clientCertificate = new Secret() {{
                            secretVersion = "harum";
                        }};;
                        clientPrivateKey = new Secret() {{
                            secretVersion = "enim";
                        }};;
                        clientPrivateKeyPass = new Secret() {{
                            secretVersion = "accusamus";
                        }};;
                        privateServerCertificate = new Secret() {{
                            secretVersion = "commodi";
                        }};;
                        serverCertType = SslConfigServerCertTypeEnum.PEM;
                        trustModel = SslConfigTrustModelEnum.PUBLIC_;
                        type = SslConfigTypeEnum.SSL_TYPE_UNSPECIFIED;
                        useSsl = false;
                    }};;
                    status = new ConnectionStatus() {{
                        description = "quidem";
                        state = ConnectionStatusStateEnum.DELETING;
                        status = "excepturi";
                    }};;
                    suspended = false;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "praesentium";
                connectionId = "rem";
                fields = "voluptates";
                key = "quasi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "veritatis";
                uploadProtocol = "itaque";
            }};            

            ConnectorsProjectsLocationsConnectionsCreateResponse res = sdk.projects.connectorsProjectsLocationsConnectionsCreate(req, new ConnectorsProjectsLocationsConnectionsCreateSecurity("incidunt", "enim") {{
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

## connectorsProjectsLocationsConnectionsList

Lists Connections in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsListSecurity;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsListRequest req = new ConnectorsProjectsLocationsConnectionsListRequest("consequatur") {{
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
                view = ConnectorsProjectsLocationsConnectionsListViewEnum.FULL;
            }};            

            ConnectorsProjectsLocationsConnectionsListResponse res = sdk.projects.connectorsProjectsLocationsConnectionsList(req, new ConnectorsProjectsLocationsConnectionsListSecurity("ipsam", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsConnectionsRuntimeActionSchemasList

List schema of a runtime actions filtered by action name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListRequest req = new ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                filter = "labore";
                key = "delectus";
                oauthToken = "eum";
                pageSize = 248753L;
                pageToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "aliquid";
                uploadProtocol = "provident";
            }};            

            ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListResponse res = sdk.projects.connectorsProjectsLocationsConnectionsRuntimeActionSchemasList(req, new ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity("necessitatibus", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRuntimeActionSchemasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList

List schema of a runtime entities filtered by entity name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest req = new ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "in";
                filter = "in";
                key = "illum";
                oauthToken = "maiores";
                pageSize = 699479L;
                pageToken = "dicta";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "cumque";
                uploadProtocol = "facere";
            }};            

            ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse res = sdk.projects.connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList(req, new ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity("ea", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRuntimeEntitySchemasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsEndpointAttachmentsCreate

Creates a new EndpointAttachment in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsEndpointAttachmentsCreateRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsEndpointAttachmentsCreateResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsEndpointAttachmentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EndpointAttachmentInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsEndpointAttachmentsCreateRequest req = new ConnectorsProjectsLocationsEndpointAttachmentsCreateRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                endpointAttachmentInput = new EndpointAttachmentInput() {{
                    description = "non";
                    labels = new java.util.HashMap<String, String>() {{
                        put("enim", "accusamus");
                        put("delectus", "quidem");
                        put("provident", "nam");
                    }};
                    serviceAttachment = "id";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                endpointAttachmentId = "amet";
                fields = "deserunt";
                key = "nisi";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "omnis";
                uploadProtocol = "molestiae";
            }};            

            ConnectorsProjectsLocationsEndpointAttachmentsCreateResponse res = sdk.projects.connectorsProjectsLocationsEndpointAttachmentsCreate(req, new ConnectorsProjectsLocationsEndpointAttachmentsCreateSecurity("perferendis", "nihil") {{
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

## connectorsProjectsLocationsEndpointAttachmentsList

List EndpointAttachments in a given project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsEndpointAttachmentsListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsEndpointAttachmentsListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsEndpointAttachmentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsEndpointAttachmentsListRequest req = new ConnectorsProjectsLocationsEndpointAttachmentsListRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "suscipit";
                filter = "natus";
                key = "nobis";
                oauthToken = "eum";
                orderBy = "vero";
                pageSize = 135474L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "et";
                uploadProtocol = "excepturi";
            }};            

            ConnectorsProjectsLocationsEndpointAttachmentsListResponse res = sdk.projects.connectorsProjectsLocationsEndpointAttachmentsList(req, new ConnectorsProjectsLocationsEndpointAttachmentsListSecurity("ullam", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEndpointAttachmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsGlobalManagedZonesCreate

Creates a new ManagedZone in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsGlobalManagedZonesCreateRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsGlobalManagedZonesCreateResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsGlobalManagedZonesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ManagedZoneInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsGlobalManagedZonesCreateRequest req = new ConnectorsProjectsLocationsGlobalManagedZonesCreateRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                managedZoneInput = new ManagedZoneInput() {{
                    description = "accusantium";
                    dns = "mollitia";
                    labels = new java.util.HashMap<String, String>() {{
                        put("mollitia", "ad");
                        put("eum", "dolor");
                        put("necessitatibus", "odit");
                        put("nemo", "quasi");
                    }};
                    targetProject = "iure";
                    targetVpc = "doloribus";
                }};;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "maxime";
                fields = "deleniti";
                key = "facilis";
                managedZoneId = "in";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "repudiandae";
                uploadProtocol = "ullam";
            }};            

            ConnectorsProjectsLocationsGlobalManagedZonesCreateResponse res = sdk.projects.connectorsProjectsLocationsGlobalManagedZonesCreate(req, new ConnectorsProjectsLocationsGlobalManagedZonesCreateSecurity("expedita", "nihil") {{
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

## connectorsProjectsLocationsGlobalManagedZonesList

List ManagedZones in a given project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsGlobalManagedZonesListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsGlobalManagedZonesListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsGlobalManagedZonesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsGlobalManagedZonesListRequest req = new ConnectorsProjectsLocationsGlobalManagedZonesListRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "accusantium";
                filter = "consequuntur";
                key = "praesentium";
                oauthToken = "natus";
                orderBy = "magni";
                pageSize = 123820L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "pariatur";
                uploadProtocol = "maxime";
            }};            

            ConnectorsProjectsLocationsGlobalManagedZonesListResponse res = sdk.projects.connectorsProjectsLocationsGlobalManagedZonesList(req, new ConnectorsProjectsLocationsGlobalManagedZonesListSecurity("ea", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listManagedZonesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsGlobalManagedZonesPatch

Updates the parameters of a single ManagedZone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsGlobalManagedZonesPatchRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsGlobalManagedZonesPatchResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsGlobalManagedZonesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ManagedZoneInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsGlobalManagedZonesPatchRequest req = new ConnectorsProjectsLocationsGlobalManagedZonesPatchRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                managedZoneInput = new ManagedZoneInput() {{
                    description = "accusantium";
                    dns = "ab";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quidem", "ipsam");
                        put("voluptate", "autem");
                        put("nam", "eaque");
                        put("pariatur", "nemo");
                    }};
                    targetProject = "voluptatibus";
                    targetVpc = "perferendis";
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "aut";
                fields = "cumque";
                key = "corporis";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "libero";
                updateMask = "nobis";
                uploadType = "dolores";
                uploadProtocol = "quis";
            }};            

            ConnectorsProjectsLocationsGlobalManagedZonesPatchResponse res = sdk.projects.connectorsProjectsLocationsGlobalManagedZonesPatch(req, new ConnectorsProjectsLocationsGlobalManagedZonesPatchSecurity("totam", "dignissimos") {{
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

## connectorsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsListRequest req = new ConnectorsProjectsLocationsListRequest("eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "dolores";
                filter = "minus";
                key = "quam";
                oauthToken = "dolor";
                pageSize = 874573L;
                pageToken = "nostrum";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "recusandae";
                uploadProtocol = "omnis";
            }};            

            ConnectorsProjectsLocationsListResponse res = sdk.projects.connectorsProjectsLocationsList(req, new ConnectorsProjectsLocationsListSecurity("facilis", "perspiciatis") {{
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

## connectorsProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsOperationsCancelRequest req = new ConnectorsProjectsLocationsOperationsCancelRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("blanditiis", "error");
                }};
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "adipisci";
                key = "asperiores";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "iste";
                uploadProtocol = "dolorum";
            }};            

            ConnectorsProjectsLocationsOperationsCancelResponse res = sdk.projects.connectorsProjectsLocationsOperationsCancel(req, new ConnectorsProjectsLocationsOperationsCancelSecurity("deleniti", "pariatur") {{
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

## connectorsProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsOperationsDeleteRequest req = new ConnectorsProjectsLocationsOperationsDeleteRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "quos";
                key = "aliquid";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "dolor";
                uploadProtocol = "qui";
            }};            

            ConnectorsProjectsLocationsOperationsDeleteResponse res = sdk.projects.connectorsProjectsLocationsOperationsDelete(req, new ConnectorsProjectsLocationsOperationsDeleteSecurity("ipsum", "hic") {{
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

## connectorsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsOperationsListRequest req = new ConnectorsProjectsLocationsOperationsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "amet";
                filter = "dolorum";
                key = "numquam";
                oauthToken = "veritatis";
                pageSize = 58029L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odio";
                uploadProtocol = "quaerat";
            }};            

            ConnectorsProjectsLocationsOperationsListResponse res = sdk.projects.connectorsProjectsLocationsOperationsList(req, new ConnectorsProjectsLocationsOperationsListSecurity("accusamus", "quidem") {{
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

## connectorsProjectsLocationsProvidersConnectorsList

Lists Connectors in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsProvidersConnectorsListRequest req = new ConnectorsProjectsLocationsProvidersConnectorsListRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "sit";
                key = "fugiat";
                oauthToken = "ab";
                pageSize = 743835L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "voluptate";
                uploadProtocol = "dolorum";
            }};            

            ConnectorsProjectsLocationsProvidersConnectorsListResponse res = sdk.projects.connectorsProjectsLocationsProvidersConnectorsList(req, new ConnectorsProjectsLocationsProvidersConnectorsListSecurity("deleniti", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsProvidersConnectorsVersionsGet

Gets details of a single connector version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest req = new ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "voluptate";
                key = "id";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
                view = ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum.CONNECTOR_VERSION_VIEW_UNSPECIFIED;
            }};            

            ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse res = sdk.projects.connectorsProjectsLocationsProvidersConnectorsVersionsGet(req, new ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity("optio", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.connectorVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsProvidersConnectorsVersionsList

Lists Connector Versions in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest req = new ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "minima";
                key = "repellendus";
                oauthToken = "totam";
                pageSize = 628982L;
                pageToken = "alias";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "quaerat";
                uploadProtocol = "tempora";
                view = ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum.CONNECTOR_VERSION_VIEW_BASIC;
            }};            

            ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse res = sdk.projects.connectorsProjectsLocationsProvidersConnectorsVersionsList(req, new ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity("quod", "officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listConnectorVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsProvidersGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsProvidersGetIamPolicyRequest req = new ConnectorsProjectsLocationsProvidersGetIamPolicyRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                alt = AltEnum.MEDIA;
                callback = "harum";
                fields = "iusto";
                key = "ipsum";
                oauthToken = "quisquam";
                optionsRequestedPolicyVersion = 947371L;
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "tempore";
                uploadProtocol = "accusamus";
            }};            

            ConnectorsProjectsLocationsProvidersGetIamPolicyResponse res = sdk.projects.connectorsProjectsLocationsProvidersGetIamPolicy(req, new ConnectorsProjectsLocationsProvidersGetIamPolicySecurity("numquam", "enim") {{
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

## connectorsProjectsLocationsProvidersList

Lists Providers in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsProvidersListRequest req = new ConnectorsProjectsLocationsProvidersListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "expedita";
                key = "neque";
                oauthToken = "sed";
                pageSize = 424685L;
                pageToken = "libero";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "deserunt";
                uploadProtocol = "quam";
            }};            

            ConnectorsProjectsLocationsProvidersListResponse res = sdk.projects.connectorsProjectsLocationsProvidersList(req, new ConnectorsProjectsLocationsProvidersListSecurity("ipsum", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listProvidersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsProvidersSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersSetIamPolicySecurity;
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

            ConnectorsProjectsLocationsProvidersSetIamPolicyRequest req = new ConnectorsProjectsLocationsProvidersSetIamPolicyRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dicta"),
                                            add("laborum"),
                                            add("totam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolores"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aliquid"),
                                            add("quam"),
                                            add("molestias"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("neque"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "magni";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ullam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatem"),
                                            add("cumque"),
                                            add("soluta"),
                                            add("nobis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "saepe";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nobis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "tempore";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("delectus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("labore"),
                                            add("adipisci"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quae"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "quas";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "consequatur";
                                    expression = "est";
                                    location = "repellendus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("ut"),
                                    add("facilis"),
                                    add("cupiditate"),
                                    add("qui"),
                                }};
                                role = "quae";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "laudantium";
                                    expression = "odio";
                                    location = "occaecati";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("vero"),
                                    add("omnis"),
                                    add("quis"),
                                    add("ipsum"),
                                }};
                                role = "delectus";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "voluptate";
                                    expression = "consectetur";
                                    location = "vero";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("hic"),
                                    add("distinctio"),
                                }};
                                role = "quod";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "odio";
                                    expression = "similique";
                                    location = "facilis";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("dolore"),
                                    add("quibusdam"),
                                }};
                                role = "illum";
                            }}),
                        }};
                        etag = "sequi";
                        version = 617877;
                    }};;
                    updateMask = "impedit";
                }};;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "nulla";
                key = "fugit";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "doloribus";
                uploadProtocol = "iusto";
            }};            

            ConnectorsProjectsLocationsProvidersSetIamPolicyResponse res = sdk.projects.connectorsProjectsLocationsProvidersSetIamPolicy(req, new ConnectorsProjectsLocationsProvidersSetIamPolicySecurity("eligendi", "ducimus") {{
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

## connectorsProjectsLocationsProvidersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsProvidersTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest req = new ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ipsam"),
                        add("ea"),
                    }};
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "magnam";
                key = "ratione";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "dicta";
                uploadProtocol = "dolor";
            }};            

            ConnectorsProjectsLocationsProvidersTestIamPermissionsResponse res = sdk.projects.connectorsProjectsLocationsProvidersTestIamPermissions(req, new ConnectorsProjectsLocationsProvidersTestIamPermissionsSecurity("maiores", "quasi") {{
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
