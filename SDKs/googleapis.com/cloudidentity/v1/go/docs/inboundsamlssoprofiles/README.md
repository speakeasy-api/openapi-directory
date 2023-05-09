# InboundSamlSsoProfiles

### Available Operations

* [CloudidentityInboundSamlSsoProfilesCreate](#cloudidentityinboundsamlssoprofilescreate) - Creates an InboundSamlSsoProfile for a customer.
* [CloudidentityInboundSamlSsoProfilesIdpCredentialsAdd](#cloudidentityinboundsamlssoprofilesidpcredentialsadd) - Adds an IdpCredential. Up to 2 credentials are allowed.
* [CloudidentityInboundSamlSsoProfilesIdpCredentialsList](#cloudidentityinboundsamlssoprofilesidpcredentialslist) - Returns a list of IdpCredentials in an InboundSamlSsoProfile.
* [CloudidentityInboundSamlSsoProfilesList](#cloudidentityinboundsamlssoprofileslist) - Lists InboundSamlSsoProfiles for a customer.

## CloudidentityInboundSamlSsoProfilesCreate

Creates an InboundSamlSsoProfile for a customer.

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
    res, err := s.InboundSamlSsoProfiles.CloudidentityInboundSamlSsoProfilesCreate(ctx, operations.CloudidentityInboundSamlSsoProfilesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InboundSamlSsoProfileInput: &shared.InboundSamlSsoProfileInput{
            Customer: sdk.String("facilis"),
            DisplayName: sdk.String("vero"),
            IdpConfig: &shared.SamlIdpConfig{
                ChangePasswordURI: sdk.String("ducimus"),
                EntityID: sdk.String("dolore"),
                LogoutRedirectURI: sdk.String("quibusdam"),
                SingleSignOnServiceURI: sdk.String("illum"),
            },
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("aut"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("porro"),
    }, operations.CloudidentityInboundSamlSsoProfilesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudidentityInboundSamlSsoProfilesIdpCredentialsAdd

Adds an IdpCredential. Up to 2 credentials are allowed.

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
    res, err := s.InboundSamlSsoProfiles.CloudidentityInboundSamlSsoProfilesIdpCredentialsAdd(ctx, operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddIdpCredentialRequest: &shared.AddIdpCredentialRequest{
            PemData: sdk.String("doloribus"),
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ducimus"),
        Fields: sdk.String("alias"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("tempora"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("vel"),
    }, operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudidentityInboundSamlSsoProfilesIdpCredentialsList

Returns a list of IdpCredentials in an InboundSamlSsoProfile.

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
    res, err := s.InboundSamlSsoProfiles.CloudidentityInboundSamlSsoProfilesIdpCredentialsList(ctx, operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("dolor"),
        PageSize: sdk.Int64(980700),
        PageToken: sdk.String("quasi"),
        Parent: "ex",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIdpCredentialsResponse != nil {
        // handle response
    }
}
```

## CloudidentityInboundSamlSsoProfilesList

Lists InboundSamlSsoProfiles for a customer.

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
    res, err := s.InboundSamlSsoProfiles.CloudidentityInboundSamlSsoProfilesList(ctx, operations.CloudidentityInboundSamlSsoProfilesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("ea"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("veniam"),
        PageSize: sdk.Int64(399499),
        PageToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("quo"),
    }, operations.CloudidentityInboundSamlSsoProfilesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInboundSamlSsoProfilesResponse != nil {
        // handle response
    }
}
```
