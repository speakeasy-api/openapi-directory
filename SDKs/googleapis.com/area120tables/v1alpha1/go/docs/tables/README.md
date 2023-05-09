# Tables

### Available Operations

* [Area120tablesTablesList](#area120tablestableslist) - Lists tables for the user.
* [Area120tablesTablesRowsBatchCreate](#area120tablestablesrowsbatchcreate) - Creates multiple rows.
* [Area120tablesTablesRowsBatchDelete](#area120tablestablesrowsbatchdelete) - Deletes multiple rows.
* [Area120tablesTablesRowsBatchUpdate](#area120tablestablesrowsbatchupdate) - Updates multiple rows.
* [Area120tablesTablesRowsCreate](#area120tablestablesrowscreate) - Creates a row.
* [Area120tablesTablesRowsDelete](#area120tablestablesrowsdelete) - Deletes a row.
* [Area120tablesTablesRowsList](#area120tablestablesrowslist) - Lists rows in a table. Returns NOT_FOUND if the table does not exist.
* [Area120tablesTablesRowsPatch](#area120tablestablesrowspatch) - Updates a row.

## Area120tablesTablesList

Lists tables for the user.

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
    res, err := s.Tables.Area120tablesTablesList(ctx, operations.Area120tablesTablesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        OrderBy: sdk.String("minus"),
        PageSize: sdk.Int64(812169),
        PageToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.Area120tablesTablesListSecurity{
        Option1: &operations.Area120tablesTablesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTablesResponse != nil {
        // handle response
    }
}
```

## Area120tablesTablesRowsBatchCreate

Creates multiple rows.

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
    res, err := s.Tables.Area120tablesTablesRowsBatchCreate(ctx, operations.Area120tablesTablesRowsBatchCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchCreateRowsRequest: &shared.BatchCreateRowsRequest{
            Requests: []shared.CreateRowRequest{
                shared.CreateRowRequest{
                    Parent: sdk.String("ab"),
                    Row: &shared.Row{
                        CreateTime: sdk.String("quis"),
                        Name: sdk.String("Iris Aufderhar"),
                        UpdateTime: sdk.String("sapiente"),
                        Values: map[string]interface{}{
                            "odit": "at",
                            "at": "maiores",
                            "molestiae": "quod",
                            "quod": "esse",
                        },
                    },
                    View: shared.CreateRowRequestViewEnumColumnIDView.ToPointer(),
                },
                shared.CreateRowRequest{
                    Parent: sdk.String("porro"),
                    Row: &shared.Row{
                        CreateTime: sdk.String("dolorum"),
                        Name: sdk.String("Antoinette Nikolaus"),
                        UpdateTime: sdk.String("deleniti"),
                        Values: map[string]interface{}{
                            "optio": "totam",
                            "beatae": "commodi",
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                    },
                    View: shared.CreateRowRequestViewEnumColumnIDView.ToPointer(),
                },
                shared.CreateRowRequest{
                    Parent: sdk.String("esse"),
                    Row: &shared.Row{
                        CreateTime: sdk.String("ipsum"),
                        Name: sdk.String("Brandon Auer"),
                        UpdateTime: sdk.String("sed"),
                        Values: map[string]interface{}{
                            "dolor": "natus",
                            "laboriosam": "hic",
                            "saepe": "fuga",
                        },
                    },
                    View: shared.CreateRowRequestViewEnumViewUnspecified.ToPointer(),
                },
                shared.CreateRowRequest{
                    Parent: sdk.String("corporis"),
                    Row: &shared.Row{
                        CreateTime: sdk.String("iste"),
                        Name: sdk.String("Mr. Kerry Predovic"),
                        UpdateTime: sdk.String("est"),
                        Values: map[string]interface{}{
                            "laborum": "dolores",
                            "dolorem": "corporis",
                            "explicabo": "nobis",
                        },
                    },
                    View: shared.CreateRowRequestViewEnumViewUnspecified.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("iure"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.Area120tablesTablesRowsBatchCreateSecurity{
        Option1: &operations.Area120tablesTablesRowsBatchCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateRowsResponse != nil {
        // handle response
    }
}
```

## Area120tablesTablesRowsBatchDelete

Deletes multiple rows.

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
    res, err := s.Tables.Area120tablesTablesRowsBatchDelete(ctx, operations.Area120tablesTablesRowsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchDeleteRowsRequest: &shared.BatchDeleteRowsRequest{
            Names: []string{
                "culpa",
            },
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("commodi"),
        Parent: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("error"),
    }, operations.Area120tablesTablesRowsBatchDeleteSecurity{
        Option1: &operations.Area120tablesTablesRowsBatchDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## Area120tablesTablesRowsBatchUpdate

Updates multiple rows.

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
    res, err := s.Tables.Area120tablesTablesRowsBatchUpdate(ctx, operations.Area120tablesTablesRowsBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchUpdateRowsRequest: &shared.BatchUpdateRowsRequest{
            Requests: []shared.UpdateRowRequest{
                shared.UpdateRowRequest{
                    Row: &shared.Row{
                        CreateTime: sdk.String("vitae"),
                        Name: sdk.String("Matt Hamill"),
                        UpdateTime: sdk.String("sequi"),
                        Values: map[string]interface{}{
                            "ipsam": "id",
                            "possimus": "aut",
                            "quasi": "error",
                            "temporibus": "laborum",
                        },
                    },
                    UpdateMask: sdk.String("quasi"),
                    View: shared.UpdateRowRequestViewEnumColumnIDView.ToPointer(),
                },
                shared.UpdateRowRequest{
                    Row: &shared.Row{
                        CreateTime: sdk.String("voluptatibus"),
                        Name: sdk.String("Jessie Langosh V"),
                        UpdateTime: sdk.String("voluptate"),
                        Values: map[string]interface{}{
                            "perferendis": "doloremque",
                            "reprehenderit": "ut",
                            "maiores": "dicta",
                        },
                    },
                    UpdateMask: sdk.String("corporis"),
                    View: shared.UpdateRowRequestViewEnumViewUnspecified.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("commodi"),
        Parent: "repudiandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.Area120tablesTablesRowsBatchUpdateSecurity{
        Option1: &operations.Area120tablesTablesRowsBatchUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateRowsResponse != nil {
        // handle response
    }
}
```

## Area120tablesTablesRowsCreate

Creates a row.

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
    res, err := s.Tables.Area120tablesTablesRowsCreate(ctx, operations.Area120tablesTablesRowsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Row: &shared.Row{
            CreateTime: sdk.String("excepturi"),
            Name: sdk.String("Joel Lang"),
            UpdateTime: sdk.String("quasi"),
            Values: map[string]interface{}{
                "sint": "veritatis",
                "itaque": "incidunt",
                "enim": "consequatur",
                "est": "quibusdam",
            },
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("modi"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("quos"),
        View: operations.Area120tablesTablesRowsCreateViewEnumViewUnspecified.ToPointer(),
    }, operations.Area120tablesTablesRowsCreateSecurity{
        Option1: &operations.Area120tablesTablesRowsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Row != nil {
        // handle response
    }
}
```

## Area120tablesTablesRowsDelete

Deletes a row.

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
    res, err := s.Tables.Area120tablesTablesRowsDelete(ctx, operations.Area120tablesTablesRowsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("dolorum"),
        Name: "Eddie Prosacco",
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.Area120tablesTablesRowsDeleteSecurity{
        Option1: &operations.Area120tablesTablesRowsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## Area120tablesTablesRowsList

Lists rows in a table. Returns NOT_FOUND if the table does not exist.

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
    res, err := s.Tables.Area120tablesTablesRowsList(ctx, operations.Area120tablesTablesRowsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("sint"),
        Filter: sdk.String("officia"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("debitis"),
        OrderBy: sdk.String("a"),
        PageSize: sdk.Int64(680056),
        PageToken: sdk.String("in"),
        Parent: "in",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("rerum"),
        View: operations.Area120tablesTablesRowsListViewEnumViewUnspecified.ToPointer(),
    }, operations.Area120tablesTablesRowsListSecurity{
        Option1: &operations.Area120tablesTablesRowsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRowsResponse != nil {
        // handle response
    }
}
```

## Area120tablesTablesRowsPatch

Updates a row.

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
    res, err := s.Tables.Area120tablesTablesRowsPatch(ctx, operations.Area120tablesTablesRowsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Row: &shared.Row{
            CreateTime: sdk.String("cumque"),
            Name: sdk.String("Nathaniel Hyatt"),
            UpdateTime: sdk.String("non"),
            Values: map[string]interface{}{
                "enim": "accusamus",
                "delectus": "quidem",
                "provident": "nam",
            },
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("amet"),
        Name: "Tyler Kassulke",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UpdateMask: sdk.String("nihil"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("distinctio"),
        View: operations.Area120tablesTablesRowsPatchViewEnumColumnIDView.ToPointer(),
    }, operations.Area120tablesTablesRowsPatchSecurity{
        Option1: &operations.Area120tablesTablesRowsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Row != nil {
        // handle response
    }
}
```
