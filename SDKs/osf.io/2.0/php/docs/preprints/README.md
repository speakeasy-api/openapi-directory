# preprints

### Available Operations

* [preprintsBibliographicContributorsList](#preprintsbibliographiccontributorslist) - List all Bibliographic Contributors
* [preprintsCitationList](#preprintscitationlist) - Retrieve citation details
* [preprintsCitationRead](#preprintscitationread) - Retrieve a styled citation
* [preprintsContributorRead](#preprintscontributorread) - Retrieve a contributor
* [preprintsContributorsCreate](#preprintscontributorscreate) - Create a Contributor
* [preprintsContributorsList](#preprintscontributorslist) - List all Contributors for a Preprint
* [preprintsCreate](#preprintscreate) - Create a preprint
* [preprintsList](#preprintslist) - List all preprints
* [preprintsPartialUpdate](#preprintspartialupdate) - Update a preprint
* [preprintsRead](#preprintsread) - Retrieve a preprint

## preprintsBibliographicContributorsList

A paginated list of the Preprint's Bibliographic Contributors, sorted by their index.
Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsBibliographicContributorsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprintsBibliographicContributorsListRequest();
    $request->preprintId = 'nihil';

    $response = $sdk->preprints->preprintsBibliographicContributorsList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprintsCitationList

The citation details for a preprint, in CSL format.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsCitationListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprintsCitationListRequest();
    $request->preprintId = 'repellat';

    $response = $sdk->preprints->preprintsCitationList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprintsCitationRead

The citation for a preprint in a specific style.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsCitationReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprintsCitationReadRequest();
    $request->preprintId = 'quibusdam';
    $request->styleId = 'sed';

    $response = $sdk->preprints->preprintsCitationRead($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprintsContributorRead

Retrieves the details of a contributor on this Preprint.
Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsContributorReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprintsContributorReadRequest();
    $request->preprintId = 'saepe';
    $request->userId = 'pariatur';

    $response = $sdk->preprints->preprintsContributorRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprintsContributorsCreate

Adds a contributor to a Preprint, effectively creating a relationship between the Preprint and a user.

Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
#### Permissions
Only project administrators can add contributors to a Preprint.
#### Required
A relationship object with a `data` key, containing the `users` type and valid user ID is required.

All attributes describing the relationship between the Preprint and the user are optional.
#### Returns
Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsContributorsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsContributorsCreateContributorInput;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsContributorsCreateContributorAttributesInput;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsContributorsCreateContributorAttributesPermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprintsContributorsCreateRequest();
    $request->requestBody = new PreprintsContributorsCreateContributorInput();
    $request->requestBody->attributes = new PreprintsContributorsCreateContributorAttributesInput();
    $request->requestBody->attributes->bibliographic = false;
    $request->requestBody->attributes->index = 37559;
    $request->requestBody->attributes->permission = PreprintsContributorsCreateContributorAttributesPermissionEnum::READ;
    $request->preprintId = 'praesentium';

    $response = $sdk->preprints->preprintsContributorsCreate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprintsContributorsList

A paginated list of the Preprint's Contributors, sorted by their index.

Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of Contributors, the user relationship will not be exposed and the Contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsContributorsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprintsContributorsListRequest();
    $request->preprintId = 'natus';

    $response = $sdk->preprints->preprintsContributorsList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprintsCreate

Creates a new preprint.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsCreatePreprintInput;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsCreatePreprintAttributesInput;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsCreatePreprintRelationshipsInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprintsCreatePreprintInput();
    $request->attributes = new PreprintsCreatePreprintAttributesInput();
    $request->attributes->doi = 'magni';
    $request->attributes->licenseRecord = 'sunt';
    $request->attributes->subjects = [
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->relationships = new PreprintsCreatePreprintRelationshipsInput();
    $request->relationships->bibliographicContributors = 'excepturi';
    $request->relationships->license = 'odit';
    $request->relationships->node = 'ea';
    $request->relationships->primaryFile = 'accusantium';
    $request->relationships->provider = 'ab';
    $request->type = 'maiores';

    $response = $sdk->preprints->preprintsCreate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprintsList


A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->preprints->preprintsList();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprintsPartialUpdate

Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsPartialUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprintsPartialUpdateRequest();
    $request->requestBody = [
        'ipsam' => 'voluptate',
        'autem' => 'nam',
        'eaque' => 'pariatur',
    ];
    $request->preprintId = 'nemo';

    $response = $sdk->preprints->preprintsPartialUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprintsRead

Retrieves the details of a preprint.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprintsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprintsReadRequest();
    $request->preprintId = 'voluptatibus';

    $response = $sdk->preprints->preprintsRead($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
