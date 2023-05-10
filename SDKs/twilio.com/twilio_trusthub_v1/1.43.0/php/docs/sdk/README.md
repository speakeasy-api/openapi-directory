# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createCustomerProfile](#createcustomerprofile) - Create a new Customer-Profile.
* [createCustomerProfileChannelEndpointAssignment](#createcustomerprofilechannelendpointassignment) - Create a new Assigned Item.
* [createCustomerProfileEntityAssignment](#createcustomerprofileentityassignment) - Create a new Assigned Item.
* [createCustomerProfileEvaluation](#createcustomerprofileevaluation) - Create a new Evaluation
* [createEndUser](#createenduser) - Create a new End User.
* [createSupportingDocument](#createsupportingdocument) - Create a new Supporting Document.
* [createTrustProduct](#createtrustproduct) - Create a new Customer-Profile.
* [createTrustProductChannelEndpointAssignment](#createtrustproductchannelendpointassignment) - Create a new Assigned Item.
* [createTrustProductEntityAssignment](#createtrustproductentityassignment) - Create a new Assigned Item.
* [createTrustProductEvaluation](#createtrustproductevaluation) - Create a new Evaluation
* [deleteCustomerProfile](#deletecustomerprofile) - Delete a specific Customer-Profile.
* [deleteCustomerProfileChannelEndpointAssignment](#deletecustomerprofilechannelendpointassignment) - Remove an Assignment Item Instance.
* [deleteCustomerProfileEntityAssignment](#deletecustomerprofileentityassignment) - Remove an Assignment Item Instance.
* [deleteEndUser](#deleteenduser) - Delete a specific End User.
* [deleteSupportingDocument](#deletesupportingdocument) - Delete a specific Supporting Document.
* [deleteTrustProduct](#deletetrustproduct) - Delete a specific Customer-Profile.
* [deleteTrustProductChannelEndpointAssignment](#deletetrustproductchannelendpointassignment) - Remove an Assignment Item Instance.
* [deleteTrustProductEntityAssignment](#deletetrustproductentityassignment) - Remove an Assignment Item Instance.
* [fetchCustomerProfile](#fetchcustomerprofile) - Fetch a specific Customer-Profile instance.
* [fetchCustomerProfileChannelEndpointAssignment](#fetchcustomerprofilechannelendpointassignment) - Fetch specific Assigned Item Instance.
* [fetchCustomerProfileEntityAssignment](#fetchcustomerprofileentityassignment) - Fetch specific Assigned Item Instance.
* [fetchCustomerProfileEvaluation](#fetchcustomerprofileevaluation) - Fetch specific Evaluation Instance.
* [fetchEndUser](#fetchenduser) - Fetch specific End User Instance.
* [fetchEndUserType](#fetchendusertype) - Fetch a specific End-User Type Instance.
* [fetchPolicies](#fetchpolicies) - Fetch specific Policy Instance.
* [fetchSupportingDocument](#fetchsupportingdocument) - Fetch specific Supporting Document Instance.
* [fetchSupportingDocumentType](#fetchsupportingdocumenttype) - Fetch a specific Supporting Document Type Instance.
* [fetchTrustProduct](#fetchtrustproduct) - Fetch a specific Customer-Profile instance.
* [fetchTrustProductChannelEndpointAssignment](#fetchtrustproductchannelendpointassignment) - Fetch specific Assigned Item Instance.
* [fetchTrustProductEntityAssignment](#fetchtrustproductentityassignment) - Fetch specific Assigned Item Instance.
* [fetchTrustProductEvaluation](#fetchtrustproductevaluation) - Fetch specific Evaluation Instance.
* [listCustomerProfile](#listcustomerprofile) - Retrieve a list of all Customer-Profiles for an account.
* [listCustomerProfileChannelEndpointAssignment](#listcustomerprofilechannelendpointassignment) - Retrieve a list of all Assigned Items for an account.
* [listCustomerProfileEntityAssignment](#listcustomerprofileentityassignment) - Retrieve a list of all Assigned Items for an account.
* [listCustomerProfileEvaluation](#listcustomerprofileevaluation) - Retrieve a list of Evaluations associated to the customer_profile resource.
* [listEndUser](#listenduser) - Retrieve a list of all End User for an account.
* [listEndUserType](#listendusertype) - Retrieve a list of all End-User Types.
* [listPolicies](#listpolicies) - Retrieve a list of all Policys.
* [listSupportingDocument](#listsupportingdocument) - Retrieve a list of all Supporting Document for an account.
* [listSupportingDocumentType](#listsupportingdocumenttype) - Retrieve a list of all Supporting Document Types.
* [listTrustProduct](#listtrustproduct) - Retrieve a list of all Customer-Profiles for an account.
* [listTrustProductChannelEndpointAssignment](#listtrustproductchannelendpointassignment) - Retrieve a list of all Assigned Items for an account.
* [listTrustProductEntityAssignment](#listtrustproductentityassignment) - Retrieve a list of all Assigned Items for an account.
* [listTrustProductEvaluation](#listtrustproductevaluation) - Retrieve a list of Evaluations associated to the trust_product resource.
* [updateCustomerProfile](#updatecustomerprofile) - Updates a Customer-Profile in an account.
* [updateEndUser](#updateenduser) - Update an existing End User.
* [updateSupportingDocument](#updatesupportingdocument) - Update an existing Supporting Document.
* [updateTrustProduct](#updatetrustproduct) - Updates a Customer-Profile in an account.

## createCustomerProfile

Create a new Customer-Profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileCreateCustomerProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomerProfileCreateCustomerProfileRequest();
    $request->email = 'Eli96@yahoo.com';
    $request->friendlyName = 'tempora';
    $request->policySid = 'suscipit';
    $request->statusCallback = 'http://spotted-skyline.name';

    $requestSecurity = new CreateCustomerProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCustomerProfile($request, $requestSecurity);

    if ($response->trusthubV1CustomerProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomerProfileChannelEndpointAssignment

Create a new Assigned Item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileChannelEndpointAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileChannelEndpointAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomerProfileChannelEndpointAssignmentRequest();
    $request->customerProfileSid = 'iusto';
    $request->requestBody = new CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest();
    $request->requestBody->channelEndpointSid = 'excepturi';
    $request->requestBody->channelEndpointType = 'nisi';

    $requestSecurity = new CreateCustomerProfileChannelEndpointAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCustomerProfileChannelEndpointAssignment($request, $requestSecurity);

    if ($response->trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomerProfileEntityAssignment

Create a new Assigned Item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileEntityAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileEntityAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomerProfileEntityAssignmentRequest();
    $request->customerProfileSid = 'recusandae';
    $request->requestBody = new CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest();
    $request->requestBody->objectSid = 'temporibus';

    $requestSecurity = new CreateCustomerProfileEntityAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCustomerProfileEntityAssignment($request, $requestSecurity);

    if ($response->trusthubV1CustomerProfileCustomerProfileEntityAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomerProfileEvaluation

Create a new Evaluation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerProfileEvaluationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomerProfileEvaluationRequest();
    $request->customerProfileSid = 'ab';
    $request->requestBody = new CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest();
    $request->requestBody->policySid = 'quis';

    $requestSecurity = new CreateCustomerProfileEvaluationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCustomerProfileEvaluation($request, $requestSecurity);

    if ($response->trusthubV1CustomerProfileCustomerProfileEvaluation !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\CreateEndUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEndUserCreateEndUserRequest();
    $request->attributes = 'veritatis';
    $request->friendlyName = 'deserunt';
    $request->type = 'perferendis';

    $requestSecurity = new CreateEndUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createEndUser($request, $requestSecurity);

    if ($response->trusthubV1EndUser !== null) {
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
    $request->attributes = 'ipsam';
    $request->friendlyName = 'repellendus';
    $request->type = 'sapiente';

    $requestSecurity = new CreateSupportingDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSupportingDocument($request, $requestSecurity);

    if ($response->trusthubV1SupportingDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrustProduct

Create a new Customer-Profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductCreateTrustProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrustProductCreateTrustProductRequest();
    $request->email = 'Brooke_Strosin47@hotmail.com';
    $request->friendlyName = 'quod';
    $request->policySid = 'quod';
    $request->statusCallback = 'http://meager-seabass.net';

    $requestSecurity = new CreateTrustProductSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createTrustProduct($request, $requestSecurity);

    if ($response->trusthubV1TrustProduct !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrustProductChannelEndpointAssignment

Create a new Assigned Item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductChannelEndpointAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductChannelEndpointAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrustProductChannelEndpointAssignmentRequest();
    $request->requestBody = new CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest();
    $request->requestBody->channelEndpointSid = 'dicta';
    $request->requestBody->channelEndpointType = 'nam';
    $request->trustProductSid = 'officia';

    $requestSecurity = new CreateTrustProductChannelEndpointAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createTrustProductChannelEndpointAssignment($request, $requestSecurity);

    if ($response->trusthubV1TrustProductTrustProductChannelEndpointAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrustProductEntityAssignment

Create a new Assigned Item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductEntityAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductEntityAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrustProductEntityAssignmentRequest();
    $request->requestBody = new CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest();
    $request->requestBody->objectSid = 'occaecati';
    $request->trustProductSid = 'fugit';

    $requestSecurity = new CreateTrustProductEntityAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createTrustProductEntityAssignment($request, $requestSecurity);

    if ($response->trusthubV1TrustProductTrustProductEntityAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrustProductEvaluation

Create a new Evaluation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductEvaluationCreateTrustProductEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustProductEvaluationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrustProductEvaluationRequest();
    $request->requestBody = new CreateTrustProductEvaluationCreateTrustProductEvaluationRequest();
    $request->requestBody->policySid = 'deleniti';
    $request->trustProductSid = 'hic';

    $requestSecurity = new CreateTrustProductEvaluationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createTrustProductEvaluation($request, $requestSecurity);

    if ($response->trusthubV1TrustProductTrustProductEvaluation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomerProfile

Delete a specific Customer-Profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomerProfileRequest();
    $request->sid = 'optio';

    $requestSecurity = new DeleteCustomerProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCustomerProfile($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomerProfileChannelEndpointAssignment

Remove an Assignment Item Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerProfileChannelEndpointAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerProfileChannelEndpointAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomerProfileChannelEndpointAssignmentRequest();
    $request->customerProfileSid = 'totam';
    $request->sid = 'beatae';

    $requestSecurity = new DeleteCustomerProfileChannelEndpointAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCustomerProfileChannelEndpointAssignment($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomerProfileEntityAssignment

Remove an Assignment Item Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerProfileEntityAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerProfileEntityAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomerProfileEntityAssignmentRequest();
    $request->customerProfileSid = 'commodi';
    $request->sid = 'molestiae';

    $requestSecurity = new DeleteCustomerProfileEntityAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCustomerProfileEntityAssignment($request, $requestSecurity);

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
    $request->sid = 'modi';

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
    $request->sid = 'qui';

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

## deleteTrustProduct

Delete a specific Customer-Profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrustProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrustProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrustProductRequest();
    $request->sid = 'impedit';

    $requestSecurity = new DeleteTrustProductSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteTrustProduct($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrustProductChannelEndpointAssignment

Remove an Assignment Item Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrustProductChannelEndpointAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrustProductChannelEndpointAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrustProductChannelEndpointAssignmentRequest();
    $request->sid = 'cum';
    $request->trustProductSid = 'esse';

    $requestSecurity = new DeleteTrustProductChannelEndpointAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteTrustProductChannelEndpointAssignment($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrustProductEntityAssignment

Remove an Assignment Item Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrustProductEntityAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrustProductEntityAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrustProductEntityAssignmentRequest();
    $request->sid = 'ipsum';
    $request->trustProductSid = 'excepturi';

    $requestSecurity = new DeleteTrustProductEntityAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteTrustProductEntityAssignment($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCustomerProfile

Fetch a specific Customer-Profile instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCustomerProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCustomerProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCustomerProfileRequest();
    $request->sid = 'aspernatur';

    $requestSecurity = new FetchCustomerProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCustomerProfile($request, $requestSecurity);

    if ($response->trusthubV1CustomerProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCustomerProfileChannelEndpointAssignment

Fetch specific Assigned Item Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCustomerProfileChannelEndpointAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCustomerProfileChannelEndpointAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCustomerProfileChannelEndpointAssignmentRequest();
    $request->customerProfileSid = 'perferendis';
    $request->sid = 'ad';

    $requestSecurity = new FetchCustomerProfileChannelEndpointAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCustomerProfileChannelEndpointAssignment($request, $requestSecurity);

    if ($response->trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCustomerProfileEntityAssignment

Fetch specific Assigned Item Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCustomerProfileEntityAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCustomerProfileEntityAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCustomerProfileEntityAssignmentRequest();
    $request->customerProfileSid = 'natus';
    $request->sid = 'sed';

    $requestSecurity = new FetchCustomerProfileEntityAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCustomerProfileEntityAssignment($request, $requestSecurity);

    if ($response->trusthubV1CustomerProfileCustomerProfileEntityAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCustomerProfileEvaluation

Fetch specific Evaluation Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCustomerProfileEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCustomerProfileEvaluationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCustomerProfileEvaluationRequest();
    $request->customerProfileSid = 'iste';
    $request->sid = 'dolor';

    $requestSecurity = new FetchCustomerProfileEvaluationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCustomerProfileEvaluation($request, $requestSecurity);

    if ($response->trusthubV1CustomerProfileCustomerProfileEvaluation !== null) {
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
    $request->sid = 'natus';

    $requestSecurity = new FetchEndUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEndUser($request, $requestSecurity);

    if ($response->trusthubV1EndUser !== null) {
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
    $request->sid = 'laboriosam';

    $requestSecurity = new FetchEndUserTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEndUserType($request, $requestSecurity);

    if ($response->trusthubV1EndUserType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPolicies

Fetch specific Policy Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPoliciesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPoliciesRequest();
    $request->sid = 'hic';

    $requestSecurity = new FetchPoliciesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchPolicies($request, $requestSecurity);

    if ($response->trusthubV1Policies !== null) {
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
    $request->sid = 'saepe';

    $requestSecurity = new FetchSupportingDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSupportingDocument($request, $requestSecurity);

    if ($response->trusthubV1SupportingDocument !== null) {
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
    $request->sid = 'fuga';

    $requestSecurity = new FetchSupportingDocumentTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSupportingDocumentType($request, $requestSecurity);

    if ($response->trusthubV1SupportingDocumentType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTrustProduct

Fetch a specific Customer-Profile instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrustProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrustProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTrustProductRequest();
    $request->sid = 'in';

    $requestSecurity = new FetchTrustProductSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTrustProduct($request, $requestSecurity);

    if ($response->trusthubV1TrustProduct !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTrustProductChannelEndpointAssignment

Fetch specific Assigned Item Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrustProductChannelEndpointAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrustProductChannelEndpointAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTrustProductChannelEndpointAssignmentRequest();
    $request->sid = 'corporis';
    $request->trustProductSid = 'iste';

    $requestSecurity = new FetchTrustProductChannelEndpointAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTrustProductChannelEndpointAssignment($request, $requestSecurity);

    if ($response->trusthubV1TrustProductTrustProductChannelEndpointAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTrustProductEntityAssignment

Fetch specific Assigned Item Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrustProductEntityAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrustProductEntityAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTrustProductEntityAssignmentRequest();
    $request->sid = 'iure';
    $request->trustProductSid = 'saepe';

    $requestSecurity = new FetchTrustProductEntityAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTrustProductEntityAssignment($request, $requestSecurity);

    if ($response->trusthubV1TrustProductTrustProductEntityAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTrustProductEvaluation

Fetch specific Evaluation Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrustProductEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrustProductEvaluationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTrustProductEvaluationRequest();
    $request->sid = 'quidem';
    $request->trustProductSid = 'architecto';

    $requestSecurity = new FetchTrustProductEvaluationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTrustProductEvaluation($request, $requestSecurity);

    if ($response->trusthubV1TrustProductTrustProductEvaluation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomerProfile

Retrieve a list of all Customer-Profiles for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerProfileEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomerProfileRequest();
    $request->friendlyName = 'ipsa';
    $request->page = 969810;
    $request->pageSize = 666767;
    $request->pageToken = 'mollitia';
    $request->policySid = 'laborum';
    $request->status = CustomerProfileEnumStatusEnum::DRAFT;

    $requestSecurity = new ListCustomerProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCustomerProfile($request, $requestSecurity);

    if ($response->listCustomerProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomerProfileChannelEndpointAssignment

Retrieve a list of all Assigned Items for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerProfileChannelEndpointAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerProfileChannelEndpointAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomerProfileChannelEndpointAssignmentRequest();
    $request->channelEndpointSid = 'dolorem';
    $request->channelEndpointSids = 'corporis';
    $request->customerProfileSid = 'explicabo';
    $request->page = 750686;
    $request->pageSize = 315428;
    $request->pageToken = 'omnis';

    $requestSecurity = new ListCustomerProfileChannelEndpointAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCustomerProfileChannelEndpointAssignment($request, $requestSecurity);

    if ($response->listCustomerProfileChannelEndpointAssignmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomerProfileEntityAssignment

Retrieve a list of all Assigned Items for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerProfileEntityAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerProfileEntityAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomerProfileEntityAssignmentRequest();
    $request->customerProfileSid = 'nemo';
    $request->page = 325047;
    $request->pageSize = 570197;
    $request->pageToken = 'accusantium';

    $requestSecurity = new ListCustomerProfileEntityAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCustomerProfileEntityAssignment($request, $requestSecurity);

    if ($response->listCustomerProfileEntityAssignmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomerProfileEvaluation

Retrieve a list of Evaluations associated to the customer_profile resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerProfileEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerProfileEvaluationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomerProfileEvaluationRequest();
    $request->customerProfileSid = 'iure';
    $request->page = 634274;
    $request->pageSize = 988374;
    $request->pageToken = 'sapiente';

    $requestSecurity = new ListCustomerProfileEvaluationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCustomerProfileEvaluation($request, $requestSecurity);

    if ($response->listCustomerProfileEvaluationResponse !== null) {
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
    $request->page = 102044;
    $request->pageSize = 652790;
    $request->pageToken = 'dolorem';

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
    $request->page = 635059;
    $request->pageSize = 161309;
    $request->pageToken = 'repellat';

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

## listPolicies

Retrieve a list of all Policys.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPoliciesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPoliciesRequest();
    $request->page = 653108;
    $request->pageSize = 581850;
    $request->pageToken = 'numquam';

    $requestSecurity = new ListPoliciesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listPolicies($request, $requestSecurity);

    if ($response->listPoliciesResponse !== null) {
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
    $request->page = 414369;
    $request->pageSize = 466311;
    $request->pageToken = 'molestiae';

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
    $request->page = 244425;
    $request->pageSize = 623510;
    $request->pageToken = 'quia';

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

## listTrustProduct

Retrieve a list of all Customer-Profiles for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrustProductEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrustProductRequest();
    $request->friendlyName = 'quis';
    $request->page = 110375;
    $request->pageSize = 674752;
    $request->pageToken = 'animi';
    $request->policySid = 'enim';
    $request->status = TrustProductEnumStatusEnum::DRAFT;

    $requestSecurity = new ListTrustProductSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTrustProduct($request, $requestSecurity);

    if ($response->listTrustProductResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrustProductChannelEndpointAssignment

Retrieve a list of all Assigned Items for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustProductChannelEndpointAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustProductChannelEndpointAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrustProductChannelEndpointAssignmentRequest();
    $request->channelEndpointSid = 'quo';
    $request->channelEndpointSids = 'sequi';
    $request->page = 949572;
    $request->pageSize = 368725;
    $request->pageToken = 'id';
    $request->trustProductSid = 'possimus';

    $requestSecurity = new ListTrustProductChannelEndpointAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTrustProductChannelEndpointAssignment($request, $requestSecurity);

    if ($response->listTrustProductChannelEndpointAssignmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrustProductEntityAssignment

Retrieve a list of all Assigned Items for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustProductEntityAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustProductEntityAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrustProductEntityAssignmentRequest();
    $request->page = 13571;
    $request->pageSize = 97101;
    $request->pageToken = 'error';
    $request->trustProductSid = 'temporibus';

    $requestSecurity = new ListTrustProductEntityAssignmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTrustProductEntityAssignment($request, $requestSecurity);

    if ($response->listTrustProductEntityAssignmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrustProductEvaluation

Retrieve a list of Evaluations associated to the trust_product resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustProductEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustProductEvaluationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrustProductEvaluationRequest();
    $request->page = 673660;
    $request->pageSize = 96098;
    $request->pageToken = 'reiciendis';
    $request->trustProductSid = 'voluptatibus';

    $requestSecurity = new ListTrustProductEvaluationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTrustProductEvaluation($request, $requestSecurity);

    if ($response->listTrustProductEvaluationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomerProfile

Updates a Customer-Profile in an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomerProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomerProfileUpdateCustomerProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerProfileEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomerProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomerProfileRequest();
    $request->requestBody = new UpdateCustomerProfileUpdateCustomerProfileRequest();
    $request->requestBody->email = 'Jane.Langosh60@hotmail.com';
    $request->requestBody->friendlyName = 'voluptate';
    $request->requestBody->status = CustomerProfileEnumStatusEnum::TWILIO_REJECTED;
    $request->requestBody->statusCallback = 'http://anxious-hunt.biz';
    $request->sid = 'maiores';

    $requestSecurity = new UpdateCustomerProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCustomerProfile($request, $requestSecurity);

    if ($response->trusthubV1CustomerProfile !== null) {
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
    $request->requestBody->attributes = 'dicta';
    $request->requestBody->friendlyName = 'corporis';
    $request->sid = 'dolore';

    $requestSecurity = new UpdateEndUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateEndUser($request, $requestSecurity);

    if ($response->trusthubV1EndUser !== null) {
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
    $request->requestBody->attributes = 'iusto';
    $request->requestBody->friendlyName = 'dicta';
    $request->sid = 'harum';

    $requestSecurity = new UpdateSupportingDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSupportingDocument($request, $requestSecurity);

    if ($response->trusthubV1SupportingDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrustProduct

Updates a Customer-Profile in an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrustProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrustProductUpdateTrustProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrustProductEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrustProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrustProductRequest();
    $request->requestBody = new UpdateTrustProductUpdateTrustProductRequest();
    $request->requestBody->email = 'Shania.Jerde21@gmail.com';
    $request->requestBody->friendlyName = 'quidem';
    $request->requestBody->status = TrustProductEnumStatusEnum::IN_REVIEW;
    $request->requestBody->statusCallback = 'https://treasured-dirt.name';
    $request->sid = 'rem';

    $requestSecurity = new UpdateTrustProductSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateTrustProduct($request, $requestSecurity);

    if ($response->trusthubV1TrustProduct !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
