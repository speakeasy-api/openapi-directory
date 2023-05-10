# tagBindings

### Available Operations

* [cloudresourcemanagerTagBindingsCreate](#cloudresourcemanagertagbindingscreate) - Creates a TagBinding between a TagValue and a Google Cloud resource.
* [cloudresourcemanagerTagBindingsList](#cloudresourcemanagertagbindingslist) - Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name

## cloudresourcemanagerTagBindingsCreate

Creates a TagBinding between a TagValue and a Google Cloud resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagBindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagBindingInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagBindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagBindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tagBindingInput = new TagBindingInput();
    $request->tagBindingInput->parent = 'fugit';
    $request->tagBindingInput->tagValue = 'dolorum';
    $request->tagBindingInput->tagValueNamespacedName = 'excepturi';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'sint';
    $request->validateOnly = false;

    $requestSecurity = new CloudresourcemanagerTagBindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagBindings->cloudresourcemanagerTagBindingsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagBindingsList

Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagBindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagBindingsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagBindingsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagBindingsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagBindingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'officia';
    $request->key = 'dolor';
    $request->oauthToken = 'debitis';
    $request->pageSize = 952749;
    $request->pageToken = 'dolorum';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new CloudresourcemanagerTagBindingsListSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerTagBindingsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagBindings->cloudresourcemanagerTagBindingsList($request, $requestSecurity);

    if ($response->listTagBindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
