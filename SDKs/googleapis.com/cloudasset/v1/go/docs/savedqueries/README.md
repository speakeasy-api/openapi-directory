# SavedQueries

### Available Operations

* [CloudassetSavedQueriesCreate](#cloudassetsavedqueriescreate) - Creates a saved query in a parent project/folder/organization.
* [CloudassetSavedQueriesDelete](#cloudassetsavedqueriesdelete) - Deletes a saved query.
* [CloudassetSavedQueriesGet](#cloudassetsavedqueriesget) - Gets details about a saved query.
* [CloudassetSavedQueriesList](#cloudassetsavedquerieslist) - Lists all saved queries in a parent project/folder/organization.
* [CloudassetSavedQueriesPatch](#cloudassetsavedqueriespatch) - Updates a saved query.

## CloudassetSavedQueriesCreate

Creates a saved query in a parent project/folder/organization.

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
    res, err := s.SavedQueries.CloudassetSavedQueriesCreate(ctx, operations.CloudassetSavedQueriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SavedQueryInput: &shared.SavedQueryInput{
            Content: &shared.QueryContent{
                IamPolicyAnalysisQuery: &shared.IamPolicyAnalysisQuery{
                    AccessSelector: &shared.AccessSelector{
                        Permissions: []string{
                            "architecto",
                            "mollitia",
                            "dolorem",
                            "culpa",
                        },
                        Roles: []string{
                            "repellat",
                        },
                    },
                    ConditionContext: &shared.ConditionContext{
                        AccessTime: sdk.String("mollitia"),
                    },
                    IdentitySelector: &shared.IdentitySelector{
                        Identity: sdk.String("occaecati"),
                    },
                    Options: &shared.Options{
                        AnalyzeServiceAccountImpersonation: sdk.Bool(false),
                        ExpandGroups: sdk.Bool(false),
                        ExpandResources: sdk.Bool(false),
                        ExpandRoles: sdk.Bool(false),
                        IncludeDenyPolicyAnalysis: sdk.Bool(false),
                        OutputGroupEdges: sdk.Bool(false),
                        OutputResourceEdges: sdk.Bool(false),
                    },
                    ResourceSelector: &shared.ResourceSelector{
                        FullResourceName: sdk.String("numquam"),
                    },
                    Scope: sdk.String("commodi"),
                },
            },
            Description: sdk.String("quam"),
            Labels: map[string]string{
                "velit": "error",
                "quia": "quis",
            },
            Name: sdk.String("Kayla O'Kon"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        SavedQueryID: sdk.String("error"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.CloudassetSavedQueriesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedQuery != nil {
        // handle response
    }
}
```

## CloudassetSavedQueriesDelete

Deletes a saved query.

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
    res, err := s.SavedQueries.CloudassetSavedQueriesDelete(ctx, operations.CloudassetSavedQueriesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        Name: "Jose Moen",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("ut"),
    }, operations.CloudassetSavedQueriesDeleteSecurity{
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

## CloudassetSavedQueriesGet

Gets details about a saved query.

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
    res, err := s.SavedQueries.CloudassetSavedQueriesGet(ctx, operations.CloudassetSavedQueriesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("dicta"),
        Name: "Bill Thompson",
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("molestias"),
    }, operations.CloudassetSavedQueriesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedQuery != nil {
        // handle response
    }
}
```

## CloudassetSavedQueriesList

Lists all saved queries in a parent project/folder/organization.

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
    res, err := s.SavedQueries.CloudassetSavedQueriesList(ctx, operations.CloudassetSavedQueriesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("rem"),
        Filter: sdk.String("voluptates"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("repudiandae"),
        PageSize: sdk.Int64(575947),
        PageToken: sdk.String("veritatis"),
        Parent: "itaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.CloudassetSavedQueriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSavedQueriesResponse != nil {
        // handle response
    }
}
```

## CloudassetSavedQueriesPatch

Updates a saved query.

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
    res, err := s.SavedQueries.CloudassetSavedQueriesPatch(ctx, operations.CloudassetSavedQueriesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SavedQueryInput: &shared.SavedQueryInput{
            Content: &shared.QueryContent{
                IamPolicyAnalysisQuery: &shared.IamPolicyAnalysisQuery{
                    AccessSelector: &shared.AccessSelector{
                        Permissions: []string{
                            "explicabo",
                            "deserunt",
                            "distinctio",
                            "quibusdam",
                        },
                        Roles: []string{
                            "modi",
                            "qui",
                        },
                    },
                    ConditionContext: &shared.ConditionContext{
                        AccessTime: sdk.String("aliquid"),
                    },
                    IdentitySelector: &shared.IdentitySelector{
                        Identity: sdk.String("cupiditate"),
                    },
                    Options: &shared.Options{
                        AnalyzeServiceAccountImpersonation: sdk.Bool(false),
                        ExpandGroups: sdk.Bool(false),
                        ExpandResources: sdk.Bool(false),
                        ExpandRoles: sdk.Bool(false),
                        IncludeDenyPolicyAnalysis: sdk.Bool(false),
                        OutputGroupEdges: sdk.Bool(false),
                        OutputResourceEdges: sdk.Bool(false),
                    },
                    ResourceSelector: &shared.ResourceSelector{
                        FullResourceName: sdk.String("quos"),
                    },
                    Scope: sdk.String("perferendis"),
                },
            },
            Description: sdk.String("magni"),
            Labels: map[string]string{
                "ipsam": "alias",
                "fugit": "dolorum",
                "excepturi": "tempora",
                "facilis": "tempore",
            },
            Name: sdk.String("Lucia Kemmer"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("sint"),
        Name: "Curtis Toy",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UpdateMask: sdk.String("illum"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.CloudassetSavedQueriesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedQuery != nil {
        // handle response
    }
}
```
