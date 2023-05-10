# platforms

### Available Operations

* [versionhistoryPlatformsChannelsList](#versionhistoryplatformschannelslist) - Returns list of channels that are available for a given platform.
* [versionhistoryPlatformsChannelsVersionsList](#versionhistoryplatformschannelsversionslist) - Returns list of version for the given platform/channel.
* [versionhistoryPlatformsChannelsVersionsReleasesList](#versionhistoryplatformschannelsversionsreleaseslist) - Returns list of releases of the given version.
* [versionhistoryPlatformsList](#versionhistoryplatformslist) - Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.

## versionhistoryPlatformsChannelsList

Returns list of channels that are available for a given platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VersionhistoryPlatformsChannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VersionhistoryPlatformsChannelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 791725;
    $request->pageToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $response = $sdk->platforms->versionhistoryPlatformsChannelsList($request);

    if ($response->listChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## versionhistoryPlatformsChannelsVersionsList

Returns list of version for the given platform/channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VersionhistoryPlatformsChannelsVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VersionhistoryPlatformsChannelsVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->filter = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->orderBy = 'repellendus';
    $request->pageSize = 957156;
    $request->pageToken = 'quo';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'maiores';

    $response = $sdk->platforms->versionhistoryPlatformsChannelsVersionsList($request);

    if ($response->listVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## versionhistoryPlatformsChannelsVersionsReleasesList

Returns list of releases of the given version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VersionhistoryPlatformsChannelsVersionsReleasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VersionhistoryPlatformsChannelsVersionsReleasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'totam';
    $request->filter = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->orderBy = 'nam';
    $request->pageSize = 639921;
    $request->pageToken = 'occaecati';
    $request->parent = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $response = $sdk->platforms->versionhistoryPlatformsChannelsVersionsReleasesList($request);

    if ($response->listReleasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## versionhistoryPlatformsList

Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VersionhistoryPlatformsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VersionhistoryPlatformsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->oauthToken = 'impedit';
    $request->pageSize = 736918;
    $request->pageToken = 'esse';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $response = $sdk->platforms->versionhistoryPlatformsList($request);

    if ($response->listPlatformsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
