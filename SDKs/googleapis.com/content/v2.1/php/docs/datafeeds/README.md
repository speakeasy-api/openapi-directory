# datafeeds

### Available Operations

* [contentDatafeedsCustombatch](#contentdatafeedscustombatch) - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* [contentDatafeedsDelete](#contentdatafeedsdelete) - Deletes a datafeed configuration from your Merchant Center account.
* [contentDatafeedsFetchnow](#contentdatafeedsfetchnow) - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
* [contentDatafeedsGet](#contentdatafeedsget) - Retrieves a datafeed configuration from your Merchant Center account.
* [contentDatafeedsInsert](#contentdatafeedsinsert) - Registers a datafeed configuration with your Merchant Center account.
* [contentDatafeedsList](#contentdatafeedslist) - Lists the configurations for datafeeds in your Merchant Center account.
* [contentDatafeedsUpdate](#contentdatafeedsupdate) - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

## contentDatafeedsCustombatch

Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedsCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedsCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\Datafeed;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFetchSchedule;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFormat;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedTarget;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->datafeedsCustomBatchRequest = new DatafeedsCustomBatchRequest();
    $request->datafeedsCustomBatchRequest->entries = [
        new DatafeedsCustomBatchRequestEntry(),
        new DatafeedsCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'assumenda';
    $request->key = 'nemo';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new ContentDatafeedsCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsCustombatch($request, $requestSecurity);

    if ($response->datafeedsCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsDelete

Deletes a datafeed configuration from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'earum';
    $request->datafeedId = 'facere';
    $request->fields = 'numquam';
    $request->key = 'doloribus';
    $request->merchantId = 'suscipit';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new ContentDatafeedsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsFetchnow

Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsFetchnowRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsFetchnowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsFetchnowRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->datafeedId = 'non';
    $request->fields = 'amet';
    $request->key = 'beatae';
    $request->merchantId = 'dignissimos';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new ContentDatafeedsFetchnowSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsFetchnow($request, $requestSecurity);

    if ($response->datafeedsFetchNowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsGet

Retrieves a datafeed configuration from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptates';
    $request->datafeedId = 'libero';
    $request->fields = 'vitae';
    $request->key = 'accusamus';
    $request->merchantId = 'similique';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new ContentDatafeedsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsGet($request, $requestSecurity);

    if ($response->datafeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsInsert

Registers a datafeed configuration with your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Datafeed;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFetchSchedule;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFormat;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedTarget;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->datafeed = new Datafeed();
    $request->datafeed->attributeLanguage = 'minima';
    $request->datafeed->contentType = 'nobis';
    $request->datafeed->fetchSchedule = new DatafeedFetchSchedule();
    $request->datafeed->fetchSchedule->dayOfMonth = 680116;
    $request->datafeed->fetchSchedule->fetchUrl = 'adipisci';
    $request->datafeed->fetchSchedule->hour = 795535;
    $request->datafeed->fetchSchedule->minuteOfHour = 171853;
    $request->datafeed->fetchSchedule->password = 'blanditiis';
    $request->datafeed->fetchSchedule->paused = false;
    $request->datafeed->fetchSchedule->timeZone = 'in';
    $request->datafeed->fetchSchedule->username = 'Elenor_Haag35';
    $request->datafeed->fetchSchedule->weekday = 'adipisci';
    $request->datafeed->fileName = 'cum';
    $request->datafeed->format = new DatafeedFormat();
    $request->datafeed->format->columnDelimiter = 'blanditiis';
    $request->datafeed->format->fileEncoding = 'quas';
    $request->datafeed->format->quotingMode = 'hic';
    $request->datafeed->id = 'nesciunt';
    $request->datafeed->kind = 'culpa';
    $request->datafeed->name = 'Dewey Leannon';
    $request->datafeed->targets = [
        new DatafeedTarget(),
        new DatafeedTarget(),
        new DatafeedTarget(),
        new DatafeedTarget(),
    ];
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'reiciendis';
    $request->key = 'explicabo';
    $request->merchantId = 'asperiores';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new ContentDatafeedsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsInsert($request, $requestSecurity);

    if ($response->datafeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsList

Lists the configurations for datafeeds in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'in';
    $request->key = 'commodi';
    $request->maxResults = 696077;
    $request->merchantId = 'explicabo';
    $request->oauthToken = 'voluptas';
    $request->pageToken = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new ContentDatafeedsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsList($request, $requestSecurity);

    if ($response->datafeedsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsUpdate

Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Datafeed;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFetchSchedule;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFormat;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedTarget;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->datafeed = new Datafeed();
    $request->datafeed->attributeLanguage = 'illo';
    $request->datafeed->contentType = 'reiciendis';
    $request->datafeed->fetchSchedule = new DatafeedFetchSchedule();
    $request->datafeed->fetchSchedule->dayOfMonth = 19300;
    $request->datafeed->fetchSchedule->fetchUrl = 'corrupti';
    $request->datafeed->fetchSchedule->hour = 979574;
    $request->datafeed->fetchSchedule->minuteOfHour = 274823;
    $request->datafeed->fetchSchedule->password = 'sed';
    $request->datafeed->fetchSchedule->paused = false;
    $request->datafeed->fetchSchedule->timeZone = 'provident';
    $request->datafeed->fetchSchedule->username = 'Destinee40';
    $request->datafeed->fetchSchedule->weekday = 'occaecati';
    $request->datafeed->fileName = 'quos';
    $request->datafeed->format = new DatafeedFormat();
    $request->datafeed->format->columnDelimiter = 'voluptatibus';
    $request->datafeed->format->fileEncoding = 'tempora';
    $request->datafeed->format->quotingMode = 'tempora';
    $request->datafeed->id = 'voluptate';
    $request->datafeed->kind = 'reiciendis';
    $request->datafeed->name = 'Karen Franey';
    $request->datafeed->targets = [
        new DatafeedTarget(),
        new DatafeedTarget(),
        new DatafeedTarget(),
    ];
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->datafeedId = 'debitis';
    $request->fields = 'rem';
    $request->key = 'sit';
    $request->merchantId = 'nobis';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'veniam';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new ContentDatafeedsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsUpdate($request, $requestSecurity);

    if ($response->datafeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
