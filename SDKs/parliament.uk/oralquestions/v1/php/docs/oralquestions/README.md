# oralQuestions

### Available Operations

* [publishedOralQuestionGet](#publishedoralquestionget) - Returns a list of oral questions

## publishedOralQuestionGet

A list of oral questions meeting the specified criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishedOralQuestionGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\PublishedOralQuestionGetParametersQuestionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishedOralQuestionGetRequest();
    $request->parametersAnsweringBodyIds = [
        978619,
        473608,
        799159,
        800911,
    ];
    $request->parametersAnsweringDateEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-25T00:37:01.696Z');
    $request->parametersAnsweringDateStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-18T15:02:44.758Z');
    $request->parametersAskingMemberIds = [
        720633,
    ];
    $request->parametersOralQuestionTimeId = 639921;
    $request->parametersQuestionType = PublishedOralQuestionGetParametersQuestionTypeEnum::TOPICAL;
    $request->parametersSkip = 143353;
    $request->parametersTake = 537373;
    $request->parametersUINs = [
        758616,
        521848,
        105907,
        414662,
    ];

    $response = $sdk->oralQuestions->publishedOralQuestionGet($request);

    if ($response->apiResponseListPublishedWrittenQuestion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
