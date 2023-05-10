# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [deleteFax](#deletefax) - Delete a specific fax and its associated media.
* [deleteFaxMedia](#deletefaxmedia) - Delete a specific fax media instance.
* [fetchFax](#fetchfax) - Fetch a specific fax.
* [fetchFaxMedia](#fetchfaxmedia) - Fetch a specific fax media instance.
* [listFax](#listfax) - Retrieve a list of all faxes.
* [listFaxMedia](#listfaxmedia) - Retrieve a list of all fax media instances for the specified fax.

## deleteFax

Delete a specific fax and its associated media.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFaxRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFaxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFaxRequest();
    $request->sid = 'provident';

    $requestSecurity = new DeleteFaxSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteFax($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFaxMedia

Delete a specific fax media instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFaxMediaRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFaxMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFaxMediaRequest();
    $request->faxSid = 'distinctio';
    $request->sid = 'quibusdam';

    $requestSecurity = new DeleteFaxMediaSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteFaxMedia($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFax

Fetch a specific fax.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFaxRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFaxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFaxRequest();
    $request->sid = 'unde';

    $requestSecurity = new FetchFaxSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFax($request, $requestSecurity);

    if ($response->faxV1Fax !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFaxMedia

Fetch a specific fax media instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFaxMediaRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFaxMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFaxMediaRequest();
    $request->faxSid = 'nulla';
    $request->sid = 'corrupti';

    $requestSecurity = new FetchFaxMediaSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFaxMedia($request, $requestSecurity);

    if ($response->faxV1FaxFaxMedia !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFax

Retrieve a list of all faxes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFaxRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFaxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFaxRequest();
    $request->dateCreatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-24T02:21:06.409Z');
    $request->dateCreatedOnOrBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-16T11:56:06.019Z');
    $request->from = 'suscipit';
    $request->pageSize = 437587;
    $request->to = 'magnam';

    $requestSecurity = new ListFaxSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFax($request, $requestSecurity);

    if ($response->listFaxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFaxMedia

Retrieve a list of all fax media instances for the specified fax.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFaxMediaRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFaxMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFaxMediaRequest();
    $request->faxSid = 'debitis';
    $request->pageSize = 56713;

    $requestSecurity = new ListFaxMediaSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFaxMedia($request, $requestSecurity);

    if ($response->listFaxMediaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
