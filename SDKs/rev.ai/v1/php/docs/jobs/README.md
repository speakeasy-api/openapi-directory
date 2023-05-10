# jobs

### Available Operations

* [deleteJobById](#deletejobbyid) - Delete Job by Id
* [getJobById](#getjobbyid) - Get Job By Id
* [getListOfJobs](#getlistofjobs) - Get List of Jobs
* [submitTranscriptionJobJson](#submittranscriptionjobjson) - Submit Transcription Job
* [submitTranscriptionJobMultipart](#submittranscriptionjobmultipart) - Submit Transcription Job

## deleteJobById

Deletes a transcription job. All data related to the job, such as input media and transcript, will be permanently deleted. A job can only be deleted once it's completed (either with success or failure).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJobByIdRequest();
    $request->id = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';

    $response = $sdk->jobs->deleteJobById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobById

Returns information about a transcription job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobByIdRequest();
    $request->id = '73920592-9396-4fea-b596-eb10faaa2352';

    $response = $sdk->jobs->getJobById($request);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListOfJobs

Gets a list of transcription jobs submitted within the last 30 days in reverse chronological order up to the provided `limit` number of jobs per call. **Note:** Jobs older than 30 days will not be listed. Pagination is supported via passing the last job `id` from a previous call into `starting_after`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetListOfJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListOfJobsRequest();
    $request->limit = 750686;
    $request->startingAfter = 'enim';

    $response = $sdk->jobs->getListOfJobs($request);

    if ($response->jobs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitTranscriptionJobJson

Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SubmitJobMediaUrlOptions;
use \OpenAPI\OpenAPI\Models\Shared\SubmitJobMediaUrlOptionsCustomVocabularies;
use \OpenAPI\OpenAPI\Models\Shared\SubmitJobMediaUrlOptionsLanguageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitJobMediaUrlOptions();
    $request->callbackUrl = 'https://www.example.com/callback';
    $request->customVocabularies = [
        new SubmitJobMediaUrlOptionsCustomVocabularies(),
        new SubmitJobMediaUrlOptionsCustomVocabularies(),
        new SubmitJobMediaUrlOptionsCustomVocabularies(),
    ];
    $request->customVocabularyId = 'cvgnDwmB6iXevn';
    $request->deleteAfterSeconds = 50;
    $request->filterProfanity = true;
    $request->language = SubmitJobMediaUrlOptionsLanguageEnum::EN;
    $request->mediaUrl = 'https://www.rev.ai/FTC_Sample_1.mp3';
    $request->metadata = 'sample metadata';
    $request->removeDisfluencies = true;
    $request->skipDiarization = true;
    $request->skipPunctuation = true;
    $request->speakerChannelsCount = 2;

    $response = $sdk->jobs->submitTranscriptionJobJson($request);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitTranscriptionJobMultipart

Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitTranscriptionJobMultipartFormData;
use \OpenAPI\OpenAPI\Models\Operations\SubmitTranscriptionJobMultipartFormDataMedia;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitTranscriptionJobMultipartFormData();
    $request->media = new SubmitTranscriptionJobMultipartFormDataMedia();
    $request->media->content = 'nemo';
    $request->media->media = 'minima';
    $request->options = 'excepturi';

    $response = $sdk->jobs->submitTranscriptionJobMultipart($request);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
