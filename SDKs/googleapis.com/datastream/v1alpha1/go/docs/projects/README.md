# Projects

### Available Operations

* [DatastreamProjectsLocationsConnectionProfilesCreate](#datastreamprojectslocationsconnectionprofilescreate) - Use this method to create a connection profile in a project and location.
* [DatastreamProjectsLocationsConnectionProfilesDiscover](#datastreamprojectslocationsconnectionprofilesdiscover) - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
* [DatastreamProjectsLocationsConnectionProfilesList](#datastreamprojectslocationsconnectionprofileslist) - Use this method to list connection profiles created in a project and location.
* [DatastreamProjectsLocationsFetchStaticIps](#datastreamprojectslocationsfetchstaticips) - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* [DatastreamProjectsLocationsList](#datastreamprojectslocationslist) - Lists information about the supported locations for this service.
* [DatastreamProjectsLocationsOperationsCancel](#datastreamprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatastreamProjectsLocationsOperationsList](#datastreamprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatastreamProjectsLocationsPrivateConnectionsCreate](#datastreamprojectslocationsprivateconnectionscreate) - Use this method to create a private connectivity configuration.
* [DatastreamProjectsLocationsPrivateConnectionsList](#datastreamprojectslocationsprivateconnectionslist) - Use this method to list private connectivity configurations in a project and location.
* [DatastreamProjectsLocationsPrivateConnectionsRoutesCreate](#datastreamprojectslocationsprivateconnectionsroutescreate) - Use this method to create a route for a private connectivity in a project and location.
* [DatastreamProjectsLocationsPrivateConnectionsRoutesList](#datastreamprojectslocationsprivateconnectionsrouteslist) - Use this method to list routes created for a private connectivity in a project and location.
* [DatastreamProjectsLocationsStreamsCreate](#datastreamprojectslocationsstreamscreate) - Use this method to create a stream.
* [DatastreamProjectsLocationsStreamsDelete](#datastreamprojectslocationsstreamsdelete) - Use this method to delete a stream.
* [DatastreamProjectsLocationsStreamsFetchErrors](#datastreamprojectslocationsstreamsfetcherrors) - Use this method to fetch any errors associated with a stream.
* [DatastreamProjectsLocationsStreamsList](#datastreamprojectslocationsstreamslist) - Use this method to list streams in a project and location.
* [DatastreamProjectsLocationsStreamsObjectsGet](#datastreamprojectslocationsstreamsobjectsget) - Use this method to get details about a stream object.
* [DatastreamProjectsLocationsStreamsObjectsList](#datastreamprojectslocationsstreamsobjectslist) - Use this method to list the objects of a specific stream.
* [DatastreamProjectsLocationsStreamsObjectsStartBackfillJob](#datastreamprojectslocationsstreamsobjectsstartbackfilljob) - Starts backfill job for the specified stream object.
* [DatastreamProjectsLocationsStreamsObjectsStopBackfillJob](#datastreamprojectslocationsstreamsobjectsstopbackfilljob) - Stops the backfill job for the specified stream object.
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
            DisplayName: sdk.String("fuga"),
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: sdk.String("itchy-forager.name"),
                Password: sdk.String("iure"),
                Port: sdk.Int(902349),
                PrivateKey: sdk.String("quidem"),
                Username: sdk.String("Baby_Beier65"),
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: sdk.String("laborum"),
                RootPath: sdk.String("dolores"),
            },
            Labels: map[string]string{
                "corporis": "explicabo",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: sdk.String("sick-escort.name"),
                Password: sdk.String("nemo"),
                Port: sdk.Int(325047),
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: sdk.String("excepturi"),
                    ClientCertificate: sdk.String("accusantium"),
                    ClientKey: sdk.String("iure"),
                },
                Username: sdk.String("Lorenza.Yundt65"),
            },
            NoConnectivity: map[string]interface{}{
                "culpa": "consequuntur",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "mollitia": "occaecati",
                    "numquam": "commodi",
                    "quam": "molestiae",
                    "velit": "error",
                },
                DatabaseService: sdk.String("quia"),
                Hostname: sdk.String("glorious-browsing.net"),
                Password: sdk.String("animi"),
                Port: sdk.Int(317202),
                Username: sdk.String("Britney94"),
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: sdk.String("ipsam"),
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
            },
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        ConnectionProfileID: sdk.String("vero"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        RequestID: sdk.String("voluptate"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("perferendis"),
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

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DiscoverConnectionProfileRequestInput: &shared.DiscoverConnectionProfileRequestInput{
            ConnectionProfile: &shared.ConnectionProfileInput{
                DisplayName: sdk.String("reprehenderit"),
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: sdk.String("finished-whisker.com"),
                    Password: sdk.String("corporis"),
                    Port: sdk.Int(296140),
                    PrivateKey: sdk.String("iusto"),
                    Username: sdk.String("Birdie88"),
                },
                GcsProfile: &shared.GcsProfile{
                    BucketName: sdk.String("commodi"),
                    RootPath: sdk.String("repudiandae"),
                },
                Labels: map[string]string{
                    "ipsum": "quidem",
                },
                MysqlProfile: &shared.MysqlProfileInput{
                    Hostname: sdk.String("neighboring-miscommunication.org"),
                    Password: sdk.String("modi"),
                    Port: sdk.Int(508969),
                    SslConfig: &shared.MysqlSslConfigInput{
                        CaCertificate: sdk.String("rem"),
                        ClientCertificate: sdk.String("voluptates"),
                        ClientKey: sdk.String("quasi"),
                    },
                    Username: sdk.String("Thelma92"),
                },
                NoConnectivity: map[string]interface{}{
                    "enim": "consequatur",
                    "est": "quibusdam",
                },
                OracleProfile: &shared.OracleProfile{
                    ConnectionAttributes: map[string]string{
                        "deserunt": "distinctio",
                    },
                    DatabaseService: sdk.String("quibusdam"),
                    Hostname: sdk.String("flat-directive.biz"),
                    Password: sdk.String("aliquid"),
                    Port: sdk.Int(586513),
                    Username: sdk.String("Kavon82"),
                },
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnectionName: sdk.String("ipsam"),
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "fugit": "dolorum",
                },
            },
            ConnectionProfileName: sdk.String("excepturi"),
            MysqlRdbms: &shared.MysqlRdbms{
                MysqlDatabases: []shared.MysqlDatabase{
                    shared.MysqlDatabase{
                        DatabaseName: sdk.String("facilis"),
                        MysqlTables: []shared.MysqlTable{
                            shared.MysqlTable{
                                MysqlColumns: []shared.MysqlColumn{
                                    shared.MysqlColumn{
                                        Collation: sdk.String("delectus"),
                                        ColumnName: sdk.String("eum"),
                                        DataType: sdk.String("non"),
                                        Length: sdk.Int(756107),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(576157),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("aliquid"),
                                        ColumnName: sdk.String("provident"),
                                        DataType: sdk.String("necessitatibus"),
                                        Length: sdk.Int(572252),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(638921),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                },
                                TableName: sdk.String("dolor"),
                            },
                            shared.MysqlTable{
                                MysqlColumns: []shared.MysqlColumn{
                                    shared.MysqlColumn{
                                        Collation: sdk.String("a"),
                                        ColumnName: sdk.String("dolorum"),
                                        DataType: sdk.String("in"),
                                        Length: sdk.Int(449198),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(846409),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("maiores"),
                                        ColumnName: sdk.String("rerum"),
                                        DataType: sdk.String("dicta"),
                                        Length: sdk.Int(297437),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(767024),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("facere"),
                                        ColumnName: sdk.String("ea"),
                                        DataType: sdk.String("aliquid"),
                                        Length: sdk.Int(675439),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(881104),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("non"),
                                        ColumnName: sdk.String("occaecati"),
                                        DataType: sdk.String("enim"),
                                        Length: sdk.Int(881736),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(965417),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                },
                                TableName: sdk.String("quidem"),
                            },
                            shared.MysqlTable{
                                MysqlColumns: []shared.MysqlColumn{
                                    shared.MysqlColumn{
                                        Collation: sdk.String("nam"),
                                        ColumnName: sdk.String("id"),
                                        DataType: sdk.String("blanditiis"),
                                        Length: sdk.Int(533206),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(956084),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("amet"),
                                        ColumnName: sdk.String("deserunt"),
                                        DataType: sdk.String("nisi"),
                                        Length: sdk.Int(423855),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(618809),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("omnis"),
                                        ColumnName: sdk.String("molestiae"),
                                        DataType: sdk.String("perferendis"),
                                        Length: sdk.Int(470132),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(301575),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                },
                                TableName: sdk.String("distinctio"),
                            },
                        },
                    },
                    shared.MysqlDatabase{
                        DatabaseName: sdk.String("id"),
                        MysqlTables: []shared.MysqlTable{
                            shared.MysqlTable{
                                MysqlColumns: []shared.MysqlColumn{
                                    shared.MysqlColumn{
                                        Collation: sdk.String("suscipit"),
                                        ColumnName: sdk.String("natus"),
                                        DataType: sdk.String("nobis"),
                                        Length: sdk.Int(428769),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(878453),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("aspernatur"),
                                        ColumnName: sdk.String("architecto"),
                                        DataType: sdk.String("magnam"),
                                        Length: sdk.Int(92373),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(569965),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                },
                                TableName: sdk.String("ullam"),
                            },
                            shared.MysqlTable{
                                MysqlColumns: []shared.MysqlColumn{
                                    shared.MysqlColumn{
                                        Collation: sdk.String("quos"),
                                        ColumnName: sdk.String("sint"),
                                        DataType: sdk.String("accusantium"),
                                        Length: sdk.Int(653201),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(968962),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("mollitia"),
                                        ColumnName: sdk.String("ad"),
                                        DataType: sdk.String("eum"),
                                        Length: sdk.Int(221262),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(896547),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                    shared.MysqlColumn{
                                        Collation: sdk.String("odit"),
                                        ColumnName: sdk.String("nemo"),
                                        DataType: sdk.String("quasi"),
                                        Length: sdk.Int(435865),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(984043),
                                        PrimaryKey: sdk.Bool(false),
                                    },
                                },
                                TableName: sdk.String("debitis"),
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
                                        ColumnName: sdk.String("facilis"),
                                        DataType: sdk.String("in"),
                                        Encoding: sdk.String("architecto"),
                                        Length: sdk.Int(99569),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(919483),
                                        Precision: sdk.Int(352312),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(714242),
                                    },
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("nihil"),
                                        DataType: sdk.String("repellat"),
                                        Encoding: sdk.String("quibusdam"),
                                        Length: sdk.Int(149448),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(904648),
                                        Precision: sdk.Int(868126),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(37559),
                                    },
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("consequuntur"),
                                        DataType: sdk.String("praesentium"),
                                        Encoding: sdk.String("natus"),
                                        Length: sdk.Int(166847),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(123820),
                                        Precision: sdk.Int(779051),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(848009),
                                    },
                                },
                                TableName: sdk.String("pariatur"),
                            },
                            shared.OracleTable{
                                OracleColumns: []shared.OracleColumn{
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("ea"),
                                        DataType: sdk.String("excepturi"),
                                        Encoding: sdk.String("odit"),
                                        Length: sdk.Int(407183),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(33222),
                                        Precision: sdk.Int(69167),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(982575),
                                    },
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("quidem"),
                                        DataType: sdk.String("ipsam"),
                                        Encoding: sdk.String("voluptate"),
                                        Length: sdk.Int(420075),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(722056),
                                        Precision: sdk.Int(50588),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(866383),
                                    },
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("nemo"),
                                        DataType: sdk.String("voluptatibus"),
                                        Encoding: sdk.String("perferendis"),
                                        Length: sdk.Int(855804),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(230742),
                                        Precision: sdk.Int(11714),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(764912),
                                    },
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("corporis"),
                                        DataType: sdk.String("hic"),
                                        Encoding: sdk.String("libero"),
                                        Length: sdk.Int(749999),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(171629),
                                        Precision: sdk.Int(339404),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(521037),
                                    },
                                },
                                TableName: sdk.String("dignissimos"),
                            },
                            shared.OracleTable{
                                OracleColumns: []shared.OracleColumn{
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("quis"),
                                        DataType: sdk.String("nesciunt"),
                                        Encoding: sdk.String("eos"),
                                        Length: sdk.Int(18521),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(170986),
                                        Precision: sdk.Int(793698),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(463451),
                                    },
                                },
                                TableName: sdk.String("dolor"),
                            },
                            shared.OracleTable{
                                OracleColumns: []shared.OracleColumn{
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("nostrum"),
                                        DataType: sdk.String("hic"),
                                        Encoding: sdk.String("recusandae"),
                                        Length: sdk.Int(608253),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(704415),
                                        Precision: sdk.Int(596656),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(31838),
                                    },
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("porro"),
                                        DataType: sdk.String("consequuntur"),
                                        Encoding: sdk.String("blanditiis"),
                                        Length: sdk.Int(621479),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(50370),
                                        Precision: sdk.Int(577229),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(699098),
                                    },
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("adipisci"),
                                        DataType: sdk.String("asperiores"),
                                        Encoding: sdk.String("earum"),
                                        Length: sdk.Int(267262),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(613966),
                                        Precision: sdk.Int(679091),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(535633),
                                    },
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("pariatur"),
                                        DataType: sdk.String("provident"),
                                        Encoding: sdk.String("nobis"),
                                        Length: sdk.Int(730122),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(964490),
                                        Precision: sdk.Int(311945),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(554242),
                                    },
                                },
                                TableName: sdk.String("aliquid"),
                            },
                        },
                        SchemaName: sdk.String("dolorem"),
                    },
                    shared.OracleSchema{
                        OracleTables: []shared.OracleTable{
                            shared.OracleTable{
                                OracleColumns: []shared.OracleColumn{
                                    shared.OracleColumn{
                                        ColumnName: sdk.String("qui"),
                                        DataType: sdk.String("ipsum"),
                                        Encoding: sdk.String("hic"),
                                        Length: sdk.Int(569574),
                                        Nullable: sdk.Bool(false),
                                        OrdinalPosition: sdk.Int(739551),
                                        Precision: sdk.Int(452109),
                                        PrimaryKey: sdk.Bool(false),
                                        Scale: sdk.Int(490459),
                                    },
                                },
                                TableName: sdk.String("reiciendis"),
                            },
                        },
                        SchemaName: sdk.String("amet"),
                    },
                },
            },
            RecursionDepth: sdk.Int(680545),
            Recursive: sdk.Bool(false),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("odio"),
        Parent: "quaerat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("voluptatibus"),
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
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("sit"),
        Filter: sdk.String("fugiat"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("soluta"),
        OrderBy: sdk.String("dolorum"),
        PageSize: sdk.Int64(478596),
        PageToken: sdk.String("voluptate"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("necessitatibus"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("id"),
        Name: "Mrs. Ray Collins",
        OauthToken: sdk.String("accusamus"),
        PageSize: sdk.Int64(320017),
        PageToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("provident"),
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
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("similique"),
        Fields: sdk.String("alias"),
        Filter: sdk.String("at"),
        Key: sdk.String("quaerat"),
        Name: "Gina Schmeler",
        OauthToken: sdk.String("dolorum"),
        PageSize: sdk.Int64(952792),
        PageToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("ipsum"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "amet": "tempore",
            "accusamus": "numquam",
            "enim": "dolorem",
            "sapiente": "totam",
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("neque"),
        Key: sdk.String("sed"),
        Name: "Kelli Hintz",
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("cupiditate"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("laborum"),
        Filter: sdk.String("totam"),
        Key: sdk.String("incidunt"),
        Name: "Bonnie Raynor",
        OauthToken: sdk.String("quam"),
        PageSize: sdk.Int64(565421),
        PageToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("fugit"),
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
            DisplayName: sdk.String("odio"),
            Error: &shared.Error{
                Details: map[string]string{
                    "ullam": "nam",
                },
                ErrorTime: sdk.String("hic"),
                ErrorUUID: sdk.String("voluptatem"),
                Message: sdk.String("cumque"),
                Reason: sdk.String("soluta"),
            },
            Labels: map[string]string{
                "et": "saepe",
                "ipsum": "veritatis",
                "nobis": "quos",
            },
            VpcPeeringConfig: &shared.VpcPeeringConfig{
                Subnet: sdk.String("tempore"),
                VpcName: sdk.String("cupiditate"),
            },
        },
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("adipisci"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        PrivateConnectionID: sdk.String("architecto"),
        QuotaUser: sdk.String("quae"),
        RequestID: sdk.String("aut"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("itaque"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("doloribus"),
        Filter: sdk.String("ut"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("cupiditate"),
        OrderBy: sdk.String("qui"),
        PageSize: sdk.Int64(63955),
        PageToken: sdk.String("laudantium"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("quisquam"),
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

Use this method to create a route for a private connectivity in a project and location.

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
            DestinationAddress: sdk.String("omnis"),
            DestinationPort: sdk.Int(338159),
            DisplayName: sdk.String("ipsum"),
            Labels: map[string]string{
                "voluptate": "consectetur",
                "vero": "tenetur",
                "dignissimos": "hic",
                "distinctio": "quod",
            },
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("vero"),
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("dolore"),
        Parent: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        RequestID: sdk.String("sequi"),
        RouteID: sdk.String("natus"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("aut"),
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

Use this method to list routes created for a private connectivity in a project and location.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("porro"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("iusto"),
        OrderBy: sdk.String("eligendi"),
        PageSize: sdk.Int64(497391),
        PageToken: sdk.String("alias"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("ea"),
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
                            DatabaseName: sdk.String("possimus"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("ex"),
                                            ColumnName: sdk.String("laudantium"),
                                            DataType: sdk.String("dicta"),
                                            Length: sdk.Int(224317),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(980700),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    TableName: sdk.String("quasi"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("nulla"),
                                            ColumnName: sdk.String("excepturi"),
                                            DataType: sdk.String("voluptatibus"),
                                            Length: sdk.Int(343605),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(960835),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("quisquam"),
                                            ColumnName: sdk.String("saepe"),
                                            DataType: sdk.String("ea"),
                                            Length: sdk.Int(774048),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(359271),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    TableName: sdk.String("veniam"),
                                },
                            },
                        },
                        shared.MysqlDatabase{
                            DatabaseName: sdk.String("aliquid"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("ea"),
                                            ColumnName: sdk.String("quo"),
                                            DataType: sdk.String("consectetur"),
                                            Length: sdk.Int(926213),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(132487),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("minima"),
                                            ColumnName: sdk.String("eaque"),
                                            DataType: sdk.String("a"),
                                            Length: sdk.Int(725595),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(13948),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    TableName: sdk.String("aut"),
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
                                            ColumnName: sdk.String("fugit"),
                                            DataType: sdk.String("accusamus"),
                                            Encoding: sdk.String("inventore"),
                                            Length: sdk.Int(250622),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(89603),
                                            Precision: sdk.Int(677412),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(672048),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("placeat"),
                                            DataType: sdk.String("velit"),
                                            Encoding: sdk.String("eum"),
                                            Length: sdk.Int(420539),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(752135),
                                            Precision: sdk.Int(557369),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(829603),
                                        },
                                    },
                                    TableName: sdk.String("nulla"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("libero"),
                                            DataType: sdk.String("quasi"),
                                            Encoding: sdk.String("tempora"),
                                            Length: sdk.Int(256139),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(131482),
                                            Precision: sdk.Int(591935),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(55374),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("molestiae"),
                                            DataType: sdk.String("magnam"),
                                            Encoding: sdk.String("odio"),
                                            Length: sdk.Int(262118),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(458515),
                                            Precision: sdk.Int(456141),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(524593),
                                        },
                                    },
                                    TableName: sdk.String("fuga"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("quidem"),
                                            DataType: sdk.String("fugiat"),
                                            Encoding: sdk.String("ut"),
                                            Length: sdk.Int(433439),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(379927),
                                            Precision: sdk.Int(826871),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(181151),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("praesentium"),
                                            DataType: sdk.String("quisquam"),
                                            Encoding: sdk.String("veritatis"),
                                            Length: sdk.Int(56848),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(660040),
                                            Precision: sdk.Int(696997),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(206594),
                                        },
                                    },
                                    TableName: sdk.String("quo"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("quo"),
                                            DataType: sdk.String("fuga"),
                                            Encoding: sdk.String("eius"),
                                            Length: sdk.Int(178367),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(373813),
                                            Precision: sdk.Int(69859),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(587600),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("consequatur"),
                                            DataType: sdk.String("tempora"),
                                            Encoding: sdk.String("debitis"),
                                            Length: sdk.Int(370853),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(133465),
                                            Precision: sdk.Int(197054),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(779192),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("esse"),
                                            DataType: sdk.String("recusandae"),
                                            Encoding: sdk.String("aperiam"),
                                            Length: sdk.Int(715179),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(799796),
                                            Precision: sdk.Int(490819),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(76956),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("nihil"),
                                            DataType: sdk.String("totam"),
                                            Encoding: sdk.String("accusamus"),
                                            Length: sdk.Int(306810),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(488410),
                                            Precision: sdk.Int(577543),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(414567),
                                        },
                                    },
                                    TableName: sdk.String("sapiente"),
                                },
                            },
                            SchemaName: sdk.String("dolores"),
                        },
                        shared.OracleSchema{
                            OracleTables: []shared.OracleTable{
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("accusantium"),
                                            DataType: sdk.String("porro"),
                                            Encoding: sdk.String("eum"),
                                            Length: sdk.Int(556429),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(510017),
                                            Precision: sdk.Int(159867),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(536178),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("fugit"),
                                            DataType: sdk.String("fuga"),
                                            Encoding: sdk.String("mollitia"),
                                            Length: sdk.Int(277596),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(539224),
                                            Precision: sdk.Int(128860),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(325685),
                                        },
                                    },
                                    TableName: sdk.String("nisi"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("sapiente"),
                                            DataType: sdk.String("consequuntur"),
                                            Encoding: sdk.String("ratione"),
                                            Length: sdk.Int(129412),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(903984),
                                            Precision: sdk.Int(578922),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(543806),
                                        },
                                    },
                                    TableName: sdk.String("et"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("eveniet"),
                                            DataType: sdk.String("accusamus"),
                                            Encoding: sdk.String("veritatis"),
                                            Length: sdk.Int(458604),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(800379),
                                            Precision: sdk.Int(724168),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(877131),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("aliquid"),
                                            DataType: sdk.String("quasi"),
                                            Encoding: sdk.String("saepe"),
                                            Length: sdk.Int(426306),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(690025),
                                            Precision: sdk.Int(473221),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(699622),
                                        },
                                    },
                                    TableName: sdk.String("occaecati"),
                                },
                            },
                            SchemaName: sdk.String("minima"),
                        },
                        shared.OracleSchema{
                            OracleTables: []shared.OracleTable{
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("sit"),
                                            DataType: sdk.String("culpa"),
                                            Encoding: sdk.String("tempore"),
                                            Length: sdk.Int(240020),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(766964),
                                            Precision: sdk.Int(160538),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(9766),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("minus"),
                                            DataType: sdk.String("quaerat"),
                                            Encoding: sdk.String("sapiente"),
                                            Length: sdk.Int(232865),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(458139),
                                            Precision: sdk.Int(503427),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(590984),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("a"),
                                            DataType: sdk.String("nulla"),
                                            Encoding: sdk.String("quas"),
                                            Length: sdk.Int(457223),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(97468),
                                            Precision: sdk.Int(951875),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(621679),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("sint"),
                                            DataType: sdk.String("pariatur"),
                                            Encoding: sdk.String("possimus"),
                                            Length: sdk.Int(157632),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(908844),
                                            Precision: sdk.Int(992430),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(815524),
                                        },
                                    },
                                    TableName: sdk.String("veritatis"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("quasi"),
                                            DataType: sdk.String("similique"),
                                            Encoding: sdk.String("culpa"),
                                            Length: sdk.Int(398434),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(949298),
                                            Precision: sdk.Int(62713),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(936747),
                                        },
                                    },
                                    TableName: sdk.String("vel"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("eius"),
                                            DataType: sdk.String("libero"),
                                            Encoding: sdk.String("illum"),
                                            Length: sdk.Int(742238),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(33304),
                                            Precision: sdk.Int(306986),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(958983),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("dicta"),
                                            DataType: sdk.String("ullam"),
                                            Encoding: sdk.String("reprehenderit"),
                                            Length: sdk.Int(356707),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(391774),
                                            Precision: sdk.Int(16328),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(531849),
                                        },
                                    },
                                    TableName: sdk.String("qui"),
                                },
                            },
                            SchemaName: sdk.String("quibusdam"),
                        },
                    },
                },
            },
            BackfillNone: map[string]interface{}{
                "deleniti": "itaque",
                "dolorum": "architecto",
            },
            CustomerManagedEncryptionKey: sdk.String("omnis"),
            DestinationConfig: &shared.DestinationConfig{
                DestinationConnectionProfileName: sdk.String("tenetur"),
                GcsDestinationConfig: &shared.GcsDestinationConfig{
                    AvroFileFormat: map[string]interface{}{
                        "at": "et",
                    },
                    FileRotationInterval: sdk.String("voluptate"),
                    FileRotationMb: sdk.Int(55965),
                    GcsFileFormat: shared.GcsDestinationConfigGcsFileFormatEnumGcsFileFormatUnspecified.ToPointer(),
                    JSONFileFormat: &shared.JSONFileFormat{
                        Compression: shared.JSONFileFormatCompressionEnumJSONCompressionUnspecified.ToPointer(),
                        SchemaFileFormat: shared.JSONFileFormatSchemaFileFormatEnumSchemaFileFormatUnspecified.ToPointer(),
                    },
                    Path: sdk.String("adipisci"),
                },
            },
            DisplayName: sdk.String("iste"),
            Labels: map[string]string{
                "accusantium": "rem",
                "aut": "laudantium",
                "eum": "mollitia",
                "ab": "corrupti",
            },
            SourceConfig: &shared.SourceConfig{
                MysqlSourceConfig: &shared.MysqlSourceConfig{
                    Allowlist: &shared.MysqlRdbms{
                        MysqlDatabases: []shared.MysqlDatabase{
                            shared.MysqlDatabase{
                                DatabaseName: sdk.String("voluptatem"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("numquam"),
                                                ColumnName: sdk.String("impedit"),
                                                DataType: sdk.String("explicabo"),
                                                Length: sdk.Int(376226),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(12036),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("dignissimos"),
                                                ColumnName: sdk.String("dicta"),
                                                DataType: sdk.String("maiores"),
                                                Length: sdk.Int(618480),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(244651),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("voluptatibus"),
                                                ColumnName: sdk.String("voluptas"),
                                                DataType: sdk.String("asperiores"),
                                                Length: sdk.Int(45659),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(409054),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("quaerat"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                DatabaseName: sdk.String("consequuntur"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("maxime"),
                                                ColumnName: sdk.String("dignissimos"),
                                                DataType: sdk.String("officia"),
                                                Length: sdk.Int(989410),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(368102),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quae"),
                                                ColumnName: sdk.String("quaerat"),
                                                DataType: sdk.String("porro"),
                                                Length: sdk.Int(801836),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(288398),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("ab"),
                                                ColumnName: sdk.String("adipisci"),
                                                DataType: sdk.String("fuga"),
                                                Length: sdk.Int(662505),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(380729),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("velit"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("est"),
                                                ColumnName: sdk.String("recusandae"),
                                                DataType: sdk.String("totam"),
                                                Length: sdk.Int(853940),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(424089),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("ducimus"),
                                                ColumnName: sdk.String("quos"),
                                                DataType: sdk.String("vel"),
                                                Length: sdk.Int(287051),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(822560),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("facilis"),
                                                ColumnName: sdk.String("cum"),
                                                DataType: sdk.String("commodi"),
                                                Length: sdk.Int(447144),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(360545),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("reiciendis"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("nemo"),
                                                ColumnName: sdk.String("recusandae"),
                                                DataType: sdk.String("aliquid"),
                                                Length: sdk.Int(46007),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(738683),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("consectetur"),
                                                ColumnName: sdk.String("in"),
                                                DataType: sdk.String("exercitationem"),
                                                Length: sdk.Int(937285),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(814967),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("numquam"),
                                                ColumnName: sdk.String("doloribus"),
                                                DataType: sdk.String("suscipit"),
                                                Length: sdk.Int(968972),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(697142),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("saepe"),
                                                ColumnName: sdk.String("necessitatibus"),
                                                DataType: sdk.String("dolore"),
                                                Length: sdk.Int(121059),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(992012),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("adipisci"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("amet"),
                                                ColumnName: sdk.String("beatae"),
                                                DataType: sdk.String("dignissimos"),
                                                Length: sdk.Int(950953),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(891523),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("consectetur"),
                                    },
                                },
                            },
                        },
                    },
                    Rejectlist: &shared.MysqlRdbms{
                        MysqlDatabases: []shared.MysqlDatabase{
                            shared.MysqlDatabase{
                                DatabaseName: sdk.String("harum"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("voluptates"),
                                                ColumnName: sdk.String("libero"),
                                                DataType: sdk.String("vitae"),
                                                Length: sdk.Int(881721),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(631126),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("tempora"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("voluptas"),
                                                ColumnName: sdk.String("voluptas"),
                                                DataType: sdk.String("voluptas"),
                                                Length: sdk.Int(324405),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(748789),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("dolorum"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                DatabaseName: sdk.String("adipisci"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("blanditiis"),
                                                ColumnName: sdk.String("in"),
                                                DataType: sdk.String("dolore"),
                                                Length: sdk.Int(304468),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(885963),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("temporibus"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("adipisci"),
                                                ColumnName: sdk.String("cum"),
                                                DataType: sdk.String("blanditiis"),
                                                Length: sdk.Int(555361),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(942584),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("nesciunt"),
                                                ColumnName: sdk.String("culpa"),
                                                DataType: sdk.String("corrupti"),
                                                Length: sdk.Int(867290),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(519643),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("hic"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("nobis"),
                                                ColumnName: sdk.String("sit"),
                                                DataType: sdk.String("rerum"),
                                                Length: sdk.Int(148829),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(967966),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("explicabo"),
                                                ColumnName: sdk.String("asperiores"),
                                                DataType: sdk.String("facilis"),
                                                Length: sdk.Int(451822),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(709072),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("ab"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("dolore"),
                                                ColumnName: sdk.String("laborum"),
                                                DataType: sdk.String("sed"),
                                                Length: sdk.Int(447516),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(417486),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quidem"),
                                                ColumnName: sdk.String("explicabo"),
                                                DataType: sdk.String("voluptas"),
                                                Length: sdk.Int(604118),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(100032),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("suscipit"),
                                                ColumnName: sdk.String("sapiente"),
                                                DataType: sdk.String("debitis"),
                                                Length: sdk.Int(72434),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(967795),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("perferendis"),
                                    },
                                },
                            },
                        },
                    },
                },
                OracleSourceConfig: &shared.OracleSourceConfig{
                    Allowlist: &shared.OracleRdbms{
                        OracleSchemas: []shared.OracleSchema{
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("sed"),
                                                DataType: sdk.String("provident"),
                                                Encoding: sdk.String("eius"),
                                                Length: sdk.Int(896762),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(215529),
                                                Precision: sdk.Int(406733),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(579912),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("quos"),
                                                DataType: sdk.String("voluptatibus"),
                                                Encoding: sdk.String("tempora"),
                                                Length: sdk.Int(273009),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(455444),
                                                Precision: sdk.Int(970076),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(401713),
                                            },
                                        },
                                        TableName: sdk.String("sit"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("officiis"),
                                                DataType: sdk.String("praesentium"),
                                                Encoding: sdk.String("facilis"),
                                                Length: sdk.Int(310381),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(277773),
                                                Precision: sdk.Int(373035),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(894864),
                                            },
                                        },
                                        TableName: sdk.String("rem"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("nobis"),
                                                DataType: sdk.String("error"),
                                                Encoding: sdk.String("veniam"),
                                                Length: sdk.Int(329543),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(924159),
                                                Precision: sdk.Int(967122),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(862319),
                                            },
                                        },
                                        TableName: sdk.String("magni"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("saepe"),
                                                DataType: sdk.String("numquam"),
                                                Encoding: sdk.String("veniam"),
                                                Length: sdk.Int(446135),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(889234),
                                                Precision: sdk.Int(104627),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(512452),
                                            },
                                        },
                                        TableName: sdk.String("exercitationem"),
                                    },
                                },
                                SchemaName: sdk.String("praesentium"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("dolorum"),
                                                DataType: sdk.String("voluptatum"),
                                                Encoding: sdk.String("error"),
                                                Length: sdk.Int(944708),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(710529),
                                                Precision: sdk.Int(892863),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(204923),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("dolorum"),
                                                DataType: sdk.String("nostrum"),
                                                Encoding: sdk.String("officia"),
                                                Length: sdk.Int(676243),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(548361),
                                                Precision: sdk.Int(879235),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(272683),
                                            },
                                        },
                                        TableName: sdk.String("atque"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("ut"),
                                                DataType: sdk.String("fugiat"),
                                                Encoding: sdk.String("voluptatem"),
                                                Length: sdk.Int(635057),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(710337),
                                                Precision: sdk.Int(299643),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(7884),
                                            },
                                        },
                                        TableName: sdk.String("esse"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("sit"),
                                                DataType: sdk.String("voluptatum"),
                                                Encoding: sdk.String("quas"),
                                                Length: sdk.Int(922112),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(361151),
                                                Precision: sdk.Int(89494),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(502710),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("ex"),
                                                DataType: sdk.String("sed"),
                                                Encoding: sdk.String("sit"),
                                                Length: sdk.Int(425508),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(342611),
                                                Precision: sdk.Int(906172),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(622231),
                                            },
                                        },
                                        TableName: sdk.String("consequatur"),
                                    },
                                },
                                SchemaName: sdk.String("incidunt"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("harum"),
                                                DataType: sdk.String("dicta"),
                                                Encoding: sdk.String("architecto"),
                                                Length: sdk.Int(577140),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(289776),
                                                Precision: sdk.Int(695270),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(539074),
                                            },
                                        },
                                        TableName: sdk.String("laborum"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("tenetur"),
                                                DataType: sdk.String("laboriosam"),
                                                Encoding: sdk.String("alias"),
                                                Length: sdk.Int(227084),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(647197),
                                                Precision: sdk.Int(454860),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(600392),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("reiciendis"),
                                                DataType: sdk.String("provident"),
                                                Encoding: sdk.String("repellendus"),
                                                Length: sdk.Int(962771),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(914791),
                                                Precision: sdk.Int(16871),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(667285),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("quidem"),
                                                DataType: sdk.String("reprehenderit"),
                                                Encoding: sdk.String("facere"),
                                                Length: sdk.Int(685092),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(509807),
                                                Precision: sdk.Int(648598),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(333965),
                                            },
                                        },
                                        TableName: sdk.String("voluptatem"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("repudiandae"),
                                                DataType: sdk.String("quasi"),
                                                Encoding: sdk.String("atque"),
                                                Length: sdk.Int(442036),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(991142),
                                                Precision: sdk.Int(519952),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(383103),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("quidem"),
                                                DataType: sdk.String("maxime"),
                                                Encoding: sdk.String("et"),
                                                Length: sdk.Int(461007),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(227759),
                                                Precision: sdk.Int(826825),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(410301),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("atque"),
                                                DataType: sdk.String("error"),
                                                Encoding: sdk.String("officiis"),
                                                Length: sdk.Int(886961),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(880107),
                                                Precision: sdk.Int(618826),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(328303),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("aspernatur"),
                                                DataType: sdk.String("ex"),
                                                Encoding: sdk.String("maiores"),
                                                Length: sdk.Int(544647),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(871786),
                                                Precision: sdk.Int(621693),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(502721),
                                            },
                                        },
                                        TableName: sdk.String("suscipit"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("atque"),
                                                DataType: sdk.String("atque"),
                                                Encoding: sdk.String("sunt"),
                                                Length: sdk.Int(923306),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(680697),
                                                Precision: sdk.Int(829898),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(287119),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("reiciendis"),
                                                DataType: sdk.String("doloremque"),
                                                Encoding: sdk.String("repudiandae"),
                                                Length: sdk.Int(116098),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(36033),
                                                Precision: sdk.Int(106429),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(174772),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("enim"),
                                                DataType: sdk.String("laboriosam"),
                                                Encoding: sdk.String("velit"),
                                                Length: sdk.Int(952143),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(562783),
                                                Precision: sdk.Int(300029),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(906355),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("consequuntur"),
                                                DataType: sdk.String("occaecati"),
                                                Encoding: sdk.String("officiis"),
                                                Length: sdk.Int(597937),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(446394),
                                                Precision: sdk.Int(238043),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(907876),
                                            },
                                        },
                                        TableName: sdk.String("occaecati"),
                                    },
                                },
                                SchemaName: sdk.String("consequuntur"),
                            },
                        },
                    },
                    DropLargeObjects: map[string]interface{}{
                        "id": "quis",
                    },
                    Rejectlist: &shared.OracleRdbms{
                        OracleSchemas: []shared.OracleSchema{
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("corporis"),
                                                DataType: sdk.String("quidem"),
                                                Encoding: sdk.String("eveniet"),
                                                Length: sdk.Int(247399),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(878493),
                                                Precision: sdk.Int(39615),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(434156),
                                            },
                                        },
                                        TableName: sdk.String("ipsa"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("quae"),
                                                DataType: sdk.String("molestiae"),
                                                Encoding: sdk.String("eveniet"),
                                                Length: sdk.Int(184362),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(739884),
                                                Precision: sdk.Int(434761),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(898063),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("ratione"),
                                                DataType: sdk.String("laborum"),
                                                Encoding: sdk.String("distinctio"),
                                                Length: sdk.Int(528940),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(523006),
                                                Precision: sdk.Int(304446),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(320565),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("repellat"),
                                                DataType: sdk.String("alias"),
                                                Encoding: sdk.String("corporis"),
                                                Length: sdk.Int(597303),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(470649),
                                                Precision: sdk.Int(649078),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(378245),
                                            },
                                        },
                                        TableName: sdk.String("alias"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("reiciendis"),
                                                DataType: sdk.String("dolores"),
                                                Encoding: sdk.String("id"),
                                                Length: sdk.Int(327988),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(293144),
                                                Precision: sdk.Int(680349),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(200364),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("quae"),
                                                DataType: sdk.String("recusandae"),
                                                Encoding: sdk.String("omnis"),
                                                Length: sdk.Int(309251),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(477646),
                                                Precision: sdk.Int(403218),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(284000),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("culpa"),
                                                DataType: sdk.String("adipisci"),
                                                Encoding: sdk.String("debitis"),
                                                Length: sdk.Int(514513),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(432606),
                                                Precision: sdk.Int(367927),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(928219),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("esse"),
                                                DataType: sdk.String("provident"),
                                                Encoding: sdk.String("quis"),
                                                Length: sdk.Int(431785),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(970494),
                                                Precision: sdk.Int(592780),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(133439),
                                            },
                                        },
                                        TableName: sdk.String("ullam"),
                                    },
                                },
                                SchemaName: sdk.String("quasi"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("mollitia"),
                                                DataType: sdk.String("provident"),
                                                Encoding: sdk.String("possimus"),
                                                Length: sdk.Int(659177),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(402767),
                                                Precision: sdk.Int(397257),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(37565),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("repellat"),
                                                DataType: sdk.String("doloribus"),
                                                Encoding: sdk.String("ullam"),
                                                Length: sdk.Int(448143),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(721407),
                                                Precision: sdk.Int(937636),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(637583),
                                            },
                                        },
                                        TableName: sdk.String("laborum"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("modi"),
                                                DataType: sdk.String("voluptatibus"),
                                                Encoding: sdk.String("molestias"),
                                                Length: sdk.Int(889794),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(956933),
                                                Precision: sdk.Int(764562),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(113486),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("rerum"),
                                                DataType: sdk.String("tempora"),
                                                Encoding: sdk.String("quis"),
                                                Length: sdk.Int(82057),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(147685),
                                                Precision: sdk.Int(765271),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(62636),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("perferendis"),
                                                DataType: sdk.String("velit"),
                                                Encoding: sdk.String("aspernatur"),
                                                Length: sdk.Int(432281),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(260628),
                                                Precision: sdk.Int(521996),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(871083),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("impedit"),
                                                DataType: sdk.String("eos"),
                                                Encoding: sdk.String("sapiente"),
                                                Length: sdk.Int(433279),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(117320),
                                                Precision: sdk.Int(325118),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(107004),
                                            },
                                        },
                                        TableName: sdk.String("cupiditate"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("earum"),
                                                DataType: sdk.String("soluta"),
                                                Encoding: sdk.String("hic"),
                                                Length: sdk.Int(848151),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(52508),
                                                Precision: sdk.Int(935833),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(596211),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("maiores"),
                                                DataType: sdk.String("debitis"),
                                                Encoding: sdk.String("aliquid"),
                                                Length: sdk.Int(780931),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(380335),
                                                Precision: sdk.Int(211534),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(147808),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("cumque"),
                                                DataType: sdk.String("fuga"),
                                                Encoding: sdk.String("ratione"),
                                                Length: sdk.Int(656762),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(898760),
                                                Precision: sdk.Int(862063),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(8931),
                                            },
                                        },
                                        TableName: sdk.String("quasi"),
                                    },
                                },
                                SchemaName: sdk.String("et"),
                            },
                        },
                    },
                },
                SourceConnectionProfileName: sdk.String("ducimus"),
            },
            State: shared.StreamStateEnumFailed.ToPointer(),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("quasi"),
        Force: sdk.Bool(false),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("doloribus"),
        Parent: "nulla",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        RequestID: sdk.String("ipsa"),
        StreamID: sdk.String("tempora"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("molestiae"),
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
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("reiciendis"),
        Name: "Mr. Diane Stiedemann",
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        RequestID: sdk.String("ex"),
        UploadType: sdk.String("consectetur"),
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

## DatastreamProjectsLocationsStreamsFetchErrors

Use this method to fetch any errors associated with a stream.

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
    res, err := s.Projects.DatastreamProjectsLocationsStreamsFetchErrors(ctx, operations.DatastreamProjectsLocationsStreamsFetchErrorsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "sunt": "nostrum",
            "fugiat": "expedita",
            "aliquid": "officia",
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("eum"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        Stream: "ab",
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.DatastreamProjectsLocationsStreamsFetchErrorsSecurity{
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("ad"),
        Filter: sdk.String("deleniti"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("vitae"),
        OrderBy: sdk.String("repellendus"),
        PageSize: sdk.Int64(405036),
        PageToken: sdk.String("quo"),
        Parent: "ex",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("expedita"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("voluptatum"),
        Name: "Peter Prosacco",
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("architecto"),
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
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("alias"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("earum"),
        PageSize: sdk.Int64(404244),
        PageToken: sdk.String("sapiente"),
        Parent: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("asperiores"),
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

## DatastreamProjectsLocationsStreamsObjectsStartBackfillJob

Starts backfill job for the specified stream object.

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
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("totam"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("quibusdam"),
        Object: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("dolor"),
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

Stops the backfill job for the specified stream object.

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
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("consequatur"),
        Object: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("fugit"),
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
                            DatabaseName: sdk.String("quae"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("ipsam"),
                                            ColumnName: sdk.String("consequuntur"),
                                            DataType: sdk.String("ipsa"),
                                            Length: sdk.Int(559682),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(911198),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("impedit"),
                                            ColumnName: sdk.String("officiis"),
                                            DataType: sdk.String("esse"),
                                            Length: sdk.Int(897277),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(153369),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("veniam"),
                                            ColumnName: sdk.String("nesciunt"),
                                            DataType: sdk.String("expedita"),
                                            Length: sdk.Int(432984),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(426943),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("voluptatum"),
                                            ColumnName: sdk.String("magnam"),
                                            DataType: sdk.String("exercitationem"),
                                            Length: sdk.Int(70410),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(781480),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    TableName: sdk.String("autem"),
                                },
                            },
                        },
                        shared.MysqlDatabase{
                            DatabaseName: sdk.String("nobis"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("consequuntur"),
                                            ColumnName: sdk.String("voluptatem"),
                                            DataType: sdk.String("exercitationem"),
                                            Length: sdk.Int(895692),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(95619),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("nisi"),
                                            ColumnName: sdk.String("at"),
                                            DataType: sdk.String("vero"),
                                            Length: sdk.Int(667593),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(690785),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("sequi"),
                                            ColumnName: sdk.String("doloribus"),
                                            DataType: sdk.String("repudiandae"),
                                            Length: sdk.Int(759283),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(579681),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("nemo"),
                                            ColumnName: sdk.String("voluptate"),
                                            DataType: sdk.String("blanditiis"),
                                            Length: sdk.Int(642352),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(376389),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    TableName: sdk.String("numquam"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("quos"),
                                            ColumnName: sdk.String("eius"),
                                            DataType: sdk.String("aspernatur"),
                                            Length: sdk.Int(495970),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(200516),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("fuga"),
                                            ColumnName: sdk.String("laudantium"),
                                            DataType: sdk.String("incidunt"),
                                            Length: sdk.Int(97493),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(524380),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    TableName: sdk.String("fugiat"),
                                },
                            },
                        },
                        shared.MysqlDatabase{
                            DatabaseName: sdk.String("dicta"),
                            MysqlTables: []shared.MysqlTable{
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("consectetur"),
                                            ColumnName: sdk.String("aperiam"),
                                            DataType: sdk.String("cupiditate"),
                                            Length: sdk.Int(970732),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(746837),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    TableName: sdk.String("alias"),
                                },
                                shared.MysqlTable{
                                    MysqlColumns: []shared.MysqlColumn{
                                        shared.MysqlColumn{
                                            Collation: sdk.String("eos"),
                                            ColumnName: sdk.String("occaecati"),
                                            DataType: sdk.String("iste"),
                                            Length: sdk.Int(170099),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(81369),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("fuga"),
                                            ColumnName: sdk.String("accusamus"),
                                            DataType: sdk.String("voluptatibus"),
                                            Length: sdk.Int(719620),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(608593),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                        shared.MysqlColumn{
                                            Collation: sdk.String("delectus"),
                                            ColumnName: sdk.String("minima"),
                                            DataType: sdk.String("praesentium"),
                                            Length: sdk.Int(802692),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(300403),
                                            PrimaryKey: sdk.Bool(false),
                                        },
                                    },
                                    TableName: sdk.String("temporibus"),
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
                                            ColumnName: sdk.String("commodi"),
                                            DataType: sdk.String("totam"),
                                            Encoding: sdk.String("earum"),
                                            Length: sdk.Int(267207),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(722184),
                                            Precision: sdk.Int(877399),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(32901),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("ipsam"),
                                            DataType: sdk.String("vel"),
                                            Encoding: sdk.String("alias"),
                                            Length: sdk.Int(93894),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(247685),
                                            Precision: sdk.Int(978548),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(318233),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("sint"),
                                            DataType: sdk.String("nulla"),
                                            Encoding: sdk.String("deserunt"),
                                            Length: sdk.Int(458503),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(364463),
                                            Precision: sdk.Int(444587),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(667715),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("quis"),
                                            DataType: sdk.String("sint"),
                                            Encoding: sdk.String("accusamus"),
                                            Length: sdk.Int(774684),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(945027),
                                            Precision: sdk.Int(900103),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(991891),
                                        },
                                    },
                                    TableName: sdk.String("ex"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("debitis"),
                                            DataType: sdk.String("delectus"),
                                            Encoding: sdk.String("quae"),
                                            Length: sdk.Int(791880),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(685478),
                                            Precision: sdk.Int(675689),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(231070),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("velit"),
                                            DataType: sdk.String("atque"),
                                            Encoding: sdk.String("ipsum"),
                                            Length: sdk.Int(773035),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(166047),
                                            Precision: sdk.Int(746585),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(922757),
                                        },
                                    },
                                    TableName: sdk.String("nam"),
                                },
                            },
                            SchemaName: sdk.String("dolore"),
                        },
                        shared.OracleSchema{
                            OracleTables: []shared.OracleTable{
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("sequi"),
                                            DataType: sdk.String("dignissimos"),
                                            Encoding: sdk.String("neque"),
                                            Length: sdk.Int(778172),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(535468),
                                            Precision: sdk.Int(844235),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(437814),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("odit"),
                                            DataType: sdk.String("voluptatibus"),
                                            Encoding: sdk.String("vel"),
                                            Length: sdk.Int(300824),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(842855),
                                            Precision: sdk.Int(78969),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(818034),
                                        },
                                    },
                                    TableName: sdk.String("libero"),
                                },
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("voluptatibus"),
                                            DataType: sdk.String("quia"),
                                            Encoding: sdk.String("porro"),
                                            Length: sdk.Int(304198),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(247045),
                                            Precision: sdk.Int(75359),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(36561),
                                        },
                                    },
                                    TableName: sdk.String("vel"),
                                },
                            },
                            SchemaName: sdk.String("ea"),
                        },
                        shared.OracleSchema{
                            OracleTables: []shared.OracleTable{
                                shared.OracleTable{
                                    OracleColumns: []shared.OracleColumn{
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("excepturi"),
                                            DataType: sdk.String("eum"),
                                            Encoding: sdk.String("velit"),
                                            Length: sdk.Int(284086),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(596433),
                                            Precision: sdk.Int(935302),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(117525),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("impedit"),
                                            DataType: sdk.String("voluptatibus"),
                                            Encoding: sdk.String("iste"),
                                            Length: sdk.Int(932562),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(2677),
                                            Precision: sdk.Int(391797),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(931505),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("velit"),
                                            DataType: sdk.String("laborum"),
                                            Encoding: sdk.String("non"),
                                            Length: sdk.Int(224467),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(483394),
                                            Precision: sdk.Int(24753),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(39992),
                                        },
                                        shared.OracleColumn{
                                            ColumnName: sdk.String("consequatur"),
                                            DataType: sdk.String("officia"),
                                            Encoding: sdk.String("recusandae"),
                                            Length: sdk.Int(408303),
                                            Nullable: sdk.Bool(false),
                                            OrdinalPosition: sdk.Int(693153),
                                            Precision: sdk.Int(377406),
                                            PrimaryKey: sdk.Bool(false),
                                            Scale: sdk.Int(705148),
                                        },
                                    },
                                    TableName: sdk.String("placeat"),
                                },
                            },
                            SchemaName: sdk.String("perspiciatis"),
                        },
                    },
                },
            },
            BackfillNone: map[string]interface{}{
                "deleniti": "a",
                "voluptate": "ullam",
                "unde": "necessitatibus",
            },
            CustomerManagedEncryptionKey: sdk.String("animi"),
            DestinationConfig: &shared.DestinationConfig{
                DestinationConnectionProfileName: sdk.String("impedit"),
                GcsDestinationConfig: &shared.GcsDestinationConfig{
                    AvroFileFormat: map[string]interface{}{
                        "corporis": "est",
                        "error": "esse",
                    },
                    FileRotationInterval: sdk.String("labore"),
                    FileRotationMb: sdk.Int(85066),
                    GcsFileFormat: shared.GcsDestinationConfigGcsFileFormatEnumAvro.ToPointer(),
                    JSONFileFormat: &shared.JSONFileFormat{
                        Compression: shared.JSONFileFormatCompressionEnumJSONCompressionUnspecified.ToPointer(),
                        SchemaFileFormat: shared.JSONFileFormatSchemaFileFormatEnumSchemaFileFormatUnspecified.ToPointer(),
                    },
                    Path: sdk.String("inventore"),
                },
            },
            DisplayName: sdk.String("dolorem"),
            Labels: map[string]string{
                "qui": "iste",
                "ex": "nemo",
            },
            SourceConfig: &shared.SourceConfig{
                MysqlSourceConfig: &shared.MysqlSourceConfig{
                    Allowlist: &shared.MysqlRdbms{
                        MysqlDatabases: []shared.MysqlDatabase{
                            shared.MysqlDatabase{
                                DatabaseName: sdk.String("libero"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("odio"),
                                                ColumnName: sdk.String("fugit"),
                                                DataType: sdk.String("alias"),
                                                Length: sdk.Int(168042),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(425402),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quae"),
                                                ColumnName: sdk.String("quae"),
                                                DataType: sdk.String("modi"),
                                                Length: sdk.Int(208253),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(348357),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("itaque"),
                                                ColumnName: sdk.String("et"),
                                                DataType: sdk.String("ipsum"),
                                                Length: sdk.Int(602229),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(858338),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("distinctio"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quia"),
                                                ColumnName: sdk.String("quia"),
                                                DataType: sdk.String("nostrum"),
                                                Length: sdk.Int(605712),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(727250),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("dicta"),
                                                ColumnName: sdk.String("id"),
                                                DataType: sdk.String("libero"),
                                                Length: sdk.Int(854460),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(637462),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quos"),
                                                ColumnName: sdk.String("placeat"),
                                                DataType: sdk.String("sit"),
                                                Length: sdk.Int(479385),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(57320),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("voluptates"),
                                                ColumnName: sdk.String("inventore"),
                                                DataType: sdk.String("aperiam"),
                                                Length: sdk.Int(517137),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(292888),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("eligendi"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("voluptatem"),
                                                ColumnName: sdk.String("autem"),
                                                DataType: sdk.String("esse"),
                                                Length: sdk.Int(172951),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(824798),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("beatae"),
                                                ColumnName: sdk.String("est"),
                                                DataType: sdk.String("facere"),
                                                Length: sdk.Int(545918),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(473143),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("provident"),
                                                ColumnName: sdk.String("accusamus"),
                                                DataType: sdk.String("necessitatibus"),
                                                Length: sdk.Int(733289),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(575078),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("ea"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                DatabaseName: sdk.String("autem"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("laudantium"),
                                                ColumnName: sdk.String("corporis"),
                                                DataType: sdk.String("officiis"),
                                                Length: sdk.Int(972912),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(737279),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("at"),
                                                ColumnName: sdk.String("alias"),
                                                DataType: sdk.String("quia"),
                                                Length: sdk.Int(694158),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(684126),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("repudiandae"),
                                                ColumnName: sdk.String("accusantium"),
                                                DataType: sdk.String("expedita"),
                                                Length: sdk.Int(885208),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(177005),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("quibusdam"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("praesentium"),
                                                ColumnName: sdk.String("odit"),
                                                DataType: sdk.String("explicabo"),
                                                Length: sdk.Int(358995),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(621473),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("earum"),
                                                ColumnName: sdk.String("adipisci"),
                                                DataType: sdk.String("recusandae"),
                                                Length: sdk.Int(630871),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(282837),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("quidem"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                DatabaseName: sdk.String("quis"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("molestiae"),
                                                ColumnName: sdk.String("delectus"),
                                                DataType: sdk.String("cupiditate"),
                                                Length: sdk.Int(147801),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(253625),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("numquam"),
                                                ColumnName: sdk.String("nesciunt"),
                                                DataType: sdk.String("at"),
                                                Length: sdk.Int(637856),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(491892),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("optio"),
                                                ColumnName: sdk.String("necessitatibus"),
                                                DataType: sdk.String("corporis"),
                                                Length: sdk.Int(185518),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(708898),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("voluptatum"),
                                    },
                                },
                            },
                        },
                    },
                    Rejectlist: &shared.MysqlRdbms{
                        MysqlDatabases: []shared.MysqlDatabase{
                            shared.MysqlDatabase{
                                DatabaseName: sdk.String("minima"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("neque"),
                                                ColumnName: sdk.String("in"),
                                                DataType: sdk.String("minus"),
                                                Length: sdk.Int(433077),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(266408),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("corporis"),
                                                ColumnName: sdk.String("magnam"),
                                                DataType: sdk.String("voluptates"),
                                                Length: sdk.Int(978173),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(731744),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("aperiam"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("ratione"),
                                                ColumnName: sdk.String("labore"),
                                                DataType: sdk.String("totam"),
                                                Length: sdk.Int(577709),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(375994),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quo"),
                                                ColumnName: sdk.String("velit"),
                                                DataType: sdk.String("minus"),
                                                Length: sdk.Int(684553),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(344530),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("est"),
                                                ColumnName: sdk.String("impedit"),
                                                DataType: sdk.String("delectus"),
                                                Length: sdk.Int(735894),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(878601),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("odit"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("pariatur"),
                                                ColumnName: sdk.String("nemo"),
                                                DataType: sdk.String("reprehenderit"),
                                                Length: sdk.Int(45234),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(486410),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("minima"),
                                                ColumnName: sdk.String("in"),
                                                DataType: sdk.String("ducimus"),
                                                Length: sdk.Int(567846),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(172195),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("error"),
                                                ColumnName: sdk.String("veritatis"),
                                                DataType: sdk.String("ducimus"),
                                                Length: sdk.Int(452729),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(866789),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("itaque"),
                                                ColumnName: sdk.String("similique"),
                                                DataType: sdk.String("optio"),
                                                Length: sdk.Int(401428),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(311486),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("commodi"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("placeat"),
                                                ColumnName: sdk.String("quidem"),
                                                DataType: sdk.String("exercitationem"),
                                                Length: sdk.Int(463344),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(211455),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("modi"),
                                                ColumnName: sdk.String("ipsa"),
                                                DataType: sdk.String("sint"),
                                                Length: sdk.Int(876027),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(194901),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("repudiandae"),
                                                ColumnName: sdk.String("cum"),
                                                DataType: sdk.String("dicta"),
                                                Length: sdk.Int(936928),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(334474),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("animi"),
                                                ColumnName: sdk.String("dolores"),
                                                DataType: sdk.String("nam"),
                                                Length: sdk.Int(115898),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(164488),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("necessitatibus"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                DatabaseName: sdk.String("nobis"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("maiores"),
                                                ColumnName: sdk.String("veritatis"),
                                                DataType: sdk.String("quasi"),
                                                Length: sdk.Int(386447),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(863471),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("libero"),
                                                ColumnName: sdk.String("excepturi"),
                                                DataType: sdk.String("occaecati"),
                                                Length: sdk.Int(367917),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(306382),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("nostrum"),
                                    },
                                },
                            },
                            shared.MysqlDatabase{
                                DatabaseName: sdk.String("doloribus"),
                                MysqlTables: []shared.MysqlTable{
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("enim"),
                                                ColumnName: sdk.String("hic"),
                                                DataType: sdk.String("animi"),
                                                Length: sdk.Int(559774),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(517326),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("molestias"),
                                                ColumnName: sdk.String("odio"),
                                                DataType: sdk.String("eaque"),
                                                Length: sdk.Int(901163),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(104078),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quos"),
                                                ColumnName: sdk.String("iste"),
                                                DataType: sdk.String("assumenda"),
                                                Length: sdk.Int(731634),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(725574),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("velit"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("delectus"),
                                                ColumnName: sdk.String("impedit"),
                                                DataType: sdk.String("cum"),
                                                Length: sdk.Int(216870),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(238011),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("saepe"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("doloremque"),
                                                ColumnName: sdk.String("quis"),
                                                DataType: sdk.String("veniam"),
                                                Length: sdk.Int(727481),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(99733),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("cupiditate"),
                                                ColumnName: sdk.String("molestiae"),
                                                DataType: sdk.String("eligendi"),
                                                Length: sdk.Int(820023),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(251464),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("magnam"),
                                                ColumnName: sdk.String("itaque"),
                                                DataType: sdk.String("sed"),
                                                Length: sdk.Int(993002),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(330267),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("consequuntur"),
                                    },
                                    shared.MysqlTable{
                                        MysqlColumns: []shared.MysqlColumn{
                                            shared.MysqlColumn{
                                                Collation: sdk.String("laudantium"),
                                                ColumnName: sdk.String("odit"),
                                                DataType: sdk.String("pariatur"),
                                                Length: sdk.Int(227362),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(347698),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("ab"),
                                                ColumnName: sdk.String("velit"),
                                                DataType: sdk.String("facilis"),
                                                Length: sdk.Int(731065),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(395233),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("voluptatibus"),
                                                ColumnName: sdk.String("quaerat"),
                                                DataType: sdk.String("blanditiis"),
                                                Length: sdk.Int(718627),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(392430),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                            shared.MysqlColumn{
                                                Collation: sdk.String("quis"),
                                                ColumnName: sdk.String("nisi"),
                                                DataType: sdk.String("libero"),
                                                Length: sdk.Int(794507),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(815200),
                                                PrimaryKey: sdk.Bool(false),
                                            },
                                        },
                                        TableName: sdk.String("facilis"),
                                    },
                                },
                            },
                        },
                    },
                },
                OracleSourceConfig: &shared.OracleSourceConfig{
                    Allowlist: &shared.OracleRdbms{
                        OracleSchemas: []shared.OracleSchema{
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("voluptatibus"),
                                                DataType: sdk.String("consequuntur"),
                                                Encoding: sdk.String("debitis"),
                                                Length: sdk.Int(290841),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(700928),
                                                Precision: sdk.Int(179795),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(440777),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("nostrum"),
                                                DataType: sdk.String("neque"),
                                                Encoding: sdk.String("iusto"),
                                                Length: sdk.Int(664965),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(522176),
                                                Precision: sdk.Int(753890),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(853606),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("unde"),
                                                DataType: sdk.String("officiis"),
                                                Encoding: sdk.String("ducimus"),
                                                Length: sdk.Int(220104),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(118041),
                                                Precision: sdk.Int(622894),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(784731),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("vitae"),
                                                DataType: sdk.String("dignissimos"),
                                                Encoding: sdk.String("esse"),
                                                Length: sdk.Int(854115),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(322333),
                                                Precision: sdk.Int(134818),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(316501),
                                            },
                                        },
                                        TableName: sdk.String("delectus"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("dignissimos"),
                                                DataType: sdk.String("libero"),
                                                Encoding: sdk.String("illo"),
                                                Length: sdk.Int(69182),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(280114),
                                                Precision: sdk.Int(879174),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(902581),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("tempore"),
                                                DataType: sdk.String("veniam"),
                                                Encoding: sdk.String("eos"),
                                                Length: sdk.Int(970079),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(939161),
                                                Precision: sdk.Int(444121),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(506312),
                                            },
                                        },
                                        TableName: sdk.String("nemo"),
                                    },
                                },
                                SchemaName: sdk.String("repellat"),
                            },
                        },
                    },
                    DropLargeObjects: map[string]interface{}{
                        "sequi": "nihil",
                        "deleniti": "illo",
                        "labore": "assumenda",
                        "aliquam": "quisquam",
                    },
                    Rejectlist: &shared.OracleRdbms{
                        OracleSchemas: []shared.OracleSchema{
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("consequatur"),
                                                DataType: sdk.String("maxime"),
                                                Encoding: sdk.String("aspernatur"),
                                                Length: sdk.Int(723942),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(711991),
                                                Precision: sdk.Int(559174),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(590858),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("repudiandae"),
                                                DataType: sdk.String("rerum"),
                                                Encoding: sdk.String("dignissimos"),
                                                Length: sdk.Int(360934),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(873833),
                                                Precision: sdk.Int(629377),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(833982),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("iure"),
                                                DataType: sdk.String("dolorem"),
                                                Encoding: sdk.String("commodi"),
                                                Length: sdk.Int(771226),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(415033),
                                                Precision: sdk.Int(12171),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(32055),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("ad"),
                                                DataType: sdk.String("quae"),
                                                Encoding: sdk.String("amet"),
                                                Length: sdk.Int(849320),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(506863),
                                                Precision: sdk.Int(695526),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(736853),
                                            },
                                        },
                                        TableName: sdk.String("amet"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("dicta"),
                                                DataType: sdk.String("laudantium"),
                                                Encoding: sdk.String("doloremque"),
                                                Length: sdk.Int(938412),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(479707),
                                                Precision: sdk.Int(228646),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(587967),
                                            },
                                        },
                                        TableName: sdk.String("dolorum"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("provident"),
                                                DataType: sdk.String("repudiandae"),
                                                Encoding: sdk.String("consequatur"),
                                                Length: sdk.Int(366244),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(475826),
                                                Precision: sdk.Int(930840),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(708771),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("corrupti"),
                                                DataType: sdk.String("aperiam"),
                                                Encoding: sdk.String("sint"),
                                                Length: sdk.Int(879522),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(178635),
                                                Precision: sdk.Int(520081),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(115861),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("voluptatem"),
                                                DataType: sdk.String("velit"),
                                                Encoding: sdk.String("dolor"),
                                                Length: sdk.Int(124289),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(953676),
                                                Precision: sdk.Int(223291),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(582320),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("atque"),
                                                DataType: sdk.String("beatae"),
                                                Encoding: sdk.String("at"),
                                                Length: sdk.Int(287544),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(794988),
                                                Precision: sdk.Int(456704),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(32356),
                                            },
                                        },
                                        TableName: sdk.String("perferendis"),
                                    },
                                },
                                SchemaName: sdk.String("rerum"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("dignissimos"),
                                                DataType: sdk.String("repellat"),
                                                Encoding: sdk.String("velit"),
                                                Length: sdk.Int(784115),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(588639),
                                                Precision: sdk.Int(231382),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(753240),
                                            },
                                        },
                                        TableName: sdk.String("dignissimos"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("soluta"),
                                                DataType: sdk.String("natus"),
                                                Encoding: sdk.String("temporibus"),
                                                Length: sdk.Int(639622),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(228857),
                                                Precision: sdk.Int(948541),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(133949),
                                            },
                                        },
                                        TableName: sdk.String("quo"),
                                    },
                                },
                                SchemaName: sdk.String("itaque"),
                            },
                            shared.OracleSchema{
                                OracleTables: []shared.OracleTable{
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("dignissimos"),
                                                DataType: sdk.String("vero"),
                                                Encoding: sdk.String("qui"),
                                                Length: sdk.Int(232383),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(995816),
                                                Precision: sdk.Int(128696),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(129355),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("exercitationem"),
                                                DataType: sdk.String("nihil"),
                                                Encoding: sdk.String("non"),
                                                Length: sdk.Int(68093),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(72754),
                                                Precision: sdk.Int(943851),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(644479),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("delectus"),
                                                DataType: sdk.String("non"),
                                                Encoding: sdk.String("distinctio"),
                                                Length: sdk.Int(450224),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(349993),
                                                Precision: sdk.Int(288300),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(254382),
                                            },
                                        },
                                        TableName: sdk.String("repudiandae"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("in"),
                                                DataType: sdk.String("explicabo"),
                                                Encoding: sdk.String("accusamus"),
                                                Length: sdk.Int(525809),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(44016),
                                                Precision: sdk.Int(141817),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(535802),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("enim"),
                                                DataType: sdk.String("voluptate"),
                                                Encoding: sdk.String("similique"),
                                                Length: sdk.Int(326118),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(727544),
                                                Precision: sdk.Int(300189),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(24272),
                                            },
                                        },
                                        TableName: sdk.String("modi"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("nesciunt"),
                                                DataType: sdk.String("mollitia"),
                                                Encoding: sdk.String("dignissimos"),
                                                Length: sdk.Int(853246),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(345138),
                                                Precision: sdk.Int(475325),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(330600),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("reiciendis"),
                                                DataType: sdk.String("ab"),
                                                Encoding: sdk.String("modi"),
                                                Length: sdk.Int(13865),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(13508),
                                                Precision: sdk.Int(911657),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(483753),
                                            },
                                        },
                                        TableName: sdk.String("commodi"),
                                    },
                                    shared.OracleTable{
                                        OracleColumns: []shared.OracleColumn{
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("dolorum"),
                                                DataType: sdk.String("possimus"),
                                                Encoding: sdk.String("voluptate"),
                                                Length: sdk.Int(232772),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(200637),
                                                Precision: sdk.Int(310629),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(929476),
                                            },
                                            shared.OracleColumn{
                                                ColumnName: sdk.String("minus"),
                                                DataType: sdk.String("sunt"),
                                                Encoding: sdk.String("distinctio"),
                                                Length: sdk.Int(481375),
                                                Nullable: sdk.Bool(false),
                                                OrdinalPosition: sdk.Int(558051),
                                                Precision: sdk.Int(91728),
                                                PrimaryKey: sdk.Bool(false),
                                                Scale: sdk.Int(704948),
                                            },
                                        },
                                        TableName: sdk.String("amet"),
                                    },
                                },
                                SchemaName: sdk.String("autem"),
                            },
                        },
                    },
                },
                SourceConnectionProfileName: sdk.String("fuga"),
            },
            State: shared.StreamStateEnumStateUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("laudantium"),
        Force: sdk.Bool(false),
        Key: sdk.String("repellendus"),
        Name: "Brenda Bechtelar",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        RequestID: sdk.String("officia"),
        UpdateMask: sdk.String("sed"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("alias"),
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
