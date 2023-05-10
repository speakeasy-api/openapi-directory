# projects

### Available Operations

* [texttospeechProjectsLocationsOperationsGet](#texttospeechprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [texttospeechProjectsLocationsOperationsList](#texttospeechprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [texttospeechProjectsLocationsSynthesizeLongAudio](#texttospeechprojectslocationssynthesizelongaudio) - Synthesizes long form text asynchronously.

## texttospeechProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TexttospeechProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TexttospeechProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TexttospeechProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->name = 'Cory Emmerich';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new TexttospeechProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->texttospeechProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## texttospeechProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TexttospeechProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TexttospeechProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TexttospeechProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->filter = 'saepe';
    $request->key = 'fuga';
    $request->name = 'Stacy Moore';
    $request->oauthToken = 'quidem';
    $request->pageSize = 99280;
    $request->pageToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new TexttospeechProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->texttospeechProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## texttospeechProjectsLocationsSynthesizeLongAudio

Synthesizes long form text asynchronously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TexttospeechProjectsLocationsSynthesizeLongAudioRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SynthesizeLongAudioRequest;
use \OpenAPI\OpenAPI\Models\Shared\AudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\AudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\SynthesisInput;
use \OpenAPI\OpenAPI\Models\Shared\VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\CustomVoiceParams;
use \OpenAPI\OpenAPI\Models\Shared\CustomVoiceParamsReportedUsageEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TexttospeechProjectsLocationsSynthesizeLongAudioSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TexttospeechProjectsLocationsSynthesizeLongAudioRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->synthesizeLongAudioRequest = new SynthesizeLongAudioRequest();
    $request->synthesizeLongAudioRequest->audioConfig = new AudioConfig();
    $request->synthesizeLongAudioRequest->audioConfig->audioEncoding = AudioConfigAudioEncodingEnum::LINEAR16;
    $request->synthesizeLongAudioRequest->audioConfig->effectsProfileId = [
        'corporis',
    ];
    $request->synthesizeLongAudioRequest->audioConfig->pitch = 1289.26;
    $request->synthesizeLongAudioRequest->audioConfig->sampleRateHertz = 750686;
    $request->synthesizeLongAudioRequest->audioConfig->speakingRate = 3154.28;
    $request->synthesizeLongAudioRequest->audioConfig->volumeGainDb = 6078.31;
    $request->synthesizeLongAudioRequest->input = new SynthesisInput();
    $request->synthesizeLongAudioRequest->input->ssml = 'nemo';
    $request->synthesizeLongAudioRequest->input->text = 'minima';
    $request->synthesizeLongAudioRequest->outputGcsUri = 'excepturi';
    $request->synthesizeLongAudioRequest->voice = new VoiceSelectionParams();
    $request->synthesizeLongAudioRequest->voice->customVoice = new CustomVoiceParams();
    $request->synthesizeLongAudioRequest->voice->customVoice->model = 'accusantium';
    $request->synthesizeLongAudioRequest->voice->customVoice->reportedUsage = CustomVoiceParamsReportedUsageEnum::REALTIME;
    $request->synthesizeLongAudioRequest->voice->languageCode = 'culpa';
    $request->synthesizeLongAudioRequest->voice->name = 'Darrin Brakus';
    $request->synthesizeLongAudioRequest->voice->ssmlGender = VoiceSelectionParamsSsmlGenderEnum::FEMALE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'occaecati';
    $request->key = 'numquam';
    $request->oauthToken = 'commodi';
    $request->parent = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'error';

    $requestSecurity = new TexttospeechProjectsLocationsSynthesizeLongAudioSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->texttospeechProjectsLocationsSynthesizeLongAudio($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
