# SAMLRoles

### Available Operations

* [CreateOrganizationSamlRole](#createorganizationsamlrole) - Create a SAML role
* [GetOrganizationSamlRole](#getorganizationsamlrole) - Return a SAML role
* [GetOrganizationSamlRoles](#getorganizationsamlroles) - List the SAML roles for this organization
* [UpdateOrganizationSamlRole](#updateorganizationsamlrole) - Update a SAML role

## CreateOrganizationSamlRole

Create a SAML role

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
    res, err := s.SAMLRoles.CreateOrganizationSamlRole(ctx, operations.CreateOrganizationSamlRoleRequest{
        RequestBody: operations.CreateOrganizationSamlRoleRequestBody{
            Networks: []CreateOrganizationSamlRoleRequestBodyNetworks{
                operations.CreateOrganizationSamlRoleRequestBodyNetworks{
                    Access: "necessitatibus",
                    ID: "b9665b85-efbd-402b-ae0b-e2d782259e3e",
                },
                operations.CreateOrganizationSamlRoleRequestBodyNetworks{
                    Access: "similique",
                    ID: "4b5197f9-2443-4da7-8e52-b895c537c645",
                },
                operations.CreateOrganizationSamlRoleRequestBodyNetworks{
                    Access: "magnam",
                    ID: "efb0b348-96c3-4ca5-acfb-e2fd57075779",
                },
                operations.CreateOrganizationSamlRoleRequestBodyNetworks{
                    Access: "dolores",
                    ID: "9177deac-646e-4cb5-b340-9e3eb1e5a2b1",
                },
            },
            OrgAccess: "consequuntur",
            Role: "necessitatibus",
            Tags: []CreateOrganizationSamlRoleRequestBodyTags{
                operations.CreateOrganizationSamlRoleRequestBodyTags{
                    Access: "ipsa",
                    Tag: "ducimus",
                },
                operations.CreateOrganizationSamlRoleRequestBodyTags{
                    Access: "maiores",
                    Tag: "veritatis",
                },
                operations.CreateOrganizationSamlRoleRequestBodyTags{
                    Access: "quasi",
                    Tag: "laboriosam",
                },
            },
        },
        OrganizationID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationSamlRole201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSamlRole

Return a SAML role

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
    res, err := s.SAMLRoles.GetOrganizationSamlRole(ctx, operations.GetOrganizationSamlRoleRequest{
        OrganizationID: "libero",
        SamlRoleID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSamlRole200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSamlRoles

List the SAML roles for this organization

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
    res, err := s.SAMLRoles.GetOrganizationSamlRoles(ctx, operations.GetOrganizationSamlRolesRequest{
        OrganizationID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSamlRoles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationSamlRole

Update a SAML role

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
    res, err := s.SAMLRoles.UpdateOrganizationSamlRole(ctx, operations.UpdateOrganizationSamlRoleRequest{
        RequestBody: &operations.UpdateOrganizationSamlRoleRequestBody{
            Networks: []UpdateOrganizationSamlRoleRequestBodyNetworks{
                operations.UpdateOrganizationSamlRoleRequestBodyNetworks{
                    Access: "aliquam",
                    ID: "5fc95fa8-8970-4e18-9dbb-30fcb33ea055",
                },
                operations.UpdateOrganizationSamlRoleRequestBodyNetworks{
                    Access: "libero",
                    ID: "197cd44e-2f52-4d82-9351-3bb6f48b656b",
                },
            },
            OrgAccess: sdk.String("minus"),
            Role: sdk.String("facere"),
            Tags: []UpdateOrganizationSamlRoleRequestBodyTags{
                operations.UpdateOrganizationSamlRoleRequestBodyTags{
                    Access: "ipsum",
                    Tag: "ad",
                },
                operations.UpdateOrganizationSamlRoleRequestBodyTags{
                    Access: "voluptatibus",
                    Tag: "voluptatibus",
                },
                operations.UpdateOrganizationSamlRoleRequestBodyTags{
                    Access: "consequuntur",
                    Tag: "debitis",
                },
            },
        },
        OrganizationID: "labore",
        SamlRoleID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSamlRole200ApplicationJSONObject != nil {
        // handle response
    }
}
```
