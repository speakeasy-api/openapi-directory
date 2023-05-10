# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createBundle](#createbundle) - Create a new Bundle.
* [createBundleCopy](#createbundlecopy) - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
* [createEndUser](#createenduser) - Create a new End User.
* [createEvaluation](#createevaluation) - Creates an evaluation for a bundle
* [createItemAssignment](#createitemassignment) - Create a new Assigned Item.
* [createReplaceItems](#createreplaceitems) - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
* [createSupportingDocument](#createsupportingdocument) - Create a new Supporting Document.
* [deleteBundle](#deletebundle) - Delete a specific Bundle.
* [deleteEndUser](#deleteenduser) - Delete a specific End User.
* [deleteItemAssignment](#deleteitemassignment) - Remove an Assignment Item Instance.
* [deleteSupportingDocument](#deletesupportingdocument) - Delete a specific Supporting Document.
* [fetchBundle](#fetchbundle) - Fetch a specific Bundle instance.
* [fetchEndUser](#fetchenduser) - Fetch specific End User Instance.
* [fetchEndUserType](#fetchendusertype) - Fetch a specific End-User Type Instance.
* [fetchEvaluation](#fetchevaluation) - Fetch specific Evaluation Instance.
* [fetchItemAssignment](#fetchitemassignment) - Fetch specific Assigned Item Instance.
* [fetchRegulation](#fetchregulation) - Fetch specific Regulation Instance.
* [fetchSupportingDocument](#fetchsupportingdocument) - Fetch specific Supporting Document Instance.
* [fetchSupportingDocumentType](#fetchsupportingdocumenttype) - Fetch a specific Supporting Document Type Instance.
* [listBundle](#listbundle) - Retrieve a list of all Bundles for an account.
* [listBundleCopy](#listbundlecopy) - Retrieve a list of all Bundles Copies for a Bundle.
* [listEndUser](#listenduser) - Retrieve a list of all End User for an account.
* [listEndUserType](#listendusertype) - Retrieve a list of all End-User Types.
* [listEvaluation](#listevaluation) - Retrieve a list of Evaluations associated to the Bundle resource.
* [listItemAssignment](#listitemassignment) - Retrieve a list of all Assigned Items for an account.
* [listRegulation](#listregulation) - Retrieve a list of all Regulations.
* [listSupportingDocument](#listsupportingdocument) - Retrieve a list of all Supporting Document for an account.
* [listSupportingDocumentType](#listsupportingdocumenttype) - Retrieve a list of all Supporting Document Types.
* [updateBundle](#updatebundle) - Updates a Bundle in an account.
* [updateEndUser](#updateenduser) - Update an existing End User.
* [updateSupportingDocument](#updatesupportingdocument) - Update an existing Supporting Document.

## createBundle

Create a new Bundle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBundleCreateBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\BundleEnumEndUserTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBundleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBundleCreateBundleRequest();
    $request->email = 'Vincenzo.Goldner@gmail.com';
    $request->endUserType = BundleEnumEndUserTypeEnum::BUSINESS;
    $request->friendlyName = 'placeat';
    $request->isoCountry = 'voluptatum';
    $request->numberType = 'iusto';
    $request->regulationSid = 'excepturi';
    $request->statusCallback = 'http://velvety-spiderling.com';

    $requestSecurity = new CreateBundleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createBundle($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceBundle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBundleCopy

Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBundleCopyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBundleCopyCreateBundleCopyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBundleCopySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBundleCopyRequest();
    $request->bundleSid = 'quis';
    $request->requestBody = new CreateBundleCopyCreateBundleCopyRequest();
    $request->requestBody->friendlyName = 'veritatis';

    $requestSecurity = new CreateBundleCopySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createBundleCopy($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceBundleBundleCopy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEndUser

Create a new End User.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndUserCreateEndUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\EndUserEnumTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEndUserCreateEndUserRequest();
    $request->attributes = 'deserunt';
    $request->friendlyName = 'perferendis';
    $request->type = EndUserEnumTypeEnum::INDIVIDUAL;

    $requestSecurity = new CreateEndUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createEndUser($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceEndUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEvaluation

Creates an evaluation for a bundle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEvaluationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEvaluationRequest();
    $request->bundleSid = 'repellendus';

    $requestSecurity = new CreateEvaluationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createEvaluation($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceBundleEvaluation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createItemAssignment

Create a new Assigned Item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateItemAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateItemAssignmentCreateItemAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateItemAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateItemAssignmentRequest();
    $request->bundleSid = 'sapiente';
    $request->requestBody = new CreateItemAssignmentCreateItemAssignmentRequest();
    $request->requestBody->objectSid = 'quo';

    $requestSecurity = new CreateItemAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createItemAssignment($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceBundleItemAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReplaceItems

Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplaceItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplaceItemsCreateReplaceItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplaceItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReplaceItemsRequest();
    $request->bundleSid = 'odit';
    $request->requestBody = new CreateReplaceItemsCreateReplaceItemsRequest();
    $request->requestBody->fromBundleSid = 'at';

    $requestSecurity = new CreateReplaceItemsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createReplaceItems($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceBundleReplaceItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSupportingDocument

Create a new Supporting Document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSupportingDocumentCreateSupportingDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSupportingDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSupportingDocumentCreateSupportingDocumentRequest();
    $request->attributes = 'at';
    $request->friendlyName = 'maiores';
    $request->type = 'molestiae';

    $requestSecurity = new CreateSupportingDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSupportingDocument($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceSupportingDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBundle

Delete a specific Bundle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBundleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBundleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBundleRequest();
    $request->sid = 'quod';

    $requestSecurity = new DeleteBundleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteBundle($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEndUser

Delete a specific End User.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEndUserRequest();
    $request->sid = 'quod';

    $requestSecurity = new DeleteEndUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteEndUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteItemAssignment

Remove an Assignment Item Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteItemAssignmentRequest();
    $request->bundleSid = 'esse';
    $request->sid = 'totam';

    $requestSecurity = new DeleteItemAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteItemAssignment($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSupportingDocument

Delete a specific Supporting Document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSupportingDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSupportingDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSupportingDocumentRequest();
    $request->sid = 'porro';

    $requestSecurity = new DeleteSupportingDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSupportingDocument($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBundle

Fetch a specific Bundle instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBundleRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchBundleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBundleRequest();
    $request->sid = 'dolorum';

    $requestSecurity = new FetchBundleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchBundle($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceBundle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEndUser

Fetch specific End User Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEndUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEndUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEndUserRequest();
    $request->sid = 'dicta';

    $requestSecurity = new FetchEndUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEndUser($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceEndUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEndUserType

Fetch a specific End-User Type Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEndUserTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEndUserTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEndUserTypeRequest();
    $request->sid = 'nam';

    $requestSecurity = new FetchEndUserTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEndUserType($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceEndUserType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEvaluation

Fetch specific Evaluation Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEvaluationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEvaluationRequest();
    $request->bundleSid = 'officia';
    $request->sid = 'occaecati';

    $requestSecurity = new FetchEvaluationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEvaluation($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceBundleEvaluation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchItemAssignment

Fetch specific Assigned Item Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchItemAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchItemAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchItemAssignmentRequest();
    $request->bundleSid = 'fugit';
    $request->sid = 'deleniti';

    $requestSecurity = new FetchItemAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchItemAssignment($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceBundleItemAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRegulation

Fetch specific Regulation Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRegulationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRegulationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRegulationRequest();
    $request->sid = 'hic';

    $requestSecurity = new FetchRegulationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRegulation($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceRegulation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSupportingDocument

Fetch specific Supporting Document Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSupportingDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSupportingDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSupportingDocumentRequest();
    $request->sid = 'optio';

    $requestSecurity = new FetchSupportingDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSupportingDocument($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceSupportingDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSupportingDocumentType

Fetch a specific Supporting Document Type Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSupportingDocumentTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSupportingDocumentTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSupportingDocumentTypeRequest();
    $request->sid = 'totam';

    $requestSecurity = new FetchSupportingDocumentTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSupportingDocumentType($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceSupportingDocumentType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBundle

Retrieve a list of all Bundles for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\BundleEnumSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\BundleEnumSortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BundleEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBundleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBundleRequest();
    $request->friendlyName = 'beatae';
    $request->hasValidUntilDate = false;
    $request->isoCountry = 'commodi';
    $request->numberType = 'molestiae';
    $request->page = 264555;
    $request->pageSize = 186332;
    $request->pageToken = 'impedit';
    $request->regulationSid = 'cum';
    $request->sortBy = BundleEnumSortByEnum::VALID_UNTIL;
    $request->sortDirection = BundleEnumSortDirectionEnum::ASC;
    $request->status = BundleEnumStatusEnum::TWILIO_REJECTED;
    $request->validUntilDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-25T03:24:03.949Z');
    $request->validUntilDateLessThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T13:30:46.463Z');
    $request->validUntilDateGreaterThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-22T14:02:28.908Z');

    $requestSecurity = new ListBundleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listBundle($request, $requestSecurity);

    if ($response->listBundleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBundleCopy

Retrieve a list of all Bundles Copies for a Bundle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBundleCopyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBundleCopySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBundleCopyRequest();
    $request->bundleSid = 'dolor';
    $request->page = 616934;
    $request->pageSize = 386489;
    $request->pageToken = 'hic';

    $requestSecurity = new ListBundleCopySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listBundleCopy($request, $requestSecurity);

    if ($response->listBundleCopyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEndUser

Retrieve a list of all End User for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEndUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEndUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEndUserRequest();
    $request->page = 902599;
    $request->pageSize = 681820;
    $request->pageToken = 'in';

    $requestSecurity = new ListEndUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEndUser($request, $requestSecurity);

    if ($response->listEndUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEndUserType

Retrieve a list of all End-User Types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEndUserTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEndUserTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEndUserTypeRequest();
    $request->page = 359508;
    $request->pageSize = 613064;
    $request->pageToken = 'iure';

    $requestSecurity = new ListEndUserTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEndUserType($request, $requestSecurity);

    if ($response->listEndUserTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEvaluation

Retrieve a list of Evaluations associated to the Bundle resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEvaluationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEvaluationRequest();
    $request->bundleSid = 'saepe';
    $request->page = 697631;
    $request->pageSize = 99280;
    $request->pageToken = 'ipsa';

    $requestSecurity = new ListEvaluationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEvaluation($request, $requestSecurity);

    if ($response->listEvaluationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listItemAssignment

Retrieve a list of all Assigned Items for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListItemAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListItemAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListItemAssignmentRequest();
    $request->bundleSid = 'reiciendis';
    $request->page = 666767;
    $request->pageSize = 653140;
    $request->pageToken = 'laborum';

    $requestSecurity = new ListItemAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listItemAssignment($request, $requestSecurity);

    if ($response->listItemAssignmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRegulation

Retrieve a list of all Regulations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRegulationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegulationEnumEndUserTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRegulationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRegulationRequest();
    $request->endUserType = RegulationEnumEndUserTypeEnum::INDIVIDUAL;
    $request->isoCountry = 'dolorem';
    $request->numberType = 'corporis';
    $request->page = 128926;
    $request->pageSize = 750686;
    $request->pageToken = 'enim';

    $requestSecurity = new ListRegulationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRegulation($request, $requestSecurity);

    if ($response->listRegulationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSupportingDocument

Retrieve a list of all Supporting Document for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSupportingDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSupportingDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSupportingDocumentRequest();
    $request->page = 607831;
    $request->pageSize = 363711;
    $request->pageToken = 'minima';

    $requestSecurity = new ListSupportingDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSupportingDocument($request, $requestSecurity);

    if ($response->listSupportingDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSupportingDocumentType

Retrieve a list of all Supporting Document Types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSupportingDocumentTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSupportingDocumentTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSupportingDocumentTypeRequest();
    $request->page = 570197;
    $request->pageSize = 38425;
    $request->pageToken = 'iure';

    $requestSecurity = new ListSupportingDocumentTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSupportingDocumentType($request, $requestSecurity);

    if ($response->listSupportingDocumentTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBundle

Updates a Bundle in an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBundleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBundleUpdateBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\BundleEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBundleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBundleRequest();
    $request->requestBody = new UpdateBundleUpdateBundleRequest();
    $request->requestBody->email = 'Yasmeen65@yahoo.com';
    $request->requestBody->friendlyName = 'dolorem';
    $request->requestBody->status = BundleEnumStatusEnum::TWILIO_REJECTED;
    $request->requestBody->statusCallback = 'http://young-pew.name';
    $request->sid = 'numquam';

    $requestSecurity = new UpdateBundleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateBundle($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceBundle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEndUser

Update an existing End User.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndUserUpdateEndUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEndUserRequest();
    $request->requestBody = new UpdateEndUserUpdateEndUserRequest();
    $request->requestBody->attributes = 'commodi';
    $request->requestBody->friendlyName = 'quam';
    $request->sid = 'molestiae';

    $requestSecurity = new UpdateEndUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateEndUser($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceEndUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSupportingDocument

Update an existing Supporting Document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSupportingDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSupportingDocumentUpdateSupportingDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSupportingDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSupportingDocumentRequest();
    $request->requestBody = new UpdateSupportingDocumentUpdateSupportingDocumentRequest();
    $request->requestBody->attributes = 'velit';
    $request->requestBody->friendlyName = 'error';
    $request->sid = 'quia';

    $requestSecurity = new UpdateSupportingDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSupportingDocument($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceSupportingDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
