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
                "porro",
            },
            Email: sdk.String("Delia42@gmail.com"),
            Mac: sdk.String("ea"),
            SmDeviceID: sdk.String("beatae"),
            SmUserID: sdk.String("vero"),
            Type: operations.CreateNetworkPiiRequestRequestBodyTypeEnumRestrictProcessing.ToPointer(),
            Username: sdk.String("Hollis59"),
        },
        NetworkID: "earum",
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
        NetworkID: "dicta",
        RequestID: "impedit",
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
        BluetoothMac: sdk.String("voluptatibus"),
        Email: sdk.String("Torey_Abernathy@yahoo.com"),
        Imei: sdk.String("velit"),
        Mac: sdk.String("laborum"),
        NetworkID: "non",
        Serial: sdk.String("dolor"),
        Username: sdk.String("Jayne0"),
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
        NetworkID: "officia",
        RequestID: "recusandae",
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
        NetworkID: "ea",
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
        BluetoothMac: sdk.String("quidem"),
        Email: sdk.String("Meaghan_Schowalter@yahoo.com"),
        Imei: sdk.String("deleniti"),
        Mac: sdk.String("a"),
        NetworkID: "voluptate",
        Serial: sdk.String("ullam"),
        Username: sdk.String("Layla_Treutel"),
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
        BluetoothMac: sdk.String("ipsam"),
        Email: sdk.String("Marcelino.Mueller@yahoo.com"),
        Imei: sdk.String("veritatis"),
        Mac: sdk.String("vero"),
        NetworkID: "consectetur",
        Serial: sdk.String("vitae"),
        Username: sdk.String("Armani18"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiSmOwnersForKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```
