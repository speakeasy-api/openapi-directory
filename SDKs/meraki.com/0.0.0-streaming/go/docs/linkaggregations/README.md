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
                    PortID: "itaque",
                    Serial: "dolorum",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "architecto",
                    Serial: "omnis",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "tenetur",
                    Serial: "quasi",
                },
            },
            SwitchProfilePorts: []CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "et",
                    Profile: "voluptate",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "ipsa",
                    Profile: "minima",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "veritatis",
                    Profile: "consectetur",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "adipisci",
                    Profile: "iste",
                },
            },
        },
        NetworkID: "temporibus",
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
        LinkAggregationID: "accusantium",
        NetworkID: "rem",
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
        NetworkID: "aut",
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
                    PortID: "eum",
                    Serial: "mollitia",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "ab",
                    Serial: "corrupti",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "non",
                    Serial: "voluptatem",
                },
            },
            SwitchProfilePorts: []UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "occaecati",
                    Profile: "numquam",
                },
            },
        },
        LinkAggregationID: "impedit",
        NetworkID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchLinkAggregation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
