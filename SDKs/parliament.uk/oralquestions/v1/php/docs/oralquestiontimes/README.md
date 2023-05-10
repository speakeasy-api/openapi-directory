# oralQuestionTimes

### Available Operations

* [publishedOralQuestionTimeGet](#publishedoralquestiontimeget) - Returns a list of oral question times

## publishedOralQuestionTimeGet

A list of oral question times meeting the specified criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishedOralQuestionTimeGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishedOralQuestionTimeGetRequest();
    $request->parametersAnsweringBodyIds = [
        925597,
        836079,
    ];
    $request->parametersAnsweringDateEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T20:24:33.984Z');
    $request->parametersAnsweringDateStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T10:00:51.349Z');
    $request->parametersDeadlineDateEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T14:12:14.246Z');
    $request->parametersDeadlineDateStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-17T21:57:45.117Z');
    $request->parametersOralQuestionTimeId = 778157;
    $request->parametersSkip = 140350;
    $request->parametersTake = 870013;

    $response = $sdk->oralQuestionTimes->publishedOralQuestionTimeGet($request);

    if ($response->apiResponseListPublishedWrittenQuestion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
