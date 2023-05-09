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
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        DartID: "ut",
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magnam",
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("animi"),
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
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fuga",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("amet"),
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
