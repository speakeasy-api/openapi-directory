# holidayScheme

### Available Operations

* [deleteHolidayScheme](#deleteholidayscheme) - Delete an holiday scheme
* [deleteHolidaySchemeRevision](#deleteholidayschemerevision) - Delete an holiday scheme revision matching the specified revision date.
* [deleteHolidaySchemeRevisionByNumber](#deleteholidayschemerevisionbynumber) - Delete an HolidayScheme revision matching the specified revision number.
* [deleteHolidaySchemeTag](#deleteholidayschemetag) - Delete holiday scheme tag
* [getAllHolidaySchemeTags](#getallholidayschemetags) - Get all holiday scheme tags
* [getHolidaySchemeByEffectiveDate](#getholidayschemebyeffectivedate) - Get holiday scheme by effective date.
* [getHolidaySchemeFromEmployer](#getholidayschemefromemployer) - Get holiday scheme from employer
* [getHolidaySchemeRevisionByNumber](#getholidayschemerevisionbynumber) - Gets the holiday scheme revision by revision number
* [getHolidaySchemeRevisions](#getholidayschemerevisions) - Get all holiday scheme revisions
* [getHolidaySchemesByEffectiveDate](#getholidayschemesbyeffectivedate) - Get holiday schemes from employer at a given effective date.
* [getHolidaySchemesFromEmployer](#getholidayschemesfromemployer) - Get holiday schemes from employer.
* [getHolidaySchemesWithTag](#getholidayschemeswithtag) - Get holiday schemes with tag
* [getTagFromHolidayScheme](#gettagfromholidayscheme) - Get holiday scheme tag
* [getTagFromHolidaySchemeRevision](#gettagfromholidayschemerevision) - Get holiday scheme revision tag
* [getTagsFromHolidayScheme](#gettagsfromholidayscheme) - Get all tags from the holiday scheme
* [getTagsFromHolidaySchemeRevision](#gettagsfromholidayschemerevision) - Get all holiday scheme revision tags
* [patchHolidayScheme](#patchholidayscheme) - Patches the holiday scheme
* [postHolidaySchemeIntoEmployer](#postholidayschemeintoemployer) - Create a new holiday scheme
* [putHolidaySchemeIntoEmployer](#putholidayschemeintoemployer) - Updates the holiday scheme
* [putHolidaySchemeTag](#putholidayschemetag) - Insert holiday scheme tag

## deleteHolidayScheme

Delete the specified holiday scheme

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHolidaySchemeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHolidaySchemeRequest();
    $request->apiVersion = 'veniam';
    $request->authorization = 'voluptatem';
    $request->employerId = 'quisquam';
    $request->holidaySchemeId = 'repudiandae';

    $response = $sdk->holidayScheme->deleteHolidayScheme($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHolidaySchemeRevision

Deletes the specified holiday scheme revision for the matching revision date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHolidaySchemeRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHolidaySchemeRevisionRequest();
    $request->apiVersion = 'quasi';
    $request->authorization = 'atque';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-01-04');
    $request->employerId = 'totam';
    $request->holidaySchemeId = 'suscipit';

    $response = $sdk->holidayScheme->deleteHolidaySchemeRevision($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHolidaySchemeRevisionByNumber

Deletes the specified holiday scheme revision for the matching revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHolidaySchemeRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHolidaySchemeRevisionByNumberRequest();
    $request->apiVersion = 'quidem';
    $request->authorization = 'maxime';
    $request->employerId = 'et';
    $request->holidaySchemeId = 'esse';
    $request->revisionNumber = 'amet';

    $response = $sdk->holidayScheme->deleteHolidaySchemeRevisionByNumber($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHolidaySchemeTag

Deletes a tag from the holiday scheme

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHolidaySchemeTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHolidaySchemeTagRequest();
    $request->apiVersion = 'assumenda';
    $request->authorization = 'ea';
    $request->employerId = 'atque';
    $request->holidaySchemeId = 'error';
    $request->tagId = 'officiis';

    $response = $sdk->holidayScheme->deleteHolidaySchemeTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllHolidaySchemeTags

Gets all the holiday scheme tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllHolidaySchemeTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllHolidaySchemeTagsRequest();
    $request->apiVersion = 'officiis';
    $request->authorization = 'accusamus';
    $request->employerId = 'natus';

    $response = $sdk->holidayScheme->getAllHolidaySchemeTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHolidaySchemeByEffectiveDate

Returns the holiday scheme's state at the specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHolidaySchemeByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHolidaySchemeByEffectiveDateRequest();
    $request->apiVersion = 'minima';
    $request->authorization = 'aspernatur';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-01-08');
    $request->employerId = 'corrupti';
    $request->holidaySchemeId = 'at';

    $response = $sdk->holidayScheme->getHolidaySchemeByEffectiveDate($request);

    if ($response->holidayScheme !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHolidaySchemeFromEmployer

Gets the specified holiday scheme from employer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHolidaySchemeFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHolidaySchemeFromEmployerRequest();
    $request->apiVersion = 'error';
    $request->authorization = 'blanditiis';
    $request->employerId = 'suscipit';
    $request->holidaySchemeId = 'repudiandae';

    $response = $sdk->holidayScheme->getHolidaySchemeFromEmployer($request);

    if ($response->holidayScheme !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHolidaySchemeRevisionByNumber

Get the holiday scheme revision matching the specified revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHolidaySchemeRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHolidaySchemeRevisionByNumberRequest();
    $request->apiVersion = 'atque';
    $request->authorization = 'atque';
    $request->employerId = 'sunt';
    $request->holidaySchemeId = 'recusandae';
    $request->revisionNumber = 'dolorum';

    $response = $sdk->holidayScheme->getHolidaySchemeRevisionByNumber($request);

    if ($response->holidayScheme !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHolidaySchemeRevisions

Gets links to all the holiday scheme revisions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHolidaySchemeRevisionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHolidaySchemeRevisionsRequest();
    $request->apiVersion = 'repellendus';
    $request->authorization = 'labore';
    $request->employerId = 'reiciendis';
    $request->holidaySchemeId = 'doloremque';

    $response = $sdk->holidayScheme->getHolidaySchemeRevisions($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHolidaySchemesByEffectiveDate

Get links to all holiday schemes for the employer on specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHolidaySchemesByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHolidaySchemesByEffectiveDateRequest();
    $request->apiVersion = 'repudiandae';
    $request->authorization = 'dicta';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-11-23');
    $request->employerId = 'dolores';

    $response = $sdk->holidayScheme->getHolidaySchemesByEffectiveDate($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHolidaySchemesFromEmployer

Get links to all holiday schemes for the specified employer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHolidaySchemesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHolidaySchemesFromEmployerRequest();
    $request->apiVersion = 'enim';
    $request->authorization = 'laboriosam';
    $request->employerId = 'velit';

    $response = $sdk->holidayScheme->getHolidaySchemesFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHolidaySchemesWithTag

Gets the holiday scheme with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHolidaySchemesWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHolidaySchemesWithTagRequest();
    $request->apiVersion = 'a';
    $request->authorization = 'molestias';
    $request->employerId = 'magnam';
    $request->tagId = 'saepe';

    $response = $sdk->holidayScheme->getHolidaySchemesWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromHolidayScheme

Gets the tag from the holiday scheme

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromHolidaySchemeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromHolidaySchemeRequest();
    $request->apiVersion = 'consequuntur';
    $request->authorization = 'occaecati';
    $request->employerId = 'officiis';
    $request->holidaySchemeId = 'perspiciatis';
    $request->tagId = 'in';

    $response = $sdk->holidayScheme->getTagFromHolidayScheme($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromHolidaySchemeRevision

Gets the tag from the holiday scheme revision

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromHolidaySchemeRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromHolidaySchemeRevisionRequest();
    $request->apiVersion = 'adipisci';
    $request->authorization = 'eveniet';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-09-06');
    $request->employerId = 'fugit';
    $request->holidaySchemeId = 'id';
    $request->tagId = 'quis';

    $response = $sdk->holidayScheme->getTagFromHolidaySchemeRevision($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromHolidayScheme

Gets all the tags from the holiday scheme

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromHolidaySchemeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromHolidaySchemeRequest();
    $request->apiVersion = 'reprehenderit';
    $request->authorization = 'error';
    $request->employerId = 'illo';
    $request->holidaySchemeId = 'corporis';

    $response = $sdk->holidayScheme->getTagsFromHolidayScheme($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromHolidaySchemeRevision

Gets all the tags from the holiday scheme revision

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromHolidaySchemeRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromHolidaySchemeRevisionRequest();
    $request->apiVersion = 'quidem';
    $request->authorization = 'eveniet';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-02-14');
    $request->employerId = 'doloremque';
    $request->holidaySchemeId = 'iure';

    $response = $sdk->holidayScheme->getTagsFromHolidaySchemeRevision($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchHolidayScheme

Patches the specified holiday scheme with the supplied values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchHolidaySchemeRequest;
use \OpenAPI\OpenAPI\Models\Shared\HolidayScheme;
use \OpenAPI\OpenAPI\Models\Shared\HolidaySchemeHolidayScheme;
use \OpenAPI\OpenAPI\Models\Shared\HolidaySchemeHolidaySchemeAccrualPayCodes;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchHolidaySchemeRequest();
    $request->apiVersion = 'ipsa';
    $request->authorization = 'totam';
    $request->employerId = 'quae';
    $request->holidayScheme = new HolidayScheme();
    $request->holidayScheme->holidayScheme = new HolidaySchemeHolidayScheme();
    $request->holidayScheme->holidayScheme->accrualPayCodes = new HolidaySchemeHolidaySchemeAccrualPayCodes();
    $request->holidayScheme->holidayScheme->accrualPayCodes->payCode = [
        'eveniet',
        'qui',
    ];
    $request->holidayScheme->holidayScheme->allowExceedAnnualEntitlement = false;
    $request->holidayScheme->holidayScheme->allowNegativeBalance = false;
    $request->holidayScheme->holidayScheme->annualEntitlementWeeks = 7398.84;
    $request->holidayScheme->holidayScheme->bankHolidayInclusive = false;
    $request->holidayScheme->holidayScheme->code = 'iure';
    $request->holidayScheme->holidayScheme->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-06-09');
    $request->holidayScheme->holidayScheme->maxCarryOverDays = 6725.82;
    $request->holidayScheme->holidayScheme->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2021-12-10');
    $request->holidayScheme->holidayScheme->offsetPayment = false;
    $request->holidayScheme->holidayScheme->revision = 523006;
    $request->holidayScheme->holidayScheme->schemeCeasedDate = DateTime::createFromFormat('Y-m-d', '2022-09-05');
    $request->holidayScheme->holidayScheme->schemeKey = 'repellat';
    $request->holidayScheme->holidayScheme->schemeName = 'alias';
    $request->holidayScheme->holidayScheme->yearStartDay = 362189;
    $request->holidayScheme->holidayScheme->yearStartMonth = 597303;
    $request->holidaySchemeId = 'nihil';

    $response = $sdk->holidayScheme->patchHolidayScheme($request);

    if ($response->holidayScheme !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postHolidaySchemeIntoEmployer

Create a new holiday scheme object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostHolidaySchemeIntoEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\HolidayScheme;
use \OpenAPI\OpenAPI\Models\Shared\HolidaySchemeHolidayScheme;
use \OpenAPI\OpenAPI\Models\Shared\HolidaySchemeHolidaySchemeAccrualPayCodes;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostHolidaySchemeIntoEmployerRequest();
    $request->apiVersion = 'mollitia';
    $request->authorization = 'voluptas';
    $request->employerId = 'alias';
    $request->holidayScheme = new HolidayScheme();
    $request->holidayScheme->holidayScheme = new HolidaySchemeHolidayScheme();
    $request->holidayScheme->holidayScheme->accrualPayCodes = new HolidaySchemeHolidaySchemeAccrualPayCodes();
    $request->holidayScheme->holidayScheme->accrualPayCodes->payCode = [
        'reiciendis',
        'dolores',
        'id',
        'minima',
    ];
    $request->holidayScheme->holidayScheme->allowExceedAnnualEntitlement = false;
    $request->holidayScheme->holidayScheme->allowNegativeBalance = false;
    $request->holidayScheme->holidayScheme->annualEntitlementWeeks = 2931.44;
    $request->holidayScheme->holidayScheme->bankHolidayInclusive = false;
    $request->holidayScheme->holidayScheme->code = 'dolorum';
    $request->holidayScheme->holidayScheme->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-12-08');
    $request->holidayScheme->holidayScheme->maxCarryOverDays = 9257.03;
    $request->holidayScheme->holidayScheme->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-05-20');
    $request->holidayScheme->holidayScheme->offsetPayment = false;
    $request->holidayScheme->holidayScheme->revision = 477646;
    $request->holidayScheme->holidayScheme->schemeCeasedDate = DateTime::createFromFormat('Y-m-d', '2022-09-19');
    $request->holidayScheme->holidayScheme->schemeKey = 'culpa';
    $request->holidayScheme->holidayScheme->schemeName = 'adipisci';
    $request->holidayScheme->holidayScheme->yearStartDay = 890653;
    $request->holidayScheme->holidayScheme->yearStartMonth = 514513;

    $response = $sdk->holidayScheme->postHolidaySchemeIntoEmployer($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putHolidaySchemeIntoEmployer

Updates the existing specified holiday scheme object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutHolidaySchemeIntoEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\HolidayScheme;
use \OpenAPI\OpenAPI\Models\Shared\HolidaySchemeHolidayScheme;
use \OpenAPI\OpenAPI\Models\Shared\HolidaySchemeHolidaySchemeAccrualPayCodes;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutHolidaySchemeIntoEmployerRequest();
    $request->apiVersion = 'eum';
    $request->authorization = 'nemo';
    $request->employerId = 'recusandae';
    $request->holidayScheme = new HolidayScheme();
    $request->holidayScheme->holidayScheme = new HolidaySchemeHolidayScheme();
    $request->holidayScheme->holidayScheme->accrualPayCodes = new HolidaySchemeHolidaySchemeAccrualPayCodes();
    $request->holidayScheme->holidayScheme->accrualPayCodes->payCode = [
        'provident',
        'quis',
    ];
    $request->holidayScheme->holidayScheme->allowExceedAnnualEntitlement = false;
    $request->holidayScheme->holidayScheme->allowNegativeBalance = false;
    $request->holidayScheme->holidayScheme->annualEntitlementWeeks = 4317.85;
    $request->holidayScheme->holidayScheme->bankHolidayInclusive = false;
    $request->holidayScheme->holidayScheme->code = 'reiciendis';
    $request->holidayScheme->holidayScheme->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-09-25');
    $request->holidayScheme->holidayScheme->maxCarryOverDays = 3545.06;
    $request->holidayScheme->holidayScheme->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-05-06');
    $request->holidayScheme->holidayScheme->offsetPayment = false;
    $request->holidayScheme->holidayScheme->revision = 343392;
    $request->holidayScheme->holidayScheme->schemeCeasedDate = DateTime::createFromFormat('Y-m-d', '2021-10-26');
    $request->holidayScheme->holidayScheme->schemeKey = 'possimus';
    $request->holidayScheme->holidayScheme->schemeName = 'animi';
    $request->holidayScheme->holidayScheme->yearStartDay = 402767;
    $request->holidayScheme->holidayScheme->yearStartMonth = 397257;
    $request->holidaySchemeId = 'accusantium';

    $response = $sdk->holidayScheme->putHolidaySchemeIntoEmployer($request);

    if ($response->holidayScheme !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putHolidaySchemeTag

Inserts a new tag on the holiday scheme

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutHolidaySchemeTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutHolidaySchemeTagRequest();
    $request->apiVersion = 'repellat';
    $request->authorization = 'doloribus';
    $request->employerId = 'ullam';
    $request->holidaySchemeId = 'in';
    $request->tagId = 'nam';

    $response = $sdk->holidayScheme->putHolidaySchemeTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
