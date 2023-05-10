# domainAliases

### Available Operations

* [directoryDomainAliasesDelete](#directorydomainaliasesdelete) - Deletes a domain Alias of the customer.
* [directoryDomainAliasesGet](#directorydomainaliasesget) - Retrieves a domain alias of the customer.
* [directoryDomainAliasesInsert](#directorydomainaliasesinsert) - Inserts a domain alias of the customer.
* [directoryDomainAliasesList](#directorydomainaliaseslist) - Lists the domain aliases of the customer.

## directoryDomainAliasesDelete

Deletes a domain Alias of the customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryDomainAliasesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'similique';
    $request->customer = 'culpa';
    $request->domainAliasName = 'aliquid';
    $request->fields = 'tenetur';
    $request->key = 'quae';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new DirectoryDomainAliasesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domainAliases->directoryDomainAliasesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryDomainAliasesGet

Retrieves a domain alias of the customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryDomainAliasesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->customer = 'aliquam';
    $request->domainAliasName = 'sapiente';
    $request->fields = 'dicta';
    $request->key = 'ullam';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new DirectoryDomainAliasesGetSecurity();
    $requestSecurity->option1 = new DirectoryDomainAliasesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domainAliases->directoryDomainAliasesGet($request, $requestSecurity);

    if ($response->domainAlias !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryDomainAliasesInsert

Inserts a domain alias of the customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainAlias;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryDomainAliasesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->domainAlias = new DomainAlias();
    $request->domainAlias->creationTime = 'qui';
    $request->domainAlias->domainAliasName = 'quibusdam';
    $request->domainAlias->etag = 'ex';
    $request->domainAlias->kind = 'deleniti';
    $request->domainAlias->parentDomainName = 'itaque';
    $request->domainAlias->verified = false;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->customer = 'tenetur';
    $request->fields = 'quasi';
    $request->key = 'at';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new DirectoryDomainAliasesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domainAliases->directoryDomainAliasesInsert($request, $requestSecurity);

    if ($response->domainAlias !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryDomainAliasesList

Lists the domain aliases of the customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryDomainAliasesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryDomainAliasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->customer = 'temporibus';
    $request->fields = 'accusantium';
    $request->key = 'rem';
    $request->oauthToken = 'aut';
    $request->parentDomainName = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new DirectoryDomainAliasesListSecurity();
    $requestSecurity->option1 = new DirectoryDomainAliasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domainAliases->directoryDomainAliasesList($request, $requestSecurity);

    if ($response->domainAliases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
