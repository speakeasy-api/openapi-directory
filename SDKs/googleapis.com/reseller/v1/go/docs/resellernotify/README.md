# Resellernotify

### Available Operations

* [ResellerResellernotifyGetwatchdetails](#resellerresellernotifygetwatchdetails) - Returns all the details of the watch corresponding to the reseller.
* [ResellerResellernotifyRegister](#resellerresellernotifyregister) - Registers a Reseller for receiving notifications.
* [ResellerResellernotifyUnregister](#resellerresellernotifyunregister) - Unregisters a Reseller for receiving notifications.

## ResellerResellernotifyGetwatchdetails

Returns all the details of the watch corresponding to the reseller.

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
    res, err := s.Resellernotify.ResellerResellernotifyGetwatchdetails(ctx, operations.ResellerResellernotifyGetwatchdetailsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.ResellerResellernotifyGetwatchdetailsSecurity{
        Option1: &operations.ResellerResellernotifyGetwatchdetailsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResellernotifyGetwatchdetailsResponse != nil {
        // handle response
    }
}
```

## ResellerResellernotifyRegister

Registers a Reseller for receiving notifications.

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
    res, err := s.Resellernotify.ResellerResellernotifyRegister(ctx, operations.ResellerResellernotifyRegisterRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        ServiceAccountEmailAddress: sdk.String("omnis"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("cum"),
    }, operations.ResellerResellernotifyRegisterSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResellernotifyResource != nil {
        // handle response
    }
}
```

## ResellerResellernotifyUnregister

Unregisters a Reseller for receiving notifications.

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
    res, err := s.Resellernotify.ResellerResellernotifyUnregister(ctx, operations.ResellerResellernotifyUnregisterRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        ServiceAccountEmailAddress: sdk.String("iusto"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("harum"),
    }, operations.ResellerResellernotifyUnregisterSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResellernotifyResource != nil {
        // handle response
    }
}
```
