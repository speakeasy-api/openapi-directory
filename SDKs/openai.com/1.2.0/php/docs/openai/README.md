# openAI

## Overview

The OpenAI REST API

### Available Operations

* [cancelFineTune](#cancelfinetune) - Immediately cancel a fine-tune job.

* [~~createAnswer~~](#createanswer) - Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
 :warning: **Deprecated**
* [createChatCompletion](#createchatcompletion) - Creates a completion for the chat message
* [~~createClassification~~](#createclassification) - Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.
 :warning: **Deprecated**
* [createCompletion](#createcompletion) - Creates a completion for the provided prompt and parameters
* [createEdit](#createedit) - Creates a new edit for the provided input, instruction, and parameters.
* [createEmbedding](#createembedding) - Creates an embedding vector representing the input text.
* [createFile](#createfile) - Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.

* [createFineTune](#createfinetune) - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* [createImage](#createimage) - Creates an image given a prompt.
* [createImageEdit](#createimageedit) - Creates an edited or extended image given an original image and a prompt.
* [createImageVariation](#createimagevariation) - Creates a variation of a given image.
* [createModeration](#createmoderation) - Classifies if text violates OpenAI's Content Policy
* [~~createSearch~~](#createsearch) - The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
 :warning: **Deprecated**
* [createTranscription](#createtranscription) - Transcribes audio into the input language.
* [createTranslation](#createtranslation) - Translates audio into into English.
* [deleteFile](#deletefile) - Delete a file.
* [deleteModel](#deletemodel) - Delete a fine-tuned model. You must have the Owner role in your organization.
* [downloadFile](#downloadfile) - Returns the contents of the specified file
* [~~listEngines~~](#listengines) - Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability. :warning: **Deprecated**
* [listFiles](#listfiles) - Returns a list of files that belong to the user's organization.
* [listFineTuneEvents](#listfinetuneevents) - Get fine-grained status updates for a fine-tune job.

* [listFineTunes](#listfinetunes) - List your organization's fine-tuning jobs

* [listModels](#listmodels) - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* [~~retrieveEngine~~](#retrieveengine) - Retrieves a model instance, providing basic information about it such as the owner and availability. :warning: **Deprecated**
* [retrieveFile](#retrievefile) - Returns information about a specific file.
* [retrieveFineTune](#retrievefinetune) - Gets info about the fine-tune job.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* [retrieveModel](#retrievemodel) - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

## cancelFineTune

Immediately cancel a fine-tune job.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelFineTuneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelFineTuneRequest();
    $request->fineTuneId = 'ft-AF1WoRqd3aJAHsqc9NY7iL8F';

    $response = $sdk->openAI->cancelFineTune($request);

    if ($response->fineTune !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createAnswer~~

Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateAnswerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAnswerRequest();
    $request->documents = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->examples = [
        [
            'corrupti',
            'illum',
            'vel',
            'error',
        ],
        [
            'suscipit',
            'iure',
            'magnam',
        ],
        [
            'ipsa',
            'delectus',
            'tempora',
            'suscipit',
        ],
    ];
    $request->examplesContext = 'Ottawa, Canada's capital, is located in the east of southern Ontario, near the city of Montréal and the U.S. border.';
    $request->expand = [
        'minus',
        'placeat',
    ];
    $request->file = 'voluptatum';
    $request->logitBias = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->logprobs = 71036;
    $request->maxRerank = 337396;
    $request->maxTokens = 87129;
    $request->model = 'deserunt';
    $request->n = 20218;
    $request->question = 'What is the capital of Japan?';
    $request->returnMetadata = false;
    $request->returnPrompt = false;
    $request->searchModel = 'ipsam';
    $request->stop = [
        '["\n"]',
        '["\n"]',
        '["\n"]',
        '["\n"]',
    ];
    $request->temperature = 7781.57;
    $request->user = 'user-1234';

    $response = $sdk->openAI->createAnswer($request);

    if ($response->createAnswerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createChatCompletion

Creates a completion for the chat message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateChatCompletionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChatCompletionRequestMessage;
use \OpenAPI\OpenAPI\Models\Shared\ChatCompletionRequestMessageRoleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChatCompletionRequest();
    $request->frequencyPenalty = 1403.5;
    $request->logitBias = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->maxTokens = 678880;
    $request->messages = [
        new ChatCompletionRequestMessage(),
    ];
    $request->model = 'nam';
    $request->n = 1;
    $request->presencePenalty = 6399.21;
    $request->stop = [
        'deleniti',
    ];
    $request->stream = false;
    $request->temperature = 1;
    $request->topP = 1;
    $request->user = 'user-1234';

    $response = $sdk->openAI->createChatCompletion($request);

    if ($response->createChatCompletionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createClassification~~

Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateClassificationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClassificationRequest();
    $request->examples = [
        [
            'totam',
            'beatae',
            'commodi',
            'molestiae',
        ],
        [
            'qui',
            'impedit',
        ],
        [
            'esse',
            'ipsum',
            'excepturi',
        ],
        [
            'perferendis',
        ],
    ];
    $request->expand = [
        'natus',
        'sed',
    ];
    $request->file = 'iste';
    $request->labels = [
        'natus',
    ];
    $request->logitBias = [
        'hic' => 'saepe',
        'fuga' => 'in',
    ];
    $request->logprobs = 359508;
    $request->maxExamples = 613064;
    $request->model = 'iure';
    $request->query = 'The plot is not very attractive.';
    $request->returnMetadata = false;
    $request->returnPrompt = false;
    $request->searchModel = 'saepe';
    $request->temperature = 6976.31;
    $request->user = 'user-1234';

    $response = $sdk->openAI->createClassification($request);

    if ($response->createClassificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCompletion

Creates a completion for the provided prompt and parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompletionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCompletionRequest();
    $request->bestOf = 99280;
    $request->echo = false;
    $request->frequencyPenalty = 602.25;
    $request->logitBias = [
        'est' => 'mollitia',
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->logprobs = 315428;
    $request->maxTokens = 16;
    $request->model = 'omnis';
    $request->n = 1;
    $request->presencePenalty = 3637.11;
    $request->prompt = [
        'This is a test.',
        'This is a test.',
        'This is a test.',
    ];
    $request->stop = '
    ';
    $request->stream = false;
    $request->suffix = 'test.';
    $request->temperature = 1;
    $request->topP = 1;
    $request->user = 'user-1234';

    $response = $sdk->openAI->createCompletion($request);

    if ($response->createCompletionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEdit

Creates a new edit for the provided input, instruction, and parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateEditRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEditRequest();
    $request->input = 'What day of the wek is it?';
    $request->instruction = 'Fix the spelling mistakes.';
    $request->model = 'iure';
    $request->n = 1;
    $request->temperature = 1;
    $request->topP = 1;

    $response = $sdk->openAI->createEdit($request);

    if ($response->createEditResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEmbedding

Creates an embedding vector representing the input text.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateEmbeddingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEmbeddingRequest();
    $request->input = [
        958950,
        102044,
        652790,
        208876,
    ];
    $request->model = 'culpa';
    $request->user = 'user-1234';

    $response = $sdk->openAI->createEmbedding($request);

    if ($response->createEmbeddingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFile

Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileRequestFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFileRequest();
    $request->file = new CreateFileRequestFile();
    $request->file->content = 'consequuntur';
    $request->file->file = 'repellat';
    $request->purpose = 'mollitia';

    $response = $sdk->openAI->createFile($request);

    if ($response->openAIFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFineTune

Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateFineTuneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFineTuneRequest();
    $request->batchSize = 581850;
    $request->classificationBetas = [
        4143.69,
        4663.11,
    ];
    $request->classificationNClasses = 474697;
    $request->classificationPositiveClass = 'velit';
    $request->computeClassificationMetrics = false;
    $request->learningRateMultiplier = 6235.1;
    $request->model = 'quia';
    $request->nEpochs = 338007;
    $request->promptLossWeight = 1103.75;
    $request->suffix = 'laborum';
    $request->trainingFile = 'file-ajSREls59WBbvgSzJSVWxMCB';
    $request->validationFile = 'file-XjSREls59WBbvgSzJSVWxMCa';

    $response = $sdk->openAI->createFineTune($request);

    if ($response->fineTune !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImage

Creates an image given a prompt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageRequestResponseFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageRequestSizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageRequest();
    $request->n = 1;
    $request->prompt = 'A cute baby sea otter';
    $request->responseFormat = CreateImageRequestResponseFormatEnum::URL;
    $request->size = CreateImageRequestSizeEnum::ONE_THOUSAND_AND_TWENTY_FOURX1024;
    $request->user = 'user-1234';

    $response = $sdk->openAI->createImage($request);

    if ($response->imagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageEdit

Creates an edited or extended image given an original image and a prompt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageEditRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageEditRequestImage;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageEditRequestMask;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageEditRequest();
    $request->image = new CreateImageEditRequestImage();
    $request->image->content = 'animi';
    $request->image->image = 'enim';
    $request->mask = new CreateImageEditRequestMask();
    $request->mask->content = 'odit';
    $request->mask->mask = 'quo';
    $request->n = 1;
    $request->prompt = 'A cute baby sea otter wearing a beret';
    $request->responseFormat = ResponseFormatEnum::URL;
    $request->size = SizeEnum::ONE_THOUSAND_AND_TWENTY_FOURX1024;
    $request->user = 'user-1234';

    $response = $sdk->openAI->createImageEdit($request);

    if ($response->imagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageVariation

Creates a variation of a given image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageVariationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageVariationRequestImage;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageVariationRequest();
    $request->image = new CreateImageVariationRequestImage();
    $request->image->content = 'sequi';
    $request->image->image = 'tenetur';
    $request->n = 1;
    $request->responseFormat = ResponseFormatEnum::URL;
    $request->size = SizeEnum::ONE_THOUSAND_AND_TWENTY_FOURX1024;
    $request->user = 'user-1234';

    $response = $sdk->openAI->createImageVariation($request);

    if ($response->imagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModeration

Classifies if text violates OpenAI's Content Policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateModerationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModerationRequest();
    $request->input = 'I want to kill them.';
    $request->model = 'text-moderation-stable';

    $response = $sdk->openAI->createModeration($request);

    if ($response->createModerationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createSearch~~

The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSearchRequest();
    $request->createSearchRequest = new CreateSearchRequest();
    $request->createSearchRequest->documents = [
        'possimus',
        'aut',
        'quasi',
    ];
    $request->createSearchRequest->file = 'error';
    $request->createSearchRequest->maxRerank = 837945;
    $request->createSearchRequest->query = 'the president';
    $request->createSearchRequest->returnMetadata = false;
    $request->createSearchRequest->user = 'user-1234';
    $request->engineId = 'davinci';

    $response = $sdk->openAI->createSearch($request);

    if ($response->createSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTranscription

Transcribes audio into the input language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateTranscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTranscriptionRequestFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTranscriptionRequest();
    $request->file = new CreateTranscriptionRequestFile();
    $request->file->content = 'laborum';
    $request->file->file = 'quasi';
    $request->language = 'reiciendis';
    $request->model = 'voluptatibus';
    $request->prompt = 'vero';
    $request->responseFormat = 'nihil';
    $request->temperature = 5096.24;

    $response = $sdk->openAI->createTranscription($request);

    if ($response->createTranscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTranslation

Translates audio into into English.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateTranslationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTranslationRequestFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTranslationRequest();
    $request->file = new CreateTranslationRequestFile();
    $request->file->content = 'voluptatibus';
    $request->file->file = 'ipsa';
    $request->model = 'omnis';
    $request->prompt = 'voluptate';
    $request->responseFormat = 'cum';
    $request->temperature = 199.87;

    $response = $sdk->openAI->createTranslation($request);

    if ($response->createTranslationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFile

Delete a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFileRequest();
    $request->fileId = 'doloremque';

    $response = $sdk->openAI->deleteFile($request);

    if ($response->deleteFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModel

Delete a fine-tuned model. You must have the Owner role in your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelRequest();
    $request->model = 'curie:ft-acmeco-2021-03-03-21-44-20';

    $response = $sdk->openAI->deleteModel($request);

    if ($response->deleteModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadFile

Returns the contents of the specified file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DownloadFileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadFileRequest();
    $request->fileId = 'reprehenderit';

    $response = $sdk->openAI->downloadFile($request);

    if ($response->downloadFile200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listEngines~~

Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->openAI->listEngines();

    if ($response->listEnginesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFiles

Returns a list of files that belong to the user's organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->openAI->listFiles();

    if ($response->listFilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFineTuneEvents

Get fine-grained status updates for a fine-tune job.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFineTuneEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFineTuneEventsRequest();
    $request->fineTuneId = 'ft-AF1WoRqd3aJAHsqc9NY7iL8F';
    $request->stream = false;

    $response = $sdk->openAI->listFineTuneEvents($request);

    if ($response->listFineTuneEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFineTunes

List your organization's fine-tuning jobs


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->openAI->listFineTunes();

    if ($response->listFineTunesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModels

Lists the currently available models, and provides basic information about each one such as the owner and availability.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->openAI->listModels();

    if ($response->listModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~retrieveEngine~~

Retrieves a model instance, providing basic information about it such as the owner and availability.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveEngineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveEngineRequest();
    $request->engineId = 'davinci';

    $response = $sdk->openAI->retrieveEngine($request);

    if ($response->engine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveFile

Returns information about a specific file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveFileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveFileRequest();
    $request->fileId = 'ut';

    $response = $sdk->openAI->retrieveFile($request);

    if ($response->openAIFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveFineTune

Gets info about the fine-tune job.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveFineTuneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveFineTuneRequest();
    $request->fineTuneId = 'ft-AF1WoRqd3aJAHsqc9NY7iL8F';

    $response = $sdk->openAI->retrieveFineTune($request);

    if ($response->fineTune !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveModel

Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveModelRequest();
    $request->model = 'text-davinci-001';

    $response = $sdk->openAI->retrieveModel($request);

    if ($response->model !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
