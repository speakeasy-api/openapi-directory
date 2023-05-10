# v1

### Available Operations

* [domainsrdapGetDomains](#domainsrdapgetdomains) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [domainsrdapGetEntities](#domainsrdapgetentities) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [domainsrdapGetHelp](#domainsrdapgethelp) - Get help information for the RDAP API, including links to documentation.
* [domainsrdapGetIp](#domainsrdapgetip) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [domainsrdapGetNameservers](#domainsrdapgetnameservers) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

## domainsrdapGetDomains

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsrdapGetDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsrdapGetDomainsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $response = $sdk->v1->domainsrdapGetDomains($request);

    if ($response->rdapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsrdapGetEntities

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsrdapGetEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsrdapGetEntitiesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $response = $sdk->v1->domainsrdapGetEntities($request);

    if ($response->rdapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsrdapGetHelp

Get help information for the RDAP API, including links to documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsrdapGetHelpRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsrdapGetHelpRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

    $response = $sdk->v1->domainsrdapGetHelp($request);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsrdapGetIp

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsrdapGetIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsrdapGetIpRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'architecto';

    $response = $sdk->v1->domainsrdapGetIp($request);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsrdapGetNameservers

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsrdapGetNameserversRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsrdapGetNameserversRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';

    $response = $sdk->v1->domainsrdapGetNameservers($request);

    if ($response->rdapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
