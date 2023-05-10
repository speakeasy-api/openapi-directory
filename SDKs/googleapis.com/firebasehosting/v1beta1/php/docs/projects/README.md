# projects

### Available Operations

* [firebasehostingProjectsSitesCreate](#firebasehostingprojectssitescreate) - Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
* [firebasehostingProjectsSitesList](#firebasehostingprojectssiteslist) - Lists each Hosting Site associated with the specified parent Firebase project.

## firebasehostingProjectsSitesCreate

Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingProjectsSitesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->siteInput = new SiteInput();
    $request->siteInput->appId = 'placeat';
    $request->siteInput->labels = [
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ];
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->siteId = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

    $requestSecurity = new FirebasehostingProjectsSitesCreateSecurity();
    $requestSecurity->option1 = new FirebasehostingProjectsSitesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasehostingProjectsSitesCreate($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingProjectsSitesList

Lists each Hosting Site associated with the specified parent Firebase project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingProjectsSitesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->pageSize = 678880;
    $request->pageToken = 'dicta';
    $request->parent = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new FirebasehostingProjectsSitesListSecurity();
    $requestSecurity->option1 = new FirebasehostingProjectsSitesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasehostingProjectsSitesList($request, $requestSecurity);

    if ($response->listSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
