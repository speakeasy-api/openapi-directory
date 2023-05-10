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
use \OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1betaIdeaActivity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1betaIdeaActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleSearchIdeahubV1betaIdeaActivity = new GoogleSearchIdeahubV1betaIdeaActivity();
    $request->googleSearchIdeahubV1betaIdeaActivity->ideas = [
        'deserunt',
    ];
    $request->googleSearchIdeahubV1betaIdeaActivity->name = 'Roberta Sipes';
    $request->googleSearchIdeahubV1betaIdeaActivity->topics = [
        'at',
    ];
    $request->googleSearchIdeahubV1betaIdeaActivity->type = GoogleSearchIdeahubV1betaIdeaActivityTypeEnum::POST_UNPUBLISHED;
    $request->googleSearchIdeahubV1betaIdeaActivity->uri = 'https://kosher-shoestring.net';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->oauthToken = 'nam';
    $request->parent = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'deleniti';

    $response = $sdk->platforms->ideahubPlatformsPropertiesIdeaActivitiesCreate($request);

    if ($response->googleSearchIdeahubV1betaIdeaActivity !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'optio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->filter = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->orderBy = 'impedit';
    $request->pageSize = 736918;
    $request->pageToken = 'esse';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $response = $sdk->platforms->ideahubPlatformsPropertiesIdeasList($request);

    if ($response->googleSearchIdeahubV1betaListIdeasResponse !== null) {
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
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->oauthToken = 'laboriosam';
    $request->pageSize = 943749;
    $request->pageToken = 'saepe';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $response = $sdk->platforms->ideahubPlatformsPropertiesLocalesList($request);

    if ($response->googleSearchIdeahubV1betaListAvailableLocalesResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1betaTopicState;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdeahubPlatformsPropertiesTopicStatesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleSearchIdeahubV1betaTopicState = new GoogleSearchIdeahubV1betaTopicState();
    $request->googleSearchIdeahubV1betaTopicState->dismissed = false;
    $request->googleSearchIdeahubV1betaTopicState->name = 'Dr. Rickey Boyle';
    $request->googleSearchIdeahubV1betaTopicState->saved = false;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'dolorem';
    $request->key = 'corporis';
    $request->name = 'Della Halvorson';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->updateMask = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

    $response = $sdk->platforms->ideahubPlatformsPropertiesTopicStatesPatch($request);

    if ($response->googleSearchIdeahubV1betaTopicState !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
