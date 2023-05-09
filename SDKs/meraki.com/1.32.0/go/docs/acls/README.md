# Acls

### Available Operations

* [CreateOrganizationAdaptivePolicyACL](#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [DeleteOrganizationAdaptivePolicyACL](#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [GetOrganizationAdaptivePolicyACL](#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [GetOrganizationAdaptivePolicyAcls](#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [UpdateOrganizationAdaptivePolicyACL](#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL

## CreateOrganizationAdaptivePolicyACL

Creates new adaptive policy ACL

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
    res, err := s.Acls.CreateOrganizationAdaptivePolicyACL(ctx, operations.CreateOrganizationAdaptivePolicyACLRequest{
        RequestBody: operations.CreateOrganizationAdaptivePolicyACLRequestBody{
            Description: sdk.String("architecto"),
            IPVersion: operations.CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumIpv4,
            Name: "Cecilia Crooks",
            Rules: []CreateOrganizationAdaptivePolicyACLRequestBodyRules{
                operations.CreateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("numquam"),
                    Policy: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp,
                    SrcPort: sdk.String("molestiae"),
                },
                operations.CreateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("velit"),
                    Policy: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumAny,
                    SrcPort: sdk.String("quis"),
                },
                operations.CreateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("vitae"),
                    Policy: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumTCP,
                    SrcPort: sdk.String("enim"),
                },
            },
        },
        OrganizationID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationAdaptivePolicyACL200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteOrganizationAdaptivePolicyACL

Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.

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
    res, err := s.Acls.DeleteOrganizationAdaptivePolicyACL(ctx, operations.DeleteOrganizationAdaptivePolicyACLRequest{
        ACLID: "quo",
        OrganizationID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyACL

Returns the adaptive policy ACL information

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
    res, err := s.Acls.GetOrganizationAdaptivePolicyACL(ctx, operations.GetOrganizationAdaptivePolicyACLRequest{
        ACLID: "tenetur",
        OrganizationID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyACL200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyAcls

List adaptive policy ACLs in a organization

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
    res, err := s.Acls.GetOrganizationAdaptivePolicyAcls(ctx, operations.GetOrganizationAdaptivePolicyAclsRequest{
        OrganizationID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyAcls200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationAdaptivePolicyACL

Updates an adaptive policy ACL

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
    res, err := s.Acls.UpdateOrganizationAdaptivePolicyACL(ctx, operations.UpdateOrganizationAdaptivePolicyACLRequest{
        RequestBody: &operations.UpdateOrganizationAdaptivePolicyACLRequestBody{
            Description: sdk.String("possimus"),
            IPVersion: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumAny.ToPointer(),
            Name: sdk.String("Sabrina Smitham DVM"),
            Rules: []UpdateOrganizationAdaptivePolicyACLRequestBodyRules{
                operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("vero"),
                    Policy: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumTCP,
                    SrcPort: sdk.String("voluptatibus"),
                },
                operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("ipsa"),
                    Policy: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp,
                    SrcPort: sdk.String("cum"),
                },
                operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("perferendis"),
                    Policy: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp,
                    SrcPort: sdk.String("ut"),
                },
                operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("maiores"),
                    Policy: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp,
                    SrcPort: sdk.String("dolore"),
                },
            },
        },
        ACLID: "iusto",
        OrganizationID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdaptivePolicyACL200ApplicationJSONObject != nil {
        // handle response
    }
}
```
