# OperatingSystems

### Available Operations

* [DfareportingOperatingSystemsGet](#dfareportingoperatingsystemsget) - Gets one operating system by DART ID.
* [DfareportingOperatingSystemsList](#dfareportingoperatingsystemslist) - Retrieves a list of operating systems.

## DfareportingOperatingSystemsGet

Gets one operating system by DART ID.

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
    res, err := s.OperatingSystems.DfareportingOperatingSystemsGet(ctx, operations.DfareportingOperatingSystemsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptas"),
        DartID: "aperiam",
        Fields: sdk.String("numquam"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugit",
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.DfareportingOperatingSystemsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperatingSystem != nil {
        // handle response
    }
}
```

## DfareportingOperatingSystemsList

Retrieves a list of operating systems.

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
    res, err := s.OperatingSystems.DfareportingOperatingSystemsList(ctx, operations.DfareportingOperatingSystemsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("quo"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "reprehenderit",
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.DfareportingOperatingSystemsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperatingSystemsListResponse != nil {
        // handle response
    }
}
```
