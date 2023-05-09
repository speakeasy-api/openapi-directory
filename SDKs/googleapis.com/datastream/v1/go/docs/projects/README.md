# Projects

### Available Operations

* [DatastreamProjectsLocationsConnectionProfilesCreate](#datastreamprojectslocationsconnectionprofilescreate) - Use this method to create a connection profile in a project and location.
* [DatastreamProjectsLocationsConnectionProfilesDiscover](#datastreamprojectslocationsconnectionprofilesdiscover) - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* [DatastreamProjectsLocationsConnectionProfilesList](#datastreamprojectslocationsconnectionprofileslist) - Use this method to list connection profiles created in a project and location.
* [DatastreamProjectsLocationsFetchStaticIps](#datastreamprojectslocationsfetchstaticips) - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* [DatastreamProjectsLocationsList](#datastreamprojectslocationslist) - Lists information about the supported locations for this service.
* [DatastreamProjectsLocationsOperationsCancel](#datastreamprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatastreamProjectsLocationsOperationsList](#datastreamprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatastreamProjectsLocationsPrivateConnectionsCreate](#datastreamprojectslocationsprivateconnectionscreate) - Use this method to create a private connectivity configuration.
* [DatastreamProjectsLocationsPrivateConnectionsList](#datastreamprojectslocationsprivateconnectionslist) - Use this method to list private connectivity configurations in a project and location.
* [DatastreamProjectsLocationsPrivateConnectionsRoutesCreate](#datastreamprojectslocationsprivateconnectionsroutescreate) - Use this method to create a route for a private connectivity configuration in a project and location.
* [DatastreamProjectsLocationsPrivateConnectionsRoutesList](#datastreamprojectslocationsprivateconnectionsrouteslist) - Use this method to list routes created for a private connectivity configuration in a project and location.
* [DatastreamProjectsLocationsStreamsCreate](#datastreamprojectslocationsstreamscreate) - Use this method to create a stream.
* [DatastreamProjectsLocationsStreamsDelete](#datastreamprojectslocationsstreamsdelete) - Use this method to delete a stream.
* [DatastreamProjectsLocationsStreamsList](#datastreamprojectslocationsstreamslist) - Use this method to list streams in a project and location.
* [DatastreamProjectsLocationsStreamsObjectsGet](#datastreamprojectslocationsstreamsobjectsget) - Use this method to get details about a stream object.
* [DatastreamProjectsLocationsStreamsObjectsList](#datastreamprojectslocationsstreamsobjectslist) - Use this method to list the objects of a specific stream.
* [DatastreamProjectsLocationsStreamsObjectsLookup](#datastreamprojectslocationsstreamsobjectslookup) - Use this method to look up a stream object by its source object identifier.
* [DatastreamProjectsLocationsStreamsObjectsStartBackfillJob](#datastreamprojectslocationsstreamsobjectsstartbackfilljob) - Use this method to start a backfill job for the specified stream object.
* [DatastreamProjectsLocationsStreamsObjectsStopBackfillJob](#datastreamprojectslocationsstreamsobjectsstopbackfilljob) - Use this method to stop a backfill job for the specified stream object.
* [DatastreamProjectsLocationsStreamsPatch](#datastreamprojectslocationsstreamspatch) - Use this method to update the configuration of a stream.

## DatastreamProjectsLocationsConnectionProfilesCreate

Use this method to create a connection profile in a project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesCreate(ctx, operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectionProfileInput: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "laborum": "dolores",
                "dolorem": "corporis",
                "explicabo": "nobis",
            },
            DisplayName: sdk.String("enim"),
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: sdk.String("palatable-forum.biz"),
                Password: sdk.String("excepturi"),
                Port: sdk.Int(38425),
                PrivateKey: sdk.String("iure"),
                Username: sdk.String("Lorenza.Yundt65"),
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: sdk.String("dolorem"),
                RootPath: sdk.String("culpa"),
            },
            Labels: map[string]string{
                "repellat": "mollitia",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: sdk.String("oily-desk.info"),
                Password: sdk.String("quam"),
                Port: sdk.Int(474697),
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: sdk.String("velit"),
                    ClientCertificate: sdk.String("error"),
                    ClientKey: sdk.String("quia"),
                },
                Username: sdk.String("Eugene_Brown31"),
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "quo": "sequi",
                },
                DatabaseService: sdk.String("tenetur"),
                Hostname: sdk.String("happy-pink.net"),
                Password: sdk.String("aut"),
                Port: sdk.Int(97101),
                Username: sdk.String("Lina.Smitham97"),
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: sdk.String("voluptatibus"),
                Hostname: sdk.String("twin-intent.name"),
                Password: sdk.String("voluptatibus"),
                Port: sdk.Int(55714),
                Username: sdk.String("Lelah.Klein3"),
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: sdk.String("reprehenderit"),
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "maiores": "dicta",
                "corporis": "dolore",
            },
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        ConnectionProfileID: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Force: sdk.Bool(false),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("repudiandae"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        RequestID: sdk.String("quidem"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("excepturi"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsConnectionProfilesDiscover

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesDiscover(ctx, operations.DatastreamProjectsLocationsConnectionProfilesDiscoverRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DiscoverConnectionProfileRequestInput: &shared.DiscoverConnectionProfileRequestInput{
            ConnectionProfile: &shared.ConnectionProfileInput{
                BigqueryProfile: map[string]interface{}{
                    "praesentium": "rem",
                    "voluptates": "quasi",
                },
                DisplayName: sdk.String("repudiandae"),
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: sdk.String("novel-binoculars.org"),
                    Password: sdk.String("incidunt"),
                    Port: sdk.Int(318569),
                    PrivateKey: sdk.String("consequatur"),
                    Username: sdk.String("Marc64"),
                },
                GcsProfile: &shared.GcsProfile{
                    Bucket: sdk.String("distinctio"),
                    RootPath: sdk.String("quibusdam"),
                },
                Labels: map[string]string{
                    "modi": "qui",
                    "aliquid": "cupiditate",
                },
                MysqlProfile: &shared.MysqlProfileInput{
                    Hostname: sdk.String("musty-algebra.com"),
                    Password: sdk.String("assumenda"),
                    Port: sdk.Int(369808),
                    SslConfig: &shared.MysqlSslConfigInput{
                        CaCertificate: sdk.String("alias"),
                        ClientCertificate: sdk.String("fugit"),
                        ClientKey: sdk.String("dolorum"),
                    },
                    Username: sdk.String("Kevin_Glover28"),
                },
                OracleProfile: &shared.OracleProfile{
                    ConnectionAttributes: map[string]string{
                        "eum": "non",
                        "eligendi": "sint",
                        "aliquid": "provident",
                        "necessitatibus": "sint",
                    },
                    DatabaseService: sdk.String("officia"),
                    Hostname: sdk.String("edible-tectonics.org"),
                    Password: sdk.String("dolorum"),
                    Port: sdk.Int(447125),
                    Username: sdk.String("Isobel_Stamm11"),
                },
                PostgresqlProfile: &shared.PostgresqlProfile{
                    Database: sdk.String("magnam"),
                    Hostname: sdk.String("smoggy-sledge.info"),
                    Password: sdk.String("aliquid"),
                    Port: sdk.Int(675439),
                    Username: sdk.String("Shaniya.Friesen"),
                },
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: sdk.String("accusamus"),
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "quidem": "provident",
                    "nam": "id",
                    "blanditiis": "deleniti",
                    "sapiente": "amet",
                },
            },
            ConnectionProfileName: sdk.String("deserunt"),
            FullHierarchy: sdk.Bool(false),
            HierarchyDepth: sdk.Int(394869),
            MysqlRdbms: &shared.MysqlRdbms{
                MysqlDatabases: []shared.MysqlDatabase{
                    shared.MysqlDatabase{
                        Database: sdk.String("natus"),
                        MysqlTables: []shared.MysqlTable{
                            shared.MysqlTable{
                                MysqlColumns: []shared.MysqlColumn{
                                    shared.MysqlColumn{
                                        Collation: sdk.String("perferendis"),
                                        Column: sdk.String("nihil"),
                                        DataType: sdk.String("magnam"),
                                        Length: sdk.Int(716075),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(660174),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("labore"),
                                        Column: sdk.String("labore"),
                                        DataType: sdk.String("suscipit"),
                                        Length: sdk.Int(618016),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(749170),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                },
                                Table: sdk.String("eum"),
                            },
                            shared.MysqlTable{
                                MysqlColumns: []shared.MysqlColumn{
                                    shared.MysqlColumn{
                                        Collation: sdk.String("aspernatur"),
                                        Column: sdk.String("architecto"),
                                        DataType: sdk.String("magnam"),
                                        Length: sdk.Int(92373),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(569965),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("ullam"),
                                        Column: sdk.String("provident"),
                                        DataType: sdk.String("quos"),
                                        Length: sdk.Int(574325),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(33625),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("mollitia"),
                                        Column: sdk.String("reiciendis"),
                                        DataType: sdk.String("mollitia"),
                                        Length: sdk.Int(320997),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(431418),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("dolor"),
                                        Column: sdk.String("necessitatibus"),
                                        DataType: sdk.String("odit"),
                                        Length: sdk.Int(367562),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(97260),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                },
                                Table: sdk.String("iure"),
                            },
                            shared.MysqlTable{
                                MysqlColumns: []shared.MysqlColumn{
                                    shared.MysqlColumn{
                                        Collation: sdk.String("debitis"),
                                        Column: sdk.String("eius"),
                                        DataType: sdk.String("maxime"),
                                        Length: sdk.Int(537023),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(703889),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("in"),
                                        Column: sdk.String("architecto"),
                                        DataType: sdk.String("architecto"),
                                        Length: sdk.Int(919483),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(352312),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("expedita"),
                                        Column: sdk.String("nihil"),
                                        DataType: sdk.String("repellat"),
                                        Length: sdk.Int(841140),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(149448),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("saepe"),
                                        Column: sdk.String("pariatur"),
                                        DataType: sdk.String("accusantium"),
                                        Length: sdk.Int(162493),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(508315),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                },
                                Table: sdk.String("natus"),
                            },
                        },
                    },
                    shared.MysqlDatabase{
                        Database: sdk.String("magni"),
                        MysqlTables: []shared.MysqlTable{
                            shared.MysqlTable{
                                MysqlColumns: []shared.MysqlColumn{
                                    shared.MysqlColumn{
                                        Collation: sdk.String("illum"),
                                        Column: sdk.String("pariatur"),
                                        DataType: sdk.String("maxime"),
                                        Length: sdk.Int(411397),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(569101),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("odit"),
                                        Column: sdk.String("ea"),
                                        DataType: sdk.String("accusantium"),
                                        Length: sdk.Int(69167),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(982575),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("quidem"),
                                        Column: sdk.String("ipsam"),
                                        DataType: sdk.String("voluptate"),
                                        Length: sdk.Int(420075),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(722056),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("eaque"),
                                        Column: sdk.String("pariatur"),
                                        DataType: sdk.String("nemo"),
                                        Length: sdk.Int(975522),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(16627),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                },
                                Table: sdk.String("fugiat"),
                            },
                        },
                    },
                },
            },
            OracleRdbms: &shared.OracleRdbms{
                OracleSchemas: []shared.OracleSchema{
                    shared.OracleSchema{
                        OracleTables: []shared.OracleTable{
                            shared.OracleTable{
                                OracleColumns: []shared.OracleColumn{
                                    shared.OracleColumn{
                                        Column: sdk.String("corporis"),
                                        DataType: sdk.String("hic"),
                                        Encoding: sdk.String("libero"),
                                        Length: sdk.Int(749999),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(171629),
                                        Precision: sdk.Int(339404),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(521037),
                                    },
                                    shared.OracleColumn{
                                        Column: sdk.String("dignissimos"),
                                        DataType: sdk.String("eaque"),
                                        Encoding: sdk.String("quis"),
                                        Length: sdk.Int(199996),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(179490),
                                        Precision: sdk.Int(18521),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(170986),
                                    },
                                    shared.OracleColumn{
                                        Column: sdk.String("minus"),
                                        DataType: sdk.String("quam"),
                                        Encoding: sdk.String("dolor"),
                                        Length: sdk.Int(874573),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(345352),
                                        Precision: sdk.Int(944120),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(928082),
                                    },
                                    shared.OracleColumn{
                                        Column: sdk.String("omnis"),
                                        DataType: sdk.String("facilis"),
                                        Encoding: sdk.String("perspiciatis"),
                                        Length: sdk.Int(31838),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(783645),
                                        Precision: sdk.Int(164694),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(500026),
                                    },
                                },
                                Table: sdk.String("error"),
                            },
                        },
                        Schema: sdk.String("eaque"),
                    },
                },
            },
            PostgresqlRdbms: &shared.PostgresqlRdbms{
                PostgresqlSchemas: []shared.PostgresqlSchema{
                    shared.PostgresqlSchema{
                        PostgresqlTables: []shared.PostgresqlTable{
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("asperiores"),
                                        DataType: sdk.String("earum"),
                                        Length: sdk.Int(267262),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(613966),
                                        Precision: sdk.Int(679091),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(535633),
                                    },
                                },
                                Table: sdk.String("pariatur"),
                            },
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("nobis"),
                                        DataType: sdk.String("libero"),
                                        Length: sdk.Int(964490),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(311945),
                                        Precision: sdk.Int(554242),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(398221),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("dolorem"),
                                        DataType: sdk.String("dolorem"),
                                        Length: sdk.Int(222443),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(186193),
                                        Precision: sdk.Int(218749),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(944373),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("excepturi"),
                                        DataType: sdk.String("cum"),
                                        Length: sdk.Int(452109),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(490459),
                                        Precision: sdk.Int(970237),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(227414),
                                    },
                                },
                                Table: sdk.String("dolorum"),
                            },
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("veritatis"),
                                        DataType: sdk.String("ipsa"),
                                        Length: sdk.Int(56418),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(434417),
                                        Precision: sdk.Int(487838),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(311796),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("accusamus"),
                                        DataType: sdk.String("quidem"),
                                        Length: sdk.Int(976405),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(377752),
                                        Precision: sdk.Int(617658),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(179603),
                                    },
                                },
                                Table: sdk.String("atque"),
                            },
                        },
                        Schema: sdk.String("sit"),
                    },
                    shared.PostgresqlSchema{
                        PostgresqlTables: []shared.PostgresqlTable{
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("soluta"),
                                        DataType: sdk.String("dolorum"),
                                        Length: sdk.Int(478596),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(453697),
                                        Precision: sdk.Int(677082),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(536579),
                                    },
                                },
                                Table: sdk.String("omnis"),
                            },
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("distinctio"),
                                        DataType: sdk.String("asperiores"),
                                        Length: sdk.Int(469497),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(216897),
                                        Precision: sdk.Int(456015),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(663078),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("saepe"),
                                        DataType: sdk.String("eius"),
                                        Length: sdk.Int(137220),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(20651),
                                        Precision: sdk.Int(229219),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(758379),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("accusamus"),
                                        DataType: sdk.String("ad"),
                                        Length: sdk.Int(904425),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(383464),
                                        Precision: sdk.Int(645785),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(588317),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("minima"),
                                        DataType: sdk.String("repellendus"),
                                        Length: sdk.Int(519711),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(628982),
                                        Precision: sdk.Int(55),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(872651),
                                    },
                                },
                                Table: sdk.String("quaerat"),
                            },
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("vel"),
                                        DataType: sdk.String("quod"),
                                        Length: sdk.Int(885338),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(185636),
                                        Precision: sdk.Int(679880),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(952792),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("esse"),
                                        DataType: sdk.String("harum"),
                                        Length: sdk.Int(483409),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(215507),
                                        Precision: sdk.Int(788740),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(947371),
                                    },
                                },
                                Table: sdk.String("amet"),
                            },
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("accusamus"),
                                        DataType: sdk.String("numquam"),
                                        Length: sdk.Int(313692),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(213312),
                                        Precision: sdk.Int(957451),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(518201),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("nihil"),
                                        DataType: sdk.String("sit"),
                                        Length: sdk.Int(711584),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(207470),
                                        Precision: sdk.Int(153694),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(424685),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("libero"),
                                        DataType: sdk.String("voluptas"),
                                        Length: sdk.Int(646265),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(463575),
                                        Precision: sdk.Int(214880),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(277628),
                                    },
                                },
                                Table: sdk.String("qui"),
                            },
                        },
                        Schema: sdk.String("cupiditate"),
                    },
                    shared.PostgresqlSchema{
                        PostgresqlTables: []shared.PostgresqlTable{
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("soluta"),
                                        DataType: sdk.String("dicta"),
                                        Length: sdk.Int(674848),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(517379),
                                        Precision: sdk.Int(276894),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(132068),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("dolores"),
                                        DataType: sdk.String("distinctio"),
                                        Length: sdk.Int(704474),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(396060),
                                        Precision: sdk.Int(463150),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(565421),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("temporibus"),
                                        DataType: sdk.String("qui"),
                                        Length: sdk.Int(204865),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(144847),
                                        Precision: sdk.Int(164959),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(488056),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("sunt"),
                                        DataType: sdk.String("ullam"),
                                        Length: sdk.Int(722081),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(940432),
                                        Precision: sdk.Int(30452),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(765326),
                                    },
                                },
                                Table: sdk.String("soluta"),
                            },
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("et"),
                                        DataType: sdk.String("saepe"),
                                        Length: sdk.Int(217450),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(83422),
                                        Precision: sdk.Int(749255),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(552193),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("tempore"),
                                        DataType: sdk.String("cupiditate"),
                                        Length: sdk.Int(45614),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(961937),
                                        Precision: sdk.Int(209157),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(292147),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("labore"),
                                        DataType: sdk.String("adipisci"),
                                        Length: sdk.Int(677263),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(100294),
                                        Precision: sdk.Int(63038),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(16429),
                                    },
                                },
                                Table: sdk.String("quas"),
                            },
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("consequatur"),
                                        DataType: sdk.String("est"),
                                        Length: sdk.Int(833038),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(785153),
                                        Precision: sdk.Int(984330),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(281730),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("facilis"),
                                        DataType: sdk.String("cupiditate"),
                                        Length: sdk.Int(181631),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(63955),
                                        Precision: sdk.Int(512393),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(485628),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("occaecati"),
                                        DataType: sdk.String("voluptatibus"),
                                        Length: sdk.Int(787542),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(876506),
                                        Precision: sdk.Int(606476),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(338159),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("ipsum"),
                                        DataType: sdk.String("delectus"),
                                        Length: sdk.Int(455169),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(231701),
                                        Precision: sdk.Int(878870),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(949319),
                                    },
                                },
                                Table: sdk.String("dignissimos"),
                            },
                            shared.PostgresqlTable{
                                PostgresqlColumns: []shared.PostgresqlColumn{
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("distinctio"),
                                        DataType: sdk.String("quod"),
                                        Length: sdk.Int(486160),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(630448),
                                        Precision: sdk.Int(708548),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(874288),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("ducimus"),
                                        DataType: sdk.String("dolore"),
                                        Length: sdk.Int(844550),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(848944),
                                        Precision: sdk.Int(194342),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(617877),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("impedit"),
                                        DataType: sdk.String("aut"),
                                        Length: sdk.Int(974259),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(347233),
                                        Precision: sdk.Int(862310),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(148141),
                                    },
                                    shared.PostgresqlColumn{
                                        Column: sdk.String("porro"),
                                        DataType: sdk.String("maiores"),
                                        Length: sdk.Int(985033),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(478370),
                                        Precision: sdk.Int(753570),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(497391),
                                    },
                                },
                                Table: sdk.String("alias"),
                            },
                        },
                        Schema: sdk.String("officia"),
                    },
                },
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("possimus"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscoverConnectionProfileResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsConnectionProfilesList

Use this method to list connection profiles created in a project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesList(ctx, operations.DatastreamProjectsLocationsConnectionProfilesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("ex"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("voluptatibus"),
        OrderBy: sdk.String("nostrum"),
        PageSize: sdk.Int64(960835),
        PageToken: sdk.String("quisquam"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.DatastreamProjectsLocationsConnectionProfilesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionProfilesResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsFetchStaticIps

The FetchStaticIps API call exposes the static IP addresses used by Datastream.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsFetchStaticIps(ctx, operations.DatastreamProjectsLocationsFetchStaticIpsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("ea"),
        Key: sdk.String("quo"),
        Name: "Kate Cole DVM",
        OauthToken: sdk.String("libero"),
        PageSize: sdk.Int64(13948),
        PageToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.DatastreamProjectsLocationsFetchStaticIpsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchStaticIpsResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsList(ctx, operations.DatastreamProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("et"),
        Filter: sdk.String("dolorum"),
        Key: sdk.String("laborum"),
        Name: "Lee Kemmer",
        OauthToken: sdk.String("quas"),
        PageSize: sdk.Int64(829603),
        PageToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DatastreamProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsOperationsCancel(ctx, operations.DatastreamProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "explicabo": "provident",
            "ipsa": "molestiae",
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("esse"),
        Key: sdk.String("esse"),
        Name: "Blake Kihn",
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("assumenda"),
    }, operations.DatastreamProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsOperationsList(ctx, operations.DatastreamProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("ipsa"),
        Filter: sdk.String("id"),
        Key: sdk.String("quidem"),
        Name: "Angelica Stamm",
        OauthToken: sdk.String("eius"),
        PageSize: sdk.Int64(178367),
        PageToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.DatastreamProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsPrivateConnectionsCreate

Use this method to create a private connectivity configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsPrivateConnectionsCreate(ctx, operations.DatastreamProjectsLocationsPrivateConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PrivateConnectionInput: &shared.PrivateConnectionInput{
            DisplayName: sdk.String("debitis"),
            Error: &shared.Error{
                Details: map[string]string{
                    "aspernatur": "sequi",
                    "quo": "esse",
                },
                ErrorTime: sdk.String("recusandae"),
                ErrorUUID: sdk.String("aperiam"),
                Message: sdk.String("distinctio"),
                Reason: sdk.String("quod"),
            },
            Labels: map[string]string{
                "inventore": "nihil",
                "totam": "accusamus",
            },
            VpcPeeringConfig: &shared.VpcPeeringConfig{
                Subnet: sdk.String("aliquam"),
                Vpc: sdk.String("odio"),
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("dolores"),
        Force: sdk.Bool(false),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("molestiae"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        PrivateConnectionID: sdk.String("porro"),
        QuotaUser: sdk.String("eum"),
        RequestID: sdk.String("quas"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.DatastreamProjectsLocationsPrivateConnectionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsPrivateConnectionsList

Use this method to list private connectivity configurations in a project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsPrivateConnectionsList(ctx, operations.DatastreamProjectsLocationsPrivateConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("incidunt"),
        Filter: sdk.String("atque"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("minima"),
        OrderBy: sdk.String("nisi"),
        PageSize: sdk.Int64(147014),
        PageToken: sdk.String("sapiente"),
        Parent: "consequuntur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.DatastreamProjectsLocationsPrivateConnectionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPrivateConnectionsResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsPrivateConnectionsRoutesCreate

Use this method to create a route for a private connectivity configuration in a project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsPrivateConnectionsRoutesCreate(ctx, operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RouteInput: &shared.RouteInput{
            DestinationAddress: sdk.String("atque"),
            DestinationPort: sdk.Int(92260),
            DisplayName: sdk.String("esse"),
            Labels: map[string]string{
                "accusamus": "veritatis",
                "esse": "quod",
                "nam": "vero",
                "aliquid": "quasi",
            },
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("occaecati"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        RequestID: sdk.String("eligendi"),
        RouteID: sdk.String("sit"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsPrivateConnectionsRoutesList

Use this method to list routes created for a private connectivity configuration in a project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsPrivateConnectionsRoutesList(ctx, operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("minus"),
        Filter: sdk.String("quaerat"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("consectetur"),
        OrderBy: sdk.String("esse"),
        PageSize: sdk.Int64(503427),
        PageToken: sdk.String("provident"),
        Parent: "a",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("esse"),
    }, operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoutesResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsStreamsCreate

Use this method to create a stream.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsStreamsCreate(ctx, operations.DatastreamProjectsLocationsStreamsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        StreamInput: &shared.StreamInput{
            BackfillAll: &shared.BackfillAllStrategy{
                MysqlExcludedObjects: &shared.MysqlRdbms{
                    MysqlDatabases: []shared.MysqlDatabase{
                        shared.MysqlDatabase{
                            Database: sdk.String("error"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("possimus"),
                                            Column: sdk.String("quia"),
                                            DataType: sdk.String("eveniet"),
                                            Length: sdk.Int(992430),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(815524),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("veritatis"),
                                            Column: sdk.String("consequuntur"),
                                            DataType: sdk.String("quasi"),
                                            Length: sdk.Int(628899),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(633608),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("aliquid"),
                                            Column: sdk.String("tenetur"),
                                            DataType: sdk.String("quae"),
                                            Length: sdk.Int(936747),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(424032),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("in"),
                                            Column: sdk.String("eius"),
                                            DataType: sdk.String("libero"),
                                            Length: sdk.Int(849039),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(742238),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("accusantium"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("sapiente"),
                                            Column: sdk.String("dicta"),
                                            DataType: sdk.String("ullam"),
                                            Length: sdk.Int(443879),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(356707),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("nisi"),
                                            Column: sdk.String("aut"),
                                            DataType: sdk.String("voluptatum"),
                                            Length: sdk.Int(185232),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(845358),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("ex"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("itaque"),
                                            Column: sdk.String("dolorum"),
                                            DataType: sdk.String("architecto"),
                                            Length: sdk.Int(609178),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(945302),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("quasi"),
                                            Column: sdk.String("at"),
                                            DataType: sdk.String("et"),
                                            Length: sdk.Int(454162),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(55965),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("minima"),
                                            Column: sdk.String("veritatis"),
                                            DataType: sdk.String("consectetur"),
                                            Length: sdk.Int(237173),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(614465),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("temporibus"),
                                },
                            },
                        },
                        shared.MysqlDatabase{
                            Database: sdk.String("accusantium"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("laudantium"),
                                            Column: sdk.String("eum"),
                                            DataType: sdk.String("mollitia"),
                                            Length: sdk.Int(68074),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(544591),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("non"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("dolor"),
                                            Column: sdk.String("occaecati"),
                                            DataType: sdk.String("numquam"),
                                            Length: sdk.Int(771089),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(131055),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("voluptas"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("dignissimos"),
                                            Column: sdk.String("dicta"),
                                            DataType: sdk.String("maiores"),
                                            Length: sdk.Int(618480),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(244651),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("voluptatibus"),
                                },
                            },
                        },
                        shared.MysqlDatabase{
                            Database: sdk.String("voluptas"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("ea"),
                                            Column: sdk.String("quaerat"),
                                            DataType: sdk.String("consequuntur"),
                                            Length: sdk.Int(831520),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(638762),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("maxime"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("officia"),
                                            Column: sdk.String("asperiores"),
                                            DataType: sdk.String("nemo"),
                                            Length: sdk.Int(65304),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(312753),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("porro"),
                                            Column: sdk.String("quod"),
                                            DataType: sdk.String("labore"),
                                            Length: sdk.Int(70447),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(241418),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("fuga"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("suscipit"),
                                            Column: sdk.String("velit"),
                                            DataType: sdk.String("culpa"),
                                            Length: sdk.Int(665859),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(926880),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("totam"),
                                            Column: sdk.String("fugiat"),
                                            DataType: sdk.String("vel"),
                                            Length: sdk.Int(497678),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(554688),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("vel"),
                                            Column: sdk.String("labore"),
                                            DataType: sdk.String("possimus"),
                                            Length: sdk.Int(706575),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(738227),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("commodi"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("corporis"),
                                            Column: sdk.String("reiciendis"),
                                            DataType: sdk.String("assumenda"),
                                            Length: sdk.Int(363161),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(924967),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("aliquid"),
                                            Column: sdk.String("aperiam"),
                                            DataType: sdk.String("cum"),
                                            Length: sdk.Int(232627),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(449083),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("exercitationem"),
                                },
                            },
                        },
                        shared.MysqlDatabase{
                            Database: sdk.String("earum"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("doloribus"),
                                            Column: sdk.String("suscipit"),
                                            DataType: sdk.String("reiciendis"),
                                            Length: sdk.Int(697142),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(904949),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("necessitatibus"),
                                            Column: sdk.String("dolore"),
                                            DataType: sdk.String("sunt"),
                                            Length: sdk.Int(992012),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(241545),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("non"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("beatae"),
                                            Column: sdk.String("dignissimos"),
                                            DataType: sdk.String("a"),
                                            Length: sdk.Int(891523),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(233420),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("corporis"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("laboriosam"),
                                            Column: sdk.String("ipsa"),
                                            DataType: sdk.String("voluptates"),
                                            Length: sdk.Int(730709),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(113816),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("accusamus"),
                                            Column: sdk.String("similique"),
                                            DataType: sdk.String("tempora"),
                                            Length: sdk.Int(132815),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(379057),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("voluptas"),
                                            Column: sdk.String("voluptas"),
                                            DataType: sdk.String("minima"),
                                            Length: sdk.Int(748789),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(680116),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("adipisci"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("dolores"),
                                            Column: sdk.String("blanditiis"),
                                            DataType: sdk.String("in"),
                                            Length: sdk.Int(296242),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(304468),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("officiis"),
                                            Column: sdk.String("temporibus"),
                                            DataType: sdk.String("ullam"),
                                            Length: sdk.Int(237742),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(738391),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("blanditiis"),
                                            Column: sdk.String("quas"),
                                            DataType: sdk.String("hic"),
                                            Length: sdk.Int(201517),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(633998),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("corrupti"),
                                            Column: sdk.String("pariatur"),
                                            DataType: sdk.String("totam"),
                                            Length: sdk.Int(940210),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(348783),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("nobis"),
                                },
                            },
                        },
                    },
                },
                OracleExcludedObjects: &shared.OracleRdbms{
                    OracleSchemas: []shared.OracleSchema{
                        shared.OracleSchema{
                            OracleTables: []shared.OracleTable{
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            Column: sdk.String("reiciendis"),
                                            DataType: sdk.String("explicabo"),
                                            Encoding: sdk.String("asperiores"),
                                            Length: sdk.Int(707918),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(451822),
                                            Precision: sdk.Int(709072),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(70869),
                                        },
                                    },
                                    Table: sdk.String("iste"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            Column: sdk.String("laborum"),
                                            DataType: sdk.String("sed"),
                                            Encoding: sdk.String("in"),
                                            Length: sdk.Int(417486),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(696077),
                                            Precision: sdk.Int(131289),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(378326),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("unde"),
                                            DataType: sdk.String("architecto"),
                                            Encoding: sdk.String("suscipit"),
                                            Length: sdk.Int(960257),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(895386),
                                            Precision: sdk.Int(72434),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(967795),
                                        },
                                    },
                                    Table: sdk.String("perferendis"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            Column: sdk.String("maiores"),
                                            DataType: sdk.String("incidunt"),
                                            Encoding: sdk.String("sed"),
                                            Length: sdk.Int(592231),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(258702),
                                            Precision: sdk.Int(896762),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(215529),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("ea"),
                                            DataType: sdk.String("occaecati"),
                                            Encoding: sdk.String("quos"),
                                            Length: sdk.Int(975752),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(271653),
                                            Precision: sdk.Int(273009),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(455444),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("reiciendis"),
                                            DataType: sdk.String("ex"),
                                            Encoding: sdk.String("sit"),
                                            Length: sdk.Int(248413),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(888044),
                                            Precision: sdk.Int(505866),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(708609),
                                        },
                                    },
                                    Table: sdk.String("quaerat"),
                                },
                            },
                            Schema: sdk.String("incidunt"),
                        },
                    },
                },
                PostgresqlExcludedObjects: &shared.PostgresqlRdbms{
                    PostgresqlSchemas: []shared.PostgresqlSchema{
                        shared.PostgresqlSchema{
                            PostgresqlTables: []shared.PostgresqlTable{
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("sit"),
                                            DataType: sdk.String("nobis"),
                                            Length: sdk.Int(625637),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(333507),
                                            Precision: sdk.Int(329543),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(924159),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("reiciendis"),
                                            DataType: sdk.String("nulla"),
                                            Length: sdk.Int(168576),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(48690),
                                            Precision: sdk.Int(901483),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(253642),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("veniam"),
                                            DataType: sdk.String("in"),
                                            Length: sdk.Int(889234),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(104627),
                                            Precision: sdk.Int(512452),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(348476),
                                        },
                                    },
                                    Table: sdk.String("praesentium"),
                                },
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("laboriosam"),
                                            DataType: sdk.String("dolorum"),
                                            Length: sdk.Int(530089),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(622385),
                                            Precision: sdk.Int(944708),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(710529),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("debitis"),
                                            DataType: sdk.String("neque"),
                                            Length: sdk.Int(677115),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(341698),
                                            Precision: sdk.Int(639028),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(676243),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("corrupti"),
                                            DataType: sdk.String("accusamus"),
                                            Length: sdk.Int(272683),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(543678),
                                            Precision: sdk.Int(148268),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(282699),
                                        },
                                    },
                                    Table: sdk.String("fugiat"),
                                },
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("culpa"),
                                            DataType: sdk.String("expedita"),
                                            Length: sdk.Int(299643),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(7884),
                                            Precision: sdk.Int(460220),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(372679),
                                        },
                                    },
                                    Table: sdk.String("sit"),
                                },
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("quas"),
                                            DataType: sdk.String("repudiandae"),
                                            Length: sdk.Int(361151),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(89494),
                                            Precision: sdk.Int(502710),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(405942),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("sed"),
                                            DataType: sdk.String("sit"),
                                            Length: sdk.Int(425508),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(342611),
                                            Precision: sdk.Int(906172),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(622231),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("consequatur"),
                                            DataType: sdk.String("incidunt"),
                                            Length: sdk.Int(968865),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(209750),
                                            Precision: sdk.Int(690894),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(115703),
                                        },
                                    },
                                    Table: sdk.String("architecto"),
                                },
                            },
                            Schema: sdk.String("occaecati"),
                        },
                        shared.PostgresqlSchema{
                            PostgresqlTables: []shared.PostgresqlTable{
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("atque"),
                                            DataType: sdk.String("laborum"),
                                            Length: sdk.Int(724148),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(948861),
                                            Precision: sdk.Int(388867),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(2703),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("amet"),
                                            DataType: sdk.String("deserunt"),
                                            Length: sdk.Int(454860),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(600392),
                                            Precision: sdk.Int(972083),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(588740),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("repellendus"),
                                            DataType: sdk.String("delectus"),
                                            Length: sdk.Int(914791),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(16871),
                                            Precision: sdk.Int(667285),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(696483),
                                        },
                                    },
                                    Table: sdk.String("reprehenderit"),
                                },
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("fuga"),
                                            DataType: sdk.String("praesentium"),
                                            Length: sdk.Int(648598),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(333965),
                                            Precision: sdk.Int(29100),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(790840),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("repudiandae"),
                                            DataType: sdk.String("quasi"),
                                            Length: sdk.Int(542457),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(442036),
                                            Precision: sdk.Int(991142),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(519952),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("suscipit"),
                                            DataType: sdk.String("quidem"),
                                            Length: sdk.Int(806670),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(90885),
                                            Precision: sdk.Int(461007),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(227759),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("assumenda"),
                                            DataType: sdk.String("ea"),
                                            Length: sdk.Int(539118),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(623295),
                                            Precision: sdk.Int(887265),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(886961),
                                        },
                                    },
                                    Table: sdk.String("accusamus"),
                                },
                            },
                            Schema: sdk.String("natus"),
                        },
                    },
                },
            },
            BackfillNone: map[string]interface{}{
                "aspernatur": "ex",
                "maiores": "corrupti",
            },
            CustomerManagedEncryptionKey: sdk.String("at"),
            DestinationConfig: &shared.DestinationConfig{
                BigqueryDestinationConfig: &shared.BigQueryDestinationConfig{
                    DataFreshness: sdk.String("error"),
                    SingleTargetDataset: &shared.SingleTargetDataset{
                        DatasetID: sdk.String("blanditiis"),
                    },
                    SourceHierarchyDatasets: &shared.SourceHierarchyDatasets{
                        DatasetTemplate: &shared.DatasetTemplate{
                            DatasetIDPrefix: sdk.String("suscipit"),
                            KmsKeyName: sdk.String("repudiandae"),
                            Location: sdk.String("atque"),
                        },
                    },
                },
                DestinationConnectionProfile: sdk.String("atque"),
                GcsDestinationConfig: &shared.GcsDestinationConfig{
                    AvroFileFormat: map[string]interface{}{
                        "recusandae": "dolorum",
                    },
                    FileRotationInterval: sdk.String("repellendus"),
                    FileRotationMb: sdk.Int(287119),
                    JSONFileFormat: &shared.JSONFileFormat{
                        Compression: shared.JSONFileFormatCompressionEnumGzip.ToPointer(),
                        SchemaFileFormat: shared.JSONFileFormatSchemaFileFormatEnumSchemaFileFormatUnspecified.ToPointer(),
                    },
                    Path: sdk.String("repudiandae"),
                },
            },
            DisplayName: sdk.String("dicta"),
            Labels: map[string]string{
                "beatae": "dolores",
            },
            SourceConfig: &shared.SourceConfig{
                MysqlSourceConfig: &shared.MysqlSourceConfig{
                    ExcludeObjects: &shared.MysqlRdbms{
                        MysqlDatabases: []shared.MysqlDatabase{
                            shared.MysqlDatabase{
                                Database: sdk.String("laboriosam"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("molestias"),
                                                Column: sdk.String("magnam"),
                                                DataType: sdk.String("saepe"),
                                                Length: sdk.Int(160467),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(580107),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("officiis"),
                                                Column: sdk.String("perspiciatis"),
                                                DataType: sdk.String("in"),
                                                Length: sdk.Int(238043),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(907876),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("occaecati"),
                                                Column: sdk.String("consequuntur"),
                                                DataType: sdk.String("fugit"),
                                                Length: sdk.Int(661118),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(335631),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("reprehenderit"),
                                                Column: sdk.String("error"),
                                                DataType: sdk.String("illo"),
                                                Length: sdk.Int(361306),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(696463),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("eveniet"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                Database: sdk.String("non"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("iure"),
                                                Column: sdk.String("ipsa"),
                                                DataType: sdk.String("totam"),
                                                Length: sdk.Int(61078),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(474668),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("eveniet"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("cum"),
                                                Column: sdk.String("iure"),
                                                DataType: sdk.String("necessitatibus"),
                                                Length: sdk.Int(187552),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(672582),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("distinctio"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("rem"),
                                                Column: sdk.String("aliquam"),
                                                DataType: sdk.String("ad"),
                                                Length: sdk.Int(997963),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(3099),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("corporis"),
                                                Column: sdk.String("perspiciatis"),
                                                DataType: sdk.String("nihil"),
                                                Length: sdk.Int(649078),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(378245),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("alias"),
                                                Column: sdk.String("maiores"),
                                                DataType: sdk.String("reiciendis"),
                                                Length: sdk.Int(174658),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(663866),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("minima"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("dolorum"),
                                                Column: sdk.String("nesciunt"),
                                                DataType: sdk.String("quae"),
                                                Length: sdk.Int(925703),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(607249),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quaerat"),
                                                Column: sdk.String("molestiae"),
                                                DataType: sdk.String("ex"),
                                                Length: sdk.Int(284000),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(633062),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("adipisci"),
                                    },
                                },
                            },
                        },
                    },
                    IncludeObjects: &shared.MysqlRdbms{
                        MysqlDatabases: []shared.MysqlDatabase{
                            shared.MysqlDatabase{
                                Database: sdk.String("laudantium"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("recusandae"),
                                                Column: sdk.String("esse"),
                                                DataType: sdk.String("provident"),
                                                Length: sdk.Int(337477),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(431785),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("reiciendis"),
                                                Column: sdk.String("provident"),
                                                DataType: sdk.String("aspernatur"),
                                                Length: sdk.Int(354506),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(96804),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("animi"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("mollitia"),
                                                Column: sdk.String("provident"),
                                                DataType: sdk.String("possimus"),
                                                Length: sdk.Int(659177),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(402767),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("aliquid"),
                                                Column: sdk.String("accusantium"),
                                                DataType: sdk.String("repellat"),
                                                Length: sdk.Int(984632),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(351893),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("in"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                Database: sdk.String("nam"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("laborum"),
                                                Column: sdk.String("placeat"),
                                                DataType: sdk.String("modi"),
                                                Length: sdk.Int(976226),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(564064),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("officiis"),
                                                Column: sdk.String("sapiente"),
                                                DataType: sdk.String("cumque"),
                                                Length: sdk.Int(113486),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(698249),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("tempora"),
                                                Column: sdk.String("quis"),
                                                DataType: sdk.String("inventore"),
                                                Length: sdk.Int(147685),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(765271),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("quae"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("velit"),
                                                Column: sdk.String("aspernatur"),
                                                DataType: sdk.String("eum"),
                                                Length: sdk.Int(260628),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(521996),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("at"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("eos"),
                                                Column: sdk.String("sapiente"),
                                                DataType: sdk.String("eum"),
                                                Length: sdk.Int(117320),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(325118),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("beatae"),
                                                Column: sdk.String("cupiditate"),
                                                DataType: sdk.String("provident"),
                                                Length: sdk.Int(936469),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(745398),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("hic"),
                                                Column: sdk.String("illum"),
                                                DataType: sdk.String("eaque"),
                                                Length: sdk.Int(935833),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(596211),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("maiores"),
                                                Column: sdk.String("debitis"),
                                                DataType: sdk.String("aliquid"),
                                                Length: sdk.Int(780931),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(380335),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("dolorem"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("cumque"),
                                                Column: sdk.String("fuga"),
                                                DataType: sdk.String("ratione"),
                                                Length: sdk.Int(656762),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(898760),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("nulla"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                Database: sdk.String("consequatur"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("ducimus"),
                                                Column: sdk.String("natus"),
                                                DataType: sdk.String("occaecati"),
                                                Length: sdk.Int(382440),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(241557),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("quasi"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                Database: sdk.String("magni"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("necessitatibus"),
                                                Column: sdk.String("ipsa"),
                                                DataType: sdk.String("tempora"),
                                                Length: sdk.Int(470621),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(473190),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("dicta"),
                                                Column: sdk.String("iusto"),
                                                DataType: sdk.String("esse"),
                                                Length: sdk.Int(508390),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(979963),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("reiciendis"),
                                                Column: sdk.String("vel"),
                                                DataType: sdk.String("architecto"),
                                                Length: sdk.Int(857125),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(39650),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("dicta"),
                                                Column: sdk.String("odio"),
                                                DataType: sdk.String("tempora"),
                                                Length: sdk.Int(458259),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(403793),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("consectetur"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("ipsa"),
                                                Column: sdk.String("laborum"),
                                                DataType: sdk.String("sunt"),
                                                Length: sdk.Int(344718),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(856756),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("expedita"),
                                                Column: sdk.String("aliquid"),
                                                DataType: sdk.String("officia"),
                                                Length: sdk.Int(381397),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(399161),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("perferendis"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("voluptas"),
                                                Column: sdk.String("iste"),
                                                DataType: sdk.String("id"),
                                                Length: sdk.Int(70042),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(625358),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("possimus"),
                                                Column: sdk.String("voluptates"),
                                                DataType: sdk.String("mollitia"),
                                                Length: sdk.Int(671794),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(726343),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("ad"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("enim"),
                                                Column: sdk.String("vitae"),
                                                DataType: sdk.String("repellendus"),
                                                Length: sdk.Int(405036),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(775803),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("ex"),
                                                Column: sdk.String("ut"),
                                                DataType: sdk.String("ad"),
                                                Length: sdk.Int(713927),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(29950),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("molestias"),
                                                Column: sdk.String("cum"),
                                                DataType: sdk.String("aliquid"),
                                                Length: sdk.Int(109784),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(530860),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("omnis"),
                                    },
                                },
                            },
                        },
                    },
                    MaxConcurrentBackfillTasks: sdk.Int(85233),
                    MaxConcurrentCdcTasks: sdk.Int(703218),
                },
                OracleSourceConfig: &shared.OracleSourceConfig{
                    DropLargeObjects: map[string]interface{}{
                        "culpa": "voluptatem",
                        "sapiente": "officiis",
                        "architecto": "fuga",
                    },
                    ExcludeObjects: &shared.OracleRdbms{
                        OracleSchemas: []shared.OracleSchema{
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("alias"),
                                                DataType: sdk.String("deleniti"),
                                                Encoding: sdk.String("earum"),
                                                Length: sdk.Int(404244),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(958308),
                                                Precision: sdk.Int(524184),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(796320),
                                            },
                                        },
                                        Table: sdk.String("nemo"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("ratione"),
                                                DataType: sdk.String("ullam"),
                                                Encoding: sdk.String("perferendis"),
                                                Length: sdk.Int(848341),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(518150),
                                                Precision: sdk.Int(770675),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(842777),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("nam"),
                                                DataType: sdk.String("ipsam"),
                                                Encoding: sdk.String("culpa"),
                                                Length: sdk.Int(222864),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(307376),
                                                Precision: sdk.Int(80532),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(537279),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("veritatis"),
                                                DataType: sdk.String("tempora"),
                                                Encoding: sdk.String("dolor"),
                                                Length: sdk.Int(8689),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(100014),
                                                Precision: sdk.Int(24944),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(265039),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("fugit"),
                                                DataType: sdk.String("ab"),
                                                Encoding: sdk.String("laudantium"),
                                                Length: sdk.Int(65604),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(222658),
                                                Precision: sdk.Int(856277),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(369490),
                                            },
                                        },
                                        Table: sdk.String("consequuntur"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("quas"),
                                                DataType: sdk.String("eveniet"),
                                                Encoding: sdk.String("impedit"),
                                                Length: sdk.Int(884952),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(456410),
                                                Precision: sdk.Int(897277),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(153369),
                                            },
                                        },
                                        Table: sdk.String("veniam"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("expedita"),
                                                DataType: sdk.String("eum"),
                                                Encoding: sdk.String("vel"),
                                                Length: sdk.Int(528234),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(301692),
                                                Precision: sdk.Int(349440),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(70410),
                                            },
                                        },
                                        Table: sdk.String("porro"),
                                    },
                                },
                                Schema: sdk.String("autem"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("recusandae"),
                                                DataType: sdk.String("consequuntur"),
                                                Encoding: sdk.String("voluptatem"),
                                                Length: sdk.Int(350207),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(895692),
                                                Precision: sdk.Int(95619),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(392569),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("at"),
                                                DataType: sdk.String("vero"),
                                                Encoding: sdk.String("est"),
                                                Length: sdk.Int(690785),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(192718),
                                                Precision: sdk.Int(987349),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(918092),
                                            },
                                        },
                                        Table: sdk.String("optio"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("nemo"),
                                                DataType: sdk.String("voluptate"),
                                                Encoding: sdk.String("blanditiis"),
                                                Length: sdk.Int(642352),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(376389),
                                                Precision: sdk.Int(254025),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(364912),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("quos"),
                                                DataType: sdk.String("eius"),
                                                Encoding: sdk.String("aspernatur"),
                                                Length: sdk.Int(495970),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(200516),
                                                Precision: sdk.Int(681740),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(514054),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("incidunt"),
                                                DataType: sdk.String("quasi"),
                                                Encoding: sdk.String("rem"),
                                                Length: sdk.Int(851854),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(117380),
                                                Precision: sdk.Int(395544),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(159845),
                                            },
                                        },
                                        Table: sdk.String("consectetur"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("cupiditate"),
                                                DataType: sdk.String("reiciendis"),
                                                Encoding: sdk.String("soluta"),
                                                Length: sdk.Int(3860),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(608989),
                                                Precision: sdk.Int(178580),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(579011),
                                            },
                                        },
                                        Table: sdk.String("iste"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("inventore"),
                                                DataType: sdk.String("fuga"),
                                                Encoding: sdk.String("accusamus"),
                                                Length: sdk.Int(976802),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(719620),
                                                Precision: sdk.Int(608593),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(966390),
                                            },
                                        },
                                        Table: sdk.String("minima"),
                                    },
                                },
                                Schema: sdk.String("praesentium"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("temporibus"),
                                                DataType: sdk.String("quos"),
                                                Encoding: sdk.String("commodi"),
                                                Length: sdk.Int(930819),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(415608),
                                                Precision: sdk.Int(520761),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(936618),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("modi"),
                                                DataType: sdk.String("nam"),
                                                Encoding: sdk.String("vero"),
                                                Length: sdk.Int(32901),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(371919),
                                                Precision: sdk.Int(425946),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(1383),
                                            },
                                        },
                                        Table: sdk.String("quasi"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("maiores"),
                                                DataType: sdk.String("enim"),
                                                Encoding: sdk.String("sint"),
                                                Length: sdk.Int(858778),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(643678),
                                                Precision: sdk.Int(458503),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(364463),
                                            },
                                        },
                                        Table: sdk.String("reprehenderit"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("quis"),
                                                DataType: sdk.String("sint"),
                                                Encoding: sdk.String("accusamus"),
                                                Length: sdk.Int(774684),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(945027),
                                                Precision: sdk.Int(900103),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(991891),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("ex"),
                                                DataType: sdk.String("voluptas"),
                                                Encoding: sdk.String("debitis"),
                                                Length: sdk.Int(966148),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(65082),
                                                Precision: sdk.Int(791880),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(685478),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("laborum"),
                                                DataType: sdk.String("consectetur"),
                                                Encoding: sdk.String("velit"),
                                                Length: sdk.Int(538869),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(216457),
                                                Precision: sdk.Int(773035),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(166047),
                                            },
                                        },
                                        Table: sdk.String("soluta"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("nam"),
                                                DataType: sdk.String("dolore"),
                                                Encoding: sdk.String("iusto"),
                                                Length: sdk.Int(453094),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(194023),
                                                Precision: sdk.Int(493958),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(205566),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("quo"),
                                                DataType: sdk.String("deleniti"),
                                                Encoding: sdk.String("quibusdam"),
                                                Length: sdk.Int(437814),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(139072),
                                                Precision: sdk.Int(974990),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(426904),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("magnam"),
                                                DataType: sdk.String("quibusdam"),
                                                Encoding: sdk.String("inventore"),
                                                Length: sdk.Int(818034),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(726878),
                                                Precision: sdk.Int(102413),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(975425),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("quia"),
                                                DataType: sdk.String("porro"),
                                                Encoding: sdk.String("aliquam"),
                                                Length: sdk.Int(247045),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(75359),
                                                Precision: sdk.Int(36561),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(424663),
                                            },
                                        },
                                        Table: sdk.String("ea"),
                                    },
                                },
                                Schema: sdk.String("beatae"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("eum"),
                                                DataType: sdk.String("velit"),
                                                Encoding: sdk.String("ut"),
                                                Length: sdk.Int(596433),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(935302),
                                                Precision: sdk.Int(117525),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(772266),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("voluptatibus"),
                                                DataType: sdk.String("iste"),
                                                Encoding: sdk.String("itaque"),
                                                Length: sdk.Int(2677),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(391797),
                                                Precision: sdk.Int(931505),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(242178),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("laborum"),
                                                DataType: sdk.String("non"),
                                                Encoding: sdk.String("dolor"),
                                                Length: sdk.Int(483394),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(24753),
                                                Precision: sdk.Int(39992),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(7468),
                                            },
                                        },
                                        Table: sdk.String("officia"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("ea"),
                                                DataType: sdk.String("quidem"),
                                                Encoding: sdk.String("voluptas"),
                                                Length: sdk.Int(705148),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(809365),
                                                Precision: sdk.Int(596065),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(709036),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("deleniti"),
                                                DataType: sdk.String("a"),
                                                Encoding: sdk.String("voluptate"),
                                                Length: sdk.Int(351936),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(600193),
                                                Precision: sdk.Int(897543),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(654082),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("impedit"),
                                                DataType: sdk.String("ipsam"),
                                                Encoding: sdk.String("corporis"),
                                                Length: sdk.Int(668234),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(621666),
                                                Precision: sdk.Int(456885),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(288570),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("veritatis"),
                                                DataType: sdk.String("vero"),
                                                Encoding: sdk.String("consectetur"),
                                                Length: sdk.Int(112427),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(81371),
                                                Precision: sdk.Int(212434),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(322017),
                                            },
                                        },
                                        Table: sdk.String("qui"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("ex"),
                                                DataType: sdk.String("nemo"),
                                                Encoding: sdk.String("soluta"),
                                                Length: sdk.Int(726227),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(526907),
                                                Precision: sdk.Int(678060),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(487676),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("fugit"),
                                                DataType: sdk.String("alias"),
                                                Encoding: sdk.String("magni"),
                                                Length: sdk.Int(425402),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(64435),
                                                Precision: sdk.Int(63553),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(264333),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("neque"),
                                                DataType: sdk.String("exercitationem"),
                                                Encoding: sdk.String("itaque"),
                                                Length: sdk.Int(88248),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(215398),
                                                Precision: sdk.Int(602229),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(858338),
                                            },
                                        },
                                        Table: sdk.String("distinctio"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("quia"),
                                                DataType: sdk.String("quia"),
                                                Encoding: sdk.String("nostrum"),
                                                Length: sdk.Int(605712),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(727250),
                                                Precision: sdk.Int(115661),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(663318),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("libero"),
                                                DataType: sdk.String("fugiat"),
                                                Encoding: sdk.String("officia"),
                                                Length: sdk.Int(554603),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(811939),
                                                Precision: sdk.Int(25756),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(479385),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("ipsa"),
                                                DataType: sdk.String("voluptates"),
                                                Encoding: sdk.String("inventore"),
                                                Length: sdk.Int(49348),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(517137),
                                                Precision: sdk.Int(292888),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(755106),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("distinctio"),
                                                DataType: sdk.String("voluptatem"),
                                                Encoding: sdk.String("autem"),
                                                Length: sdk.Int(456688),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(172951),
                                                Precision: sdk.Int(824798),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(107210),
                                            },
                                        },
                                        Table: sdk.String("est"),
                                    },
                                },
                                Schema: sdk.String("facere"),
                            },
                        },
                    },
                    IncludeObjects: &shared.OracleRdbms{
                        OracleSchemas: []shared.OracleSchema{
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("accusamus"),
                                                DataType: sdk.String("necessitatibus"),
                                                Encoding: sdk.String("tempore"),
                                                Length: sdk.Int(575078),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(409726),
                                                Precision: sdk.Int(421819),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(373511),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("rerum"),
                                                DataType: sdk.String("laudantium"),
                                                Encoding: sdk.String("corporis"),
                                                Length: sdk.Int(889060),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(972912),
                                                Precision: sdk.Int(737279),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(872303),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("alias"),
                                                DataType: sdk.String("quia"),
                                                Encoding: sdk.String("quidem"),
                                                Length: sdk.Int(684126),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(919508),
                                                Precision: sdk.Int(34070),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(710456),
                                            },
                                        },
                                        Table: sdk.String("officiis"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("quibusdam"),
                                                DataType: sdk.String("odio"),
                                                Encoding: sdk.String("praesentium"),
                                                Length: sdk.Int(140316),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(127688),
                                                Precision: sdk.Int(358995),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(621473),
                                            },
                                        },
                                        Table: sdk.String("earum"),
                                    },
                                },
                                Schema: sdk.String("adipisci"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("ut"),
                                                DataType: sdk.String("quidem"),
                                                Encoding: sdk.String("quis"),
                                                Length: sdk.Int(106255),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(600213),
                                                Precision: sdk.Int(476946),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(963198),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("cupiditate"),
                                                DataType: sdk.String("fugit"),
                                                Encoding: sdk.String("numquam"),
                                                Length: sdk.Int(256916),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(201010),
                                                Precision: sdk.Int(873557),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(637856),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("dignissimos"),
                                                DataType: sdk.String("optio"),
                                                Encoding: sdk.String("necessitatibus"),
                                                Length: sdk.Int(359111),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(185518),
                                                Precision: sdk.Int(708898),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(532669),
                                            },
                                        },
                                        Table: sdk.String("cupiditate"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("placeat"),
                                                DataType: sdk.String("enim"),
                                                Encoding: sdk.String("neque"),
                                                Length: sdk.Int(446877),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(796397),
                                                Precision: sdk.Int(433077),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(266408),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("corporis"),
                                                DataType: sdk.String("magnam"),
                                                Encoding: sdk.String("voluptates"),
                                                Length: sdk.Int(978173),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(731744),
                                                Precision: sdk.Int(46013),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(727547),
                                            },
                                        },
                                        Table: sdk.String("ratione"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("totam"),
                                                DataType: sdk.String("occaecati"),
                                                Encoding: sdk.String("voluptas"),
                                                Length: sdk.Int(779180),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(242099),
                                                Precision: sdk.Int(795591),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(684553),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("nostrum"),
                                                DataType: sdk.String("est"),
                                                Encoding: sdk.String("impedit"),
                                                Length: sdk.Int(963741),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(735894),
                                                Precision: sdk.Int(878601),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(141506),
                                            },
                                        },
                                        Table: sdk.String("repellat"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("nemo"),
                                                DataType: sdk.String("reprehenderit"),
                                                Encoding: sdk.String("aperiam"),
                                                Length: sdk.Int(486410),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(325297),
                                                Precision: sdk.Int(448369),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(496915),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("excepturi"),
                                                DataType: sdk.String("dolores"),
                                                Encoding: sdk.String("error"),
                                                Length: sdk.Int(85076),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(498180),
                                                Precision: sdk.Int(452729),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(866789),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("itaque"),
                                                DataType: sdk.String("similique"),
                                                Encoding: sdk.String("optio"),
                                                Length: sdk.Int(401428),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(311486),
                                                Precision: sdk.Int(416692),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(888616),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("placeat"),
                                                DataType: sdk.String("quidem"),
                                                Encoding: sdk.String("exercitationem"),
                                                Length: sdk.Int(463344),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(211455),
                                                Precision: sdk.Int(264619),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(59383),
                                            },
                                        },
                                        Table: sdk.String("sint"),
                                    },
                                },
                                Schema: sdk.String("vero"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("cum"),
                                                DataType: sdk.String("dicta"),
                                                Encoding: sdk.String("earum"),
                                                Length: sdk.Int(334474),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(659268),
                                                Precision: sdk.Int(175372),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(724994),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("dicta"),
                                                DataType: sdk.String("consequuntur"),
                                                Encoding: sdk.String("necessitatibus"),
                                                Length: sdk.Int(748224),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(56877),
                                                Precision: sdk.Int(497357),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(980486),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("veritatis"),
                                                DataType: sdk.String("quasi"),
                                                Encoding: sdk.String("laboriosam"),
                                                Length: sdk.Int(863471),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(729448),
                                                Precision: sdk.Int(566506),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(578210),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("nemo"),
                                                DataType: sdk.String("aliquam"),
                                                Encoding: sdk.String("nostrum"),
                                                Length: sdk.Int(988749),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(757364),
                                                Precision: sdk.Int(574032),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(314573),
                                            },
                                        },
                                        Table: sdk.String("hic"),
                                    },
                                },
                                Schema: sdk.String("animi"),
                            },
                        },
                    },
                    MaxConcurrentBackfillTasks: sdk.Int(559774),
                    MaxConcurrentCdcTasks: sdk.Int(517326),
                    StreamLargeObjects: map[string]interface{}{
                        "odio": "eaque",
                        "saepe": "architecto",
                        "quos": "iste",
                    },
                },
                PostgresqlSourceConfig: &shared.PostgresqlSourceConfig{
                    ExcludeObjects: &shared.PostgresqlRdbms{
                        PostgresqlSchemas: []shared.PostgresqlSchema{
                            shared.PostgresqlSchema{
                                PostgresqlTables: []shared.PostgresqlTable{
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("velit"),
                                                DataType: sdk.String("doloremque"),
                                                Length: sdk.Int(963976),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(773110),
                                                Precision: sdk.Int(741238),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(216870),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("adipisci"),
                                                DataType: sdk.String("saepe"),
                                                Length: sdk.Int(644420),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(42924),
                                                Precision: sdk.Int(339756),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(333072),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("libero"),
                                                DataType: sdk.String("architecto"),
                                                Length: sdk.Int(584593),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(475589),
                                                Precision: sdk.Int(756654),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(820023),
                                            },
                                        },
                                        Table: sdk.String("non"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("itaque"),
                                                DataType: sdk.String("sed"),
                                                Length: sdk.Int(993002),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(330267),
                                                Precision: sdk.Int(164532),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(813880),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("laudantium"),
                                                DataType: sdk.String("odit"),
                                                Length: sdk.Int(863477),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(227362),
                                                Precision: sdk.Int(347698),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(68852),
                                            },
                                        },
                                        Table: sdk.String("velit"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("tempore"),
                                                DataType: sdk.String("nisi"),
                                                Length: sdk.Int(977518),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(310840),
                                                Precision: sdk.Int(503748),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(718627),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("nisi"),
                                                DataType: sdk.String("quis"),
                                                Length: sdk.Int(391933),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(727771),
                                                Precision: sdk.Int(794507),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(815200),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("facilis"),
                                                DataType: sdk.String("ipsum"),
                                                Length: sdk.Int(318917),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(973819),
                                                Precision: sdk.Int(974589),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(162358),
                                            },
                                        },
                                        Table: sdk.String("debitis"),
                                    },
                                },
                                Schema: sdk.String("labore"),
                            },
                            shared.PostgresqlSchema{
                                PostgresqlTables: []shared.PostgresqlTable{
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("reprehenderit"),
                                                DataType: sdk.String("nostrum"),
                                                Length: sdk.Int(207296),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(480061),
                                                Precision: sdk.Int(664965),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(522176),
                                            },
                                        },
                                        Table: sdk.String("eligendi"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("unde"),
                                                DataType: sdk.String("officiis"),
                                                Length: sdk.Int(495617),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(220104),
                                                Precision: sdk.Int(118041),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(622894),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("porro"),
                                                DataType: sdk.String("vitae"),
                                                Length: sdk.Int(491591),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(458970),
                                                Precision: sdk.Int(854115),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(322333),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("aspernatur"),
                                                DataType: sdk.String("enim"),
                                                Length: sdk.Int(965090),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(482584),
                                                Precision: sdk.Int(491201),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(729828),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("illo"),
                                                DataType: sdk.String("ab"),
                                                Length: sdk.Int(280114),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(879174),
                                                Precision: sdk.Int(902581),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(734814),
                                            },
                                        },
                                        Table: sdk.String("veniam"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("reiciendis"),
                                                DataType: sdk.String("earum"),
                                                Length: sdk.Int(444121),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(506312),
                                                Precision: sdk.Int(367046),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(999809),
                                            },
                                        },
                                        Table: sdk.String("quisquam"),
                                    },
                                },
                                Schema: sdk.String("sequi"),
                            },
                            shared.PostgresqlSchema{
                                PostgresqlTables: []shared.PostgresqlTable{
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("illo"),
                                                DataType: sdk.String("labore"),
                                                Length: sdk.Int(828841),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(304173),
                                                Precision: sdk.Int(790463),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(591065),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("laudantium"),
                                                DataType: sdk.String("repudiandae"),
                                                Length: sdk.Int(9683),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(805264),
                                                Precision: sdk.Int(136357),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(723942),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("expedita"),
                                                DataType: sdk.String("quas"),
                                                Length: sdk.Int(590858),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(922299),
                                                Precision: sdk.Int(700045),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(492361),
                                            },
                                        },
                                        Table: sdk.String("corporis"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("similique"),
                                                DataType: sdk.String("repellendus"),
                                                Length: sdk.Int(434827),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(213835),
                                                Precision: sdk.Int(413801),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(771226),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("commodi"),
                                                DataType: sdk.String("aut"),
                                                Length: sdk.Int(32055),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(322829),
                                                Precision: sdk.Int(60995),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(229567),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("illum"),
                                                DataType: sdk.String("praesentium"),
                                                Length: sdk.Int(695526),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(736853),
                                                Precision: sdk.Int(230411),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(97676),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("dicta"),
                                                DataType: sdk.String("laudantium"),
                                                Length: sdk.Int(40710),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(938412),
                                                Precision: sdk.Int(479707),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(228646),
                                            },
                                        },
                                        Table: sdk.String("provident"),
                                    },
                                },
                                Schema: sdk.String("dolorum"),
                            },
                            shared.PostgresqlSchema{
                                PostgresqlTables: []shared.PostgresqlTable{
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("repudiandae"),
                                                DataType: sdk.String("consequatur"),
                                                Length: sdk.Int(366244),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(475826),
                                                Precision: sdk.Int(930840),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(708771),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("corrupti"),
                                                DataType: sdk.String("aperiam"),
                                                Length: sdk.Int(574092),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(879522),
                                                Precision: sdk.Int(178635),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(520081),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("dicta"),
                                                DataType: sdk.String("voluptatem"),
                                                Length: sdk.Int(244376),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(224413),
                                                Precision: sdk.Int(124289),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(953676),
                                            },
                                        },
                                        Table: sdk.String("dolor"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("atque"),
                                                DataType: sdk.String("beatae"),
                                                Length: sdk.Int(868255),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(287544),
                                                Precision: sdk.Int(794988),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(456704),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("voluptatem"),
                                                DataType: sdk.String("perferendis"),
                                                Length: sdk.Int(698558),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(411615),
                                                Precision: sdk.Int(46791),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(489459),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("repellat"),
                                                DataType: sdk.String("velit"),
                                                Length: sdk.Int(784115),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(588639),
                                                Precision: sdk.Int(231382),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(753240),
                                            },
                                        },
                                        Table: sdk.String("dignissimos"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("soluta"),
                                                DataType: sdk.String("natus"),
                                                Length: sdk.Int(839807),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(639622),
                                                Precision: sdk.Int(228857),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(948541),
                                            },
                                        },
                                        Table: sdk.String("aspernatur"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("itaque"),
                                                DataType: sdk.String("illum"),
                                                Length: sdk.Int(670762),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(490420),
                                                Precision: sdk.Int(876285),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(185348),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("consectetur"),
                                                DataType: sdk.String("repellat"),
                                                Length: sdk.Int(128696),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(129355),
                                                Precision: sdk.Int(350325),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(471457),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("non"),
                                                DataType: sdk.String("ab"),
                                                Length: sdk.Int(72754),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(943851),
                                                Precision: sdk.Int(644479),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(964925),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("non"),
                                                DataType: sdk.String("distinctio"),
                                                Length: sdk.Int(450224),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(349993),
                                                Precision: sdk.Int(288300),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(254382),
                                            },
                                        },
                                        Table: sdk.String("repudiandae"),
                                    },
                                },
                                Schema: sdk.String("modi"),
                            },
                        },
                    },
                    IncludeObjects: &shared.PostgresqlRdbms{
                        PostgresqlSchemas: []shared.PostgresqlSchema{
                            shared.PostgresqlSchema{
                                PostgresqlTables: []shared.PostgresqlTable{
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("rem"),
                                                DataType: sdk.String("aperiam"),
                                                Length: sdk.Int(141817),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(535802),
                                                Precision: sdk.Int(316730),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(452730),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("similique"),
                                                DataType: sdk.String("minima"),
                                                Length: sdk.Int(727544),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(300189),
                                                Precision: sdk.Int(24272),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(266788),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("eum"),
                                                DataType: sdk.String("nesciunt"),
                                                Length: sdk.Int(652125),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(492632),
                                                Precision: sdk.Int(853246),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(345138),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("molestiae"),
                                                DataType: sdk.String("veniam"),
                                                Length: sdk.Int(969206),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(66207),
                                                Precision: sdk.Int(265632),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(13865),
                                            },
                                        },
                                        Table: sdk.String("aut"),
                                    },
                                },
                                Schema: sdk.String("eveniet"),
                            },
                            shared.PostgresqlSchema{
                                PostgresqlTables: []shared.PostgresqlTable{
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("numquam"),
                                                DataType: sdk.String("dolorum"),
                                                Length: sdk.Int(823718),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(452399),
                                                Precision: sdk.Int(232772),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(200637),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("quaerat"),
                                                DataType: sdk.String("itaque"),
                                                Length: sdk.Int(791228),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(122662),
                                                Precision: sdk.Int(715143),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(481375),
                                            },
                                        },
                                        Table: sdk.String("quas"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("facilis"),
                                                DataType: sdk.String("amet"),
                                                Length: sdk.Int(418637),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(685415),
                                                Precision: sdk.Int(5310),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(526413),
                                            },
                                        },
                                        Table: sdk.String("aut"),
                                    },
                                },
                                Schema: sdk.String("quos"),
                            },
                        },
                    },
                    MaxConcurrentBackfillTasks: sdk.Int(511222),
                    Publication: sdk.String("repellendus"),
                    ReplicationSlot: sdk.String("veritatis"),
                },
                SourceConnectionProfile: sdk.String("quae"),
            },
            State: shared.StreamStateEnumStateUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("nulla"),
        Force: sdk.Bool(false),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("sed"),
        Parent: "voluptatem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        RequestID: sdk.String("eveniet"),
        StreamID: sdk.String("hic"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("incidunt"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DatastreamProjectsLocationsStreamsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsStreamsDelete

Use this method to delete a stream.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsStreamsDelete(ctx, operations.DatastreamProjectsLocationsStreamsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("beatae"),
        Name: "Pauline Rowe",
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        RequestID: sdk.String("totam"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.DatastreamProjectsLocationsStreamsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsStreamsList

Use this method to list streams in a project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsStreamsList(ctx, operations.DatastreamProjectsLocationsStreamsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("velit"),
        Filter: sdk.String("reiciendis"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("nulla"),
        OrderBy: sdk.String("laborum"),
        PageSize: sdk.Int64(617657),
        PageToken: sdk.String("accusamus"),
        Parent: "doloremque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.DatastreamProjectsLocationsStreamsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStreamsResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsStreamsObjectsGet

Use this method to get details about a stream object.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsStreamsObjectsGet(ctx, operations.DatastreamProjectsLocationsStreamsObjectsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("quisquam"),
        Name: "Dr. Shari Roob Sr.",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DatastreamProjectsLocationsStreamsObjectsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StreamObject != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsStreamsObjectsList

Use this method to list the objects of a specific stream.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsStreamsObjectsList(ctx, operations.DatastreamProjectsLocationsStreamsObjectsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("ullam"),
        PageSize: sdk.Int64(295950),
        PageToken: sdk.String("modi"),
        Parent: "itaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.DatastreamProjectsLocationsStreamsObjectsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStreamObjectsResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsStreamsObjectsLookup

Use this method to look up a stream object by its source object identifier.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsStreamsObjectsLookup(ctx, operations.DatastreamProjectsLocationsStreamsObjectsLookupRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LookupStreamObjectRequest: &shared.LookupStreamObjectRequest{
            SourceObjectIdentifier: &shared.SourceObjectIdentifier{
                MysqlIdentifier: &shared.MysqlObjectIdentifier{
                    Database: sdk.String("vero"),
                    Table: sdk.String("doloribus"),
                },
                OracleIdentifier: &shared.OracleObjectIdentifier{
                    Schema: sdk.String("impedit"),
                    Table: sdk.String("porro"),
                },
                PostgresqlIdentifier: &shared.PostgresqlObjectIdentifier{
                    Schema: sdk.String("accusamus"),
                    Table: sdk.String("totam"),
                },
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("iure"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("vel"),
    }, operations.DatastreamProjectsLocationsStreamsObjectsLookupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StreamObject != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsStreamsObjectsStartBackfillJob

Use this method to start a backfill job for the specified stream object.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsStreamsObjectsStartBackfillJob(ctx, operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptas": "consequuntur",
            "officia": "reprehenderit",
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("rem"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("accusantium"),
        Object: "veniam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("facere"),
    }, operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartBackfillJobResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsStreamsObjectsStopBackfillJob

Use this method to stop a backfill job for the specified stream object.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsStreamsObjectsStopBackfillJob(ctx, operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "doloribus": "fugiat",
            "est": "delectus",
            "velit": "vitae",
        },
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("doloribus"),
        Object: "possimus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopBackfillJobResponse != nil {
        // handle response
    }
}
```

## DatastreamProjectsLocationsStreamsPatch

Use this method to update the configuration of a stream.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsStreamsPatch(ctx, operations.DatastreamProjectsLocationsStreamsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        StreamInput: &shared.StreamInput{
            BackfillAll: &shared.BackfillAllStrategy{
                MysqlExcludedObjects: &shared.MysqlRdbms{
                    MysqlDatabases: []shared.MysqlDatabase{
                        shared.MysqlDatabase{
                            Database: sdk.String("optio"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("nesciunt"),
                                            Column: sdk.String("commodi"),
                                            DataType: sdk.String("sapiente"),
                                            Length: sdk.Int(164319),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(330440),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("debitis"),
                                            Column: sdk.String("officia"),
                                            DataType: sdk.String("sint"),
                                            Length: sdk.Int(280859),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(256768),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("tenetur"),
                                            Column: sdk.String("adipisci"),
                                            DataType: sdk.String("libero"),
                                            Length: sdk.Int(448386),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(329651),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("ex"),
                                },
                            },
                        },
                        shared.MysqlDatabase{
                            Database: sdk.String("minus"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("hic"),
                                            Column: sdk.String("nisi"),
                                            DataType: sdk.String("quisquam"),
                                            Length: sdk.Int(221218),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(496548),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("fuga"),
                                },
                            },
                        },
                        shared.MysqlDatabase{
                            Database: sdk.String("minima"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("aliquid"),
                                            Column: sdk.String("magni"),
                                            DataType: sdk.String("incidunt"),
                                            Length: sdk.Int(240490),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(506343),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    Table: sdk.String("dolor"),
                                },
                            },
                        },
                    },
                },
                OracleExcludedObjects: &shared.OracleRdbms{
                    OracleSchemas: []shared.OracleSchema{
                        shared.OracleSchema{
                            OracleTables: []shared.OracleTable{
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            Column: sdk.String("impedit"),
                                            DataType: sdk.String("sit"),
                                            Encoding: sdk.String("nemo"),
                                            Length: sdk.Int(633987),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(159393),
                                            Precision: sdk.Int(230571),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(644734),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("modi"),
                                            DataType: sdk.String("veniam"),
                                            Encoding: sdk.String("quod"),
                                            Length: sdk.Int(932250),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(955569),
                                            Precision: sdk.Int(788661),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(316550),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("doloribus"),
                                            DataType: sdk.String("assumenda"),
                                            Encoding: sdk.String("officiis"),
                                            Length: sdk.Int(103990),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(5315),
                                            Precision: sdk.Int(633982),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(60335),
                                        },
                                    },
                                    Table: sdk.String("nobis"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            Column: sdk.String("quia"),
                                            DataType: sdk.String("dicta"),
                                            Encoding: sdk.String("vel"),
                                            Length: sdk.Int(595584),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(892708),
                                            Precision: sdk.Int(354821),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(103578),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("accusantium"),
                                            DataType: sdk.String("perferendis"),
                                            Encoding: sdk.String("veritatis"),
                                            Length: sdk.Int(590585),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(765833),
                                            Precision: sdk.Int(435531),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(842402),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("quod"),
                                            DataType: sdk.String("nemo"),
                                            Encoding: sdk.String("recusandae"),
                                            Length: sdk.Int(246772),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(299153),
                                            Precision: sdk.Int(493591),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(388404),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("sed"),
                                            DataType: sdk.String("odio"),
                                            Encoding: sdk.String("natus"),
                                            Length: sdk.Int(588152),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(739508),
                                            Precision: sdk.Int(983854),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(703966),
                                        },
                                    },
                                    Table: sdk.String("quidem"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            Column: sdk.String("laboriosam"),
                                            DataType: sdk.String("unde"),
                                            Encoding: sdk.String("modi"),
                                            Length: sdk.Int(595198),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(944626),
                                            Precision: sdk.Int(736985),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(135548),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("libero"),
                                            DataType: sdk.String("nam"),
                                            Encoding: sdk.String("incidunt"),
                                            Length: sdk.Int(925395),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(797254),
                                            Precision: sdk.Int(664666),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(904440),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("autem"),
                                            DataType: sdk.String("quo"),
                                            Encoding: sdk.String("nesciunt"),
                                            Length: sdk.Int(849383),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(367475),
                                            Precision: sdk.Int(848722),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(706872),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("non"),
                                            DataType: sdk.String("mollitia"),
                                            Encoding: sdk.String("assumenda"),
                                            Length: sdk.Int(927977),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(718981),
                                            Precision: sdk.Int(866861),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(323365),
                                        },
                                    },
                                    Table: sdk.String("facere"),
                                },
                            },
                            Schema: sdk.String("laborum"),
                        },
                        shared.OracleSchema{
                            OracleTables: []shared.OracleTable{
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            Column: sdk.String("incidunt"),
                                            DataType: sdk.String("maxime"),
                                            Encoding: sdk.String("ipsam"),
                                            Length: sdk.Int(60),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(379894),
                                            Precision: sdk.Int(647210),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(560451),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("laborum"),
                                            DataType: sdk.String("est"),
                                            Encoding: sdk.String("occaecati"),
                                            Length: sdk.Int(286716),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(777378),
                                            Precision: sdk.Int(19462),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(143528),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("aliquid"),
                                            DataType: sdk.String("magnam"),
                                            Encoding: sdk.String("quaerat"),
                                            Length: sdk.Int(755868),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(942185),
                                            Precision: sdk.Int(342921),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(888265),
                                        },
                                    },
                                    Table: sdk.String("unde"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            Column: sdk.String("error"),
                                            DataType: sdk.String("mollitia"),
                                            Encoding: sdk.String("magnam"),
                                            Length: sdk.Int(344289),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(460909),
                                            Precision: sdk.Int(548849),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(684799),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("facere"),
                                            DataType: sdk.String("impedit"),
                                            Encoding: sdk.String("quasi"),
                                            Length: sdk.Int(647218),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(801075),
                                            Precision: sdk.Int(385739),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(41179),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("voluptatem"),
                                            DataType: sdk.String("facere"),
                                            Encoding: sdk.String("necessitatibus"),
                                            Length: sdk.Int(807564),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(9375),
                                            Precision: sdk.Int(51007),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(102390),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("similique"),
                                            DataType: sdk.String("porro"),
                                            Encoding: sdk.String("blanditiis"),
                                            Length: sdk.Int(60892),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(169819),
                                            Precision: sdk.Int(885797),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(148379),
                                        },
                                    },
                                    Table: sdk.String("necessitatibus"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            Column: sdk.String("ipsa"),
                                            DataType: sdk.String("excepturi"),
                                            Encoding: sdk.String("a"),
                                            Length: sdk.Int(983000),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(514462),
                                            Precision: sdk.Int(982248),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(691),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("asperiores"),
                                            DataType: sdk.String("rem"),
                                            Encoding: sdk.String("dicta"),
                                            Length: sdk.Int(380595),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(938257),
                                            Precision: sdk.Int(985360),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(244569),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("eius"),
                                            DataType: sdk.String("esse"),
                                            Encoding: sdk.String("in"),
                                            Length: sdk.Int(757407),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(94697),
                                            Precision: sdk.Int(203621),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(876649),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("excepturi"),
                                            DataType: sdk.String("accusantium"),
                                            Encoding: sdk.String("qui"),
                                            Length: sdk.Int(771241),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(104736),
                                            Precision: sdk.Int(278329),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(116558),
                                        },
                                    },
                                    Table: sdk.String("odit"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            Column: sdk.String("rerum"),
                                            DataType: sdk.String("alias"),
                                            Encoding: sdk.String("error"),
                                            Length: sdk.Int(424854),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(35581),
                                            Precision: sdk.Int(664197),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(388169),
                                        },
                                        shared.OracleColumn{
                                            Column: sdk.String("ex"),
                                            DataType: sdk.String("quas"),
                                            Encoding: sdk.String("veritatis"),
                                            Length: sdk.Int(356440),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(62688),
                                            Precision: sdk.Int(631719),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(278116),
                                        },
                                    },
                                    Table: sdk.String("quam"),
                                },
                            },
                            Schema: sdk.String("magni"),
                        },
                    },
                },
                PostgresqlExcludedObjects: &shared.PostgresqlRdbms{
                    PostgresqlSchemas: []shared.PostgresqlSchema{
                        shared.PostgresqlSchema{
                            PostgresqlTables: []shared.PostgresqlTable{
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("sed"),
                                            DataType: sdk.String("nesciunt"),
                                            Length: sdk.Int(805463),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(337841),
                                            Precision: sdk.Int(586108),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(303253),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("excepturi"),
                                            DataType: sdk.String("maiores"),
                                            Length: sdk.Int(512081),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(243904),
                                            Precision: sdk.Int(971764),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(230305),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("nemo"),
                                            DataType: sdk.String("ipsa"),
                                            Length: sdk.Int(787916),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(948444),
                                            Precision: sdk.Int(555294),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(476003),
                                        },
                                    },
                                    Table: sdk.String("aliquid"),
                                },
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("a"),
                                            DataType: sdk.String("nobis"),
                                            Length: sdk.Int(598316),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(34245),
                                            Precision: sdk.Int(118917),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(795546),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("commodi"),
                                            DataType: sdk.String("eveniet"),
                                            Length: sdk.Int(781582),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(735740),
                                            Precision: sdk.Int(693747),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(265930),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("voluptates"),
                                            DataType: sdk.String("fugit"),
                                            Length: sdk.Int(259377),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(194058),
                                            Precision: sdk.Int(758194),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(992887),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("esse"),
                                            DataType: sdk.String("blanditiis"),
                                            Length: sdk.Int(573610),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(996541),
                                            Precision: sdk.Int(955047),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(658604),
                                        },
                                    },
                                    Table: sdk.String("maiores"),
                                },
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("nulla"),
                                            DataType: sdk.String("deserunt"),
                                            Length: sdk.Int(359097),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(246577),
                                            Precision: sdk.Int(887701),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(315022),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("officia"),
                                            DataType: sdk.String("saepe"),
                                            Length: sdk.Int(429997),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(922094),
                                            Precision: sdk.Int(35742),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(637840),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("impedit"),
                                            DataType: sdk.String("quasi"),
                                            Length: sdk.Int(502106),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(260911),
                                            Precision: sdk.Int(786189),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(177929),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("nobis"),
                                            DataType: sdk.String("natus"),
                                            Length: sdk.Int(793568),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(154389),
                                            Precision: sdk.Int(300651),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(440847),
                                        },
                                    },
                                    Table: sdk.String("quod"),
                                },
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("corrupti"),
                                            DataType: sdk.String("amet"),
                                            Length: sdk.Int(473326),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(227156),
                                            Precision: sdk.Int(675126),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(266946),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("perferendis"),
                                            DataType: sdk.String("necessitatibus"),
                                            Length: sdk.Int(102316),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(564627),
                                            Precision: sdk.Int(292177),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(125811),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("maiores"),
                                            DataType: sdk.String("neque"),
                                            Length: sdk.Int(139745),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(936845),
                                            Precision: sdk.Int(330596),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(373106),
                                        },
                                    },
                                    Table: sdk.String("eaque"),
                                },
                            },
                            Schema: sdk.String("exercitationem"),
                        },
                        shared.PostgresqlSchema{
                            PostgresqlTables: []shared.PostgresqlTable{
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("ad"),
                                            DataType: sdk.String("nisi"),
                                            Length: sdk.Int(946808),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(338281),
                                            Precision: sdk.Int(845154),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(366480),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("suscipit"),
                                            DataType: sdk.String("pariatur"),
                                            Length: sdk.Int(24769),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(694728),
                                            Precision: sdk.Int(831031),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(17768),
                                        },
                                    },
                                    Table: sdk.String("id"),
                                },
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("sed"),
                                            DataType: sdk.String("possimus"),
                                            Length: sdk.Int(996072),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(921060),
                                            Precision: sdk.Int(100233),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(240696),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("pariatur"),
                                            DataType: sdk.String("harum"),
                                            Length: sdk.Int(294266),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(976762),
                                            Precision: sdk.Int(435353),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(127087),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("minus"),
                                            DataType: sdk.String("soluta"),
                                            Length: sdk.Int(677509),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(242531),
                                            Precision: sdk.Int(937865),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(510020),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("error"),
                                            DataType: sdk.String("non"),
                                            Length: sdk.Int(97810),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(649032),
                                            Precision: sdk.Int(884361),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(687589),
                                        },
                                    },
                                    Table: sdk.String("cumque"),
                                },
                            },
                            Schema: sdk.String("doloremque"),
                        },
                        shared.PostgresqlSchema{
                            PostgresqlTables: []shared.PostgresqlTable{
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("eaque"),
                                            DataType: sdk.String("deserunt"),
                                            Length: sdk.Int(396223),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(570423),
                                            Precision: sdk.Int(167435),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(273677),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("possimus"),
                                            DataType: sdk.String("dolor"),
                                            Length: sdk.Int(700529),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(153582),
                                            Precision: sdk.Int(883078),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(759874),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("delectus"),
                                            DataType: sdk.String("minus"),
                                            Length: sdk.Int(774748),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(550338),
                                            Precision: sdk.Int(994234),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(532326),
                                        },
                                    },
                                    Table: sdk.String("iste"),
                                },
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("accusantium"),
                                            DataType: sdk.String("illo"),
                                            Length: sdk.Int(14251),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(984031),
                                            Precision: sdk.Int(342104),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(869848),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("possimus"),
                                            DataType: sdk.String("neque"),
                                            Length: sdk.Int(866135),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(424853),
                                            Precision: sdk.Int(960813),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(652515),
                                        },
                                    },
                                    Table: sdk.String("quae"),
                                },
                                shared.PostgresqlTable{
                                    PostgresqlColumns: []shared.PostgresqlColumn{
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("aperiam"),
                                            DataType: sdk.String("non"),
                                            Length: sdk.Int(913284),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(324052),
                                            Precision: sdk.Int(305047),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(788165),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("quas"),
                                            DataType: sdk.String("consequuntur"),
                                            Length: sdk.Int(982445),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(81581),
                                            Precision: sdk.Int(400448),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(513185),
                                        },
                                        shared.PostgresqlColumn{
                                            Column: sdk.String("est"),
                                            DataType: sdk.String("dolor"),
                                            Length: sdk.Int(400879),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(232316),
                                            Precision: sdk.Int(768195),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(525917),
                                        },
                                    },
                                    Table: sdk.String("voluptatum"),
                                },
                            },
                            Schema: sdk.String("ducimus"),
                        },
                    },
                },
            },
            BackfillNone: map[string]interface{}{
                "recusandae": "tempora",
            },
            CustomerManagedEncryptionKey: sdk.String("blanditiis"),
            DestinationConfig: &shared.DestinationConfig{
                BigqueryDestinationConfig: &shared.BigQueryDestinationConfig{
                    DataFreshness: sdk.String("numquam"),
                    SingleTargetDataset: &shared.SingleTargetDataset{
                        DatasetID: sdk.String("sequi"),
                    },
                    SourceHierarchyDatasets: &shared.SourceHierarchyDatasets{
                        DatasetTemplate: &shared.DatasetTemplate{
                            DatasetIDPrefix: sdk.String("voluptatum"),
                            KmsKeyName: sdk.String("sit"),
                            Location: sdk.String("rerum"),
                        },
                    },
                },
                DestinationConnectionProfile: sdk.String("veritatis"),
                GcsDestinationConfig: &shared.GcsDestinationConfig{
                    AvroFileFormat: map[string]interface{}{
                        "autem": "quidem",
                        "totam": "porro",
                        "deserunt": "magni",
                        "nihil": "voluptas",
                    },
                    FileRotationInterval: sdk.String("animi"),
                    FileRotationMb: sdk.Int(413780),
                    JSONFileFormat: &shared.JSONFileFormat{
                        Compression: shared.JSONFileFormatCompressionEnumJSONCompressionUnspecified.ToPointer(),
                        SchemaFileFormat: shared.JSONFileFormatSchemaFileFormatEnumAvroSchemaFile.ToPointer(),
                    },
                    Path: sdk.String("aut"),
                },
            },
            DisplayName: sdk.String("dolore"),
            Labels: map[string]string{
                "aliquam": "iste",
                "ullam": "eligendi",
                "placeat": "voluptas",
                "occaecati": "unde",
            },
            SourceConfig: &shared.SourceConfig{
                MysqlSourceConfig: &shared.MysqlSourceConfig{
                    ExcludeObjects: &shared.MysqlRdbms{
                        MysqlDatabases: []shared.MysqlDatabase{
                            shared.MysqlDatabase{
                                Database: sdk.String("nihil"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("ipsam"),
                                                Column: sdk.String("quasi"),
                                                DataType: sdk.String("cumque"),
                                                Length: sdk.Int(117491),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(688684),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("facere"),
                                                Column: sdk.String("facilis"),
                                                DataType: sdk.String("beatae"),
                                                Length: sdk.Int(767210),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(964511),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("labore"),
                                                Column: sdk.String("expedita"),
                                                DataType: sdk.String("corrupti"),
                                                Length: sdk.Int(523995),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(543353),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("officiis"),
                                    },
                                },
                            },
                        },
                    },
                    IncludeObjects: &shared.MysqlRdbms{
                        MysqlDatabases: []shared.MysqlDatabase{
                            shared.MysqlDatabase{
                                Database: sdk.String("pariatur"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("incidunt"),
                                                Column: sdk.String("quod"),
                                                DataType: sdk.String("minus"),
                                                Length: sdk.Int(781491),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(659971),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("excepturi"),
                                                Column: sdk.String("occaecati"),
                                                DataType: sdk.String("libero"),
                                                Length: sdk.Int(774880),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(457150),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("hic"),
                                                Column: sdk.String("maxime"),
                                                DataType: sdk.String("accusantium"),
                                                Length: sdk.Int(743531),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(147400),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("pariatur"),
                                                Column: sdk.String("eligendi"),
                                                DataType: sdk.String("recusandae"),
                                                Length: sdk.Int(83791),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(13637),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("laudantium"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("dolor"),
                                                Column: sdk.String("voluptates"),
                                                DataType: sdk.String("tempora"),
                                                Length: sdk.Int(169935),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(701841),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("doloremque"),
                                                Column: sdk.String("voluptatem"),
                                                DataType: sdk.String("eum"),
                                                Length: sdk.Int(873320),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(431253),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("reprehenderit"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("blanditiis"),
                                                Column: sdk.String("nihil"),
                                                DataType: sdk.String("atque"),
                                                Length: sdk.Int(697994),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(645544),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("atque"),
                                                Column: sdk.String("nostrum"),
                                                DataType: sdk.String("atque"),
                                                Length: sdk.Int(101107),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(667213),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("enim"),
                                                Column: sdk.String("rem"),
                                                DataType: sdk.String("magni"),
                                                Length: sdk.Int(62130),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(556133),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("placeat"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("labore"),
                                                Column: sdk.String("sapiente"),
                                                DataType: sdk.String("saepe"),
                                                Length: sdk.Int(965735),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(642234),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("natus"),
                                                Column: sdk.String("cumque"),
                                                DataType: sdk.String("natus"),
                                                Length: sdk.Int(312511),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(985379),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("quia"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                Database: sdk.String("officiis"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quis"),
                                                Column: sdk.String("enim"),
                                                DataType: sdk.String("eum"),
                                                Length: sdk.Int(365539),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(849337),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("nesciunt"),
                                                Column: sdk.String("sit"),
                                                DataType: sdk.String("odio"),
                                                Length: sdk.Int(794306),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(990369),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("recusandae"),
                                                Column: sdk.String("voluptates"),
                                                DataType: sdk.String("praesentium"),
                                                Length: sdk.Int(118349),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(144179),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("sit"),
                                                Column: sdk.String("aliquid"),
                                                DataType: sdk.String("necessitatibus"),
                                                Length: sdk.Int(148975),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(537170),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("sunt"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("delectus"),
                                                Column: sdk.String("laborum"),
                                                DataType: sdk.String("aliquam"),
                                                Length: sdk.Int(644223),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(266680),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("sunt"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("eius"),
                                                Column: sdk.String("voluptatum"),
                                                DataType: sdk.String("ipsa"),
                                                Length: sdk.Int(872991),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(209860),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("repellat"),
                                                Column: sdk.String("aspernatur"),
                                                DataType: sdk.String("inventore"),
                                                Length: sdk.Int(193236),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(143078),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("fuga"),
                                                Column: sdk.String("hic"),
                                                DataType: sdk.String("eaque"),
                                                Length: sdk.Int(211301),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(101854),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("aperiam"),
                                                Column: sdk.String("aspernatur"),
                                                DataType: sdk.String("nulla"),
                                                Length: sdk.Int(316541),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(73574),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("magnam"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                Database: sdk.String("delectus"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("nobis"),
                                                Column: sdk.String("ex"),
                                                DataType: sdk.String("repellat"),
                                                Length: sdk.Int(65118),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(533978),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("expedita"),
                                                Column: sdk.String("hic"),
                                                DataType: sdk.String("excepturi"),
                                                Length: sdk.Int(396610),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(151385),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("beatae"),
                                                Column: sdk.String("similique"),
                                                DataType: sdk.String("ea"),
                                                Length: sdk.Int(657301),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(296128),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("tenetur"),
                                                Column: sdk.String("dignissimos"),
                                                DataType: sdk.String("esse"),
                                                Length: sdk.Int(657044),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(512488),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("esse"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("earum"),
                                                Column: sdk.String("velit"),
                                                DataType: sdk.String("officiis"),
                                                Length: sdk.Int(263346),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(701978),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("itaque"),
                                                Column: sdk.String("dignissimos"),
                                                DataType: sdk.String("ipsam"),
                                                Length: sdk.Int(131687),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(771632),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("aliquid"),
                                                Column: sdk.String("quis"),
                                                DataType: sdk.String("facilis"),
                                                Length: sdk.Int(218128),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(284885),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quaerat"),
                                                Column: sdk.String("architecto"),
                                                DataType: sdk.String("praesentium"),
                                                Length: sdk.Int(907899),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(221781),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        Table: sdk.String("expedita"),
                                    },
                                },
                            },
                        },
                    },
                    MaxConcurrentBackfillTasks: sdk.Int(730003),
                    MaxConcurrentCdcTasks: sdk.Int(615277),
                },
                OracleSourceConfig: &shared.OracleSourceConfig{
                    DropLargeObjects: map[string]interface{}{
                        "minus": "quos",
                    },
                    ExcludeObjects: &shared.OracleRdbms{
                        OracleSchemas: []shared.OracleSchema{
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("enim"),
                                                DataType: sdk.String("accusamus"),
                                                Encoding: sdk.String("aperiam"),
                                                Length: sdk.Int(916419),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(512310),
                                                Precision: sdk.Int(271551),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(63825),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("omnis"),
                                                DataType: sdk.String("illum"),
                                                Encoding: sdk.String("rem"),
                                                Length: sdk.Int(949370),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(537946),
                                                Precision: sdk.Int(264958),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(937664),
                                            },
                                        },
                                        Table: sdk.String("architecto"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("labore"),
                                                DataType: sdk.String("maiores"),
                                                Encoding: sdk.String("sequi"),
                                                Length: sdk.Int(902132),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(8904),
                                                Precision: sdk.Int(458723),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(891302),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("facere"),
                                                DataType: sdk.String("quisquam"),
                                                Encoding: sdk.String("cumque"),
                                                Length: sdk.Int(302878),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(677895),
                                                Precision: sdk.Int(644827),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(319834),
                                            },
                                        },
                                        Table: sdk.String("reiciendis"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("porro"),
                                                DataType: sdk.String("laborum"),
                                                Encoding: sdk.String("nobis"),
                                                Length: sdk.Int(842974),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(607624),
                                                Precision: sdk.Int(16252),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(369941),
                                            },
                                        },
                                        Table: sdk.String("officia"),
                                    },
                                },
                                Schema: sdk.String("cupiditate"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("necessitatibus"),
                                                DataType: sdk.String("accusantium"),
                                                Encoding: sdk.String("ad"),
                                                Length: sdk.Int(392752),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(474185),
                                                Precision: sdk.Int(154130),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(514767),
                                            },
                                        },
                                        Table: sdk.String("sed"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("iusto"),
                                                DataType: sdk.String("expedita"),
                                                Encoding: sdk.String("eos"),
                                                Length: sdk.Int(830477),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(199879),
                                                Precision: sdk.Int(57909),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(575139),
                                            },
                                        },
                                        Table: sdk.String("dolore"),
                                    },
                                },
                                Schema: sdk.String("esse"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("sapiente"),
                                                DataType: sdk.String("quam"),
                                                Encoding: sdk.String("est"),
                                                Length: sdk.Int(307306),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(964201),
                                                Precision: sdk.Int(635868),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(531494),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("iusto"),
                                                DataType: sdk.String("quod"),
                                                Encoding: sdk.String("voluptatibus"),
                                                Length: sdk.Int(374414),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(247767),
                                                Precision: sdk.Int(353819),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(675058),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("voluptas"),
                                                DataType: sdk.String("doloribus"),
                                                Encoding: sdk.String("animi"),
                                                Length: sdk.Int(925994),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(359453),
                                                Precision: sdk.Int(252567),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(900368),
                                            },
                                        },
                                        Table: sdk.String("distinctio"),
                                    },
                                },
                                Schema: sdk.String("maiores"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("optio"),
                                                DataType: sdk.String("sequi"),
                                                Encoding: sdk.String("sunt"),
                                                Length: sdk.Int(112250),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(973096),
                                                Precision: sdk.Int(42364),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(149498),
                                            },
                                        },
                                        Table: sdk.String("amet"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("in"),
                                                DataType: sdk.String("nostrum"),
                                                Encoding: sdk.String("temporibus"),
                                                Length: sdk.Int(186937),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(221824),
                                                Precision: sdk.Int(390854),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(493945),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("reiciendis"),
                                                DataType: sdk.String("itaque"),
                                                Encoding: sdk.String("vitae"),
                                                Length: sdk.Int(667215),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(33093),
                                                Precision: sdk.Int(798079),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(796117),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("quos"),
                                                DataType: sdk.String("possimus"),
                                                Encoding: sdk.String("maiores"),
                                                Length: sdk.Int(485795),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(588662),
                                                Precision: sdk.Int(960933),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(45510),
                                            },
                                        },
                                        Table: sdk.String("similique"),
                                    },
                                },
                                Schema: sdk.String("nesciunt"),
                            },
                        },
                    },
                    IncludeObjects: &shared.OracleRdbms{
                        OracleSchemas: []shared.OracleSchema{
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("unde"),
                                                DataType: sdk.String("alias"),
                                                Encoding: sdk.String("impedit"),
                                                Length: sdk.Int(196700),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(413086),
                                                Precision: sdk.Int(287141),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(710059),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("in"),
                                                DataType: sdk.String("quisquam"),
                                                Encoding: sdk.String("sunt"),
                                                Length: sdk.Int(317260),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(859725),
                                                Precision: sdk.Int(979271),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(715622),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("mollitia"),
                                                DataType: sdk.String("impedit"),
                                                Encoding: sdk.String("accusamus"),
                                                Length: sdk.Int(91120),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(555938),
                                                Precision: sdk.Int(501462),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(741603),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("dicta"),
                                                DataType: sdk.String("impedit"),
                                                Encoding: sdk.String("tempora"),
                                                Length: sdk.Int(908249),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(920548),
                                                Precision: sdk.Int(150349),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(772628),
                                            },
                                        },
                                        Table: sdk.String("quas"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("vel"),
                                                DataType: sdk.String("eligendi"),
                                                Encoding: sdk.String("recusandae"),
                                                Length: sdk.Int(404643),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(105094),
                                                Precision: sdk.Int(86955),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(982574),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("itaque"),
                                                DataType: sdk.String("vero"),
                                                Encoding: sdk.String("quidem"),
                                                Length: sdk.Int(73826),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(778242),
                                                Precision: sdk.Int(490966),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(791615),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("distinctio"),
                                                DataType: sdk.String("possimus"),
                                                Encoding: sdk.String("cum"),
                                                Length: sdk.Int(382342),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(906495),
                                                Precision: sdk.Int(934782),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(799866),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("nihil"),
                                                DataType: sdk.String("quaerat"),
                                                Encoding: sdk.String("ipsum"),
                                                Length: sdk.Int(498435),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(514625),
                                                Precision: sdk.Int(701786),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(643997),
                                            },
                                        },
                                        Table: sdk.String("odit"),
                                    },
                                },
                                Schema: sdk.String("ad"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("iusto"),
                                                DataType: sdk.String("esse"),
                                                Encoding: sdk.String("magnam"),
                                                Length: sdk.Int(487799),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(862560),
                                                Precision: sdk.Int(771406),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(586277),
                                            },
                                        },
                                        Table: sdk.String("illo"),
                                    },
                                },
                                Schema: sdk.String("exercitationem"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("fugit"),
                                                DataType: sdk.String("maxime"),
                                                Encoding: sdk.String("dolorum"),
                                                Length: sdk.Int(998355),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(341983),
                                                Precision: sdk.Int(847308),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(845086),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("commodi"),
                                                DataType: sdk.String("esse"),
                                                Encoding: sdk.String("explicabo"),
                                                Length: sdk.Int(233708),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(840641),
                                                Precision: sdk.Int(762525),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(59757),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("maiores"),
                                                DataType: sdk.String("exercitationem"),
                                                Encoding: sdk.String("culpa"),
                                                Length: sdk.Int(919738),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(134428),
                                                Precision: sdk.Int(960767),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(204373),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("officia"),
                                                DataType: sdk.String("suscipit"),
                                                Encoding: sdk.String("harum"),
                                                Length: sdk.Int(496578),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(42454),
                                                Precision: sdk.Int(20141),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(514480),
                                            },
                                        },
                                        Table: sdk.String("iusto"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("molestiae"),
                                                DataType: sdk.String("quis"),
                                                Encoding: sdk.String("iure"),
                                                Length: sdk.Int(68596),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(308658),
                                                Precision: sdk.Int(228907),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(956942),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("corporis"),
                                                DataType: sdk.String("est"),
                                                Encoding: sdk.String("iure"),
                                                Length: sdk.Int(787629),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(590927),
                                                Precision: sdk.Int(515595),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(722392),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("nemo"),
                                                DataType: sdk.String("enim"),
                                                Encoding: sdk.String("ipsam"),
                                                Length: sdk.Int(328954),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(273383),
                                                Precision: sdk.Int(19691),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(546963),
                                            },
                                        },
                                        Table: sdk.String("doloremque"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                Column: sdk.String("numquam"),
                                                DataType: sdk.String("doloremque"),
                                                Encoding: sdk.String("cum"),
                                                Length: sdk.Int(751298),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(628314),
                                                Precision: sdk.Int(783764),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(769789),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("nisi"),
                                                DataType: sdk.String("cumque"),
                                                Encoding: sdk.String("soluta"),
                                                Length: sdk.Int(856568),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(389287),
                                                Precision: sdk.Int(720319),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(315387),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("maiores"),
                                                DataType: sdk.String("consectetur"),
                                                Encoding: sdk.String("necessitatibus"),
                                                Length: sdk.Int(803792),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(586717),
                                                Precision: sdk.Int(29080),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(588158),
                                            },
                                            shared.OracleColumn{
                                                Column: sdk.String("adipisci"),
                                                DataType: sdk.String("accusantium"),
                                                Encoding: sdk.String("magnam"),
                                                Length: sdk.Int(998527),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(607631),
                                                Precision: sdk.Int(131576),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(425817),
                                            },
                                        },
                                        Table: sdk.String("cum"),
                                    },
                                },
                                Schema: sdk.String("id"),
                            },
                        },
                    },
                    MaxConcurrentBackfillTasks: sdk.Int(821016),
                    MaxConcurrentCdcTasks: sdk.Int(143061),
                    StreamLargeObjects: map[string]interface{}{
                        "nostrum": "sequi",
                        "voluptatum": "quasi",
                    },
                },
                PostgresqlSourceConfig: &shared.PostgresqlSourceConfig{
                    ExcludeObjects: &shared.PostgresqlRdbms{
                        PostgresqlSchemas: []shared.PostgresqlSchema{
                            shared.PostgresqlSchema{
                                PostgresqlTables: []shared.PostgresqlTable{
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("voluptate"),
                                                DataType: sdk.String("eius"),
                                                Length: sdk.Int(713718),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(46384),
                                                Precision: sdk.Int(915408),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(822711),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("fugit"),
                                                DataType: sdk.String("voluptatem"),
                                                Length: sdk.Int(919171),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(360635),
                                                Precision: sdk.Int(411626),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(179906),
                                            },
                                        },
                                        Table: sdk.String("aliquam"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("hic"),
                                                DataType: sdk.String("maiores"),
                                                Length: sdk.Int(990652),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(420985),
                                                Precision: sdk.Int(198892),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(585628),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("animi"),
                                                DataType: sdk.String("provident"),
                                                Length: sdk.Int(106495),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(56998),
                                                Precision: sdk.Int(650914),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(721138),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("assumenda"),
                                                DataType: sdk.String("quo"),
                                                Length: sdk.Int(684499),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(733763),
                                                Precision: sdk.Int(417333),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(146742),
                                            },
                                        },
                                        Table: sdk.String("suscipit"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("nisi"),
                                                DataType: sdk.String("aliquid"),
                                                Length: sdk.Int(589712),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(385760),
                                                Precision: sdk.Int(881568),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(68292),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("itaque"),
                                                DataType: sdk.String("quisquam"),
                                                Length: sdk.Int(53529),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(4929),
                                                Precision: sdk.Int(181622),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(163263),
                                            },
                                        },
                                        Table: sdk.String("vitae"),
                                    },
                                },
                                Schema: sdk.String("quidem"),
                            },
                            shared.PostgresqlSchema{
                                PostgresqlTables: []shared.PostgresqlTable{
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("exercitationem"),
                                                DataType: sdk.String("illum"),
                                                Length: sdk.Int(506532),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(601626),
                                                Precision: sdk.Int(629461),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(753261),
                                            },
                                        },
                                        Table: sdk.String("tempore"),
                                    },
                                },
                                Schema: sdk.String("amet"),
                            },
                            shared.PostgresqlSchema{
                                PostgresqlTables: []shared.PostgresqlTable{
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("asperiores"),
                                                DataType: sdk.String("temporibus"),
                                                Length: sdk.Int(662857),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(542017),
                                                Precision: sdk.Int(845365),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(27400),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("quo"),
                                                DataType: sdk.String("veniam"),
                                                Length: sdk.Int(307532),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(591143),
                                                Precision: sdk.Int(875693),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(938094),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("doloremque"),
                                                DataType: sdk.String("ipsum"),
                                                Length: sdk.Int(367),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(43715),
                                                Precision: sdk.Int(273732),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(595986),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("quam"),
                                                DataType: sdk.String("atque"),
                                                Length: sdk.Int(638363),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(406493),
                                                Precision: sdk.Int(101770),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(953564),
                                            },
                                        },
                                        Table: sdk.String("laborum"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("quod"),
                                                DataType: sdk.String("a"),
                                                Length: sdk.Int(185313),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(34989),
                                                Precision: sdk.Int(415125),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(538944),
                                            },
                                        },
                                        Table: sdk.String("totam"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("voluptate"),
                                                DataType: sdk.String("quam"),
                                                Length: sdk.Int(799830),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(110247),
                                                Precision: sdk.Int(960523),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(968689),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("quod"),
                                                DataType: sdk.String("voluptate"),
                                                Length: sdk.Int(77992),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(815611),
                                                Precision: sdk.Int(804936),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(681578),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("ab"),
                                                DataType: sdk.String("ex"),
                                                Length: sdk.Int(235970),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(982409),
                                                Precision: sdk.Int(153097),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(657141),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("sequi"),
                                                DataType: sdk.String("eligendi"),
                                                Length: sdk.Int(528315),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(21668),
                                                Precision: sdk.Int(671690),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(609172),
                                            },
                                        },
                                        Table: sdk.String("nihil"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("sapiente"),
                                                DataType: sdk.String("velit"),
                                                Length: sdk.Int(240292),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(250298),
                                                Precision: sdk.Int(763140),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(850196),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("at"),
                                                DataType: sdk.String("tenetur"),
                                                Length: sdk.Int(562066),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(371295),
                                                Precision: sdk.Int(456222),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(675755),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("perspiciatis"),
                                                DataType: sdk.String("voluptates"),
                                                Length: sdk.Int(428810),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(95123),
                                                Precision: sdk.Int(555194),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(484942),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("commodi"),
                                                DataType: sdk.String("porro"),
                                                Length: sdk.Int(400470),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(648497),
                                                Precision: sdk.Int(695347),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(126512),
                                            },
                                        },
                                        Table: sdk.String("et"),
                                    },
                                },
                                Schema: sdk.String("nulla"),
                            },
                        },
                    },
                    IncludeObjects: &shared.PostgresqlRdbms{
                        PostgresqlSchemas: []shared.PostgresqlSchema{
                            shared.PostgresqlSchema{
                                PostgresqlTables: []shared.PostgresqlTable{
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("a"),
                                                DataType: sdk.String("impedit"),
                                                Length: sdk.Int(601803),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(281454),
                                                Precision: sdk.Int(814585),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(377269),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("doloribus"),
                                                DataType: sdk.String("recusandae"),
                                                Length: sdk.Int(787452),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(818078),
                                                Precision: sdk.Int(491380),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(614346),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("provident"),
                                                DataType: sdk.String("dolor"),
                                                Length: sdk.Int(573247),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(44252),
                                                Precision: sdk.Int(49456),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(431258),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("laboriosam"),
                                                DataType: sdk.String("laborum"),
                                                Length: sdk.Int(422276),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(828481),
                                                Precision: sdk.Int(129631),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(852689),
                                            },
                                        },
                                        Table: sdk.String("doloremque"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("alias"),
                                                DataType: sdk.String("velit"),
                                                Length: sdk.Int(356805),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(339094),
                                                Precision: sdk.Int(242532),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(188732),
                                            },
                                        },
                                        Table: sdk.String("quas"),
                                    },
                                    shared.PostgresqlTable{
                                        PostgresqlColumns: []shared.PostgresqlColumn{
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("recusandae"),
                                                DataType: sdk.String("cumque"),
                                                Length: sdk.Int(39047),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(516833),
                                                Precision: sdk.Int(435266),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(982927),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("est"),
                                                DataType: sdk.String("fugit"),
                                                Length: sdk.Int(84207),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(899652),
                                                Precision: sdk.Int(611970),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(116463),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("ipsam"),
                                                DataType: sdk.String("consequuntur"),
                                                Length: sdk.Int(765271),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(696219),
                                                Precision: sdk.Int(247615),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(109569),
                                            },
                                            shared.PostgresqlColumn{
                                                Column: sdk.String("sunt"),
                                                DataType: sdk.String("molestias"),
                                                Length: sdk.Int(107042),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(420233),
                                                Precision: sdk.Int(494765),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(728474),
                                            },
                                        },
                                        Table: sdk.String("molestias"),
                                    },
                                },
                                Schema: sdk.String("necessitatibus"),
                            },
                        },
                    },
                    MaxConcurrentBackfillTasks: sdk.Int(218783),
                    Publication: sdk.String("impedit"),
                    ReplicationSlot: sdk.String("quos"),
                },
                SourceConnectionProfile: sdk.String("illum"),
            },
            State: shared.StreamStateEnumFailedPermanently.ToPointer(),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("consequatur"),
        Force: sdk.Bool(false),
        Key: sdk.String("laudantium"),
        Name: "Leslie Sporer",
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        RequestID: sdk.String("tenetur"),
        UpdateMask: sdk.String("assumenda"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("enim"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DatastreamProjectsLocationsStreamsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
