# captions

### Available Operations

* [getCaptions](#getcaptions) - Get Captions

## getCaptions

Returns the caption output for a transcription job. We currently support SubRip (SRT) and Web Video Text Tracks (VTT) output.
Caption output format can be specified in the `Accept` header. Returns SRT by default.
***
Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete caption file. This is rare, but not impossible.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCaptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptCaptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCaptionsRequest();
    $request->accept = AcceptCaptionEnum::TEXT_VTT;
    $request->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->speakerChannel = 20218;

    $response = $sdk->captions->getCaptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
