# Sm

### Available Operations

* [CheckinNetworkSmDevices](#checkinnetworksmdevices) - Force check-in a set of devices
* [CreateNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [CreateNetworkSmTargetGroup](#createnetworksmtargetgroup) - Add a target group
* [DeleteNetworkSmTargetGroup](#deletenetworksmtargetgroup) - Delete a target group from a network
* [DeleteNetworkSmUserAccessDevice](#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [GetNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [GetNetworkSmDeviceCellularUsageHistory](#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [GetNetworkSmDeviceCerts](#getnetworksmdevicecerts) - List the certs on a device
* [GetNetworkSmDeviceConnectivity](#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [GetNetworkSmDeviceDesktopLogs](#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [GetNetworkSmDeviceDeviceCommandLogs](#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [GetNetworkSmDeviceDeviceProfiles](#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [GetNetworkSmDeviceNetworkAdapters](#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [GetNetworkSmDevicePerformanceHistory](#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [GetNetworkSmDeviceRestrictions](#getnetworksmdevicerestrictions) - List the restrictions on a device
* [GetNetworkSmDeviceSecurityCenters](#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [GetNetworkSmDeviceSoftwares](#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [GetNetworkSmDeviceWlanLists](#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [GetNetworkSmDevices](#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [GetNetworkSmProfiles](#getnetworksmprofiles) - List all profiles in a network
* [GetNetworkSmTargetGroup](#getnetworksmtargetgroup) - Return a target group
* [GetNetworkSmTargetGroups](#getnetworksmtargetgroups) - List the target groups in this network
* [GetNetworkSmTrustedAccessConfigs](#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs
* [GetNetworkSmUserAccessDevices](#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections
* [GetNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [GetNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [GetNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [GetOrganizationSmApnsCert](#getorganizationsmapnscert) - Get the organization's APNS certificate
* [GetOrganizationSmVppAccount](#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [GetOrganizationSmVppAccounts](#getorganizationsmvppaccounts) - List the VPP accounts in the organization
* [LockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [ModifyNetworkSmDevicesTags](#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [MoveNetworkSmDevices](#movenetworksmdevices) - Move a set of devices to a new network
* [RefreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [UnenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [UpdateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device
* [UpdateNetworkSmTargetGroup](#updatenetworksmtargetgroup) - Update a target group
* [WipeNetworkSmDevices](#wipenetworksmdevices) - Wipe a device

## CheckinNetworkSmDevices

Force check-in a set of devices

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
    res, err := s.Sm.CheckinNetworkSmDevices(ctx, operations.CheckinNetworkSmDevicesRequest{
        RequestBody: &operations.CheckinNetworkSmDevicesRequestBody{
            Ids: []string{
                "doloremque",
                "quis",
                "veniam",
                "doloribus",
            },
            Scope: []string{
                "tenetur",
                "cum",
            },
            Serials: []string{
                "debitis",
                "neque",
                "corrupti",
            },
            WifiMacs: []string{
                "magni",
            },
        },
        NetworkID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckinNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
                "illo",
            },
        },
        NetworkID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSmBypassActivationLockAttempt201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSmTargetGroup

Add a target group

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
    res, err := s.Sm.CreateNetworkSmTargetGroup(ctx, operations.CreateNetworkSmTargetGroupRequest{
        RequestBody: &operations.CreateNetworkSmTargetGroupRequestBody{
            Name: sdk.String("Johnnie Jast"),
            Scope: sdk.String("dolorum"),
        },
        NetworkID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSmTargetGroup201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkSmTargetGroup

Delete a target group from a network

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
    res, err := s.Sm.DeleteNetworkSmTargetGroup(ctx, operations.DeleteNetworkSmTargetGroupRequest{
        NetworkID: "ad",
        TargetGroupID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSmUserAccessDevice

Delete a User Access Device

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
    res, err := s.Sm.DeleteNetworkSmUserAccessDevice(ctx, operations.DeleteNetworkSmUserAccessDeviceRequest{
        NetworkID: "debitis",
        UserAccessDeviceID: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
        AttemptID: "vitae",
        NetworkID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmBypassActivationLockAttempt200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceCellularUsageHistory

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
    res, err := s.Sm.GetNetworkSmDeviceCellularUsageHistory(ctx, operations.GetNetworkSmDeviceCellularUsageHistoryRequest{
        DeviceID: "nesciunt",
        NetworkID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceCellularUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceCerts

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
    res, err := s.Sm.GetNetworkSmDeviceCerts(ctx, operations.GetNetworkSmDeviceCertsRequest{
        DeviceID: "placeat",
        NetworkID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceCerts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceConnectivity

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
    res, err := s.Sm.GetNetworkSmDeviceConnectivity(ctx, operations.GetNetworkSmDeviceConnectivityRequest{
        DeviceID: "facere",
        EndingBefore: sdk.String("aperiam"),
        NetworkID: "doloremque",
        PerPage: sdk.Int64(524576),
        StartingAfter: sdk.String("unde"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceConnectivity200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceDesktopLogs

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
    res, err := s.Sm.GetNetworkSmDeviceDesktopLogs(ctx, operations.GetNetworkSmDeviceDesktopLogsRequest{
        DeviceID: "cumque",
        EndingBefore: sdk.String("harum"),
        NetworkID: "impedit",
        PerPage: sdk.Int64(179828),
        StartingAfter: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDesktopLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceDeviceCommandLogs

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
    res, err := s.Sm.GetNetworkSmDeviceDeviceCommandLogs(ctx, operations.GetNetworkSmDeviceDeviceCommandLogsRequest{
        DeviceID: "ex",
        EndingBefore: sdk.String("neque"),
        NetworkID: "officia",
        PerPage: sdk.Int64(73208),
        StartingAfter: sdk.String("illo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDeviceCommandLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceDeviceProfiles

Get the installed profiles associated with a device

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
    res, err := s.Sm.GetNetworkSmDeviceDeviceProfiles(ctx, operations.GetNetworkSmDeviceDeviceProfilesRequest{
        DeviceID: "magni",
        NetworkID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDeviceProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceNetworkAdapters

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
    res, err := s.Sm.GetNetworkSmDeviceNetworkAdapters(ctx, operations.GetNetworkSmDeviceNetworkAdaptersRequest{
        DeviceID: "consequatur",
        NetworkID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceNetworkAdapters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDevicePerformanceHistory

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
    res, err := s.Sm.GetNetworkSmDevicePerformanceHistory(ctx, operations.GetNetworkSmDevicePerformanceHistoryRequest{
        DeviceID: "eligendi",
        EndingBefore: sdk.String("voluptas"),
        NetworkID: "neque",
        PerPage: sdk.Int64(272821),
        StartingAfter: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDevicePerformanceHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceRestrictions

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
    res, err := s.Sm.GetNetworkSmDeviceRestrictions(ctx, operations.GetNetworkSmDeviceRestrictionsRequest{
        DeviceID: "eligendi",
        NetworkID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceRestrictions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceSecurityCenters

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
    res, err := s.Sm.GetNetworkSmDeviceSecurityCenters(ctx, operations.GetNetworkSmDeviceSecurityCentersRequest{
        DeviceID: "deserunt",
        NetworkID: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceSecurityCenters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceSoftwares

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
    res, err := s.Sm.GetNetworkSmDeviceSoftwares(ctx, operations.GetNetworkSmDeviceSoftwaresRequest{
        DeviceID: "cupiditate",
        NetworkID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceSoftwares200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceWlanLists

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
    res, err := s.Sm.GetNetworkSmDeviceWlanLists(ctx, operations.GetNetworkSmDeviceWlanListsRequest{
        DeviceID: "optio",
        NetworkID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceWlanLists200ApplicationJSONObjects != nil {
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
        EndingBefore: sdk.String("quae"),
        Fields: []string{
            "amet",
            "quaerat",
            "voluptate",
            "est",
        },
        Ids: []string{
            "delectus",
            "quos",
            "rerum",
        },
        NetworkID: "laudantium",
        PerPage: sdk.Int64(687387),
        Scope: []string{
            "porro",
            "doloremque",
        },
        Serials: []string{
            "pariatur",
            "ea",
            "exercitationem",
        },
        StartingAfter: sdk.String("consectetur"),
        WifiMacs: []string{
            "sapiente",
            "similique",
            "deserunt",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmProfiles

List all profiles in a network

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
        NetworkID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmTargetGroup

Return a target group

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
    res, err := s.Sm.GetNetworkSmTargetGroup(ctx, operations.GetNetworkSmTargetGroupRequest{
        NetworkID: "consequatur",
        TargetGroupID: "cupiditate",
        WithDetails: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmTargetGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmTargetGroups

List the target groups in this network

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
    res, err := s.Sm.GetNetworkSmTargetGroups(ctx, operations.GetNetworkSmTargetGroupsRequest{
        NetworkID: "voluptas",
        WithDetails: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmTargetGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmTrustedAccessConfigs

List Trusted Access Configs

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
    res, err := s.Sm.GetNetworkSmTrustedAccessConfigs(ctx, operations.GetNetworkSmTrustedAccessConfigsRequest{
        EndingBefore: sdk.String("rerum"),
        NetworkID: "doloremque",
        PerPage: sdk.Int64(875960),
        StartingAfter: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmTrustedAccessConfigs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUserAccessDevices

List User Access Devices and its Trusted Access Connections

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
    res, err := s.Sm.GetNetworkSmUserAccessDevices(ctx, operations.GetNetworkSmUserAccessDevicesRequest{
        EndingBefore: sdk.String("maiores"),
        NetworkID: "dolor",
        PerPage: sdk.Int64(758194),
        StartingAfter: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserAccessDevices200ApplicationJSONObjects != nil {
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
        NetworkID: "nobis",
        UserID: "nesciunt",
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
        NetworkID: "debitis",
        UserID: "officia",
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
        Emails: []string{
            "mollitia",
            "repellendus",
            "cumque",
        },
        Ids: []string{
            "rem",
            "officia",
            "repellendus",
        },
        NetworkID: "voluptatibus",
        Scope: []string{
            "alias",
            "totam",
            "laudantium",
            "fugiat",
        },
        Usernames: []string{
            "sunt",
            "nesciunt",
            "odit",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSmApnsCert

Get the organization's APNS certificate

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
    res, err := s.Sm.GetOrganizationSmApnsCert(ctx, operations.GetOrganizationSmApnsCertRequest{
        OrganizationID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSmApnsCert200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSmVppAccount

Get a hash containing the unparsed token of the VPP account with the given ID

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
    res, err := s.Sm.GetOrganizationSmVppAccount(ctx, operations.GetOrganizationSmVppAccountRequest{
        OrganizationID: "asperiores",
        VppAccountID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSmVppAccount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSmVppAccounts

List the VPP accounts in the organization

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
    res, err := s.Sm.GetOrganizationSmVppAccounts(ctx, operations.GetOrganizationSmVppAccountsRequest{
        OrganizationID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSmVppAccounts200ApplicationJSONObjects != nil {
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
            Ids: []string{
                "similique",
                "reiciendis",
            },
            Pin: sdk.Int64(639013),
            Scope: []string{
                "laboriosam",
                "sunt",
                "iure",
            },
            Serials: []string{
                "totam",
                "veritatis",
                "molestiae",
                "cum",
            },
            WifiMacs: []string{
                "magnam",
                "quae",
                "quibusdam",
            },
        },
        NetworkID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LockNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ModifyNetworkSmDevicesTags

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
    res, err := s.Sm.ModifyNetworkSmDevicesTags(ctx, operations.ModifyNetworkSmDevicesTagsRequest{
        RequestBody: operations.ModifyNetworkSmDevicesTagsRequestBody{
            Ids: []string{
                "excepturi",
            },
            Scope: []string{
                "molestias",
                "illo",
            },
            Serials: []string{
                "nulla",
            },
            Tags: []string{
                "itaque",
            },
            UpdateAction: "dolorem",
            WifiMacs: []string{
                "voluptatum",
                "pariatur",
                "suscipit",
            },
        },
        NetworkID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyNetworkSmDevicesTags200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## MoveNetworkSmDevices

Move a set of devices to a new network

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
    res, err := s.Sm.MoveNetworkSmDevices(ctx, operations.MoveNetworkSmDevicesRequest{
        RequestBody: operations.MoveNetworkSmDevicesRequestBody{
            Ids: []string{
                "esse",
                "aperiam",
            },
            NewNetwork: "occaecati",
            Scope: []string{
                "delectus",
            },
            Serials: []string{
                "provident",
                "quos",
                "in",
                "itaque",
            },
            WifiMacs: []string{
                "velit",
                "fuga",
                "odit",
                "recusandae",
            },
        },
        NetworkID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveNetworkSmDevices200ApplicationJSONObject != nil {
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
        DeviceID: "ab",
        NetworkID: "perspiciatis",
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
        DeviceID: "inventore",
        NetworkID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnenrollNetworkSmDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSmDevicesFields

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
    res, err := s.Sm.UpdateNetworkSmDevicesFields(ctx, operations.UpdateNetworkSmDevicesFieldsRequest{
        RequestBody: operations.UpdateNetworkSmDevicesFieldsRequestBody{
            DeviceFields: operations.UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields{
                Name: sdk.String("Nathan Shields"),
                Notes: sdk.String("dicta"),
            },
            ID: sdk.String("825a4524-59d3-4e09-86d2-e2ef3eaf784f"),
            Serial: sdk.String("deserunt"),
            WifiMac: sdk.String("quidem"),
        },
        NetworkID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSmDevicesFields200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkSmTargetGroup

Update a target group

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
    res, err := s.Sm.UpdateNetworkSmTargetGroup(ctx, operations.UpdateNetworkSmTargetGroupRequest{
        RequestBody: &operations.UpdateNetworkSmTargetGroupRequestBody{
            Name: sdk.String("Billy Trantow"),
            Scope: sdk.String("eveniet"),
        },
        NetworkID: "cum",
        TargetGroupID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSmTargetGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## WipeNetworkSmDevices

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
    res, err := s.Sm.WipeNetworkSmDevices(ctx, operations.WipeNetworkSmDevicesRequest{
        RequestBody: &operations.WipeNetworkSmDevicesRequestBody{
            ID: sdk.String("11c53da7-fcb9-49f2-84cd-6f74454883aa"),
            Pin: sdk.Int64(35777),
            Serial: sdk.String("quia"),
            WifiMac: sdk.String("doloremque"),
        },
        NetworkID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WipeNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```
