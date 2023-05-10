# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createByocTrunk](#createbyoctrunk)
* [createConnectionPolicy](#createconnectionpolicy)
* [createConnectionPolicyTarget](#createconnectionpolicytarget)
* [createDialingPermissionsCountryBulkUpdate](#createdialingpermissionscountrybulkupdate) - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* [createIpRecord](#createiprecord)
* [createSourceIpMapping](#createsourceipmapping)
* [deleteArchivedCall](#deletearchivedcall) - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
* [deleteByocTrunk](#deletebyoctrunk)
* [deleteConnectionPolicy](#deleteconnectionpolicy)
* [deleteConnectionPolicyTarget](#deleteconnectionpolicytarget)
* [deleteIpRecord](#deleteiprecord)
* [deleteSourceIpMapping](#deletesourceipmapping)
* [fetchByocTrunk](#fetchbyoctrunk)
* [fetchConnectionPolicy](#fetchconnectionpolicy)
* [fetchConnectionPolicyTarget](#fetchconnectionpolicytarget)
* [fetchDialingPermissionsCountry](#fetchdialingpermissionscountry) - Retrieve voice dialing country permissions identified by the given ISO country code
* [fetchDialingPermissionsSettings](#fetchdialingpermissionssettings) - Retrieve voice dialing permissions inheritance for the sub-account
* [fetchIpRecord](#fetchiprecord)
* [fetchSourceIpMapping](#fetchsourceipmapping)
* [listByocTrunk](#listbyoctrunk)
* [listConnectionPolicy](#listconnectionpolicy)
* [listConnectionPolicyTarget](#listconnectionpolicytarget)
* [listDialingPermissionsCountry](#listdialingpermissionscountry) - Retrieve all voice dialing country permissions for this account
* [listDialingPermissionsHrsPrefixes](#listdialingpermissionshrsprefixes) - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* [listIpRecord](#listiprecord)
* [listSourceIpMapping](#listsourceipmapping)
* [updateByocTrunk](#updatebyoctrunk)
* [updateConnectionPolicy](#updateconnectionpolicy)
* [updateConnectionPolicyTarget](#updateconnectionpolicytarget)
* [updateDialingPermissionsSettings](#updatedialingpermissionssettings) - Update voice dialing permissions inheritance for the sub-account
* [updateIpRecord](#updateiprecord)
* [updateSourceIpMapping](#updatesourceipmapping)

## createByocTrunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateByocTrunkCreateByocTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateByocTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateByocTrunkCreateByocTrunkRequest();
    $request->cnamLookupEnabled = false;
    $request->connectionPolicySid = 'suscipit';
    $request->friendlyName = 'molestiae';
    $request->fromDomainSid = 'minus';
    $request->statusCallbackMethod = CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum::PUT;
    $request->statusCallbackUrl = 'https://lawful-missionary.info';
    $request->voiceFallbackMethod = CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum::DELETE;
    $request->voiceFallbackUrl = 'https://bite-sized-favorite.com';
    $request->voiceMethod = CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum::PATCH;
    $request->voiceUrl = 'http://happy-spear.org';

    $requestSecurity = new CreateByocTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createByocTrunk($request, $requestSecurity);

    if ($response->voiceV1ByocTrunk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnectionPolicy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionPolicyCreateConnectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectionPolicyCreateConnectionPolicyRequest();
    $request->friendlyName = 'quo';

    $requestSecurity = new CreateConnectionPolicySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createConnectionPolicy($request, $requestSecurity);

    if ($response->voiceV1ConnectionPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnectionPolicyTarget

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionPolicyTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionPolicyTargetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectionPolicyTargetRequest();
    $request->connectionPolicySid = 'odit';
    $request->requestBody = new CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest();
    $request->requestBody->enabled = false;
    $request->requestBody->friendlyName = 'at';
    $request->requestBody->priority = 870088;
    $request->requestBody->target = 'https://kosher-shoestring.net';
    $request->requestBody->weight = 461479;

    $requestSecurity = new CreateConnectionPolicyTargetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createConnectionPolicyTarget($request, $requestSecurity);

    if ($response->voiceV1ConnectionPolicyConnectionPolicyTarget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDialingPermissionsCountryBulkUpdate

Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDialingPermissionsCountryBulkUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest();
    $request->updateRequest = 'totam';

    $requestSecurity = new CreateDialingPermissionsCountryBulkUpdateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDialingPermissionsCountryBulkUpdate($request, $requestSecurity);

    if ($response->voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIpRecord

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateIpRecordCreateIpRecordRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIpRecordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIpRecordCreateIpRecordRequest();
    $request->cidrPrefixLength = 780529;
    $request->friendlyName = 'dolorum';
    $request->ipAddress = 'dicta';

    $requestSecurity = new CreateIpRecordSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createIpRecord($request, $requestSecurity);

    if ($response->voiceV1IpRecord !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSourceIpMapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSourceIpMappingCreateSourceIpMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSourceIpMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSourceIpMappingCreateSourceIpMappingRequest();
    $request->ipRecordSid = 'nam';
    $request->sipDomainSid = 'officia';

    $requestSecurity = new CreateSourceIpMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSourceIpMapping($request, $requestSecurity);

    if ($response->voiceV1SourceIpMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteArchivedCall

Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArchivedCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArchivedCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteArchivedCallRequest();
    $request->date = DateTime::createFromFormat('Y-m-d', '2022-09-18');
    $request->sid = 'deleniti';

    $requestSecurity = new DeleteArchivedCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteArchivedCall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteByocTrunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteByocTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteByocTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteByocTrunkRequest();
    $request->sid = 'hic';

    $requestSecurity = new DeleteByocTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteByocTrunk($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectionPolicy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionPolicyRequest();
    $request->sid = 'optio';

    $requestSecurity = new DeleteConnectionPolicySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteConnectionPolicy($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectionPolicyTarget

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionPolicyTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionPolicyTargetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionPolicyTargetRequest();
    $request->connectionPolicySid = 'totam';
    $request->sid = 'beatae';

    $requestSecurity = new DeleteConnectionPolicyTargetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteConnectionPolicyTarget($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIpRecord

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIpRecordRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIpRecordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIpRecordRequest();
    $request->sid = 'commodi';

    $requestSecurity = new DeleteIpRecordSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteIpRecord($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSourceIpMapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSourceIpMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSourceIpMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSourceIpMappingRequest();
    $request->sid = 'molestiae';

    $requestSecurity = new DeleteSourceIpMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSourceIpMapping($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchByocTrunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchByocTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchByocTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchByocTrunkRequest();
    $request->sid = 'modi';

    $requestSecurity = new FetchByocTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchByocTrunk($request, $requestSecurity);

    if ($response->voiceV1ByocTrunk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConnectionPolicy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConnectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConnectionPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConnectionPolicyRequest();
    $request->sid = 'qui';

    $requestSecurity = new FetchConnectionPolicySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConnectionPolicy($request, $requestSecurity);

    if ($response->voiceV1ConnectionPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConnectionPolicyTarget

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConnectionPolicyTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConnectionPolicyTargetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConnectionPolicyTargetRequest();
    $request->connectionPolicySid = 'impedit';
    $request->sid = 'cum';

    $requestSecurity = new FetchConnectionPolicyTargetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConnectionPolicyTarget($request, $requestSecurity);

    if ($response->voiceV1ConnectionPolicyConnectionPolicyTarget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDialingPermissionsCountry

Retrieve voice dialing country permissions identified by the given ISO country code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDialingPermissionsCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDialingPermissionsCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDialingPermissionsCountryRequest();
    $request->isoCode = 'esse';

    $requestSecurity = new FetchDialingPermissionsCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDialingPermissionsCountry($request, $requestSecurity);

    if ($response->voiceV1DialingPermissionsDialingPermissionsCountryInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDialingPermissionsSettings

Retrieve voice dialing permissions inheritance for the sub-account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDialingPermissionsSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FetchDialingPermissionsSettingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDialingPermissionsSettings($requestSecurity);

    if ($response->voiceV1DialingPermissionsDialingPermissionsSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchIpRecord

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchIpRecordRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchIpRecordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchIpRecordRequest();
    $request->sid = 'ipsum';

    $requestSecurity = new FetchIpRecordSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchIpRecord($request, $requestSecurity);

    if ($response->voiceV1IpRecord !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSourceIpMapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSourceIpMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSourceIpMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSourceIpMappingRequest();
    $request->sid = 'excepturi';

    $requestSecurity = new FetchSourceIpMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSourceIpMapping($request, $requestSecurity);

    if ($response->voiceV1SourceIpMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listByocTrunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListByocTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListByocTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListByocTrunkRequest();
    $request->page = 135218;
    $request->pageSize = 18789;
    $request->pageToken = 'ad';

    $requestSecurity = new ListByocTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listByocTrunk($request, $requestSecurity);

    if ($response->listByocTrunkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnectionPolicy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectionPolicyRequest();
    $request->page = 617636;
    $request->pageSize = 149675;
    $request->pageToken = 'iste';

    $requestSecurity = new ListConnectionPolicySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConnectionPolicy($request, $requestSecurity);

    if ($response->listConnectionPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnectionPolicyTarget

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionPolicyTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionPolicyTargetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectionPolicyTargetRequest();
    $request->connectionPolicySid = 'dolor';
    $request->page = 616934;
    $request->pageSize = 386489;
    $request->pageToken = 'hic';

    $requestSecurity = new ListConnectionPolicyTargetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConnectionPolicyTarget($request, $requestSecurity);

    if ($response->listConnectionPolicyTargetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDialingPermissionsCountry

Retrieve all voice dialing country permissions for this account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDialingPermissionsCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDialingPermissionsCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDialingPermissionsCountryRequest();
    $request->continent = 'saepe';
    $request->countryCode = 'NU';
    $request->highRiskSpecialNumbersEnabled = false;
    $request->highRiskTollfraudNumbersEnabled = false;
    $request->isoCode = 'in';
    $request->lowRiskNumbersEnabled = false;
    $request->page = 359508;
    $request->pageSize = 613064;
    $request->pageToken = 'iure';

    $requestSecurity = new ListDialingPermissionsCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDialingPermissionsCountry($request, $requestSecurity);

    if ($response->listDialingPermissionsCountryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDialingPermissionsHrsPrefixes

Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDialingPermissionsHrsPrefixesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDialingPermissionsHrsPrefixesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDialingPermissionsHrsPrefixesRequest();
    $request->isoCode = 'saepe';
    $request->page = 697631;
    $request->pageSize = 99280;
    $request->pageToken = 'ipsa';

    $requestSecurity = new ListDialingPermissionsHrsPrefixesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDialingPermissionsHrsPrefixes($request, $requestSecurity);

    if ($response->listDialingPermissionsHrsPrefixesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIpRecord

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListIpRecordRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIpRecordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIpRecordRequest();
    $request->page = 969810;
    $request->pageSize = 666767;
    $request->pageToken = 'mollitia';

    $requestSecurity = new ListIpRecordSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listIpRecord($request, $requestSecurity);

    if ($response->listIpRecordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceIpMapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceIpMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceIpMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceIpMappingRequest();
    $request->page = 670638;
    $request->pageSize = 170909;
    $request->pageToken = 'dolorem';

    $requestSecurity = new ListSourceIpMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSourceIpMapping($request, $requestSecurity);

    if ($response->listSourceIpMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateByocTrunk

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateByocTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateByocTrunkUpdateByocTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateByocTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateByocTrunkRequest();
    $request->requestBody = new UpdateByocTrunkUpdateByocTrunkRequest();
    $request->requestBody->cnamLookupEnabled = false;
    $request->requestBody->connectionPolicySid = 'corporis';
    $request->requestBody->friendlyName = 'explicabo';
    $request->requestBody->fromDomainSid = 'nobis';
    $request->requestBody->statusCallbackMethod = UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum::GET;
    $request->requestBody->statusCallbackUrl = 'https://gummy-expedition.name';
    $request->requestBody->voiceFallbackMethod = UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum::HEAD;
    $request->requestBody->voiceFallbackUrl = 'http://political-woodwind.org';
    $request->requestBody->voiceMethod = UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum::HEAD;
    $request->requestBody->voiceUrl = 'https://dizzy-part.com';
    $request->sid = 'repellat';

    $requestSecurity = new UpdateByocTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateByocTrunk($request, $requestSecurity);

    if ($response->voiceV1ByocTrunk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnectionPolicy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionPolicyUpdateConnectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectionPolicyRequest();
    $request->requestBody = new UpdateConnectionPolicyUpdateConnectionPolicyRequest();
    $request->requestBody->friendlyName = 'mollitia';
    $request->sid = 'occaecati';

    $requestSecurity = new UpdateConnectionPolicySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConnectionPolicy($request, $requestSecurity);

    if ($response->voiceV1ConnectionPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnectionPolicyTarget

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionPolicyTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionPolicyTargetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectionPolicyTargetRequest();
    $request->connectionPolicySid = 'numquam';
    $request->requestBody = new UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest();
    $request->requestBody->enabled = false;
    $request->requestBody->friendlyName = 'commodi';
    $request->requestBody->priority = 466311;
    $request->requestBody->target = 'http://even-ox.com';
    $request->requestBody->weight = 338007;
    $request->sid = 'vitae';

    $requestSecurity = new UpdateConnectionPolicyTargetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConnectionPolicyTarget($request, $requestSecurity);

    if ($response->voiceV1ConnectionPolicyConnectionPolicyTarget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDialingPermissionsSettings

Update voice dialing permissions inheritance for the sub-account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDialingPermissionsSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest();
    $request->dialingPermissionsInheritance = false;

    $requestSecurity = new UpdateDialingPermissionsSettingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDialingPermissionsSettings($request, $requestSecurity);

    if ($response->voiceV1DialingPermissionsDialingPermissionsSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIpRecord

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIpRecordRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIpRecordUpdateIpRecordRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIpRecordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIpRecordRequest();
    $request->requestBody = new UpdateIpRecordUpdateIpRecordRequest();
    $request->requestBody->friendlyName = 'laborum';
    $request->sid = 'animi';

    $requestSecurity = new UpdateIpRecordSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateIpRecord($request, $requestSecurity);

    if ($response->voiceV1IpRecord !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSourceIpMapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSourceIpMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSourceIpMappingUpdateSourceIpMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSourceIpMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSourceIpMappingRequest();
    $request->requestBody = new UpdateSourceIpMappingUpdateSourceIpMappingRequest();
    $request->requestBody->sipDomainSid = 'enim';
    $request->sid = 'odit';

    $requestSecurity = new UpdateSourceIpMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSourceIpMapping($request, $requestSecurity);

    if ($response->voiceV1SourceIpMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
