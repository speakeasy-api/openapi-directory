# storelayoutpages

### Available Operations

* [androidenterpriseStorelayoutpagesDelete](#androidenterprisestorelayoutpagesdelete) - Deletes a store page.
* [androidenterpriseStorelayoutpagesGet](#androidenterprisestorelayoutpagesget) - Retrieves details of a store page.
* [androidenterpriseStorelayoutpagesInsert](#androidenterprisestorelayoutpagesinsert) - Inserts a new store page.
* [androidenterpriseStorelayoutpagesList](#androidenterprisestorelayoutpageslist) - Retrieves the details of all pages in the store.
* [androidenterpriseStorelayoutpagesUpdate](#androidenterprisestorelayoutpagesupdate) - Updates the content of a store page.

## androidenterpriseStorelayoutpagesDelete

Deletes a store page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutpagesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutpagesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseStorelayoutpagesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->enterpriseId = 'harum';
    $request->fields = 'laboriosam';
    $request->key = 'ipsa';
    $request->oauthToken = 'voluptates';
    $request->pageId = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new AndroidenterpriseStorelayoutpagesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storelayoutpages->androidenterpriseStorelayoutpagesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseStorelayoutpagesGet

Retrieves details of a store page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutpagesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutpagesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseStorelayoutpagesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->enterpriseId = 'voluptas';
    $request->fields = 'minima';
    $request->key = 'nobis';
    $request->oauthToken = 'dolorum';
    $request->pageId = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new AndroidenterpriseStorelayoutpagesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storelayoutpages->androidenterpriseStorelayoutpagesGet($request, $requestSecurity);

    if ($response->storePage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseStorelayoutpagesInsert

Inserts a new store page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutpagesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StorePage;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedText;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutpagesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseStorelayoutpagesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->storePage = new StorePage();
    $request->storePage->id = '44ed53b8-8f3a-48d8-b5c0-b2f2fb7b194a';
    $request->storePage->link = [
        'in',
    ];
    $request->storePage->name = [
        new LocalizedText(),
        new LocalizedText(),
    ];
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->enterpriseId = 'unde';
    $request->fields = 'architecto';
    $request->key = 'suscipit';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new AndroidenterpriseStorelayoutpagesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storelayoutpages->androidenterpriseStorelayoutpagesInsert($request, $requestSecurity);

    if ($response->storePage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseStorelayoutpagesList

Retrieves the details of all pages in the store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutpagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutpagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseStorelayoutpagesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->enterpriseId = 'sed';
    $request->fields = 'provident';
    $request->key = 'eius';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new AndroidenterpriseStorelayoutpagesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storelayoutpages->androidenterpriseStorelayoutpagesList($request, $requestSecurity);

    if ($response->storeLayoutPagesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseStorelayoutpagesUpdate

Updates the content of a store page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutpagesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StorePage;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedText;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutpagesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseStorelayoutpagesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->storePage = new StorePage();
    $request->storePage->id = 'f447f603-e8b4-445e-80ca-55efd20e457e';
    $request->storePage->link = [
        'laudantium',
    ];
    $request->storePage->name = [
        new LocalizedText(),
        new LocalizedText(),
    ];
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->enterpriseId = 'dolorum';
    $request->fields = 'voluptatum';
    $request->key = 'error';
    $request->oauthToken = 'hic';
    $request->pageId = 'expedita';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AndroidenterpriseStorelayoutpagesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storelayoutpages->androidenterpriseStorelayoutpagesUpdate($request, $requestSecurity);

    if ($response->storePage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
