# Requests

### Available Operations

* [CreateNetworkPiiRequest](#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [DeleteNetworkPiiRequest](#deletenetworkpiirequest) - Delete a restrict processing PII request
* [GetNetworkPiiRequest](#getnetworkpiirequest) - Return a PII request
* [GetNetworkPiiRequests](#getnetworkpiirequests) - List the PII requests for this network or organization

## CreateNetworkPiiRequest

Submit a new delete or restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

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
    res, err := s.Requests.CreateNetworkPiiRequest(ctx, operations.CreateNetworkPiiRequestRequest{
        RequestBody: &operations.CreateNetworkPiiRequestRequestBody{
            Datasets: []string{
                "veniam",
            },
            Email: sdk.String("Marques56@gmail.com"),
            Mac: sdk.String("sequi"),
            SmDeviceID: sdk.String("asperiores"),
            SmUserID: sdk.String("neque"),
            Type: operations.CreateNetworkPiiRequestRequestBodyTypeEnumDelete.ToPointer(),
            Username: sdk.String("Julien.Stamm"),
        },
        NetworkID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkPiiRequest201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkPiiRequest

Delete a restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

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
    res, err := s.Requests.DeleteNetworkPiiRequest(ctx, operations.DeleteNetworkPiiRequestRequest{
        NetworkID: "hic",
        RequestID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkPiiRequest

Return a PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

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
    res, err := s.Requests.GetNetworkPiiRequest(ctx, operations.GetNetworkPiiRequestRequest{
        NetworkID: "perferendis",
        RequestID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiRequest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPiiRequests

List the PII requests for this network or organization

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

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
    res, err := s.Requests.GetNetworkPiiRequests(ctx, operations.GetNetworkPiiRequestsRequest{
        NetworkID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiRequests200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
