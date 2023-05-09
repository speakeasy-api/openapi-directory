# RootSaml

## Overview

SAML SSO Authentication.

### Available Operations

* [ConfigRubrikSamlMetadata](#configrubriksamlmetadata) - Configure and generate Rubrik SAML metadata
* [GetSamlSsoStatus](#getsamlssostatus) - Check SAML SSO Status
* [MakeSamlAuthnRequest](#makesamlauthnrequest) - Make SAML authentication request

## ConfigRubrikSamlMetadata

Configure and generate the SAML metadata for this Rubrik cluster. The call returns the download URL for the metadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootSaml.ConfigRubrikSamlMetadata(ctx, shared.RubrikSamlMetadataInfo{
        HostAddress: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RubrikSamlMetadataSummary != nil {
        // handle response
    }
}
```

## GetSamlSsoStatus

An object that contains two values. A Boolean value that determines whether or not SSO is enabled and an optional String value that indicates the name of the default IdP authentication domain for SSO login. When the boolean value is 'true,' SAML SSO is enabled. When the Boolean value is 'false,' SAML SSO is disabled.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootSaml.GetSamlSsoStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SamlSsoStatus != nil {
        // handle response
    }
}
```

## MakeSamlAuthnRequest

Make a SAML authentication request for a specified IdP Authentication Domain.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootSaml.MakeSamlAuthnRequest(ctx, operations.MakeSamlAuthnRequestRequest{
        SamlSsoAuthnRequestInfo: &shared.SamlSsoAuthnRequestInfo{
            IsForIdpTest: sdk.Bool(false),
            RedirectPath: sdk.String("necessitatibus"),
        },
        IdpName: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SamlSsoAuthnRequestDetail != nil {
        // handle response
    }
}
```
