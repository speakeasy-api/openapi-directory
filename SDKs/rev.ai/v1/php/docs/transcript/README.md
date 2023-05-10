# transcript

### Available Operations

* [getTranscriptById](#gettranscriptbyid) - Get Transcript By Id

## getTranscriptById

Returns the transcript for a completed transcription job. Transcript can be returned as either JSON or plaintext format. Transcript output format can be specified in the `Accept` header. Returns JSON by default.
***
Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete transcript. This is rare, but not impossible. To guarantee 100% completeness, we recommend capturing all final hypothesis when you receive them on the client.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTranscriptByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptTranscriptEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTranscriptByIdRequest();
    $request->accept = AcceptTranscriptEnum::APPLICATION_VND_REV_TRANSCRIPT_V10_PLUS_JSON;
    $request->id = '7aff1a3a-2fa9-4467-b392-51aa52c3f5ad';

    $response = $sdk->transcript->getTranscriptById($request);

    if ($response->transcript !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
