# Tables

### Available Operations

* [BigqueryTablesDelete](#bigquerytablesdelete) - Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
* [BigqueryTablesGet](#bigquerytablesget) - Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
* [BigqueryTablesGetIamPolicy](#bigquerytablesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [BigqueryTablesInsert](#bigquerytablesinsert) - Creates a new, empty table in the dataset.
* [BigqueryTablesList](#bigquerytableslist) - Lists all tables in the specified dataset. Requires the READER dataset role.
* [BigqueryTablesPatch](#bigquerytablespatch) - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
* [BigqueryTablesSetIamPolicy](#bigquerytablessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [BigqueryTablesTestIamPermissions](#bigquerytablestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [BigqueryTablesUpdate](#bigquerytablesupdate) - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.

## BigqueryTablesDelete

Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.

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
    res, err := s.Tables.BigqueryTablesDelete(ctx, operations.BigqueryTablesDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "sequi",
        Fields: sdk.String("quis"),
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "perspiciatis",
        QuotaUser: sdk.String("id"),
        TableID: "adipisci",
        UserIP: sdk.String("et"),
    }, operations.BigqueryTablesDeleteSecurity{
        Option1: &operations.BigqueryTablesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## BigqueryTablesGet

Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.

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
    res, err := s.Tables.BigqueryTablesGet(ctx, operations.BigqueryTablesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "consectetur",
        Fields: sdk.String("nemo"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quas",
        QuotaUser: sdk.String("optio"),
        SelectedFields: sdk.String("necessitatibus"),
        TableID: "minima",
        UserIP: sdk.String("numquam"),
        View: operations.BigqueryTablesGetViewEnumTableMetadataViewUnspecified.ToPointer(),
    }, operations.BigqueryTablesGetSecurity{
        Option1: &operations.BigqueryTablesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Table != nil {
        // handle response
    }
}
```

## BigqueryTablesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Tables.BigqueryTablesGetIamPolicy(ctx, operations.BigqueryTablesGetIamPolicyRequest{
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(660134),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("porro"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        Resource: "ratione",
        UserIP: sdk.String("vero"),
    }, operations.BigqueryTablesGetIamPolicySecurity{
        Option1: &operations.BigqueryTablesGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## BigqueryTablesInsert

Creates a new, empty table in the dataset.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tables.BigqueryTablesInsert(ctx, operations.BigqueryTablesInsertRequest{
        Table: &shared.Table{
            CloneDefinition: &shared.CloneDefinition{
                BaseTableReference: &shared.TableReference{
                    DatasetID: sdk.String("mollitia"),
                    ProjectID: sdk.String("sint"),
                    TableID: sdk.String("ducimus"),
                },
                CloneTime: types.MustTimeFromString("2022-12-21T21:54:19.913Z"),
            },
            Clustering: &shared.Clustering{
                Fields: []string{
                    "corporis",
                    "harum",
                },
            },
            CreationTime: sdk.String("error"),
            DefaultCollation: sdk.String("quod"),
            DefaultRoundingMode: sdk.String("asperiores"),
            Description: sdk.String("ea"),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KmsKeyName: sdk.String("neque"),
            },
            Etag: sdk.String("nam"),
            ExpirationTime: sdk.String("sed"),
            ExternalDataConfiguration: &shared.ExternalDataConfiguration{
                Autodetect: sdk.Bool(false),
                AvroOptions: &shared.AvroOptions{
                    UseAvroLogicalTypes: sdk.Bool(false),
                },
                BigtableOptions: &shared.BigtableOptions{
                    ColumnFamilies: []shared.BigtableColumnFamily{
                        shared.BigtableColumnFamily{
                            Columns: []shared.BigtableColumn{
                                shared.BigtableColumn{
                                    Encoding: sdk.String("sunt"),
                                    FieldName: sdk.String("quos"),
                                    OnlyReadLatest: sdk.Bool(false),
                                    QualifierEncoded: sdk.String("commodi"),
                                    QualifierString: sdk.String("id"),
                                    Type: sdk.String("nam"),
                                },
                                shared.BigtableColumn{
                                    Encoding: sdk.String("corporis"),
                                    FieldName: sdk.String("voluptates"),
                                    OnlyReadLatest: sdk.Bool(false),
                                    QualifierEncoded: sdk.String("amet"),
                                    QualifierString: sdk.String("laborum"),
                                    Type: sdk.String("alias"),
                                },
                            },
                            Encoding: sdk.String("eos"),
                            FamilyID: sdk.String("qui"),
                            OnlyReadLatest: sdk.Bool(false),
                            Type: sdk.String("autem"),
                        },
                    },
                    IgnoreUnspecifiedColumnFamilies: sdk.Bool(false),
                    ReadRowkeyAsString: sdk.Bool(false),
                },
                Compression: sdk.String("architecto"),
                ConnectionID: sdk.String("tempora"),
                CsvOptions: &shared.CsvOptions{
                    AllowJaggedRows: sdk.Bool(false),
                    AllowQuotedNewlines: sdk.Bool(false),
                    Encoding: sdk.String("velit"),
                    FieldDelimiter: sdk.String("ab"),
                    NullMarker: sdk.String("ad"),
                    PreserveASCIIControlCharacters: sdk.Bool(false),
                    Quote: sdk.String("assumenda"),
                    SkipLeadingRows: sdk.String("inventore"),
                },
                DecimalTargetTypes: []string{
                    "ex",
                    "totam",
                },
                GoogleSheetsOptions: &shared.GoogleSheetsOptions{
                    Range: sdk.String("magni"),
                    SkipLeadingRows: sdk.String("sint"),
                },
                HivePartitioningOptions: &shared.HivePartitioningOptions{
                    Fields: []string{
                        "repudiandae",
                        "voluptas",
                        "architecto",
                    },
                    Mode: sdk.String("officia"),
                    RequirePartitionFilter: sdk.Bool(false),
                    SourceURIPrefix: sdk.String("reiciendis"),
                },
                IgnoreUnknownValues: sdk.Bool(false),
                MaxBadRecords: sdk.Int(776155),
                MetadataCacheMode: sdk.String("in"),
                ObjectMetadata: sdk.String("veritatis"),
                ParquetOptions: &shared.ParquetOptions{
                    EnableListInference: sdk.Bool(false),
                    EnumAsString: sdk.Bool(false),
                },
                ReferenceFileSchemaURI: sdk.String("totam"),
                Schema: &shared.TableSchema{
                    Fields: []shared.TableFieldSchema{
                        shared.TableFieldSchema{
                            Categories: &shared.TableFieldSchemaCategories{
                                Names: []string{
                                    "voluptatibus",
                                    "dolores",
                                    "alias",
                                    "tempore",
                                },
                            },
                            Collation: sdk.String("esse"),
                            DefaultValueExpression: sdk.String("fuga"),
                            Description: sdk.String("nihil"),
                            Fields: []shared.TableFieldSchema{
                                shared.TableFieldSchema{},
                            },
                            MaxLength: sdk.String("possimus"),
                            Mode: sdk.String("delectus"),
                            Name: sdk.String("Ruth Sanford PhD"),
                            PolicyTags: &shared.TableFieldSchemaPolicyTags{
                                Names: []string{
                                    "aliquid",
                                    "ad",
                                },
                            },
                            Precision: sdk.String("reprehenderit"),
                            RoundingMode: sdk.String("placeat"),
                            Scale: sdk.String("quae"),
                            Type: sdk.String("ex"),
                        },
                        shared.TableFieldSchema{
                            Categories: &shared.TableFieldSchemaCategories{
                                Names: []string{
                                    "ab",
                                    "distinctio",
                                },
                            },
                            Collation: sdk.String("facilis"),
                            DefaultValueExpression: sdk.String("maiores"),
                            Description: sdk.String("aut"),
                            Fields: []shared.TableFieldSchema{
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                            },
                            MaxLength: sdk.String("veniam"),
                            Mode: sdk.String("fugit"),
                            Name: sdk.String("Frances Robel"),
                            PolicyTags: &shared.TableFieldSchemaPolicyTags{
                                Names: []string{
                                    "architecto",
                                },
                            },
                            Precision: sdk.String("repellendus"),
                            RoundingMode: sdk.String("assumenda"),
                            Scale: sdk.String("suscipit"),
                            Type: sdk.String("consequatur"),
                        },
                    },
                },
                SourceFormat: sdk.String("aliquid"),
                SourceUris: []string{
                    "quibusdam",
                    "beatae",
                    "soluta",
                    "sunt",
                },
            },
            FriendlyName: sdk.String("rem"),
            ID: sdk.String("272bc9c3-2216-497b-9880-fcbb2b93c15f"),
            Kind: sdk.String("eum"),
            Labels: map[string]string{
                "alias": "libero",
                "at": "quasi",
            },
            LastModifiedTime: sdk.String("nihil"),
            Location: sdk.String("blanditiis"),
            MaterializedView: &shared.MaterializedViewDefinition{
                AllowNonIncrementalDefinition: sdk.Bool(false),
                EnableRefresh: sdk.Bool(false),
                LastRefreshTime: sdk.String("numquam"),
                MaxStaleness: sdk.String("blanditiis"),
                Query: sdk.String("sequi"),
                RefreshIntervalMs: sdk.String("sunt"),
            },
            MaxStaleness: sdk.String("vel"),
            Model: &shared.ModelDefinition{
                ModelOptions: &shared.ModelDefinitionModelOptions{
                    Labels: []string{
                        "dolor",
                        "debitis",
                    },
                    LossType: sdk.String("necessitatibus"),
                    ModelType: sdk.String("harum"),
                },
                TrainingRuns: []shared.BqmlTrainingRun{
                    shared.BqmlTrainingRun{
                        IterationResults: []shared.BqmlIterationResult{
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("ex"),
                                EvalLoss: sdk.Float64(8782.89),
                                Index: sdk.Int(140783),
                                LearnRate: sdk.Float64(3102.85),
                                TrainingLoss: sdk.Float64(1188.61),
                            },
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("quisquam"),
                                EvalLoss: sdk.Float64(2377.31),
                                Index: sdk.Int(96538),
                                LearnRate: sdk.Float64(29.72),
                                TrainingLoss: sdk.Float64(5775.49),
                            },
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("perspiciatis"),
                                EvalLoss: sdk.Float64(5341.48),
                                Index: sdk.Int(222282),
                                LearnRate: sdk.Float64(4311.92),
                                TrainingLoss: sdk.Float64(4314.81),
                            },
                        },
                        StartTime: types.MustTimeFromString("2022-03-11T20:24:38.297Z"),
                        State: sdk.String("vel"),
                        TrainingOptions: &shared.BqmlTrainingRunTrainingOptions{
                            EarlyStop: sdk.Bool(false),
                            L1Reg: sdk.Float64(4157.82),
                            L2Reg: sdk.Float64(8442.83),
                            LearnRate: sdk.Float64(7651.01),
                            LearnRateStrategy: sdk.String("libero"),
                            LineSearchInitLearnRate: sdk.Float64(7121.09),
                            MaxIteration: sdk.String("reprehenderit"),
                            MinRelProgress: sdk.Float64(8616.31),
                            WarmStart: sdk.Bool(false),
                        },
                    },
                },
            },
            NumBytes: sdk.String("reiciendis"),
            NumLongTermBytes: sdk.String("aliquid"),
            NumPhysicalBytes: sdk.String("porro"),
            NumRows: sdk.String("soluta"),
            NumActiveLogicalBytes: sdk.String("aperiam"),
            NumActivePhysicalBytes: sdk.String("molestias"),
            NumLongTermLogicalBytes: sdk.String("nobis"),
            NumLongTermPhysicalBytes: sdk.String("totam"),
            NumPartitions: sdk.String("distinctio"),
            NumTimeTravelPhysicalBytes: sdk.String("modi"),
            NumTotalLogicalBytes: sdk.String("aperiam"),
            NumTotalPhysicalBytes: sdk.String("praesentium"),
            RangePartitioning: &shared.RangePartitioning{
                Field: sdk.String("recusandae"),
                Range: &shared.RangePartitioningRange{
                    End: sdk.String("eaque"),
                    Interval: sdk.String("nihil"),
                    Start: sdk.String("dicta"),
                },
            },
            RequirePartitionFilter: sdk.Bool(false),
            Schema: &shared.TableSchema{
                Fields: []shared.TableFieldSchema{
                    shared.TableFieldSchema{
                        Categories: &shared.TableFieldSchemaCategories{
                            Names: []string{
                                "in",
                                "magnam",
                            },
                        },
                        Collation: sdk.String("repellendus"),
                        DefaultValueExpression: sdk.String("saepe"),
                        Description: sdk.String("non"),
                        Fields: []shared.TableFieldSchema{
                            shared.TableFieldSchema{},
                            shared.TableFieldSchema{},
                            shared.TableFieldSchema{},
                            shared.TableFieldSchema{},
                        },
                        MaxLength: sdk.String("voluptates"),
                        Mode: sdk.String("vero"),
                        Name: sdk.String("Michelle Borer"),
                        PolicyTags: &shared.TableFieldSchemaPolicyTags{
                            Names: []string{
                                "praesentium",
                                "aperiam",
                            },
                        },
                        Precision: sdk.String("laborum"),
                        RoundingMode: sdk.String("dicta"),
                        Scale: sdk.String("doloremque"),
                        Type: sdk.String("minus"),
                    },
                },
            },
            SelfLink: sdk.String("eius"),
            SnapshotDefinition: &shared.SnapshotDefinition{
                BaseTableReference: &shared.TableReference{
                    DatasetID: sdk.String("odio"),
                    ProjectID: sdk.String("rerum"),
                    TableID: sdk.String("provident"),
                },
                SnapshotTime: types.MustTimeFromString("2022-12-24T13:47:29.541Z"),
            },
            StreamingBuffer: &shared.Streamingbuffer{
                EstimatedBytes: sdk.String("aliquam"),
                EstimatedRows: sdk.String("accusantium"),
                OldestEntryTime: sdk.String("possimus"),
            },
            TableReference: &shared.TableReference{
                DatasetID: sdk.String("vel"),
                ProjectID: sdk.String("minus"),
                TableID: sdk.String("blanditiis"),
            },
            TimePartitioning: &shared.TimePartitioning{
                ExpirationMs: sdk.String("soluta"),
                Field: sdk.String("quia"),
                RequirePartitionFilter: sdk.Bool(false),
                Type: sdk.String("similique"),
            },
            Type: sdk.String("ipsam"),
            View: &shared.ViewDefinition{
                Query: sdk.String("a"),
                UseExplicitColumnNames: sdk.Bool(false),
                UseLegacySQL: sdk.Bool(false),
                UserDefinedFunctionResources: []shared.UserDefinedFunctionResource{
                    shared.UserDefinedFunctionResource{
                        InlineCode: sdk.String("perferendis"),
                        ResourceURI: sdk.String("aspernatur"),
                    },
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "sed",
        Fields: sdk.String("sit"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "ut",
        QuotaUser: sdk.String("quae"),
        UserIP: sdk.String("dolore"),
    }, operations.BigqueryTablesInsertSecurity{
        Option1: &operations.BigqueryTablesInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Table != nil {
        // handle response
    }
}
```

## BigqueryTablesList

Lists all tables in the specified dataset. Requires the READER dataset role.

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
    res, err := s.Tables.BigqueryTablesList(ctx, operations.BigqueryTablesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "molestias",
        Fields: sdk.String("maiores"),
        Key: sdk.String("cupiditate"),
        MaxResults: sdk.Int64(44220),
        OauthToken: sdk.String("alias"),
        PageToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "iste",
        QuotaUser: sdk.String("earum"),
        UserIP: sdk.String("illum"),
    }, operations.BigqueryTablesListSecurity{
        Option1: &operations.BigqueryTablesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TableList != nil {
        // handle response
    }
}
```

## BigqueryTablesPatch

Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tables.BigqueryTablesPatch(ctx, operations.BigqueryTablesPatchRequest{
        Table: &shared.Table{
            CloneDefinition: &shared.CloneDefinition{
                BaseTableReference: &shared.TableReference{
                    DatasetID: sdk.String("consequuntur"),
                    ProjectID: sdk.String("occaecati"),
                    TableID: sdk.String("doloremque"),
                },
                CloneTime: types.MustTimeFromString("2022-07-17T15:08:35.584Z"),
            },
            Clustering: &shared.Clustering{
                Fields: []string{
                    "accusamus",
                    "quidem",
                    "aliquam",
                },
            },
            CreationTime: sdk.String("fuga"),
            DefaultCollation: sdk.String("itaque"),
            DefaultRoundingMode: sdk.String("iste"),
            Description: sdk.String("pariatur"),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KmsKeyName: sdk.String("suscipit"),
            },
            Etag: sdk.String("ut"),
            ExpirationTime: sdk.String("sunt"),
            ExternalDataConfiguration: &shared.ExternalDataConfiguration{
                Autodetect: sdk.Bool(false),
                AvroOptions: &shared.AvroOptions{
                    UseAvroLogicalTypes: sdk.Bool(false),
                },
                BigtableOptions: &shared.BigtableOptions{
                    ColumnFamilies: []shared.BigtableColumnFamily{
                        shared.BigtableColumnFamily{
                            Columns: []shared.BigtableColumn{
                                shared.BigtableColumn{
                                    Encoding: sdk.String("recusandae"),
                                    FieldName: sdk.String("iste"),
                                    OnlyReadLatest: sdk.Bool(false),
                                    QualifierEncoded: sdk.String("sunt"),
                                    QualifierString: sdk.String("corporis"),
                                    Type: sdk.String("quae"),
                                },
                            },
                            Encoding: sdk.String("alias"),
                            FamilyID: sdk.String("ratione"),
                            OnlyReadLatest: sdk.Bool(false),
                            Type: sdk.String("sed"),
                        },
                        shared.BigtableColumnFamily{
                            Columns: []shared.BigtableColumn{
                                shared.BigtableColumn{
                                    Encoding: sdk.String("rerum"),
                                    FieldName: sdk.String("eos"),
                                    OnlyReadLatest: sdk.Bool(false),
                                    QualifierEncoded: sdk.String("eligendi"),
                                    QualifierString: sdk.String("voluptatem"),
                                    Type: sdk.String("cupiditate"),
                                },
                            },
                            Encoding: sdk.String("distinctio"),
                            FamilyID: sdk.String("omnis"),
                            OnlyReadLatest: sdk.Bool(false),
                            Type: sdk.String("consequuntur"),
                        },
                    },
                    IgnoreUnspecifiedColumnFamilies: sdk.Bool(false),
                    ReadRowkeyAsString: sdk.Bool(false),
                },
                Compression: sdk.String("tempora"),
                ConnectionID: sdk.String("voluptate"),
                CsvOptions: &shared.CsvOptions{
                    AllowJaggedRows: sdk.Bool(false),
                    AllowQuotedNewlines: sdk.Bool(false),
                    Encoding: sdk.String("odio"),
                    FieldDelimiter: sdk.String("dicta"),
                    NullMarker: sdk.String("earum"),
                    PreserveASCIIControlCharacters: sdk.Bool(false),
                    Quote: sdk.String("nemo"),
                    SkipLeadingRows: sdk.String("laboriosam"),
                },
                DecimalTargetTypes: []string{
                    "iste",
                    "voluptates",
                },
                GoogleSheetsOptions: &shared.GoogleSheetsOptions{
                    Range: sdk.String("nemo"),
                    SkipLeadingRows: sdk.String("facilis"),
                },
                HivePartitioningOptions: &shared.HivePartitioningOptions{
                    Fields: []string{
                        "saepe",
                        "porro",
                    },
                    Mode: sdk.String("dignissimos"),
                    RequirePartitionFilter: sdk.Bool(false),
                    SourceURIPrefix: sdk.String("nisi"),
                },
                IgnoreUnknownValues: sdk.Bool(false),
                MaxBadRecords: sdk.Int(169341),
                MetadataCacheMode: sdk.String("iure"),
                ObjectMetadata: sdk.String("ea"),
                ParquetOptions: &shared.ParquetOptions{
                    EnableListInference: sdk.Bool(false),
                    EnumAsString: sdk.Bool(false),
                },
                ReferenceFileSchemaURI: sdk.String("labore"),
                Schema: &shared.TableSchema{
                    Fields: []shared.TableFieldSchema{
                        shared.TableFieldSchema{
                            Categories: &shared.TableFieldSchemaCategories{
                                Names: []string{
                                    "atque",
                                    "aliquam",
                                    "necessitatibus",
                                    "tempore",
                                },
                            },
                            Collation: sdk.String("provident"),
                            DefaultValueExpression: sdk.String("recusandae"),
                            Description: sdk.String("numquam"),
                            Fields: []shared.TableFieldSchema{
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                            },
                            MaxLength: sdk.String("a"),
                            Mode: sdk.String("at"),
                            Name: sdk.String("Kathy Kreiger"),
                            PolicyTags: &shared.TableFieldSchemaPolicyTags{
                                Names: []string{
                                    "expedita",
                                },
                            },
                            Precision: sdk.String("rem"),
                            RoundingMode: sdk.String("deleniti"),
                            Scale: sdk.String("repellat"),
                            Type: sdk.String("harum"),
                        },
                        shared.TableFieldSchema{
                            Categories: &shared.TableFieldSchemaCategories{
                                Names: []string{
                                    "iure",
                                    "nulla",
                                    "aliquid",
                                },
                            },
                            Collation: sdk.String("asperiores"),
                            DefaultValueExpression: sdk.String("similique"),
                            Description: sdk.String("veniam"),
                            Fields: []shared.TableFieldSchema{
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                            },
                            MaxLength: sdk.String("vel"),
                            Mode: sdk.String("earum"),
                            Name: sdk.String("Jake Renner"),
                            PolicyTags: &shared.TableFieldSchemaPolicyTags{
                                Names: []string{
                                    "qui",
                                },
                            },
                            Precision: sdk.String("asperiores"),
                            RoundingMode: sdk.String("blanditiis"),
                            Scale: sdk.String("nesciunt"),
                            Type: sdk.String("nam"),
                        },
                        shared.TableFieldSchema{
                            Categories: &shared.TableFieldSchemaCategories{
                                Names: []string{
                                    "eligendi",
                                },
                            },
                            Collation: sdk.String("animi"),
                            DefaultValueExpression: sdk.String("autem"),
                            Description: sdk.String("laborum"),
                            Fields: []shared.TableFieldSchema{
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                            },
                            MaxLength: sdk.String("voluptatibus"),
                            Mode: sdk.String("asperiores"),
                            Name: sdk.String("Miss Tim Huel"),
                            PolicyTags: &shared.TableFieldSchemaPolicyTags{
                                Names: []string{
                                    "placeat",
                                    "cumque",
                                    "officia",
                                },
                            },
                            Precision: sdk.String("occaecati"),
                            RoundingMode: sdk.String("nemo"),
                            Scale: sdk.String("laboriosam"),
                            Type: sdk.String("eaque"),
                        },
                    },
                },
                SourceFormat: sdk.String("fuga"),
                SourceUris: []string{
                    "adipisci",
                },
            },
            FriendlyName: sdk.String("occaecati"),
            ID: sdk.String("5918da1d-48e7-48e3-8f8e-1143da9308b2"),
            Kind: sdk.String("nihil"),
            Labels: map[string]string{
                "aut": "voluptatum",
                "animi": "reiciendis",
                "qui": "aspernatur",
            },
            LastModifiedTime: sdk.String("et"),
            Location: sdk.String("voluptatum"),
            MaterializedView: &shared.MaterializedViewDefinition{
                AllowNonIncrementalDefinition: sdk.Bool(false),
                EnableRefresh: sdk.Bool(false),
                LastRefreshTime: sdk.String("eius"),
                MaxStaleness: sdk.String("quaerat"),
                Query: sdk.String("amet"),
                RefreshIntervalMs: sdk.String("iste"),
            },
            MaxStaleness: sdk.String("libero"),
            Model: &shared.ModelDefinition{
                ModelOptions: &shared.ModelDefinitionModelOptions{
                    Labels: []string{
                        "illum",
                    },
                    LossType: sdk.String("recusandae"),
                    ModelType: sdk.String("deleniti"),
                },
                TrainingRuns: []shared.BqmlTrainingRun{
                    shared.BqmlTrainingRun{
                        IterationResults: []shared.BqmlIterationResult{
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("eum"),
                                EvalLoss: sdk.Float64(7540.98),
                                Index: sdk.Int(786325),
                                LearnRate: sdk.Float64(7620.26),
                                TrainingLoss: sdk.Float64(9075.19),
                            },
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("incidunt"),
                                EvalLoss: sdk.Float64(4939.74),
                                Index: sdk.Int(36836),
                                LearnRate: sdk.Float64(7712.89),
                                TrainingLoss: sdk.Float64(8551.06),
                            },
                        },
                        StartTime: types.MustTimeFromString("2022-11-30T13:46:32.934Z"),
                        State: sdk.String("non"),
                        TrainingOptions: &shared.BqmlTrainingRunTrainingOptions{
                            EarlyStop: sdk.Bool(false),
                            L1Reg: sdk.Float64(4423.58),
                            L2Reg: sdk.Float64(6929.91),
                            LearnRate: sdk.Float64(4308.75),
                            LearnRateStrategy: sdk.String("recusandae"),
                            LineSearchInitLearnRate: sdk.Float64(3798.05),
                            MaxIteration: sdk.String("dicta"),
                            MinRelProgress: sdk.Float64(3723.01),
                            WarmStart: sdk.Bool(false),
                        },
                    },
                    shared.BqmlTrainingRun{
                        IterationResults: []shared.BqmlIterationResult{
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("placeat"),
                                EvalLoss: sdk.Float64(9752.28),
                                Index: sdk.Int(55606),
                                LearnRate: sdk.Float64(912.36),
                                TrainingLoss: sdk.Float64(8425.82),
                            },
                        },
                        StartTime: types.MustTimeFromString("2022-02-15T23:55:02.753Z"),
                        State: sdk.String("voluptatum"),
                        TrainingOptions: &shared.BqmlTrainingRunTrainingOptions{
                            EarlyStop: sdk.Bool(false),
                            L1Reg: sdk.Float64(7572.73),
                            L2Reg: sdk.Float64(2244.11),
                            LearnRate: sdk.Float64(6354.79),
                            LearnRateStrategy: sdk.String("magnam"),
                            LineSearchInitLearnRate: sdk.Float64(7069.06),
                            MaxIteration: sdk.String("natus"),
                            MinRelProgress: sdk.Float64(6711.49),
                            WarmStart: sdk.Bool(false),
                        },
                    },
                },
            },
            NumBytes: sdk.String("exercitationem"),
            NumLongTermBytes: sdk.String("quidem"),
            NumPhysicalBytes: sdk.String("repellat"),
            NumRows: sdk.String("molestias"),
            NumActiveLogicalBytes: sdk.String("amet"),
            NumActivePhysicalBytes: sdk.String("veniam"),
            NumLongTermLogicalBytes: sdk.String("pariatur"),
            NumLongTermPhysicalBytes: sdk.String("voluptatibus"),
            NumPartitions: sdk.String("vero"),
            NumTimeTravelPhysicalBytes: sdk.String("provident"),
            NumTotalLogicalBytes: sdk.String("iure"),
            NumTotalPhysicalBytes: sdk.String("incidunt"),
            RangePartitioning: &shared.RangePartitioning{
                Field: sdk.String("repellat"),
                Range: &shared.RangePartitioningRange{
                    End: sdk.String("similique"),
                    Interval: sdk.String("ut"),
                    Start: sdk.String("tempore"),
                },
            },
            RequirePartitionFilter: sdk.Bool(false),
            Schema: &shared.TableSchema{
                Fields: []shared.TableFieldSchema{
                    shared.TableFieldSchema{
                        Categories: &shared.TableFieldSchemaCategories{
                            Names: []string{
                                "excepturi",
                                "placeat",
                                "consequatur",
                                "natus",
                            },
                        },
                        Collation: sdk.String("molestiae"),
                        DefaultValueExpression: sdk.String("accusamus"),
                        Description: sdk.String("temporibus"),
                        Fields: []shared.TableFieldSchema{
                            shared.TableFieldSchema{},
                            shared.TableFieldSchema{},
                            shared.TableFieldSchema{},
                        },
                        MaxLength: sdk.String("autem"),
                        Mode: sdk.String("fugit"),
                        Name: sdk.String("Megan Funk"),
                        PolicyTags: &shared.TableFieldSchemaPolicyTags{
                            Names: []string{
                                "id",
                            },
                        },
                        Precision: sdk.String("unde"),
                        RoundingMode: sdk.String("consequuntur"),
                        Scale: sdk.String("ratione"),
                        Type: sdk.String("quam"),
                    },
                },
            },
            SelfLink: sdk.String("recusandae"),
            SnapshotDefinition: &shared.SnapshotDefinition{
                BaseTableReference: &shared.TableReference{
                    DatasetID: sdk.String("iste"),
                    ProjectID: sdk.String("cupiditate"),
                    TableID: sdk.String("blanditiis"),
                },
                SnapshotTime: types.MustTimeFromString("2022-03-20T10:37:17.115Z"),
            },
            StreamingBuffer: &shared.Streamingbuffer{
                EstimatedBytes: sdk.String("quas"),
                EstimatedRows: sdk.String("consequatur"),
                OldestEntryTime: sdk.String("facilis"),
            },
            TableReference: &shared.TableReference{
                DatasetID: sdk.String("ut"),
                ProjectID: sdk.String("nihil"),
                TableID: sdk.String("sint"),
            },
            TimePartitioning: &shared.TimePartitioning{
                ExpirationMs: sdk.String("saepe"),
                Field: sdk.String("atque"),
                RequirePartitionFilter: sdk.Bool(false),
                Type: sdk.String("excepturi"),
            },
            Type: sdk.String("architecto"),
            View: &shared.ViewDefinition{
                Query: sdk.String("molestias"),
                UseExplicitColumnNames: sdk.Bool(false),
                UseLegacySQL: sdk.Bool(false),
                UserDefinedFunctionResources: []shared.UserDefinedFunctionResource{
                    shared.UserDefinedFunctionResource{
                        InlineCode: sdk.String("dolorem"),
                        ResourceURI: sdk.String("eligendi"),
                    },
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        AutodetectSchema: sdk.Bool(false),
        DatasetID: "veritatis",
        Fields: sdk.String("deleniti"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "rem",
        QuotaUser: sdk.String("facere"),
        TableID: "vel",
        UserIP: sdk.String("cupiditate"),
    }, operations.BigqueryTablesPatchSecurity{
        Option1: &operations.BigqueryTablesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Table != nil {
        // handle response
    }
}
```

## BigqueryTablesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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
    res, err := s.Tables.BigqueryTablesSetIamPolicy(ctx, operations.BigqueryTablesSetIamPolicyRequest{
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "rem",
                                    "cupiditate",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "tempora",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("animi"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "magni",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("reprehenderit"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "delectus",
                                    "similique",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ipsum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "facere",
                                    "esse",
                                    "tenetur",
                                    "ab",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ratione",
                                    "placeat",
                                    "est",
                                    "nam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("repellat"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "optio",
                                    "eos",
                                    "impedit",
                                    "minus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "numquam",
                                    "libero",
                                    "recusandae",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("aperiam"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("reiciendis"),
                            Expression: sdk.String("nisi"),
                            Location: sdk.String("voluptatum"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "vero",
                            "repellendus",
                            "facilis",
                        },
                        Role: sdk.String("consequuntur"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("earum"),
                            Expression: sdk.String("necessitatibus"),
                            Location: sdk.String("quam"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "itaque",
                            "alias",
                            "ea",
                        },
                        Role: sdk.String("excepturi"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("repellat"),
                            Expression: sdk.String("nam"),
                            Location: sdk.String("consectetur"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "pariatur",
                            "illum",
                            "odio",
                        },
                        Role: sdk.String("sit"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ut"),
                            Expression: sdk.String("sit"),
                            Location: sdk.String("corrupti"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "consequatur",
                            "fuga",
                            "dolorem",
                            "tenetur",
                        },
                        Role: sdk.String("maxime"),
                    },
                },
                Etag: sdk.String("in"),
                Version: sdk.Int(220414),
            },
            UpdateMask: sdk.String("animi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ullam"),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        Resource: "aliquam",
        UserIP: sdk.String("soluta"),
    }, operations.BigqueryTablesSetIamPolicySecurity{
        Option1: &operations.BigqueryTablesSetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## BigqueryTablesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Tables.BigqueryTablesTestIamPermissions(ctx, operations.BigqueryTablesTestIamPermissionsRequest{
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "ab",
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ut"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        Resource: "eius",
        UserIP: sdk.String("ratione"),
    }, operations.BigqueryTablesTestIamPermissionsSecurity{
        Option1: &operations.BigqueryTablesTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## BigqueryTablesUpdate

Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tables.BigqueryTablesUpdate(ctx, operations.BigqueryTablesUpdateRequest{
        Table: &shared.Table{
            CloneDefinition: &shared.CloneDefinition{
                BaseTableReference: &shared.TableReference{
                    DatasetID: sdk.String("error"),
                    ProjectID: sdk.String("maiores"),
                    TableID: sdk.String("mollitia"),
                },
                CloneTime: types.MustTimeFromString("2022-06-04T05:36:38.228Z"),
            },
            Clustering: &shared.Clustering{
                Fields: []string{
                    "in",
                    "est",
                    "eius",
                },
            },
            CreationTime: sdk.String("ducimus"),
            DefaultCollation: sdk.String("fugit"),
            DefaultRoundingMode: sdk.String("libero"),
            Description: sdk.String("esse"),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KmsKeyName: sdk.String("sit"),
            },
            Etag: sdk.String("iste"),
            ExpirationTime: sdk.String("dolorum"),
            ExternalDataConfiguration: &shared.ExternalDataConfiguration{
                Autodetect: sdk.Bool(false),
                AvroOptions: &shared.AvroOptions{
                    UseAvroLogicalTypes: sdk.Bool(false),
                },
                BigtableOptions: &shared.BigtableOptions{
                    ColumnFamilies: []shared.BigtableColumnFamily{
                        shared.BigtableColumnFamily{
                            Columns: []shared.BigtableColumn{
                                shared.BigtableColumn{
                                    Encoding: sdk.String("ipsum"),
                                    FieldName: sdk.String("accusamus"),
                                    OnlyReadLatest: sdk.Bool(false),
                                    QualifierEncoded: sdk.String("eos"),
                                    QualifierString: sdk.String("fugit"),
                                    Type: sdk.String("amet"),
                                },
                                shared.BigtableColumn{
                                    Encoding: sdk.String("voluptatem"),
                                    FieldName: sdk.String("dicta"),
                                    OnlyReadLatest: sdk.Bool(false),
                                    QualifierEncoded: sdk.String("quae"),
                                    QualifierString: sdk.String("autem"),
                                    Type: sdk.String("rem"),
                                },
                            },
                            Encoding: sdk.String("ad"),
                            FamilyID: sdk.String("ipsum"),
                            OnlyReadLatest: sdk.Bool(false),
                            Type: sdk.String("omnis"),
                        },
                    },
                    IgnoreUnspecifiedColumnFamilies: sdk.Bool(false),
                    ReadRowkeyAsString: sdk.Bool(false),
                },
                Compression: sdk.String("eligendi"),
                ConnectionID: sdk.String("saepe"),
                CsvOptions: &shared.CsvOptions{
                    AllowJaggedRows: sdk.Bool(false),
                    AllowQuotedNewlines: sdk.Bool(false),
                    Encoding: sdk.String("ipsa"),
                    FieldDelimiter: sdk.String("perspiciatis"),
                    NullMarker: sdk.String("consectetur"),
                    PreserveASCIIControlCharacters: sdk.Bool(false),
                    Quote: sdk.String("eos"),
                    SkipLeadingRows: sdk.String("repellendus"),
                },
                DecimalTargetTypes: []string{
                    "aperiam",
                },
                GoogleSheetsOptions: &shared.GoogleSheetsOptions{
                    Range: sdk.String("animi"),
                    SkipLeadingRows: sdk.String("quisquam"),
                },
                HivePartitioningOptions: &shared.HivePartitioningOptions{
                    Fields: []string{
                        "vitae",
                        "ad",
                        "quibusdam",
                        "praesentium",
                    },
                    Mode: sdk.String("porro"),
                    RequirePartitionFilter: sdk.Bool(false),
                    SourceURIPrefix: sdk.String("quisquam"),
                },
                IgnoreUnknownValues: sdk.Bool(false),
                MaxBadRecords: sdk.Int(218756),
                MetadataCacheMode: sdk.String("perferendis"),
                ObjectMetadata: sdk.String("ex"),
                ParquetOptions: &shared.ParquetOptions{
                    EnableListInference: sdk.Bool(false),
                    EnumAsString: sdk.Bool(false),
                },
                ReferenceFileSchemaURI: sdk.String("quidem"),
                Schema: &shared.TableSchema{
                    Fields: []shared.TableFieldSchema{
                        shared.TableFieldSchema{
                            Categories: &shared.TableFieldSchemaCategories{
                                Names: []string{
                                    "nisi",
                                    "libero",
                                    "dolorem",
                                },
                            },
                            Collation: sdk.String("at"),
                            DefaultValueExpression: sdk.String("amet"),
                            Description: sdk.String("ducimus"),
                            Fields: []shared.TableFieldSchema{
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                            },
                            MaxLength: sdk.String("fugiat"),
                            Mode: sdk.String("sed"),
                            Name: sdk.String("Dr. Debbie Murray"),
                            PolicyTags: &shared.TableFieldSchemaPolicyTags{
                                Names: []string{
                                    "accusantium",
                                    "nam",
                                },
                            },
                            Precision: sdk.String("rerum"),
                            RoundingMode: sdk.String("dolor"),
                            Scale: sdk.String("ex"),
                            Type: sdk.String("voluptatibus"),
                        },
                        shared.TableFieldSchema{
                            Categories: &shared.TableFieldSchemaCategories{
                                Names: []string{
                                    "reprehenderit",
                                    "odio",
                                },
                            },
                            Collation: sdk.String("dolorum"),
                            DefaultValueExpression: sdk.String("eius"),
                            Description: sdk.String("praesentium"),
                            Fields: []shared.TableFieldSchema{
                                shared.TableFieldSchema{},
                                shared.TableFieldSchema{},
                            },
                            MaxLength: sdk.String("inventore"),
                            Mode: sdk.String("provident"),
                            Name: sdk.String("Norman Flatley"),
                            PolicyTags: &shared.TableFieldSchemaPolicyTags{
                                Names: []string{
                                    "voluptatem",
                                    "odit",
                                    "quas",
                                },
                            },
                            Precision: sdk.String("aliquam"),
                            RoundingMode: sdk.String("deleniti"),
                            Scale: sdk.String("quos"),
                            Type: sdk.String("qui"),
                        },
                    },
                },
                SourceFormat: sdk.String("ex"),
                SourceUris: []string{
                    "distinctio",
                    "aperiam",
                    "consectetur",
                },
            },
            FriendlyName: sdk.String("porro"),
            ID: sdk.String("7fd225e4-7871-4a88-ad72-a2d4af4158ac"),
            Kind: sdk.String("magni"),
            Labels: map[string]string{
                "doloremque": "sapiente",
                "sit": "repellat",
                "nemo": "quos",
                "optio": "adipisci",
            },
            LastModifiedTime: sdk.String("libero"),
            Location: sdk.String("totam"),
            MaterializedView: &shared.MaterializedViewDefinition{
                AllowNonIncrementalDefinition: sdk.Bool(false),
                EnableRefresh: sdk.Bool(false),
                LastRefreshTime: sdk.String("in"),
                MaxStaleness: sdk.String("tempore"),
                Query: sdk.String("ut"),
                RefreshIntervalMs: sdk.String("molestiae"),
            },
            MaxStaleness: sdk.String("eaque"),
            Model: &shared.ModelDefinition{
                ModelOptions: &shared.ModelDefinitionModelOptions{
                    Labels: []string{
                        "aut",
                        "possimus",
                    },
                    LossType: sdk.String("aut"),
                    ModelType: sdk.String("assumenda"),
                },
                TrainingRuns: []shared.BqmlTrainingRun{
                    shared.BqmlTrainingRun{
                        IterationResults: []shared.BqmlIterationResult{
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("necessitatibus"),
                                EvalLoss: sdk.Float64(6015.6),
                                Index: sdk.Int(855065),
                                LearnRate: sdk.Float64(5135.34),
                                TrainingLoss: sdk.Float64(1765.2),
                            },
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("porro"),
                                EvalLoss: sdk.Float64(3412.24),
                                Index: sdk.Int(887079),
                                LearnRate: sdk.Float64(2382.66),
                                TrainingLoss: sdk.Float64(20.11),
                            },
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("nisi"),
                                EvalLoss: sdk.Float64(9736.27),
                                Index: sdk.Int(360695),
                                LearnRate: sdk.Float64(3441.21),
                                TrainingLoss: sdk.Float64(4741.9),
                            },
                        },
                        StartTime: types.MustTimeFromString("2022-01-07T14:22:07.476Z"),
                        State: sdk.String("nemo"),
                        TrainingOptions: &shared.BqmlTrainingRunTrainingOptions{
                            EarlyStop: sdk.Bool(false),
                            L1Reg: sdk.Float64(7870.52),
                            L2Reg: sdk.Float64(8443.64),
                            LearnRate: sdk.Float64(9167.97),
                            LearnRateStrategy: sdk.String("cum"),
                            LineSearchInitLearnRate: sdk.Float64(57.18),
                            MaxIteration: sdk.String("eos"),
                            MinRelProgress: sdk.Float64(5185.23),
                            WarmStart: sdk.Bool(false),
                        },
                    },
                    shared.BqmlTrainingRun{
                        IterationResults: []shared.BqmlIterationResult{
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("pariatur"),
                                EvalLoss: sdk.Float64(27.26),
                                Index: sdk.Int(715120),
                                LearnRate: sdk.Float64(8031.14),
                                TrainingLoss: sdk.Float64(3028.92),
                            },
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("adipisci"),
                                EvalLoss: sdk.Float64(6889.3),
                                Index: sdk.Int(83016),
                                LearnRate: sdk.Float64(5572.63),
                                TrainingLoss: sdk.Float64(6607.69),
                            },
                        },
                        StartTime: types.MustTimeFromString("2022-07-25T01:26:41.179Z"),
                        State: sdk.String("molestiae"),
                        TrainingOptions: &shared.BqmlTrainingRunTrainingOptions{
                            EarlyStop: sdk.Bool(false),
                            L1Reg: sdk.Float64(5490.08),
                            L2Reg: sdk.Float64(9580.48),
                            LearnRate: sdk.Float64(1612.05),
                            LearnRateStrategy: sdk.String("asperiores"),
                            LineSearchInitLearnRate: sdk.Float64(7901.09),
                            MaxIteration: sdk.String("maiores"),
                            MinRelProgress: sdk.Float64(9819.74),
                            WarmStart: sdk.Bool(false),
                        },
                    },
                    shared.BqmlTrainingRun{
                        IterationResults: []shared.BqmlIterationResult{
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("beatae"),
                                EvalLoss: sdk.Float64(8278.89),
                                Index: sdk.Int(841413),
                                LearnRate: sdk.Float64(9418.35),
                                TrainingLoss: sdk.Float64(4897.9),
                            },
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("vero"),
                                EvalLoss: sdk.Float64(514.1),
                                Index: sdk.Int(534764),
                                LearnRate: sdk.Float64(5213.08),
                                TrainingLoss: sdk.Float64(9956.63),
                            },
                            shared.BqmlIterationResult{
                                DurationMs: sdk.String("iusto"),
                                EvalLoss: sdk.Float64(2892.95),
                                Index: sdk.Int(891413),
                                LearnRate: sdk.Float64(9630.72),
                                TrainingLoss: sdk.Float64(3403.92),
                            },
                        },
                        StartTime: types.MustTimeFromString("2022-03-30T12:22:06.891Z"),
                        State: sdk.String("sint"),
                        TrainingOptions: &shared.BqmlTrainingRunTrainingOptions{
                            EarlyStop: sdk.Bool(false),
                            L1Reg: sdk.Float64(1323.06),
                            L2Reg: sdk.Float64(689.43),
                            LearnRate: sdk.Float64(3885.03),
                            LearnRateStrategy: sdk.String("vero"),
                            LineSearchInitLearnRate: sdk.Float64(5393.59),
                            MaxIteration: sdk.String("unde"),
                            MinRelProgress: sdk.Float64(1815.22),
                            WarmStart: sdk.Bool(false),
                        },
                    },
                },
            },
            NumBytes: sdk.String("aliquid"),
            NumLongTermBytes: sdk.String("sequi"),
            NumPhysicalBytes: sdk.String("quae"),
            NumRows: sdk.String("velit"),
            NumActiveLogicalBytes: sdk.String("libero"),
            NumActivePhysicalBytes: sdk.String("soluta"),
            NumLongTermLogicalBytes: sdk.String("eum"),
            NumLongTermPhysicalBytes: sdk.String("hic"),
            NumPartitions: sdk.String("quo"),
            NumTimeTravelPhysicalBytes: sdk.String("explicabo"),
            NumTotalLogicalBytes: sdk.String("quo"),
            NumTotalPhysicalBytes: sdk.String("corrupti"),
            RangePartitioning: &shared.RangePartitioning{
                Field: sdk.String("illum"),
                Range: &shared.RangePartitioningRange{
                    End: sdk.String("fugit"),
                    Interval: sdk.String("reprehenderit"),
                    Start: sdk.String("eaque"),
                },
            },
            RequirePartitionFilter: sdk.Bool(false),
            Schema: &shared.TableSchema{
                Fields: []shared.TableFieldSchema{
                    shared.TableFieldSchema{
                        Categories: &shared.TableFieldSchemaCategories{
                            Names: []string{
                                "unde",
                            },
                        },
                        Collation: sdk.String("eum"),
                        DefaultValueExpression: sdk.String("quidem"),
                        Description: sdk.String("vel"),
                        Fields: []shared.TableFieldSchema{
                            shared.TableFieldSchema{},
                            shared.TableFieldSchema{},
                        },
                        MaxLength: sdk.String("id"),
                        Mode: sdk.String("fugiat"),
                        Name: sdk.String("Kelley Fay PhD"),
                        PolicyTags: &shared.TableFieldSchemaPolicyTags{
                            Names: []string{
                                "fugiat",
                                "ipsum",
                                "libero",
                            },
                        },
                        Precision: sdk.String("voluptas"),
                        RoundingMode: sdk.String("aliquid"),
                        Scale: sdk.String("perferendis"),
                        Type: sdk.String("nesciunt"),
                    },
                },
            },
            SelfLink: sdk.String("non"),
            SnapshotDefinition: &shared.SnapshotDefinition{
                BaseTableReference: &shared.TableReference{
                    DatasetID: sdk.String("quaerat"),
                    ProjectID: sdk.String("mollitia"),
                    TableID: sdk.String("dicta"),
                },
                SnapshotTime: types.MustTimeFromString("2022-05-04T20:08:37.824Z"),
            },
            StreamingBuffer: &shared.Streamingbuffer{
                EstimatedBytes: sdk.String("id"),
                EstimatedRows: sdk.String("ab"),
                OldestEntryTime: sdk.String("nulla"),
            },
            TableReference: &shared.TableReference{
                DatasetID: sdk.String("ipsam"),
                ProjectID: sdk.String("at"),
                TableID: sdk.String("magni"),
            },
            TimePartitioning: &shared.TimePartitioning{
                ExpirationMs: sdk.String("quia"),
                Field: sdk.String("modi"),
                RequirePartitionFilter: sdk.Bool(false),
                Type: sdk.String("nihil"),
            },
            Type: sdk.String("assumenda"),
            View: &shared.ViewDefinition{
                Query: sdk.String("debitis"),
                UseExplicitColumnNames: sdk.Bool(false),
                UseLegacySQL: sdk.Bool(false),
                UserDefinedFunctionResources: []shared.UserDefinedFunctionResource{
                    shared.UserDefinedFunctionResource{
                        InlineCode: sdk.String("libero"),
                        ResourceURI: sdk.String("dolorem"),
                    },
                    shared.UserDefinedFunctionResource{
                        InlineCode: sdk.String("pariatur"),
                        ResourceURI: sdk.String("labore"),
                    },
                    shared.UserDefinedFunctionResource{
                        InlineCode: sdk.String("laboriosam"),
                        ResourceURI: sdk.String("quasi"),
                    },
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        AutodetectSchema: sdk.Bool(false),
        DatasetID: "ducimus",
        Fields: sdk.String("eaque"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "eum",
        QuotaUser: sdk.String("quos"),
        TableID: "est",
        UserIP: sdk.String("perspiciatis"),
    }, operations.BigqueryTablesUpdateSecurity{
        Option1: &operations.BigqueryTablesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Table != nil {
        // handle response
    }
}
```
