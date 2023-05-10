# savedQueries

### Available Operations

* [cloudassetSavedQueriesCreate](#cloudassetsavedqueriescreate) - Creates a saved query in a parent project/folder/organization.
* [cloudassetSavedQueriesDelete](#cloudassetsavedqueriesdelete) - Deletes a saved query.
* [cloudassetSavedQueriesGet](#cloudassetsavedqueriesget) - Gets details about a saved query.
* [cloudassetSavedQueriesList](#cloudassetsavedquerieslist) - Lists all saved queries in a parent project/folder/organization.
* [cloudassetSavedQueriesPatch](#cloudassetsavedqueriespatch) - Updates a saved query.

## cloudassetSavedQueriesCreate

Creates a saved query in a parent project/folder/organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSavedQueriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavedQueryInput;
use \OpenAPI\OpenAPI\Models\Shared\QueryContent;
use \OpenAPI\OpenAPI\Models\Shared\IamPolicyAnalysisQuery;
use \OpenAPI\OpenAPI\Models\Shared\AccessSelector;
use \OpenAPI\OpenAPI\Models\Shared\ConditionContext;
use \OpenAPI\OpenAPI\Models\Shared\IdentitySelector;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSelector;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSavedQueriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetSavedQueriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->savedQueryInput = new SavedQueryInput();
    $request->savedQueryInput->content = new QueryContent();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery = new IamPolicyAnalysisQuery();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->accessSelector = new AccessSelector();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->accessSelector->permissions = [
        'architecto',
        'mollitia',
        'dolorem',
        'culpa',
    ];
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->accessSelector->roles = [
        'repellat',
    ];
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->conditionContext = new ConditionContext();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->conditionContext->accessTime = 'mollitia';
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->identitySelector = new IdentitySelector();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->identitySelector->identity = 'occaecati';
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options = new Options();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->analyzeServiceAccountImpersonation = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->expandGroups = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->expandResources = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->expandRoles = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->includeDenyPolicyAnalysis = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->outputGroupEdges = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->outputResourceEdges = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->resourceSelector = new ResourceSelector();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->resourceSelector->fullResourceName = 'numquam';
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->scope = 'commodi';
    $request->savedQueryInput->description = 'quam';
    $request->savedQueryInput->labels = [
        'velit' => 'error',
        'quia' => 'quis',
    ];
    $request->savedQueryInput->name = 'Kayla O'Kon';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->fields = 'ipsam';
    $request->key = 'id';
    $request->oauthToken = 'possimus';
    $request->parent = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->savedQueryId = 'error';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new CloudassetSavedQueriesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->savedQueries->cloudassetSavedQueriesCreate($request, $requestSecurity);

    if ($response->savedQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetSavedQueriesDelete

Deletes a saved query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSavedQueriesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSavedQueriesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetSavedQueriesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->name = 'Jose Moen';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new CloudassetSavedQueriesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->savedQueries->cloudassetSavedQueriesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetSavedQueriesGet

Gets details about a saved query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSavedQueriesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSavedQueriesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetSavedQueriesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'iusto';
    $request->key = 'dicta';
    $request->name = 'Bill Thompson';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new CloudassetSavedQueriesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->savedQueries->cloudassetSavedQueriesGet($request, $requestSecurity);

    if ($response->savedQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetSavedQueriesList

Lists all saved queries in a parent project/folder/organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSavedQueriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSavedQueriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetSavedQueriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'rem';
    $request->filter = 'voluptates';
    $request->key = 'quasi';
    $request->oauthToken = 'repudiandae';
    $request->pageSize = 575947;
    $request->pageToken = 'veritatis';
    $request->parent = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new CloudassetSavedQueriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->savedQueries->cloudassetSavedQueriesList($request, $requestSecurity);

    if ($response->listSavedQueriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetSavedQueriesPatch

Updates a saved query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSavedQueriesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavedQueryInput;
use \OpenAPI\OpenAPI\Models\Shared\QueryContent;
use \OpenAPI\OpenAPI\Models\Shared\IamPolicyAnalysisQuery;
use \OpenAPI\OpenAPI\Models\Shared\AccessSelector;
use \OpenAPI\OpenAPI\Models\Shared\ConditionContext;
use \OpenAPI\OpenAPI\Models\Shared\IdentitySelector;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSelector;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSavedQueriesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetSavedQueriesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->savedQueryInput = new SavedQueryInput();
    $request->savedQueryInput->content = new QueryContent();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery = new IamPolicyAnalysisQuery();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->accessSelector = new AccessSelector();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->accessSelector->permissions = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->accessSelector->roles = [
        'modi',
        'qui',
    ];
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->conditionContext = new ConditionContext();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->conditionContext->accessTime = 'aliquid';
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->identitySelector = new IdentitySelector();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->identitySelector->identity = 'cupiditate';
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options = new Options();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->analyzeServiceAccountImpersonation = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->expandGroups = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->expandResources = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->expandRoles = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->includeDenyPolicyAnalysis = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->outputGroupEdges = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->options->outputResourceEdges = false;
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->resourceSelector = new ResourceSelector();
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->resourceSelector->fullResourceName = 'quos';
    $request->savedQueryInput->content->iamPolicyAnalysisQuery->scope = 'perferendis';
    $request->savedQueryInput->description = 'magni';
    $request->savedQueryInput->labels = [
        'ipsam' => 'alias',
        'fugit' => 'dolorum',
        'excepturi' => 'tempora',
        'facilis' => 'tempore',
    ];
    $request->savedQueryInput->name = 'Lucia Kemmer';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'necessitatibus';
    $request->key = 'sint';
    $request->name = 'Curtis Toy';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->updateMask = 'illum';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new CloudassetSavedQueriesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->savedQueries->cloudassetSavedQueriesPatch($request, $requestSecurity);

    if ($response->savedQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
