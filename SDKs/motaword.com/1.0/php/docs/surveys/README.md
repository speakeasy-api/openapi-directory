# surveys

### Available Operations

* [getQuestions](#getquestions) - Get survey questions in given scope and type
* [submitAnswers](#submitanswers) - Post survey answers for scope and type

## getQuestions

Get survey questions in given scope and type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsRequest();
    $request->attachAnswersForProject = 326701;
    $request->scope = 'veritatis';
    $request->type = 'consectetur';

    $response = $sdk->surveys->getQuestions($request);

    if ($response->surveyQuestions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitAnswers

Post survey answers for scope and type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitAnswersRequest;
use \OpenAPI\OpenAPI\Models\Shared\SurveyAnswers;
use \OpenAPI\OpenAPI\Models\Shared\SurveyAnswer;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitAnswersRequest();
    $request->surveyAnswers = new SurveyAnswers();
    $request->surveyAnswers->answers = [
        new SurveyAnswer(),
    ];
    $request->scope = 'iste';
    $request->type = 'temporibus';

    $response = $sdk->surveys->submitAnswers($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
