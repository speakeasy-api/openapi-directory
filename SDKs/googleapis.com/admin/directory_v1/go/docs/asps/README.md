# Asps

### Available Operations

* [DirectoryAspsDelete](#directoryaspsdelete) - Deletes an ASP issued by a user.
* [DirectoryAspsGet](#directoryaspsget) - Gets information about an ASP issued by a user.
* [DirectoryAspsList](#directoryaspslist) - Lists the ASPs issued by a user.

## DirectoryAspsDelete

Deletes an ASP issued by a user.

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
    res, err := s.Asps.DirectoryAspsDelete(ctx, operations.DirectoryAspsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        CodeID: 963663,
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("voluptatum"),
        UserKey: "iusto",
    }, operations.DirectoryAspsDeleteSecurity{
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

## DirectoryAspsGet

Gets information about an ASP issued by a user.

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
    res, err := s.Asps.DirectoryAspsGet(ctx, operations.DirectoryAspsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        CodeID: 71036,
        Fields: sdk.String("quis"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("repellendus"),
        UserKey: "sapiente",
    }, operations.DirectoryAspsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Asp != nil {
        // handle response
    }
}
```

## DirectoryAspsList

Lists the ASPs issued by a user.

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
    res, err := s.Asps.DirectoryAspsList(ctx, operations.DirectoryAspsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
        UserKey: "porro",
    }, operations.DirectoryAspsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Asps != nil {
        // handle response
    }
}
```
