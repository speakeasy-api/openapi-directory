# payCode

### Available Operations

* [deletePayCode](#deletepaycode) - Deletes a pay code
* [deletePayCodeRevision](#deletepaycoderevision) - Deletes a pay code revision
* [deletePayCodeRevisionByNumber](#deletepaycoderevisionbynumber) - Delete an PayCode revision matching the specified revision number.
* [getAllPayCodeTags](#getallpaycodetags) - Get all pay code tags
* [getPayCodeByEffectiveDate](#getpaycodebyeffectivedate) - Gets pay code for specified date
* [getPayCodeFromEmployer](#getpaycodefromemployer) - Gets the specified pay code from the employer
* [getPayCodeRevisionByNumber](#getpaycoderevisionbynumber) - Gets the pay code by revision number
* [getPayCodeRevisions](#getpaycoderevisions) - Get all revisions of the Pay Code
* [getPayCodesByEffectiveDate](#getpaycodesbyeffectivedate) - Gets all pay codes for specified date
* [getPayCodesFromEmployer](#getpaycodesfromemployer) - Gets the pay codes from the employer
* [getPayCodesFromNominalCode](#getpaycodesfromnominalcode) - Gets the pay codes by nominal code
* [getPayCodesWithTag](#getpaycodeswithtag) - Get pay codes with tag
* [patchPayCode](#patchpaycode) - Patches the pay code
* [postPayCode](#postpaycode) - Create a new pay code
* [putPayCode](#putpaycode) - Updates a pay code

## deletePayCode

Delete the specified pay code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayCodeRequest();
    $request->apiVersion = 'ipsam';
    $request->authorization = 'vel';
    $request->employerId = 'alias';
    $request->payCodeId = 'quasi';

    $response = $sdk->payCode->deletePayCode($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePayCodeRevision

Delete the pay code revision for the specified date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayCodeRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayCodeRevisionRequest();
    $request->apiVersion = 'non';
    $request->authorization = 'maiores';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-06-05');
    $request->employerId = 'nulla';
    $request->payCodeId = 'deserunt';

    $response = $sdk->payCode->deletePayCodeRevision($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePayCodeRevisionByNumber

Deletes the specified pay code revision for the matching revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayCodeRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayCodeRevisionByNumberRequest();
    $request->apiVersion = 'esse';
    $request->authorization = 'nemo';
    $request->employerId = 'reprehenderit';
    $request->payCodeId = 'est';
    $request->revisionNumber = 'quis';

    $response = $sdk->payCode->deletePayCodeRevisionByNumber($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllPayCodeTags

Gets all the pay code tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPayCodeTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPayCodeTagsRequest();
    $request->apiVersion = 'sint';
    $request->authorization = 'accusamus';
    $request->employerId = 'impedit';

    $response = $sdk->payCode->getAllPayCodeTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayCodeByEffectiveDate

Gets the pay code revision for the specified effective date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayCodeByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayCodeByEffectiveDateRequest();
    $request->apiVersion = 'hic';
    $request->authorization = 'necessitatibus';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-10-15');
    $request->employerId = 'voluptas';
    $request->payCodeId = 'debitis';

    $response = $sdk->payCode->getPayCodeByEffectiveDate($request);

    if ($response->payCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayCodeFromEmployer

Returns the specified pay code from the employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayCodeFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayCodeFromEmployerRequest();
    $request->apiVersion = 'delectus';
    $request->authorization = 'quae';
    $request->employerId = 'minus';
    $request->payCodeId = 'fuga';

    $response = $sdk->payCode->getPayCodeFromEmployer($request);

    if ($response->payCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayCodeRevisionByNumber

Get the pay code revision matching the specified revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayCodeRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayCodeRevisionByNumberRequest();
    $request->apiVersion = 'laborum';
    $request->authorization = 'consectetur';
    $request->employerId = 'velit';
    $request->payCodeId = 'atque';
    $request->revisionNumber = 'ipsum';

    $response = $sdk->payCode->getPayCodeRevisionByNumber($request);

    if ($response->payCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayCodeRevisions

Returns links to all revisions of the pay code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayCodeRevisionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayCodeRevisionsRequest();
    $request->apiVersion = 'impedit';
    $request->authorization = 'magni';
    $request->employerId = 'soluta';
    $request->payCodeId = 'repudiandae';

    $response = $sdk->payCode->getPayCodeRevisions($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayCodesByEffectiveDate

Gets the effective pay code revision for the specified date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayCodesByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayCodesByEffectiveDateRequest();
    $request->apiVersion = 'nam';
    $request->authorization = 'dolore';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-07-19');
    $request->employerId = 'sequi';

    $response = $sdk->payCode->getPayCodesByEffectiveDate($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayCodesFromEmployer

Get links to all the pay codes for the specified employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayCodesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayCodesFromEmployerRequest();
    $request->apiVersion = 'dignissimos';
    $request->authorization = 'neque';
    $request->employerId = 'quo';

    $response = $sdk->payCode->getPayCodesFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayCodesFromNominalCode

Get the pay codes that share the specified nominal code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayCodesFromNominalCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayCodesFromNominalCodeRequest();
    $request->apiVersion = 'deleniti';
    $request->authorization = 'quibusdam';
    $request->employerId = 'iure';
    $request->nominalCodeId = 'odit';

    $response = $sdk->payCode->getPayCodesFromNominalCode($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayCodesWithTag

Gets the pay codes with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayCodesWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayCodesWithTagRequest();
    $request->apiVersion = 'voluptatibus';
    $request->authorization = 'vel';
    $request->employerId = 'magnam';
    $request->tagId = 'quibusdam';

    $response = $sdk->payCode->getPayCodesWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchPayCode

Patches the specified pay code object with the supplied values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchPayCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayCode;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCode;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeNominalCode;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeTerritoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchPayCodeRequest();
    $request->apiVersion = 'inventore';
    $request->authorization = 'facere';
    $request->employerId = 'libero';
    $request->payCode = new PayCode();
    $request->payCode->payCode = new PayCodePayCode();
    $request->payCode->payCode->benefit = false;
    $request->payCode->payCode->code = 'architecto';
    $request->payCode->payCode->description = 'voluptatibus';
    $request->payCode->payCode->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-03-21');
    $request->payCode->payCode->metaData = [
        'velit' => 'illo',
        'accusantium' => 'vel',
    ];
    $request->payCode->payCode->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-11-22');
    $request->payCode->payCode->niable = false;
    $request->payCode->payCode->nominalCode = new PayCodePayCodeNominalCode();
    $request->payCode->payCode->nominalCode->atHref = 'vero';
    $request->payCode->payCode->nominalCode->atRel = 'excepturi';
    $request->payCode->payCode->nominalCode->atTitle = 'eum';
    $request->payCode->payCode->nonArrestable = false;
    $request->payCode->payCode->notional = false;
    $request->payCode->payCode->readonly = false;
    $request->payCode->payCode->region = PayCodePayCodeRegionEnum::NOT_SET;
    $request->payCode->payCode->revision = 284086;
    $request->payCode->payCode->taxable = false;
    $request->payCode->payCode->territory = PayCodePayCodeTerritoryEnum::UNITED_KINGDOM;
    $request->payCode->payCode->type = PayCodePayCodeTypeEnum::PAYMENT;
    $request->payCodeId = 'earum';

    $response = $sdk->payCode->patchPayCode($request);

    if ($response->payCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPayCode

Create a new pay code object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPayCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayCode;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCode;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeNominalCode;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeTerritoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPayCodeRequest();
    $request->apiVersion = 'dicta';
    $request->authorization = 'impedit';
    $request->employerId = 'voluptatibus';
    $request->payCode = new PayCode();
    $request->payCode->payCode = new PayCodePayCode();
    $request->payCode->payCode->benefit = false;
    $request->payCode->payCode->code = 'iste';
    $request->payCode->payCode->description = 'itaque';
    $request->payCode->payCode->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-08-10');
    $request->payCode->payCode->metaData = [
        'velit' => 'laborum',
        'non' => 'dolor',
        'iusto' => 'sit',
        'doloremque' => 'consequatur',
    ];
    $request->payCode->payCode->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2021-02-22');
    $request->payCode->payCode->niable = false;
    $request->payCode->payCode->nominalCode = new PayCodePayCodeNominalCode();
    $request->payCode->payCode->nominalCode->atHref = 'ea';
    $request->payCode->payCode->nominalCode->atRel = 'quidem';
    $request->payCode->payCode->nominalCode->atTitle = 'voluptas';
    $request->payCode->payCode->nonArrestable = false;
    $request->payCode->payCode->notional = false;
    $request->payCode->payCode->readonly = false;
    $request->payCode->payCode->region = PayCodePayCodeRegionEnum::SCOTLAND;
    $request->payCode->payCode->revision = 809365;
    $request->payCode->payCode->taxable = false;
    $request->payCode->payCode->territory = PayCodePayCodeTerritoryEnum::UNITED_KINGDOM;
    $request->payCode->payCode->type = PayCodePayCodeTypeEnum::PAYMENT;

    $response = $sdk->payCode->postPayCode($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPayCode

Updates the existing specified pay code object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPayCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayCode;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCode;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeNominalCode;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeTerritoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayCodePayCodeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPayCodeRequest();
    $request->apiVersion = 'expedita';
    $request->authorization = 'deleniti';
    $request->employerId = 'a';
    $request->payCode = new PayCode();
    $request->payCode->payCode = new PayCodePayCode();
    $request->payCode->payCode->benefit = false;
    $request->payCode->payCode->code = 'voluptate';
    $request->payCode->payCode->description = 'ullam';
    $request->payCode->payCode->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-03-16');
    $request->payCode->payCode->metaData = [
        'impedit' => 'ipsam',
        'corporis' => 'est',
        'error' => 'esse',
    ];
    $request->payCode->payCode->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-11-30');
    $request->payCode->payCode->niable = false;
    $request->payCode->payCode->nominalCode = new PayCodePayCodeNominalCode();
    $request->payCode->payCode->nominalCode->atHref = 'vero';
    $request->payCode->payCode->nominalCode->atRel = 'consectetur';
    $request->payCode->payCode->nominalCode->atTitle = 'vitae';
    $request->payCode->payCode->nonArrestable = false;
    $request->payCode->payCode->notional = false;
    $request->payCode->payCode->readonly = false;
    $request->payCode->payCode->region = PayCodePayCodeRegionEnum::NOT_SET;
    $request->payCode->payCode->revision = 212434;
    $request->payCode->payCode->taxable = false;
    $request->payCode->payCode->territory = PayCodePayCodeTerritoryEnum::UNITED_KINGDOM;
    $request->payCode->payCode->type = PayCodePayCodeTypeEnum::NOT_SET;
    $request->payCodeId = 'qui';

    $response = $sdk->payCode->putPayCode($request);

    if ($response->payCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
