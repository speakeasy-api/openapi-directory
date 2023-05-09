# Sm

### Available Operations

* [CreateNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [GetNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [GetNetworkSmCellularUsageHistory](#getnetworksmcellularusagehistory) - Return the client's daily cellular data usage history
* [GetNetworkSmCerts](#getnetworksmcerts) - List the certs on a device
* [GetNetworkSmConnectivity](#getnetworksmconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [GetNetworkSmDesktopLogs](#getnetworksmdesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [GetNetworkSmDeviceCommandLogs](#getnetworksmdevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [GetNetworkSmDeviceProfiles](#getnetworksmdeviceprofiles) - Get the profiles associated with a device
* [GetNetworkSmDevices](#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [GetNetworkSmNetworkAdapters](#getnetworksmnetworkadapters) - List the network adapters of a device
* [GetNetworkSmPerformanceHistory](#getnetworksmperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [GetNetworkSmProfiles](#getnetworksmprofiles) - List all the profiles in the network
* [GetNetworkSmRestrictions](#getnetworksmrestrictions) - List the restrictions on a device
* [GetNetworkSmSecurityCenters](#getnetworksmsecuritycenters) - List the security centers on a device
* [GetNetworkSmSoftwares](#getnetworksmsoftwares) - Get a list of softwares associated with a device
* [GetNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [GetNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [GetNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [GetNetworkSmWlanLists](#getnetworksmwlanlists) - List the saved SSID names on a device
* [LockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [RefreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [UnenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [UpdateNetworkSmDeviceFields](#updatenetworksmdevicefields) - Modify the fields of a device
* [UpdateNetworkSmDevicesTags](#updatenetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [WipeNetworkSmDevice](#wipenetworksmdevice) - Wipe a device

## CreateNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt

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
    res, err := s.Sm.CreateNetworkSmBypassActivationLockAttempt(ctx, operations.CreateNetworkSmBypassActivationLockAttemptRequest{
        RequestBody: operations.CreateNetworkSmBypassActivationLockAttemptRequestBody{
            Ids: []string{
                "reprehenderit",
            },
        },
        NetworkID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSmBypassActivationLockAttempt201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt status

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
    res, err := s.Sm.GetNetworkSmBypassActivationLockAttempt(ctx, operations.GetNetworkSmBypassActivationLockAttemptRequest{
        AttemptID: "neque",
        NetworkID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmBypassActivationLockAttempt200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

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
    res, err := s.Sm.GetNetworkSmCellularUsageHistory(ctx, operations.GetNetworkSmCellularUsageHistoryRequest{
        DeviceID: "est",
        NetworkID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmCellularUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmCerts

List the certs on a device

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
    res, err := s.Sm.GetNetworkSmCerts(ctx, operations.GetNetworkSmCertsRequest{
        DeviceID: "eligendi",
        NetworkID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmCerts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

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
    res, err := s.Sm.GetNetworkSmConnectivity(ctx, operations.GetNetworkSmConnectivityRequest{
        EndingBefore: sdk.String("unde"),
        ID: "e7319c17-7d52-45f7-bb11-4eeb52ff785f",
        NetworkID: "quisquam",
        PerPage: sdk.Int64(197259),
        StartingAfter: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmConnectivity200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

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
    res, err := s.Sm.GetNetworkSmDesktopLogs(ctx, operations.GetNetworkSmDesktopLogsRequest{
        EndingBefore: sdk.String("deleniti"),
        ID: "14d4c98e-0c2b-4b89-ab75-dad636c60050",
        NetworkID: "amet",
        PerPage: sdk.Int64(849320),
        StartingAfter: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDesktopLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceCommandLogs

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

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
    res, err := s.Sm.GetNetworkSmDeviceCommandLogs(ctx, operations.GetNetworkSmDeviceCommandLogsRequest{
        EndingBefore: sdk.String("quidem"),
        ID: "b31180f7-39ae-49e0-97eb-809e2810331f",
        NetworkID: "dolor",
        PerPage: sdk.Int64(582320),
        StartingAfter: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceCommandLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceProfiles

Get the profiles associated with a device

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
    res, err := s.Sm.GetNetworkSmDeviceProfiles(ctx, operations.GetNetworkSmDeviceProfilesRequest{
        DeviceID: "beatae",
        NetworkID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDevices

List the devices enrolled in an SM network with various specified fields and filters

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
    res, err := s.Sm.GetNetworkSmDevices(ctx, operations.GetNetworkSmDevicesRequest{
        BatchSize: sdk.Int64(287544),
        BatchToken: sdk.String("minus"),
        Fields: sdk.String("esse"),
        Ids: sdk.String("voluptatem"),
        NetworkID: "perferendis",
        Scope: sdk.String("rerum"),
        Serials: sdk.String("ea"),
        WifiMacs: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmNetworkAdapters

List the network adapters of a device

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
    res, err := s.Sm.GetNetworkSmNetworkAdapters(ctx, operations.GetNetworkSmNetworkAdaptersRequest{
        DeviceID: "dignissimos",
        NetworkID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmNetworkAdapters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmPerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

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
    res, err := s.Sm.GetNetworkSmPerformanceHistory(ctx, operations.GetNetworkSmPerformanceHistoryRequest{
        EndingBefore: sdk.String("velit"),
        ID: "c93c73b9-da3f-42ce-9a7e-23f2257411fa",
        NetworkID: "delectus",
        PerPage: sdk.Int64(251212),
        StartingAfter: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmPerformanceHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmProfiles

List all the profiles in the network

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
    res, err := s.Sm.GetNetworkSmProfiles(ctx, operations.GetNetworkSmProfilesRequest{
        NetworkID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmProfiles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmRestrictions

List the restrictions on a device

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
    res, err := s.Sm.GetNetworkSmRestrictions(ctx, operations.GetNetworkSmRestrictionsRequest{
        DeviceID: "exercitationem",
        NetworkID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmRestrictions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmSecurityCenters

List the security centers on a device

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
    res, err := s.Sm.GetNetworkSmSecurityCenters(ctx, operations.GetNetworkSmSecurityCentersRequest{
        DeviceID: "numquam",
        NetworkID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmSecurityCenters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmSoftwares

Get a list of softwares associated with a device

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
    res, err := s.Sm.GetNetworkSmSoftwares(ctx, operations.GetNetworkSmSoftwaresRequest{
        DeviceID: "modi",
        NetworkID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmSoftwares200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUserDeviceProfiles

Get the profiles associated with a user

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
    res, err := s.Sm.GetNetworkSmUserDeviceProfiles(ctx, operations.GetNetworkSmUserDeviceProfilesRequest{
        NetworkID: "explicabo",
        UserID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserDeviceProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUserSoftwares

Get a list of softwares associated with a user

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
    res, err := s.Sm.GetNetworkSmUserSoftwares(ctx, operations.GetNetworkSmUserSoftwaresRequest{
        NetworkID: "rem",
        UserID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserSoftwares200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUsers

List the owners in an SM network with various specified fields and filters

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
    res, err := s.Sm.GetNetworkSmUsers(ctx, operations.GetNetworkSmUsersRequest{
        Emails: sdk.String("odit"),
        Ids: sdk.String("deleniti"),
        NetworkID: "enim",
        Scope: sdk.String("voluptate"),
        Usernames: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmWlanLists

List the saved SSID names on a device

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
    res, err := s.Sm.GetNetworkSmWlanLists(ctx, operations.GetNetworkSmWlanListsRequest{
        DeviceID: "minima",
        NetworkID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmWlanLists200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## LockNetworkSmDevices

Lock a set of devices

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
    res, err := s.Sm.LockNetworkSmDevices(ctx, operations.LockNetworkSmDevicesRequest{
        RequestBody: &operations.LockNetworkSmDevicesRequestBody{
            Ids: sdk.String("magnam"),
            Pin: sdk.Int64(24272),
            Scope: sdk.String("modi"),
            Serials: sdk.String("eum"),
            WifiMacs: sdk.String("nesciunt"),
        },
        NetworkID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LockNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RefreshNetworkSmDeviceDetails

Refresh the details of a device

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
    res, err := s.Sm.RefreshNetworkSmDeviceDetails(ctx, operations.RefreshNetworkSmDeviceDetailsRequest{
        DeviceID: "dignissimos",
        NetworkID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnenrollNetworkSmDevice

Unenroll a device

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
    res, err := s.Sm.UnenrollNetworkSmDevice(ctx, operations.UnenrollNetworkSmDeviceRequest{
        DeviceID: "nostrum",
        NetworkID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnenrollNetworkSmDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSmDeviceFields

Modify the fields of a device

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
    res, err := s.Sm.UpdateNetworkSmDeviceFields(ctx, operations.UpdateNetworkSmDeviceFieldsRequest{
        RequestBody: operations.UpdateNetworkSmDeviceFieldsRequestBody{
            DeviceFields: operations.UpdateNetworkSmDeviceFieldsRequestBodyDeviceFields{
                Name: sdk.String("Lela Bergstrom Jr."),
                Notes: sdk.String("eveniet"),
            },
            ID: sdk.String("764ad733-4ec1-4b78-9b36-a08088d100ef"),
            Serial: sdk.String("mollitia"),
            WifiMac: sdk.String("nulla"),
        },
        NetworkID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSmDeviceFields200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSmDevicesTags

Add, delete, or update the tags of a set of devices

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
    res, err := s.Sm.UpdateNetworkSmDevicesTags(ctx, operations.UpdateNetworkSmDevicesTagsRequest{
        RequestBody: operations.UpdateNetworkSmDevicesTagsRequestBody{
            Ids: sdk.String("sed"),
            Scope: sdk.String("voluptatem"),
            Serials: sdk.String("alias"),
            Tags: "eveniet",
            UpdateAction: "hic",
            WifiMacs: sdk.String("voluptatem"),
        },
        NetworkID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSmDevicesTags200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## WipeNetworkSmDevice

Wipe a device

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
    res, err := s.Sm.WipeNetworkSmDevice(ctx, operations.WipeNetworkSmDeviceRequest{
        RequestBody: &operations.WipeNetworkSmDeviceRequestBody{
            ID: sdk.String("22eb2164-cf9a-4b83-a6c7-23ffda9e06be"),
            Pin: sdk.Int64(913285),
            Serial: sdk.String("non"),
            WifiMac: sdk.String("rem"),
        },
        NetworkID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WipeNetworkSmDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```
