# domains

### Available Operations

* [directoryDomainsDelete](#directorydomainsdelete) - Deletes a domain of the customer.
* [directoryDomainsGet](#directorydomainsget) - Retrieves a domain of the customer.
* [directoryDomainsInsert](#directorydomainsinsert) - Inserts a domain of the customer.
* [directoryDomainsList](#directorydomainslist) - Lists the domains of the customer.

## directoryDomainsDelete

Deletes a domain of the customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryDomainsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->customer = 'occaecati';
    $request->domainName = 'numquam';
    $request->fields = 'impedit';
    $request->key = 'explicabo';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DirectoryDomainsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domains->directoryDomainsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryDomainsGet

Retrieves a domain of the customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryDomainsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->customer = 'voluptas';
    $request->domainName = 'asperiores';
    $request->fields = 'aperiam';
    $request->key = 'ea';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new DirectoryDomainsGetSecurity();
    $requestSecurity->option1 = new DirectoryDomainsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domains->directoryDomainsGet($request, $requestSecurity);

    if ($response->domains !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryDomainsInsert

Inserts a domain of the customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Domains;
use \OpenAPI\OpenAPI\Models\Shared\DomainAlias;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryDomainsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->domains = new Domains();
    $request->domains->creationTime = 'dignissimos';
    $request->domains->domainAliases = [
        new DomainAlias(),
        new DomainAlias(),
        new DomainAlias(),
    ];
    $request->domains->domainName = 'asperiores';
    $request->domains->etag = 'nemo';
    $request->domains->isPrimary = false;
    $request->domains->kind = 'quae';
    $request->domains->verified = false;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->customer = 'labore';
    $request->fields = 'ab';
    $request->key = 'adipisci';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DirectoryDomainsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domains->directoryDomainsInsert($request, $requestSecurity);

    if ($response->domains !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryDomainsList

Lists the domains of the customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryDomainsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->customer = 'fugiat';
    $request->fields = 'vel';
    $request->key = 'ducimus';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new DirectoryDomainsListSecurity();
    $requestSecurity->option1 = new DirectoryDomainsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domains->directoryDomainsList($request, $requestSecurity);

    if ($response->domains2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
