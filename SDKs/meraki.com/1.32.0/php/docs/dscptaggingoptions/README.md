# dscpTaggingOptions

### Available Operations

* [getNetworkTrafficShapingDscpTaggingOptions](#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.

## getNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficShapingDscpTaggingOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficShapingDscpTaggingOptionsRequest();
    $request->networkId = 'quis';

    $response = $sdk->dscpTaggingOptions->getNetworkTrafficShapingDscpTaggingOptions($request);

    if ($response->getNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
