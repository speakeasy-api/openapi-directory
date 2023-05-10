# v2

### Available Operations

* [getAcmeExternalAccountBinding](#getacmeexternalaccountbinding) - Retrieves the external account binding for the specified customer
* [getCertificateDetailByCertIdentifier](#getcertificatedetailbycertidentifier) - Retrieve individual certificate details
* [getCustomerCertificatesByCustomerId](#getcustomercertificatesbycustomerid) - Retrieve customer's certificates
* [getDomainDetailsByDomain](#getdomaindetailsbydomain) - Retrieve detailed information for supplied domain
* [getDomainInformationByCertificateId](#getdomaininformationbycertificateid) - Retrieve domain verification status

## getAcmeExternalAccountBinding

Use this endpoint to retrieve a key identifier and Hash-based Message Authentication Code (HMAC) key for Automated Certificate Management Environment (ACME) External Account Binding (EAB). These credentials can be used with an ACME client that supports EAB (ex. CertBot) to automate the issuance request and deployment of DV SSL certificates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAcmeExternalAccountBindingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAcmeExternalAccountBindingRequest();
    $request->customerId = 'alias';

    $response = $sdk->v2->getAcmeExternalAccountBinding($request);

    if ($response->externalAccountBinding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCertificateDetailByCertIdentifier

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate. <ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificateDetailByCertIdentifierRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificateDetailByCertIdentifierRequest();
    $request->certificateId = 'fugit';
    $request->customerId = 'dolorum';

    $response = $sdk->v2->getCertificateDetailByCertIdentifier($request);

    if ($response->certificateDetailV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomerCertificatesByCustomerId

This method can be used to retrieve a list of certificates for a specified customer. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerCertificatesByCustomerIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomerCertificatesByCustomerIdRequest();
    $request->customerId = 'excepturi';
    $request->limit = 270008;
    $request->offset = 703737;

    $response = $sdk->v2->getCustomerCertificatesByCustomerId($request);

    if ($response->certificateSummariesV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainDetailsByDomain

Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainDetailsByDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainDetailsByDomainRequest();
    $request->certificateId = 'tempore';
    $request->customerId = 'labore';
    $request->domain = 'delectus';

    $response = $sdk->v2->getDomainDetailsByDomain($request);

    if ($response->domainVerificationDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainInformationByCertificateId

This method can be used to retrieve the domain verification status for a certificate request.<ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>"

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainInformationByCertificateIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainInformationByCertificateIdRequest();
    $request->certificateId = 'eum';
    $request->customerId = 'non';

    $response = $sdk->v2->getDomainInformationByCertificateId($request);

    if ($response->domainVerificationSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
