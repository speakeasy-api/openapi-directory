# certificates

## Overview

TLS/SSL Certificates prove the identity of a Server and are used to encrypt client traffic.

### Available Operations

* [deleteCertificatesId](#deletecertificatesid) - Delete a Certificate
* [getCertificates](#getcertificates) - Get all Certificates
* [getCertificatesId](#getcertificatesid) - Get a Certificate
* [postCertificates](#postcertificates) - Create a Certificate
* [putCertificatesId](#putcertificatesid) - Update a Certificate

## deleteCertificatesId

Deletes a Certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificatesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCertificatesIdRequest();
    $request->id = 297534;

    $response = $sdk->certificates->deleteCertificatesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCertificates

Returns all Certificate objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatesTypeParameterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificatesRequest();
    $request->labelSelector = 'debitis';
    $request->name = 'Lucia Goldner';
    $request->sort = GetCertificatesSortEnum::CREATED_ASC;
    $request->type = GetCertificatesTypeParameterTypeEnum::MANAGED;

    $response = $sdk->certificates->getCertificates($request);

    if ($response->certificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCertificatesId

Gets a specific Certificate object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificatesIdRequest();
    $request->id = 528895;

    $response = $sdk->certificates->getCertificatesId($request);

    if ($response->certificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCertificates

Creates a new Certificate.

The default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.

In contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.

For type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCertificatesCreateCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCertificatesCreateCertificateRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCertificatesCreateCertificateRequest();
    $request->certificate = '-----BEGIN CERTIFICATE-----
    ...';
    $request->domainNames = [
        'excepturi',
        'nisi',
    ];
    $request->labels = [
        'temporibus' => 'ab',
        'quis' => 'veritatis',
        'deserunt' => 'perferendis',
        'ipsam' => 'repellendus',
    ];
    $request->name = 'my website cert';
    $request->privateKey = '-----BEGIN PRIVATE KEY-----
    ...';
    $request->type = PostCertificatesCreateCertificateRequestTypeEnum::UPLOADED;

    $response = $sdk->certificates->postCertificates($request);

    if ($response->createCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCertificatesId

Updates the Certificate properties.

Note that when updating labels, the Certificate’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Certificate object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCertificatesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutCertificatesIdUpdateCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCertificatesIdRequest();
    $request->requestBody = new PutCertificatesIdUpdateCertificateRequest();
    $request->requestBody->labels = [
        'quo' => 'odit',
        'at' => 'at',
        'maiores' => 'molestiae',
        'quod' => 'quod',
    ];
    $request->requestBody->name = 'my website cert';
    $request->id = 461479;

    $response = $sdk->certificates->putCertificatesId($request);

    if ($response->certificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
