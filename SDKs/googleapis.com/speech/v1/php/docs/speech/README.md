# speech

### Available Operations

* [speechSpeechLongrunningrecognize](#speechspeechlongrunningrecognize) - Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
* [speechSpeechRecognize](#speechspeechrecognize) - Performs synchronous speech recognition: receive results after all audio has been sent and processed.

## speechSpeechLongrunningrecognize

Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpeechSpeechLongrunningrecognizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LongRunningRecognizeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionAudio;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\SpeechAdaptationInput;
use \OpenAPI\OpenAPI\Models\Shared\ABNFGrammar;
use \OpenAPI\OpenAPI\Models\Shared\CustomClassInput;
use \OpenAPI\OpenAPI\Models\Shared\ClassItem;
use \OpenAPI\OpenAPI\Models\Shared\PhraseSetInput;
use \OpenAPI\OpenAPI\Models\Shared\Phrase;
use \OpenAPI\OpenAPI\Models\Shared\SpeakerDiarizationConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionConfigEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionMetadata;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionMetadataInteractionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionMetadataMicrophoneDistanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionMetadataOriginalMediaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionMetadataRecordingDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpeechContext;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SpeechSpeechLongrunningrecognizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpeechSpeechLongrunningrecognizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->longRunningRecognizeRequestInput = new LongRunningRecognizeRequestInput();
    $request->longRunningRecognizeRequestInput->audio = new RecognitionAudio();
    $request->longRunningRecognizeRequestInput->audio->content = 'excepturi';
    $request->longRunningRecognizeRequestInput->audio->uri = 'https://famous-leptocephalus.name';
    $request->longRunningRecognizeRequestInput->config = new RecognitionConfigInput();
    $request->longRunningRecognizeRequestInput->config->adaptation = new SpeechAdaptationInput();
    $request->longRunningRecognizeRequestInput->config->adaptation->abnfGrammar = new ABNFGrammar();
    $request->longRunningRecognizeRequestInput->config->adaptation->abnfGrammar->abnfStrings = [
        'quasi',
        'repudiandae',
        'sint',
        'veritatis',
    ];
    $request->longRunningRecognizeRequestInput->config->adaptation->customClasses = [
        new CustomClassInput(),
        new CustomClassInput(),
        new CustomClassInput(),
        new CustomClassInput(),
    ];
    $request->longRunningRecognizeRequestInput->config->adaptation->phraseSetReferences = [
        'enim',
        'consequatur',
    ];
    $request->longRunningRecognizeRequestInput->config->adaptation->phraseSets = [
        new PhraseSetInput(),
        new PhraseSetInput(),
        new PhraseSetInput(),
    ];
    $request->longRunningRecognizeRequestInput->config->alternativeLanguageCodes = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->longRunningRecognizeRequestInput->config->audioChannelCount = 289406;
    $request->longRunningRecognizeRequestInput->config->diarizationConfig = new SpeakerDiarizationConfigInput();
    $request->longRunningRecognizeRequestInput->config->diarizationConfig->enableSpeakerDiarization = false;
    $request->longRunningRecognizeRequestInput->config->diarizationConfig->maxSpeakerCount = 264730;
    $request->longRunningRecognizeRequestInput->config->diarizationConfig->minSpeakerCount = 183191;
    $request->longRunningRecognizeRequestInput->config->enableAutomaticPunctuation = false;
    $request->longRunningRecognizeRequestInput->config->enableSeparateRecognitionPerChannel = false;
    $request->longRunningRecognizeRequestInput->config->enableSpokenEmojis = false;
    $request->longRunningRecognizeRequestInput->config->enableSpokenPunctuation = false;
    $request->longRunningRecognizeRequestInput->config->enableWordConfidence = false;
    $request->longRunningRecognizeRequestInput->config->enableWordTimeOffsets = false;
    $request->longRunningRecognizeRequestInput->config->encoding = RecognitionConfigEncodingEnum::MULAW;
    $request->longRunningRecognizeRequestInput->config->languageCode = 'cupiditate';
    $request->longRunningRecognizeRequestInput->config->maxAlternatives = 552822;
    $request->longRunningRecognizeRequestInput->config->metadata = new RecognitionMetadata();
    $request->longRunningRecognizeRequestInput->config->metadata->audioTopic = 'perferendis';
    $request->longRunningRecognizeRequestInput->config->metadata->industryNaicsCodeOfAudio = 164940;
    $request->longRunningRecognizeRequestInput->config->metadata->interactionType = RecognitionMetadataInteractionTypeEnum::VOICE_COMMAND;
    $request->longRunningRecognizeRequestInput->config->metadata->microphoneDistance = RecognitionMetadataMicrophoneDistanceEnum::NEARFIELD;
    $request->longRunningRecognizeRequestInput->config->metadata->originalMediaType = RecognitionMetadataOriginalMediaTypeEnum::ORIGINAL_MEDIA_TYPE_UNSPECIFIED;
    $request->longRunningRecognizeRequestInput->config->metadata->originalMimeType = 'fugit';
    $request->longRunningRecognizeRequestInput->config->metadata->recordingDeviceName = 'dolorum';
    $request->longRunningRecognizeRequestInput->config->metadata->recordingDeviceType = RecognitionMetadataRecordingDeviceTypeEnum::PHONE_LINE;
    $request->longRunningRecognizeRequestInput->config->model = 'tempora';
    $request->longRunningRecognizeRequestInput->config->profanityFilter = false;
    $request->longRunningRecognizeRequestInput->config->sampleRateHertz = 703737;
    $request->longRunningRecognizeRequestInput->config->speechContexts = [
        new SpeechContext(),
        new SpeechContext(),
        new SpeechContext(),
    ];
    $request->longRunningRecognizeRequestInput->config->useEnhanced = false;
    $request->longRunningRecognizeRequestInput->outputConfig = new TranscriptOutputConfig();
    $request->longRunningRecognizeRequestInput->outputConfig->gcsUri = 'labore';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'eligendi';
    $request->key = 'sint';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new SpeechSpeechLongrunningrecognizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->speech->speechSpeechLongrunningrecognize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## speechSpeechRecognize

Performs synchronous speech recognition: receive results after all audio has been sent and processed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpeechSpeechRecognizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecognizeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionAudio;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\SpeechAdaptationInput;
use \OpenAPI\OpenAPI\Models\Shared\ABNFGrammar;
use \OpenAPI\OpenAPI\Models\Shared\CustomClassInput;
use \OpenAPI\OpenAPI\Models\Shared\ClassItem;
use \OpenAPI\OpenAPI\Models\Shared\PhraseSetInput;
use \OpenAPI\OpenAPI\Models\Shared\Phrase;
use \OpenAPI\OpenAPI\Models\Shared\SpeakerDiarizationConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionConfigEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionMetadata;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionMetadataInteractionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionMetadataMicrophoneDistanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionMetadataOriginalMediaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecognitionMetadataRecordingDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpeechContext;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SpeechSpeechRecognizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpeechSpeechRecognizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->recognizeRequestInput = new RecognizeRequestInput();
    $request->recognizeRequestInput->audio = new RecognitionAudio();
    $request->recognizeRequestInput->audio->content = 'dolor';
    $request->recognizeRequestInput->audio->uri = 'https://weepy-pork.info';
    $request->recognizeRequestInput->config = new RecognitionConfigInput();
    $request->recognizeRequestInput->config->adaptation = new SpeechAdaptationInput();
    $request->recognizeRequestInput->config->adaptation->abnfGrammar = new ABNFGrammar();
    $request->recognizeRequestInput->config->adaptation->abnfGrammar->abnfStrings = [
        'illum',
        'maiores',
    ];
    $request->recognizeRequestInput->config->adaptation->customClasses = [
        new CustomClassInput(),
        new CustomClassInput(),
        new CustomClassInput(),
    ];
    $request->recognizeRequestInput->config->adaptation->phraseSetReferences = [
        'magnam',
    ];
    $request->recognizeRequestInput->config->adaptation->phraseSets = [
        new PhraseSetInput(),
        new PhraseSetInput(),
        new PhraseSetInput(),
        new PhraseSetInput(),
    ];
    $request->recognizeRequestInput->config->alternativeLanguageCodes = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->recognizeRequestInput->config->audioChannelCount = 249796;
    $request->recognizeRequestInput->config->diarizationConfig = new SpeakerDiarizationConfigInput();
    $request->recognizeRequestInput->config->diarizationConfig->enableSpeakerDiarization = false;
    $request->recognizeRequestInput->config->diarizationConfig->maxSpeakerCount = 581273;
    $request->recognizeRequestInput->config->diarizationConfig->minSpeakerCount = 313218;
    $request->recognizeRequestInput->config->enableAutomaticPunctuation = false;
    $request->recognizeRequestInput->config->enableSeparateRecognitionPerChannel = false;
    $request->recognizeRequestInput->config->enableSpokenEmojis = false;
    $request->recognizeRequestInput->config->enableSpokenPunctuation = false;
    $request->recognizeRequestInput->config->enableWordConfidence = false;
    $request->recognizeRequestInput->config->enableWordTimeOffsets = false;
    $request->recognizeRequestInput->config->encoding = RecognitionConfigEncodingEnum::SPEEX_WITH_HEADER_BYTE;
    $request->recognizeRequestInput->config->languageCode = 'delectus';
    $request->recognizeRequestInput->config->maxAlternatives = 692532;
    $request->recognizeRequestInput->config->metadata = new RecognitionMetadata();
    $request->recognizeRequestInput->config->metadata->audioTopic = 'provident';
    $request->recognizeRequestInput->config->metadata->industryNaicsCodeOfAudio = 725255;
    $request->recognizeRequestInput->config->metadata->interactionType = RecognitionMetadataInteractionTypeEnum::PROFESSIONALLY_PRODUCED;
    $request->recognizeRequestInput->config->metadata->microphoneDistance = RecognitionMetadataMicrophoneDistanceEnum::MIDFIELD;
    $request->recognizeRequestInput->config->metadata->originalMediaType = RecognitionMetadataOriginalMediaTypeEnum::AUDIO;
    $request->recognizeRequestInput->config->metadata->originalMimeType = 'sapiente';
    $request->recognizeRequestInput->config->metadata->recordingDeviceName = 'amet';
    $request->recognizeRequestInput->config->metadata->recordingDeviceType = RecognitionMetadataRecordingDeviceTypeEnum::VEHICLE;
    $request->recognizeRequestInput->config->model = 'nisi';
    $request->recognizeRequestInput->config->profanityFilter = false;
    $request->recognizeRequestInput->config->sampleRateHertz = 423855;
    $request->recognizeRequestInput->config->speechContexts = [
        new SpeechContext(),
        new SpeechContext(),
        new SpeechContext(),
    ];
    $request->recognizeRequestInput->config->useEnhanced = false;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'nihil';
    $request->key = 'magnam';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new SpeechSpeechRecognizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->speech->speechSpeechRecognize($request, $requestSecurity);

    if ($response->recognizeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
