# Saml

### Available Operations

* [CreateOrganizationSamlIdp](#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [DeleteOrganizationSamlIdp](#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [GetOrganizationSaml](#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [GetOrganizationSamlIdp](#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [GetOrganizationSamlIdps](#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [UpdateOrganizationSaml](#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
* [UpdateOrganizationSamlIdp](#updateorganizationsamlidp) - Update a SAML IdP in your organization

## CreateOrganizationSamlIdp

Create a SAML IdP for your organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Saml.CreateOrganizationSamlIdp(ctx, operations.CreateOrganizationSamlIdpRequest{
        RequestBody: operations.CreateOrganizationSamlIdpRequestBody{
            SloLogoutURL: sdk.String("eos"),
            X509certSha1Fingerprint: "saepe",
        },
        OrganizationID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationSamlIdp201ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DeleteOrganizationSamlIdp

Remove a SAML IdP in your organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Saml.DeleteOrganizationSamlIdp(ctx, operations.DeleteOrganizationSamlIdpRequest{
        IdpID: "illum",
        OrganizationID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationSaml

Returns the SAML SSO enabled settings for an organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Saml.GetOrganizationSaml(ctx, operations.GetOrganizationSamlRequest{
        OrganizationID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSaml200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSamlIdp

Get a SAML IdP from your organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Saml.GetOrganizationSamlIdp(ctx, operations.GetOrganizationSamlIdpRequest{
        IdpID: "nam",
        OrganizationID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSamlIdp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSamlIdps

List the SAML IdPs in your organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Saml.GetOrganizationSamlIdps(ctx, operations.GetOrganizationSamlIdpsRequest{
        OrganizationID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSamlIdps200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationSaml

Updates the SAML SSO enabled settings for an organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Saml.UpdateOrganizationSaml(ctx, operations.UpdateOrganizationSamlRequest{
        RequestBody: &operations.UpdateOrganizationSamlRequestBody{
            Enabled: sdk.Bool(false),
        },
        OrganizationID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSaml200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationSamlIdp

Update a SAML IdP in your organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Saml.UpdateOrganizationSamlIdp(ctx, operations.UpdateOrganizationSamlIdpRequest{
        RequestBody: &operations.UpdateOrganizationSamlIdpRequestBody{
            SloLogoutURL: sdk.String("fuga"),
            X509certSha1Fingerprint: sdk.String("quis"),
        },
        IdpID: "voluptates",
        OrganizationID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSamlIdp200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
