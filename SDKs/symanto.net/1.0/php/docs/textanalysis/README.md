# textAnalysis

### Available Operations

* [communication](#communication) - Communication & Tonality
* [ekmanEmotion](#ekmanemotion) - Emotion Analysis
* [emotion](#emotion) - Emotion Analysis
* [languageDetection](#languagedetection) - Language Detection
* [personality](#personality) - Personality Traits
* [sentiment](#sentiment) - Sentiment Analysis
* [topicSentiment](#topicsentiment) - Extracts topics and sentiments and relates them.

## communication

Identify the purpose and writing style of a written text.

Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]

Returned labels:
* action-seeking
* fact-oriented
* information-seeking
* self-revealing

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CommunicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Post;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommunicationRequest();
    $request->requestBody = [
        new Post(),
        new Post(),
        new Post(),
    ];
    $request->all = false;

    $response = $sdk->textAnalysis->communication($request);

    if ($response->predictionResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ekmanEmotion

Detect the emotions of the text based on Ekman.

Supported Langauges: [`en`, `de`, `es`]

Returned labels:
* anger
* disgust
* fear
* joy
* sadness
* surprise
* no-emotion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EkmanEmotionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Post;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EkmanEmotionRequest();
    $request->requestBody = [
        new Post(),
        new Post(),
        new Post(),
    ];
    $request->all = false;

    $response = $sdk->textAnalysis->ekmanEmotion($request);

    if ($response->predictionResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## emotion

Detect the emotions of the text.

Supported Langauges: [`en`, `de`, `es`]

Returned labels:
* anger
* joy
* love
* sadness
* surprise
* uncategorized

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmotionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Post;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmotionRequest();
    $request->requestBody = [
        new Post(),
        new Post(),
        new Post(),
        new Post(),
    ];
    $request->all = false;

    $response = $sdk->textAnalysis->emotion($request);

    if ($response->predictionResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## languageDetection

Identifies what language a text is written in. Only languages that our API supports can be analyzed.

Returned labels:
* language_code of the detected language

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LanguageDetection;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new LanguageDetection(),
        new LanguageDetection(),
        new LanguageDetection(),
    ]

    $response = $sdk->textAnalysis->languageDetection($request);

    if ($response->languageDetectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## personality

Predict the personality trait of author of any written text.

Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]

Returned labels:

* emotional
* rational

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PersonalityRequest;
use \OpenAPI\OpenAPI\Models\Shared\Post;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PersonalityRequest();
    $request->requestBody = [
        new Post(),
        new Post(),
        new Post(),
        new Post(),
    ];
    $request->all = false;

    $response = $sdk->textAnalysis->personality($request);

    if ($response->predictionResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sentiment

Evaluate the overall tonality of the text.

Supported Languages: [`en`, `de`, `es`]

Returned labels:
* positive
* negative

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Post;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SentimentRequest();
    $request->requestBody = [
        new Post(),
        new Post(),
        new Post(),
    ];
    $request->all = false;

    $response = $sdk->textAnalysis->sentiment($request);

    if ($response->predictionResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## topicSentiment

Extracts topics and sentiments and relates them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TopicSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Post;
use \OpenAPI\OpenAPI\Models\Operations\TopicSentimentDomainEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TopicSentimentRequest();
    $request->requestBody = [
        new Post(),
        new Post(),
        new Post(),
        new Post(),
    ];
    $request->domain = TopicSentimentDomainEnum::EMPLOYEE;

    $response = $sdk->textAnalysis->topicSentiment($request);

    if ($response->topicSentimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
