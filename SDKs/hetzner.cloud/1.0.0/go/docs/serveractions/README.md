# ServerActions

### Available Operations

* [GetServersIDActions](#getserversidactions) - Get all Actions for a Server
* [GetServersIDActionsActionID](#getserversidactionsactionid) - Get an Action for a Server
* [PostServersIDActionsAddToPlacementGroup](#postserversidactionsaddtoplacementgroup) - Add a Server to a Placement Group
* [PostServersIDActionsAttachIso](#postserversidactionsattachiso) - Attach an ISO to a Server
* [PostServersIDActionsAttachToNetwork](#postserversidactionsattachtonetwork) - Attach a Server to a Network
* [PostServersIDActionsChangeAliasIps](#postserversidactionschangealiasips) - Change alias IPs of a Network
* [PostServersIDActionsChangeDNSPtr](#postserversidactionschangednsptr) - Change reverse DNS entry for this Server
* [PostServersIDActionsChangeProtection](#postserversidactionschangeprotection) - Change Server Protection
* [PostServersIDActionsChangeType](#postserversidactionschangetype) - Change the Type of a Server
* [PostServersIDActionsCreateImage](#postserversidactionscreateimage) - Create Image from a Server
* [PostServersIDActionsDetachFromNetwork](#postserversidactionsdetachfromnetwork) - Detach a Server from a Network
* [PostServersIDActionsDetachIso](#postserversidactionsdetachiso) - Detach an ISO from a Server
* [PostServersIDActionsDisableBackup](#postserversidactionsdisablebackup) - Disable Backups for a Server
* [PostServersIDActionsDisableRescue](#postserversidactionsdisablerescue) - Disable Rescue Mode for a Server
* [PostServersIDActionsEnableBackup](#postserversidactionsenablebackup) - Enable and Configure Backups for a Server
* [PostServersIDActionsEnableRescue](#postserversidactionsenablerescue) - Enable Rescue Mode for a Server
* [PostServersIDActionsPoweroff](#postserversidactionspoweroff) - Power off a Server
* [PostServersIDActionsPoweron](#postserversidactionspoweron) - Power on a Server
* [PostServersIDActionsReboot](#postserversidactionsreboot) - Soft-reboot a Server
* [PostServersIDActionsRebuild](#postserversidactionsrebuild) - Rebuild a Server from an Image
* [PostServersIDActionsRemoveFromPlacementGroup](#postserversidactionsremovefromplacementgroup) - Remove from Placement Group
* [PostServersIDActionsRequestConsole](#postserversidactionsrequestconsole) - Request Console for a Server
* [PostServersIDActionsReset](#postserversidactionsreset) - Reset a Server
* [PostServersIDActionsResetPassword](#postserversidactionsresetpassword) - Reset root Password of a Server
* [PostServersIDActionsShutdown](#postserversidactionsshutdown) - Shutdown a Server

## GetServersIDActions

Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

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
    res, err := s.ServerActions.GetServersIDActions(ctx, operations.GetServersIDActionsRequest{
        ID: 679880,
        Sort: operations.GetServersIDActionsSortParameterSortEnumFinishedDesc.ToPointer(),
        Status: operations.GetServersIDActionsStatusParameterStatusEnumSuccess.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```

## GetServersIDActionsActionID

Returns a specific Action object for a Server.

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
    res, err := s.ServerActions.GetServersIDActionsActionID(ctx, operations.GetServersIDActionsActionIDRequest{
        ActionID: 687488,
        ID: 483409,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsAddToPlacementGroup

Adds a Server to a Placement Group.

Server must be powered off for this command to succeed.

#### Call specific error codes

| Code                          | Description                                                          |
|-------------------------------|----------------------------------------------------------------------|
| `server_not_stopped`          | The action requires a stopped server                                 |


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
    res, err := s.ServerActions.PostServersIDActionsAddToPlacementGroup(ctx, operations.PostServersIDActionsAddToPlacementGroupRequest{
        RequestBody: &operations.PostServersIDActionsAddToPlacementGroupAddToPlacementGroupRequest{
            PlacementGroup: 1,
        },
        ID: 215507,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsAttachIso

Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.

Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.


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
    res, err := s.ServerActions.PostServersIDActionsAttachIso(ctx, operations.PostServersIDActionsAttachIsoRequest{
        RequestBody: &operations.PostServersIDActionsAttachIsoRequestBody{
            Iso: "FreeBSD-11.0-RELEASE-amd64-dvd1",
        },
        ID: 788740,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsAttachToNetwork

Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.

The Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.

Using the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.

**Call specific error codes**

| Code                             | Description                                                           |
|----------------------------------|-----------------------------------------------------------------------|
| `server_already_attached`        | The server is already attached to the network                         |
| `ip_not_available`               | The provided Network IP is not available                              |
| `no_subnet_available`            | No Subnet or IP is available for the Server within the network        |
| `networks_overlap`               | The network IP range overlaps with one of the server networks         |


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
    res, err := s.ServerActions.PostServersIDActionsAttachToNetwork(ctx, operations.PostServersIDActionsAttachToNetworkRequest{
        RequestBody: &operations.PostServersIDActionsAttachToNetworkAttachToNetworkRequest{
            AliasIps: []string{
                "amet",
                "tempore",
                "accusamus",
                "numquam",
            },
            IP: sdk.String("10.0.1.1"),
            Network: 4711,
        },
        ID: 313692,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsChangeAliasIps

Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.

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
    res, err := s.ServerActions.PostServersIDActionsChangeAliasIps(ctx, operations.PostServersIDActionsChangeAliasIpsRequest{
        RequestBody: &operations.PostServersIDActionsChangeAliasIpsRequestBody{
            AliasIps: []string{
                "sapiente",
            },
            Network: 4711,
        },
        ID: 518201,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsChangeDNSPtr

Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.

Floating IPs assigned to the Server are not affected by this.


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
    res, err := s.ServerActions.PostServersIDActionsChangeDNSPtr(ctx, operations.PostServersIDActionsChangeDNSPtrRequest{
        RequestBody: &operations.PostServersIDActionsChangeDNSPtrRequestBody{
            DNSPtr: "server01.example.com",
            IP: "1.2.3.4",
        },
        ID: 471752,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsChangeProtection

Changes the protection configuration of the Server.

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
    res, err := s.ServerActions.PostServersIDActionsChangeProtection(ctx, operations.PostServersIDActionsChangeProtectionRequest{
        RequestBody: &operations.PostServersIDActionsChangeProtectionRequestBody{
            Delete: sdk.Bool(true),
            Rebuild: sdk.Bool(true),
        },
        ID: 25662,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsChangeType

Changes the type (Cores, RAM and disk sizes) of a Server.

Server must be powered off for this command to succeed.

This copies the content of its disk, and starts it again.

You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.

If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.

#### Call specific error codes

| Code                          | Description                                                          |
|-------------------------------|----------------------------------------------------------------------|
| `invalid_server_type`         | The server type does not fit for the given server or is deprecated   |
| `server_not_stopped`          | The action requires a stopped server                                 |


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
    res, err := s.ServerActions.PostServersIDActionsChangeType(ctx, operations.PostServersIDActionsChangeTypeRequest{
        RequestBody: &operations.PostServersIDActionsChangeTypeRequestBody{
            ServerType: "cx11",
            UpgradeDisk: true,
        },
        ID: 711584,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsCreateImage

Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.

To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.

You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create an `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.


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
    res, err := s.ServerActions.PostServersIDActionsCreateImage(ctx, operations.PostServersIDActionsCreateImageRequest{
        RequestBody: &operations.PostServersIDActionsCreateImageCreateImageRequest{
            Description: sdk.String("my image"),
            Labels: &operations.PostServersIDActionsCreateImageCreateImageRequestLabels{
                Labelkey: sdk.String("value"),
            },
            Type: operations.PostServersIDActionsCreateImageCreateImageRequestTypeEnumSnapshot.ToPointer(),
        },
        ID: 207470,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostServersIDActionsCreateImage201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostServersIDActionsDetachFromNetwork

Detaches a Server from a network. The interface for this network will vanish.

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
    res, err := s.ServerActions.PostServersIDActionsDetachFromNetwork(ctx, operations.PostServersIDActionsDetachFromNetworkRequest{
        RequestBody: &operations.PostServersIDActionsDetachFromNetworkDetachFromNetworkRequest{
            Network: 4711,
        },
        ID: 153694,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsDetachIso

Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`

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
    res, err := s.ServerActions.PostServersIDActionsDetachIso(ctx, operations.PostServersIDActionsDetachIsoRequest{
        ID: 424685,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsDisableBackup

Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.

Caution: This immediately removes all existing backups for the Server!


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
    res, err := s.ServerActions.PostServersIDActionsDisableBackup(ctx, operations.PostServersIDActionsDisableBackupRequest{
        ID: 730442,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsDisableRescue

Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Disabling rescue mode will not reboot your Server — you will have to do this yourself.


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
    res, err := s.ServerActions.PostServersIDActionsDisableRescue(ctx, operations.PostServersIDActionsDisableRescueRequest{
        ID: 374170,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsEnableBackup

Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.

Backups are automatically created daily.


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
    res, err := s.ServerActions.PostServersIDActionsEnableBackup(ctx, operations.PostServersIDActionsEnableBackupRequest{
        ID: 646265,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsEnableRescue

Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.

In case a Server cannot boot on its own you can use this to access a Server’s disks.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.


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
    res, err := s.ServerActions.PostServersIDActionsEnableRescue(ctx, operations.PostServersIDActionsEnableRescueRequest{
        RequestBody: &operations.PostServersIDActionsEnableRescueRequestBody{
            SSHKeys: []int64{
                214880,
                277628,
            },
            Type: operations.PostServersIDActionsEnableRescueRequestBodyTypeEnumLinux64.ToPointer(),
        },
        ID: 586784,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostServersIDActionsEnableRescue201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostServersIDActionsPoweroff

Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.

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
    res, err := s.ServerActions.PostServersIDActionsPoweroff(ctx, operations.PostServersIDActionsPoweroffRequest{
        ID: 807581,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsPoweron

Starts a Server by turning its power on.

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
    res, err := s.ServerActions.PostServersIDActionsPoweron(ctx, operations.PostServersIDActionsPoweronRequest{
        ID: 863856,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsReboot

Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.

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
    res, err := s.ServerActions.PostServersIDActionsReboot(ctx, operations.PostServersIDActionsRebootRequest{
        ID: 747080,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsRebuild

Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server

The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.

Your Server will automatically be powered off before the rebuild command executes.


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
    res, err := s.ServerActions.PostServersIDActionsRebuild(ctx, operations.PostServersIDActionsRebuildRequest{
        RequestBody: &operations.PostServersIDActionsRebuildRebuildServerRequest{
            Image: "ubuntu-20.04",
        },
        ID: 117531,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostServersIDActionsRebuild201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostServersIDActionsRemoveFromPlacementGroup

Removes a Server from a Placement Group.


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
    res, err := s.ServerActions.PostServersIDActionsRemoveFromPlacementGroup(ctx, operations.PostServersIDActionsRemoveFromPlacementGroupRequest{
        ID: 674848,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsRequestConsole

Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.

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
    res, err := s.ServerActions.PostServersIDActionsRequestConsole(ctx, operations.PostServersIDActionsRequestConsoleRequest{
        ID: 517379,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostServersIDActionsRequestConsole201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostServersIDActionsReset

Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.

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
    res, err := s.ServerActions.PostServersIDActionsReset(ctx, operations.PostServersIDActionsResetRequest{
        ID: 276894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostServersIDActionsResetPassword

Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (status `running`) in order for this operation to succeed.

This will generate a new password for this Server and return it.

If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.


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
    res, err := s.ServerActions.PostServersIDActionsResetPassword(ctx, operations.PostServersIDActionsResetPasswordRequest{
        ID: 132068,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostServersIDActionsResetPassword201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostServersIDActionsShutdown

Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and react to the request, otherwise the Server will not shut down.

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
    res, err := s.ServerActions.PostServersIDActionsShutdown(ctx, operations.PostServersIDActionsShutdownRequest{
        ID: 174909,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```
