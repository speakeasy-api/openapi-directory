# rootHypervVm

### Available Operations

* [getHypervVirtualMachineForceFullSpec](#gethypervvirtualmachineforcefullspec) - Retrieve the configuration which has been set for forcing a full snapshot for a Hyper-V Virtual Machine
* [requestHypervVirtualMachineForceFullSnapshot](#requesthypervvirtualmachineforcefullsnapshot) - Request a full snapshot during next backup job of a Hyper-V virtual machine

## getHypervVirtualMachineForceFullSpec

Retrieve the configuration created to force a full snapshot for a Hyper-V Virtual Machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetHypervVirtualMachineForceFullSpecRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHypervVirtualMachineForceFullSpecRequest();
    $request->id = '086b6f66-fef0-420e-9f44-3b4257b992c8';

    $response = $sdk->rootHypervVm->getHypervVirtualMachineForceFullSpec($request);

    if ($response->hypervVirtualMachineForceFullResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestHypervVirtualMachineForceFullSnapshot

Request a full snapshot during the next backup job of a Hyper-V virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RequestHypervVirtualMachineForceFullSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\HypervVirtualMachineForceFullRequest;
use \OpenAPI\OpenAPI\Models\Shared\HypervVirtualDiskForceFullInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestHypervVirtualMachineForceFullSnapshotRequest();
    $request->hypervVirtualMachineForceFullRequest = new HypervVirtualMachineForceFullRequest();
    $request->hypervVirtualMachineForceFullRequest->virtualDiskInfos = [
        new HypervVirtualDiskForceFullInfo(),
        new HypervVirtualDiskForceFullInfo(),
        new HypervVirtualDiskForceFullInfo(),
        new HypervVirtualDiskForceFullInfo(),
    ];
    $request->id = 'bda6a61e-fa21-4982-98fd-0a9eba47f7d3';

    $response = $sdk->rootHypervVm->requestHypervVirtualMachineForceFullSnapshot($request);

    if ($response->hypervVirtualMachineForceFullResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
