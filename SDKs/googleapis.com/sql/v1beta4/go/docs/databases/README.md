# Databases

### Available Operations

* [SQLDatabasesDelete](#sqldatabasesdelete) - Deletes a database from a Cloud SQL instance.
* [SQLDatabasesGet](#sqldatabasesget) - Retrieves a resource containing information about a database inside a Cloud SQL instance.
* [SQLDatabasesInsert](#sqldatabasesinsert) - Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.
* [SQLDatabasesList](#sqldatabaseslist) - Lists databases in the specified Cloud SQL instance.
* [SQLDatabasesPatch](#sqldatabasespatch) - Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
* [SQLDatabasesUpdate](#sqldatabasesupdate) - Updates a resource containing information about a database inside a Cloud SQL instance.

## SQLDatabasesDelete

Deletes a database from a Cloud SQL instance.

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
    res, err := s.Databases.SQLDatabasesDelete(ctx, operations.SQLDatabasesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        Database: "eligendi",
        Fields: sdk.String("sint"),
        Instance: "aliquid",
        Key: sdk.String("provident"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        Project: "sint",
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.SQLDatabasesDeleteSecurity{
        Option1: &operations.SQLDatabasesDeleteSecurityOption1{
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

## SQLDatabasesGet

Retrieves a resource containing information about a database inside a Cloud SQL instance.

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
    res, err := s.Databases.SQLDatabasesGet(ctx, operations.SQLDatabasesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Database: "illum",
        Fields: sdk.String("maiores"),
        Instance: "rerum",
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        Project: "cumque",
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.SQLDatabasesGetSecurity{
        Option1: &operations.SQLDatabasesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Database != nil {
        // handle response
    }
}
```

## SQLDatabasesInsert

Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.

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
    res, err := s.Databases.SQLDatabasesInsert(ctx, operations.SQLDatabasesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Database: &shared.Database{
            Charset: sdk.String("accusamus"),
            Collation: sdk.String("non"),
            Etag: sdk.String("occaecati"),
            Instance: sdk.String("enim"),
            Kind: sdk.String("accusamus"),
            Name: sdk.String("Abraham McKenzie"),
            Project: sdk.String("blanditiis"),
            SelfLink: sdk.String("deleniti"),
            SqlserverDatabaseDetails: &shared.SQLServerDatabaseDetails{
                CompatibilityLevel: sdk.Int(956084),
                RecoveryModel: sdk.String("amet"),
            },
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("natus"),
        Instance: "omnis",
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        Project: "nihil",
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("id"),
    }, operations.SQLDatabasesInsertSecurity{
        Option1: &operations.SQLDatabasesInsertSecurityOption1{
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

## SQLDatabasesList

Lists databases in the specified Cloud SQL instance.

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
    res, err := s.Databases.SQLDatabasesList(ctx, operations.SQLDatabasesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("nobis"),
        Instance: "eum",
        Key: sdk.String("vero"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        Project: "architecto",
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.SQLDatabasesListSecurity{
        Option1: &operations.SQLDatabasesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatabasesListResponse != nil {
        // handle response
    }
}
```

## SQLDatabasesPatch

Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.

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
    res, err := s.Databases.SQLDatabasesPatch(ctx, operations.SQLDatabasesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Database1: &shared.Database{
            Charset: sdk.String("provident"),
            Collation: sdk.String("quos"),
            Etag: sdk.String("sint"),
            Instance: sdk.String("accusantium"),
            Kind: sdk.String("mollitia"),
            Name: sdk.String("Shaun Hammes"),
            Project: sdk.String("necessitatibus"),
            SelfLink: sdk.String("odit"),
            SqlserverDatabaseDetails: &shared.SQLServerDatabaseDetails{
                CompatibilityLevel: sdk.Int(367562),
                RecoveryModel: sdk.String("quasi"),
            },
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        DatabasePathParameter: "eius",
        Fields: sdk.String("maxime"),
        Instance: "deleniti",
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        Project: "architecto",
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.SQLDatabasesPatchSecurity{
        Option1: &operations.SQLDatabasesPatchSecurityOption1{
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

## SQLDatabasesUpdate

Updates a resource containing information about a database inside a Cloud SQL instance.

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
    res, err := s.Databases.SQLDatabasesUpdate(ctx, operations.SQLDatabasesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Database1: &shared.Database{
            Charset: sdk.String("nihil"),
            Collation: sdk.String("repellat"),
            Etag: sdk.String("quibusdam"),
            Instance: sdk.String("sed"),
            Kind: sdk.String("saepe"),
            Name: sdk.String("Edward Crooks"),
            Project: sdk.String("magni"),
            SelfLink: sdk.String("sunt"),
            SqlserverDatabaseDetails: &shared.SQLServerDatabaseDetails{
                CompatibilityLevel: sdk.Int(779051),
                RecoveryModel: sdk.String("illum"),
            },
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        DatabasePathParameter: "excepturi",
        Fields: sdk.String("odit"),
        Instance: "ea",
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        Project: "maiores",
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.SQLDatabasesUpdateSecurity{
        Option1: &operations.SQLDatabasesUpdateSecurityOption1{
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
