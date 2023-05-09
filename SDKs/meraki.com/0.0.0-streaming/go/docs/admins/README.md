# Admins

### Available Operations

* [CreateOrganizationAdmin](#createorganizationadmin) - Create a new dashboard administrator
* [DeleteOrganizationAdmin](#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [GetOrganizationAdmins](#getorganizationadmins) - List the dashboard administrators in this organization
* [UpdateOrganizationAdmin](#updateorganizationadmin) - Update an administrator

## CreateOrganizationAdmin

Create a new dashboard administrator

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
    res, err := s.Admins.CreateOrganizationAdmin(ctx, operations.CreateOrganizationAdminRequest{
        RequestBody: operations.CreateOrganizationAdminRequestBody{
            AuthenticationMethod: operations.CreateOrganizationAdminRequestBodyAuthenticationMethodEnumEmail.ToPointer(),
            Email: "Jovan.Sauer72@yahoo.com",
            Name: "Seth Conroy",
            Networks: []CreateOrganizationAdminRequestBodyNetworks{
                operations.CreateOrganizationAdminRequestBodyNetworks{
                    Access: "totam",
                    ID: "16742cb7-3920-4592-9396-fea7596eb10f",
                },
                operations.CreateOrganizationAdminRequestBodyNetworks{
                    Access: "est",
                    ID: "aa2352c5-9559-407a-bf1a-3a2fa9467739",
                },
                operations.CreateOrganizationAdminRequestBodyNetworks{
                    Access: "quia",
                    ID: "51aa52c3-f5ad-4019-9a1f-fe78f097b007",
                },
                operations.CreateOrganizationAdminRequestBodyNetworks{
                    Access: "ut",
                    ID: "f15471b5-e6e1-43b9-9d48-8e1e91e450ad",
                },
            },
            OrgAccess: operations.CreateOrganizationAdminRequestBodyOrgAccessEnumEnterprise,
            Tags: []CreateOrganizationAdminRequestBodyTags{
                operations.CreateOrganizationAdminRequestBodyTags{
                    Access: "distinctio",
                    Tag: "quibusdam",
                },
                operations.CreateOrganizationAdminRequestBodyTags{
                    Access: "labore",
                    Tag: "modi",
                },
                operations.CreateOrganizationAdminRequestBodyTags{
                    Access: "qui",
                    Tag: "aliquid",
                },
            },
        },
        OrganizationID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationAdmin201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteOrganizationAdmin

Revoke all access for a dashboard administrator within this organization

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
    res, err := s.Admins.DeleteOrganizationAdmin(ctx, operations.DeleteOrganizationAdminRequest{
        AdminID: "quos",
        OrganizationID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationAdmins

List the dashboard administrators in this organization

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
    res, err := s.Admins.GetOrganizationAdmins(ctx, operations.GetOrganizationAdminsRequest{
        OrganizationID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdmins200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationAdmin

Update an administrator

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
    res, err := s.Admins.UpdateOrganizationAdmin(ctx, operations.UpdateOrganizationAdminRequest{
        RequestBody: &operations.UpdateOrganizationAdminRequestBody{
            Name: sdk.String("Vernon Abshire"),
            Networks: []UpdateOrganizationAdminRequestBodyNetworks{
                operations.UpdateOrganizationAdminRequestBodyNetworks{
                    Access: "tempora",
                    ID: "bb4f63c9-69e9-4a3e-ba77-dfb14cd66ae3",
                },
                operations.UpdateOrganizationAdminRequestBodyNetworks{
                    Access: "occaecati",
                    ID: "5efb9ba8-8f3a-4669-9707-4ba4469b6e21",
                },
                operations.UpdateOrganizationAdminRequestBodyNetworks{
                    Access: "magnam",
                    ID: "1959890a-fa56-43e2-916f-e4c8b711e5b7",
                },
            },
            OrgAccess: operations.UpdateOrganizationAdminRequestBodyOrgAccessEnumReadOnly.ToPointer(),
            Tags: []UpdateOrganizationAdminRequestBodyTags{
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: "sed",
                    Tag: "saepe",
                },
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: "pariatur",
                    Tag: "accusantium",
                },
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: "consequuntur",
                    Tag: "praesentium",
                },
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: "natus",
                    Tag: "magni",
                },
            },
        },
        AdminID: "sunt",
        OrganizationID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdmin200ApplicationJSONObject != nil {
        // handle response
    }
}
```
