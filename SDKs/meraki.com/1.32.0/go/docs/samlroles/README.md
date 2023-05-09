# SamlRoles

### Available Operations

* [CreateOrganizationSamlRole](#createorganizationsamlrole) - Create a SAML role
* [DeleteOrganizationSamlRole](#deleteorganizationsamlrole) - Remove a SAML role
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
    res, err := s.SamlRoles.CreateOrganizationSamlRole(ctx, operations.CreateOrganizationSamlRoleRequest{
        RequestBody: operations.CreateOrganizationSamlRoleRequestBody{
            Networks: []CreateOrganizationSamlRoleRequestBodyNetworks{
                operations.CreateOrganizationSamlRoleRequestBodyNetworks{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyNetworksAccessEnumGuestAmbassador,
                    ID: "34d732dd-9c82-4956-a467-a249c8fa9a5e",
                },
                operations.CreateOrganizationSamlRoleRequestBodyNetworks{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyNetworksAccessEnumReadOnly,
                    ID: "840eec16-bb30-41cf-b060-1769022b4f07",
                },
                operations.CreateOrganizationSamlRoleRequestBodyNetworks{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyNetworksAccessEnumReadOnly,
                    ID: "1ed6fbd1-9edd-46d7-b1f5-eefd49bed6ff",
                },
            },
            OrgAccess: operations.CreateOrganizationSamlRoleRequestBodyOrgAccessEnumEnterprise,
            Role: "tenetur",
            Tags: []CreateOrganizationSamlRoleRequestBodyTags{
                operations.CreateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyTagsAccessEnumMonitorOnly,
                    Tag: "ipsam",
                },
                operations.CreateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyTagsAccessEnumFull,
                    Tag: "omnis",
                },
                operations.CreateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyTagsAccessEnumReadOnly,
                    Tag: "exercitationem",
                },
                operations.CreateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyTagsAccessEnumReadOnly,
                    Tag: "quod",
                },
            },
        },
        OrganizationID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationSamlRole201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteOrganizationSamlRole

Remove a SAML role

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
    res, err := s.SamlRoles.DeleteOrganizationSamlRole(ctx, operations.DeleteOrganizationSamlRoleRequest{
        OrganizationID: "sit",
        SamlRoleID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.SamlRoles.GetOrganizationSamlRole(ctx, operations.GetOrganizationSamlRoleRequest{
        OrganizationID: "ex",
        SamlRoleID: "dolore",
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
    res, err := s.SamlRoles.GetOrganizationSamlRoles(ctx, operations.GetOrganizationSamlRolesRequest{
        OrganizationID: "corporis",
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
    res, err := s.SamlRoles.UpdateOrganizationSamlRole(ctx, operations.UpdateOrganizationSamlRoleRequest{
        RequestBody: &operations.UpdateOrganizationSamlRoleRequestBody{
            Networks: []UpdateOrganizationSamlRoleRequestBodyNetworks{
                operations.UpdateOrganizationSamlRoleRequestBodyNetworks{
                    Access: operations.UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnumReadOnly,
                    ID: "e3bac4c0-df1c-45fd-bb7c-4ce10d318d35",
                },
            },
            OrgAccess: operations.UpdateOrganizationSamlRoleRequestBodyOrgAccessEnumFull.ToPointer(),
            Role: sdk.String("dolorem"),
            Tags: []UpdateOrganizationSamlRoleRequestBodyTags{
                operations.UpdateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumFull,
                    Tag: "officiis",
                },
                operations.UpdateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumFull,
                    Tag: "repellendus",
                },
                operations.UpdateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumGuestAmbassador,
                    Tag: "quisquam",
                },
            },
        },
        OrganizationID: "porro",
        SamlRoleID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSamlRole200ApplicationJSONObject != nil {
        // handle response
    }
}
```
