# customMusic

### Available Operations

* [createAudioRenders](#createaudiorenders) - Create rendered audio
* [fetchRenders](#fetchrenders) - Get details about audio renders
* [listCustomDescriptors](#listcustomdescriptors) - List computer audio descriptors
* [listCustomInstruments](#listcustominstruments) - List computer audio instruments

## createAudioRenders

This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateAudioRendersRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAudioRender;
use \OpenAPI\OpenAPI\Models\Shared\CreateAudioRenderPresetEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimeline;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpan;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanInstrumentGroup;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanInstrumentGroupStatus;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanRegion;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanRegionEndType;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanRegionEndTypeEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanRegionEndTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanRegionKey;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanRegionKeyTonicNoteEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanRegionKeyTonicQualityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanRegionRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanSpanTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioRenderTimelineSpanTempoChanges;
use \OpenAPI\OpenAPI\Models\Operations\CreateAudioRendersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAudioRendersRequest();
    $request->audioRenders = [
        new CreateAudioRender(),
    ];

    $requestSecurity = new CreateAudioRendersSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->customMusic->createAudioRenders($request, $requestSecurity);

    if ($response->audioRendersListResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRenders

This endpoint shows the status of one or more audio renders, including download links for completed audio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRendersRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRendersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRendersRequest();
    $request->id = [
        'sunt',
        'ullam',
    ];

    $requestSecurity = new FetchRendersSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->customMusic->fetchRenders($request, $requestSecurity);

    if ($response->audioRendersListResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomDescriptors

This endpoint lists the descriptors that you can use in the audio regions in an audio render.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomDescriptorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomDescriptorsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomDescriptorsRequest();
    $request->bandId = 'nam';
    $request->bandName = 'hic';
    $request->id = [
        'cumque',
    ];
    $request->instrumentId = 'soluta';
    $request->instrumentName = 'nobis';
    $request->name = 'Miss Kerry Emmerich';
    $request->page = 731694;
    $request->perPage = 584476;
    $request->renderSpeedOver = 456.14;
    $request->tag = 'delectus';
    $request->tempo = 2091.57;
    $request->tempoFrom = 2921.47;
    $request->tempoTo = 2869.15;

    $requestSecurity = new ListCustomDescriptorsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->customMusic->listCustomDescriptors($request, $requestSecurity);

    if ($response->descriptorsListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomInstruments

This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomInstrumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomInstrumentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomInstrumentsRequest();
    $request->id = [
        'dolorum',
    ];
    $request->name = 'Amy Armstrong';
    $request->page = 9240;
    $request->perPage = 669917;
    $request->tag = 'repellendus';

    $requestSecurity = new ListCustomInstrumentsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->customMusic->listCustomInstruments($request, $requestSecurity);

    if ($response->instrumentsListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
