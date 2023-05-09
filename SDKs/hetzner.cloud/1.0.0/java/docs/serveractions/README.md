# serverActions

### Available Operations

* [getServersIdActions](#getserversidactions) - Get all Actions for a Server
* [getServersIdActionsActionId](#getserversidactionsactionid) - Get an Action for a Server
* [postServersIdActionsAddToPlacementGroup](#postserversidactionsaddtoplacementgroup) - Add a Server to a Placement Group
* [postServersIdActionsAttachIso](#postserversidactionsattachiso) - Attach an ISO to a Server
* [postServersIdActionsAttachToNetwork](#postserversidactionsattachtonetwork) - Attach a Server to a Network
* [postServersIdActionsChangeAliasIps](#postserversidactionschangealiasips) - Change alias IPs of a Network
* [postServersIdActionsChangeDnsPtr](#postserversidactionschangednsptr) - Change reverse DNS entry for this Server
* [postServersIdActionsChangeProtection](#postserversidactionschangeprotection) - Change Server Protection
* [postServersIdActionsChangeType](#postserversidactionschangetype) - Change the Type of a Server
* [postServersIdActionsCreateImage](#postserversidactionscreateimage) - Create Image from a Server
* [postServersIdActionsDetachFromNetwork](#postserversidactionsdetachfromnetwork) - Detach a Server from a Network
* [postServersIdActionsDetachIso](#postserversidactionsdetachiso) - Detach an ISO from a Server
* [postServersIdActionsDisableBackup](#postserversidactionsdisablebackup) - Disable Backups for a Server
* [postServersIdActionsDisableRescue](#postserversidactionsdisablerescue) - Disable Rescue Mode for a Server
* [postServersIdActionsEnableBackup](#postserversidactionsenablebackup) - Enable and Configure Backups for a Server
* [postServersIdActionsEnableRescue](#postserversidactionsenablerescue) - Enable Rescue Mode for a Server
* [postServersIdActionsPoweroff](#postserversidactionspoweroff) - Power off a Server
* [postServersIdActionsPoweron](#postserversidactionspoweron) - Power on a Server
* [postServersIdActionsReboot](#postserversidactionsreboot) - Soft-reboot a Server
* [postServersIdActionsRebuild](#postserversidactionsrebuild) - Rebuild a Server from an Image
* [postServersIdActionsRemoveFromPlacementGroup](#postserversidactionsremovefromplacementgroup) - Remove from Placement Group
* [postServersIdActionsRequestConsole](#postserversidactionsrequestconsole) - Request Console for a Server
* [postServersIdActionsReset](#postserversidactionsreset) - Reset a Server
* [postServersIdActionsResetPassword](#postserversidactionsresetpassword) - Reset root Password of a Server
* [postServersIdActionsShutdown](#postserversidactionsshutdown) - Shutdown a Server

## getServersIdActions

Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServersIdActionsRequest;
import org.openapis.openapi.models.operations.GetServersIdActionsResponse;
import org.openapis.openapi.models.operations.GetServersIdActionsSortParameterSortEnum;
import org.openapis.openapi.models.operations.GetServersIdActionsStatusParameterStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServersIdActionsRequest req = new GetServersIdActionsRequest(25662L) {{
                sort = GetServersIdActionsSortParameterSortEnum.STARTED;
                status = GetServersIdActionsStatusParameterStatusEnum.RUNNING;
            }};            

            GetServersIdActionsResponse res = sdk.serverActions.getServersIdActions(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServersIdActionsActionId

Returns a specific Action object for a Server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServersIdActionsActionIdRequest;
import org.openapis.openapi.models.operations.GetServersIdActionsActionIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServersIdActionsActionIdRequest req = new GetServersIdActionsActionIdRequest(153694L, 424685L);            

            GetServersIdActionsActionIdResponse res = sdk.serverActions.getServersIdActionsActionId(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsAddToPlacementGroup

Adds a Server to a Placement Group.

Server must be powered off for this command to succeed.

#### Call specific error codes

| Code                          | Description                                                          |
|-------------------------------|----------------------------------------------------------------------|
| `server_not_stopped`          | The action requires a stopped server                                 |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsAddToPlacementGroupRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsAddToPlacementGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsAddToPlacementGroupRequest req = new PostServersIdActionsAddToPlacementGroupRequest(730442L) {{
                requestBody = new PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest(1L);;
            }};            

            PostServersIdActionsAddToPlacementGroupResponse res = sdk.serverActions.postServersIdActionsAddToPlacementGroup(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsAttachIso

Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.

Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsAttachIsoRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsAttachIsoRequestBody;
import org.openapis.openapi.models.operations.PostServersIdActionsAttachIsoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsAttachIsoRequest req = new PostServersIdActionsAttachIsoRequest(374170L) {{
                requestBody = new PostServersIdActionsAttachIsoRequestBody("FreeBSD-11.0-RELEASE-amd64-dvd1");;
            }};            

            PostServersIdActionsAttachIsoResponse res = sdk.serverActions.postServersIdActionsAttachIso(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsAttachToNetwork

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsAttachToNetworkAttachToNetworkRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsAttachToNetworkRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsAttachToNetworkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsAttachToNetworkRequest req = new PostServersIdActionsAttachToNetworkRequest(646265L) {{
                requestBody = new PostServersIdActionsAttachToNetworkAttachToNetworkRequest(4711L) {{
                    aliasIps = new String[]{{
                        add("ipsum"),
                        add("incidunt"),
                    }};
                    ip = "10.0.1.1";
                }};;
            }};            

            PostServersIdActionsAttachToNetworkResponse res = sdk.serverActions.postServersIdActionsAttachToNetwork(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsChangeAliasIps

Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeAliasIpsRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeAliasIpsRequestBody;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeAliasIpsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsChangeAliasIpsRequest req = new PostServersIdActionsChangeAliasIpsRequest(186458L) {{
                requestBody = new PostServersIdActionsChangeAliasIpsRequestBody(                new String[]{{
                                    add("maxime"),
                                    add("pariatur"),
                                    add("soluta"),
                                }}, 4711L);;
            }};            

            PostServersIdActionsChangeAliasIpsResponse res = sdk.serverActions.postServersIdActionsChangeAliasIps(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsChangeDnsPtr

Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.

Floating IPs assigned to the Server are not affected by this.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeDnsPtrRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeDnsPtrRequestBody;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeDnsPtrResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsChangeDnsPtrRequest req = new PostServersIdActionsChangeDnsPtrRequest(117531L) {{
                requestBody = new PostServersIdActionsChangeDnsPtrRequestBody("server01.example.com", "1.2.3.4");;
            }};            

            PostServersIdActionsChangeDnsPtrResponse res = sdk.serverActions.postServersIdActionsChangeDnsPtr(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsChangeProtection

Changes the protection configuration of the Server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeProtectionRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeProtectionRequestBody;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsChangeProtectionRequest req = new PostServersIdActionsChangeProtectionRequest(674848L) {{
                requestBody = new PostServersIdActionsChangeProtectionRequestBody() {{
                    delete = true;
                    rebuild = true;
                }};;
            }};            

            PostServersIdActionsChangeProtectionResponse res = sdk.serverActions.postServersIdActionsChangeProtection(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsChangeType

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeTypeRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeTypeRequestBody;
import org.openapis.openapi.models.operations.PostServersIdActionsChangeTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsChangeTypeRequest req = new PostServersIdActionsChangeTypeRequest(517379L) {{
                requestBody = new PostServersIdActionsChangeTypeRequestBody("cx11", true);;
            }};            

            PostServersIdActionsChangeTypeResponse res = sdk.serverActions.postServersIdActionsChangeType(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsCreateImage

Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.

To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.

You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create an `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsCreateImageCreateImageRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsCreateImageCreateImageRequestLabels;
import org.openapis.openapi.models.operations.PostServersIdActionsCreateImageCreateImageRequestTypeEnum;
import org.openapis.openapi.models.operations.PostServersIdActionsCreateImageRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsCreateImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsCreateImageRequest req = new PostServersIdActionsCreateImageRequest(276894L) {{
                requestBody = new PostServersIdActionsCreateImageCreateImageRequest() {{
                    description = "my image";
                    labels = new PostServersIdActionsCreateImageCreateImageRequestLabels() {{
                        labelkey = "value";
                    }};;
                    type = PostServersIdActionsCreateImageCreateImageRequestTypeEnum.SNAPSHOT;
                }};;
            }};            

            PostServersIdActionsCreateImageResponse res = sdk.serverActions.postServersIdActionsCreateImage(req);

            if (res.postServersIdActionsCreateImage201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsDetachFromNetwork

Detaches a Server from a network. The interface for this network will vanish.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsDetachFromNetworkRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsDetachFromNetworkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsDetachFromNetworkRequest req = new PostServersIdActionsDetachFromNetworkRequest(132068L) {{
                requestBody = new PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest(4711L);;
            }};            

            PostServersIdActionsDetachFromNetworkResponse res = sdk.serverActions.postServersIdActionsDetachFromNetwork(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsDetachIso

Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsDetachIsoRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsDetachIsoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsDetachIsoRequest req = new PostServersIdActionsDetachIsoRequest(174909L);            

            PostServersIdActionsDetachIsoResponse res = sdk.serverActions.postServersIdActionsDetachIso(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsDisableBackup

Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.

Caution: This immediately removes all existing backups for the Server!


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsDisableBackupRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsDisableBackupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsDisableBackupRequest req = new PostServersIdActionsDisableBackupRequest(716860L);            

            PostServersIdActionsDisableBackupResponse res = sdk.serverActions.postServersIdActionsDisableBackup(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsDisableRescue

Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Disabling rescue mode will not reboot your Server — you will have to do this yourself.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsDisableRescueRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsDisableRescueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsDisableRescueRequest req = new PostServersIdActionsDisableRescueRequest(704474L);            

            PostServersIdActionsDisableRescueResponse res = sdk.serverActions.postServersIdActionsDisableRescue(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsEnableBackup

Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.

Backups are automatically created daily.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsEnableBackupRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsEnableBackupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsEnableBackupRequest req = new PostServersIdActionsEnableBackupRequest(396060L);            

            PostServersIdActionsEnableBackupResponse res = sdk.serverActions.postServersIdActionsEnableBackup(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsEnableRescue

Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.

In case a Server cannot boot on its own you can use this to access a Server’s disks.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsEnableRescueRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsEnableRescueRequestBody;
import org.openapis.openapi.models.operations.PostServersIdActionsEnableRescueRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.PostServersIdActionsEnableRescueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsEnableRescueRequest req = new PostServersIdActionsEnableRescueRequest(463150L) {{
                requestBody = new PostServersIdActionsEnableRescueRequestBody() {{
                    sshKeys = new Long[]{{
                        add(840429L),
                        add(183280L),
                        add(204865L),
                    }};
                    type = PostServersIdActionsEnableRescueRequestBodyTypeEnum.LINUX64;
                }};;
            }};            

            PostServersIdActionsEnableRescueResponse res = sdk.serverActions.postServersIdActionsEnableRescue(req);

            if (res.postServersIdActionsEnableRescue201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsPoweroff

Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsPoweroffRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsPoweroffResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsPoweroffRequest req = new PostServersIdActionsPoweroffRequest(164959L);            

            PostServersIdActionsPoweroffResponse res = sdk.serverActions.postServersIdActionsPoweroff(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsPoweron

Starts a Server by turning its power on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsPoweronRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsPoweronResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsPoweronRequest req = new PostServersIdActionsPoweronRequest(488056L);            

            PostServersIdActionsPoweronResponse res = sdk.serverActions.postServersIdActionsPoweron(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsReboot

Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsRebootRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsRebootResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsRebootRequest req = new PostServersIdActionsRebootRequest(124833L);            

            PostServersIdActionsRebootResponse res = sdk.serverActions.postServersIdActionsReboot(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsRebuild

Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server

The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.

Your Server will automatically be powered off before the rebuild command executes.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsRebuildRebuildServerRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsRebuildRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsRebuildResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsRebuildRequest req = new PostServersIdActionsRebuildRequest(355613L) {{
                requestBody = new PostServersIdActionsRebuildRebuildServerRequest("ubuntu-20.04");;
            }};            

            PostServersIdActionsRebuildResponse res = sdk.serverActions.postServersIdActionsRebuild(req);

            if (res.postServersIdActionsRebuild201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsRemoveFromPlacementGroup

Removes a Server from a Placement Group.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsRemoveFromPlacementGroupRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsRemoveFromPlacementGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsRemoveFromPlacementGroupRequest req = new PostServersIdActionsRemoveFromPlacementGroupRequest(722081L);            

            PostServersIdActionsRemoveFromPlacementGroupResponse res = sdk.serverActions.postServersIdActionsRemoveFromPlacementGroup(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsRequestConsole

Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsRequestConsoleRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsRequestConsoleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsRequestConsoleRequest req = new PostServersIdActionsRequestConsoleRequest(940432L);            

            PostServersIdActionsRequestConsoleResponse res = sdk.serverActions.postServersIdActionsRequestConsole(req);

            if (res.postServersIdActionsRequestConsole201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsReset

Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsResetRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsResetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsResetRequest req = new PostServersIdActionsResetRequest(30452L);            

            PostServersIdActionsResetResponse res = sdk.serverActions.postServersIdActionsReset(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsResetPassword

Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (status `running`) in order for this operation to succeed.

This will generate a new password for this Server and return it.

If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsResetPasswordRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsResetPasswordResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsResetPasswordRequest req = new PostServersIdActionsResetPasswordRequest(765326L);            

            PostServersIdActionsResetPasswordResponse res = sdk.serverActions.postServersIdActionsResetPassword(req);

            if (res.postServersIdActionsResetPassword201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postServersIdActionsShutdown

Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and react to the request, otherwise the Server will not shut down.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostServersIdActionsShutdownRequest;
import org.openapis.openapi.models.operations.PostServersIdActionsShutdownResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostServersIdActionsShutdownRequest req = new PostServersIdActionsShutdownRequest(746994L);            

            PostServersIdActionsShutdownResponse res = sdk.serverActions.postServersIdActionsShutdown(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
