# Pii

### Available Operations

* [CreateNetworkPiiRequest](#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [DeleteNetworkPiiRequest](#deletenetworkpiirequest) - Delete a restrict processing PII request
* [GetNetworkPiiPiiKeys](#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [GetNetworkPiiRequest](#getnetworkpiirequest) - Return a PII request
* [GetNetworkPiiRequests](#getnetworkpiirequests) - List the PII requests for this network or organization
* [GetNetworkPiiSmDevicesForKey](#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [GetNetworkPiiSmOwnersForKey](#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

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
    res, err := s.Pii.CreateNetworkPiiRequest(ctx, operations.CreateNetworkPiiRequestRequest{
        RequestBody: &operations.CreateNetworkPiiRequestRequestBody{
            Datasets: []string{
                "nemo",
                "sapiente",
                "repellendus",
            },
            Email: sdk.String("Renee.Mertz@hotmail.com"),
            Mac: sdk.String("voluptatem"),
            SmDeviceID: sdk.String("dolor"),
            SmUserID: sdk.String("exercitationem"),
            Type: operations.CreateNetworkPiiRequestRequestBodyTypeEnumDelete.ToPointer(),
            Username: sdk.String("Sage99"),
        },
        NetworkID: "cum",
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
    res, err := s.Pii.DeleteNetworkPiiRequest(ctx, operations.DeleteNetworkPiiRequestRequest{
        NetworkID: "temporibus",
        RequestID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
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
    res, err := s.Pii.GetNetworkPiiPiiKeys(ctx, operations.GetNetworkPiiPiiKeysRequest{
        BluetoothMac: sdk.String("odio"),
        Email: sdk.String("Jordane88@hotmail.com"),
        Imei: sdk.String("temporibus"),
        Mac: sdk.String("quos"),
        NetworkID: "suscipit",
        Serial: sdk.String("nam"),
        Username: sdk.String("Alena_Stark43"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiPiiKeys200ApplicationJSONObject != nil {
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
    res, err := s.Pii.GetNetworkPiiRequest(ctx, operations.GetNetworkPiiRequestRequest{
        NetworkID: "non",
        RequestID: "laborum",
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
    res, err := s.Pii.GetNetworkPiiRequests(ctx, operations.GetNetworkPiiRequestsRequest{
        NetworkID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiRequests200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
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
    res, err := s.Pii.GetNetworkPiiSmDevicesForKey(ctx, operations.GetNetworkPiiSmDevicesForKeyRequest{
        BluetoothMac: sdk.String("atque"),
        Email: sdk.String("Patricia_Turcotte62@gmail.com"),
        Imei: sdk.String("nulla"),
        Mac: sdk.String("dicta"),
        NetworkID: "voluptatem",
        Serial: sdk.String("provident"),
        Username: sdk.String("Phoebe.Bartell"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiSmDevicesForKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
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
    res, err := s.Pii.GetNetworkPiiSmOwnersForKey(ctx, operations.GetNetworkPiiSmOwnersForKeyRequest{
        BluetoothMac: sdk.String("est"),
        Email: sdk.String("Jenifer89@gmail.com"),
        Imei: sdk.String("velit"),
        Mac: sdk.String("dolorem"),
        NetworkID: "quisquam",
        Serial: sdk.String("porro"),
        Username: sdk.String("Louisa.Hyatt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiSmOwnersForKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```
