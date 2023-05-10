# rootHostShare

## Overview

Network shares.

### Available Operations

* [bulkAddHostShares](#bulkaddhostshares) - Add NAS shares in bulk
* [bulkUpdateHostShare](#bulkupdatehostshare) - Update network shares

## bulkAddHostShares

Add NAS shares for a NAS host to the Rubrik cluster in bulk. This operation does not validate share credentials. If the default share credentials are incorrect, the share status on shares UI displays as "Wrong credential". Use the PATCH /v1/host/share/bulk endpoint to enter the correct credentials when this status displays.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\NasSharesToAdd;
use \OpenAPI\OpenAPI\Models\Shared\DiscoveredNasShare;
use \OpenAPI\OpenAPI\Models\Shared\DiscoveredNasShareShareTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NasSharesToAdd();
    $request->hostId = 'dolor';
    $request->nasShares = [
        new DiscoveredNasShare(),
        new DiscoveredNasShare(),
    ];

    $response = $sdk->rootHostShare->bulkAddHostShares($request);

    if ($response->bulkShareAddResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkUpdateHostShare

Update the properties of the objects that represent the specified network share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\HostShareUpdate;
use \OpenAPI\OpenAPI\Models\Shared\HostSharePatch;
use \OpenAPI\OpenAPI\Models\Shared\HostShareParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new HostShareUpdate(),
        new HostShareUpdate(),
        new HostShareUpdate(),
        new HostShareUpdate(),
    ]

    $response = $sdk->rootHostShare->bulkUpdateHostShare($request);

    if ($response->hostShareDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
