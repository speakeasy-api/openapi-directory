# certificateActions

### Available Operations

* [getCertificatesIdActions](#getcertificatesidactions) - Get all Actions for a Certificate
* [getCertificatesIdActionsActionId](#getcertificatesidactionsactionid) - Get an Action for a Certificate
* [postCertificatesIdActionsRetry](#postcertificatesidactionsretry) - Retry Issuance or Renewal

## getCertificatesIdActions

Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatesIdActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatesIdActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatesIdActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificatesIdActionsRequest();
    $request->id = 847252;
    $request->sort = GetCertificatesIdActionsSortParameterSortEnum::STATUS_ASC;
    $request->status = GetCertificatesIdActionsStatusParameterStatusEnum::SUCCESS;

    $response = $sdk->certificateActions->getCertificatesIdActions($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCertificatesIdActionsActionId

Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatesIdActionsActionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificatesIdActionsActionIdRequest();
    $request->actionId = 645894;
    $request->id = 384382;

    $response = $sdk->certificateActions->getCertificatesIdActionsActionId($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCertificatesIdActionsRetry

Retry a failed Certificate issuance or renewal.

Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.

#### Call specific error codes

| Code                                                    | Description                                                               |
|---------------------------------------------------------|---------------------------------------------------------------------------|
| `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
| `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
| `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
| `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
| `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
| `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
| `dns_zone_not_found`                                    | DNS zone not found                                                        |
| `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCertificatesIdActionsRetryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCertificatesIdActionsRetryRequest();
    $request->id = 437587;

    $response = $sdk->certificateActions->postCertificatesIdActionsRetry($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
