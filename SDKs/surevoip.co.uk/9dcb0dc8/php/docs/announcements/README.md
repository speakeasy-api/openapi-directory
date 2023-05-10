# announcements

## Overview

Announcements that can be played during or before a call

### Available Operations

* [deleteCustomersAccountAnnouncementsAnnouncementId](#deletecustomersaccountannouncementsannouncementid) - Delete an announcement audio file
* [getAnnouncements](#getannouncements) - List global announcements
* [getCustomersAccountAnnouncements](#getcustomersaccountannouncements) - List of announcement audio files
* [getCustomersAccountAnnouncementsAnnouncementId](#getcustomersaccountannouncementsannouncementid) - Represents an announcement audio file
* [postAnnouncements](#postannouncements) - Add a new announcement audio file

## deleteCustomersAccountAnnouncementsAnnouncementId

Delete an announcement audio file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomersAccountAnnouncementsAnnouncementIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomersAccountAnnouncementsAnnouncementIdRequest();
    $request->account = 715190;
    $request->announcementId = 'quibusdam';

    $response = $sdk->announcements->deleteCustomersAccountAnnouncementsAnnouncementId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnouncements

List global announcements

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->announcements->getAnnouncements();

    if ($response->oneGetResponses200ContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomersAccountAnnouncements

List of announcement audio files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomersAccountAnnouncementsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomersAccountAnnouncementsRequest();
    $request->account = 602763;

    $response = $sdk->announcements->getCustomersAccountAnnouncements($request);

    if ($response->getCustomersAccountAnnouncements200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomersAccountAnnouncementsAnnouncementId

Represents an announcement audio file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomersAccountAnnouncementsAnnouncementIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomersAccountAnnouncementsAnnouncementIdRequest();
    $request->account = 857946;
    $request->announcementId = 'corrupti';

    $response = $sdk->announcements->getCustomersAccountAnnouncementsAnnouncementId($request);

    if ($response->oneannouncementsPostResponses201ContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAnnouncements

Add a new announcement audio file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PostAnnouncementsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAnnouncementsRequestBody();
    $request->description = 'illum';
    $request->file = 'vel';

    $response = $sdk->announcements->postAnnouncements($request);

    if ($response->postAnnouncements201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
