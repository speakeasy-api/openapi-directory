# Applications

### Available Operations

* [GamesApplicationsGet](#gamesapplicationsget) - Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
* [GamesApplicationsGetEndPoint](#gamesapplicationsgetendpoint) - Returns a URL for the requested end point type.
* [GamesApplicationsPlayed](#gamesapplicationsplayed) - Indicate that the currently authenticated user is playing your application.
* [GamesApplicationsVerify](#gamesapplicationsverify) - Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

## GamesApplicationsGet

Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.

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
    res, err := s.Applications.GamesApplicationsGet(ctx, operations.GamesApplicationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        ApplicationID: "quo",
        Callback: sdk.String("sequi"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("ipsam"),
        Language: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        PlatformType: operations.GamesApplicationsGetPlatformTypeEnumPlatformTypeUnspecified.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.GamesApplicationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```

## GamesApplicationsGetEndPoint

Returns a URL for the requested end point type.

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
    res, err := s.Applications.GamesApplicationsGetEndPoint(ctx, operations.GamesApplicationsGetEndPointRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        ApplicationID: sdk.String("voluptatibus"),
        Callback: sdk.String("vero"),
        EndPointType: operations.GamesApplicationsGetEndPointEndPointTypeEnumProfileCreation.ToPointer(),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("cum"),
    }, operations.GamesApplicationsGetEndPointSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EndPoint != nil {
        // handle response
    }
}
```

## GamesApplicationsPlayed

Indicate that the currently authenticated user is playing your application.

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
    res, err := s.Applications.GamesApplicationsPlayed(ctx, operations.GamesApplicationsPlayedRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.GamesApplicationsPlayedSecurity{
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

## GamesApplicationsVerify

Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

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
    res, err := s.Applications.GamesApplicationsVerify(ctx, operations.GamesApplicationsVerifyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        ApplicationID: "commodi",
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("quae"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.GamesApplicationsVerifySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationVerifyResponse != nil {
        // handle response
    }
}
```
