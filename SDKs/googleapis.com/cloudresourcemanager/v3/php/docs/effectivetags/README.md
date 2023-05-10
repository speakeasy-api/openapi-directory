# effectiveTags

### Available Operations

* [cloudresourcemanagerEffectiveTagsList](#cloudresourcemanagereffectivetagslist) - Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.

## cloudresourcemanagerEffectiveTagsList

Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerEffectiveTagsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerEffectiveTagsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerEffectiveTagsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerEffectiveTagsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerEffectiveTagsListRequest();
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

    $requestSecurity = new CloudresourcemanagerEffectiveTagsListSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerEffectiveTagsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->effectiveTags->cloudresourcemanagerEffectiveTagsList($request, $requestSecurity);

    if ($response->listEffectiveTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
