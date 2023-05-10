# properties

### Available Operations

* [drivePropertiesDelete](#drivepropertiesdelete) - Deletes a property.
* [drivePropertiesGet](#drivepropertiesget) - Gets a property by its key.
* [drivePropertiesInsert](#drivepropertiesinsert) - Adds a property to a file, or updates it if it already exists.
* [drivePropertiesList](#drivepropertieslist) - Lists a file's properties.
* [drivePropertiesPatch](#drivepropertiespatch) - Updates a property.
* [drivePropertiesUpdate](#drivepropertiesupdate) - Updates a property.

## drivePropertiesDelete

Deletes a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesDeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesDeleteSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePropertiesDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ipsam';
    $request->fileId = 'consequuntur';
    $request->key = 'ipsa';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->propertyKey = 'eveniet';
    $request->quotaUser = 'impedit';
    $request->userIp = 'officiis';
    $request->visibility = 'esse';

    $requestSecurity = new DrivePropertiesDeleteSecurity();
    $requestSecurity->option1 = new DrivePropertiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->drivePropertiesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePropertiesGet

Gets a property by its key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesGetSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePropertiesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'necessitatibus';
    $request->fileId = 'sed';
    $request->key = 'veniam';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->propertyKey = 'expedita';
    $request->quotaUser = 'eum';
    $request->userIp = 'vel';
    $request->visibility = 'voluptatum';

    $requestSecurity = new DrivePropertiesGetSecurity();
    $requestSecurity->option1 = new DrivePropertiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->drivePropertiesGet($request, $requestSecurity);

    if ($response->property !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePropertiesInsert

Adds a property to a file, or updates it if it already exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Property;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesInsertSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesInsertSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePropertiesInsertRequest();
    $request->property = new Property();
    $request->property->etag = 'magnam';
    $request->property->key = 'exercitationem';
    $request->property->kind = 'ab';
    $request->property->selfLink = 'porro';
    $request->property->value = 'autem';
    $request->property->visibility = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->fields = 'laboriosam';
    $request->fileId = 'recusandae';
    $request->key = 'consequuntur';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new DrivePropertiesInsertSecurity();
    $requestSecurity->option1 = new DrivePropertiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->drivePropertiesInsert($request, $requestSecurity);

    if ($response->property !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePropertiesList

Lists a file's properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesListSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePropertiesListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'quasi';
    $request->fileId = 'nisi';
    $request->key = 'at';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->userIp = 'harum';

    $requestSecurity = new DrivePropertiesListSecurity();
    $requestSecurity->option1 = new DrivePropertiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->drivePropertiesList($request, $requestSecurity);

    if ($response->propertyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePropertiesPatch

Updates a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Property;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesPatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesPatchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesPatchSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePropertiesPatchRequest();
    $request->property = new Property();
    $request->property->etag = 'sequi';
    $request->property->key = 'doloribus';
    $request->property->kind = 'repudiandae';
    $request->property->selfLink = 'optio';
    $request->property->value = 'occaecati';
    $request->property->visibility = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->fields = 'voluptate';
    $request->fileId = 'blanditiis';
    $request->key = 'officia';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->propertyKey = 'numquam';
    $request->quotaUser = 'nemo';
    $request->userIp = 'quos';
    $request->visibility = 'eius';

    $requestSecurity = new DrivePropertiesPatchSecurity();
    $requestSecurity->option1 = new DrivePropertiesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->drivePropertiesPatch($request, $requestSecurity);

    if ($response->property !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePropertiesUpdate

Updates a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Property;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesUpdateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DrivePropertiesUpdateSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePropertiesUpdateRequest();
    $request->property = new Property();
    $request->property->etag = 'aspernatur';
    $request->property->key = 'ducimus';
    $request->property->kind = 'nesciunt';
    $request->property->selfLink = 'fuga';
    $request->property->value = 'laudantium';
    $request->property->visibility = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->fields = 'quasi';
    $request->fileId = 'rem';
    $request->key = 'fugiat';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->propertyKey = 'nisi';
    $request->quotaUser = 'consequuntur';
    $request->userIp = 'consectetur';
    $request->visibility = 'aperiam';

    $requestSecurity = new DrivePropertiesUpdateSecurity();
    $requestSecurity->option1 = new DrivePropertiesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->drivePropertiesUpdate($request, $requestSecurity);

    if ($response->property !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
