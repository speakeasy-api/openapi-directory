# alias

## Overview

**Operations:** Create, Get, Update, Delete, Get List

### Available Operations

* [createAlias](#createalias) - Create alias
* [deleteAlias](#deletealias) - Delete alias
* [getAlias](#getalias) - Get alias
* [getAliases](#getaliases) - Get aliases by domain
* [updateAlias](#updatealias) - Update alias

## createAlias

This POST method creates a new alias under a specified domain. If no domain is specified in the request the alias will be attached to the default domain Short.fyi 

 **NOTE:** You can override the domain level Meta Tags and Tracking Snippets by specifying them for each URL. Any variables you add to a specific URL will always override domain level settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAliasModel;
use \OpenAPI\OpenAPI\Models\Shared\DestinationModel;
use \OpenAPI\OpenAPI\Models\Shared\MetaTagModel;
use \OpenAPI\OpenAPI\Models\Shared\SnippetModel;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAliasRequest();
    $request->createAliasModel = new CreateAliasModel();
    $request->createAliasModel->destinations = [
        new DestinationModel(),
        new DestinationModel(),
        new DestinationModel(),
        new DestinationModel(),
    ];
    $request->createAliasModel->metatags = [
        new MetaTagModel(),
        new MetaTagModel(),
        new MetaTagModel(),
    ];
    $request->createAliasModel->snippets = [
        new SnippetModel(),
        new SnippetModel(),
        new SnippetModel(),
        new SnippetModel(),
    ];
    $request->aliasName = 'vel';
    $request->domainName = 'error';

    $requestSecurity = new CreateAliasSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->alias->createAlias($request, $requestSecurity);

    if ($response->createAliasResponseModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlias

Deletes a single alias by providing alias and domain. If no domain is provided the API will search for the matching alias within the Short.fyi domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAliasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAliasRequest();
    $request->aliasName = 'deserunt';
    $request->domainName = 'suscipit';

    $requestSecurity = new DeleteAliasSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->alias->deleteAlias($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAlias

Get detailed information for a single alias by providing its alias and domain name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAliasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAliasRequest();
    $request->aliasName = 'iure';
    $request->domainName = 'magnam';

    $requestSecurity = new GetAliasSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->alias->getAlias($request, $requestSecurity);

    if ($response->aliasModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAliases

Obtain a list of all alias names associated with your account and given domain. Result array is in descending order by creation date. 

 If no domain is specified you will receive a list of all the alias names you have created using the Short.fyi domain. 

 If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAliasesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAliasesRequest();
    $request->continueFrom = 'debitis';
    $request->domainName = 'ipsa';
    $request->limit = 963663;

    $requestSecurity = new GetAliasesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->alias->getAliases($request, $requestSecurity);

    if ($response->getAliasesModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAlias

Update a single short URL by providing its alias and domain as a parameter, and the data you wish to update in the body of the request. If no domain is provided you will receive the alias found attached to the Short.fyi domain (if it exists and is linked to your account!)

 ### NOTE: 

 ( * )If you add a metatag or a snippet with a same name to an alias and the domain it's related to, the value will be taken from the alias and not the domain 

 ( ** ) When you update any array property (like destinations) the block is updated **completely** so you have to specify the old records to avoid deleting them

 ( *** ) The method updates only the specified properties so if there was no change in one of them you don't have to send it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAliasModel;
use \OpenAPI\OpenAPI\Models\Shared\DestinationModel;
use \OpenAPI\OpenAPI\Models\Shared\MetaTagModel;
use \OpenAPI\OpenAPI\Models\Shared\SnippetModel;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAliasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAliasRequest();
    $request->createAliasModel = new CreateAliasModel();
    $request->createAliasModel->destinations = [
        new DestinationModel(),
        new DestinationModel(),
    ];
    $request->createAliasModel->metatags = [
        new MetaTagModel(),
        new MetaTagModel(),
    ];
    $request->createAliasModel->snippets = [
        new SnippetModel(),
        new SnippetModel(),
    ];
    $request->aliasName = 'minus';
    $request->domainName = 'placeat';

    $requestSecurity = new UpdateAliasSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->alias->updateAlias($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
