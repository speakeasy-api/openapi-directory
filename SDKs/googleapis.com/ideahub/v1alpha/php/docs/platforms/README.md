# platforms

### Available Operations

* [ideahubPlatformsPropertiesIdeaActivitiesCreate](#ideahubplatformspropertiesideaactivitiescreate) - Creates an idea activity entry.
* [ideahubPlatformsPropertiesIdeasList](#ideahubplatformspropertiesideaslist) - List ideas for a given Creator and filter and sort options.
* [ideahubPlatformsPropertiesLocalesList](#ideahubplatformspropertieslocaleslist) - Returns which locales ideas are available in for a given Creator.
* [ideahubPlatformsPropertiesTopicStatesPatch](#ideahubplatformspropertiestopicstatespatch) - Update a topic state resource.

## ideahubPlatformsPropertiesIdeaActivitiesCreate

Creates an idea activity entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1alphaIdeaActivity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleSearchIdeahubV1alphaIdeaActivity = new GoogleSearchIdeahubV1alphaIdeaActivity();
    $request->googleSearchIdeahubV1alphaIdeaActivity->ideas = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->googleSearchIdeahubV1alphaIdeaActivity->name = 'Cedric Connelly';
    $request->googleSearchIdeahubV1alphaIdeaActivity->topics = [
        'molestiae',
        'quod',
        'quod',
        'esse',
    ];
    $request->googleSearchIdeahubV1alphaIdeaActivity->type = GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum::POST_PUBLISHED;
    $request->googleSearchIdeahubV1alphaIdeaActivity->uri = 'https://rash-butcher.net';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $response = $sdk->platforms->ideahubPlatformsPropertiesIdeaActivitiesCreate($request);

    if ($response->googleSearchIdeahubV1alphaIdeaActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ideahubPlatformsPropertiesIdeasList

List ideas for a given Creator and filter and sort options.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdeahubPlatformsPropertiesIdeasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdeahubPlatformsPropertiesIdeasListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'esse';
    $request->filter = 'ipsum';
    $request->key = 'excepturi';
    $request->oauthToken = 'aspernatur';
    $request->orderBy = 'perferendis';
    $request->pageSize = 324141;
    $request->pageToken = 'natus';
    $request->parent = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';

    $response = $sdk->platforms->ideahubPlatformsPropertiesIdeasList($request);

    if ($response->googleSearchIdeahubV1alphaListIdeasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ideahubPlatformsPropertiesLocalesList

Returns which locales ideas are available in for a given Creator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdeahubPlatformsPropertiesLocalesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdeahubPlatformsPropertiesLocalesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'in';
    $request->key = 'corporis';
    $request->oauthToken = 'iste';
    $request->pageSize = 437032;
    $request->pageToken = 'saepe';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

    $response = $sdk->platforms->ideahubPlatformsPropertiesLocalesList($request);

    if ($response->googleSearchIdeahubV1alphaListAvailableLocalesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ideahubPlatformsPropertiesTopicStatesPatch

Update a topic state resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdeahubPlatformsPropertiesTopicStatesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1alphaTopicState;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdeahubPlatformsPropertiesTopicStatesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleSearchIdeahubV1alphaTopicState = new GoogleSearchIdeahubV1alphaTopicState();
    $request->googleSearchIdeahubV1alphaTopicState->dismissed = false;
    $request->googleSearchIdeahubV1alphaTopicState->name = 'Cameron Dach';
    $request->googleSearchIdeahubV1alphaTopicState->saved = false;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->name = 'Velma Batz';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->updateMask = 'architecto';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'dolorem';

    $response = $sdk->platforms->ideahubPlatformsPropertiesTopicStatesPatch($request);

    if ($response->googleSearchIdeahubV1alphaTopicState !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
