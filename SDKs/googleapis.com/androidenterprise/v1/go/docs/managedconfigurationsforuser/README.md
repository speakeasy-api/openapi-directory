# Managedconfigurationsforuser

### Available Operations

* [AndroidenterpriseManagedconfigurationsforuserDelete](#androidenterprisemanagedconfigurationsforuserdelete) - Removes a per-user managed configuration for an app for the specified user.
* [AndroidenterpriseManagedconfigurationsforuserGet](#androidenterprisemanagedconfigurationsforuserget) - Retrieves details of a per-user managed configuration for an app for the specified user.
* [AndroidenterpriseManagedconfigurationsforuserList](#androidenterprisemanagedconfigurationsforuserlist) - Lists all the per-user managed configurations for the specified user. Only the ID is set.
* [AndroidenterpriseManagedconfigurationsforuserUpdate](#androidenterprisemanagedconfigurationsforuserupdate) - Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.

## AndroidenterpriseManagedconfigurationsforuserDelete

Removes a per-user managed configuration for an app for the specified user.

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
    res, err := s.Managedconfigurationsforuser.AndroidenterpriseManagedconfigurationsforuserDelete(ctx, operations.AndroidenterpriseManagedconfigurationsforuserDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusantium"),
        EnterpriseID: "rem",
        Fields: sdk.String("aut"),
        Key: sdk.String("laudantium"),
        ManagedConfigurationForUserID: "eum",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("non"),
        UserID: "voluptatem",
    }, operations.AndroidenterpriseManagedconfigurationsforuserDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AndroidenterpriseManagedconfigurationsforuserGet

Retrieves details of a per-user managed configuration for an app for the specified user.

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
    res, err := s.Managedconfigurationsforuser.AndroidenterpriseManagedconfigurationsforuserGet(ctx, operations.AndroidenterpriseManagedconfigurationsforuserGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        EnterpriseID: "explicabo",
        Fields: sdk.String("voluptas"),
        Key: sdk.String("aut"),
        ManagedConfigurationForUserID: "dignissimos",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("velit"),
        UserID: "voluptatibus",
    }, operations.AndroidenterpriseManagedconfigurationsforuserGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedConfiguration != nil {
        // handle response
    }
}
```

## AndroidenterpriseManagedconfigurationsforuserList

Lists all the per-user managed configurations for the specified user. Only the ID is set.

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
    res, err := s.Managedconfigurationsforuser.AndroidenterpriseManagedconfigurationsforuserList(ctx, operations.AndroidenterpriseManagedconfigurationsforuserListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ea"),
        EnterpriseID: "quaerat",
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("officia"),
        UserID: "asperiores",
    }, operations.AndroidenterpriseManagedconfigurationsforuserListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedConfigurationsForUserListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseManagedconfigurationsforuserUpdate

Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.

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
    res, err := s.Managedconfigurationsforuser.AndroidenterpriseManagedconfigurationsforuserUpdate(ctx, operations.AndroidenterpriseManagedconfigurationsforuserUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ManagedConfiguration: &shared.ManagedConfiguration{
            ConfigurationVariables: &shared.ConfigurationVariables{
                McmID: sdk.String("quae"),
                VariableSet: []shared.VariableSet{
                    shared.VariableSet{
                        Placeholder: sdk.String("porro"),
                        UserValue: sdk.String("quod"),
                    },
                    shared.VariableSet{
                        Placeholder: sdk.String("labore"),
                        UserValue: sdk.String("ab"),
                    },
                },
            },
            Kind: sdk.String("adipisci"),
            ManagedProperty: []shared.ManagedProperty{
                shared.ManagedProperty{
                    Key: sdk.String("id"),
                    ValueBool: sdk.Bool(false),
                    ValueBundle: &shared.ManagedPropertyBundle{
                        ManagedProperty: []shared.ManagedProperty{
                            shared.ManagedProperty{},
                            shared.ManagedProperty{},
                        },
                    },
                    ValueBundleArray: []shared.ManagedPropertyBundle{
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                            },
                        },
                    },
                    ValueInteger: sdk.Int(665859),
                    ValueString: sdk.String("recusandae"),
                    ValueStringArray: []string{
                        "fugiat",
                        "vel",
                        "ducimus",
                    },
                },
                shared.ManagedProperty{
                    Key: sdk.String("quos"),
                    ValueBool: sdk.Bool(false),
                    ValueBundle: &shared.ManagedPropertyBundle{
                        ManagedProperty: []shared.ManagedProperty{
                            shared.ManagedProperty{},
                            shared.ManagedProperty{},
                        },
                    },
                    ValueBundleArray: []shared.ManagedPropertyBundle{
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                            },
                        },
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                            },
                        },
                    },
                    ValueInteger: sdk.Int(738227),
                    ValueString: sdk.String("commodi"),
                    ValueStringArray: []string{
                        "corporis",
                        "reiciendis",
                    },
                },
                shared.ManagedProperty{
                    Key: sdk.String("assumenda"),
                    ValueBool: sdk.Bool(false),
                    ValueBundle: &shared.ManagedPropertyBundle{
                        ManagedProperty: []shared.ManagedProperty{
                            shared.ManagedProperty{},
                            shared.ManagedProperty{},
                        },
                    },
                    ValueBundleArray: []shared.ManagedPropertyBundle{
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                            },
                        },
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                            },
                        },
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                            },
                        },
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                            },
                        },
                    },
                    ValueInteger: sdk.Int(449083),
                    ValueString: sdk.String("exercitationem"),
                    ValueStringArray: []string{
                        "facere",
                        "numquam",
                        "doloribus",
                        "suscipit",
                    },
                },
            },
            ProductID: sdk.String("reiciendis"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        EnterpriseID: "dolore",
        Fields: sdk.String("sunt"),
        Key: sdk.String("asperiores"),
        ManagedConfigurationForUserID: "adipisci",
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("dignissimos"),
        UserID: "a",
    }, operations.AndroidenterpriseManagedconfigurationsforuserUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedConfiguration != nil {
        // handle response
    }
}
```
