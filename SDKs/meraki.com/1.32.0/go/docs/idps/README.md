# Idps

### Available Operations

* [CreateOrganizationSamlIdp](#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [DeleteOrganizationSamlIdp](#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [GetOrganizationSamlIdp](#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [GetOrganizationSamlIdps](#getorganizationsamlidps) - List the SAML IdPs in your organization.
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
    res, err := s.Idps.CreateOrganizationSamlIdp(ctx, operations.CreateOrganizationSamlIdpRequest{
        RequestBody: operations.CreateOrganizationSamlIdpRequestBody{
            SloLogoutURL: sdk.String("odit"),
            X509certSha1Fingerprint: "laudantium",
        },
        OrganizationID: "dolor",
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
    res, err := s.Idps.DeleteOrganizationSamlIdp(ctx, operations.DeleteOrganizationSamlIdpRequest{
        IdpID: "consequuntur",
        OrganizationID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Idps.GetOrganizationSamlIdp(ctx, operations.GetOrganizationSamlIdpRequest{
        IdpID: "libero",
        OrganizationID: "eum",
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
    res, err := s.Idps.GetOrganizationSamlIdps(ctx, operations.GetOrganizationSamlIdpsRequest{
        OrganizationID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSamlIdps200ApplicationJSONObjects != nil {
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
    res, err := s.Idps.UpdateOrganizationSamlIdp(ctx, operations.UpdateOrganizationSamlIdpRequest{
        RequestBody: &operations.UpdateOrganizationSamlIdpRequestBody{
            SloLogoutURL: sdk.String("totam"),
            X509certSha1Fingerprint: sdk.String("laboriosam"),
        },
        IdpID: "fugit",
        OrganizationID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSamlIdp200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
