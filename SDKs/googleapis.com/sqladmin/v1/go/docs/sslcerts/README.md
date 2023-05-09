# SslCerts

### Available Operations

* [SQLSslCertsCreateEphemeral](#sqlsslcertscreateephemeral) - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* [SQLSslCertsDelete](#sqlsslcertsdelete) - Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
* [SQLSslCertsGet](#sqlsslcertsget) - Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
* [SQLSslCertsInsert](#sqlsslcertsinsert) - Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
* [SQLSslCertsList](#sqlsslcertslist) - Lists all of the current SSL certificates for the instance.

## SQLSslCertsCreateEphemeral

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
    res, err := s.SslCerts.SQLSslCertsCreateEphemeral(ctx, operations.SQLSslCertsCreateEphemeralRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SslCertsCreateEphemeralRequest: &shared.SslCertsCreateEphemeralRequest{
            AccessToken: sdk.String("tempora"),
            PublicKey: sdk.String("esse"),
        },
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("ipsa"),
        Instance: "laborum",
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        Project: "fugiat",
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("officia"),
    }, operations.SQLSslCertsCreateEphemeralSecurity{
        Option1: &operations.SQLSslCertsCreateEphemeralSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SslCert != nil {
        // handle response
    }
}
```

## SQLSslCertsDelete

Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.

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
    res, err := s.SslCerts.SQLSslCertsDelete(ctx, operations.SQLSslCertsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("voluptas"),
        Instance: "iste",
        Key: sdk.String("id"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        Project: "error",
        QuotaUser: sdk.String("possimus"),
        Sha1Fingerprint: "voluptates",
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.SQLSslCertsDeleteSecurity{
        Option1: &operations.SQLSslCertsDeleteSecurityOption1{
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

## SQLSslCertsGet

Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.

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
    res, err := s.SslCerts.SQLSslCertsGet(ctx, operations.SQLSslCertsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("vitae"),
        Instance: "repellendus",
        Key: sdk.String("ex"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        Project: "ex",
        QuotaUser: sdk.String("ut"),
        Sha1Fingerprint: "ad",
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.SQLSslCertsGetSecurity{
        Option1: &operations.SQLSslCertsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SslCert != nil {
        // handle response
    }
}
```

## SQLSslCertsInsert

Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.

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
    res, err := s.SslCerts.SQLSslCertsInsert(ctx, operations.SQLSslCertsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SslCertsInsertRequest: &shared.SslCertsInsertRequest{
            CommonName: sdk.String("cum"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("omnis"),
        Instance: "veritatis",
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        Project: "culpa",
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.SQLSslCertsInsertSecurity{
        Option1: &operations.SQLSslCertsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SslCertsInsertResponse != nil {
        // handle response
    }
}
```

## SQLSslCertsList

Lists all of the current SSL certificates for the instance.

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
    res, err := s.SslCerts.SQLSslCertsList(ctx, operations.SQLSslCertsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("voluptatem"),
        Instance: "alias",
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        Project: "ex",
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("minus"),
    }, operations.SQLSslCertsListSecurity{
        Option1: &operations.SQLSslCertsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SslCertsListResponse != nil {
        // handle response
    }
}
```
