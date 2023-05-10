# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [deleteContent](#deletecontent) - Deletes a Content resource
* [fetchApprovalFetch](#fetchapprovalfetch) - Fetch a Content resource's approval status by its unique Content Sid
* [fetchContent](#fetchcontent) - Fetch a Content resource by its unique Content Sid
* [listContent](#listcontent) - Retrieve a list of Contents belonging to the account used to make the request
* [listContentAndApprovals](#listcontentandapprovals) - Retrieve a list of Contents with approval statuses belonging to the account used to make the request
* [listLegacyContent](#listlegacycontent) - Retrieve a list of Legacy Contents belonging to the account used to make the request

## deleteContent

Deletes a Content resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContentRequest();
    $request->sid = 'provident';

    $requestSecurity = new DeleteContentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteContent($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchApprovalFetch

Fetch a Content resource's approval status by its unique Content Sid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchApprovalFetchRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchApprovalFetchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchApprovalFetchRequest();
    $request->sid = 'distinctio';

    $requestSecurity = new FetchApprovalFetchSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchApprovalFetch($request, $requestSecurity);

    if ($response->contentV1ContentApprovalFetch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchContent

Fetch a Content resource by its unique Content Sid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchContentRequest();
    $request->sid = 'quibusdam';

    $requestSecurity = new FetchContentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchContent($request, $requestSecurity);

    if ($response->contentV1Content !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContent

Retrieve a list of Contents belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContentRequest();
    $request->page = 602763;
    $request->pageSize = 857946;
    $request->pageToken = 'corrupti';

    $requestSecurity = new ListContentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listContent($request, $requestSecurity);

    if ($response->listContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContentAndApprovals

Retrieve a list of Contents with approval statuses belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListContentAndApprovalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListContentAndApprovalsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContentAndApprovalsRequest();
    $request->page = 847252;
    $request->pageSize = 423655;
    $request->pageToken = 'error';

    $requestSecurity = new ListContentAndApprovalsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listContentAndApprovals($request, $requestSecurity);

    if ($response->listContentAndApprovalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLegacyContent

Retrieve a list of Legacy Contents belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListLegacyContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLegacyContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLegacyContentRequest();
    $request->page = 645894;
    $request->pageSize = 384382;
    $request->pageToken = 'iure';

    $requestSecurity = new ListLegacyContentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listLegacyContent($request, $requestSecurity);

    if ($response->listLegacyContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
