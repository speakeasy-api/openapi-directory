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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugiat"),
        DartID: "ab",
        Fields: sdk.String("voluptate"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "qui",
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("veritatis"),
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
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("optio"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "cupiditate",
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("facilis"),
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
