# Settings

### Available Operations

* [CloudsearchSettingsDatasourcesCreate](#cloudsearchsettingsdatasourcescreate) - Creates a datasource. **Note:** This API requires an admin account to execute.
* [CloudsearchSettingsDatasourcesList](#cloudsearchsettingsdatasourceslist) - Lists datasources. **Note:** This API requires an admin account to execute.
* [CloudsearchSettingsGetCustomer](#cloudsearchsettingsgetcustomer) - Get customer settings. **Note:** This API requires an admin account to execute.
* [CloudsearchSettingsSearchapplicationsCreate](#cloudsearchsettingssearchapplicationscreate) - Creates a search application. **Note:** This API requires an admin account to execute.
* [CloudsearchSettingsSearchapplicationsDelete](#cloudsearchsettingssearchapplicationsdelete) - Deletes a search application. **Note:** This API requires an admin account to execute.
* [CloudsearchSettingsSearchapplicationsGet](#cloudsearchsettingssearchapplicationsget) - Gets the specified search application. **Note:** This API requires an admin account to execute.
* [CloudsearchSettingsSearchapplicationsList](#cloudsearchsettingssearchapplicationslist) - Lists all search applications. **Note:** This API requires an admin account to execute.
* [CloudsearchSettingsSearchapplicationsPatch](#cloudsearchsettingssearchapplicationspatch) - Updates a search application. **Note:** This API requires an admin account to execute.
* [CloudsearchSettingsSearchapplicationsReset](#cloudsearchsettingssearchapplicationsreset) - Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
* [CloudsearchSettingsSearchapplicationsUpdate](#cloudsearchsettingssearchapplicationsupdate) - Updates a search application. **Note:** This API requires an admin account to execute.
* [CloudsearchSettingsUpdateCustomer](#cloudsearchsettingsupdatecustomer) - Update customer settings. **Note:** This API requires an admin account to execute.

## CloudsearchSettingsDatasourcesCreate

Creates a datasource. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsDatasourcesCreate(ctx, operations.CloudsearchSettingsDatasourcesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DataSource: &shared.DataSource{
            DisableModifications: sdk.Bool(false),
            DisableServing: sdk.Bool(false),
            DisplayName: sdk.String("velit"),
            IndexingServiceAccounts: []string{
                "est",
                "recusandae",
                "totam",
            },
            ItemsVisibility: []shared.GSuitePrincipal{
                shared.GSuitePrincipal{
                    GsuiteDomain: sdk.Bool(false),
                    GsuiteGroupEmail: sdk.String("vel"),
                    GsuiteUserEmail: sdk.String("ducimus"),
                },
                shared.GSuitePrincipal{
                    GsuiteDomain: sdk.Bool(false),
                    GsuiteGroupEmail: sdk.String("quos"),
                    GsuiteUserEmail: sdk.String("vel"),
                },
                shared.GSuitePrincipal{
                    GsuiteDomain: sdk.Bool(false),
                    GsuiteGroupEmail: sdk.String("labore"),
                    GsuiteUserEmail: sdk.String("possimus"),
                },
                shared.GSuitePrincipal{
                    GsuiteDomain: sdk.Bool(false),
                    GsuiteGroupEmail: sdk.String("facilis"),
                    GsuiteUserEmail: sdk.String("cum"),
                },
            },
            Name: sdk.String("Pearl Hessel"),
            OperationIds: []string{
                "recusandae",
                "aliquid",
            },
            ReturnThumbnailUrls: sdk.Bool(false),
            ShortName: sdk.String("aperiam"),
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.CloudsearchSettingsDatasourcesCreateSecurity{
        Option1: &operations.CloudsearchSettingsDatasourcesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchSettingsDatasourcesList

Lists datasources. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsDatasourcesList(ctx, operations.CloudsearchSettingsDatasourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("dolore"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("asperiores"),
        PageSize: sdk.Int64(241545),
        PageToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.CloudsearchSettingsDatasourcesListSecurity{
        Option1: &operations.CloudsearchSettingsDatasourcesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataSourceResponse != nil {
        // handle response
    }
}
```

## CloudsearchSettingsGetCustomer

Get customer settings. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsGetCustomer(ctx, operations.CloudsearchSettingsGetCustomerRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("harum"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.CloudsearchSettingsGetCustomerSecurity{
        Option1: &operations.CloudsearchSettingsGetCustomerSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerSettings != nil {
        // handle response
    }
}
```

## CloudsearchSettingsSearchapplicationsCreate

Creates a search application. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsSearchapplicationsCreate(ctx, operations.CloudsearchSettingsSearchapplicationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchApplicationInput: &shared.SearchApplicationInput{
            DataSourceRestrictions: []shared.DataSourceRestriction{
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumAnd.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("voluptas"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(374296),
                                            Month: sdk.Int(324405),
                                            Year: sdk.Int(748789),
                                        },
                                        DoubleValue: sdk.Float64(6801.16),
                                        IntegerValue: sdk.String("adipisci"),
                                        StringValue: sdk.String("minus"),
                                        TimestampValue: sdk.String("dolores"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("blanditiis"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("aliquam"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(885963),
                                            Month: sdk.Int(839189),
                                            Year: sdk.Int(351870),
                                        },
                                        DoubleValue: sdk.Float64(2377.42),
                                        IntegerValue: sdk.String("cum"),
                                        StringValue: sdk.String("blanditiis"),
                                        TimestampValue: sdk.String("quas"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("hic"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Molly Lowe"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleKeep.ToPointer(),
                    },
                },
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumNot.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("rerum"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(148829),
                                            Month: sdk.Int(967966),
                                            Year: sdk.Int(131852),
                                        },
                                        DoubleValue: sdk.Float64(9944.01),
                                        IntegerValue: sdk.String("facilis"),
                                        StringValue: sdk.String("voluptate"),
                                        TimestampValue: sdk.String("expedita"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("ab"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("laborum"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(152354),
                                            Month: sdk.Int(447516),
                                            Year: sdk.Int(417486),
                                        },
                                        DoubleValue: sdk.Float64(6960.77),
                                        IntegerValue: sdk.String("explicabo"),
                                        StringValue: sdk.String("voluptas"),
                                        TimestampValue: sdk.String("unde"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("architecto"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Dr. Dixie Tremblay V"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleKeep.ToPointer(),
                    },
                },
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumAnd.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("eius"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(896762),
                                            Month: sdk.Int(215529),
                                            Year: sdk.Int(406733),
                                        },
                                        DoubleValue: sdk.Float64(5799.12),
                                        IntegerValue: sdk.String("quos"),
                                        StringValue: sdk.String("voluptatibus"),
                                        TimestampValue: sdk.String("tempora"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("tempora"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("ex"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(25497),
                                            Month: sdk.Int(248413),
                                            Year: sdk.Int(888044),
                                        },
                                        DoubleValue: sdk.Float64(5058.66),
                                        IntegerValue: sdk.String("facilis"),
                                        StringValue: sdk.String("quaerat"),
                                        TimestampValue: sdk.String("incidunt"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("ipsam"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Ian Balistreri"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleDrive.ToPointer(),
                    },
                },
            },
            DefaultFacetOptions: []shared.FacetOptions{
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "reiciendis",
                            "nulla",
                            "magni",
                            "aperiam",
                        },
                    },
                    NumFacetBuckets: sdk.Int(901483),
                    ObjectType: sdk.String("numquam"),
                    OperatorName: sdk.String("veniam"),
                    SourceName: sdk.String("in"),
                },
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "beatae",
                            "laudantium",
                            "exercitationem",
                            "praesentium",
                        },
                    },
                    NumFacetBuckets: sdk.Int(740098),
                    ObjectType: sdk.String("laboriosam"),
                    OperatorName: sdk.String("dolorum"),
                    SourceName: sdk.String("voluptatum"),
                },
            },
            DefaultSortOptions: &shared.SortOptions{
                OperatorName: sdk.String("error"),
                SortOrder: shared.SortOptionsSortOrderEnumDescending.ToPointer(),
            },
            DisplayName: sdk.String("expedita"),
            EnableAuditLog: sdk.Bool(false),
            Name: sdk.String("Tony Pagac"),
            QueryInterpretationConfig: &shared.QueryInterpretationConfig{
                ForceDisableSupplementalResults: sdk.Bool(false),
                ForceVerbatimMode: sdk.Bool(false),
            },
            ReturnResultThumbnailUrls: sdk.Bool(false),
            ScoringConfig: &shared.ScoringConfig{
                DisableFreshness: sdk.Bool(false),
                DisablePersonalization: sdk.Bool(false),
            },
            SourceConfig: []shared.SourceConfig{
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(548361),
                        NumSuggestions: sdk.Int(879235),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumDefault.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Louis Grady V"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleGroups.ToPointer(),
                    },
                },
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(299643),
                        NumSuggestions: sdk.Int(7884),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumLow.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Karen Lehner"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleDrive.ToPointer(),
                    },
                },
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(89494),
                        NumSuggestions: sdk.Int(502710),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumLow.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Karen Kautzer"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleSites.ToPointer(),
                    },
                },
            },
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("labore"),
    }, operations.CloudsearchSettingsSearchapplicationsCreateSecurity{
        Option1: &operations.CloudsearchSettingsSearchapplicationsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchSettingsSearchapplicationsDelete

Deletes a search application. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsSearchapplicationsDelete(ctx, operations.CloudsearchSettingsSearchapplicationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nam"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("laboriosam"),
        Name: "Grace O'Connell",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.CloudsearchSettingsSearchapplicationsDeleteSecurity{
        Option1: &operations.CloudsearchSettingsSearchapplicationsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchSettingsSearchapplicationsGet

Gets the specified search application. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsSearchapplicationsGet(ctx, operations.CloudsearchSettingsSearchapplicationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("facere"),
        Name: "Max O'Connell DDS",
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.CloudsearchSettingsSearchapplicationsGetSecurity{
        Option1: &operations.CloudsearchSettingsSearchapplicationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchApplication != nil {
        // handle response
    }
}
```

## CloudsearchSettingsSearchapplicationsList

Lists all search applications. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsSearchapplicationsList(ctx, operations.CloudsearchSettingsSearchapplicationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quidem"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("maxime"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("esse"),
        PageSize: sdk.Int64(227759),
        PageToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("error"),
    }, operations.CloudsearchSettingsSearchapplicationsListSecurity{
        Option1: &operations.CloudsearchSettingsSearchapplicationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSearchApplicationsResponse != nil {
        // handle response
    }
}
```

## CloudsearchSettingsSearchapplicationsPatch

Updates a search application. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsSearchapplicationsPatch(ctx, operations.CloudsearchSettingsSearchapplicationsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchApplicationInput: &shared.SearchApplicationInput{
            DataSourceRestrictions: []shared.DataSourceRestriction{
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("aspernatur"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(404425),
                                            Month: sdk.Int(980581),
                                            Year: sdk.Int(544647),
                                        },
                                        DoubleValue: sdk.Float64(8717.86),
                                        IntegerValue: sdk.String("error"),
                                        StringValue: sdk.String("blanditiis"),
                                        TimestampValue: sdk.String("suscipit"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("repudiandae"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("sunt"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(923306),
                                            Month: sdk.Int(680697),
                                            Year: sdk.Int(829898),
                                        },
                                        DoubleValue: sdk.Float64(2871.19),
                                        IntegerValue: sdk.String("reiciendis"),
                                        StringValue: sdk.String("doloremque"),
                                        TimestampValue: sdk.String("repudiandae"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("dicta"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumAnd.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("dolores"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(316488),
                                            Month: sdk.Int(389135),
                                            Year: sdk.Int(246535),
                                        },
                                        DoubleValue: sdk.Float64(9521.43),
                                        IntegerValue: sdk.String("molestias"),
                                        StringValue: sdk.String("magnam"),
                                        TimestampValue: sdk.String("saepe"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("consequuntur"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("perspiciatis"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(446394),
                                            Month: sdk.Int(238043),
                                            Year: sdk.Int(907876),
                                        },
                                        DoubleValue: sdk.Float64(5808.87),
                                        IntegerValue: sdk.String("consequuntur"),
                                        StringValue: sdk.String("fugit"),
                                        TimestampValue: sdk.String("id"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("quis"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Isabel Blick"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleKeep.ToPointer(),
                    },
                },
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumNot.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("iure"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(59944),
                                            Month: sdk.Int(517612),
                                            Year: sdk.Int(61078),
                                        },
                                        DoubleValue: sdk.Float64(4746.68),
                                        IntegerValue: sdk.String("eveniet"),
                                        StringValue: sdk.String("qui"),
                                        TimestampValue: sdk.String("cum"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("iure"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Sean Pacocha"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleGmail.ToPointer(),
                    },
                },
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumAnd.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("alias"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(362189),
                                            Month: sdk.Int(597303),
                                            Year: sdk.Int(470649),
                                        },
                                        DoubleValue: sdk.Float64(6490.78),
                                        IntegerValue: sdk.String("voluptas"),
                                        StringValue: sdk.String("alias"),
                                        TimestampValue: sdk.String("maiores"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("reiciendis"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumAnd.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("minima"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(293144),
                                            Month: sdk.Int(680349),
                                            Year: sdk.Int(200364),
                                        },
                                        DoubleValue: sdk.Float64(632.07),
                                        IntegerValue: sdk.String("recusandae"),
                                        StringValue: sdk.String("omnis"),
                                        TimestampValue: sdk.String("quaerat"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("molestiae"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("April Nader"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleGmail.ToPointer(),
                    },
                },
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("esse"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(592081),
                                            Month: sdk.Int(337477),
                                            Year: sdk.Int(431785),
                                        },
                                        DoubleValue: sdk.Float64(9704.94),
                                        IntegerValue: sdk.String("provident"),
                                        StringValue: sdk.String("aspernatur"),
                                        TimestampValue: sdk.String("ullam"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("quasi"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("mollitia"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(591027),
                                            Month: sdk.Int(821719),
                                            Year: sdk.Int(659177),
                                        },
                                        DoubleValue: sdk.Float64(4027.67),
                                        IntegerValue: sdk.String("aliquid"),
                                        StringValue: sdk.String("accusantium"),
                                        TimestampValue: sdk.String("repellat"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("doloribus"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Arlene Reichert"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleGroups.ToPointer(),
                    },
                },
            },
            DefaultFacetOptions: []shared.FacetOptions{
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "voluptatibus",
                            "molestias",
                        },
                    },
                    NumFacetBuckets: sdk.Int(889794),
                    ObjectType: sdk.String("sapiente"),
                    OperatorName: sdk.String("cumque"),
                    SourceName: sdk.String("vitae"),
                },
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "tempora",
                            "quis",
                            "inventore",
                        },
                    },
                    NumFacetBuckets: sdk.Int(147685),
                    ObjectType: sdk.String("cumque"),
                    OperatorName: sdk.String("quae"),
                    SourceName: sdk.String("perferendis"),
                },
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "aspernatur",
                        },
                    },
                    NumFacetBuckets: sdk.Int(432281),
                    ObjectType: sdk.String("eius"),
                    OperatorName: sdk.String("rem"),
                    SourceName: sdk.String("at"),
                },
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "eos",
                            "sapiente",
                            "eum",
                            "dicta",
                        },
                    },
                    NumFacetBuckets: sdk.Int(325118),
                    ObjectType: sdk.String("beatae"),
                    OperatorName: sdk.String("cupiditate"),
                    SourceName: sdk.String("provident"),
                },
            },
            DefaultSortOptions: &shared.SortOptions{
                OperatorName: sdk.String("earum"),
                SortOrder: shared.SortOptionsSortOrderEnumDescending.ToPointer(),
            },
            DisplayName: sdk.String("hic"),
            EnableAuditLog: sdk.Bool(false),
            Name: sdk.String("Timothy Weber"),
            QueryInterpretationConfig: &shared.QueryInterpretationConfig{
                ForceDisableSupplementalResults: sdk.Bool(false),
                ForceVerbatimMode: sdk.Bool(false),
            },
            ReturnResultThumbnailUrls: sdk.Bool(false),
            ScoringConfig: &shared.ScoringConfig{
                DisableFreshness: sdk.Bool(false),
                DisablePersonalization: sdk.Bool(false),
            },
            SourceConfig: []shared.SourceConfig{
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(399802),
                        NumSuggestions: sdk.Int(780931),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumLow.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Denise Runolfsdottir"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleSites.ToPointer(),
                    },
                },
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(898760),
                        NumSuggestions: sdk.Int(862063),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumDefault.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Catherine Kuphal"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleDrive.ToPointer(),
                    },
                },
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(241557),
                        NumSuggestions: sdk.Int(96562),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumDefault.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Mrs. Orville Treutel"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleGmail.ToPointer(),
                    },
                },
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(115834),
                        NumSuggestions: sdk.Int(479754),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumLow.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Emilio Wisoky PhD"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumNone.ToPointer(),
                    },
                },
            },
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("esse"),
        Key: sdk.String("ex"),
        Name: "Jeanne Beer II",
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UpdateMask: sdk.String("aliquid"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.CloudsearchSettingsSearchapplicationsPatchSecurity{
        Option1: &operations.CloudsearchSettingsSearchapplicationsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchSettingsSearchapplicationsReset

Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsSearchapplicationsReset(ctx, operations.CloudsearchSettingsSearchapplicationsResetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResetSearchApplicationRequest: &shared.ResetSearchApplicationRequest{
            DebugOptions: &shared.DebugOptions{
                EnableDebugging: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("iste"),
        Key: sdk.String("id"),
        Name: "Isabel Schuster",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.CloudsearchSettingsSearchapplicationsResetSecurity{
        Option1: &operations.CloudsearchSettingsSearchapplicationsResetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchSettingsSearchapplicationsUpdate

Updates a search application. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsSearchapplicationsUpdate(ctx, operations.CloudsearchSettingsSearchapplicationsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SearchApplicationInput: &shared.SearchApplicationInput{
            DataSourceRestrictions: []shared.DataSourceRestriction{
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("ex"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(281153),
                                            Month: sdk.Int(321043),
                                            Year: sdk.Int(713927),
                                        },
                                        DoubleValue: sdk.Float64(299.5),
                                        IntegerValue: sdk.String("molestias"),
                                        StringValue: sdk.String("cum"),
                                        TimestampValue: sdk.String("aliquid"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("beatae"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("veritatis"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(703218),
                                            Month: sdk.Int(665678),
                                            Year: sdk.Int(634786),
                                        },
                                        DoubleValue: sdk.Float64(296.34),
                                        IntegerValue: sdk.String("sapiente"),
                                        StringValue: sdk.String("officiis"),
                                        TimestampValue: sdk.String("architecto"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("fuga"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumNot.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("voluptatem"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(1207),
                                            Month: sdk.Int(534917),
                                            Year: sdk.Int(937219),
                                        },
                                        DoubleValue: sdk.Float64(4042.44),
                                        IntegerValue: sdk.String("sapiente"),
                                        StringValue: sdk.String("rem"),
                                        TimestampValue: sdk.String("minus"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("nemo"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumNot.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("ullam"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(19122),
                                            Month: sdk.Int(848341),
                                            Year: sdk.Int(518150),
                                        },
                                        DoubleValue: sdk.Float64(7706.75),
                                        IntegerValue: sdk.String("quibusdam"),
                                        StringValue: sdk.String("nam"),
                                        TimestampValue: sdk.String("ipsam"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("culpa"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Michele Bode II"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumQueryHistory.ToPointer(),
                    },
                },
            },
            DefaultFacetOptions: []shared.FacetOptions{
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "sit",
                        },
                    },
                    NumFacetBuckets: sdk.Int(265039),
                    ObjectType: sdk.String("fugit"),
                    OperatorName: sdk.String("ab"),
                    SourceName: sdk.String("laudantium"),
                },
            },
            DefaultSortOptions: &shared.SortOptions{
                OperatorName: sdk.String("quae"),
                SortOrder: shared.SortOptionsSortOrderEnumAscending.ToPointer(),
            },
            DisplayName: sdk.String("fugiat"),
            EnableAuditLog: sdk.Bool(false),
            Name: sdk.String("Kathryn Bednar"),
            QueryInterpretationConfig: &shared.QueryInterpretationConfig{
                ForceDisableSupplementalResults: sdk.Bool(false),
                ForceVerbatimMode: sdk.Bool(false),
            },
            ReturnResultThumbnailUrls: sdk.Bool(false),
            ScoringConfig: &shared.ScoringConfig{
                DisableFreshness: sdk.Bool(false),
                DisablePersonalization: sdk.Bool(false),
            },
            SourceConfig: []shared.SourceConfig{
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(884952),
                        NumSuggestions: sdk.Int(456410),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumHigh.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Sally Dooley"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleDrive.ToPointer(),
                    },
                },
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(528234),
                        NumSuggestions: sdk.Int(301692),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumLow.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Johnnie Jones"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleKeep.ToPointer(),
                    },
                },
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(160393),
                        NumSuggestions: sdk.Int(28952),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumLow.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Arthur Huel"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleGroups.ToPointer(),
                    },
                },
                shared.SourceConfig{
                    CrowdingConfig: &shared.SourceCrowdingConfig{
                        NumResults: sdk.Int(690785),
                        NumSuggestions: sdk.Int(192718),
                    },
                    ScoringConfig: &shared.SourceScoringConfig{
                        SourceImportance: shared.SourceScoringConfigSourceImportanceEnumHigh.ToPointer(),
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Earnest McClure"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleGmail.ToPointer(),
                    },
                },
            },
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("quos"),
        Name: "Janice Kunze",
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UpdateMask: sdk.String("quasi"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.CloudsearchSettingsSearchapplicationsUpdateSecurity{
        Option1: &operations.CloudsearchSettingsSearchapplicationsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchSettingsUpdateCustomer

Update customer settings. **Note:** This API requires an admin account to execute.

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
    res, err := s.Settings.CloudsearchSettingsUpdateCustomer(ctx, operations.CloudsearchSettingsUpdateCustomerRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CustomerSettings: &shared.CustomerSettings{
            AuditLoggingSettings: &shared.AuditLoggingSettings{
                LogAdminReadActions: sdk.Bool(false),
                LogDataReadActions: sdk.Bool(false),
                LogDataWriteActions: sdk.Bool(false),
                Project: sdk.String("nisi"),
            },
            VpcSettings: &shared.VPCSettings{
                Project: sdk.String("consequuntur"),
            },
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UpdateMask: sdk.String("eos"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("iste"),
    }, operations.CloudsearchSettingsUpdateCustomerSecurity{
        Option1: &operations.CloudsearchSettingsUpdateCustomerSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
