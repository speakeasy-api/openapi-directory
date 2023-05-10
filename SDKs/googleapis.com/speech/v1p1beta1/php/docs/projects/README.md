# projects

### Available Operations

* [speechProjectsLocationsCustomClassesCreate](#speechprojectslocationscustomclassescreate) - Create a custom class.
* [speechProjectsLocationsCustomClassesList](#speechprojectslocationscustomclasseslist) - List custom classes.
* [speechProjectsLocationsPhraseSetsCreate](#speechprojectslocationsphrasesetscreate) - Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
* [speechProjectsLocationsPhraseSetsDelete](#speechprojectslocationsphrasesetsdelete) - Delete a phrase set.
* [speechProjectsLocationsPhraseSetsGet](#speechprojectslocationsphrasesetsget) - Get a phrase set.
* [speechProjectsLocationsPhraseSetsList](#speechprojectslocationsphrasesetslist) - List phrase sets.
* [speechProjectsLocationsPhraseSetsPatch](#speechprojectslocationsphrasesetspatch) - Update a phrase set.

## speechProjectsLocationsCustomClassesCreate

Create a custom class.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsCustomClassesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomClassRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\CustomClassInput;
use \OpenAPI\OpenAPI\Models\Shared\ClassItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsCustomClassesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpeechProjectsLocationsCustomClassesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createCustomClassRequestInput = new CreateCustomClassRequestInput();
    $request->createCustomClassRequestInput->customClass = new CustomClassInput();
    $request->createCustomClassRequestInput->customClass->customClassId = 'nam';
    $request->createCustomClassRequestInput->customClass->items = [
        new ClassItem(),
        new ClassItem(),
        new ClassItem(),
    ];
    $request->createCustomClassRequestInput->customClass->name = 'Wayne Lind';
    $request->createCustomClassRequestInput->customClassId = 'totam';
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->oauthToken = 'impedit';
    $request->parent = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new SpeechProjectsLocationsCustomClassesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->speechProjectsLocationsCustomClassesCreate($request, $requestSecurity);

    if ($response->customClass !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## speechProjectsLocationsCustomClassesList

List custom classes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsCustomClassesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsCustomClassesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpeechProjectsLocationsCustomClassesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->pageSize = 616934;
    $request->pageToken = 'laboriosam';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

    $requestSecurity = new SpeechProjectsLocationsCustomClassesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->speechProjectsLocationsCustomClassesList($request, $requestSecurity);

    if ($response->listCustomClassesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## speechProjectsLocationsPhraseSetsCreate

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsPhraseSetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreatePhraseSetRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PhraseSetInput;
use \OpenAPI\OpenAPI\Models\Shared\Phrase;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsPhraseSetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpeechProjectsLocationsPhraseSetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createPhraseSetRequestInput = new CreatePhraseSetRequestInput();
    $request->createPhraseSetRequestInput->phraseSet = new PhraseSetInput();
    $request->createPhraseSetRequestInput->phraseSet->boost = 6130.64;
    $request->createPhraseSetRequestInput->phraseSet->name = 'Mr. Kerry Predovic';
    $request->createPhraseSetRequestInput->phraseSet->phrases = [
        new Phrase(),
        new Phrase(),
        new Phrase(),
    ];
    $request->createPhraseSetRequestInput->phraseSetId = 'mollitia';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new SpeechProjectsLocationsPhraseSetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->speechProjectsLocationsPhraseSetsCreate($request, $requestSecurity);

    if ($response->phraseSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## speechProjectsLocationsPhraseSetsDelete

Delete a phrase set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsPhraseSetsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsPhraseSetsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpeechProjectsLocationsPhraseSetsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->name = 'Angie Durgan';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new SpeechProjectsLocationsPhraseSetsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->speechProjectsLocationsPhraseSetsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## speechProjectsLocationsPhraseSetsGet

Get a phrase set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsPhraseSetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsPhraseSetsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpeechProjectsLocationsPhraseSetsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->name = 'Gloria Padberg';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new SpeechProjectsLocationsPhraseSetsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->speechProjectsLocationsPhraseSetsGet($request, $requestSecurity);

    if ($response->phraseSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## speechProjectsLocationsPhraseSetsList

List phrase sets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsPhraseSetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsPhraseSetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpeechProjectsLocationsPhraseSetsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'quasi';
    $request->key = 'error';
    $request->oauthToken = 'temporibus';
    $request->pageSize = 673660;
    $request->pageToken = 'quasi';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new SpeechProjectsLocationsPhraseSetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->speechProjectsLocationsPhraseSetsList($request, $requestSecurity);

    if ($response->listPhraseSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## speechProjectsLocationsPhraseSetsPatch

Update a phrase set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsPhraseSetsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhraseSetInput;
use \OpenAPI\OpenAPI\Models\Shared\Phrase;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SpeechProjectsLocationsPhraseSetsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpeechProjectsLocationsPhraseSetsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->phraseSetInput = new PhraseSetInput();
    $request->phraseSetInput->boost = 9767.62;
    $request->phraseSetInput->name = 'Geneva Klein Jr.';
    $request->phraseSetInput->phrases = [
        new Phrase(),
        new Phrase(),
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->name = 'Mildred Pfeffer';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->updateMask = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new SpeechProjectsLocationsPhraseSetsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->speechProjectsLocationsPhraseSetsPatch($request, $requestSecurity);

    if ($response->phraseSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
