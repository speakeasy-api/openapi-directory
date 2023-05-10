# locations

### Available Operations

* [mybusinessbusinessinformationLocationsAssociate](#mybusinessbusinessinformationlocationsassociate) - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* [mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated](#mybusinessbusinessinformationlocationsattributesgetgoogleupdated) - Gets the Google-updated version of the specified location.
* [mybusinessbusinessinformationLocationsClearLocationAssociation](#mybusinessbusinessinformationlocationsclearlocationassociation) - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* [mybusinessbusinessinformationLocationsDelete](#mybusinessbusinessinformationlocationsdelete) - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* [mybusinessbusinessinformationLocationsGetAttributes](#mybusinessbusinessinformationlocationsgetattributes) - Looks up all the attributes set for a given location.
* [mybusinessbusinessinformationLocationsUpdateAttributes](#mybusinessbusinessinformationlocationsupdateattributes) - Update attributes for a given location.

## mybusinessbusinessinformationLocationsAssociate

Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationLocationsAssociateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssociateLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationLocationsAssociateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->associateLocationRequest = new AssociateLocationRequest();
    $request->associateLocationRequest->placeId = 'praesentium';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->name = 'Simon Jenkins';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'maiores';

    $response = $sdk->locations->mybusinessbusinessinformationLocationsAssociate($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated

Gets the Google-updated version of the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'nam';
    $request->key = 'eaque';
    $request->name = 'Dr. Herman Wolf';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->readMask = 'corporis';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'libero';

    $response = $sdk->locations->mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated($request);

    if ($response->attributes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessbusinessinformationLocationsClearLocationAssociation

Clears an association between a location and its place ID. This operation is only valid if the location is unverified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationLocationsClearLocationAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationLocationsClearLocationAssociationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'quis' => 'totam',
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'nesciunt';
    $request->key = 'eos';
    $request->name = 'Jacqueline Schimmel';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'recusandae';

    $response = $sdk->locations->mybusinessbusinessinformationLocationsClearLocationAssociation($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessbusinessinformationLocationsDelete

Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationLocationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationLocationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'porro';
    $request->key = 'consequuntur';
    $request->name = 'Jeremiah Beatty';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'modi';

    $response = $sdk->locations->mybusinessbusinessinformationLocationsDelete($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessbusinessinformationLocationsGetAttributes

Looks up all the attributes set for a given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationLocationsGetAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationLocationsGetAttributesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'provident';
    $request->key = 'nobis';
    $request->name = 'Toby Hahn';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'qui';

    $response = $sdk->locations->mybusinessbusinessinformationLocationsGetAttributes($request);

    if ($response->attributes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessbusinessinformationLocationsUpdateAttributes

Update attributes for a given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationLocationsUpdateAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\RepeatedEnumAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\UriAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationLocationsUpdateAttributesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->attributesInput = new AttributesInput();
    $request->attributesInput->attributes = [
        new AttributeInput(),
        new AttributeInput(),
        new AttributeInput(),
        new AttributeInput(),
    ];
    $request->attributesInput->name = 'Felipe Klein';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->attributeMask = 'numquam';
    $request->callback = 'veritatis';
    $request->fields = 'ipsa';
    $request->key = 'ipsa';
    $request->name = 'Viola Hahn';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'eos';

    $response = $sdk->locations->mybusinessbusinessinformationLocationsUpdateAttributes($request);

    if ($response->attributes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
