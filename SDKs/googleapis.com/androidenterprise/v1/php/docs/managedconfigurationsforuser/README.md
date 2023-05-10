# managedconfigurationsforuser

### Available Operations

* [androidenterpriseManagedconfigurationsforuserDelete](#androidenterprisemanagedconfigurationsforuserdelete) - Removes a per-user managed configuration for an app for the specified user.
* [androidenterpriseManagedconfigurationsforuserGet](#androidenterprisemanagedconfigurationsforuserget) - Retrieves details of a per-user managed configuration for an app for the specified user.
* [androidenterpriseManagedconfigurationsforuserList](#androidenterprisemanagedconfigurationsforuserlist) - Lists all the per-user managed configurations for the specified user. Only the ID is set.
* [androidenterpriseManagedconfigurationsforuserUpdate](#androidenterprisemanagedconfigurationsforuserupdate) - Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.

## androidenterpriseManagedconfigurationsforuserDelete

Removes a per-user managed configuration for an app for the specified user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsforuserDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsforuserDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseManagedconfigurationsforuserDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'qui';
    $request->enterpriseId = 'quae';
    $request->fields = 'laudantium';
    $request->key = 'odio';
    $request->managedConfigurationForUserId = 'occaecati';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'omnis';
    $request->userId = 'quis';

    $requestSecurity = new AndroidenterpriseManagedconfigurationsforuserDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedconfigurationsforuser->androidenterpriseManagedconfigurationsforuserDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseManagedconfigurationsforuserGet

Retrieves details of a per-user managed configuration for an app for the specified user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsforuserGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsforuserGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseManagedconfigurationsforuserGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consectetur';
    $request->enterpriseId = 'vero';
    $request->fields = 'tenetur';
    $request->key = 'dignissimos';
    $request->managedConfigurationForUserId = 'hic';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'similique';
    $request->userId = 'facilis';

    $requestSecurity = new AndroidenterpriseManagedconfigurationsforuserGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedconfigurationsforuser->androidenterpriseManagedconfigurationsforuserGet($request, $requestSecurity);

    if ($response->managedConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseManagedconfigurationsforuserList

Lists all the per-user managed configurations for the specified user. Only the ID is set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsforuserListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsforuserListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseManagedconfigurationsforuserListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->enterpriseId = 'illum';
    $request->fields = 'sequi';
    $request->key = 'natus';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'exercitationem';
    $request->userId = 'nulla';

    $requestSecurity = new AndroidenterpriseManagedconfigurationsforuserListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedconfigurationsforuser->androidenterpriseManagedconfigurationsforuserList($request, $requestSecurity);

    if ($response->managedConfigurationsForUserListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseManagedconfigurationsforuserUpdate

Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsforuserUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationVariables;
use \OpenAPI\OpenAPI\Models\Shared\VariableSet;
use \OpenAPI\OpenAPI\Models\Shared\ManagedProperty;
use \OpenAPI\OpenAPI\Models\Shared\ManagedPropertyBundle;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsforuserUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseManagedconfigurationsforuserUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->managedConfiguration = new ManagedConfiguration();
    $request->managedConfiguration->configurationVariables = new ConfigurationVariables();
    $request->managedConfiguration->configurationVariables->mcmId = 'porro';
    $request->managedConfiguration->configurationVariables->variableSet = [
        new VariableSet(),
        new VariableSet(),
        new VariableSet(),
        new VariableSet(),
    ];
    $request->managedConfiguration->kind = 'doloribus';
    $request->managedConfiguration->managedProperty = [
        new ManagedProperty(),
        new ManagedProperty(),
    ];
    $request->managedConfiguration->productId = 'eligendi';
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officia';
    $request->enterpriseId = 'tempora';
    $request->fields = 'ipsam';
    $request->key = 'ea';
    $request->managedConfigurationForUserId = 'aspernatur';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'ratione';
    $request->userId = 'ex';

    $requestSecurity = new AndroidenterpriseManagedconfigurationsforuserUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedconfigurationsforuser->androidenterpriseManagedconfigurationsforuserUpdate($request, $requestSecurity);

    if ($response->managedConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
