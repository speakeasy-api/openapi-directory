# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createCredentialList](#createcredentiallist)
* [createIpAccessControlList](#createipaccesscontrollist) - Associate an IP Access Control List with a Trunk
* [createOriginationUrl](#createoriginationurl)
* [createPhoneNumber](#createphonenumber)
* [createTrunk](#createtrunk)
* [deleteCredentialList](#deletecredentiallist)
* [deleteIpAccessControlList](#deleteipaccesscontrollist) - Remove an associated IP Access Control List from a Trunk
* [deleteOriginationUrl](#deleteoriginationurl)
* [deletePhoneNumber](#deletephonenumber)
* [deleteTrunk](#deletetrunk)
* [fetchCredentialList](#fetchcredentiallist)
* [fetchIpAccessControlList](#fetchipaccesscontrollist)
* [fetchOriginationUrl](#fetchoriginationurl)
* [fetchPhoneNumber](#fetchphonenumber)
* [fetchRecording](#fetchrecording)
* [fetchTrunk](#fetchtrunk)
* [listCredentialList](#listcredentiallist)
* [listIpAccessControlList](#listipaccesscontrollist) - List all IP Access Control Lists for a Trunk
* [listOriginationUrl](#listoriginationurl)
* [listPhoneNumber](#listphonenumber)
* [listTrunk](#listtrunk)
* [updateOriginationUrl](#updateoriginationurl)
* [updateRecording](#updaterecording)
* [updateTrunk](#updatetrunk)

## createCredentialList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialListCreateCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCredentialListRequest();
    $request->requestBody = new CreateCredentialListCreateCredentialListRequest();
    $request->requestBody->credentialListSid = 'distinctio';
    $request->trunkSid = 'quibusdam';

    $requestSecurity = new CreateCredentialListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCredentialList($request, $requestSecurity);

    if ($response->trunkingV1TrunkCredentialList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIpAccessControlList

Associate an IP Access Control List with a Trunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIpAccessControlListCreateIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIpAccessControlListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIpAccessControlListRequest();
    $request->requestBody = new CreateIpAccessControlListCreateIpAccessControlListRequest();
    $request->requestBody->ipAccessControlListSid = 'unde';
    $request->trunkSid = 'nulla';

    $requestSecurity = new CreateIpAccessControlListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createIpAccessControlList($request, $requestSecurity);

    if ($response->trunkingV1TrunkIpAccessControlList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOriginationUrl

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateOriginationUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOriginationUrlCreateOriginationUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOriginationUrlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOriginationUrlRequest();
    $request->requestBody = new CreateOriginationUrlCreateOriginationUrlRequest();
    $request->requestBody->enabled = false;
    $request->requestBody->friendlyName = 'corrupti';
    $request->requestBody->priority = 847252;
    $request->requestBody->sipUrl = 'http://physical-pegboard.info';
    $request->requestBody->weight = 437587;
    $request->trunkSid = 'magnam';

    $requestSecurity = new CreateOriginationUrlSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createOriginationUrl($request, $requestSecurity);

    if ($response->trunkingV1TrunkOriginationUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPhoneNumber

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePhoneNumberCreatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePhoneNumberRequest();
    $request->requestBody = new CreatePhoneNumberCreatePhoneNumberRequest();
    $request->requestBody->phoneNumberSid = 'debitis';
    $request->trunkSid = 'ipsa';

    $requestSecurity = new CreatePhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createPhoneNumber($request, $requestSecurity);

    if ($response->trunkingV1TrunkPhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrunkCreateTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrunkEnumTransferCallerIdEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrunkEnumTransferSettingEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrunkCreateTrunkRequest();
    $request->cnamLookupEnabled = false;
    $request->disasterRecoveryMethod = CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum::DELETE;
    $request->disasterRecoveryUrl = 'http://hideous-jam.net';
    $request->domainName = 'placeat';
    $request->friendlyName = 'voluptatum';
    $request->secure = false;
    $request->transferCallerId = TrunkEnumTransferCallerIdEnum::FROM_TRANSFEREE;
    $request->transferMode = TrunkEnumTransferSettingEnum::ENABLE_ALL;

    $requestSecurity = new CreateTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createTrunk($request, $requestSecurity);

    if ($response->trunkingV1Trunk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCredentialList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCredentialListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCredentialListRequest();
    $request->sid = 'nisi';
    $request->trunkSid = 'recusandae';

    $requestSecurity = new DeleteCredentialListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCredentialList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIpAccessControlList

Remove an associated IP Access Control List from a Trunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIpAccessControlListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIpAccessControlListRequest();
    $request->sid = 'temporibus';
    $request->trunkSid = 'ab';

    $requestSecurity = new DeleteIpAccessControlListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteIpAccessControlList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOriginationUrl

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOriginationUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOriginationUrlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOriginationUrlRequest();
    $request->sid = 'quis';
    $request->trunkSid = 'veritatis';

    $requestSecurity = new DeleteOriginationUrlSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteOriginationUrl($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePhoneNumber

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePhoneNumberRequest();
    $request->sid = 'deserunt';
    $request->trunkSid = 'perferendis';

    $requestSecurity = new DeletePhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deletePhoneNumber($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrunkRequest();
    $request->sid = 'ipsam';

    $requestSecurity = new DeleteTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteTrunk($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCredentialList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCredentialListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCredentialListRequest();
    $request->sid = 'repellendus';
    $request->trunkSid = 'sapiente';

    $requestSecurity = new FetchCredentialListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCredentialList($request, $requestSecurity);

    if ($response->trunkingV1TrunkCredentialList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchIpAccessControlList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchIpAccessControlListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchIpAccessControlListRequest();
    $request->sid = 'quo';
    $request->trunkSid = 'odit';

    $requestSecurity = new FetchIpAccessControlListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchIpAccessControlList($request, $requestSecurity);

    if ($response->trunkingV1TrunkIpAccessControlList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchOriginationUrl

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchOriginationUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchOriginationUrlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchOriginationUrlRequest();
    $request->sid = 'at';
    $request->trunkSid = 'at';

    $requestSecurity = new FetchOriginationUrlSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchOriginationUrl($request, $requestSecurity);

    if ($response->trunkingV1TrunkOriginationUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPhoneNumber

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPhoneNumberRequest();
    $request->sid = 'maiores';
    $request->trunkSid = 'molestiae';

    $requestSecurity = new FetchPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchPhoneNumber($request, $requestSecurity);

    if ($response->trunkingV1TrunkPhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRecording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRecordingRequest();
    $request->trunkSid = 'quod';

    $requestSecurity = new FetchRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRecording($request, $requestSecurity);

    if ($response->trunkingV1TrunkRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTrunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTrunkRequest();
    $request->sid = 'quod';

    $requestSecurity = new FetchTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTrunk($request, $requestSecurity);

    if ($response->trunkingV1Trunk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCredentialList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCredentialListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCredentialListRequest();
    $request->page = 461479;
    $request->pageSize = 520478;
    $request->pageToken = 'porro';
    $request->trunkSid = 'dolorum';

    $requestSecurity = new ListCredentialListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCredentialList($request, $requestSecurity);

    if ($response->listCredentialListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIpAccessControlList

List all IP Access Control Lists for a Trunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIpAccessControlListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIpAccessControlListRequest();
    $request->page = 118274;
    $request->pageSize = 720633;
    $request->pageToken = 'officia';
    $request->trunkSid = 'occaecati';

    $requestSecurity = new ListIpAccessControlListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listIpAccessControlList($request, $requestSecurity);

    if ($response->listIpAccessControlListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOriginationUrl

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListOriginationUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOriginationUrlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOriginationUrlRequest();
    $request->page = 143353;
    $request->pageSize = 537373;
    $request->pageToken = 'hic';
    $request->trunkSid = 'optio';

    $requestSecurity = new ListOriginationUrlSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listOriginationUrl($request, $requestSecurity);

    if ($response->listOriginationUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPhoneNumber

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPhoneNumberRequest();
    $request->page = 521848;
    $request->pageSize = 105907;
    $request->pageToken = 'commodi';
    $request->trunkSid = 'molestiae';

    $requestSecurity = new ListPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listPhoneNumber($request, $requestSecurity);

    if ($response->listPhoneNumberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrunkRequest();
    $request->page = 264555;
    $request->pageSize = 186332;
    $request->pageToken = 'impedit';

    $requestSecurity = new ListTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTrunk($request, $requestSecurity);

    if ($response->listTrunkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOriginationUrl

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOriginationUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOriginationUrlUpdateOriginationUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOriginationUrlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOriginationUrlRequest();
    $request->requestBody = new UpdateOriginationUrlUpdateOriginationUrlRequest();
    $request->requestBody->enabled = false;
    $request->requestBody->friendlyName = 'cum';
    $request->requestBody->priority = 456150;
    $request->requestBody->sipUrl = 'http://nifty-case.com';
    $request->requestBody->weight = 324141;
    $request->sid = 'natus';
    $request->trunkSid = 'sed';

    $requestSecurity = new UpdateOriginationUrlSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateOriginationUrl($request, $requestSecurity);

    if ($response->trunkingV1TrunkOriginationUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRecording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRecordingUpdateRecordingRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecordingEnumRecordingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecordingEnumRecordingTrimEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRecordingRequest();
    $request->requestBody = new UpdateRecordingUpdateRecordingRequest();
    $request->requestBody->mode = RecordingEnumRecordingModeEnum::RECORD_FROM_RINGING_DUAL;
    $request->requestBody->trim = RecordingEnumRecordingTrimEnum::TRIM_SILENCE;
    $request->trunkSid = 'natus';

    $requestSecurity = new UpdateRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRecording($request, $requestSecurity);

    if ($response->trunkingV1TrunkRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrunkUpdateTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrunkEnumTransferCallerIdEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrunkEnumTransferSettingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrunkRequest();
    $request->requestBody = new UpdateTrunkUpdateTrunkRequest();
    $request->requestBody->cnamLookupEnabled = false;
    $request->requestBody->disasterRecoveryMethod = UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum::POST;
    $request->requestBody->disasterRecoveryUrl = 'https://unsteady-post.info';
    $request->requestBody->domainName = 'corporis';
    $request->requestBody->friendlyName = 'iste';
    $request->requestBody->secure = false;
    $request->requestBody->transferCallerId = TrunkEnumTransferCallerIdEnum::FROM_TRANSFEREE;
    $request->requestBody->transferMode = TrunkEnumTransferSettingEnum::SIP_ONLY;
    $request->sid = 'quidem';

    $requestSecurity = new UpdateTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateTrunk($request, $requestSecurity);

    if ($response->trunkingV1Trunk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
