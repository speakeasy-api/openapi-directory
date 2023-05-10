# channelSections

### Available Operations

* [youtubeChannelSectionsDelete](#youtubechannelsectionsdelete) - Deletes a resource.
* [youtubeChannelSectionsInsert](#youtubechannelsectionsinsert) - Inserts a new resource into this collection.
* [youtubeChannelSectionsList](#youtubechannelsectionslist) - Retrieves a list of resources, possibly filtered.
* [youtubeChannelSectionsUpdate](#youtubechannelsectionsupdate) - Updates an existing resource.

## youtubeChannelSectionsDelete

Deletes a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeChannelSectionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->fields = 'odit';
    $request->id = '516fe4c8-b711-4e5b-bfd2-ed028921cddc';
    $request->key = 'ea';
    $request->oauthToken = 'excepturi';
    $request->onBehalfOfContentOwner = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new YoutubeChannelSectionsDeleteSecurity();
    $requestSecurity->option1 = new YoutubeChannelSectionsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channelSections->youtubeChannelSectionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeChannelSectionsInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSection;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionLocalization;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionSnippetStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionSnippetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionTargeting;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeChannelSectionsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channelSection = new ChannelSection();
    $request->channelSection->contentDetails = new ChannelSectionContentDetails();
    $request->channelSection->contentDetails->channels = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->channelSection->contentDetails->playlists = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->channelSection->etag = 'voluptatibus';
    $request->channelSection->id = '0d30c5fb-b258-4705-b202-c73d5fe9b90c';
    $request->channelSection->kind = 'consequuntur';
    $request->channelSection->localizations = [
        'error' => new ChannelSectionLocalization(),
        'eaque' => new ChannelSectionLocalization(),
        'occaecati' => new ChannelSectionLocalization(),
    ];
    $request->channelSection->snippet = new ChannelSectionSnippet();
    $request->channelSection->snippet->channelId = 'rerum';
    $request->channelSection->snippet->defaultLanguage = 'adipisci';
    $request->channelSection->snippet->localized = new ChannelSectionLocalization();
    $request->channelSection->snippet->localized->title = 'Dr.';
    $request->channelSection->snippet->position = 934214;
    $request->channelSection->snippet->style = ChannelSectionSnippetStyleEnum::CHANNELSECTION_STYLE_UNSPECIFIED;
    $request->channelSection->snippet->title = 'Miss';
    $request->channelSection->snippet->type = ChannelSectionSnippetTypeEnum::UPCOMING_EVENTS;
    $request->channelSection->targeting = new ChannelSectionTargeting();
    $request->channelSection->targeting->countries = [
        'pariatur',
        'provident',
        'nobis',
    ];
    $request->channelSection->targeting->languages = [
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->channelSection->targeting->regions = [
        'dolorem',
        'dolorem',
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'hic';
    $request->key = 'excepturi';
    $request->oauthToken = 'cum';
    $request->onBehalfOfContentOwner = 'voluptate';
    $request->onBehalfOfContentOwnerChannel = 'dignissimos';
    $request->part = [
        'amet',
        'dolorum',
        'numquam',
        'veritatis',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new YoutubeChannelSectionsInsertSecurity();
    $requestSecurity->option1 = new YoutubeChannelSectionsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channelSections->youtubeChannelSectionsInsert($request, $requestSecurity);

    if ($response->channelSection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeChannelSectionsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeChannelSectionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->channelId = 'voluptatibus';
    $request->fields = 'voluptas';
    $request->hl = 'natus';
    $request->id = [
        'atque',
    ];
    $request->key = 'sit';
    $request->mine = false;
    $request->oauthToken = 'fugiat';
    $request->onBehalfOfContentOwner = 'ab';
    $request->part = [
        'dolorum',
        'iusto',
        'voluptate',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new YoutubeChannelSectionsListSecurity();
    $requestSecurity->option1 = new YoutubeChannelSectionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channelSections->youtubeChannelSectionsList($request, $requestSecurity);

    if ($response->channelSectionListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeChannelSectionsUpdate

Updates an existing resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSection;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionLocalization;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionSnippetStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionSnippetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSectionTargeting;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelSectionsUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeChannelSectionsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channelSection = new ChannelSection();
    $request->channelSection->contentDetails = new ChannelSectionContentDetails();
    $request->channelSection->contentDetails->channels = [
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->channelSection->contentDetails->playlists = [
        'id',
        'saepe',
    ];
    $request->channelSection->etag = 'eius';
    $request->channelSection->id = '203ce5e6-a95d-48a0-9446-ce2af7a73cf3';
    $request->channelSection->kind = 'tempore';
    $request->channelSection->localizations = [
        'numquam' => new ChannelSectionLocalization(),
        'enim' => new ChannelSectionLocalization(),
        'dolorem' => new ChannelSectionLocalization(),
        'sapiente' => new ChannelSectionLocalization(),
    ];
    $request->channelSection->snippet = new ChannelSectionSnippet();
    $request->channelSection->snippet->channelId = 'totam';
    $request->channelSection->snippet->defaultLanguage = 'nihil';
    $request->channelSection->snippet->localized = new ChannelSectionLocalization();
    $request->channelSection->snippet->localized->title = 'Mr.';
    $request->channelSection->snippet->position = 711584;
    $request->channelSection->snippet->style = ChannelSectionSnippetStyleEnum::CHANNELSECTION_STYLE_UNSPECIFIED;
    $request->channelSection->snippet->title = 'Mr.';
    $request->channelSection->snippet->type = ChannelSectionSnippetTypeEnum::LIKED_PLAYLISTS;
    $request->channelSection->targeting = new ChannelSectionTargeting();
    $request->channelSection->targeting->countries = [
        'voluptas',
        'deserunt',
        'quam',
    ];
    $request->channelSection->targeting->languages = [
        'incidunt',
    ];
    $request->channelSection->targeting->regions = [
        'cupiditate',
    ];
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'dicta';
    $request->key = 'laborum';
    $request->oauthToken = 'totam';
    $request->onBehalfOfContentOwner = 'incidunt';
    $request->part = [
        'dolores',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new YoutubeChannelSectionsUpdateSecurity();
    $requestSecurity->option1 = new YoutubeChannelSectionsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channelSections->youtubeChannelSectionsUpdate($request, $requestSecurity);

    if ($response->channelSection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
