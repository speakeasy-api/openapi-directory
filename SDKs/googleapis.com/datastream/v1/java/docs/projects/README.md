# projects

### Available Operations

* [datastreamProjectsLocationsConnectionProfilesCreate](#datastreamprojectslocationsconnectionprofilescreate) - Use this method to create a connection profile in a project and location.
* [datastreamProjectsLocationsConnectionProfilesDiscover](#datastreamprojectslocationsconnectionprofilesdiscover) - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* [datastreamProjectsLocationsConnectionProfilesList](#datastreamprojectslocationsconnectionprofileslist) - Use this method to list connection profiles created in a project and location.
* [datastreamProjectsLocationsFetchStaticIps](#datastreamprojectslocationsfetchstaticips) - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* [datastreamProjectsLocationsList](#datastreamprojectslocationslist) - Lists information about the supported locations for this service.
* [datastreamProjectsLocationsOperationsCancel](#datastreamprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datastreamProjectsLocationsOperationsList](#datastreamprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datastreamProjectsLocationsPrivateConnectionsCreate](#datastreamprojectslocationsprivateconnectionscreate) - Use this method to create a private connectivity configuration.
* [datastreamProjectsLocationsPrivateConnectionsList](#datastreamprojectslocationsprivateconnectionslist) - Use this method to list private connectivity configurations in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesCreate](#datastreamprojectslocationsprivateconnectionsroutescreate) - Use this method to create a route for a private connectivity configuration in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesList](#datastreamprojectslocationsprivateconnectionsrouteslist) - Use this method to list routes created for a private connectivity configuration in a project and location.
* [datastreamProjectsLocationsStreamsCreate](#datastreamprojectslocationsstreamscreate) - Use this method to create a stream.
* [datastreamProjectsLocationsStreamsDelete](#datastreamprojectslocationsstreamsdelete) - Use this method to delete a stream.
* [datastreamProjectsLocationsStreamsList](#datastreamprojectslocationsstreamslist) - Use this method to list streams in a project and location.
* [datastreamProjectsLocationsStreamsObjectsGet](#datastreamprojectslocationsstreamsobjectsget) - Use this method to get details about a stream object.
* [datastreamProjectsLocationsStreamsObjectsList](#datastreamprojectslocationsstreamsobjectslist) - Use this method to list the objects of a specific stream.
* [datastreamProjectsLocationsStreamsObjectsLookup](#datastreamprojectslocationsstreamsobjectslookup) - Use this method to look up a stream object by its source object identifier.
* [datastreamProjectsLocationsStreamsObjectsStartBackfillJob](#datastreamprojectslocationsstreamsobjectsstartbackfilljob) - Use this method to start a backfill job for the specified stream object.
* [datastreamProjectsLocationsStreamsObjectsStopBackfillJob](#datastreamprojectslocationsstreamsobjectsstopbackfilljob) - Use this method to stop a backfill job for the specified stream object.
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
import org.openapis.openapi.models.shared.PostgresqlProfile;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsConnectionProfilesCreateRequest req = new DatastreamProjectsLocationsConnectionProfilesCreateRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                connectionProfileInput = new ConnectionProfileInput() {{
                    bigqueryProfile = new java.util.HashMap<String, Object>() {{
                        put("nobis", "enim");
                    }};
                    displayName = "omnis";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "gummy-expedition.name";
                        password = "accusantium";
                        port = 438601;
                        privateKey = "culpa";
                        username = "Yasmeen65";
                    }};;
                    gcsProfile = new GcsProfile() {{
                        bucket = "dolorem";
                        rootPath = "culpa";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("repellat", "mollitia");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "oily-desk.info";
                        password = "quam";
                        port = 474697;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "velit";
                            clientCertificate = "error";
                            clientKey = "quia";
                        }};;
                        username = "Eugene_Brown31";
                    }};;
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("quo", "sequi");
                        }};
                        databaseService = "tenetur";
                        hostname = "happy-pink.net";
                        password = "aut";
                        port = 97101;
                        username = "Lina.Smitham97";
                    }};;
                    postgresqlProfile = new PostgresqlProfile() {{
                        database = "voluptatibus";
                        hostname = "twin-intent.name";
                        password = "voluptatibus";
                        port = 55714;
                        username = "Lelah.Klein3";
                    }};;
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnection = "reprehenderit";
                    }};;
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("maiores", "dicta");
                        put("corporis", "dolore");
                    }};
                }};;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "harum";
                connectionProfileId = "enim";
                fields = "accusamus";
                force = false;
                key = "commodi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "quae";
                requestId = "ipsum";
                uploadType = "quidem";
                uploadProtocol = "molestias";
                validateOnly = false;
            }};            

            DatastreamProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req, new DatastreamProjectsLocationsConnectionProfilesCreateSecurity("excepturi", "pariatur") {{
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

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.

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
import org.openapis.openapi.models.shared.PostgresqlColumn;
import org.openapis.openapi.models.shared.PostgresqlProfile;
import org.openapis.openapi.models.shared.PostgresqlRdbms;
import org.openapis.openapi.models.shared.PostgresqlSchema;
import org.openapis.openapi.models.shared.PostgresqlTable;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsConnectionProfilesDiscoverRequest req = new DatastreamProjectsLocationsConnectionProfilesDiscoverRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                discoverConnectionProfileRequestInput = new DiscoverConnectionProfileRequestInput() {{
                    connectionProfile = new ConnectionProfileInput() {{
                        bigqueryProfile = new java.util.HashMap<String, Object>() {{
                            put("voluptates", "quasi");
                            put("repudiandae", "sint");
                            put("veritatis", "itaque");
                        }};
                        displayName = "incidunt";
                        forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                            hostname = "fruitful-adjective.net";
                            password = "quibusdam";
                            port = 131797;
                            privateKey = "deserunt";
                            username = "Michelle26";
                        }};;
                        gcsProfile = new GcsProfile() {{
                            bucket = "qui";
                            rootPath = "aliquid";
                        }};;
                        labels = new java.util.HashMap<String, String>() {{
                            put("quos", "perferendis");
                            put("magni", "assumenda");
                            put("ipsam", "alias");
                        }};
                        mysqlProfile = new MysqlProfileInput() {{
                            hostname = "costly-poncho.name";
                            password = "tempora";
                            port = 703737;
                            sslConfig = new MysqlSslConfigInput() {{
                                caCertificate = "tempore";
                                clientCertificate = "labore";
                                clientKey = "delectus";
                            }};;
                            username = "Horacio_Franey39";
                        }};;
                        oracleProfile = new OracleProfile() {{
                            connectionAttributes = new java.util.HashMap<String, String>() {{
                                put("necessitatibus", "sint");
                                put("officia", "dolor");
                                put("debitis", "a");
                            }};
                            databaseService = "dolorum";
                            hostname = "intrepid-ikebana.org";
                            password = "maiores";
                            port = 699479;
                            username = "Bettye_Gulgowski41";
                        }};;
                        postgresqlProfile = new PostgresqlProfile() {{
                            database = "aliquid";
                            hostname = "quizzical-synergy.biz";
                            password = "occaecati";
                            port = 313218;
                            username = "Shannon_Wintheiser72";
                        }};;
                        privateConnectivity = new PrivateConnectivity() {{
                            privateConnection = "id";
                        }};;
                        staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("deleniti", "sapiente");
                            put("amet", "deserunt");
                            put("nisi", "vel");
                        }};
                    }};;
                    connectionProfileName = "natus";
                    fullHierarchy = false;
                    hierarchyDepth = 606393;
                    mysqlRdbms = new MysqlRdbms() {{
                        mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                            add(new MysqlDatabase() {{
                                database = "perferendis";
                                mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                    add(new MysqlTable() {{
                                        mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                            add(new MysqlColumn() {{
                                                collation = "distinctio";
                                                column = "id";
                                                dataType = "labore";
                                                length = 290077;
                                                nullable = false;
                                                ordinalPosition = 383462;
                                                primaryKey = false;
                                            }}),
                                            add(new MysqlColumn() {{
                                                collation = "natus";
                                                column = "nobis";
                                                dataType = "eum";
                                                length = 878453;
                                                nullable = false;
                                                ordinalPosition = 135474;
                                                primaryKey = false;
                                            }}),
                                        }};
                                        table = "architecto";
                                    }}),
                                    add(new MysqlTable() {{
                                        mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                            add(new MysqlColumn() {{
                                                collation = "et";
                                                column = "excepturi";
                                                dataType = "ullam";
                                                length = 590873;
                                                nullable = false;
                                                ordinalPosition = 551816;
                                                primaryKey = false;
                                            }}),
                                            add(new MysqlColumn() {{
                                                collation = "sint";
                                                column = "accusantium";
                                                dataType = "mollitia";
                                                length = 968962;
                                                nullable = false;
                                                ordinalPosition = 652103;
                                                primaryKey = false;
                                            }}),
                                        }};
                                        table = "ad";
                                    }}),
                                }};
                            }}),
                            add(new MysqlDatabase() {{
                                database = "eum";
                                mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                    add(new MysqlTable() {{
                                        mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                            add(new MysqlColumn() {{
                                                collation = "odit";
                                                column = "nemo";
                                                dataType = "quasi";
                                                length = 435865;
                                                nullable = false;
                                                ordinalPosition = 984043;
                                                primaryKey = false;
                                            }}),
                                            add(new MysqlColumn() {{
                                                collation = "debitis";
                                                column = "eius";
                                                dataType = "maxime";
                                                length = 537023;
                                                nullable = false;
                                                ordinalPosition = 703889;
                                                primaryKey = false;
                                            }}),
                                            add(new MysqlColumn() {{
                                                collation = "in";
                                                column = "architecto";
                                                dataType = "architecto";
                                                length = 919483;
                                                nullable = false;
                                                ordinalPosition = 352312;
                                                primaryKey = false;
                                            }}),
                                            add(new MysqlColumn() {{
                                                collation = "expedita";
                                                column = "nihil";
                                                dataType = "repellat";
                                                length = 841140;
                                                nullable = false;
                                                ordinalPosition = 149448;
                                                primaryKey = false;
                                            }}),
                                        }};
                                        table = "saepe";
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
                                                column = "praesentium";
                                                dataType = "natus";
                                                encoding = "magni";
                                                length = 123820;
                                                nullable = false;
                                                ordinalPosition = 779051;
                                                precision = 848009;
                                                primaryKey = false;
                                                scale = 864934;
                                            }}),
                                        }};
                                        table = "maxime";
                                    }}),
                                }};
                                schema = "ea";
                            }}),
                            add(new OracleSchema() {{
                                oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                column = "ea";
                                                dataType = "accusantium";
                                                encoding = "ab";
                                                length = 982575;
                                                nullable = false;
                                                ordinalPosition = 697429;
                                                precision = 373291;
                                                primaryKey = false;
                                                scale = 453543;
                                            }}),
                                        }};
                                        table = "autem";
                                    }}),
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                column = "eaque";
                                                dataType = "pariatur";
                                                encoding = "nemo";
                                                length = 975522;
                                                nullable = false;
                                                ordinalPosition = 16627;
                                                precision = 855804;
                                                primaryKey = false;
                                                scale = 230742;
                                            }}),
                                            add(new OracleColumn() {{
                                                column = "aut";
                                                dataType = "cumque";
                                                encoding = "corporis";
                                                length = 944124;
                                                nullable = false;
                                                ordinalPosition = 729991;
                                                precision = 749999;
                                                primaryKey = false;
                                                scale = 171629;
                                            }}),
                                            add(new OracleColumn() {{
                                                column = "quis";
                                                dataType = "totam";
                                                encoding = "dignissimos";
                                                length = 54338;
                                                nullable = false;
                                                ordinalPosition = 338985;
                                                precision = 199996;
                                                primaryKey = false;
                                                scale = 179490;
                                            }}),
                                        }};
                                        table = "perferendis";
                                    }}),
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                column = "minus";
                                                dataType = "quam";
                                                encoding = "dolor";
                                                length = 874573;
                                                nullable = false;
                                                ordinalPosition = 345352;
                                                precision = 944120;
                                                primaryKey = false;
                                                scale = 928082;
                                            }}),
                                        }};
                                        table = "omnis";
                                    }}),
                                }};
                                schema = "facilis";
                            }}),
                            add(new OracleSchema() {{
                                oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                column = "porro";
                                                dataType = "consequuntur";
                                                encoding = "blanditiis";
                                                length = 621479;
                                                nullable = false;
                                                ordinalPosition = 50370;
                                                precision = 577229;
                                                primaryKey = false;
                                                scale = 699098;
                                            }}),
                                        }};
                                        table = "adipisci";
                                    }}),
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                column = "earum";
                                                dataType = "modi";
                                                encoding = "iste";
                                                length = 679091;
                                                nullable = false;
                                                ordinalPosition = 535633;
                                                precision = 864282;
                                                primaryKey = false;
                                                scale = 589910;
                                            }}),
                                            add(new OracleColumn() {{
                                                column = "nobis";
                                                dataType = "libero";
                                                encoding = "delectus";
                                                length = 311945;
                                                nullable = false;
                                                ordinalPosition = 554242;
                                                precision = 398221;
                                                primaryKey = false;
                                                scale = 212390;
                                            }}),
                                            add(new OracleColumn() {{
                                                column = "dolorem";
                                                dataType = "dolor";
                                                encoding = "qui";
                                                length = 218749;
                                                nullable = false;
                                                ordinalPosition = 944373;
                                                precision = 569574;
                                                primaryKey = false;
                                                scale = 739551;
                                            }}),
                                            add(new OracleColumn() {{
                                                column = "voluptate";
                                                dataType = "dignissimos";
                                                encoding = "reiciendis";
                                                length = 227414;
                                                nullable = false;
                                                ordinalPosition = 680545;
                                                precision = 254356;
                                                primaryKey = false;
                                                scale = 85295;
                                            }}),
                                        }};
                                        table = "ipsa";
                                    }}),
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                column = "iure";
                                                dataType = "odio";
                                                encoding = "quaerat";
                                                length = 881005;
                                                nullable = false;
                                                ordinalPosition = 696344;
                                                precision = 976405;
                                                primaryKey = false;
                                                scale = 377752;
                                            }}),
                                        }};
                                        table = "natus";
                                    }}),
                                }};
                                schema = "eos";
                            }}),
                            add(new OracleSchema() {{
                                oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                column = "fugiat";
                                                dataType = "ab";
                                                encoding = "soluta";
                                                length = 679393;
                                                nullable = false;
                                                ordinalPosition = 478596;
                                                precision = 453697;
                                                primaryKey = false;
                                                scale = 677082;
                                            }}),
                                        }};
                                        table = "deleniti";
                                    }}),
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                column = "necessitatibus";
                                                dataType = "distinctio";
                                                encoding = "asperiores";
                                                length = 469497;
                                                nullable = false;
                                                ordinalPosition = 216897;
                                                precision = 456015;
                                                primaryKey = false;
                                                scale = 663078;
                                            }}),
                                            add(new OracleColumn() {{
                                                column = "saepe";
                                                dataType = "eius";
                                                encoding = "aspernatur";
                                                length = 20651;
                                                nullable = false;
                                                ordinalPosition = 229219;
                                                precision = 758379;
                                                primaryKey = false;
                                                scale = 881586;
                                            }}),
                                            add(new OracleColumn() {{
                                                column = "ad";
                                                dataType = "saepe";
                                                encoding = "suscipit";
                                                length = 645785;
                                                nullable = false;
                                                ordinalPosition = 588317;
                                                precision = 324683;
                                                primaryKey = false;
                                                scale = 831049;
                                            }}),
                                        }};
                                        table = "totam";
                                    }}),
                                    add(new OracleTable() {{
                                        oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                            add(new OracleColumn() {{
                                                column = "alias";
                                                dataType = "at";
                                                encoding = "quaerat";
                                                length = 273542;
                                                nullable = false;
                                                ordinalPosition = 425451;
                                                precision = 798047;
                                                primaryKey = false;
                                                scale = 885338;
                                            }}),
                                            add(new OracleColumn() {{
                                                column = "qui";
                                                dataType = "dolorum";
                                                encoding = "a";
                                                length = 456130;
                                                nullable = false;
                                                ordinalPosition = 687488;
                                                precision = 483409;
                                                primaryKey = false;
                                                scale = 215507;
                                            }}),
                                            add(new OracleColumn() {{
                                                column = "quisquam";
                                                dataType = "tenetur";
                                                encoding = "amet";
                                                length = 730856;
                                                nullable = false;
                                                ordinalPosition = 880298;
                                                precision = 253941;
                                                primaryKey = false;
                                                scale = 313692;
                                            }}),
                                        }};
                                        table = "dolorem";
                                    }}),
                                }};
                                schema = "sapiente";
                            }}),
                        }};
                    }};;
                    postgresqlRdbms = new PostgresqlRdbms() {{
                        postgresqlSchemas = new org.openapis.openapi.models.shared.PostgresqlSchema[]{{
                            add(new PostgresqlSchema() {{
                                postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                    add(new PostgresqlTable() {{
                                        postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                            add(new PostgresqlColumn() {{
                                                column = "expedita";
                                                dataType = "neque";
                                                length = 153694;
                                                nullable = false;
                                                ordinalPosition = 424685;
                                                precision = 730442;
                                                primaryKey = false;
                                                scale = 374170;
                                            }}),
                                        }};
                                        table = "deserunt";
                                    }}),
                                    add(new PostgresqlTable() {{
                                        postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                            add(new PostgresqlColumn() {{
                                                column = "ipsum";
                                                dataType = "incidunt";
                                                length = 186458;
                                                nullable = false;
                                                ordinalPosition = 586784;
                                                precision = 807581;
                                                primaryKey = false;
                                                scale = 863856;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "soluta";
                                                dataType = "dicta";
                                                length = 674848;
                                                nullable = false;
                                                ordinalPosition = 517379;
                                                precision = 276894;
                                                primaryKey = false;
                                                scale = 132068;
                                            }}),
                                        }};
                                        table = "dolores";
                                    }}),
                                }};
                                schema = "distinctio";
                            }}),
                            add(new PostgresqlSchema() {{
                                postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                    add(new PostgresqlTable() {{
                                        postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                            add(new PostgresqlColumn() {{
                                                column = "quam";
                                                dataType = "molestias";
                                                length = 840429;
                                                nullable = false;
                                                ordinalPosition = 183280;
                                                precision = 204865;
                                                primaryKey = false;
                                                scale = 144847;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "magni";
                                                dataType = "odio";
                                                length = 124833;
                                                nullable = false;
                                                ordinalPosition = 355613;
                                                precision = 722081;
                                                primaryKey = false;
                                                scale = 940432;
                                            }}),
                                        }};
                                        table = "voluptatem";
                                    }}),
                                    add(new PostgresqlTable() {{
                                        postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                            add(new PostgresqlColumn() {{
                                                column = "soluta";
                                                dataType = "nobis";
                                                length = 92596;
                                                nullable = false;
                                                ordinalPosition = 903720;
                                                precision = 217450;
                                                primaryKey = false;
                                                scale = 83422;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "nobis";
                                                dataType = "quos";
                                                length = 731694;
                                                nullable = false;
                                                ordinalPosition = 584476;
                                                precision = 45614;
                                                primaryKey = false;
                                                scale = 961937;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "dolorem";
                                                dataType = "dolore";
                                                length = 286915;
                                                nullable = false;
                                                ordinalPosition = 240829;
                                                precision = 677263;
                                                primaryKey = false;
                                                scale = 100294;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "quae";
                                                dataType = "aut";
                                                length = 555649;
                                                nullable = false;
                                                ordinalPosition = 929530;
                                                precision = 9240;
                                                primaryKey = false;
                                                scale = 669917;
                                            }}),
                                        }};
                                        table = "repellendus";
                                    }}),
                                    add(new PostgresqlTable() {{
                                        postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                            add(new PostgresqlColumn() {{
                                                column = "doloribus";
                                                dataType = "ut";
                                                length = 703495;
                                                nullable = false;
                                                ordinalPosition = 586410;
                                                precision = 181631;
                                                primaryKey = false;
                                                scale = 63955;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "laudantium";
                                                dataType = "odio";
                                                length = 580447;
                                                nullable = false;
                                                ordinalPosition = 977496;
                                                precision = 787542;
                                                primaryKey = false;
                                                scale = 876506;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "omnis";
                                                dataType = "quis";
                                                length = 218403;
                                                nullable = false;
                                                ordinalPosition = 961571;
                                                precision = 455169;
                                                primaryKey = false;
                                                scale = 231701;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "vero";
                                                dataType = "tenetur";
                                                length = 492268;
                                                nullable = false;
                                                ordinalPosition = 941378;
                                                precision = 715561;
                                                primaryKey = false;
                                                scale = 799203;
                                            }}),
                                        }};
                                        table = "odio";
                                    }}),
                                }};
                                schema = "similique";
                            }}),
                            add(new PostgresqlSchema() {{
                                postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                    add(new PostgresqlTable() {{
                                        postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                            add(new PostgresqlColumn() {{
                                                column = "ducimus";
                                                dataType = "dolore";
                                                length = 844550;
                                                nullable = false;
                                                ordinalPosition = 848944;
                                                precision = 194342;
                                                primaryKey = false;
                                                scale = 617877;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "impedit";
                                                dataType = "aut";
                                                length = 974259;
                                                nullable = false;
                                                ordinalPosition = 347233;
                                                precision = 862310;
                                                primaryKey = false;
                                                scale = 148141;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "porro";
                                                dataType = "maiores";
                                                length = 985033;
                                                nullable = false;
                                                ordinalPosition = 478370;
                                                precision = 753570;
                                                primaryKey = false;
                                                scale = 497391;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "alias";
                                                dataType = "officia";
                                                length = 269479;
                                                nullable = false;
                                                ordinalPosition = 368584;
                                                precision = 410492;
                                                primaryKey = false;
                                                scale = 136900;
                                            }}),
                                        }};
                                        table = "vel";
                                    }}),
                                    add(new PostgresqlTable() {{
                                        postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                            add(new PostgresqlColumn() {{
                                                column = "magnam";
                                                dataType = "ratione";
                                                length = 401132;
                                                nullable = false;
                                                ordinalPosition = 511319;
                                                precision = 120657;
                                                primaryKey = false;
                                                scale = 224317;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "maiores";
                                                dataType = "quasi";
                                                length = 406120;
                                                nullable = false;
                                                ordinalPosition = 862192;
                                                precision = 569211;
                                                primaryKey = false;
                                                scale = 972920;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "nostrum";
                                                dataType = "sapiente";
                                                length = 788873;
                                                nullable = false;
                                                ordinalPosition = 906556;
                                                precision = 411372;
                                                primaryKey = false;
                                                scale = 774048;
                                            }}),
                                            add(new PostgresqlColumn() {{
                                                column = "corporis";
                                                dataType = "veniam";
                                                length = 399499;
                                                nullable = false;
                                                ordinalPosition = 81101;
                                                precision = 301831;
                                                primaryKey = false;
                                                scale = 407241;
                                            }}),
                                        }};
                                        table = "quo";
                                    }}),
                                    add(new PostgresqlTable() {{
                                        postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                            add(new PostgresqlColumn() {{
                                                column = "recusandae";
                                                dataType = "aspernatur";
                                                length = 325310;
                                                nullable = false;
                                                ordinalPosition = 53427;
                                                precision = 952871;
                                                primaryKey = false;
                                                scale = 725595;
                                            }}),
                                        }};
                                        table = "aut";
                                    }}),
                                }};
                                schema = "aut";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "fugit";
                key = "accusamus";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "et";
                uploadProtocol = "dolorum";
            }};            

            DatastreamProjectsLocationsConnectionProfilesDiscoverResponse res = sdk.projects.datastreamProjectsLocationsConnectionProfilesDiscover(req, new DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity("laborum", "placeat") {{
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

            DatastreamProjectsLocationsConnectionProfilesListRequest req = new DatastreamProjectsLocationsConnectionProfilesListRequest("velit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "assumenda";
                filter = "nulla";
                key = "voluptas";
                oauthToken = "libero";
                orderBy = "quasi";
                pageSize = 270328L;
                pageToken = "numquam";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "provident";
                uploadProtocol = "ipsa";
            }};            

            DatastreamProjectsLocationsConnectionProfilesListResponse res = sdk.projects.datastreamProjectsLocationsConnectionProfilesList(req, new DatastreamProjectsLocationsConnectionProfilesListSecurity("molestiae", "magnam") {{
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

            DatastreamProjectsLocationsFetchStaticIpsRequest req = new DatastreamProjectsLocationsFetchStaticIpsRequest("odio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "fuga";
                key = "reprehenderit";
                oauthToken = "quidem";
                pageSize = 852635L;
                pageToken = "ut";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "suscipit";
                uploadProtocol = "assumenda";
            }};            

            DatastreamProjectsLocationsFetchStaticIpsResponse res = sdk.projects.datastreamProjectsLocationsFetchStaticIps(req, new DatastreamProjectsLocationsFetchStaticIpsSecurity("eos", "praesentium") {{
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

            DatastreamProjectsLocationsListRequest req = new DatastreamProjectsLocationsListRequest("quisquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "neque";
                filter = "quo";
                key = "illum";
                oauthToken = "quo";
                pageSize = 681359L;
                pageToken = "eius";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "voluptas";
                uploadProtocol = "ab";
            }};            

            DatastreamProjectsLocationsListResponse res = sdk.projects.datastreamProjectsLocationsList(req, new DatastreamProjectsLocationsListSecurity("cupiditate", "consequatur") {{
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

            DatastreamProjectsLocationsOperationsCancelRequest req = new DatastreamProjectsLocationsOperationsCancelRequest("tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("aspernatur", "sequi");
                    put("quo", "esse");
                }};
                accessToken = "recusandae";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "quod";
                key = "dignissimos";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "totam";
                uploadProtocol = "accusamus";
            }};            

            DatastreamProjectsLocationsOperationsCancelResponse res = sdk.projects.datastreamProjectsLocationsOperationsCancel(req, new DatastreamProjectsLocationsOperationsCancelSecurity("aliquam", "odio") {{
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

            DatastreamProjectsLocationsOperationsListRequest req = new DatastreamProjectsLocationsOperationsListRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "molestiae";
                filter = "accusantium";
                key = "porro";
                oauthToken = "eum";
                pageSize = 556429L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "deleniti";
                uploadProtocol = "fugit";
            }};            

            DatastreamProjectsLocationsOperationsListResponse res = sdk.projects.datastreamProjectsLocationsOperationsList(req, new DatastreamProjectsLocationsOperationsListSecurity("fuga", "mollitia") {{
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

            DatastreamProjectsLocationsPrivateConnectionsCreateRequest req = new DatastreamProjectsLocationsPrivateConnectionsCreateRequest("incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                privateConnectionInput = new PrivateConnectionInput() {{
                    displayName = "explicabo";
                    error = new Error() {{
                        details = new java.util.HashMap<String, String>() {{
                            put("nisi", "fugit");
                            put("sapiente", "consequuntur");
                        }};
                        errorTime = "ratione";
                        errorUuid = "explicabo";
                        message = "saepe";
                        reason = "occaecati";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "esse");
                        put("eveniet", "accusamus");
                        put("veritatis", "esse");
                    }};
                    vpcPeeringConfig = new VpcPeeringConfig() {{
                        subnet = "quod";
                        vpc = "nam";
                    }};;
                }};;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "saepe";
                force = false;
                key = "vel";
                oauthToken = "harum";
                prettyPrint = false;
                privateConnectionId = "molestiae";
                quotaUser = "rerum";
                requestId = "occaecati";
                uploadType = "minima";
                uploadProtocol = "distinctio";
            }};            

            DatastreamProjectsLocationsPrivateConnectionsCreateResponse res = sdk.projects.datastreamProjectsLocationsPrivateConnectionsCreate(req, new DatastreamProjectsLocationsPrivateConnectionsCreateSecurity("eligendi", "sit") {{
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

            DatastreamProjectsLocationsPrivateConnectionsListRequest req = new DatastreamProjectsLocationsPrivateConnectionsListRequest("culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "consequatur";
                filter = "minus";
                key = "quaerat";
                oauthToken = "sapiente";
                orderBy = "consectetur";
                pageSize = 458139L;
                pageToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "a";
                uploadProtocol = "nulla";
            }};            

            DatastreamProjectsLocationsPrivateConnectionsListResponse res = sdk.projects.datastreamProjectsLocationsPrivateConnectionsList(req, new DatastreamProjectsLocationsPrivateConnectionsListSecurity("quas", "esse") {{
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

Use this method to create a route for a private connectivity configuration in a project and location.

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

            DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest req = new DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                routeInput = new RouteInput() {{
                    destinationAddress = "error";
                    destinationPort = 575751;
                    displayName = "pariatur";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quia", "eveniet");
                        put("asperiores", "facere");
                        put("veritatis", "consequuntur");
                        put("quasi", "similique");
                    }};
                }};;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "tenetur";
                fields = "quae";
                key = "earum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "eius";
                routeId = "libero";
                uploadType = "illum";
                uploadProtocol = "soluta";
            }};            

            DatastreamProjectsLocationsPrivateConnectionsRoutesCreateResponse res = sdk.projects.datastreamProjectsLocationsPrivateConnectionsRoutesCreate(req, new DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity("accusantium", "aliquam") {{
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

Use this method to list routes created for a private connectivity configuration in a project and location.

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

            DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest req = new DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "nisi";
                filter = "aut";
                key = "voluptatum";
                oauthToken = "qui";
                orderBy = "quibusdam";
                pageSize = 401259L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "dolorum";
                uploadProtocol = "architecto";
            }};            

            DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse res = sdk.projects.datastreamProjectsLocationsPrivateConnectionsRoutesList(req, new DatastreamProjectsLocationsPrivateConnectionsRoutesListSecurity("omnis", "tenetur") {{
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
import org.openapis.openapi.models.shared.BigQueryDestinationConfig;
import org.openapis.openapi.models.shared.DatasetTemplate;
import org.openapis.openapi.models.shared.DestinationConfig;
import org.openapis.openapi.models.shared.GcsDestinationConfig;
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
import org.openapis.openapi.models.shared.PostgresqlColumn;
import org.openapis.openapi.models.shared.PostgresqlRdbms;
import org.openapis.openapi.models.shared.PostgresqlSchema;
import org.openapis.openapi.models.shared.PostgresqlSourceConfig;
import org.openapis.openapi.models.shared.PostgresqlTable;
import org.openapis.openapi.models.shared.SingleTargetDataset;
import org.openapis.openapi.models.shared.SourceConfig;
import org.openapis.openapi.models.shared.SourceHierarchyDatasets;
import org.openapis.openapi.models.shared.StreamInput;
import org.openapis.openapi.models.shared.StreamStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsCreateRequest req = new DatastreamProjectsLocationsStreamsCreateRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                streamInput = new StreamInput() {{
                    backfillAll = new BackfillAllStrategy() {{
                        mysqlExcludedObjects = new MysqlRdbms() {{
                            mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                add(new MysqlDatabase() {{
                                    database = "voluptate";
                                    mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "veritatis";
                                                    column = "consectetur";
                                                    dataType = "adipisci";
                                                    length = 614465;
                                                    nullable = false;
                                                    ordinalPosition = 839513;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "accusantium";
                                                    column = "rem";
                                                    dataType = "aut";
                                                    length = 513075;
                                                    nullable = false;
                                                    ordinalPosition = 428796;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "mollitia";
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
                                                    column = "voluptatem";
                                                    dataType = "dolor";
                                                    encoding = "occaecati";
                                                    length = 253191;
                                                    nullable = false;
                                                    ordinalPosition = 771089;
                                                    precision = 131055;
                                                    primaryKey = false;
                                                    scale = 376226;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "aut";
                                                    dataType = "dignissimos";
                                                    encoding = "dicta";
                                                    length = 981640;
                                                    nullable = false;
                                                    ordinalPosition = 618480;
                                                    precision = 244651;
                                                    primaryKey = false;
                                                    scale = 974257;
                                                }}),
                                            }};
                                            table = "voluptas";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "aperiam";
                                                    dataType = "ea";
                                                    encoding = "quaerat";
                                                    length = 162954;
                                                    nullable = false;
                                                    ordinalPosition = 831520;
                                                    precision = 638762;
                                                    primaryKey = false;
                                                    scale = 807023;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "dignissimos";
                                                    dataType = "officia";
                                                    encoding = "asperiores";
                                                    length = 368102;
                                                    nullable = false;
                                                    ordinalPosition = 65304;
                                                    precision = 312753;
                                                    primaryKey = false;
                                                    scale = 783235;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "quod";
                                                    dataType = "labore";
                                                    encoding = "ab";
                                                    length = 241418;
                                                    nullable = false;
                                                    ordinalPosition = 683573;
                                                    precision = 662505;
                                                    primaryKey = false;
                                                    scale = 380729;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "velit";
                                                    dataType = "culpa";
                                                    encoding = "est";
                                                    length = 926880;
                                                    nullable = false;
                                                    ordinalPosition = 517309;
                                                    precision = 853940;
                                                    primaryKey = false;
                                                    scale = 424089;
                                                }}),
                                            }};
                                            table = "ducimus";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "vel";
                                                    dataType = "labore";
                                                    encoding = "possimus";
                                                    length = 706575;
                                                    nullable = false;
                                                    ordinalPosition = 738227;
                                                    precision = 414857;
                                                    primaryKey = false;
                                                    scale = 447144;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "corporis";
                                                    dataType = "reiciendis";
                                                    encoding = "assumenda";
                                                    length = 363161;
                                                    nullable = false;
                                                    ordinalPosition = 924967;
                                                    precision = 397533;
                                                    primaryKey = false;
                                                    scale = 46007;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "cum";
                                                    dataType = "consectetur";
                                                    encoding = "in";
                                                    length = 348519;
                                                    nullable = false;
                                                    ordinalPosition = 937285;
                                                    precision = 814967;
                                                    primaryKey = false;
                                                    scale = 257233;
                                                }}),
                                            }};
                                            table = "doloribus";
                                        }}),
                                    }};
                                    schema = "suscipit";
                                }}),
                            }};
                        }};;
                        postgresqlExcludedObjects = new PostgresqlRdbms() {{
                            postgresqlSchemas = new org.openapis.openapi.models.shared.PostgresqlSchema[]{{
                                add(new PostgresqlSchema() {{
                                    postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "necessitatibus";
                                                    dataType = "dolore";
                                                    length = 121059;
                                                    nullable = false;
                                                    ordinalPosition = 992012;
                                                    precision = 241545;
                                                    primaryKey = false;
                                                    scale = 249420;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "amet";
                                                    dataType = "beatae";
                                                    length = 489509;
                                                    nullable = false;
                                                    ordinalPosition = 950953;
                                                    precision = 891523;
                                                    primaryKey = false;
                                                    scale = 233420;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "corporis";
                                                    dataType = "harum";
                                                    length = 385237;
                                                    nullable = false;
                                                    ordinalPosition = 58356;
                                                    precision = 916727;
                                                    primaryKey = false;
                                                    scale = 730709;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "vitae";
                                                    dataType = "accusamus";
                                                    length = 631126;
                                                    nullable = false;
                                                    ordinalPosition = 272437;
                                                    precision = 132815;
                                                    primaryKey = false;
                                                    scale = 379057;
                                                }}),
                                            }};
                                            table = "voluptas";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "minima";
                                                    dataType = "nobis";
                                                    length = 680116;
                                                    nullable = false;
                                                    ordinalPosition = 237807;
                                                    precision = 795535;
                                                    primaryKey = false;
                                                    scale = 171853;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "blanditiis";
                                                    dataType = "in";
                                                    length = 296242;
                                                    nullable = false;
                                                    ordinalPosition = 304468;
                                                    precision = 885963;
                                                    primaryKey = false;
                                                    scale = 839189;
                                                }}),
                                            }};
                                            table = "ullam";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "cum";
                                                    dataType = "blanditiis";
                                                    length = 555361;
                                                    nullable = false;
                                                    ordinalPosition = 942584;
                                                    precision = 201517;
                                                    primaryKey = false;
                                                    scale = 633998;
                                                }}),
                                            }};
                                            table = "corrupti";
                                        }}),
                                    }};
                                    schema = "pariatur";
                                }}),
                                add(new PostgresqlSchema() {{
                                    postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "exercitationem";
                                                    dataType = "nobis";
                                                    length = 24619;
                                                    nullable = false;
                                                    ordinalPosition = 699575;
                                                    precision = 148829;
                                                    primaryKey = false;
                                                    scale = 967966;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "explicabo";
                                                    dataType = "asperiores";
                                                    length = 707918;
                                                    nullable = false;
                                                    ordinalPosition = 451822;
                                                    precision = 709072;
                                                    primaryKey = false;
                                                    scale = 70869;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "iste";
                                                    dataType = "dolore";
                                                    length = 671907;
                                                    nullable = false;
                                                    ordinalPosition = 152354;
                                                    precision = 447516;
                                                    primaryKey = false;
                                                    scale = 417486;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "quidem";
                                                    dataType = "explicabo";
                                                    length = 378326;
                                                    nullable = false;
                                                    ordinalPosition = 604118;
                                                    precision = 100032;
                                                    primaryKey = false;
                                                    scale = 382808;
                                                }}),
                                            }};
                                            table = "sapiente";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "illo";
                                                    dataType = "reiciendis";
                                                    length = 19300;
                                                    nullable = false;
                                                    ordinalPosition = 546885;
                                                    precision = 979574;
                                                    primaryKey = false;
                                                    scale = 274823;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "sed";
                                                    dataType = "provident";
                                                    length = 258702;
                                                    nullable = false;
                                                    ordinalPosition = 896762;
                                                    precision = 215529;
                                                    primaryKey = false;
                                                    scale = 406733;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "occaecati";
                                                    dataType = "quos";
                                                    length = 975752;
                                                    nullable = false;
                                                    ordinalPosition = 271653;
                                                    precision = 273009;
                                                    primaryKey = false;
                                                    scale = 455444;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "reiciendis";
                                                    dataType = "ex";
                                                    length = 25497;
                                                    nullable = false;
                                                    ordinalPosition = 248413;
                                                    precision = 888044;
                                                    primaryKey = false;
                                                    scale = 505866;
                                                }}),
                                            }};
                                            table = "facilis";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "incidunt";
                                                    dataType = "ipsam";
                                                    length = 894864;
                                                    nullable = false;
                                                    ordinalPosition = 524970;
                                                    precision = 26522;
                                                    primaryKey = false;
                                                    scale = 750595;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "error";
                                                    dataType = "veniam";
                                                    length = 329543;
                                                    nullable = false;
                                                    ordinalPosition = 924159;
                                                    precision = 967122;
                                                    primaryKey = false;
                                                    scale = 862319;
                                                }}),
                                            }};
                                            table = "magni";
                                        }}),
                                    }};
                                    schema = "aperiam";
                                }}),
                                add(new PostgresqlSchema() {{
                                    postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "veniam";
                                                    dataType = "in";
                                                    length = 889234;
                                                    nullable = false;
                                                    ordinalPosition = 104627;
                                                    precision = 512452;
                                                    primaryKey = false;
                                                    scale = 348476;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "praesentium";
                                                    dataType = "cum";
                                                    length = 386827;
                                                    nullable = false;
                                                    ordinalPosition = 680515;
                                                    precision = 530089;
                                                    primaryKey = false;
                                                    scale = 622385;
                                                }}),
                                            }};
                                            table = "hic";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "debitis";
                                                    dataType = "neque";
                                                    length = 677115;
                                                    nullable = false;
                                                    ordinalPosition = 341698;
                                                    precision = 639028;
                                                    primaryKey = false;
                                                    scale = 676243;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "corrupti";
                                                    dataType = "accusamus";
                                                    length = 272683;
                                                    nullable = false;
                                                    ordinalPosition = 543678;
                                                    precision = 148268;
                                                    primaryKey = false;
                                                    scale = 282699;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "fugiat";
                                                    dataType = "voluptatem";
                                                    length = 635057;
                                                    nullable = false;
                                                    ordinalPosition = 710337;
                                                    precision = 299643;
                                                    primaryKey = false;
                                                    scale = 7884;
                                                }}),
                                            }};
                                            table = "esse";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "sit";
                                                    dataType = "voluptatum";
                                                    length = 558065;
                                                    nullable = false;
                                                    ordinalPosition = 922112;
                                                    precision = 361151;
                                                    primaryKey = false;
                                                    scale = 89494;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "blanditiis";
                                                    dataType = "ex";
                                                    length = 153627;
                                                    nullable = false;
                                                    ordinalPosition = 24313;
                                                    precision = 425508;
                                                    primaryKey = false;
                                                    scale = 342611;
                                                }}),
                                            }};
                                            table = "saepe";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "consequatur";
                                                    dataType = "incidunt";
                                                    length = 968865;
                                                    nullable = false;
                                                    ordinalPosition = 209750;
                                                    precision = 690894;
                                                    primaryKey = false;
                                                    scale = 115703;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "architecto";
                                                    dataType = "occaecati";
                                                    length = 289776;
                                                    nullable = false;
                                                    ordinalPosition = 695270;
                                                    precision = 539074;
                                                    primaryKey = false;
                                                    scale = 671957;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "nam";
                                                    dataType = "tenetur";
                                                    length = 388867;
                                                    nullable = false;
                                                    ordinalPosition = 2703;
                                                    precision = 227084;
                                                    primaryKey = false;
                                                    scale = 647197;
                                                }}),
                                            }};
                                            table = "voluptate";
                                        }}),
                                    }};
                                    schema = "unde";
                                }}),
                                add(new PostgresqlSchema() {{
                                    postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "repellendus";
                                                    dataType = "delectus";
                                                    length = 914791;
                                                    nullable = false;
                                                    ordinalPosition = 16871;
                                                    precision = 667285;
                                                    primaryKey = false;
                                                    scale = 696483;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "reprehenderit";
                                                    dataType = "facere";
                                                    length = 685092;
                                                    nullable = false;
                                                    ordinalPosition = 509807;
                                                    precision = 648598;
                                                    primaryKey = false;
                                                    scale = 333965;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "voluptatem";
                                                    dataType = "quisquam";
                                                    length = 919532;
                                                    nullable = false;
                                                    ordinalPosition = 97243;
                                                    precision = 542457;
                                                    primaryKey = false;
                                                    scale = 442036;
                                                }}),
                                            }};
                                            table = "asperiores";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "suscipit";
                                                    dataType = "quidem";
                                                    length = 806670;
                                                    nullable = false;
                                                    ordinalPosition = 90885;
                                                    precision = 461007;
                                                    primaryKey = false;
                                                    scale = 227759;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "assumenda";
                                                    dataType = "ea";
                                                    length = 539118;
                                                    nullable = false;
                                                    ordinalPosition = 623295;
                                                    precision = 887265;
                                                    primaryKey = false;
                                                    scale = 886961;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "accusamus";
                                                    dataType = "natus";
                                                    length = 328303;
                                                    nullable = false;
                                                    ordinalPosition = 133461;
                                                    precision = 404425;
                                                    primaryKey = false;
                                                    scale = 980581;
                                                }}),
                                            }};
                                            table = "corrupti";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "error";
                                                    dataType = "blanditiis";
                                                    length = 379356;
                                                    nullable = false;
                                                    ordinalPosition = 922348;
                                                    precision = 542129;
                                                    primaryKey = false;
                                                    scale = 541381;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "sunt";
                                                    dataType = "recusandae";
                                                    length = 680697;
                                                    nullable = false;
                                                    ordinalPosition = 829898;
                                                    precision = 287119;
                                                    primaryKey = false;
                                                    scale = 968287;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "doloremque";
                                                    dataType = "repudiandae";
                                                    length = 116098;
                                                    nullable = false;
                                                    ordinalPosition = 36033;
                                                    precision = 106429;
                                                    primaryKey = false;
                                                    scale = 174772;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "enim";
                                                    dataType = "laboriosam";
                                                    length = 246535;
                                                    nullable = false;
                                                    ordinalPosition = 952143;
                                                    precision = 562783;
                                                    primaryKey = false;
                                                    scale = 300029;
                                                }}),
                                            }};
                                            table = "saepe";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "occaecati";
                                                    dataType = "officiis";
                                                    length = 597937;
                                                    nullable = false;
                                                    ordinalPosition = 446394;
                                                    precision = 238043;
                                                    primaryKey = false;
                                                    scale = 907876;
                                                }}),
                                            }};
                                            table = "occaecati";
                                        }}),
                                    }};
                                    schema = "consequuntur";
                                }}),
                            }};
                        }};;
                    }};;
                    backfillNone = new java.util.HashMap<String, Object>() {{
                        put("id", "quis");
                    }};
                    customerManagedEncryptionKey = "reprehenderit";
                    destinationConfig = new DestinationConfig() {{
                        bigqueryDestinationConfig = new BigQueryDestinationConfig() {{
                            dataFreshness = "error";
                            singleTargetDataset = new SingleTargetDataset() {{
                                datasetId = "illo";
                            }};;
                            sourceHierarchyDatasets = new SourceHierarchyDatasets() {{
                                datasetTemplate = new DatasetTemplate() {{
                                    datasetIdPrefix = "corporis";
                                    kmsKeyName = "quidem";
                                    location = "eveniet";
                                }};;
                            }};;
                        }};;
                        destinationConnectionProfile = "non";
                        gcsDestinationConfig = new GcsDestinationConfig() {{
                            avroFileFormat = new java.util.HashMap<String, Object>() {{
                                put("doloremque", "iure");
                                put("ipsa", "totam");
                                put("quae", "molestiae");
                                put("eveniet", "qui");
                            }};
                            fileRotationInterval = "cum";
                            fileRotationMb = 434761;
                            jsonFileFormat = new JsonFileFormat() {{
                                compression = JsonFileFormatCompressionEnum.GZIP;
                                schemaFileFormat = JsonFileFormatSchemaFileFormatEnum.SCHEMA_FILE_FORMAT_UNSPECIFIED;
                            }};;
                            path = "laborum";
                        }};;
                    }};;
                    displayName = "distinctio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("rem", "aliquam");
                        put("ad", "repellat");
                        put("alias", "corporis");
                    }};
                    sourceConfig = new SourceConfig() {{
                        mysqlSourceConfig = new MysqlSourceConfig() {{
                            excludeObjects = new MysqlRdbms() {{
                                mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                    add(new MysqlDatabase() {{
                                        database = "nihil";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "alias";
                                                        column = "maiores";
                                                        dataType = "reiciendis";
                                                        length = 174658;
                                                        nullable = false;
                                                        ordinalPosition = 663866;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "minima";
                                                        column = "dolore";
                                                        dataType = "dolorum";
                                                        length = 200364;
                                                        nullable = false;
                                                        ordinalPosition = 63207;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "recusandae";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "quaerat";
                                                        column = "molestiae";
                                                        dataType = "ex";
                                                        length = 284000;
                                                        nullable = false;
                                                        ordinalPosition = 633062;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "adipisci";
                                                        column = "debitis";
                                                        dataType = "laudantium";
                                                        length = 432606;
                                                        nullable = false;
                                                        ordinalPosition = 367927;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "recusandae";
                                                        column = "esse";
                                                        dataType = "provident";
                                                        length = 337477;
                                                        nullable = false;
                                                        ordinalPosition = 431785;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "reiciendis";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "aspernatur";
                                                        column = "ullam";
                                                        dataType = "quasi";
                                                        length = 657020;
                                                        nullable = false;
                                                        ordinalPosition = 343392;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "mollitia";
                                                        column = "provident";
                                                        dataType = "possimus";
                                                        length = 659177;
                                                        nullable = false;
                                                        ordinalPosition = 402767;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "aliquid";
                                                        column = "accusantium";
                                                        dataType = "repellat";
                                                        length = 984632;
                                                        nullable = false;
                                                        ordinalPosition = 351893;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "in";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        database = "nam";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "laborum";
                                                        column = "placeat";
                                                        dataType = "modi";
                                                        length = 976226;
                                                        nullable = false;
                                                        ordinalPosition = 564064;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "officiis";
                                                        column = "sapiente";
                                                        dataType = "cumque";
                                                        length = 113486;
                                                        nullable = false;
                                                        ordinalPosition = 698249;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "tempora";
                                                        column = "quis";
                                                        dataType = "inventore";
                                                        length = 147685;
                                                        nullable = false;
                                                        ordinalPosition = 765271;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "quae";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "velit";
                                                        column = "aspernatur";
                                                        dataType = "eum";
                                                        length = 260628;
                                                        nullable = false;
                                                        ordinalPosition = 521996;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "at";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "eos";
                                                        column = "sapiente";
                                                        dataType = "eum";
                                                        length = 117320;
                                                        nullable = false;
                                                        ordinalPosition = 325118;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "beatae";
                                                        column = "cupiditate";
                                                        dataType = "provident";
                                                        length = 936469;
                                                        nullable = false;
                                                        ordinalPosition = 745398;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "hic";
                                                        column = "illum";
                                                        dataType = "eaque";
                                                        length = 935833;
                                                        nullable = false;
                                                        ordinalPosition = 596211;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "maiores";
                                                        column = "debitis";
                                                        dataType = "aliquid";
                                                        length = 780931;
                                                        nullable = false;
                                                        ordinalPosition = 380335;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "dolorem";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "cumque";
                                                        column = "fuga";
                                                        dataType = "ratione";
                                                        length = 656762;
                                                        nullable = false;
                                                        ordinalPosition = 898760;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "nulla";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        database = "consequatur";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "ducimus";
                                                        column = "natus";
                                                        dataType = "occaecati";
                                                        length = 382440;
                                                        nullable = false;
                                                        ordinalPosition = 241557;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "quasi";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};;
                            includeObjects = new MysqlRdbms() {{
                                mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                    add(new MysqlDatabase() {{
                                        database = "doloribus";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "ipsa";
                                                        column = "tempora";
                                                        dataType = "nihil";
                                                        length = 473190;
                                                        nullable = false;
                                                        ordinalPosition = 115834;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "iusto";
                                                        column = "esse";
                                                        dataType = "praesentium";
                                                        length = 979963;
                                                        nullable = false;
                                                        ordinalPosition = 967260;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "vel";
                                                        column = "architecto";
                                                        dataType = "fugiat";
                                                        length = 39650;
                                                        nullable = false;
                                                        ordinalPosition = 117315;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "odio";
                                                        column = "tempora";
                                                        dataType = "esse";
                                                        length = 403793;
                                                        nullable = false;
                                                        ordinalPosition = 235263;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "aliquid";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "laborum";
                                                        column = "sunt";
                                                        dataType = "nostrum";
                                                        length = 856756;
                                                        nullable = false;
                                                        ordinalPosition = 713767;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "aliquid";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "suscipit";
                                                        column = "aliquid";
                                                        dataType = "perferendis";
                                                        length = 431760;
                                                        nullable = false;
                                                        ordinalPosition = 374753;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "iste";
                                                        column = "id";
                                                        dataType = "ab";
                                                        length = 625358;
                                                        nullable = false;
                                                        ordinalPosition = 822407;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "voluptates";
                                                        column = "mollitia";
                                                        dataType = "laborum";
                                                        length = 726343;
                                                        nullable = false;
                                                        ordinalPosition = 324083;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "deleniti";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "vitae";
                                                        column = "repellendus";
                                                        dataType = "ex";
                                                        length = 775803;
                                                        nullable = false;
                                                        ordinalPosition = 405373;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "ut";
                                                        column = "ad";
                                                        dataType = "expedita";
                                                        length = 29950;
                                                        nullable = false;
                                                        ordinalPosition = 561577;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "cum";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};;
                            maxConcurrentBackfillTasks = 399660;
                            maxConcurrentCdcTasks = 109784;
                        }};;
                        oracleSourceConfig = new OracleSourceConfig() {{
                            dropLargeObjects = new java.util.HashMap<String, Object>() {{
                                put("omnis", "veritatis");
                                put("rerum", "est");
                                put("culpa", "voluptatem");
                            }};
                            excludeObjects = new OracleRdbms() {{
                                oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "fuga";
                                                        dataType = "pariatur";
                                                        encoding = "debitis";
                                                        length = 29190;
                                                        nullable = false;
                                                        ordinalPosition = 1207;
                                                        precision = 534917;
                                                        primaryKey = false;
                                                        scale = 937219;
                                                    }}),
                                                }};
                                                table = "ex";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "rem";
                                                        dataType = "minus";
                                                        encoding = "nemo";
                                                        length = 992074;
                                                        nullable = false;
                                                        ordinalPosition = 190567;
                                                        precision = 355225;
                                                        primaryKey = false;
                                                        scale = 19122;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "illum";
                                                        dataType = "totam";
                                                        encoding = "impedit";
                                                        length = 842777;
                                                        nullable = false;
                                                        ordinalPosition = 720528;
                                                        precision = 373216;
                                                        primaryKey = false;
                                                        scale = 633415;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "dolor";
                                                        dataType = "aliquam";
                                                        encoding = "inventore";
                                                        length = 537279;
                                                        nullable = false;
                                                        ordinalPosition = 85311;
                                                        precision = 274575;
                                                        primaryKey = false;
                                                        scale = 221396;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "consequatur";
                                                        dataType = "architecto";
                                                        encoding = "sit";
                                                        length = 265039;
                                                        nullable = false;
                                                        ordinalPosition = 144286;
                                                        precision = 66149;
                                                        primaryKey = false;
                                                        scale = 513760;
                                                    }}),
                                                }};
                                                table = "quae";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "fugiat";
                                                        dataType = "ipsam";
                                                        encoding = "consequuntur";
                                                        length = 55107;
                                                        nullable = false;
                                                        ordinalPosition = 559682;
                                                        precision = 911198;
                                                        primaryKey = false;
                                                        scale = 773456;
                                                    }}),
                                                }};
                                                table = "officiis";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "necessitatibus";
                                                        dataType = "sed";
                                                        encoding = "veniam";
                                                        length = 199596;
                                                        nullable = false;
                                                        ordinalPosition = 712927;
                                                        precision = 432984;
                                                        primaryKey = false;
                                                        scale = 426943;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "voluptatum";
                                                        dataType = "magnam";
                                                        encoding = "exercitationem";
                                                        length = 70410;
                                                        nullable = false;
                                                        ordinalPosition = 781480;
                                                        precision = 421844;
                                                        primaryKey = false;
                                                        scale = 751022;
                                                    }}),
                                                }};
                                                table = "laboriosam";
                                            }}),
                                        }};
                                        schema = "recusandae";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "exercitationem";
                                                        dataType = "necessitatibus";
                                                        encoding = "quasi";
                                                        length = 392569;
                                                        nullable = false;
                                                        ordinalPosition = 871103;
                                                        precision = 878373;
                                                        primaryKey = false;
                                                        scale = 667593;
                                                    }}),
                                                }};
                                                table = "harum";
                                            }}),
                                        }};
                                        schema = "sequi";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "optio";
                                                        dataType = "occaecati";
                                                        encoding = "nemo";
                                                        length = 455898;
                                                        nullable = false;
                                                        ordinalPosition = 501063;
                                                        precision = 642352;
                                                        primaryKey = false;
                                                        scale = 376389;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "numquam";
                                                        dataType = "nemo";
                                                        encoding = "quos";
                                                        length = 260904;
                                                        nullable = false;
                                                        ordinalPosition = 131903;
                                                        precision = 495970;
                                                        primaryKey = false;
                                                        scale = 200516;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "fuga";
                                                        dataType = "laudantium";
                                                        encoding = "incidunt";
                                                        length = 97493;
                                                        nullable = false;
                                                        ordinalPosition = 524380;
                                                        precision = 851854;
                                                        primaryKey = false;
                                                        scale = 117380;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "nisi";
                                                        dataType = "consequuntur";
                                                        encoding = "consectetur";
                                                        length = 46806;
                                                        nullable = false;
                                                        ordinalPosition = 585432;
                                                        precision = 970732;
                                                        primaryKey = false;
                                                        scale = 746837;
                                                    }}),
                                                }};
                                                table = "alias";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "eos";
                                                        dataType = "occaecati";
                                                        encoding = "iste";
                                                        length = 170099;
                                                        nullable = false;
                                                        ordinalPosition = 81369;
                                                        precision = 686362;
                                                        primaryKey = false;
                                                        scale = 881897;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "voluptatibus";
                                                        dataType = "distinctio";
                                                        encoding = "omnis";
                                                        length = 966390;
                                                        nullable = false;
                                                        ordinalPosition = 328379;
                                                        precision = 507636;
                                                        primaryKey = false;
                                                        scale = 802692;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "magnam";
                                                        dataType = "temporibus";
                                                        encoding = "quos";
                                                        length = 415280;
                                                        nullable = false;
                                                        ordinalPosition = 930819;
                                                        precision = 415608;
                                                        primaryKey = false;
                                                        scale = 520761;
                                                    }}),
                                                }};
                                                table = "earum";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "nam";
                                                        dataType = "vero";
                                                        encoding = "voluptatem";
                                                        length = 371919;
                                                        nullable = false;
                                                        ordinalPosition = 425946;
                                                        precision = 1383;
                                                        primaryKey = false;
                                                        scale = 93894;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "non";
                                                        dataType = "maiores";
                                                        encoding = "enim";
                                                        length = 575213;
                                                        nullable = false;
                                                        ordinalPosition = 858778;
                                                        precision = 643678;
                                                        primaryKey = false;
                                                        scale = 458503;
                                                    }}),
                                                }};
                                                table = "nemo";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "est";
                                                        dataType = "quis";
                                                        encoding = "sint";
                                                        length = 880679;
                                                        nullable = false;
                                                        ordinalPosition = 774684;
                                                        precision = 945027;
                                                        primaryKey = false;
                                                        scale = 900103;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "asperiores";
                                                        dataType = "ex";
                                                        encoding = "voluptas";
                                                        length = 895346;
                                                        nullable = false;
                                                        ordinalPosition = 966148;
                                                        precision = 65082;
                                                        primaryKey = false;
                                                        scale = 791880;
                                                    }}),
                                                }};
                                                table = "fuga";
                                            }}),
                                        }};
                                        schema = "laborum";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "atque";
                                                        dataType = "ipsum";
                                                        encoding = "impedit";
                                                        length = 166047;
                                                        nullable = false;
                                                        ordinalPosition = 746585;
                                                        precision = 922757;
                                                        primaryKey = false;
                                                        scale = 721430;
                                                    }}),
                                                }};
                                                table = "dolore";
                                            }}),
                                        }};
                                        schema = "iusto";
                                    }}),
                                }};
                            }};;
                            includeObjects = new OracleRdbms() {{
                                oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "neque";
                                                        dataType = "quo";
                                                        encoding = "deleniti";
                                                        length = 844235;
                                                        nullable = false;
                                                        ordinalPosition = 437814;
                                                        precision = 139072;
                                                        primaryKey = false;
                                                        scale = 974990;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "vel";
                                                        dataType = "magnam";
                                                        encoding = "quibusdam";
                                                        length = 78969;
                                                        nullable = false;
                                                        ordinalPosition = 818034;
                                                        precision = 726878;
                                                        primaryKey = false;
                                                        scale = 102413;
                                                    }}),
                                                }};
                                                table = "voluptatibus";
                                            }}),
                                        }};
                                        schema = "quia";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "velit";
                                                        dataType = "illo";
                                                        encoding = "accusantium";
                                                        length = 424663;
                                                        nullable = false;
                                                        ordinalPosition = 406922;
                                                        precision = 107617;
                                                        primaryKey = false;
                                                        scale = 877751;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "excepturi";
                                                        dataType = "eum";
                                                        encoding = "velit";
                                                        length = 284086;
                                                        nullable = false;
                                                        ordinalPosition = 596433;
                                                        precision = 935302;
                                                        primaryKey = false;
                                                        scale = 117525;
                                                    }}),
                                                }};
                                                table = "impedit";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "iste";
                                                        dataType = "itaque";
                                                        encoding = "alias";
                                                        length = 391797;
                                                        nullable = false;
                                                        ordinalPosition = 931505;
                                                        precision = 242178;
                                                        primaryKey = false;
                                                        scale = 673838;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "non";
                                                        dataType = "dolor";
                                                        encoding = "iusto";
                                                        length = 24753;
                                                        nullable = false;
                                                        ordinalPosition = 39992;
                                                        precision = 7468;
                                                        primaryKey = false;
                                                        scale = 639705;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "recusandae";
                                                        dataType = "ea";
                                                        encoding = "quidem";
                                                        length = 377406;
                                                        nullable = false;
                                                        ordinalPosition = 705148;
                                                        precision = 809365;
                                                        primaryKey = false;
                                                        scale = 596065;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "expedita";
                                                        dataType = "deleniti";
                                                        encoding = "a";
                                                        length = 455579;
                                                        nullable = false;
                                                        ordinalPosition = 351936;
                                                        precision = 600193;
                                                        primaryKey = false;
                                                        scale = 897543;
                                                    }}),
                                                }};
                                                table = "animi";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "ipsam";
                                                        dataType = "corporis";
                                                        encoding = "est";
                                                        length = 621666;
                                                        nullable = false;
                                                        ordinalPosition = 456885;
                                                        precision = 288570;
                                                        primaryKey = false;
                                                        scale = 85066;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "vero";
                                                        dataType = "consectetur";
                                                        encoding = "vitae";
                                                        length = 81371;
                                                        nullable = false;
                                                        ordinalPosition = 212434;
                                                        precision = 322017;
                                                        primaryKey = false;
                                                        scale = 183033;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "iste";
                                                        dataType = "ex";
                                                        encoding = "nemo";
                                                        length = 745233;
                                                        nullable = false;
                                                        ordinalPosition = 726227;
                                                        precision = 526907;
                                                        primaryKey = false;
                                                        scale = 678060;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "odio";
                                                        dataType = "fugit";
                                                        encoding = "alias";
                                                        length = 168042;
                                                        nullable = false;
                                                        ordinalPosition = 425402;
                                                        precision = 64435;
                                                        primaryKey = false;
                                                        scale = 63553;
                                                    }}),
                                                }};
                                                table = "modi";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "exercitationem";
                                                        dataType = "itaque";
                                                        encoding = "et";
                                                        length = 215398;
                                                        nullable = false;
                                                        ordinalPosition = 602229;
                                                        precision = 858338;
                                                        primaryKey = false;
                                                        scale = 714376;
                                                    }}),
                                                }};
                                                table = "maxime";
                                            }}),
                                        }};
                                        schema = "quia";
                                    }}),
                                }};
                            }};;
                            maxConcurrentBackfillTasks = 159146;
                            maxConcurrentCdcTasks = 342137;
                            streamLargeObjects = new java.util.HashMap<String, Object>() {{
                                put("libero", "dicta");
                                put("id", "libero");
                                put("fugiat", "officia");
                            }};
                        }};;
                        postgresqlSourceConfig = new PostgresqlSourceConfig() {{
                            excludeObjects = new PostgresqlRdbms() {{
                                postgresqlSchemas = new org.openapis.openapi.models.shared.PostgresqlSchema[]{{
                                    add(new PostgresqlSchema() {{
                                        postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "iusto";
                                                        dataType = "ipsa";
                                                        length = 914864;
                                                        nullable = false;
                                                        ordinalPosition = 80061;
                                                        precision = 49348;
                                                        primaryKey = false;
                                                        scale = 517137;
                                                    }}),
                                                }};
                                                table = "dolore";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "distinctio";
                                                        dataType = "voluptatem";
                                                        length = 418109;
                                                        nullable = false;
                                                        ordinalPosition = 456688;
                                                        precision = 172951;
                                                        primaryKey = false;
                                                        scale = 824798;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "beatae";
                                                        dataType = "est";
                                                        length = 817339;
                                                        nullable = false;
                                                        ordinalPosition = 545918;
                                                        precision = 473143;
                                                        primaryKey = false;
                                                        scale = 588812;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "accusamus";
                                                        dataType = "necessitatibus";
                                                        length = 733289;
                                                        nullable = false;
                                                        ordinalPosition = 575078;
                                                        precision = 409726;
                                                        primaryKey = false;
                                                        scale = 421819;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "ipsam";
                                                        dataType = "rerum";
                                                        length = 515638;
                                                        nullable = false;
                                                        ordinalPosition = 357207;
                                                        precision = 889060;
                                                        primaryKey = false;
                                                        scale = 972912;
                                                    }}),
                                                }};
                                                table = "cum";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "alias";
                                                        dataType = "quia";
                                                        length = 694158;
                                                        nullable = false;
                                                        ordinalPosition = 684126;
                                                        precision = 919508;
                                                        primaryKey = false;
                                                        scale = 34070;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "expedita";
                                                        dataType = "officiis";
                                                        length = 177005;
                                                        nullable = false;
                                                        ordinalPosition = 844854;
                                                        precision = 483518;
                                                        primaryKey = false;
                                                        scale = 510128;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "odit";
                                                        dataType = "explicabo";
                                                        length = 358995;
                                                        nullable = false;
                                                        ordinalPosition = 621473;
                                                        precision = 937117;
                                                        primaryKey = false;
                                                        scale = 239337;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "recusandae";
                                                        dataType = "similique";
                                                        length = 282837;
                                                        nullable = false;
                                                        ordinalPosition = 693746;
                                                        precision = 339631;
                                                        primaryKey = false;
                                                        scale = 106255;
                                                    }}),
                                                }};
                                                table = "unde";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "delectus";
                                                        dataType = "cupiditate";
                                                        length = 147801;
                                                        nullable = false;
                                                        ordinalPosition = 253625;
                                                        precision = 256916;
                                                        primaryKey = false;
                                                        scale = 201010;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "at";
                                                        dataType = "officia";
                                                        length = 491892;
                                                        nullable = false;
                                                        ordinalPosition = 760744;
                                                        precision = 898961;
                                                        primaryKey = false;
                                                        scale = 359111;
                                                    }}),
                                                }};
                                                table = "qui";
                                            }}),
                                        }};
                                        schema = "expedita";
                                    }}),
                                    add(new PostgresqlSchema() {{
                                        postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "minima";
                                                        dataType = "placeat";
                                                        length = 316542;
                                                        nullable = false;
                                                        ordinalPosition = 204072;
                                                        precision = 446877;
                                                        primaryKey = false;
                                                        scale = 796397;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "eum";
                                                        dataType = "modi";
                                                        length = 357347;
                                                        nullable = false;
                                                        ordinalPosition = 298264;
                                                        precision = 914971;
                                                        primaryKey = false;
                                                        scale = 978173;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "tempore";
                                                        dataType = "aperiam";
                                                        length = 727547;
                                                        nullable = false;
                                                        ordinalPosition = 189753;
                                                        precision = 289913;
                                                        primaryKey = false;
                                                        scale = 520875;
                                                    }}),
                                                }};
                                                table = "occaecati";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "quo";
                                                        dataType = "velit";
                                                        length = 795591;
                                                        nullable = false;
                                                        ordinalPosition = 684553;
                                                        precision = 344530;
                                                        primaryKey = false;
                                                        scale = 669237;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "impedit";
                                                        dataType = "delectus";
                                                        length = 735894;
                                                        nullable = false;
                                                        ordinalPosition = 878601;
                                                        precision = 141506;
                                                        primaryKey = false;
                                                        scale = 997437;
                                                    }}),
                                                }};
                                                table = "pariatur";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "reprehenderit";
                                                        dataType = "aperiam";
                                                        length = 486410;
                                                        nullable = false;
                                                        ordinalPosition = 325297;
                                                        precision = 448369;
                                                        primaryKey = false;
                                                        scale = 496915;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "excepturi";
                                                        dataType = "dolores";
                                                        length = 621169;
                                                        nullable = false;
                                                        ordinalPosition = 85076;
                                                        precision = 498180;
                                                        primaryKey = false;
                                                        scale = 452729;
                                                    }}),
                                                }};
                                                table = "pariatur";
                                            }}),
                                        }};
                                        schema = "itaque";
                                    }}),
                                    add(new PostgresqlSchema() {{
                                        postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "ex";
                                                        dataType = "quaerat";
                                                        length = 416692;
                                                        nullable = false;
                                                        ordinalPosition = 888616;
                                                        precision = 810839;
                                                        primaryKey = false;
                                                        scale = 697274;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "exercitationem";
                                                        dataType = "quam";
                                                        length = 211455;
                                                        nullable = false;
                                                        ordinalPosition = 264619;
                                                        precision = 59383;
                                                        primaryKey = false;
                                                        scale = 575534;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "vero";
                                                        dataType = "sequi";
                                                        length = 918547;
                                                        nullable = false;
                                                        ordinalPosition = 741232;
                                                        precision = 120120;
                                                        primaryKey = false;
                                                        scale = 936928;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "veniam";
                                                        dataType = "animi";
                                                        length = 175372;
                                                        nullable = false;
                                                        ordinalPosition = 724994;
                                                        precision = 115898;
                                                        primaryKey = false;
                                                        scale = 164488;
                                                    }}),
                                                }};
                                                table = "necessitatibus";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "ipsa";
                                                        dataType = "ducimus";
                                                        length = 980486;
                                                        nullable = false;
                                                        ordinalPosition = 87382;
                                                        precision = 96450;
                                                        primaryKey = false;
                                                        scale = 386447;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "pariatur";
                                                        dataType = "libero";
                                                        length = 566506;
                                                        nullable = false;
                                                        ordinalPosition = 578210;
                                                        precision = 367917;
                                                        primaryKey = false;
                                                        scale = 306382;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "nostrum";
                                                        dataType = "doloribus";
                                                        length = 757364;
                                                        nullable = false;
                                                        ordinalPosition = 574032;
                                                        precision = 314573;
                                                        primaryKey = false;
                                                        scale = 944950;
                                                    }}),
                                                }};
                                                table = "animi";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "totam";
                                                        dataType = "molestias";
                                                        length = 484966;
                                                        nullable = false;
                                                        ordinalPosition = 51170;
                                                        precision = 901163;
                                                        primaryKey = false;
                                                        scale = 104078;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "quos";
                                                        dataType = "iste";
                                                        length = 826862;
                                                        nullable = false;
                                                        ordinalPosition = 731634;
                                                        precision = 725574;
                                                        primaryKey = false;
                                                        scale = 244032;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "doloremque";
                                                        dataType = "delectus";
                                                        length = 773110;
                                                        nullable = false;
                                                        ordinalPosition = 741238;
                                                        precision = 216870;
                                                        primaryKey = false;
                                                        scale = 238011;
                                                    }}),
                                                }};
                                                table = "saepe";
                                            }}),
                                        }};
                                        schema = "deserunt";
                                    }}),
                                }};
                            }};;
                            includeObjects = new PostgresqlRdbms() {{
                                postgresqlSchemas = new org.openapis.openapi.models.shared.PostgresqlSchema[]{{
                                    add(new PostgresqlSchema() {{
                                        postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "libero";
                                                        dataType = "architecto";
                                                        length = 584593;
                                                        nullable = false;
                                                        ordinalPosition = 475589;
                                                        precision = 756654;
                                                        primaryKey = false;
                                                        scale = 820023;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "non";
                                                        dataType = "magnam";
                                                        length = 932296;
                                                        nullable = false;
                                                        ordinalPosition = 150935;
                                                        precision = 993002;
                                                        primaryKey = false;
                                                        scale = 330267;
                                                    }}),
                                                }};
                                                table = "consequuntur";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "laudantium";
                                                        dataType = "odit";
                                                        length = 863477;
                                                        nullable = false;
                                                        ordinalPosition = 227362;
                                                        precision = 347698;
                                                        primaryKey = false;
                                                        scale = 68852;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "velit";
                                                        dataType = "facilis";
                                                        length = 731065;
                                                        nullable = false;
                                                        ordinalPosition = 395233;
                                                        precision = 977518;
                                                        primaryKey = false;
                                                        scale = 310840;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "blanditiis";
                                                        dataType = "distinctio";
                                                        length = 392430;
                                                        nullable = false;
                                                        ordinalPosition = 335977;
                                                        precision = 391933;
                                                        primaryKey = false;
                                                        scale = 727771;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "minus";
                                                        dataType = "facere";
                                                        length = 706061;
                                                        nullable = false;
                                                        ordinalPosition = 217663;
                                                        precision = 318917;
                                                        primaryKey = false;
                                                        scale = 973819;
                                                    }}),
                                                }};
                                                table = "voluptatibus";
                                            }}),
                                        }};
                                        schema = "consequuntur";
                                    }}),
                                }};
                            }};;
                            maxConcurrentBackfillTasks = 891581;
                            publication = "labore";
                            replicationSlot = "rerum";
                        }};;
                        sourceConnectionProfile = "eos";
                    }};;
                    state = StreamStateEnum.PAUSED;
                }};;
                accessToken = "nostrum";
                alt = AltEnum.JSON;
                callback = "iusto";
                fields = "est";
                force = false;
                key = "rem";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "fugiat";
                requestId = "unde";
                streamId = "officiis";
                uploadType = "ducimus";
                uploadProtocol = "dolor";
                validateOnly = false;
            }};            

            DatastreamProjectsLocationsStreamsCreateResponse res = sdk.projects.datastreamProjectsLocationsStreamsCreate(req, new DatastreamProjectsLocationsStreamsCreateSecurity("dicta", "error") {{
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

            DatastreamProjectsLocationsStreamsDeleteRequest req = new DatastreamProjectsLocationsStreamsDeleteRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "ad";
                key = "aspernatur";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "iusto";
                uploadType = "dignissimos";
                uploadProtocol = "libero";
            }};            

            DatastreamProjectsLocationsStreamsDeleteResponse res = sdk.projects.datastreamProjectsLocationsStreamsDelete(req, new DatastreamProjectsLocationsStreamsDeleteSecurity("illo", "ab") {{
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

            DatastreamProjectsLocationsStreamsListRequest req = new DatastreamProjectsLocationsStreamsListRequest("incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "veniam";
                fields = "eos";
                filter = "reiciendis";
                key = "earum";
                oauthToken = "reprehenderit";
                orderBy = "praesentium";
                pageSize = 367046L;
                pageToken = "repellat";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "sequi";
                uploadProtocol = "nihil";
            }};            

            DatastreamProjectsLocationsStreamsListResponse res = sdk.projects.datastreamProjectsLocationsStreamsList(req, new DatastreamProjectsLocationsStreamsListSecurity("deleniti", "illo") {{
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

            DatastreamProjectsLocationsStreamsObjectsGetRequest req = new DatastreamProjectsLocationsStreamsObjectsGetRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquam";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "laudantium";
                key = "repudiandae";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "aspernatur";
                uploadProtocol = "nam";
            }};            

            DatastreamProjectsLocationsStreamsObjectsGetResponse res = sdk.projects.datastreamProjectsLocationsStreamsObjectsGet(req, new DatastreamProjectsLocationsStreamsObjectsGetSecurity("expedita", "quas") {{
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

            DatastreamProjectsLocationsStreamsObjectsListRequest req = new DatastreamProjectsLocationsStreamsObjectsListRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "vero";
                key = "similique";
                oauthToken = "repellendus";
                pageSize = 434827L;
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "impedit";
                uploadProtocol = "commodi";
            }};            

            DatastreamProjectsLocationsStreamsObjectsListResponse res = sdk.projects.datastreamProjectsLocationsStreamsObjectsList(req, new DatastreamProjectsLocationsStreamsObjectsListSecurity("aut", "voluptatem") {{
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

## datastreamProjectsLocationsStreamsObjectsLookup

Use this method to look up a stream object by its source object identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsLookupRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsLookupResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsStreamsObjectsLookupSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LookupStreamObjectRequest;
import org.openapis.openapi.models.shared.MysqlObjectIdentifier;
import org.openapis.openapi.models.shared.OracleObjectIdentifier;
import org.openapis.openapi.models.shared.PostgresqlObjectIdentifier;
import org.openapis.openapi.models.shared.SourceObjectIdentifier;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsObjectsLookupRequest req = new DatastreamProjectsLocationsStreamsObjectsLookupRequest("ad") {{
                dollarXgafv = XgafvEnum.ONE;
                lookupStreamObjectRequest = new LookupStreamObjectRequest() {{
                    sourceObjectIdentifier = new SourceObjectIdentifier() {{
                        mysqlIdentifier = new MysqlObjectIdentifier() {{
                            database = "amet";
                            table = "illum";
                        }};;
                        oracleIdentifier = new OracleObjectIdentifier() {{
                            schema = "praesentium";
                            table = "quidem";
                        }};;
                        postgresqlIdentifier = new PostgresqlObjectIdentifier() {{
                            schema = "cum";
                            table = "amet";
                        }};;
                    }};;
                }};;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "doloremque";
                key = "earum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "provident";
                uploadProtocol = "dolorum";
            }};            

            DatastreamProjectsLocationsStreamsObjectsLookupResponse res = sdk.projects.datastreamProjectsLocationsStreamsObjectsLookup(req, new DatastreamProjectsLocationsStreamsObjectsLookupSecurity("necessitatibus", "provident") {{
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

## datastreamProjectsLocationsStreamsObjectsStartBackfillJob

Use this method to start a backfill job for the specified stream object.

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

            DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest req = new DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("molestiae", "itaque");
                    put("facilis", "corrupti");
                }};
                accessToken = "aperiam";
                alt = AltEnum.MEDIA;
                callback = "accusamus";
                fields = "eos";
                key = "totam";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "velit";
                uploadProtocol = "dolor";
            }};            

            DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse res = sdk.projects.datastreamProjectsLocationsStreamsObjectsStartBackfillJob(req, new DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity("sunt", "a") {{
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

Use this method to stop a backfill job for the specified stream object.

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

            DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest req = new DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("beatae", "at");
                    put("labore", "minus");
                    put("esse", "voluptatem");
                }};
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "aperiam";
                key = "dignissimos";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "porro";
                uploadProtocol = "provident";
            }};            

            DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse res = sdk.projects.datastreamProjectsLocationsStreamsObjectsStopBackfillJob(req, new DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity("consectetur", "eligendi") {{
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
import org.openapis.openapi.models.shared.BigQueryDestinationConfig;
import org.openapis.openapi.models.shared.DatasetTemplate;
import org.openapis.openapi.models.shared.DestinationConfig;
import org.openapis.openapi.models.shared.GcsDestinationConfig;
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
import org.openapis.openapi.models.shared.PostgresqlColumn;
import org.openapis.openapi.models.shared.PostgresqlRdbms;
import org.openapis.openapi.models.shared.PostgresqlSchema;
import org.openapis.openapi.models.shared.PostgresqlSourceConfig;
import org.openapis.openapi.models.shared.PostgresqlTable;
import org.openapis.openapi.models.shared.SingleTargetDataset;
import org.openapis.openapi.models.shared.SourceConfig;
import org.openapis.openapi.models.shared.SourceHierarchyDatasets;
import org.openapis.openapi.models.shared.StreamInput;
import org.openapis.openapi.models.shared.StreamStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsStreamsPatchRequest req = new DatastreamProjectsLocationsStreamsPatchRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                streamInput = new StreamInput() {{
                    backfillAll = new BackfillAllStrategy() {{
                        mysqlExcludedObjects = new MysqlRdbms() {{
                            mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                add(new MysqlDatabase() {{
                                    database = "natus";
                                    mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "amet";
                                                    column = "tenetur";
                                                    dataType = "aspernatur";
                                                    length = 778276;
                                                    nullable = false;
                                                    ordinalPosition = 931077;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "illum";
                                                    column = "laborum";
                                                    dataType = "dignissimos";
                                                    length = 876285;
                                                    nullable = false;
                                                    ordinalPosition = 185348;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "consectetur";
                                                    column = "repellat";
                                                    dataType = "explicabo";
                                                    length = 129355;
                                                    nullable = false;
                                                    ordinalPosition = 350325;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "nihil";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "ab";
                                                    column = "illo";
                                                    dataType = "hic";
                                                    length = 644479;
                                                    nullable = false;
                                                    ordinalPosition = 964925;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "non";
                                                    column = "distinctio";
                                                    dataType = "in";
                                                    length = 349993;
                                                    nullable = false;
                                                    ordinalPosition = 288300;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "numquam";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "modi";
                                                    column = "in";
                                                    dataType = "explicabo";
                                                    length = 879857;
                                                    nullable = false;
                                                    ordinalPosition = 525809;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "aperiam";
                                                    column = "odit";
                                                    dataType = "deleniti";
                                                    length = 316730;
                                                    nullable = false;
                                                    ordinalPosition = 452730;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "similique";
                                                    column = "minima";
                                                    dataType = "libero";
                                                    length = 300189;
                                                    nullable = false;
                                                    ordinalPosition = 24272;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "modi";
                                                    column = "eum";
                                                    dataType = "nesciunt";
                                                    length = 652125;
                                                    nullable = false;
                                                    ordinalPosition = 492632;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "fugiat";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "molestiae";
                                                    column = "veniam";
                                                    dataType = "reiciendis";
                                                    length = 66207;
                                                    nullable = false;
                                                    ordinalPosition = 265632;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "aut";
                                                    column = "aut";
                                                    dataType = "eveniet";
                                                    length = 483753;
                                                    nullable = false;
                                                    ordinalPosition = 413758;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "numquam";
                                        }}),
                                    }};
                                }}),
                                add(new MysqlDatabase() {{
                                    database = "dolorum";
                                    mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "consectetur";
                                                    column = "nesciunt";
                                                    dataType = "quaerat";
                                                    length = 929476;
                                                    nullable = false;
                                                    ordinalPosition = 791228;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "sunt";
                                                    column = "distinctio";
                                                    dataType = "iusto";
                                                    length = 558051;
                                                    nullable = false;
                                                    ordinalPosition = 91728;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "facilis";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "autem";
                                                    column = "fuga";
                                                    dataType = "alias";
                                                    length = 526413;
                                                    nullable = false;
                                                    ordinalPosition = 11355;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "quos";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "repellendus";
                                                    column = "veritatis";
                                                    dataType = "quae";
                                                    length = 51075;
                                                    nullable = false;
                                                    ordinalPosition = 904827;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "delectus";
                                                    column = "mollitia";
                                                    dataType = "nulla";
                                                    length = 640907;
                                                    nullable = false;
                                                    ordinalPosition = 152027;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "voluptatem";
                                                    column = "alias";
                                                    dataType = "eveniet";
                                                    length = 941668;
                                                    nullable = false;
                                                    ordinalPosition = 27982;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "incidunt";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "qui";
                                                    column = "necessitatibus";
                                                    dataType = "harum";
                                                    length = 126727;
                                                    nullable = false;
                                                    ordinalPosition = 108903;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "aliquid";
                                        }}),
                                    }};
                                }}),
                                add(new MysqlDatabase() {{
                                    database = "modi";
                                    mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "molestias";
                                                    column = "officia";
                                                    dataType = "libero";
                                                    length = 520678;
                                                    nullable = false;
                                                    ordinalPosition = 192846;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "aliquid";
                                                    column = "ea";
                                                    dataType = "impedit";
                                                    length = 498388;
                                                    nullable = false;
                                                    ordinalPosition = 140957;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "velit";
                                                    column = "reiciendis";
                                                    dataType = "repellat";
                                                    length = 861123;
                                                    nullable = false;
                                                    ordinalPosition = 671116;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "natus";
                                                    column = "accusamus";
                                                    dataType = "doloremque";
                                                    length = 392967;
                                                    nullable = false;
                                                    ordinalPosition = 700856;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "recusandae";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "non";
                                                    column = "rem";
                                                    dataType = "quia";
                                                    length = 354225;
                                                    nullable = false;
                                                    ordinalPosition = 786860;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "dicta";
                                                    column = "voluptatibus";
                                                    dataType = "eligendi";
                                                    length = 62035;
                                                    nullable = false;
                                                    ordinalPosition = 885022;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "architecto";
                                                    column = "architecto";
                                                    dataType = "enim";
                                                    length = 758985;
                                                    nullable = false;
                                                    ordinalPosition = 525951;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "perferendis";
                                                    column = "facilis";
                                                    dataType = "reiciendis";
                                                    length = 955551;
                                                    nullable = false;
                                                    ordinalPosition = 615058;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "dicta";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "ullam";
                                                    column = "dolore";
                                                    dataType = "modi";
                                                    length = 929292;
                                                    nullable = false;
                                                    ordinalPosition = 807419;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "modi";
                                                    column = "consequuntur";
                                                    dataType = "assumenda";
                                                    length = 876840;
                                                    nullable = false;
                                                    ordinalPosition = 985109;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "impedit";
                                                    column = "porro";
                                                    dataType = "accusamus";
                                                    length = 518990;
                                                    nullable = false;
                                                    ordinalPosition = 969168;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "ab";
                                        }}),
                                        add(new MysqlTable() {{
                                            mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                add(new MysqlColumn() {{
                                                    collation = "nihil";
                                                    column = "esse";
                                                    dataType = "iure";
                                                    length = 485031;
                                                    nullable = false;
                                                    ordinalPosition = 202796;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "debitis";
                                                    column = "vel";
                                                    dataType = "neque";
                                                    length = 357758;
                                                    nullable = false;
                                                    ordinalPosition = 375350;
                                                    primaryKey = false;
                                                }}),
                                                add(new MysqlColumn() {{
                                                    collation = "consequuntur";
                                                    column = "officia";
                                                    dataType = "reprehenderit";
                                                    length = 716033;
                                                    nullable = false;
                                                    ordinalPosition = 262800;
                                                    primaryKey = false;
                                                }}),
                                            }};
                                            table = "ipsa";
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
                                                    column = "veniam";
                                                    dataType = "saepe";
                                                    encoding = "neque";
                                                    length = 816365;
                                                    nullable = false;
                                                    ordinalPosition = 307173;
                                                    precision = 552581;
                                                    primaryKey = false;
                                                    scale = 984773;
                                                }}),
                                            }};
                                            table = "fugiat";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "delectus";
                                                    dataType = "velit";
                                                    encoding = "vitae";
                                                    length = 201096;
                                                    nullable = false;
                                                    ordinalPosition = 630832;
                                                    precision = 74895;
                                                    primaryKey = false;
                                                    scale = 997995;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "nemo";
                                                    dataType = "doloribus";
                                                    encoding = "possimus";
                                                    length = 603323;
                                                    nullable = false;
                                                    ordinalPosition = 275425;
                                                    precision = 128021;
                                                    primaryKey = false;
                                                    scale = 368491;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "cupiditate";
                                                    dataType = "optio";
                                                    encoding = "alias";
                                                    length = 695947;
                                                    nullable = false;
                                                    ordinalPosition = 198911;
                                                    precision = 412433;
                                                    primaryKey = false;
                                                    scale = 956124;
                                                }}),
                                            }};
                                            table = "consequuntur";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "debitis";
                                                    dataType = "officia";
                                                    encoding = "sint";
                                                    length = 280859;
                                                    nullable = false;
                                                    ordinalPosition = 256768;
                                                    precision = 947822;
                                                    primaryKey = false;
                                                    scale = 236790;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "libero";
                                                    dataType = "in";
                                                    encoding = "minima";
                                                    length = 403147;
                                                    nullable = false;
                                                    ordinalPosition = 791762;
                                                    precision = 68880;
                                                    primaryKey = false;
                                                    scale = 108165;
                                                }}),
                                            }};
                                            table = "hic";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "quisquam";
                                                    dataType = "dolor";
                                                    encoding = "ducimus";
                                                    length = 683727;
                                                    nullable = false;
                                                    ordinalPosition = 326903;
                                                    precision = 102446;
                                                    primaryKey = false;
                                                    scale = 181476;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "aliquid";
                                                    dataType = "magni";
                                                    encoding = "incidunt";
                                                    length = 240490;
                                                    nullable = false;
                                                    ordinalPosition = 506343;
                                                    precision = 220528;
                                                    primaryKey = false;
                                                    scale = 349898;
                                                }}),
                                            }};
                                            table = "expedita";
                                        }}),
                                    }};
                                    schema = "facilis";
                                }}),
                                add(new OracleSchema() {{
                                    oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "nemo";
                                                    dataType = "culpa";
                                                    encoding = "consequuntur";
                                                    length = 230571;
                                                    nullable = false;
                                                    ordinalPosition = 644734;
                                                    precision = 268709;
                                                    primaryKey = false;
                                                    scale = 332831;
                                                }}),
                                            }};
                                            table = "quod";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "a";
                                                    dataType = "quisquam";
                                                    encoding = "enim";
                                                    length = 987759;
                                                    nullable = false;
                                                    ordinalPosition = 826806;
                                                    precision = 887363;
                                                    primaryKey = false;
                                                    scale = 103990;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "alias";
                                                    dataType = "culpa";
                                                    encoding = "ipsa";
                                                    length = 751033;
                                                    nullable = false;
                                                    ordinalPosition = 898193;
                                                    precision = 155978;
                                                    primaryKey = false;
                                                    scale = 118932;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "vel";
                                                    dataType = "perspiciatis";
                                                    encoding = "debitis";
                                                    length = 354821;
                                                    nullable = false;
                                                    ordinalPosition = 103578;
                                                    precision = 33771;
                                                    primaryKey = false;
                                                    scale = 18096;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "veritatis";
                                                    dataType = "provident";
                                                    encoding = "cumque";
                                                    length = 435531;
                                                    nullable = false;
                                                    ordinalPosition = 842402;
                                                    precision = 798690;
                                                    primaryKey = false;
                                                    scale = 363224;
                                                }}),
                                            }};
                                            table = "recusandae";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "magnam";
                                                    dataType = "dignissimos";
                                                    encoding = "laboriosam";
                                                    length = 152283;
                                                    nullable = false;
                                                    ordinalPosition = 486272;
                                                    precision = 616941;
                                                    primaryKey = false;
                                                    scale = 588152;
                                                }}),
                                            }};
                                            table = "cum";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "facilis";
                                                    dataType = "quidem";
                                                    encoding = "itaque";
                                                    length = 389548;
                                                    nullable = false;
                                                    ordinalPosition = 601714;
                                                    precision = 263767;
                                                    primaryKey = false;
                                                    scale = 595198;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "hic";
                                                    dataType = "cum";
                                                    encoding = "aspernatur";
                                                    length = 725784;
                                                    nullable = false;
                                                    ordinalPosition = 720266;
                                                    precision = 279172;
                                                    primaryKey = false;
                                                    scale = 925395;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "quod";
                                                    dataType = "id";
                                                    encoding = "saepe";
                                                    length = 423054;
                                                    nullable = false;
                                                    ordinalPosition = 779409;
                                                    precision = 198991;
                                                    primaryKey = false;
                                                    scale = 849383;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "nemo";
                                                    dataType = "illum";
                                                    encoding = "facilis";
                                                    length = 247618;
                                                    nullable = false;
                                                    ordinalPosition = 649534;
                                                    precision = 827051;
                                                    primaryKey = false;
                                                    scale = 927977;
                                                }}),
                                            }};
                                            table = "distinctio";
                                        }}),
                                    }};
                                    schema = "pariatur";
                                }}),
                                add(new OracleSchema() {{
                                    oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "laborum";
                                                    dataType = "eveniet";
                                                    encoding = "laborum";
                                                    length = 276337;
                                                    nullable = false;
                                                    ordinalPosition = 802356;
                                                    precision = 369523;
                                                    primaryKey = false;
                                                    scale = 60;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "suscipit";
                                                    dataType = "deserunt";
                                                    encoding = "molestias";
                                                    length = 672889;
                                                    nullable = false;
                                                    ordinalPosition = 668218;
                                                    precision = 577413;
                                                    primaryKey = false;
                                                    scale = 286716;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "quo";
                                                    dataType = "perferendis";
                                                    encoding = "fugit";
                                                    length = 399222;
                                                    nullable = false;
                                                    ordinalPosition = 301309;
                                                    precision = 308528;
                                                    primaryKey = false;
                                                    scale = 755868;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "hic";
                                                    dataType = "nostrum";
                                                    encoding = "officiis";
                                                    length = 603650;
                                                    nullable = false;
                                                    ordinalPosition = 860311;
                                                    precision = 621393;
                                                    primaryKey = false;
                                                    scale = 653000;
                                                }}),
                                            }};
                                            table = "magnam";
                                        }}),
                                        add(new OracleTable() {{
                                            oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                add(new OracleColumn() {{
                                                    column = "esse";
                                                    dataType = "corrupti";
                                                    encoding = "fuga";
                                                    length = 815225;
                                                    nullable = false;
                                                    ordinalPosition = 773659;
                                                    precision = 98610;
                                                    primaryKey = false;
                                                    scale = 647218;
                                                }}),
                                                add(new OracleColumn() {{
                                                    column = "quod";
                                                    dataType = "laboriosam";
                                                    encoding = "doloremque";
                                                    length = 31574;
                                                    nullable = false;
                                                    ordinalPosition = 816421;
                                                    precision = 901008;
                                                    primaryKey = false;
                                                    scale = 807564;
                                                }}),
                                            }};
                                            table = "consequatur";
                                        }}),
                                    }};
                                    schema = "eaque";
                                }}),
                            }};
                        }};;
                        postgresqlExcludedObjects = new PostgresqlRdbms() {{
                            postgresqlSchemas = new org.openapis.openapi.models.shared.PostgresqlSchema[]{{
                                add(new PostgresqlSchema() {{
                                    postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "blanditiis";
                                                    dataType = "quae";
                                                    length = 169819;
                                                    nullable = false;
                                                    ordinalPosition = 885797;
                                                    precision = 148379;
                                                    primaryKey = false;
                                                    scale = 898111;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "impedit";
                                                    dataType = "ipsa";
                                                    length = 567693;
                                                    nullable = false;
                                                    ordinalPosition = 950956;
                                                    precision = 983000;
                                                    primaryKey = false;
                                                    scale = 514462;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "maiores";
                                                    dataType = "alias";
                                                    length = 992667;
                                                    nullable = false;
                                                    ordinalPosition = 523365;
                                                    precision = 118615;
                                                    primaryKey = false;
                                                    scale = 380595;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "earum";
                                                    dataType = "doloribus";
                                                    length = 244569;
                                                    nullable = false;
                                                    ordinalPosition = 260588;
                                                    precision = 458212;
                                                    primaryKey = false;
                                                    scale = 446547;
                                                }}),
                                            }};
                                            table = "eligendi";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "neque";
                                                    dataType = "vero";
                                                    length = 566312;
                                                    nullable = false;
                                                    ordinalPosition = 37534;
                                                    precision = 185816;
                                                    primaryKey = false;
                                                    scale = 771241;
                                                }}),
                                            }};
                                            table = "beatae";
                                        }}),
                                        add(new PostgresqlTable() {{
                                            postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                add(new PostgresqlColumn() {{
                                                    column = "dicta";
                                                    dataType = "odit";
                                                    length = 357639;
                                                    nullable = false;
                                                    ordinalPosition = 701441;
                                                    precision = 4654;
                                                    primaryKey = false;
                                                    scale = 624498;
                                                }}),
                                                add(new PostgresqlColumn() {{
                                                    column = "vel";
                                                    dataType = "accusantium";
                                                    length = 664197;
                                                    nullable = false;
                                                    ordinalPosition = 388169;
                                                    precision = 401688;
                                                    primaryKey = false;
                                                    scale = 555679;
                                                }}),
                                            }};
                                            table = "veritatis";
                                        }}),
                                    }};
                                    schema = "ullam";
                                }}),
                            }};
                        }};;
                    }};;
                    backfillNone = new java.util.HashMap<String, Object>() {{
                        put("similique", "incidunt");
                    }};
                    customerManagedEncryptionKey = "quam";
                    destinationConfig = new DestinationConfig() {{
                        bigqueryDestinationConfig = new BigQueryDestinationConfig() {{
                            dataFreshness = "magni";
                            singleTargetDataset = new SingleTargetDataset() {{
                                datasetId = "deserunt";
                            }};;
                            sourceHierarchyDatasets = new SourceHierarchyDatasets() {{
                                datasetTemplate = new DatasetTemplate() {{
                                    datasetIdPrefix = "delectus";
                                    kmsKeyName = "omnis";
                                    location = "sed";
                                }};;
                            }};;
                        }};;
                        destinationConnectionProfile = "nesciunt";
                        gcsDestinationConfig = new GcsDestinationConfig() {{
                            avroFileFormat = new java.util.HashMap<String, Object>() {{
                                put("quis", "cupiditate");
                                put("aliquam", "excepturi");
                                put("maiores", "laudantium");
                                put("velit", "reiciendis");
                            }};
                            fileRotationInterval = "amet";
                            fileRotationMb = 363845;
                            jsonFileFormat = new JsonFileFormat() {{
                                compression = JsonFileFormatCompressionEnum.JSON_COMPRESSION_UNSPECIFIED;
                                schemaFileFormat = JsonFileFormatSchemaFileFormatEnum.AVRO_SCHEMA_FILE;
                            }};;
                            path = "tenetur";
                        }};;
                    }};;
                    displayName = "quas";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aliquid", "asperiores");
                        put("a", "nobis");
                    }};
                    sourceConfig = new SourceConfig() {{
                        mysqlSourceConfig = new MysqlSourceConfig() {{
                            excludeObjects = new MysqlRdbms() {{
                                mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                    add(new MysqlDatabase() {{
                                        database = "accusantium";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "commodi";
                                                        column = "eveniet";
                                                        dataType = "porro";
                                                        length = 735740;
                                                        nullable = false;
                                                        ordinalPosition = 693747;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "modi";
                                                        column = "voluptates";
                                                        dataType = "fugit";
                                                        length = 259377;
                                                        nullable = false;
                                                        ordinalPosition = 194058;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "eligendi";
                                                        column = "asperiores";
                                                        dataType = "esse";
                                                        length = 500021;
                                                        nullable = false;
                                                        ordinalPosition = 573610;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "repellat";
                                                        column = "a";
                                                        dataType = "animi";
                                                        length = 979287;
                                                        nullable = false;
                                                        ordinalPosition = 930429;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "nulla";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        database = "deserunt";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "officiis";
                                                        column = "enim";
                                                        dataType = "officia";
                                                        length = 902979;
                                                        nullable = false;
                                                        ordinalPosition = 429997;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "repudiandae";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "officia";
                                                        column = "impedit";
                                                        dataType = "quasi";
                                                        length = 502106;
                                                        nullable = false;
                                                        ordinalPosition = 260911;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "quisquam";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        database = "eos";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "minus";
                                                        column = "quia";
                                                        dataType = "magnam";
                                                        length = 440847;
                                                        nullable = false;
                                                        ordinalPosition = 800799;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "quos";
                                                        column = "corrupti";
                                                        dataType = "amet";
                                                        length = 473326;
                                                        nullable = false;
                                                        ordinalPosition = 227156;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "laborum";
                                                        column = "modi";
                                                        dataType = "perferendis";
                                                        length = 897058;
                                                        nullable = false;
                                                        ordinalPosition = 102316;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "molestias";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "sunt";
                                                        column = "maiores";
                                                        dataType = "neque";
                                                        length = 139745;
                                                        nullable = false;
                                                        ordinalPosition = 936845;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "veniam";
                                                        column = "ipsam";
                                                        dataType = "eaque";
                                                        length = 350387;
                                                        nullable = false;
                                                        ordinalPosition = 331269;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "nihil";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "nisi";
                                                        column = "tenetur";
                                                        dataType = "quis";
                                                        length = 845154;
                                                        nullable = false;
                                                        ordinalPosition = 366480;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "suscipit";
                                                        column = "pariatur";
                                                        dataType = "sit";
                                                        length = 694728;
                                                        nullable = false;
                                                        ordinalPosition = 831031;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "perferendis";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};;
                            includeObjects = new MysqlRdbms() {{
                                mysqlDatabases = new org.openapis.openapi.models.shared.MysqlDatabase[]{{
                                    add(new MysqlDatabase() {{
                                        database = "sapiente";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "repellat";
                                                        column = "repudiandae";
                                                        dataType = "architecto";
                                                        length = 240696;
                                                        nullable = false;
                                                        ordinalPosition = 867115;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "harum";
                                                        column = "dolore";
                                                        dataType = "voluptatibus";
                                                        length = 435353;
                                                        nullable = false;
                                                        ordinalPosition = 127087;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "minus";
                                                        column = "soluta";
                                                        dataType = "dolorum";
                                                        length = 242531;
                                                        nullable = false;
                                                        ordinalPosition = 937865;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "praesentium";
                                                        column = "error";
                                                        dataType = "non";
                                                        length = 97810;
                                                        nullable = false;
                                                        ordinalPosition = 649032;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "accusamus";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        database = "harum";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "expedita";
                                                        column = "corrupti";
                                                        dataType = "eaque";
                                                        length = 643199;
                                                        nullable = false;
                                                        ordinalPosition = 396223;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "excepturi";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "tempora";
                                                        column = "possimus";
                                                        dataType = "dolor";
                                                        length = 700529;
                                                        nullable = false;
                                                        ordinalPosition = 153582;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "accusamus";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "delectus";
                                                        column = "minus";
                                                        dataType = "quo";
                                                        length = 550338;
                                                        nullable = false;
                                                        ordinalPosition = 994234;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "voluptatum";
                                                        column = "iste";
                                                        dataType = "corporis";
                                                        length = 37129;
                                                        nullable = false;
                                                        ordinalPosition = 75850;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "aut";
                                                        column = "doloribus";
                                                        dataType = "nostrum";
                                                        length = 869848;
                                                        nullable = false;
                                                        ordinalPosition = 823472;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "neque";
                                                        column = "pariatur";
                                                        dataType = "vel";
                                                        length = 960813;
                                                        nullable = false;
                                                        ordinalPosition = 652515;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "quae";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "aperiam";
                                                        column = "non";
                                                        dataType = "voluptates";
                                                        length = 324052;
                                                        nullable = false;
                                                        ordinalPosition = 305047;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "quisquam";
                                                        column = "quas";
                                                        dataType = "consequuntur";
                                                        length = 982445;
                                                        nullable = false;
                                                        ordinalPosition = 81581;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "aliquid";
                                                        column = "laudantium";
                                                        dataType = "est";
                                                        length = 221329;
                                                        nullable = false;
                                                        ordinalPosition = 400879;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "consectetur";
                                            }}),
                                        }};
                                    }}),
                                    add(new MysqlDatabase() {{
                                        database = "cumque";
                                        mysqlTables = new org.openapis.openapi.models.shared.MysqlTable[]{{
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "ducimus";
                                                        column = "adipisci";
                                                        dataType = "recusandae";
                                                        length = 271306;
                                                        nullable = false;
                                                        ordinalPosition = 503449;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "numquam";
                                                        column = "sequi";
                                                        dataType = "voluptatum";
                                                        length = 27078;
                                                        nullable = false;
                                                        ordinalPosition = 703189;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "veritatis";
                                                        column = "tenetur";
                                                        dataType = "autem";
                                                        length = 694088;
                                                        nullable = false;
                                                        ordinalPosition = 517121;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "porro";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "magni";
                                                        column = "nihil";
                                                        dataType = "voluptas";
                                                        length = 658199;
                                                        nullable = false;
                                                        ordinalPosition = 413780;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "alias";
                                                        column = "fuga";
                                                        dataType = "aut";
                                                        length = 295892;
                                                        nullable = false;
                                                        ordinalPosition = 802734;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "aliquam";
                                                        column = "iste";
                                                        dataType = "ullam";
                                                        length = 755738;
                                                        nullable = false;
                                                        ordinalPosition = 810302;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "voluptas";
                                            }}),
                                            add(new MysqlTable() {{
                                                mysqlColumns = new org.openapis.openapi.models.shared.MysqlColumn[]{{
                                                    add(new MysqlColumn() {{
                                                        collation = "unde";
                                                        column = "illo";
                                                        dataType = "nihil";
                                                        length = 78246;
                                                        nullable = false;
                                                        ordinalPosition = 725316;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "ipsam";
                                                        column = "quasi";
                                                        dataType = "cumque";
                                                        length = 117491;
                                                        nullable = false;
                                                        ordinalPosition = 688684;
                                                        primaryKey = false;
                                                    }}),
                                                    add(new MysqlColumn() {{
                                                        collation = "facere";
                                                        column = "facilis";
                                                        dataType = "beatae";
                                                        length = 767210;
                                                        nullable = false;
                                                        ordinalPosition = 964511;
                                                        primaryKey = false;
                                                    }}),
                                                }};
                                                table = "labore";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};;
                            maxConcurrentBackfillTasks = 712640;
                            maxConcurrentCdcTasks = 548256;
                        }};;
                        oracleSourceConfig = new OracleSourceConfig() {{
                            dropLargeObjects = new java.util.HashMap<String, Object>() {{
                                put("atque", "officiis");
                                put("cum", "pariatur");
                                put("sapiente", "quo");
                            }};
                            excludeObjects = new OracleRdbms() {{
                                oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "porro";
                                                        dataType = "id";
                                                        encoding = "excepturi";
                                                        length = 580238;
                                                        nullable = false;
                                                        ordinalPosition = 726851;
                                                        precision = 774880;
                                                        primaryKey = false;
                                                        scale = 457150;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "hic";
                                                        dataType = "maxime";
                                                        encoding = "accusantium";
                                                        length = 743531;
                                                        nullable = false;
                                                        ordinalPosition = 147400;
                                                        precision = 866292;
                                                        primaryKey = false;
                                                        scale = 756287;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "recusandae";
                                                        dataType = "veritatis";
                                                        encoding = "aut";
                                                        length = 516124;
                                                        nullable = false;
                                                        ordinalPosition = 480421;
                                                        precision = 219860;
                                                        primaryKey = false;
                                                        scale = 917152;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "tempora";
                                                        dataType = "magni";
                                                        encoding = "rerum";
                                                        length = 39222;
                                                        nullable = false;
                                                        ordinalPosition = 30192;
                                                        precision = 430146;
                                                        primaryKey = false;
                                                        scale = 873320;
                                                    }}),
                                                }};
                                                table = "eum";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "voluptatum";
                                                        dataType = "blanditiis";
                                                        encoding = "nihil";
                                                        length = 540048;
                                                        nullable = false;
                                                        ordinalPosition = 697994;
                                                        precision = 645544;
                                                        primaryKey = false;
                                                        scale = 541822;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "nostrum";
                                                        dataType = "atque";
                                                        encoding = "architecto";
                                                        length = 667213;
                                                        nullable = false;
                                                        ordinalPosition = 318379;
                                                        precision = 522390;
                                                        primaryKey = false;
                                                        scale = 168142;
                                                    }}),
                                                }};
                                                table = "quae";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "placeat";
                                                        dataType = "enim";
                                                        encoding = "labore";
                                                        length = 958068;
                                                        nullable = false;
                                                        ordinalPosition = 901651;
                                                        precision = 965735;
                                                        primaryKey = false;
                                                        scale = 642234;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "natus";
                                                        dataType = "cumque";
                                                        encoding = "natus";
                                                        length = 312511;
                                                        nullable = false;
                                                        ordinalPosition = 985379;
                                                        precision = 156098;
                                                        primaryKey = false;
                                                        scale = 887284;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "mollitia";
                                                        dataType = "cumque";
                                                        encoding = "quis";
                                                        length = 313590;
                                                        nullable = false;
                                                        ordinalPosition = 430235;
                                                        precision = 365539;
                                                        primaryKey = false;
                                                        scale = 849337;
                                                    }}),
                                                }};
                                                table = "nesciunt";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "odio";
                                                        dataType = "minus";
                                                        encoding = "asperiores";
                                                        length = 924293;
                                                        nullable = false;
                                                        ordinalPosition = 912151;
                                                        precision = 506250;
                                                        primaryKey = false;
                                                        scale = 118349;
                                                    }}),
                                                }};
                                                table = "fugit";
                                            }}),
                                        }};
                                        schema = "sit";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "sed";
                                                        dataType = "deleniti";
                                                        encoding = "sunt";
                                                        length = 200190;
                                                        nullable = false;
                                                        ordinalPosition = 963913;
                                                        precision = 673653;
                                                        primaryKey = false;
                                                        scale = 303421;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "deserunt";
                                                        dataType = "modi";
                                                        encoding = "sunt";
                                                        length = 771092;
                                                        nullable = false;
                                                        ordinalPosition = 259600;
                                                        precision = 528320;
                                                        primaryKey = false;
                                                        scale = 60078;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "at";
                                                        dataType = "dolorem";
                                                        encoding = "repellat";
                                                        length = 132305;
                                                        nullable = false;
                                                        ordinalPosition = 80284;
                                                        precision = 193236;
                                                        primaryKey = false;
                                                        scale = 143078;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "fuga";
                                                        dataType = "hic";
                                                        encoding = "eaque";
                                                        length = 211301;
                                                        nullable = false;
                                                        ordinalPosition = 101854;
                                                        precision = 44929;
                                                        primaryKey = false;
                                                        scale = 134173;
                                                    }}),
                                                }};
                                                table = "nulla";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "illo";
                                                        dataType = "magnam";
                                                        encoding = "delectus";
                                                        length = 255064;
                                                        nullable = false;
                                                        ordinalPosition = 760279;
                                                        precision = 750537;
                                                        primaryKey = false;
                                                        scale = 404422;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "repellat";
                                                        dataType = "quae";
                                                        encoding = "deleniti";
                                                        length = 711615;
                                                        nullable = false;
                                                        ordinalPosition = 944203;
                                                        precision = 569834;
                                                        primaryKey = false;
                                                        scale = 396610;
                                                    }}),
                                                }};
                                                table = "sed";
                                            }}),
                                        }};
                                        schema = "beatae";
                                    }}),
                                }};
                            }};;
                            includeObjects = new OracleRdbms() {{
                                oracleSchemas = new org.openapis.openapi.models.shared.OracleSchema[]{{
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "dolore";
                                                        dataType = "tenetur";
                                                        encoding = "dignissimos";
                                                        length = 457835;
                                                        nullable = false;
                                                        ordinalPosition = 657044;
                                                        precision = 512488;
                                                        primaryKey = false;
                                                        scale = 461050;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "eveniet";
                                                        dataType = "earum";
                                                        encoding = "velit";
                                                        length = 884765;
                                                        nullable = false;
                                                        ordinalPosition = 263346;
                                                        precision = 701978;
                                                        primaryKey = false;
                                                        scale = 930111;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "dignissimos";
                                                        dataType = "ipsam";
                                                        encoding = "explicabo";
                                                        length = 771632;
                                                        nullable = false;
                                                        ordinalPosition = 397014;
                                                        precision = 339843;
                                                        primaryKey = false;
                                                        scale = 704402;
                                                    }}),
                                                }};
                                                table = "ipsum";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "quaerat";
                                                        dataType = "architecto";
                                                        encoding = "praesentium";
                                                        length = 907899;
                                                        nullable = false;
                                                        ordinalPosition = 221781;
                                                        precision = 709051;
                                                        primaryKey = false;
                                                        scale = 730003;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "iste";
                                                        dataType = "illo";
                                                        encoding = "minus";
                                                        length = 553315;
                                                        nullable = false;
                                                        ordinalPosition = 835646;
                                                        precision = 576657;
                                                        primaryKey = false;
                                                        scale = 483459;
                                                    }}),
                                                }};
                                                table = "enim";
                                            }}),
                                        }};
                                        schema = "accusamus";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "laudantium";
                                                        dataType = "tempora";
                                                        encoding = "quae";
                                                        length = 607545;
                                                        nullable = false;
                                                        ordinalPosition = 848063;
                                                        precision = 526584;
                                                        primaryKey = false;
                                                        scale = 949370;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "deleniti";
                                                        dataType = "modi";
                                                        encoding = "earum";
                                                        length = 101374;
                                                        nullable = false;
                                                        ordinalPosition = 305189;
                                                        precision = 286726;
                                                        primaryKey = false;
                                                        scale = 983434;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "sequi";
                                                        dataType = "saepe";
                                                        encoding = "consequatur";
                                                        length = 458723;
                                                        nullable = false;
                                                        ordinalPosition = 891302;
                                                        precision = 817454;
                                                        primaryKey = false;
                                                        scale = 789016;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "cumque";
                                                        dataType = "aliquam";
                                                        encoding = "dolorum";
                                                        length = 644827;
                                                        nullable = false;
                                                        ordinalPosition = 319834;
                                                        precision = 970411;
                                                        primaryKey = false;
                                                        scale = 196451;
                                                    }}),
                                                }};
                                                table = "porro";
                                            }}),
                                        }};
                                        schema = "laborum";
                                    }}),
                                    add(new OracleSchema() {{
                                        oracleTables = new org.openapis.openapi.models.shared.OracleTable[]{{
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "omnis";
                                                        dataType = "aut";
                                                        encoding = "ipsam";
                                                        length = 642804;
                                                        nullable = false;
                                                        ordinalPosition = 584640;
                                                        precision = 442873;
                                                        primaryKey = false;
                                                        scale = 157281;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "necessitatibus";
                                                        dataType = "accusantium";
                                                        encoding = "ad";
                                                        length = 392752;
                                                        nullable = false;
                                                        ordinalPosition = 474185;
                                                        precision = 154130;
                                                        primaryKey = false;
                                                        scale = 514767;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "sed";
                                                        dataType = "odit";
                                                        encoding = "iusto";
                                                        length = 712893;
                                                        nullable = false;
                                                        ordinalPosition = 176935;
                                                        precision = 830477;
                                                        primaryKey = false;
                                                        scale = 199879;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "ipsa";
                                                        dataType = "sint";
                                                        encoding = "dolore";
                                                        length = 457063;
                                                        nullable = false;
                                                        ordinalPosition = 38044;
                                                        precision = 718119;
                                                        primaryKey = false;
                                                        scale = 956545;
                                                    }}),
                                                }};
                                                table = "quam";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "aliquam";
                                                        dataType = "delectus";
                                                        encoding = "culpa";
                                                        length = 531494;
                                                        nullable = false;
                                                        ordinalPosition = 482628;
                                                        precision = 802069;
                                                        primaryKey = false;
                                                        scale = 977583;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "voluptas";
                                                        dataType = "non";
                                                        encoding = "ullam";
                                                        length = 675058;
                                                        nullable = false;
                                                        ordinalPosition = 378268;
                                                        precision = 987371;
                                                        primaryKey = false;
                                                        scale = 657862;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "recusandae";
                                                        dataType = "corporis";
                                                        encoding = "non";
                                                        length = 900368;
                                                        nullable = false;
                                                        ordinalPosition = 719469;
                                                        precision = 983275;
                                                        primaryKey = false;
                                                        scale = 386538;
                                                    }}),
                                                }};
                                                table = "voluptatem";
                                            }}),
                                            add(new OracleTable() {{
                                                oracleColumns = new org.openapis.openapi.models.shared.OracleColumn[]{{
                                                    add(new OracleColumn() {{
                                                        column = "sequi";
                                                        dataType = "sunt";
                                                        encoding = "vitae";
                                                        length = 973096;
                                                        nullable = false;
                                                        ordinalPosition = 42364;
                                                        precision = 149498;
                                                        primaryKey = false;
                                                        scale = 227741;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "rerum";
                                                        dataType = "in";
                                                        encoding = "nostrum";
                                                        length = 836991;
                                                        nullable = false;
                                                        ordinalPosition = 186937;
                                                        precision = 221824;
                                                        primaryKey = false;
                                                        scale = 390854;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "dignissimos";
                                                        dataType = "reiciendis";
                                                        encoding = "itaque";
                                                        length = 114767;
                                                        nullable = false;
                                                        ordinalPosition = 667215;
                                                        precision = 33093;
                                                        primaryKey = false;
                                                        scale = 798079;
                                                    }}),
                                                    add(new OracleColumn() {{
                                                        column = "minus";
                                                        dataType = "quos";
                                                        encoding = "possimus";
                                                        length = 980467;
                                                        nullable = false;
                                                        ordinalPosition = 485795;
                                                        precision = 588662;
                                                        primaryKey = false;
                                                        scale = 960933;
                                                    }}),
                                                }};
                                                table = "aperiam";
                                            }}),
                                        }};
                                        schema = "similique";
                                    }}),
                                }};
                            }};;
                            maxConcurrentBackfillTasks = 197982;
                            maxConcurrentCdcTasks = 590998;
                            streamLargeObjects = new java.util.HashMap<String, Object>() {{
                                put("repellendus", "unde");
                                put("alias", "impedit");
                            }};
                        }};;
                        postgresqlSourceConfig = new PostgresqlSourceConfig() {{
                            excludeObjects = new PostgresqlRdbms() {{
                                postgresqlSchemas = new org.openapis.openapi.models.shared.PostgresqlSchema[]{{
                                    add(new PostgresqlSchema() {{
                                        postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "expedita";
                                                        dataType = "in";
                                                        length = 789870;
                                                        nullable = false;
                                                        ordinalPosition = 123795;
                                                        precision = 317260;
                                                        primaryKey = false;
                                                        scale = 859725;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "maiores";
                                                        dataType = "distinctio";
                                                        length = 649657;
                                                        nullable = false;
                                                        ordinalPosition = 770997;
                                                        precision = 880998;
                                                        primaryKey = false;
                                                        scale = 91120;
                                                    }}),
                                                }};
                                                table = "quas";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "cum";
                                                        dataType = "dicta";
                                                        length = 770544;
                                                        nullable = false;
                                                        ordinalPosition = 274040;
                                                        precision = 908249;
                                                        primaryKey = false;
                                                        scale = 920548;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "sed";
                                                        dataType = "impedit";
                                                        length = 558283;
                                                        nullable = false;
                                                        ordinalPosition = 772057;
                                                        precision = 428378;
                                                        primaryKey = false;
                                                        scale = 753087;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "recusandae";
                                                        dataType = "ex";
                                                        length = 105094;
                                                        nullable = false;
                                                        ordinalPosition = 86955;
                                                        precision = 982574;
                                                        primaryKey = false;
                                                        scale = 930877;
                                                    }}),
                                                }};
                                                table = "vero";
                                            }}),
                                        }};
                                        schema = "quidem";
                                    }}),
                                }};
                            }};;
                            includeObjects = new PostgresqlRdbms() {{
                                postgresqlSchemas = new org.openapis.openapi.models.shared.PostgresqlSchema[]{{
                                    add(new PostgresqlSchema() {{
                                        postgresqlTables = new org.openapis.openapi.models.shared.PostgresqlTable[]{{
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "minus";
                                                        dataType = "distinctio";
                                                        length = 823341;
                                                        nullable = false;
                                                        ordinalPosition = 738152;
                                                        precision = 382342;
                                                        primaryKey = false;
                                                        scale = 906495;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "earum";
                                                        dataType = "quod";
                                                        length = 469588;
                                                        nullable = false;
                                                        ordinalPosition = 310930;
                                                        precision = 215959;
                                                        primaryKey = false;
                                                        scale = 498435;
                                                    }}),
                                                }};
                                                table = "laudantium";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "deserunt";
                                                        dataType = "odit";
                                                        length = 319419;
                                                        nullable = false;
                                                        ordinalPosition = 193990;
                                                        precision = 106806;
                                                        primaryKey = false;
                                                        scale = 481042;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "esse";
                                                        dataType = "magnam";
                                                        length = 487799;
                                                        nullable = false;
                                                        ordinalPosition = 862560;
                                                        precision = 771406;
                                                        primaryKey = false;
                                                        scale = 586277;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "illo";
                                                        dataType = "exercitationem";
                                                        length = 670430;
                                                        nullable = false;
                                                        ordinalPosition = 848833;
                                                        precision = 147989;
                                                        primaryKey = false;
                                                        scale = 804879;
                                                    }}),
                                                }};
                                                table = "dolorum";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "nostrum";
                                                        dataType = "illum";
                                                        length = 845086;
                                                        nullable = false;
                                                        ordinalPosition = 414456;
                                                        precision = 456371;
                                                        primaryKey = false;
                                                        scale = 127499;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "consectetur";
                                                        dataType = "temporibus";
                                                        length = 762525;
                                                        nullable = false;
                                                        ordinalPosition = 59757;
                                                        precision = 978655;
                                                        primaryKey = false;
                                                        scale = 350271;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "culpa";
                                                        dataType = "repudiandae";
                                                        length = 134428;
                                                        nullable = false;
                                                        ordinalPosition = 960767;
                                                        precision = 204373;
                                                        primaryKey = false;
                                                        scale = 640565;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "suscipit";
                                                        dataType = "harum";
                                                        length = 496578;
                                                        nullable = false;
                                                        ordinalPosition = 42454;
                                                        precision = 20141;
                                                        primaryKey = false;
                                                        scale = 514480;
                                                    }}),
                                                }};
                                                table = "iusto";
                                            }}),
                                            add(new PostgresqlTable() {{
                                                postgresqlColumns = new org.openapis.openapi.models.shared.PostgresqlColumn[]{{
                                                    add(new PostgresqlColumn() {{
                                                        column = "molestiae";
                                                        dataType = "quis";
                                                        length = 435883;
                                                        nullable = false;
                                                        ordinalPosition = 68596;
                                                        precision = 308658;
                                                        primaryKey = false;
                                                        scale = 228907;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "sapiente";
                                                        dataType = "corporis";
                                                        length = 666005;
                                                        nullable = false;
                                                        ordinalPosition = 435142;
                                                        precision = 787629;
                                                        primaryKey = false;
                                                        scale = 590927;
                                                    }}),
                                                    add(new PostgresqlColumn() {{
                                                        column = "laudantium";
                                                        dataType = "nam";
                                                        length = 366147;
                                                        nullable = false;
                                                        ordinalPosition = 317632;
                                                        precision = 371213;
                                                        primaryKey = false;
                                                        scale = 328954;
                                                    }}),
                                                }};
                                                table = "tempora";
                                            }}),
                                        }};
                                        schema = "perferendis";
                                    }}),
                                }};
                            }};;
                            maxConcurrentBackfillTasks = 546963;
                            publication = "doloremque";
                            replicationSlot = "fugiat";
                        }};;
                        sourceConnectionProfile = "numquam";
                    }};;
                    state = StreamStateEnum.STATE_UNSPECIFIED;
                }};;
                accessToken = "cum";
                alt = AltEnum.PROTO;
                callback = "similique";
                fields = "porro";
                force = false;
                key = "impedit";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "cumque";
                requestId = "soluta";
                updateMask = "fugiat";
                uploadType = "laboriosam";
                uploadProtocol = "nam";
                validateOnly = false;
            }};            

            DatastreamProjectsLocationsStreamsPatchResponse res = sdk.projects.datastreamProjectsLocationsStreamsPatch(req, new DatastreamProjectsLocationsStreamsPatchSecurity("enim", "maiores") {{
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
