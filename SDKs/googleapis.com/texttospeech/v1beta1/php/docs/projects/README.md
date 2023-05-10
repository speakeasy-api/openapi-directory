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
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->name = 'Ken Kshlerin';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->filter = 'sapiente';
    $request->key = 'quo';
    $request->name = 'Teri Strosin';
    $request->oauthToken = 'quod';
    $request->pageSize = 800911;
    $request->pageToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->synthesizeLongAudioRequest = new SynthesizeLongAudioRequest();
    $request->synthesizeLongAudioRequest->audioConfig = new AudioConfig();
    $request->synthesizeLongAudioRequest->audioConfig->audioEncoding = AudioConfigAudioEncodingEnum::MULAW;
    $request->synthesizeLongAudioRequest->audioConfig->effectsProfileId = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->synthesizeLongAudioRequest->audioConfig->pitch = 9446.69;
    $request->synthesizeLongAudioRequest->audioConfig->sampleRateHertz = 758616;
    $request->synthesizeLongAudioRequest->audioConfig->speakingRate = 5218.48;
    $request->synthesizeLongAudioRequest->audioConfig->volumeGainDb = 1059.07;
    $request->synthesizeLongAudioRequest->input = new SynthesisInput();
    $request->synthesizeLongAudioRequest->input->ssml = 'commodi';
    $request->synthesizeLongAudioRequest->input->text = 'molestiae';
    $request->synthesizeLongAudioRequest->outputGcsUri = 'modi';
    $request->synthesizeLongAudioRequest->voice = new VoiceSelectionParams();
    $request->synthesizeLongAudioRequest->voice->customVoice = new CustomVoiceParams();
    $request->synthesizeLongAudioRequest->voice->customVoice->model = 'qui';
    $request->synthesizeLongAudioRequest->voice->customVoice->reportedUsage = CustomVoiceParamsReportedUsageEnum::OFFLINE;
    $request->synthesizeLongAudioRequest->voice->languageCode = 'cum';
    $request->synthesizeLongAudioRequest->voice->name = 'Edna Mante II';
    $request->synthesizeLongAudioRequest->voice->ssmlGender = VoiceSelectionParamsSsmlGenderEnum::FEMALE;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

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
