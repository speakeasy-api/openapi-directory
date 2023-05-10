# payorHierarchy

## Overview

<p>Payors that are part of the same organization can be linked together in a hierarchical fashion</p>
<p>Payors higher up in the tree can read and write data on behalf of payors below them</p>
<p>For example Payor A can make payouts on behalf of Payor B if Payor B is linked below Payor A</p>
<p>Payors can not access data of payors above them in the hierarchy</p>
<p>Contact Velo if you need to link payors in your organization</p>


### Available Operations

* [payorLinksV1](#payorlinksv1) - List Payor Links

## payorLinksV1

<p>If the payor is set up as part of a hierarchy you can use this API to traverse the hierarchy</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PayorLinksV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayorLinksV1Request();
    $request->descendantsOfPayor = '12c10326-48dc-42f6-9519-9ebfd0e9fe6c';
    $request->fields = 'suscipit';
    $request->parentOfPayor = '32ca3aed-0117-4996-b12f-de04771778ff';

    $response = $sdk->payorHierarchy->payorLinksV1($request);

    if ($response->payorLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
