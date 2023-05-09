# FirewallActions

### Available Operations

* [GetFirewallsIDActions](#getfirewallsidactions) - Get all Actions for a Firewall
* [GetFirewallsIDActionsActionID](#getfirewallsidactionsactionid) - Get an Action for a Firewall
* [PostFirewallsIDActionsApplyToResources](#postfirewallsidactionsapplytoresources) - Apply to Resources
* [PostFirewallsIDActionsRemoveFromResources](#postfirewallsidactionsremovefromresources) - Remove from Resources
* [PostFirewallsIDActionsSetRules](#postfirewallsidactionssetrules) - Set Rules

## GetFirewallsIDActions

Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FirewallActions.GetFirewallsIDActions(ctx, operations.GetFirewallsIDActionsRequest{
        ID: 143353,
        Sort: operations.GetFirewallsIDActionsSortParameterSortEnumProgress.ToPointer(),
        Status: operations.GetFirewallsIDActionsStatusParameterStatusEnumError.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```

## GetFirewallsIDActionsActionID

Returns a specific Action for a Firewall.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FirewallActions.GetFirewallsIDActionsActionID(ctx, operations.GetFirewallsIDActionsActionIDRequest{
        ActionID: 758616,
        ID: 521848,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostFirewallsIDActionsApplyToResources

Applies one Firewall to multiple resources.

Currently servers (public network interface) and label selectors are supported.

#### Call specific error codes

| Code                          | Description                                                   |
|-------------------------------|---------------------------------------------------------------|
| `firewall_already_applied`    | Firewall was already applied on resource                      |
| `incompatible_network_type`   | The Network type is incompatible for the given resource       |
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FirewallActions.PostFirewallsIDActionsApplyToResources(ctx, operations.PostFirewallsIDActionsApplyToResourcesRequest{
        RequestBody: &operations.PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequest{
            ApplyTo: []PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources{
                operations.PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources{
                    LabelSelector: &operations.PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector{
                        Selector: "env=prod",
                    },
                    Server: &operations.PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer{
                        ID: 414662,
                    },
                    Type: operations.PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnumServer.ToPointer(),
                },
            },
        },
        ID: 264555,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```

## PostFirewallsIDActionsRemoveFromResources

Removes one Firewall from multiple resources.

Currently only Servers (and their public network interfaces) are supported.

#### Call specific error codes

| Code                                  | Description                                                            |
|---------------------------------------|------------------------------------------------------------------------|
| `firewall_already_removed`            | Firewall was already removed from the resource                         |
| `firewall_resource_not_found`         | The resource the Firewall should be attached to was not found          |
| `firewall_managed_by_label_selector`  | Firewall was applied via label selector and cannot be removed manually |


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FirewallActions.PostFirewallsIDActionsRemoveFromResources(ctx, operations.PostFirewallsIDActionsRemoveFromResourcesRequest{
        RequestBody: &operations.PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequest{
            RemoveFrom: []PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources{
                operations.PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources{
                    LabelSelector: &operations.PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector{
                        Selector: "env=prod",
                    },
                    Server: &operations.PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer{
                        ID: 774234,
                    },
                    Type: operations.PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnumLabelSelector.ToPointer(),
                },
            },
        },
        ID: 456150,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```

## PostFirewallsIDActionsSetRules

Sets the rules of a Firewall.

All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
The maximum amount of rules that can be defined is 50.

#### Call specific error codes

| Code                          | Description                                                   |
|-------------------------------|---------------------------------------------------------------|
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FirewallActions.PostFirewallsIDActionsSetRules(ctx, operations.PostFirewallsIDActionsSetRulesRequest{
        RequestBody: &operations.PostFirewallsIDActionsSetRulesSetRulesRequest{
            Rules: []PostFirewallsIDActionsSetRulesSetRulesRequestRule{
                operations.PostFirewallsIDActionsSetRulesSetRulesRequestRule{
                    Description: sdk.String("excepturi"),
                    DestinationIps: []string{
                        "perferendis",
                    },
                    Direction: operations.PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnumIn,
                    Port: sdk.String("80"),
                    Protocol: operations.PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnumEsp,
                    SourceIps: []string{
                        "iste",
                    },
                },
            },
        },
        ID: 222321,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```
