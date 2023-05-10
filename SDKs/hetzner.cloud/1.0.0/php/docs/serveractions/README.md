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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServersIdActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServersIdActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetServersIdActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServersIdActionsRequest();
    $request->id = 85295;
    $request->sort = GetServersIdActionsSortParameterSortEnum::ID_ASC;
    $request->status = GetServersIdActionsStatusParameterStatusEnum::RUNNING;

    $response = $sdk->serverActions->getServersIdActions($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServersIdActionsActionId

Returns a specific Action object for a Server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServersIdActionsActionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServersIdActionsActionIdRequest();
    $request->actionId = 434417;
    $request->id = 487838;

    $response = $sdk->serverActions->getServersIdActionsActionId($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsAddToPlacementGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsAddToPlacementGroupRequest();
    $request->requestBody = new PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest();
    $request->requestBody->placementGroup = 1;
    $request->id = 311796;

    $response = $sdk->serverActions->postServersIdActionsAddToPlacementGroup($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsAttachIso

Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.

Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsAttachIsoRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsAttachIsoRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsAttachIsoRequest();
    $request->requestBody = new PostServersIdActionsAttachIsoRequestBody();
    $request->requestBody->iso = 'FreeBSD-11.0-RELEASE-amd64-dvd1';
    $request->id = 881005;

    $response = $sdk->serverActions->postServersIdActionsAttachIso($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsAttachToNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsAttachToNetworkAttachToNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsAttachToNetworkRequest();
    $request->requestBody = new PostServersIdActionsAttachToNetworkAttachToNetworkRequest();
    $request->requestBody->aliasIps = [
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->requestBody->ip = '10.0.1.1';
    $request->requestBody->network = 4711;
    $request->id = 179603;

    $response = $sdk->serverActions->postServersIdActionsAttachToNetwork($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsChangeAliasIps

Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsChangeAliasIpsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsChangeAliasIpsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsChangeAliasIpsRequest();
    $request->requestBody = new PostServersIdActionsChangeAliasIpsRequestBody();
    $request->requestBody->aliasIps = [
        'sit',
        'fugiat',
        'ab',
    ];
    $request->requestBody->network = 4711;
    $request->id = 743835;

    $response = $sdk->serverActions->postServersIdActionsChangeAliasIps($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsChangeDnsPtr

Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.

Floating IPs assigned to the Server are not affected by this.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsChangeDnsPtrRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsChangeDnsPtrRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsChangeDnsPtrRequest();
    $request->requestBody = new PostServersIdActionsChangeDnsPtrRequestBody();
    $request->requestBody->dnsPtr = 'server01.example.com';
    $request->requestBody->ip = '1.2.3.4';
    $request->id = 679393;

    $response = $sdk->serverActions->postServersIdActionsChangeDnsPtr($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsChangeProtection

Changes the protection configuration of the Server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsChangeProtectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsChangeProtectionRequest();
    $request->requestBody = new PostServersIdActionsChangeProtectionRequestBody();
    $request->requestBody->delete = true;
    $request->requestBody->rebuild = true;
    $request->id = 478596;

    $response = $sdk->serverActions->postServersIdActionsChangeProtection($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsChangeTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsChangeTypeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsChangeTypeRequest();
    $request->requestBody = new PostServersIdActionsChangeTypeRequestBody();
    $request->requestBody->serverType = 'cx11';
    $request->requestBody->upgradeDisk = true;
    $request->id = 453697;

    $response = $sdk->serverActions->postServersIdActionsChangeType($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsCreateImage

Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.

To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.

You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create an `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsCreateImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsCreateImageCreateImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsCreateImageCreateImageRequestLabels;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsCreateImageCreateImageRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsCreateImageRequest();
    $request->requestBody = new PostServersIdActionsCreateImageCreateImageRequest();
    $request->requestBody->description = 'my image';
    $request->requestBody->labels = new PostServersIdActionsCreateImageCreateImageRequestLabels();
    $request->requestBody->labels->labelkey = 'value';
    $request->requestBody->type = PostServersIdActionsCreateImageCreateImageRequestTypeEnum::SNAPSHOT;
    $request->id = 677082;

    $response = $sdk->serverActions->postServersIdActionsCreateImage($request);

    if ($response->postServersIdActionsCreateImage201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsDetachFromNetwork

Detaches a Server from a network. The interface for this network will vanish.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsDetachFromNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsDetachFromNetworkRequest();
    $request->requestBody = new PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest();
    $request->requestBody->network = 4711;
    $request->id = 536579;

    $response = $sdk->serverActions->postServersIdActionsDetachFromNetwork($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsDetachIso

Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsDetachIsoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsDetachIsoRequest();
    $request->id = 607045;

    $response = $sdk->serverActions->postServersIdActionsDetachIso($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsDisableBackup

Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.

Caution: This immediately removes all existing backups for the Server!


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsDisableBackupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsDisableBackupRequest();
    $request->id = 896672;

    $response = $sdk->serverActions->postServersIdActionsDisableBackup($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsDisableRescue

Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Disabling rescue mode will not reboot your Server — you will have to do this yourself.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsDisableRescueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsDisableRescueRequest();
    $request->id = 714697;

    $response = $sdk->serverActions->postServersIdActionsDisableRescue($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsEnableBackup

Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.

Backups are automatically created daily.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsEnableBackupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsEnableBackupRequest();
    $request->id = 990339;

    $response = $sdk->serverActions->postServersIdActionsEnableBackup($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsEnableRescue

Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.

In case a Server cannot boot on its own you can use this to access a Server’s disks.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsEnableRescueRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsEnableRescueRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsEnableRescueRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsEnableRescueRequest();
    $request->requestBody = new PostServersIdActionsEnableRescueRequestBody();
    $request->requestBody->sshKeys = [
        216897,
        456015,
    ];
    $request->requestBody->type = PostServersIdActionsEnableRescueRequestBodyTypeEnum::LINUX32;
    $request->id = 906418;

    $response = $sdk->serverActions->postServersIdActionsEnableRescue($request);

    if ($response->postServersIdActionsEnableRescue201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsPoweroff

Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsPoweroffRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsPoweroffRequest();
    $request->id = 263322;

    $response = $sdk->serverActions->postServersIdActionsPoweroff($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsPoweron

Starts a Server by turning its power on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsPoweronRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsPoweronRequest();
    $request->id = 137220;

    $response = $sdk->serverActions->postServersIdActionsPoweron($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsReboot

Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsRebootRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsRebootRequest();
    $request->id = 20651;

    $response = $sdk->serverActions->postServersIdActionsReboot($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsRebuild

Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server

The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.

Your Server will automatically be powered off before the rebuild command executes.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsRebuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsRebuildRebuildServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsRebuildRequest();
    $request->requestBody = new PostServersIdActionsRebuildRebuildServerRequest();
    $request->requestBody->image = 'ubuntu-20.04';
    $request->id = 229219;

    $response = $sdk->serverActions->postServersIdActionsRebuild($request);

    if ($response->postServersIdActionsRebuild201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsRemoveFromPlacementGroup

Removes a Server from a Placement Group.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsRemoveFromPlacementGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsRemoveFromPlacementGroupRequest();
    $request->id = 758379;

    $response = $sdk->serverActions->postServersIdActionsRemoveFromPlacementGroup($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsRequestConsole

Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsRequestConsoleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsRequestConsoleRequest();
    $request->id = 881586;

    $response = $sdk->serverActions->postServersIdActionsRequestConsole($request);

    if ($response->postServersIdActionsRequestConsole201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsReset

Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsResetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsResetRequest();
    $request->id = 320017;

    $response = $sdk->serverActions->postServersIdActionsReset($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsResetPassword

Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (status `running`) in order for this operation to succeed.

This will generate a new password for this Server and return it.

If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsResetPasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsResetPasswordRequest();
    $request->id = 904425;

    $response = $sdk->serverActions->postServersIdActionsResetPassword($request);

    if ($response->postServersIdActionsResetPassword201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServersIdActionsShutdown

Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and react to the request, otherwise the Server will not shut down.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsShutdownRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersIdActionsShutdownRequest();
    $request->id = 383464;

    $response = $sdk->serverActions->postServersIdActionsShutdown($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
