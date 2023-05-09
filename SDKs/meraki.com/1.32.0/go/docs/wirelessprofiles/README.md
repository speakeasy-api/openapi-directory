# WirelessProfiles

### Available Operations

* [CreateNetworkCameraWirelessProfile](#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [DeleteNetworkCameraWirelessProfile](#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [GetDeviceCameraWirelessProfiles](#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [GetNetworkCameraWirelessProfile](#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [GetNetworkCameraWirelessProfiles](#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [UpdateDeviceCameraWirelessProfiles](#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [UpdateNetworkCameraWirelessProfile](#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.

## CreateNetworkCameraWirelessProfile

Creates a new camera wireless profile for this network.

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
    res, err := s.WirelessProfiles.CreateNetworkCameraWirelessProfile(ctx, operations.CreateNetworkCameraWirelessProfileRequest{
        RequestBody: operations.CreateNetworkCameraWirelessProfileRequestBody{
            Identity: &operations.CreateNetworkCameraWirelessProfileRequestBodyIdentity{
                Password: sdk.String("praesentium"),
                Username: sdk.String("Tiana.Wisozk50"),
            },
            Name: "Freddie Bauch",
            Ssid: operations.CreateNetworkCameraWirelessProfileRequestBodySsid{
                AuthMode: operations.CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumEightThousandAndTwentyOnexRadius.ToPointer(),
                EncryptionMode: sdk.String("nulla"),
                Name: sdk.String("Monica Hilll"),
                Psk: sdk.String("excepturi"),
            },
        },
        NetworkID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkCameraWirelessProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkCameraWirelessProfile

Delete an existing camera wireless profile for this network.

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
    res, err := s.WirelessProfiles.DeleteNetworkCameraWirelessProfile(ctx, operations.DeleteNetworkCameraWirelessProfileRequest{
        NetworkID: "non",
        WirelessProfileID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeviceCameraWirelessProfiles

Returns wireless profile assigned to the given camera

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
    res, err := s.WirelessProfiles.GetDeviceCameraWirelessProfiles(ctx, operations.GetDeviceCameraWirelessProfilesRequest{
        Serial: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraWirelessProfiles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCameraWirelessProfile

Retrieve a single camera wireless profile.

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
    res, err := s.WirelessProfiles.GetNetworkCameraWirelessProfile(ctx, operations.GetNetworkCameraWirelessProfileRequest{
        NetworkID: "maiores",
        WirelessProfileID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraWirelessProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCameraWirelessProfiles

List the camera wireless profiles for this network.

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
    res, err := s.WirelessProfiles.GetNetworkCameraWirelessProfiles(ctx, operations.GetNetworkCameraWirelessProfilesRequest{
        NetworkID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraWirelessProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraWirelessProfiles

Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.

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
    res, err := s.WirelessProfiles.UpdateDeviceCameraWirelessProfiles(ctx, operations.UpdateDeviceCameraWirelessProfilesRequest{
        RequestBody: operations.UpdateDeviceCameraWirelessProfilesRequestBody{
            Ids: operations.UpdateDeviceCameraWirelessProfilesRequestBodyIds{
                Backup: sdk.String("ipsam"),
                Primary: sdk.String("numquam"),
                Secondary: sdk.String("voluptate"),
            },
        },
        Serial: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraWirelessProfiles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCameraWirelessProfile

Update an existing camera wireless profile in this network.

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
    res, err := s.WirelessProfiles.UpdateNetworkCameraWirelessProfile(ctx, operations.UpdateNetworkCameraWirelessProfileRequest{
        RequestBody: &operations.UpdateNetworkCameraWirelessProfileRequestBody{
            Identity: &operations.UpdateNetworkCameraWirelessProfileRequestBodyIdentity{
                Password: sdk.String("ex"),
                Username: sdk.String("Jayce.Fay"),
            },
            Name: sdk.String("Jerald Wilderman"),
            Ssid: &operations.UpdateNetworkCameraWirelessProfileRequestBodySsid{
                AuthMode: operations.UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumEightThousandAndTwentyOnexRadius.ToPointer(),
                EncryptionMode: sdk.String("aperiam"),
                Name: sdk.String("Sonia Prohaska"),
                Psk: sdk.String("fugiat"),
            },
        },
        NetworkID: "vitae",
        WirelessProfileID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCameraWirelessProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
