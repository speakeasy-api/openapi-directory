# Connect

### Available Operations

* [SQLConnectGenerateEphemeral](#sqlconnectgenerateephemeral) - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* [SQLConnectGet](#sqlconnectget) - Retrieves connect settings about a Cloud SQL instance.

## SQLConnectGenerateEphemeral

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

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
    res, err := s.Connect.SQLConnectGenerateEphemeral(ctx, operations.SQLConnectGenerateEphemeralRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GenerateEphemeralCertRequest: &shared.GenerateEphemeralCertRequest{
            AccessToken: sdk.String("veritatis"),
            PublicKey: sdk.String("itaque"),
            ReadTime: sdk.String("incidunt"),
            ValidDuration: sdk.String("enim"),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("explicabo"),
        Instance: "deserunt",
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        Project: "labore",
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.SQLConnectGenerateEphemeralSecurity{
        Option1: &operations.SQLConnectGenerateEphemeralSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateEphemeralCertResponse != nil {
        // handle response
    }
}
```

## SQLConnectGet

Retrieves connect settings about a Cloud SQL instance.

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
    res, err := s.Connect.SQLConnectGet(ctx, operations.SQLConnectGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("assumenda"),
        Instance: "ipsam",
        Key: sdk.String("alias"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        Project: "dolorum",
        QuotaUser: sdk.String("excepturi"),
        ReadTime: sdk.String("tempora"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.SQLConnectGetSecurity{
        Option1: &operations.SQLConnectGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectSettings != nil {
        // handle response
    }
}
```
