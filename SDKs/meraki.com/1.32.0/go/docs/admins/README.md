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
            Email: "Beth.Tillman@hotmail.com",
            Name: "Yolanda Hirthe",
            Networks: []CreateOrganizationAdminRequestBodyNetworks{
                operations.CreateOrganizationAdminRequestBodyNetworks{
                    Access: "dolorum",
                    ID: "3c28744e-d53b-488f-ba8d-8f5c0b2f2fb7",
                },
                operations.CreateOrganizationAdminRequestBodyNetworks{
                    Access: "expedita",
                    ID: "194a276b-2691-46fe-9f08-f4294e3698f4",
                },
                operations.CreateOrganizationAdminRequestBodyNetworks{
                    Access: "tempora",
                    ID: "7f603e8b-445e-480c-a55e-fd20e457e185",
                },
            },
            OrgAccess: operations.CreateOrganizationAdminRequestBodyOrgAccessEnumNone,
            Tags: []CreateOrganizationAdminRequestBodyTags{
                operations.CreateOrganizationAdminRequestBodyTags{
                    Access: operations.CreateOrganizationAdminRequestBodyTagsAccessEnumGuestAmbassador,
                    Tag: "dolorum",
                },
                operations.CreateOrganizationAdminRequestBodyTags{
                    Access: operations.CreateOrganizationAdminRequestBodyTagsAccessEnumMonitorOnly,
                    Tag: "error",
                },
                operations.CreateOrganizationAdminRequestBodyTags{
                    Access: operations.CreateOrganizationAdminRequestBodyTagsAccessEnumReadOnly,
                    Tag: "expedita",
                },
            },
        },
        OrganizationID: "debitis",
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
        AdminID: "neque",
        OrganizationID: "dolorum",
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
        OrganizationID: "nostrum",
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
            Name: sdk.String("Lorenzo Lowe"),
            Networks: []UpdateOrganizationAdminRequestBodyNetworks{
                operations.UpdateOrganizationAdminRequestBodyNetworks{
                    Access: "fugit",
                    ID: "4d0ab407-5088-4e51-8620-65e904f3b119",
                },
                operations.UpdateOrganizationAdminRequestBodyNetworks{
                    Access: "labore",
                    ID: "b8abf603-a79f-49df-a0ab-7da8a50ce187",
                },
                operations.UpdateOrganizationAdminRequestBodyNetworks{
                    Access: "asperiores",
                    ID: "86bc173d-689e-4ee9-926f-8d986e881ead",
                },
            },
            OrgAccess: operations.UpdateOrganizationAdminRequestBodyOrgAccessEnumFull.ToPointer(),
            Tags: []UpdateOrganizationAdminRequestBodyTags{
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: operations.UpdateOrganizationAdminRequestBodyTagsAccessEnumFull,
                    Tag: "repudiandae",
                },
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: operations.UpdateOrganizationAdminRequestBodyTagsAccessEnumFull,
                    Tag: "accusantium",
                },
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: operations.UpdateOrganizationAdminRequestBodyTagsAccessEnumFull,
                    Tag: "dolores",
                },
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: operations.UpdateOrganizationAdminRequestBodyTagsAccessEnumGuestAmbassador,
                    Tag: "laboriosam",
                },
            },
        },
        AdminID: "velit",
        OrganizationID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdmin200ApplicationJSONObject != nil {
        // handle response
    }
}
```
