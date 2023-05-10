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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->synthesizeSpeechRequest = new SynthesizeSpeechRequest();
    $request->synthesizeSpeechRequest->audioConfig = new AudioConfig();
    $request->synthesizeSpeechRequest->audioConfig->audioEncoding = AudioConfigAudioEncodingEnum::MP3;
    $request->synthesizeSpeechRequest->audioConfig->effectsProfileId = [
        'laborum',
    ];
    $request->synthesizeSpeechRequest->audioConfig->pitch = 6563.3;
    $request->synthesizeSpeechRequest->audioConfig->sampleRateHertz = 317202;
    $request->synthesizeSpeechRequest->audioConfig->speakingRate = 1381.83;
    $request->synthesizeSpeechRequest->audioConfig->volumeGainDb = 7783.46;
    $request->synthesizeSpeechRequest->input = new SynthesisInput();
    $request->synthesizeSpeechRequest->input->ssml = 'sequi';
    $request->synthesizeSpeechRequest->input->text = 'tenetur';
    $request->synthesizeSpeechRequest->voice = new VoiceSelectionParams();
    $request->synthesizeSpeechRequest->voice->customVoice = new CustomVoiceParams();
    $request->synthesizeSpeechRequest->voice->customVoice->model = 'ipsam';
    $request->synthesizeSpeechRequest->voice->customVoice->reportedUsage = CustomVoiceParamsReportedUsageEnum::REALTIME;
    $request->synthesizeSpeechRequest->voice->languageCode = 'possimus';
    $request->synthesizeSpeechRequest->voice->name = 'Joyce Mueller';
    $request->synthesizeSpeechRequest->voice->ssmlGender = VoiceSelectionParamsSsmlGenderEnum::SSML_VOICE_GENDER_UNSPECIFIED;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'voluptate';

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
