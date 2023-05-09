# LinkAggregations

### Available Operations

* [CreateNetworkSwitchLinkAggregation](#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [DeleteNetworkSwitchLinkAggregation](#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [GetNetworkSwitchLinkAggregations](#getnetworkswitchlinkaggregations) - List link aggregation groups
* [UpdateNetworkSwitchLinkAggregation](#updatenetworkswitchlinkaggregation) - Update a link aggregation group

## CreateNetworkSwitchLinkAggregation

Create a link aggregation group

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
    res, err := s.LinkAggregations.CreateNetworkSwitchLinkAggregation(ctx, operations.CreateNetworkSwitchLinkAggregationRequest{
        RequestBody: &operations.CreateNetworkSwitchLinkAggregationRequestBody{
            SwitchPorts: []CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "cupiditate",
                    Serial: "natus",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "excepturi",
                    Serial: "quos",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "eos",
                    Serial: "voluptatum",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "iure",
                    Serial: "iste",
                },
            },
            SwitchProfilePorts: []CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "debitis",
                    Profile: "reiciendis",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "optio",
                    Profile: "perferendis",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "harum",
                    Profile: "fugit",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "velit",
                    Profile: "natus",
                },
            },
        },
        NetworkID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchLinkAggregation201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkSwitchLinkAggregation

Split a link aggregation group into separate ports

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
    res, err := s.LinkAggregations.DeleteNetworkSwitchLinkAggregation(ctx, operations.DeleteNetworkSwitchLinkAggregationRequest{
        LinkAggregationID: "alias",
        NetworkID: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkSwitchLinkAggregations

List link aggregation groups

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
    res, err := s.LinkAggregations.GetNetworkSwitchLinkAggregations(ctx, operations.GetNetworkSwitchLinkAggregationsRequest{
        NetworkID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchLinkAggregations200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchLinkAggregation

Update a link aggregation group

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
    res, err := s.LinkAggregations.UpdateNetworkSwitchLinkAggregation(ctx, operations.UpdateNetworkSwitchLinkAggregationRequest{
        RequestBody: &operations.UpdateNetworkSwitchLinkAggregationRequestBody{
            SwitchPorts: []UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "cupiditate",
                    Serial: "aut",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "laborum",
                    Serial: "facere",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "error",
                    Serial: "atque",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "unde",
                    Serial: "recusandae",
                },
            },
            SwitchProfilePorts: []UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "officia",
                    Profile: "consectetur",
                },
            },
        },
        LinkAggregationID: "tempora",
        NetworkID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchLinkAggregation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
