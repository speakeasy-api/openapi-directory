# projects

### Available Operations

* [datastreamProjectsLocationsConnectionProfilesCreate](#datastreamprojectslocationsconnectionprofilescreate) - Use this method to create a connection profile in a project and location.
* [datastreamProjectsLocationsConnectionProfilesDiscover](#datastreamprojectslocationsconnectionprofilesdiscover) - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
* [datastreamProjectsLocationsConnectionProfilesList](#datastreamprojectslocationsconnectionprofileslist) - Use this method to list connection profiles created in a project and location.
* [datastreamProjectsLocationsFetchStaticIps](#datastreamprojectslocationsfetchstaticips) - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* [datastreamProjectsLocationsList](#datastreamprojectslocationslist) - Lists information about the supported locations for this service.
* [datastreamProjectsLocationsOperationsCancel](#datastreamprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datastreamProjectsLocationsOperationsList](#datastreamprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datastreamProjectsLocationsPrivateConnectionsCreate](#datastreamprojectslocationsprivateconnectionscreate) - Use this method to create a private connectivity configuration.
* [datastreamProjectsLocationsPrivateConnectionsList](#datastreamprojectslocationsprivateconnectionslist) - Use this method to list private connectivity configurations in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesCreate](#datastreamprojectslocationsprivateconnectionsroutescreate) - Use this method to create a route for a private connectivity in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesList](#datastreamprojectslocationsprivateconnectionsrouteslist) - Use this method to list routes created for a private connectivity in a project and location.
* [datastreamProjectsLocationsStreamsCreate](#datastreamprojectslocationsstreamscreate) - Use this method to create a stream.
* [datastreamProjectsLocationsStreamsDelete](#datastreamprojectslocationsstreamsdelete) - Use this method to delete a stream.
* [datastreamProjectsLocationsStreamsFetchErrors](#datastreamprojectslocationsstreamsfetcherrors) - Use this method to fetch any errors associated with a stream.
* [datastreamProjectsLocationsStreamsList](#datastreamprojectslocationsstreamslist) - Use this method to list streams in a project and location.
* [datastreamProjectsLocationsStreamsObjectsGet](#datastreamprojectslocationsstreamsobjectsget) - Use this method to get details about a stream object.
* [datastreamProjectsLocationsStreamsObjectsList](#datastreamprojectslocationsstreamsobjectslist) - Use this method to list the objects of a specific stream.
* [datastreamProjectsLocationsStreamsObjectsStartBackfillJob](#datastreamprojectslocationsstreamsobjectsstartbackfilljob) - Starts backfill job for the specified stream object.
* [datastreamProjectsLocationsStreamsObjectsStopBackfillJob](#datastreamprojectslocationsstreamsobjectsstopbackfilljob) - Stops the backfill job for the specified stream object.
* [datastreamProjectsLocationsStreamsPatch](#datastreamprojectslocationsstreamspatch) - Use this method to update the configuration of a stream.

## datastreamProjectsLocationsConnectionProfilesCreate

Use this method to create a connection profile in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.ForwardSshTunnelConnectivity;
import org.openapis.openapi.models.shared.GcsProfile;
import org.openapis.openapi.models.shared.MysqlProfileInput;
import org.openapis.openapi.models.shared.MysqlSslConfigInput;
import org.openapis.openapi.models.shared.OracleProfile;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsConnectionProfilesCreateRequest req = new DatastreamProjectsLocationsConnectionProfilesCreateRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                connectionProfileInput = new ConnectionProfileInput() {{
                    displayName = "iste";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "ecstatic-original.info";
                        password = "hic";
                        port = 902599;
                        privateKey = "fuga";
                        username = "Issac.Hessel";
                    }};;
                    gcsProfile = new GcsProfile() {{
                        bucketName = "saepe";
                        rootPath = "quidem";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "reiciendis");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "qualified-pew.net";
                        password = "dolores";
                        port = 210382;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "corporis";
                            clientCertificate = "explicabo";
                            clientKey = "nobis";
                        }};;
                        username = "Emerald.Mohr";
                    }};;
                    noConnectivity = new java.util.HashMap<String, Object>() {{
                        put("accusantium", "iure");
                        put("culpa", "doloribus");
                        put("sapiente", "architecto");
                    }};
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("dolorem", "culpa");
                            put("consequuntur", "repellat");
                            put("mollitia", "occaecati");
                        }};
                        databaseService = "numquam";
                        hostname = "immediate-instructor.info";
                        password = "velit";
                        port = 623510;
                        username = "Carmelo67";
                    }};;
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnectionName = "animi";
                    }};;
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("odit", "quo");
                        put("sequi", "tenetur");
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                connectionProfileId = "aut";
                fields = "quasi";
                key = "error";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "laborum";
                requestId = "quasi";
                uploadType = "reiciendis";
                uploadProtocol = "voluptatibus";
            }};            

            DatastreamProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req, new DatastreamProjectsLocationsConnectionProfilesCreateSecurity("vero", "nihil") {{
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

## datastreamProjectsLocationsConnectionProfilesDiscover

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesDiscoverRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesDiscoverResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.DiscoverConnectionProfileRequestInput;
import org.openapis.openapi.models.shared.ForwardSshTunnelConnectivity;
import org.openapis.openapi.models.shared.GcsProfile;
import org.openapis.openapi.models.shared.MysqlColumn;
import org.openapis.openapi.models.shared.MysqlDatabase;
import org.openapis.openapi.models.shared.MysqlProfileInput;
import org.openapis.openapi.models.shared.MysqlRdbms;
import org.openapis.openapi.models.shared.MysqlSslConfigInput;
import org.openapis.openapi.models.shared.MysqlTable;
import org.openapis.openapi.models.shared.OracleColumn;
import org.openapis.openapi.models.shared.OracleProfile;
import org.openapis.openapi.models.shared.OracleRdbms;
import org.openapis.openapi.models.shared.OracleSchema;
import org.openapis.openapi.models.shared.OracleTable;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsConnectionProfilesDiscoverRequest req = new DatastreamProjectsLocationsConnectionProfilesDiscoverRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                discoverConnectionProfileRequestInput = new DiscoverConnectionProfileRequestInput() {{
                    connectionProfile = new ConnectionProfileInput() {{
                        displayName = "ipsa";
                        forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                            hostname = "overcooked-impairment.net";
                            password = "perferendis";
                            port = 39187;
                            privateKey = "reprehenderit";
                            username = "Easter35";
                        }};;
                        gcsProfile = new GcsProfile() {{
                            bucketName = "dolore";
                            rootPath = "iusto";
                        }};;
                        labels = new java.util.HashMap<String, String>() {{
                            put("harum", "enim");
                        }};
                        mysqlProfile = new MysqlProfileInput() {{
                            hostname = "unacceptable-hare.org";
                            password = "quae";
                            port = 216822;
                            sslConfig = new MysqlSslConfigInput() {{
                                caCertificate = "quidem";
                                clientCertificate = "molestias";
                                clientKey = "excepturi";
                            }};;
                            username = "Samantha_Gleason";
                        }};;
                        noConnectivity = new java.util.HashMap<String, Object>() {{
                            put("quasi", "repudiandae");
                            put("sint", "veritatis");
                            put("itaque", "incidunt");
                            put("enim", "consequatur");
                        }};
                        oracleProfile = new OracleProfile() {{
                            connectionAttributes = new java.util.HashMap<String, String>() {{
                                put("quibusdam", "explicabo");
                                put("deserunt", "distinctio");
                                put("quibusdam", "labore");
                            }};
                            databaseService = "modi";
                            hostname = "delightful-graph.name";
                            password = "quos";
                            port = 20107;
                            username = "Casimir.Simonis";
                        }};;
                        privateConnectivity = new PrivateConnectivity() {{
                            privateConnectionName = "fugit";
                        }};;
                        staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("excepturi", "tempora");
                            put("facilis", "tempore");
                            put("labore", "delectus");
                        }};
                    }};;
                    connectionProfileName = "eum";
                    mysqlRdbms = new MysqlRdbms() {{
                        mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                            add(new MysqlDatabase() {{
                                databaseName = "eligendi";
                                mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                    add(new MysqlTable() {{
                                        mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                            add(new MysqlColumn() {{
                                                collation = "provident";
                                                columnName = "necessitatibus";
                                                dataType = "sint";
                                                length = 638921;
                                                nullable = false;
                                                ordinalPosition = 223081;
                                                primaryKey = false;
                                            }}),
                                            add(new MysqlColumn() {{
                                                collation = "debitis";
                                                columnName = "a";
                                                dataType = "dolorum";
                                                length = 447125;
                                                nullable = false;
                                                ordinalPosition = 449198;
                                                primaryKey = false;
                                            }}),
                                        }};
                                        tableName = "illum";
                                    }}),
                                    add(new MysqlTable() {{
                                        mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                            add(new MysqlColumn() {{
                                                collation = "rerum";
                                                columnName = "dicta";
                                                dataType = "magnam";
                                                length = 767024;
                                                nullable = false;
                                                ordinalPosition = 813798;
                                                primaryKey = false;
                                            }}),
                                            add(new MysqlColumn() {{
                                                collation = "ea";
                                                columnName = "aliquid";
                                                dataType = "laborum";
                                                length = 881104;
                                                nullable = false;
                                                ordinalPosition = 249796;
                                                primaryKey = false;
                                            }}),
                                            add(new MysqlColumn() {{
                                                collation = "occaecati";
                                                columnName = "enim";
                                                dataType = "accusamus";
                                                length = 965417;
                                                nullable = false;
                                                ordinalPosition = 692532;
                                                primaryKey = false;
                                            }}),
                                            add(new MysqlColumn() {{
                                                collation = "provident";
                                                columnName = "nam";
                                                dataType = "id";
                                                length = 501324;
                                                nullable = false;
                                                ordinalPosition = 533206;
                                                primaryKey = false;
                                            }}),
                                        }};
                                        tableName = "sapiente";
                                    }}),
                                    add(new MysqlTable() {{
                                        mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                            add(new MysqlColumn() {{
                                                collation = "deserunt";
                                                columnName = "nisi";
                                                dataType = "vel";
                                                length = 618809;
                                                nullable = false;
                                                ordinalPosition = 606393;
                                                primaryKey = false;
                                            }}),
                                        }};
                                        tableName = "molestiae";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    oracleRdbms = new OracleRdbms() {{
                        oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                            add(new OracleSchema() {{
                                oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                columnName = "distinctio";
                                                dataType = "id";
                                                encoding = "labore";
                                                length = 290077;
                                                nullable = false;
                                                ordinalPosition = 383462;
                                                precision = 618016;
                                                primaryKey = false;
                                                scale = 749170;
                                            }}),
                                            add(new OracleColumn() {{
                                                columnName = "eum";
                                                dataType = "vero";
                                                encoding = "aspernatur";
                                                length = 102863;
                                                nullable = false;
                                                ordinalPosition = 298282;
                                                precision = 92373;
                                                primaryKey = false;
                                                scale = 569965;
                                            }}),
                                        }};
                                        tableName = "ullam";
                                    }}),
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                columnName = "quos";
                                                dataType = "sint";
                                                encoding = "accusantium";
                                                length = 653201;
                                                nullable = false;
                                                ordinalPosition = 968962;
                                                precision = 652103;
                                                primaryKey = false;
                                                scale = 320997;
                                            }}),
                                            add(new OracleColumn() {{
                                                columnName = "eum";
                                                dataType = "dolor";
                                                encoding = "necessitatibus";
                                                length = 141264;
                                                nullable = false;
                                                ordinalPosition = 367562;
                                                precision = 97260;
                                                primaryKey = false;
                                                scale = 435865;
                                            }}),
                                            add(new OracleColumn() {{
                                                columnName = "doloribus";
                                                dataType = "debitis";
                                                encoding = "eius";
                                                length = 806194;
                                                nullable = false;
                                                ordinalPosition = 537023;
                                                precision = 703889;
                                                primaryKey = false;
                                                scale = 447926;
                                            }}),
                                        }};
                                        tableName = "architecto";
                                    }}),
                                }};
                                schemaName = "architecto";
                            }}),
                        }};
                    }};;
                    recursionDepth = 919483;
                    recursive = false;
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "repellat";
                key = "quibusdam";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "pariatur";
                uploadProtocol = "accusantium";
            }};            

            DatastreamProjectsLocationsConnectionProfilesDiscoverResponse res = sdk.projects.datastreamProjectsLocationsConnectionProfilesDiscover(req, new DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity("consequuntur", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.discoverConnectionProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastreamProjectsLocationsConnectionProfilesList

Use this method to list connection profiles created in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesListRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesListResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsConnectionProfilesListRequest req = new DatastreamProjectsLocationsConnectionProfilesListRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "pariatur";
                filter = "maxime";
                key = "ea";
                oauthToken = "excepturi";
                orderBy = "odit";
                pageSize = 407183L;
                pageToken = "accusantium";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "maiores";
                uploadProtocol = "quidem";
            }};            

            DatastreamProjectsLocationsConnectionProfilesListResponse res = sdk.projects.datastreamProjectsLocationsConnectionProfilesList(req, new DatastreamProjectsLocationsConnectionProfilesListSecurity("ipsam", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listConnectionProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastreamProjectsLocationsFetchStaticIps

The FetchStaticIps API call exposes the static IP addresses used by Datastream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsFetchStaticIpsRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsFetchStaticIpsResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsFetchStaticIpsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsFetchStaticIpsRequest req = new DatastreamProjectsLocationsFetchStaticIpsRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "voluptatibus";
                key = "perferendis";
                oauthToken = "fugiat";
                pageSize = 230742L;
                pageToken = "aut";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "corporis";
                uploadProtocol = "hic";
            }};            

            DatastreamProjectsLocationsFetchStaticIpsResponse res = sdk.projects.datastreamProjectsLocationsFetchStaticIps(req, new DatastreamProjectsLocationsFetchStaticIpsSecurity("libero", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchStaticIpsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastreamProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsListRequest req = new DatastreamProjectsLocationsListRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "quis";
                filter = "nesciunt";
                key = "eos";
                oauthToken = "perferendis";
                pageSize = 170986L;
                pageToken = "minus";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "dolor";
                uploadProtocol = "vero";
            }};            

            DatastreamProjectsLocationsListResponse res = sdk.projects.datastreamProjectsLocationsList(req, new DatastreamProjectsLocationsListSecurity("nostrum", "hic") {{
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

## datastreamProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsOperationsCancelRequest req = new DatastreamProjectsLocationsOperationsCancelRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("perspiciatis", "voluptatem");
                    put("porro", "consequuntur");
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

            DatastreamProjectsLocationsOperationsCancelResponse res = sdk.projects.datastreamProjectsLocationsOperationsCancel(req, new DatastreamProjectsLocationsOperationsCancelSecurity("deleniti", "pariatur") {{
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

## datastreamProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsOperationsListRequest req = new DatastreamProjectsLocationsOperationsListRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "quos";
                filter = "aliquid";
                key = "dolorem";
                oauthToken = "dolorem";
                pageSize = 222443L;
                pageToken = "qui";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "hic";
                uploadProtocol = "excepturi";
            }};            

            DatastreamProjectsLocationsOperationsListResponse res = sdk.projects.datastreamProjectsLocationsOperationsList(req, new DatastreamProjectsLocationsOperationsListSecurity("cum", "voluptate") {{
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

## datastreamProjectsLocationsPrivateConnectionsCreate

Use this method to create a private connectivity configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsCreateRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsCreateResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.PrivateConnectionInput;
import org.openapis.openapi.models.shared.VpcPeeringConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsPrivateConnectionsCreateRequest req = new DatastreamProjectsLocationsPrivateConnectionsCreateRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                privateConnectionInput = new PrivateConnectionInput() {{
                    displayName = "amet";
                    error = new Error() {{
                        details = new java.util.HashMap<String, String>() {{
                            put("numquam", "veritatis");
                            put("ipsa", "ipsa");
                            put("iure", "odio");
                        }};
                        errorTime = "quaerat";
                        errorUuid = "accusamus";
                        message = "quidem";
                        reason = "voluptatibus";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("natus", "eos");
                        put("atque", "sit");
                    }};
                    vpcPeeringConfig = new VpcPeeringConfig() {{
                        subnet = "fugiat";
                        vpcName = "ab";
                    }};;
                }};;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "voluptate";
                key = "dolorum";
                oauthToken = "deleniti";
                prettyPrint = false;
                privateConnectionId = "omnis";
                quotaUser = "necessitatibus";
                requestId = "distinctio";
                uploadType = "asperiores";
                uploadProtocol = "nihil";
            }};            

            DatastreamProjectsLocationsPrivateConnectionsCreateResponse res = sdk.projects.datastreamProjectsLocationsPrivateConnectionsCreate(req, new DatastreamProjectsLocationsPrivateConnectionsCreateSecurity("ipsum", "voluptate") {{
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

## datastreamProjectsLocationsPrivateConnectionsList

Use this method to list private connectivity configurations in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsListRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsListResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsPrivateConnectionsListRequest req = new DatastreamProjectsLocationsPrivateConnectionsListRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "amet";
                filter = "optio";
                key = "accusamus";
                oauthToken = "ad";
                orderBy = "saepe";
                pageSize = 383464L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "minima";
                uploadProtocol = "repellendus";
            }};            

            DatastreamProjectsLocationsPrivateConnectionsListResponse res = sdk.projects.datastreamProjectsLocationsPrivateConnectionsList(req, new DatastreamProjectsLocationsPrivateConnectionsListSecurity("totam", "similique") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPrivateConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastreamProjectsLocationsPrivateConnectionsRoutesCreate

Use this method to create a route for a private connectivity in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RouteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest req = new DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                routeInput = new RouteInput() {{
                    destinationAddress = "quaerat";
                    destinationPort = 273542;
                    displayName = "vel";
                    labels = new java.util.HashMap<String, String>() {{
                        put("officiis", "qui");
                        put("dolorum", "a");
                        put("esse", "harum");
                        put("iusto", "ipsum");
                    }};
                }};;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "tempore";
                key = "accusamus";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "enim";
                requestId = "dolorem";
                routeId = "sapiente";
                uploadType = "totam";
                uploadProtocol = "nihil";
            }};            

            DatastreamProjectsLocationsPrivateConnectionsRoutesCreateResponse res = sdk.projects.datastreamProjectsLocationsPrivateConnectionsRoutesCreate(req, new DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity("sit", "expedita") {{
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

## datastreamProjectsLocationsPrivateConnectionsRoutesList

Use this method to list routes created for a private connectivity in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest req = new DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest("neque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "deserunt";
                filter = "quam";
                key = "ipsum";
                oauthToken = "incidunt";
                orderBy = "qui";
                pageSize = 586784L;
                pageToken = "maxime";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "soluta";
                uploadProtocol = "dicta";
            }};            

            DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse res = sdk.projects.datastreamProjectsLocationsPrivateConnectionsRoutesList(req, new DatastreamProjectsLocationsPrivateConnectionsRoutesListSecurity("laborum", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRoutesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastreamProjectsLocationsStreamsCreate

Use this method to create a stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsCreateRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsCreateResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackfillAllStrategy;
import org.openapis.openapi.models.shared.DestinationConfig;
import org.openapis.openapi.models.shared.GcsDestinationConfig;
import org.openapis.openapi.models.shared.GcsDestinationConfigGcsFileFormatEnum;
import org.openapis.openapi.models.shared.JsonFileFormat;
import org.openapis.openapi.models.shared.JsonFileFormatCompressionEnum;
import org.openapis.openapi.models.shared.JsonFileFormatSchemaFileFormatEnum;
import org.openapis.openapi.models.shared.MysqlColumn;
import org.openapis.openapi.models.shared.MysqlDatabase;
import org.openapis.openapi.models.shared.MysqlRdbms;
import org.openapis.openapi.models.shared.MysqlSourceConfig;
import org.openapis.openapi.models.shared.MysqlTable;
import org.openapis.openapi.models.shared.OracleColumn;
import org.openapis.openapi.models.shared.OracleRdbms;
import org.openapis.openapi.models.shared.OracleSchema;
import org.openapis.openapi.models.shared.OracleSourceConfig;
import org.openapis.openapi.models.shared.OracleTable;
import org.openapis.openapi.models.shared.SourceConfig;
import org.openapis.openapi.models.shared.StreamInput;
import org.openapis.openapi.models.shared.StreamStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsCreateRequest req = new DatastreamProjectsLocationsStreamsCreateRequest("incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                streamInput = new StreamInput() {{
                    backfillAll = new BackfillAllStrategy() {{
                        mysqlExcludedObjects = new MysqlRdbms() {{
                            mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                add(new MysqlDatabase() {{
                                    databaseName = "distinctio";
                                    mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "quam";
                                                    columnName = "molestias";
                                                    dataType = "temporibus";
                                                    length = 183280;
                                                    nullable = false;
                                                    ordinalPosition = 204865;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "fugit";
                                                    columnName = "magni";
                                                    dataType = "odio";
                                                    length = 124833;
                                                    nullable = false;
                                                    ordinalPosition = 355613;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "nam";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "voluptatem";
                                                    columnName = "cumque";
                                                    dataType = "soluta";
                                                    length = 748664;
                                                    nullable = false;
                                                    ordinalPosition = 92596;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "saepe";
                                                    columnName = "ipsum";
                                                    dataType = "veritatis";
                                                    length = 749255;
                                                    nullable = false;
                                                    ordinalPosition = 552193;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "tempore";
                                                    columnName = "cupiditate";
                                                    dataType = "aperiam";
                                                    length = 961937;
                                                    nullable = false;
                                                    ordinalPosition = 209157;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "dolore";
                                                    columnName = "labore";
                                                    dataType = "adipisci";
                                                    length = 677263;
                                                    nullable = false;
                                                    ordinalPosition = 100294;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "quae";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "quas";
                                                    columnName = "itaque";
                                                    dataType = "consequatur";
                                                    length = 669917;
                                                    nullable = false;
                                                    ordinalPosition = 833038;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "porro";
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        oracleExcludedObjects = new OracleRdbms() {{
                            oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                                add(new OracleSchema() {{
                                    oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "cupiditate";
                                                    dataType = "qui";
                                                    encoding = "quae";
                                                    length = 512393;
                                                    nullable = false;
                                                    ordinalPosition = 485628;
                                                    precision = 580447;
                                                    primaryKey = false;
                                                    scale = 977496;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "quisquam";
                                                    dataType = "vero";
                                                    encoding = "omnis";
                                                    length = 338159;
                                                    nullable = false;
                                                    ordinalPosition = 218403;
                                                    precision = 961571;
                                                    primaryKey = false;
                                                    scale = 455169;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "consectetur";
                                                    dataType = "vero";
                                                    encoding = "tenetur";
                                                    length = 492268;
                                                    nullable = false;
                                                    ordinalPosition = 941378;
                                                    precision = 715561;
                                                    primaryKey = false;
                                                    scale = 799203;
                                                }}),
                                            }};
                                            tableName = "odio";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "facilis";
                                                    dataType = "vero";
                                                    encoding = "ducimus";
                                                    length = 293020;
                                                    nullable = false;
                                                    ordinalPosition = 844550;
                                                    precision = 848944;
                                                    primaryKey = false;
                                                    scale = 194342;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "natus";
                                                    dataType = "impedit";
                                                    encoding = "aut";
                                                    length = 974259;
                                                    nullable = false;
                                                    ordinalPosition = 347233;
                                                    precision = 862310;
                                                    primaryKey = false;
                                                    scale = 148141;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "porro";
                                                    dataType = "maiores";
                                                    encoding = "doloribus";
                                                    length = 478370;
                                                    nullable = false;
                                                    ordinalPosition = 753570;
                                                    precision = 497391;
                                                    primaryKey = false;
                                                    scale = 4048;
                                                }}),
                                            }};
                                            tableName = "officia";
                                        }}),
                                    }};
                                    schemaName = "tempora";
                                }}),
                                add(new OracleSchema() {{
                                    oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "aspernatur";
                                                    dataType = "vel";
                                                    encoding = "possimus";
                                                    length = 297842;
                                                    nullable = false;
                                                    ordinalPosition = 189848;
                                                    precision = 401132;
                                                    primaryKey = false;
                                                    scale = 511319;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "dicta";
                                                    dataType = "dolor";
                                                    encoding = "maiores";
                                                    length = 97844;
                                                    nullable = false;
                                                    ordinalPosition = 406120;
                                                    precision = 862192;
                                                    primaryKey = false;
                                                    scale = 569211;
                                                }}),
                                            }};
                                            tableName = "voluptatibus";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "sapiente";
                                                    dataType = "quisquam";
                                                    encoding = "saepe";
                                                    length = 411372;
                                                    nullable = false;
                                                    ordinalPosition = 774048;
                                                    precision = 359271;
                                                    primaryKey = false;
                                                    scale = 333145;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "aliquid";
                                                    dataType = "inventore";
                                                    encoding = "magnam";
                                                    length = 407241;
                                                    nullable = false;
                                                    ordinalPosition = 775220;
                                                    precision = 232234;
                                                    primaryKey = false;
                                                    scale = 926213;
                                                }}),
                                            }};
                                            tableName = "aspernatur";
                                        }}),
                                    }};
                                    schemaName = "minima";
                                }}),
                                add(new OracleSchema() {{
                                    oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "libero";
                                                    dataType = "aut";
                                                    encoding = "aut";
                                                    length = 533466;
                                                    nullable = false;
                                                    ordinalPosition = 770581;
                                                    precision = 304582;
                                                    primaryKey = false;
                                                    scale = 146946;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "accusamus";
                                                    dataType = "inventore";
                                                    encoding = "non";
                                                    length = 89603;
                                                    nullable = false;
                                                    ordinalPosition = 677412;
                                                    precision = 672048;
                                                    primaryKey = false;
                                                    scale = 810424;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "velit";
                                                    dataType = "eum";
                                                    encoding = "autem";
                                                    length = 752135;
                                                    nullable = false;
                                                    ordinalPosition = 557369;
                                                    precision = 829603;
                                                    primaryKey = false;
                                                    scale = 860552;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "voluptas";
                                                    dataType = "libero";
                                                    encoding = "quasi";
                                                    length = 270328;
                                                    nullable = false;
                                                    ordinalPosition = 256139;
                                                    precision = 131482;
                                                    primaryKey = false;
                                                    scale = 591935;
                                                }}),
                                            }};
                                            tableName = "ipsa";
                                        }}),
                                    }};
                                    schemaName = "molestiae";
                                }}),
                                add(new OracleSchema() {{
                                    oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "eius";
                                                    dataType = "esse";
                                                    encoding = "esse";
                                                    length = 524593;
                                                    nullable = false;
                                                    ordinalPosition = 683282;
                                                    precision = 442015;
                                                    primaryKey = false;
                                                    scale = 695626;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "fugiat";
                                                    dataType = "ut";
                                                    encoding = "eum";
                                                    length = 379927;
                                                    nullable = false;
                                                    ordinalPosition = 826871;
                                                    precision = 181151;
                                                    primaryKey = false;
                                                    scale = 509342;
                                                }}),
                                            }};
                                            tableName = "quisquam";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "ipsa";
                                                    dataType = "id";
                                                    encoding = "quidem";
                                                    length = 206594;
                                                    nullable = false;
                                                    ordinalPosition = 778696;
                                                    precision = 847276;
                                                    primaryKey = false;
                                                    scale = 777408;
                                                }}),
                                            }};
                                            tableName = "fuga";
                                        }}),
                                    }};
                                    schemaName = "eius";
                                }}),
                            }};
                        }};;
                    }};;
                    backfillNone = new java.util.HashMap<String, Object>() {{
                        put("voluptas", "ab");
                    }};
                    customerManagedEncryptionKey = "cupiditate";
                    destinationConfig = new DestinationConfig() {{
                        destinationConnectionProfileName = "consequatur";
                        gcsDestinationConfig = new GcsDestinationConfig() {{
                            avroFileFormat = new java.util.HashMap<String, Object>() {{
                                put("debitis", "ipsam");
                                put("aspernatur", "sequi");
                            }};
                            fileRotationInterval = "quo";
                            fileRotationMb = 459856;
                            gcsFileFormat = GcsDestinationConfigGcsFileFormatEnum.AVRO;
                            jsonFileFormat = new JsonFileFormat() {{
                                compression = JsonFileFormatCompressionEnum.JSON_COMPRESSION_UNSPECIFIED;
                                schemaFileFormat = JsonFileFormatSchemaFileFormatEnum.AVRO_SCHEMA_FILE;
                            }};;
                            path = "quod";
                        }};;
                    }};;
                    displayName = "dignissimos";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nihil", "totam");
                    }};
                    sourceConfig = new SourceConfig() {{
                        mysqlSourceConfig = new MysqlSourceConfig() {{
                            allowlist = new MysqlRdbms() {{
                                mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                    add(new MysqlDatabase() {{
                                        databaseName = "aliquam";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "commodi";
                                                        columnName = "sapiente";
                                                        dataType = "dolores";
                                                        length = 645570;
                                                        nullable = false;
                                                        ordinalPosition = 475289;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "accusantium";
                                                        columnName = "porro";
                                                        dataType = "eum";
                                                        length = 556429;
                                                        nullable = false;
                                                        ordinalPosition = 510017;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "consequuntur";
                                                        columnName = "deleniti";
                                                        dataType = "fugit";
                                                        length = 681393;
                                                        nullable = false;
                                                        ordinalPosition = 649463;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "incidunt";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "explicabo";
                                                        columnName = "minima";
                                                        dataType = "nisi";
                                                        length = 147014;
                                                        nullable = false;
                                                        ordinalPosition = 956406;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "consequuntur";
                                                        columnName = "ratione";
                                                        dataType = "explicabo";
                                                        length = 903984;
                                                        nullable = false;
                                                        ordinalPosition = 578922;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "atque";
                                                        columnName = "et";
                                                        dataType = "esse";
                                                        length = 910545;
                                                        nullable = false;
                                                        ordinalPosition = 882042;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "veritatis";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        databaseName = "esse";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "vero";
                                                        columnName = "aliquid";
                                                        dataType = "quasi";
                                                        length = 904045;
                                                        nullable = false;
                                                        ordinalPosition = 426306;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "harum";
                                                        columnName = "molestiae";
                                                        dataType = "rerum";
                                                        length = 580197;
                                                        nullable = false;
                                                        ordinalPosition = 327720;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "distinctio";
                                                        columnName = "eligendi";
                                                        dataType = "sit";
                                                        length = 636061;
                                                        nullable = false;
                                                        ordinalPosition = 731398;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "adipisci";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "consequuntur";
                                                        columnName = "consequatur";
                                                        dataType = "minus";
                                                        length = 308286;
                                                        nullable = false;
                                                        ordinalPosition = 959167;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "consectetur";
                                                        columnName = "esse";
                                                        dataType = "blanditiis";
                                                        length = 590984;
                                                        nullable = false;
                                                        ordinalPosition = 953722;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "nulla";
                                                        columnName = "quas";
                                                        dataType = "esse";
                                                        length = 97468;
                                                        nullable = false;
                                                        ordinalPosition = 951875;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "error";
                                                        columnName = "sint";
                                                        dataType = "pariatur";
                                                        length = 820767;
                                                        nullable = false;
                                                        ordinalPosition = 157632;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "eveniet";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "facere";
                                                        columnName = "veritatis";
                                                        dataType = "consequuntur";
                                                        length = 94458;
                                                        nullable = false;
                                                        ordinalPosition = 628899;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "culpa";
                                                        columnName = "aliquid";
                                                        dataType = "tenetur";
                                                        length = 62713;
                                                        nullable = false;
                                                        ordinalPosition = 936747;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "vel";
                                                        columnName = "in";
                                                        dataType = "eius";
                                                        length = 727697;
                                                        nullable = false;
                                                        ordinalPosition = 849039;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "soluta";
                                                        columnName = "accusantium";
                                                        dataType = "aliquam";
                                                        length = 958983;
                                                        nullable = false;
                                                        ordinalPosition = 119771;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "ullam";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "ullam";
                                                        columnName = "nisi";
                                                        dataType = "aut";
                                                        length = 531849;
                                                        nullable = false;
                                                        ordinalPosition = 185232;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "quibusdam";
                                                        columnName = "ex";
                                                        dataType = "deleniti";
                                                        length = 929292;
                                                        nullable = false;
                                                        ordinalPosition = 680270;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "architecto";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        databaseName = "omnis";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "at";
                                                        columnName = "et";
                                                        dataType = "voluptate";
                                                        length = 55965;
                                                        nullable = false;
                                                        ordinalPosition = 326701;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "veritatis";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "adipisci";
                                                        columnName = "iste";
                                                        dataType = "temporibus";
                                                        length = 33074;
                                                        nullable = false;
                                                        ordinalPosition = 522371;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "aut";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "eum";
                                                        columnName = "mollitia";
                                                        dataType = "ab";
                                                        length = 544591;
                                                        nullable = false;
                                                        ordinalPosition = 251941;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "voluptatem";
                                                        columnName = "dolor";
                                                        dataType = "occaecati";
                                                        length = 253191;
                                                        nullable = false;
                                                        ordinalPosition = 771089;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "explicabo";
                                                        columnName = "voluptas";
                                                        dataType = "aut";
                                                        length = 491025;
                                                        nullable = false;
                                                        ordinalPosition = 115484;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "maiores";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "velit";
                                                        columnName = "voluptatibus";
                                                        dataType = "voluptas";
                                                        length = 990345;
                                                        nullable = false;
                                                        ordinalPosition = 45659;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "ea";
                                                        columnName = "quaerat";
                                                        dataType = "consequuntur";
                                                        length = 831520;
                                                        nullable = false;
                                                        ordinalPosition = 638762;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "maxime";
                                                        columnName = "dignissimos";
                                                        dataType = "officia";
                                                        length = 989410;
                                                        nullable = false;
                                                        ordinalPosition = 368102;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "quae";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        databaseName = "quaerat";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "labore";
                                                        columnName = "ab";
                                                        dataType = "adipisci";
                                                        length = 683573;
                                                        nullable = false;
                                                        ordinalPosition = 662505;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "suscipit";
                                                        columnName = "velit";
                                                        dataType = "culpa";
                                                        length = 665859;
                                                        nullable = false;
                                                        ordinalPosition = 926880;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "totam";
                                                        columnName = "fugiat";
                                                        dataType = "vel";
                                                        length = 497678;
                                                        nullable = false;
                                                        ordinalPosition = 554688;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "vel";
                                                        columnName = "labore";
                                                        dataType = "possimus";
                                                        length = 706575;
                                                        nullable = false;
                                                        ordinalPosition = 738227;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "commodi";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "corporis";
                                                        columnName = "reiciendis";
                                                        dataType = "assumenda";
                                                        length = 363161;
                                                        nullable = false;
                                                        ordinalPosition = 924967;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "aliquid";
                                                        columnName = "aperiam";
                                                        dataType = "cum";
                                                        length = 232627;
                                                        nullable = false;
                                                        ordinalPosition = 449083;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "exercitationem";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "facere";
                                                        columnName = "numquam";
                                                        dataType = "doloribus";
                                                        length = 381760;
                                                        nullable = false;
                                                        ordinalPosition = 968972;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "quidem";
                                                        columnName = "saepe";
                                                        dataType = "necessitatibus";
                                                        length = 296556;
                                                        nullable = false;
                                                        ordinalPosition = 121059;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "asperiores";
                                                        columnName = "adipisci";
                                                        dataType = "non";
                                                        length = 228263;
                                                        nullable = false;
                                                        ordinalPosition = 105906;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "dignissimos";
                                                        columnName = "a";
                                                        dataType = "debitis";
                                                        length = 233420;
                                                        nullable = false;
                                                        ordinalPosition = 358107;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "harum";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "ipsa";
                                                        columnName = "voluptates";
                                                        dataType = "libero";
                                                        length = 113816;
                                                        nullable = false;
                                                        ordinalPosition = 881721;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "similique";
                                                        columnName = "tempora";
                                                        dataType = "aspernatur";
                                                        length = 379057;
                                                        nullable = false;
                                                        ordinalPosition = 374244;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "voluptas";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};;
                            rejectlist = new MysqlRdbms() {{
                                mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                    add(new MysqlDatabase() {{
                                        databaseName = "nobis";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "minus";
                                                        columnName = "dolores";
                                                        dataType = "blanditiis";
                                                        length = 449292;
                                                        nullable = false;
                                                        ordinalPosition = 296242;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "aliquam";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "temporibus";
                                                        columnName = "ullam";
                                                        dataType = "adipisci";
                                                        length = 738391;
                                                        nullable = false;
                                                        ordinalPosition = 502389;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "quas";
                                                        columnName = "hic";
                                                        dataType = "nesciunt";
                                                        length = 633998;
                                                        nullable = false;
                                                        ordinalPosition = 548519;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "pariatur";
                                                        columnName = "totam";
                                                        dataType = "hic";
                                                        length = 348783;
                                                        nullable = false;
                                                        ordinalPosition = 750765;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "sit";
                                                        columnName = "rerum";
                                                        dataType = "sed";
                                                        length = 967966;
                                                        nullable = false;
                                                        ordinalPosition = 131852;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "asperiores";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "voluptate";
                                                        columnName = "expedita";
                                                        dataType = "ab";
                                                        length = 611749;
                                                        nullable = false;
                                                        ordinalPosition = 292794;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "laborum";
                                                        columnName = "sed";
                                                        dataType = "in";
                                                        length = 417486;
                                                        nullable = false;
                                                        ordinalPosition = 696077;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "explicabo";
                                                        columnName = "voluptas";
                                                        dataType = "unde";
                                                        length = 100032;
                                                        nullable = false;
                                                        ordinalPosition = 382808;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "sapiente";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        databaseName = "debitis";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "perferendis";
                                                        columnName = "corrupti";
                                                        dataType = "maiores";
                                                        length = 274823;
                                                        nullable = false;
                                                        ordinalPosition = 148478;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "provident";
                                                        columnName = "eius";
                                                        dataType = "necessitatibus";
                                                        length = 215529;
                                                        nullable = false;
                                                        ordinalPosition = 406733;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "occaecati";
                                                        columnName = "quos";
                                                        dataType = "voluptatibus";
                                                        length = 271653;
                                                        nullable = false;
                                                        ordinalPosition = 273009;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "voluptate";
                                                        columnName = "reiciendis";
                                                        dataType = "ex";
                                                        length = 25497;
                                                        nullable = false;
                                                        ordinalPosition = 248413;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "officiis";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};;
                        }};;
                        oracleSourceConfig = new OracleSourceConfig() {{
                            allowlist = new OracleRdbms() {{
                                oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "incidunt";
                                                        dataType = "ipsam";
                                                        encoding = "debitis";
                                                        length = 524970;
                                                        nullable = false;
                                                        ordinalPosition = 26522;
                                                        precision = 750595;
                                                        primaryKey = false;
                                                        scale = 625637;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "veniam";
                                                        dataType = "minima";
                                                        encoding = "recusandae";
                                                        length = 967122;
                                                        nullable = false;
                                                        ordinalPosition = 862319;
                                                        precision = 168576;
                                                        primaryKey = false;
                                                        scale = 48690;
                                                    }}),
                                                }};
                                                tableName = "saepe";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "veniam";
                                                        dataType = "in";
                                                        encoding = "officiis";
                                                        length = 104627;
                                                        nullable = false;
                                                        ordinalPosition = 512452;
                                                        precision = 348476;
                                                        primaryKey = false;
                                                        scale = 510629;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "cum";
                                                        dataType = "laboriosam";
                                                        encoding = "dolorum";
                                                        length = 530089;
                                                        nullable = false;
                                                        ordinalPosition = 622385;
                                                        precision = 944708;
                                                        primaryKey = false;
                                                        scale = 710529;
                                                    }}),
                                                }};
                                                tableName = "debitis";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "dolorum";
                                                        dataType = "nostrum";
                                                        encoding = "officia";
                                                        length = 676243;
                                                        nullable = false;
                                                        ordinalPosition = 548361;
                                                        precision = 879235;
                                                        primaryKey = false;
                                                        scale = 272683;
                                                    }}),
                                                }};
                                                tableName = "atque";
                                            }}),
                                        }};
                                        schemaName = "fugit";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "voluptatem";
                                                        dataType = "culpa";
                                                        encoding = "expedita";
                                                        length = 299643;
                                                        nullable = false;
                                                        ordinalPosition = 7884;
                                                        precision = 460220;
                                                        primaryKey = false;
                                                        scale = 372679;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "sit";
                                                        dataType = "voluptatum";
                                                        encoding = "quas";
                                                        length = 922112;
                                                        nullable = false;
                                                        ordinalPosition = 361151;
                                                        precision = 89494;
                                                        primaryKey = false;
                                                        scale = 502710;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "ex";
                                                        dataType = "sed";
                                                        encoding = "sit";
                                                        length = 425508;
                                                        nullable = false;
                                                        ordinalPosition = 342611;
                                                        precision = 906172;
                                                        primaryKey = false;
                                                        scale = 622231;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "consequatur";
                                                        dataType = "incidunt";
                                                        encoding = "reiciendis";
                                                        length = 209750;
                                                        nullable = false;
                                                        ordinalPosition = 690894;
                                                        precision = 115703;
                                                        primaryKey = false;
                                                        scale = 99416;
                                                    }}),
                                                }};
                                                tableName = "occaecati";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "quidem";
                                                        dataType = "atque";
                                                        encoding = "laborum";
                                                        length = 724148;
                                                        nullable = false;
                                                        ordinalPosition = 948861;
                                                        precision = 388867;
                                                        primaryKey = false;
                                                        scale = 2703;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "amet";
                                                        dataType = "deserunt";
                                                        encoding = "voluptate";
                                                        length = 600392;
                                                        nullable = false;
                                                        ordinalPosition = 972083;
                                                        precision = 588740;
                                                        primaryKey = false;
                                                        scale = 833819;
                                                    }}),
                                                }};
                                                tableName = "delectus";
                                            }}),
                                        }};
                                        schemaName = "voluptates";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "quidem";
                                                        dataType = "reprehenderit";
                                                        encoding = "facere";
                                                        length = 685092;
                                                        nullable = false;
                                                        ordinalPosition = 509807;
                                                        precision = 648598;
                                                        primaryKey = false;
                                                        scale = 333965;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "voluptatem";
                                                        dataType = "quisquam";
                                                        encoding = "repudiandae";
                                                        length = 97243;
                                                        nullable = false;
                                                        ordinalPosition = 542457;
                                                        precision = 442036;
                                                        primaryKey = false;
                                                        scale = 991142;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "totam";
                                                        dataType = "suscipit";
                                                        encoding = "quidem";
                                                        length = 806670;
                                                        nullable = false;
                                                        ordinalPosition = 90885;
                                                        precision = 461007;
                                                        primaryKey = false;
                                                        scale = 227759;
                                                    }}),
                                                }};
                                                tableName = "assumenda";
                                            }}),
                                        }};
                                        schemaName = "ea";
                                    }}),
                                }};
                            }};;
                            dropLargeObjects = new java.util.HashMap<String, Object>() {{
                                put("error", "officiis");
                                put("officiis", "accusamus");
                                put("natus", "minima");
                            }};
                            rejectlist = new OracleRdbms() {{
                                oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "corrupti";
                                                        dataType = "at";
                                                        encoding = "error";
                                                        length = 502721;
                                                        nullable = false;
                                                        ordinalPosition = 379356;
                                                        precision = 922348;
                                                        primaryKey = false;
                                                        scale = 542129;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "atque";
                                                        dataType = "sunt";
                                                        encoding = "recusandae";
                                                        length = 680697;
                                                        nullable = false;
                                                        ordinalPosition = 829898;
                                                        precision = 287119;
                                                        primaryKey = false;
                                                        scale = 968287;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "doloremque";
                                                        dataType = "repudiandae";
                                                        encoding = "dicta";
                                                        length = 36033;
                                                        nullable = false;
                                                        ordinalPosition = 106429;
                                                        precision = 174772;
                                                        primaryKey = false;
                                                        scale = 316488;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "laboriosam";
                                                        dataType = "velit";
                                                        encoding = "a";
                                                        length = 562783;
                                                        nullable = false;
                                                        ordinalPosition = 300029;
                                                        precision = 906355;
                                                        primaryKey = false;
                                                        scale = 160467;
                                                    }}),
                                                }};
                                                tableName = "occaecati";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "perspiciatis";
                                                        dataType = "in";
                                                        encoding = "adipisci";
                                                        length = 907876;
                                                        nullable = false;
                                                        ordinalPosition = 580887;
                                                        precision = 160230;
                                                        primaryKey = false;
                                                        scale = 145870;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "id";
                                                        dataType = "quis";
                                                        encoding = "reprehenderit";
                                                        length = 625528;
                                                        nullable = false;
                                                        ordinalPosition = 76486;
                                                        precision = 361306;
                                                        primaryKey = false;
                                                        scale = 696463;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "eveniet";
                                                        dataType = "non";
                                                        encoding = "vero";
                                                        length = 39615;
                                                        nullable = false;
                                                        ordinalPosition = 434156;
                                                        precision = 59944;
                                                        primaryKey = false;
                                                        scale = 517612;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "quae";
                                                        dataType = "molestiae";
                                                        encoding = "eveniet";
                                                        length = 184362;
                                                        nullable = false;
                                                        ordinalPosition = 739884;
                                                        precision = 434761;
                                                        primaryKey = false;
                                                        scale = 898063;
                                                    }}),
                                                }};
                                                tableName = "ratione";
                                            }}),
                                        }};
                                        schemaName = "laborum";
                                    }}),
                                }};
                            }};;
                        }};;
                        sourceConnectionProfileName = "distinctio";
                    }};;
                    state = StreamStateEnum.MAINTENANCE;
                }};;
                accessToken = "rem";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "repellat";
                force = false;
                key = "alias";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                requestId = "nihil";
                streamId = "mollitia";
                uploadType = "voluptas";
                uploadProtocol = "alias";
                validateOnly = false;
            }};            

            DatastreamProjectsLocationsStreamsCreateResponse res = sdk.projects.datastreamProjectsLocationsStreamsCreate(req, new DatastreamProjectsLocationsStreamsCreateSecurity("maiores", "reiciendis") {{
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

## datastreamProjectsLocationsStreamsDelete

Use this method to delete a stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsDeleteRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsDeleteResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsDeleteRequest req = new DatastreamProjectsLocationsStreamsDeleteRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "nesciunt";
                key = "quae";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "omnis";
                requestId = "quaerat";
                uploadType = "molestiae";
                uploadProtocol = "ex";
            }};            

            DatastreamProjectsLocationsStreamsDeleteResponse res = sdk.projects.datastreamProjectsLocationsStreamsDelete(req, new DatastreamProjectsLocationsStreamsDeleteSecurity("ut", "culpa") {{
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

## datastreamProjectsLocationsStreamsFetchErrors

Use this method to fetch any errors associated with a stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsFetchErrorsRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsFetchErrorsResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsFetchErrorsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsFetchErrorsRequest req = new DatastreamProjectsLocationsStreamsFetchErrorsRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eum", "nemo");
                    put("recusandae", "esse");
                    put("provident", "quis");
                }};
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "aspernatur";
                key = "ullam";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "nostrum";
                uploadProtocol = "mollitia";
            }};            

            DatastreamProjectsLocationsStreamsFetchErrorsResponse res = sdk.projects.datastreamProjectsLocationsStreamsFetchErrors(req, new DatastreamProjectsLocationsStreamsFetchErrorsSecurity("provident", "possimus") {{
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

## datastreamProjectsLocationsStreamsList

Use this method to list streams in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsListRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsListResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsListRequest req = new DatastreamProjectsLocationsStreamsListRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "doloribus";
                filter = "ullam";
                key = "in";
                oauthToken = "nam";
                orderBy = "earum";
                pageSize = 637583L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "modi";
                uploadProtocol = "voluptatibus";
            }};            

            DatastreamProjectsLocationsStreamsListResponse res = sdk.projects.datastreamProjectsLocationsStreamsList(req, new DatastreamProjectsLocationsStreamsListSecurity("molestias", "officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listStreamsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastreamProjectsLocationsStreamsObjectsGet

Use this method to get details about a stream object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsGetRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsGetResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsObjectsGetRequest req = new DatastreamProjectsLocationsStreamsObjectsGetRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "quis";
                key = "inventore";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "quae";
                uploadProtocol = "perferendis";
            }};            

            DatastreamProjectsLocationsStreamsObjectsGetResponse res = sdk.projects.datastreamProjectsLocationsStreamsObjectsGet(req, new DatastreamProjectsLocationsStreamsObjectsGetSecurity("velit", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.streamObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastreamProjectsLocationsStreamsObjectsList

Use this method to list the objects of a specific stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsListRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsListResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsObjectsListRequest req = new DatastreamProjectsLocationsStreamsObjectsListRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "eos";
                key = "sapiente";
                oauthToken = "eum";
                pageSize = 117320L;
                pageToken = "minima";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "cupiditate";
                uploadProtocol = "provident";
            }};            

            DatastreamProjectsLocationsStreamsObjectsListResponse res = sdk.projects.datastreamProjectsLocationsStreamsObjectsList(req, new DatastreamProjectsLocationsStreamsObjectsListSecurity("earum", "soluta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listStreamObjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastreamProjectsLocationsStreamsObjectsStartBackfillJob

Starts backfill job for the specified stream object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest req = new DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "maiores";
                key = "debitis";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "suscipit";
                uploadProtocol = "dolorem";
            }};            

            DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse res = sdk.projects.datastreamProjectsLocationsStreamsObjectsStartBackfillJob(req, new DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity("fugit", "cumque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.startBackfillJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastreamProjectsLocationsStreamsObjectsStopBackfillJob

Stops the backfill job for the specified stream object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest req = new DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "animi";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "consequatur";
                key = "quasi";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "natus";
                uploadProtocol = "occaecati";
            }};            

            DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse res = sdk.projects.datastreamProjectsLocationsStreamsObjectsStopBackfillJob(req, new DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity("suscipit", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.stopBackfillJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastreamProjectsLocationsStreamsPatch

Use this method to update the configuration of a stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsPatchRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsPatchResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackfillAllStrategy;
import org.openapis.openapi.models.shared.DestinationConfig;
import org.openapis.openapi.models.shared.GcsDestinationConfig;
import org.openapis.openapi.models.shared.GcsDestinationConfigGcsFileFormatEnum;
import org.openapis.openapi.models.shared.JsonFileFormat;
import org.openapis.openapi.models.shared.JsonFileFormatCompressionEnum;
import org.openapis.openapi.models.shared.JsonFileFormatSchemaFileFormatEnum;
import org.openapis.openapi.models.shared.MysqlColumn;
import org.openapis.openapi.models.shared.MysqlDatabase;
import org.openapis.openapi.models.shared.MysqlRdbms;
import org.openapis.openapi.models.shared.MysqlSourceConfig;
import org.openapis.openapi.models.shared.MysqlTable;
import org.openapis.openapi.models.shared.OracleColumn;
import org.openapis.openapi.models.shared.OracleRdbms;
import org.openapis.openapi.models.shared.OracleSchema;
import org.openapis.openapi.models.shared.OracleSourceConfig;
import org.openapis.openapi.models.shared.OracleTable;
import org.openapis.openapi.models.shared.SourceConfig;
import org.openapis.openapi.models.shared.StreamInput;
import org.openapis.openapi.models.shared.StreamStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsPatchRequest req = new DatastreamProjectsLocationsStreamsPatchRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                streamInput = new StreamInput() {{
                    backfillAll = new BackfillAllStrategy() {{
                        mysqlExcludedObjects = new MysqlRdbms() {{
                            mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                add(new MysqlDatabase() {{
                                    databaseName = "nulla";
                                    mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "tempora";
                                                    columnName = "nihil";
                                                    dataType = "molestiae";
                                                    length = 115834;
                                                    nullable = false;
                                                    ordinalPosition = 479754;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "esse";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "maiores";
                                                    columnName = "reiciendis";
                                                    dataType = "vel";
                                                    length = 99958;
                                                    nullable = false;
                                                    ordinalPosition = 857125;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "doloremque";
                                                    columnName = "dicta";
                                                    dataType = "odio";
                                                    length = 271252;
                                                    nullable = false;
                                                    ordinalPosition = 458259;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "ex";
                                                    columnName = "consectetur";
                                                    dataType = "aliquid";
                                                    length = 58870;
                                                    nullable = false;
                                                    ordinalPosition = 671384;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "sunt";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "fugiat";
                                                    columnName = "expedita";
                                                    dataType = "aliquid";
                                                    length = 639187;
                                                    nullable = false;
                                                    ordinalPosition = 381397;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "aliquid";
                                                    columnName = "perferendis";
                                                    dataType = "eum";
                                                    length = 374753;
                                                    nullable = false;
                                                    ordinalPosition = 614528;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "id";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "error";
                                                    columnName = "possimus";
                                                    dataType = "voluptates";
                                                    length = 653421;
                                                    nullable = false;
                                                    ordinalPosition = 671794;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "libero";
                                        }}),
                                    }};
                                }}),
                                add(new MysqlDatabase() {{
                                    databaseName = "ad";
                                    mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "vitae";
                                                    columnName = "repellendus";
                                                    dataType = "ex";
                                                    length = 775803;
                                                    nullable = false;
                                                    ordinalPosition = 405373;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "ut";
                                                    columnName = "ad";
                                                    dataType = "expedita";
                                                    length = 29950;
                                                    nullable = false;
                                                    ordinalPosition = 561577;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "cum";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "beatae";
                                                    columnName = "voluptatum";
                                                    dataType = "omnis";
                                                    length = 85233;
                                                    nullable = false;
                                                    ordinalPosition = 703218;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "est";
                                                    columnName = "culpa";
                                                    dataType = "voluptatem";
                                                    length = 959143;
                                                    nullable = false;
                                                    ordinalPosition = 889288;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "architecto";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "pariatur";
                                                    columnName = "debitis";
                                                    dataType = "voluptatem";
                                                    length = 1207;
                                                    nullable = false;
                                                    ordinalPosition = 534917;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "earum";
                                                    columnName = "ex";
                                                    dataType = "sapiente";
                                                    length = 524184;
                                                    nullable = false;
                                                    ordinalPosition = 796320;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "nemo";
                                                    columnName = "asperiores";
                                                    dataType = "ratione";
                                                    length = 355225;
                                                    nullable = false;
                                                    ordinalPosition = 19122;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "illum";
                                        }}),
                                    }};
                                }}),
                                add(new MysqlDatabase() {{
                                    databaseName = "totam";
                                    mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "nam";
                                                    columnName = "ipsam";
                                                    dataType = "culpa";
                                                    length = 222864;
                                                    nullable = false;
                                                    ordinalPosition = 307376;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "inventore";
                                                    columnName = "deleniti";
                                                    dataType = "veritatis";
                                                    length = 274575;
                                                    nullable = false;
                                                    ordinalPosition = 221396;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "consequatur";
                                                    columnName = "architecto";
                                                    dataType = "sit";
                                                    length = 265039;
                                                    nullable = false;
                                                    ordinalPosition = 144286;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "ab";
                                                    columnName = "laudantium";
                                                    dataType = "quae";
                                                    length = 222658;
                                                    nullable = false;
                                                    ordinalPosition = 856277;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "ipsam";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "ipsa";
                                                    columnName = "quas";
                                                    dataType = "eveniet";
                                                    length = 773456;
                                                    nullable = false;
                                                    ordinalPosition = 884952;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "esse";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "sed";
                                                    columnName = "veniam";
                                                    dataType = "nesciunt";
                                                    length = 712927;
                                                    nullable = false;
                                                    ordinalPosition = 432984;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "vel";
                                                    columnName = "voluptatum";
                                                    dataType = "magnam";
                                                    length = 349440;
                                                    nullable = false;
                                                    ordinalPosition = 70410;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "porro";
                                                    columnName = "autem";
                                                    dataType = "nobis";
                                                    length = 388319;
                                                    nullable = false;
                                                    ordinalPosition = 927212;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "consequuntur";
                                                    columnName = "voluptatem";
                                                    dataType = "exercitationem";
                                                    length = 895692;
                                                    nullable = false;
                                                    ordinalPosition = 95619;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "nisi";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "vero";
                                                    columnName = "est";
                                                    dataType = "harum";
                                                    length = 192718;
                                                    nullable = false;
                                                    ordinalPosition = 987349;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "repudiandae";
                                                    columnName = "optio";
                                                    dataType = "occaecati";
                                                    length = 364544;
                                                    nullable = false;
                                                    ordinalPosition = 455898;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "blanditiis";
                                                    columnName = "officia";
                                                    dataType = "voluptas";
                                                    length = 254025;
                                                    nullable = false;
                                                    ordinalPosition = 364912;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "quos";
                                                    columnName = "eius";
                                                    dataType = "aspernatur";
                                                    length = 495970;
                                                    nullable = false;
                                                    ordinalPosition = 200516;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "fuga";
                                        }}),
                                    }};
                                }}),
                                add(new MysqlDatabase() {{
                                    databaseName = "laudantium";
                                    mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "rem";
                                                    columnName = "fugiat";
                                                    dataType = "dicta";
                                                    length = 395544;
                                                    nullable = false;
                                                    ordinalPosition = 159845;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "consectetur";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "cupiditate";
                                                    columnName = "reiciendis";
                                                    dataType = "soluta";
                                                    length = 3860;
                                                    nullable = false;
                                                    ordinalPosition = 608989;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            tableName = "eos";
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        oracleExcludedObjects = new OracleRdbms() {{
                            oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                                add(new OracleSchema() {{
                                    oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "inventore";
                                                    dataType = "fuga";
                                                    encoding = "accusamus";
                                                    length = 976802;
                                                    nullable = false;
                                                    ordinalPosition = 719620;
                                                    precision = 608593;
                                                    primaryKey = false;
                                                    scale = 966390;
                                                }}),
                                            }};
                                            tableName = "minima";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "maxime";
                                                    dataType = "magnam";
                                                    encoding = "temporibus";
                                                    length = 549501;
                                                    nullable = false;
                                                    ordinalPosition = 415280;
                                                    precision = 930819;
                                                    primaryKey = false;
                                                    scale = 415608;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "totam";
                                                    dataType = "earum";
                                                    encoding = "modi";
                                                    length = 722184;
                                                    nullable = false;
                                                    ordinalPosition = 877399;
                                                    precision = 32901;
                                                    primaryKey = false;
                                                    scale = 371919;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "vel";
                                                    dataType = "alias";
                                                    encoding = "quasi";
                                                    length = 247685;
                                                    nullable = false;
                                                    ordinalPosition = 978548;
                                                    precision = 318233;
                                                    primaryKey = false;
                                                    scale = 575213;
                                                }}),
                                            }};
                                            tableName = "nulla";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "esse";
                                                    dataType = "nemo";
                                                    encoding = "reprehenderit";
                                                    length = 667715;
                                                    nullable = false;
                                                    ordinalPosition = 336102;
                                                    precision = 571844;
                                                    primaryKey = false;
                                                    scale = 880679;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "impedit";
                                                    dataType = "hic";
                                                    encoding = "necessitatibus";
                                                    length = 991891;
                                                    nullable = false;
                                                    ordinalPosition = 404306;
                                                    precision = 376741;
                                                    primaryKey = false;
                                                    scale = 895346;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "delectus";
                                                    dataType = "quae";
                                                    encoding = "minus";
                                                    length = 685478;
                                                    nullable = false;
                                                    ordinalPosition = 675689;
                                                    precision = 231070;
                                                    primaryKey = false;
                                                    scale = 244889;
                                                }}),
                                            }};
                                            tableName = "atque";
                                        }}),
                                    }};
                                    schemaName = "ipsum";
                                }}),
                                add(new OracleSchema() {{
                                    oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "soluta";
                                                    dataType = "repudiandae";
                                                    encoding = "nam";
                                                    length = 294076;
                                                    nullable = false;
                                                    ordinalPosition = 482892;
                                                    precision = 453094;
                                                    primaryKey = false;
                                                    scale = 194023;
                                                }}),
                                            }};
                                            tableName = "dignissimos";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "quo";
                                                    dataType = "deleniti";
                                                    encoding = "quibusdam";
                                                    length = 437814;
                                                    nullable = false;
                                                    ordinalPosition = 139072;
                                                    precision = 974990;
                                                    primaryKey = false;
                                                    scale = 426904;
                                                }}),
                                            }};
                                            tableName = "magnam";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "inventore";
                                                    dataType = "facere";
                                                    encoding = "libero";
                                                    length = 102413;
                                                    nullable = false;
                                                    ordinalPosition = 975425;
                                                    precision = 156383;
                                                    primaryKey = false;
                                                    scale = 782090;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "aliquam";
                                                    dataType = "velit";
                                                    encoding = "illo";
                                                    length = 36561;
                                                    nullable = false;
                                                    ordinalPosition = 424663;
                                                    precision = 406922;
                                                    primaryKey = false;
                                                    scale = 107617;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "vero";
                                                    dataType = "excepturi";
                                                    encoding = "eum";
                                                    length = 246557;
                                                    nullable = false;
                                                    ordinalPosition = 284086;
                                                    precision = 596433;
                                                    primaryKey = false;
                                                    scale = 935302;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "dicta";
                                                    dataType = "impedit";
                                                    encoding = "voluptatibus";
                                                    length = 610987;
                                                    nullable = false;
                                                    ordinalPosition = 932562;
                                                    precision = 2677;
                                                    primaryKey = false;
                                                    scale = 391797;
                                                }}),
                                            }};
                                            tableName = "itaque";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "laborum";
                                                    dataType = "non";
                                                    encoding = "dolor";
                                                    length = 483394;
                                                    nullable = false;
                                                    ordinalPosition = 24753;
                                                    precision = 39992;
                                                    primaryKey = false;
                                                    scale = 7468;
                                                }}),
                                            }};
                                            tableName = "officia";
                                        }}),
                                    }};
                                    schemaName = "recusandae";
                                }}),
                                add(new OracleSchema() {{
                                    oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "voluptas";
                                                    dataType = "facilis";
                                                    encoding = "placeat";
                                                    length = 596065;
                                                    nullable = false;
                                                    ordinalPosition = 709036;
                                                    precision = 537236;
                                                    primaryKey = false;
                                                    scale = 954334;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "voluptate";
                                                    dataType = "ullam";
                                                    encoding = "unde";
                                                    length = 897543;
                                                    nullable = false;
                                                    ordinalPosition = 654082;
                                                    precision = 769967;
                                                    primaryKey = false;
                                                    scale = 373040;
                                                }}),
                                                add(new OracleColumn() {{
                                                    columnName = "corporis";
                                                    dataType = "est";
                                                    encoding = "error";
                                                    length = 456885;
                                                    nullable = false;
                                                    ordinalPosition = 288570;
                                                    precision = 85066;
                                                    primaryKey = false;
                                                    scale = 874400;
                                                }}),
                                            }};
                                            tableName = "consectetur";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    columnName = "inventore";
                                                    dataType = "dolorem";
                                                    encoding = "ad";
                                                    length = 183033;
                                                    nullable = false;
                                                    ordinalPosition = 611328;
                                                    precision = 403026;
                                                    primaryKey = false;
                                                    scale = 367626;
                                                }}),
                                            }};
                                            tableName = "soluta";
                                        }}),
                                    }};
                                    schemaName = "libero";
                                }}),
                            }};
                        }};;
                    }};;
                    backfillNone = new java.util.HashMap<String, Object>() {{
                        put("dolorum", "odio");
                        put("fugit", "alias");
                        put("magni", "vel");
                    }};
                    customerManagedEncryptionKey = "quae";
                    destinationConfig = new DestinationConfig() {{
                        destinationConnectionProfileName = "quae";
                        gcsDestinationConfig = new GcsDestinationConfig() {{
                            avroFileFormat = new java.util.HashMap<String, Object>() {{
                                put("neque", "exercitationem");
                                put("itaque", "et");
                            }};
                            fileRotationInterval = "ipsum";
                            fileRotationMb = 602229;
                            gcsFileFormat = GcsDestinationConfigGcsFileFormatEnum.AVRO;
                            jsonFileFormat = new JsonFileFormat() {{
                                compression = JsonFileFormatCompressionEnum.GZIP;
                                schemaFileFormat = JsonFileFormatSchemaFileFormatEnum.AVRO_SCHEMA_FILE;
                            }};;
                            path = "quia";
                        }};;
                    }};;
                    displayName = "quia";
                    labels = new java.util.HashMap<String, String>() {{
                        put("omnis", "libero");
                        put("dicta", "id");
                    }};
                    sourceConfig = new SourceConfig() {{
                        mysqlSourceConfig = new MysqlSourceConfig() {{
                            allowlist = new MysqlRdbms() {{
                                mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                    add(new MysqlDatabase() {{
                                        databaseName = "fugiat";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "placeat";
                                                        columnName = "sit";
                                                        dataType = "iusto";
                                                        length = 57320;
                                                        nullable = false;
                                                        ordinalPosition = 914864;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "inventore";
                                                        columnName = "aperiam";
                                                        dataType = "totam";
                                                        length = 292888;
                                                        nullable = false;
                                                        ordinalPosition = 755106;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "distinctio";
                                                        columnName = "voluptatem";
                                                        dataType = "autem";
                                                        length = 456688;
                                                        nullable = false;
                                                        ordinalPosition = 172951;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "assumenda";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "est";
                                                        columnName = "facere";
                                                        dataType = "corrupti";
                                                        length = 473143;
                                                        nullable = false;
                                                        ordinalPosition = 588812;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "accusamus";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "tempore";
                                                        columnName = "sint";
                                                        dataType = "ea";
                                                        length = 421819;
                                                        nullable = false;
                                                        ordinalPosition = 373511;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "rerum";
                                                        columnName = "laudantium";
                                                        dataType = "corporis";
                                                        length = 889060;
                                                        nullable = false;
                                                        ordinalPosition = 972912;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "cum";
                                                        columnName = "at";
                                                        dataType = "alias";
                                                        length = 156653;
                                                        nullable = false;
                                                        ordinalPosition = 694158;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "fuga";
                                                        columnName = "repudiandae";
                                                        dataType = "accusantium";
                                                        length = 710456;
                                                        nullable = false;
                                                        ordinalPosition = 885208;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "eos";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        databaseName = "quibusdam";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "odit";
                                                        columnName = "explicabo";
                                                        dataType = "corporis";
                                                        length = 621473;
                                                        nullable = false;
                                                        ordinalPosition = 937117;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "adipisci";
                                                        columnName = "recusandae";
                                                        dataType = "similique";
                                                        length = 282837;
                                                        nullable = false;
                                                        ordinalPosition = 693746;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "quis";
                                                        columnName = "beatae";
                                                        dataType = "unde";
                                                        length = 476946;
                                                        nullable = false;
                                                        ordinalPosition = 963198;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "cupiditate";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "numquam";
                                                        columnName = "numquam";
                                                        dataType = "nesciunt";
                                                        length = 873557;
                                                        nullable = false;
                                                        ordinalPosition = 637856;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "dignissimos";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        databaseName = "optio";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "qui";
                                                        columnName = "expedita";
                                                        dataType = "voluptatum";
                                                        length = 587375;
                                                        nullable = false;
                                                        ordinalPosition = 326269;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "placeat";
                                                        columnName = "enim";
                                                        dataType = "neque";
                                                        length = 446877;
                                                        nullable = false;
                                                        ordinalPosition = 796397;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "eum";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "corporis";
                                                        columnName = "magnam";
                                                        dataType = "voluptates";
                                                        length = 978173;
                                                        nullable = false;
                                                        ordinalPosition = 731744;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "aperiam";
                                                        columnName = "libero";
                                                        dataType = "ratione";
                                                        length = 289913;
                                                        nullable = false;
                                                        ordinalPosition = 520875;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "occaecati";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "quo";
                                                        columnName = "velit";
                                                        dataType = "minus";
                                                        length = 684553;
                                                        nullable = false;
                                                        ordinalPosition = 344530;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "est";
                                                        columnName = "impedit";
                                                        dataType = "delectus";
                                                        length = 735894;
                                                        nullable = false;
                                                        ordinalPosition = 878601;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "odit";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "pariatur";
                                                        columnName = "nemo";
                                                        dataType = "reprehenderit";
                                                        length = 45234;
                                                        nullable = false;
                                                        ordinalPosition = 486410;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "minima";
                                                        columnName = "in";
                                                        dataType = "ducimus";
                                                        length = 567846;
                                                        nullable = false;
                                                        ordinalPosition = 172195;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "error";
                                                        columnName = "veritatis";
                                                        dataType = "ducimus";
                                                        length = 452729;
                                                        nullable = false;
                                                        ordinalPosition = 866789;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "itaque";
                                                        columnName = "similique";
                                                        dataType = "optio";
                                                        length = 401428;
                                                        nullable = false;
                                                        ordinalPosition = 311486;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "commodi";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};;
                            rejectlist = new MysqlRdbms() {{
                                mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                    add(new MysqlDatabase() {{
                                        databaseName = "placeat";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "quam";
                                                        columnName = "dolorem";
                                                        dataType = "modi";
                                                        length = 59383;
                                                        nullable = false;
                                                        ordinalPosition = 575534;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "vero";
                                                        columnName = "sequi";
                                                        dataType = "repudiandae";
                                                        length = 741232;
                                                        nullable = false;
                                                        ordinalPosition = 120120;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "earum";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "animi";
                                                        columnName = "dolores";
                                                        dataType = "nam";
                                                        length = 115898;
                                                        nullable = false;
                                                        ordinalPosition = 164488;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "necessitatibus";
                                                        columnName = "nobis";
                                                        dataType = "ipsa";
                                                        length = 497357;
                                                        nullable = false;
                                                        ordinalPosition = 980486;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "veritatis";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "laboriosam";
                                                        columnName = "pariatur";
                                                        dataType = "libero";
                                                        length = 566506;
                                                        nullable = false;
                                                        ordinalPosition = 578210;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "nemo";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        databaseName = "aliquam";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "eligendi";
                                                        columnName = "sint";
                                                        dataType = "enim";
                                                        length = 944950;
                                                        nullable = false;
                                                        ordinalPosition = 657319;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "quas";
                                                        columnName = "totam";
                                                        dataType = "molestias";
                                                        length = 484966;
                                                        nullable = false;
                                                        ordinalPosition = 51170;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "saepe";
                                                        columnName = "architecto";
                                                        dataType = "quos";
                                                        length = 614438;
                                                        nullable = false;
                                                        ordinalPosition = 826862;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "tempore";
                                                        columnName = "libero";
                                                        dataType = "velit";
                                                        length = 38557;
                                                        nullable = false;
                                                        ordinalPosition = 963976;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "impedit";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "ipsum";
                                                        columnName = "adipisci";
                                                        dataType = "saepe";
                                                        length = 644420;
                                                        nullable = false;
                                                        ordinalPosition = 42924;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "quis";
                                                        columnName = "veniam";
                                                        dataType = "libero";
                                                        length = 99733;
                                                        nullable = false;
                                                        ordinalPosition = 584593;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "molestiae";
                                                        columnName = "eligendi";
                                                        dataType = "possimus";
                                                        length = 251464;
                                                        nullable = false;
                                                        ordinalPosition = 298187;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "itaque";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        databaseName = "sed";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "consequuntur";
                                                        columnName = "facere";
                                                        dataType = "laudantium";
                                                        length = 140384;
                                                        nullable = false;
                                                        ordinalPosition = 863477;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "amet";
                                                        columnName = "exercitationem";
                                                        dataType = "ab";
                                                        length = 242637;
                                                        nullable = false;
                                                        ordinalPosition = 705710;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "tempore";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "voluptatibus";
                                                        columnName = "quaerat";
                                                        dataType = "blanditiis";
                                                        length = 718627;
                                                        nullable = false;
                                                        ordinalPosition = 392430;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "quis";
                                                        columnName = "nisi";
                                                        dataType = "libero";
                                                        length = 794507;
                                                        nullable = false;
                                                        ordinalPosition = 815200;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "facilis";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "ad";
                                                        columnName = "voluptatibus";
                                                        dataType = "voluptatibus";
                                                        length = 162358;
                                                        nullable = false;
                                                        ordinalPosition = 891581;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "labore";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "eos";
                                                        columnName = "reprehenderit";
                                                        dataType = "nostrum";
                                                        length = 207296;
                                                        nullable = false;
                                                        ordinalPosition = 480061;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "est";
                                                        columnName = "rem";
                                                        dataType = "eligendi";
                                                        length = 853606;
                                                        nullable = false;
                                                        ordinalPosition = 604078;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "officiis";
                                                        columnName = "ducimus";
                                                        dataType = "dolor";
                                                        length = 118041;
                                                        nullable = false;
                                                        ordinalPosition = 622894;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "porro";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        databaseName = "vitae";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "fugiat";
                                                        columnName = "ad";
                                                        dataType = "aspernatur";
                                                        length = 316501;
                                                        nullable = false;
                                                        ordinalPosition = 965090;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "iusto";
                                                        columnName = "dignissimos";
                                                        dataType = "libero";
                                                        length = 72350;
                                                        nullable = false;
                                                        ordinalPosition = 69182;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "incidunt";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "saepe";
                                                        columnName = "tempore";
                                                        dataType = "veniam";
                                                        length = 176499;
                                                        nullable = false;
                                                        ordinalPosition = 970079;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "earum";
                                                        columnName = "reprehenderit";
                                                        dataType = "praesentium";
                                                        length = 367046;
                                                        nullable = false;
                                                        ordinalPosition = 999809;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "quisquam";
                                                        columnName = "sequi";
                                                        dataType = "nihil";
                                                        length = 534908;
                                                        nullable = false;
                                                        ordinalPosition = 75566;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "labore";
                                                        columnName = "assumenda";
                                                        dataType = "aliquam";
                                                        length = 790463;
                                                        nullable = false;
                                                        ordinalPosition = 591065;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                tableName = "laudantium";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};;
                        }};;
                        oracleSourceConfig = new OracleSourceConfig() {{
                            allowlist = new OracleRdbms() {{
                                oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "aspernatur";
                                                        dataType = "nam";
                                                        encoding = "expedita";
                                                        length = 559174;
                                                        nullable = false;
                                                        ordinalPosition = 590858;
                                                        precision = 922299;
                                                        primaryKey = false;
                                                        scale = 700045;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "dignissimos";
                                                        dataType = "corporis";
                                                        encoding = "vero";
                                                        length = 629377;
                                                        nullable = false;
                                                        ordinalPosition = 833982;
                                                        precision = 434827;
                                                        primaryKey = false;
                                                        scale = 213835;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "commodi";
                                                        dataType = "impedit";
                                                        encoding = "commodi";
                                                        length = 12171;
                                                        nullable = false;
                                                        ordinalPosition = 32055;
                                                        precision = 322829;
                                                        primaryKey = false;
                                                        scale = 60995;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "amet";
                                                        dataType = "illum";
                                                        encoding = "praesentium";
                                                        length = 695526;
                                                        nullable = false;
                                                        ordinalPosition = 736853;
                                                        precision = 230411;
                                                        primaryKey = false;
                                                        scale = 97676;
                                                    }}),
                                                }};
                                                tableName = "dicta";
                                            }}),
                                        }};
                                        schemaName = "laudantium";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "iusto";
                                                        dataType = "amet";
                                                        encoding = "provident";
                                                        length = 677141;
                                                        nullable = false;
                                                        ordinalPosition = 897956;
                                                        precision = 592880;
                                                        primaryKey = false;
                                                        scale = 920272;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "consequatur";
                                                        dataType = "nemo";
                                                        encoding = "molestiae";
                                                        length = 930840;
                                                        nullable = false;
                                                        ordinalPosition = 708771;
                                                        precision = 545779;
                                                        primaryKey = false;
                                                        scale = 43975;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "sint";
                                                        dataType = "accusamus";
                                                        encoding = "eos";
                                                        length = 520081;
                                                        nullable = false;
                                                        ordinalPosition = 115861;
                                                        precision = 30661;
                                                        primaryKey = false;
                                                        scale = 244376;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "dolor";
                                                        dataType = "sunt";
                                                        encoding = "a";
                                                        length = 223291;
                                                        nullable = false;
                                                        ordinalPosition = 582320;
                                                        precision = 539813;
                                                        primaryKey = false;
                                                        scale = 107472;
                                                    }}),
                                                }};
                                                tableName = "at";
                                            }}),
                                        }};
                                        schemaName = "labore";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "voluptatem";
                                                        dataType = "perferendis";
                                                        encoding = "rerum";
                                                        length = 411615;
                                                        nullable = false;
                                                        ordinalPosition = 46791;
                                                        precision = 489459;
                                                        primaryKey = false;
                                                        scale = 998026;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "velit";
                                                        dataType = "porro";
                                                        encoding = "provident";
                                                        length = 231382;
                                                        nullable = false;
                                                        ordinalPosition = 753240;
                                                        precision = 490110;
                                                        primaryKey = false;
                                                        scale = 235834;
                                                    }}),
                                                }};
                                                tableName = "soluta";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "temporibus";
                                                        dataType = "officia";
                                                        encoding = "amet";
                                                        length = 948541;
                                                        nullable = false;
                                                        ordinalPosition = 133949;
                                                        precision = 778276;
                                                        primaryKey = false;
                                                        scale = 931077;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "illum";
                                                        dataType = "laborum";
                                                        encoding = "dignissimos";
                                                        length = 876285;
                                                        nullable = false;
                                                        ordinalPosition = 185348;
                                                        precision = 232383;
                                                        primaryKey = false;
                                                        scale = 995816;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "explicabo";
                                                        dataType = "explicabo";
                                                        encoding = "exercitationem";
                                                        length = 471457;
                                                        nullable = false;
                                                        ordinalPosition = 252700;
                                                        precision = 68093;
                                                        primaryKey = false;
                                                        scale = 72754;
                                                    }}),
                                                }};
                                                tableName = "hic";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "delectus";
                                                        dataType = "non";
                                                        encoding = "distinctio";
                                                        length = 450224;
                                                        nullable = false;
                                                        ordinalPosition = 349993;
                                                        precision = 288300;
                                                        primaryKey = false;
                                                        scale = 254382;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "repudiandae";
                                                        dataType = "modi";
                                                        encoding = "in";
                                                        length = 127294;
                                                        nullable = false;
                                                        ordinalPosition = 879857;
                                                        precision = 525809;
                                                        primaryKey = false;
                                                        scale = 44016;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "odit";
                                                        dataType = "deleniti";
                                                        encoding = "enim";
                                                        length = 452730;
                                                        nullable = false;
                                                        ordinalPosition = 626707;
                                                        precision = 326118;
                                                        primaryKey = false;
                                                        scale = 727544;
                                                    }}),
                                                }};
                                                tableName = "magnam";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "modi";
                                                        dataType = "eum";
                                                        encoding = "nesciunt";
                                                        length = 652125;
                                                        nullable = false;
                                                        ordinalPosition = 492632;
                                                        precision = 853246;
                                                        primaryKey = false;
                                                        scale = 345138;
                                                    }}),
                                                }};
                                                tableName = "molestiae";
                                            }}),
                                        }};
                                        schemaName = "veniam";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "modi";
                                                        dataType = "aut";
                                                        encoding = "aut";
                                                        length = 911657;
                                                        nullable = false;
                                                        ordinalPosition = 483753;
                                                        precision = 413758;
                                                        primaryKey = false;
                                                        scale = 256114;
                                                    }}),
                                                }};
                                                tableName = "dolorum";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "voluptate";
                                                        dataType = "consectetur";
                                                        encoding = "nesciunt";
                                                        length = 310629;
                                                        nullable = false;
                                                        ordinalPosition = 929476;
                                                        precision = 791228;
                                                        primaryKey = false;
                                                        scale = 122662;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "distinctio";
                                                        dataType = "iusto";
                                                        encoding = "quas";
                                                        length = 91728;
                                                        nullable = false;
                                                        ordinalPosition = 704948;
                                                        precision = 229276;
                                                        primaryKey = false;
                                                        scale = 418637;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "fuga";
                                                        dataType = "alias";
                                                        encoding = "rem";
                                                        length = 11355;
                                                        nullable = false;
                                                        ordinalPosition = 550055;
                                                        precision = 511222;
                                                        primaryKey = false;
                                                        scale = 832239;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "veritatis";
                                                        dataType = "quae";
                                                        encoding = "eaque";
                                                        length = 904827;
                                                        nullable = false;
                                                        ordinalPosition = 965517;
                                                        precision = 651228;
                                                        primaryKey = false;
                                                        scale = 859003;
                                                    }}),
                                                }};
                                                tableName = "officia";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "voluptatem";
                                                        dataType = "alias";
                                                        encoding = "eveniet";
                                                        length = 941668;
                                                        nullable = false;
                                                        ordinalPosition = 27982;
                                                        precision = 278325;
                                                        primaryKey = false;
                                                        scale = 185448;
                                                    }}),
                                                }};
                                                tableName = "qui";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "harum";
                                                        dataType = "explicabo";
                                                        encoding = "beatae";
                                                        length = 397988;
                                                        nullable = false;
                                                        ordinalPosition = 264649;
                                                        precision = 760049;
                                                        primaryKey = false;
                                                        scale = 975095;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "molestias";
                                                        dataType = "officia";
                                                        encoding = "libero";
                                                        length = 520678;
                                                        nullable = false;
                                                        ordinalPosition = 192846;
                                                        precision = 397919;
                                                        primaryKey = false;
                                                        scale = 412052;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "impedit";
                                                        dataType = "ducimus";
                                                        encoding = "odit";
                                                        length = 243623;
                                                        nullable = false;
                                                        ordinalPosition = 967338;
                                                        precision = 997918;
                                                        primaryKey = false;
                                                        scale = 861123;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "laborum";
                                                        dataType = "natus";
                                                        encoding = "accusamus";
                                                        length = 42906;
                                                        nullable = false;
                                                        ordinalPosition = 392967;
                                                        precision = 700856;
                                                        primaryKey = false;
                                                        scale = 924840;
                                                    }}),
                                                }};
                                                tableName = "voluptates";
                                            }}),
                                        }};
                                        schemaName = "non";
                                    }}),
                                }};
                            }};;
                            dropLargeObjects = new java.util.HashMap<String, Object>() {{
                                put("quia", "ullam");
                                put("quisquam", "dicta");
                                put("voluptatibus", "eligendi");
                            }};
                            rejectlist = new OracleRdbms() {{
                                oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "architecto";
                                                        dataType = "enim";
                                                        encoding = "optio";
                                                        length = 525951;
                                                        nullable = false;
                                                        ordinalPosition = 17060;
                                                        precision = 704271;
                                                        primaryKey = false;
                                                        scale = 967055;
                                                    }}),
                                                }};
                                                tableName = "a";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "dicta";
                                                        dataType = "quos";
                                                        encoding = "ullam";
                                                        length = 295950;
                                                        nullable = false;
                                                        ordinalPosition = 266284;
                                                        precision = 929292;
                                                        primaryKey = false;
                                                        scale = 807419;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "modi";
                                                        dataType = "consequuntur";
                                                        encoding = "assumenda";
                                                        length = 876840;
                                                        nullable = false;
                                                        ordinalPosition = 985109;
                                                        precision = 773711;
                                                        primaryKey = false;
                                                        scale = 783397;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "accusamus";
                                                        dataType = "totam";
                                                        encoding = "reiciendis";
                                                        length = 66074;
                                                        nullable = false;
                                                        ordinalPosition = 573444;
                                                        precision = 472414;
                                                        primaryKey = false;
                                                        scale = 458412;
                                                    }}),
                                                }};
                                                tableName = "iure";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "nesciunt";
                                                        dataType = "debitis";
                                                        encoding = "vel";
                                                        length = 208683;
                                                        nullable = false;
                                                        ordinalPosition = 357758;
                                                        precision = 375350;
                                                        primaryKey = false;
                                                        scale = 163684;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "officia";
                                                        dataType = "reprehenderit";
                                                        encoding = "distinctio";
                                                        length = 262800;
                                                        nullable = false;
                                                        ordinalPosition = 56372;
                                                        precision = 522062;
                                                        primaryKey = false;
                                                        scale = 978154;
                                                    }}),
                                                }};
                                                tableName = "accusantium";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        columnName = "saepe";
                                                        dataType = "neque";
                                                        encoding = "facere";
                                                        length = 307173;
                                                        nullable = false;
                                                        ordinalPosition = 552581;
                                                        precision = 984773;
                                                        primaryKey = false;
                                                        scale = 851809;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        columnName = "est";
                                                        dataType = "delectus";
                                                        encoding = "velit";
                                                        length = 110522;
                                                        nullable = false;
                                                        ordinalPosition = 201096;
                                                        precision = 630832;
                                                        primaryKey = false;
                                                        scale = 74895;
                                                    }}),
                                                }};
                                                tableName = "repellat";
                                            }}),
                                        }};
                                        schemaName = "nemo";
                                    }}),
                                }};
                            }};;
                        }};;
                        sourceConnectionProfileName = "doloribus";
                    }};;
                    state = StreamStateEnum.STARTING;
                }};;
                accessToken = "unde";
                alt = AltEnum.JSON;
                callback = "explicabo";
                fields = "ipsam";
                force = false;
                key = "cupiditate";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "alias";
                requestId = "quidem";
                updateMask = "nesciunt";
                uploadType = "commodi";
                uploadProtocol = "sapiente";
                validateOnly = false;
            }};            

            DatastreamProjectsLocationsStreamsPatchResponse res = sdk.projects.datastreamProjectsLocationsStreamsPatch(req, new DatastreamProjectsLocationsStreamsPatchSecurity("consequuntur", "veniam") {{
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
