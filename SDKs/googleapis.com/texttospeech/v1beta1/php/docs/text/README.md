# text

### Available Operations

* [texttospeechTextSynthesize](#texttospeechtextsynthesize) - Synthesizes speech synchronously: receive results after all text input has been processed.

## texttospeechTextSynthesize

Synthesizes speech synchronously: receive results after all text input has been processed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TexttospeechTextSynthesizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SynthesizeSpeechRequest;
use \OpenAPI\OpenAPI\Models\Shared\AudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\AudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\SynthesizeSpeechRequestEnableTimePointingEnum;
use \OpenAPI\OpenAPI\Models\Shared\SynthesisInput;
use \OpenAPI\OpenAPI\Models\Shared\VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\CustomVoiceParams;
use \OpenAPI\OpenAPI\Models\Shared\CustomVoiceParamsReportedUsageEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TexttospeechTextSynthesizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TexttospeechTextSynthesizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->synthesizeSpeechRequest = new SynthesizeSpeechRequest();
    $request->synthesizeSpeechRequest->audioConfig = new AudioConfig();
    $request->synthesizeSpeechRequest->audioConfig->audioEncoding = AudioConfigAudioEncodingEnum::MP364_KBPS;
    $request->synthesizeSpeechRequest->audioConfig->effectsProfileId = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->synthesizeSpeechRequest->audioConfig->pitch = 6667.67;
    $request->synthesizeSpeechRequest->audioConfig->sampleRateHertz = 653140;
    $request->synthesizeSpeechRequest->audioConfig->speakingRate = 6706.38;
    $request->synthesizeSpeechRequest->audioConfig->volumeGainDb = 1709.09;
    $request->synthesizeSpeechRequest->enableTimePointing = [
        SynthesizeSpeechRequestEnableTimePointingEnum::TIMEPOINT_TYPE_UNSPECIFIED,
    ];
    $request->synthesizeSpeechRequest->input = new SynthesisInput();
    $request->synthesizeSpeechRequest->input->ssml = 'explicabo';
    $request->synthesizeSpeechRequest->input->text = 'nobis';
    $request->synthesizeSpeechRequest->voice = new VoiceSelectionParams();
    $request->synthesizeSpeechRequest->voice->customVoice = new CustomVoiceParams();
    $request->synthesizeSpeechRequest->voice->customVoice->model = 'enim';
    $request->synthesizeSpeechRequest->voice->customVoice->reportedUsage = CustomVoiceParamsReportedUsageEnum::REALTIME;
    $request->synthesizeSpeechRequest->voice->languageCode = 'nemo';
    $request->synthesizeSpeechRequest->voice->name = 'Velma Batz';
    $request->synthesizeSpeechRequest->voice->ssmlGender = VoiceSelectionParamsSsmlGenderEnum::NEUTRAL;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new TexttospeechTextSynthesizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->text->texttospeechTextSynthesize($request, $requestSecurity);

    if ($response->synthesizeSpeechResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
