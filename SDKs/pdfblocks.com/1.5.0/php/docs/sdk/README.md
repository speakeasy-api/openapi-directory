# SDK

## Overview

PDF Blocks is a secure, reliable, and fast API to work with PDF documents. Actions include: Merge PDF documents, add or remove passwords, add watermarks, remove, extract, reverse, and rotate pages, and more.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1>
### Available Operations

* [addImageWatermarkV1](#addimagewatermarkv1) - Add an image watermark to a PDF
* [addPasswordV1](#addpasswordv1) - Add a password to a PDF
* [addRestrictionsV1](#addrestrictionsv1) - Add restrictions to a PDF
* [addTextWatermarkV1](#addtextwatermarkv1) - Add a text watermark to a PDF
* [extractPagesV1](#extractpagesv1) - Extract pages from a PDF
* [mergeDocumentsV1](#mergedocumentsv1) - Merge PDF documents
* [removePagesV1](#removepagesv1) - Remove pages from a PDF
* [removePasswordV1](#removepasswordv1) - Remove the password from a PDF
* [removeRestrictionsV1](#removerestrictionsv1) - Remove the restrictions from a PDF
* [removeSignaturesV1](#removesignaturesv1) - Remove the signatures from a PDF
* [reversePagesV1](#reversepagesv1) - Reverse the pages of a PDF
* [rotatePagesV1](#rotatepagesv1) - Rotate pages in a PDF

## addImageWatermarkV1

Add an image watermark to each page of a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-watermark-image>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddImageWatermarkV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddImageWatermarkV1RequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\AddImageWatermarkV1RequestBodyImage;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddImageWatermarkV1RequestBody();
    $request->file = new AddImageWatermarkV1RequestBodyFile();
    $request->file->content = 'unde';
    $request->file->file = 'nulla';
    $request->image = new AddImageWatermarkV1RequestBodyImage();
    $request->image->content = 'corrupti';
    $request->image->image = 'illum';
    $request->margin = 1;
    $request->transparency = 50;

    $response = $sdk->sdk->addImageWatermarkV1($request);

    if ($response->addImageWatermarkV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addPasswordV1

Protect a PDF document with a password. Encrypt the PDF document to prevent unauthorized access.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-password>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddPasswordV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddPasswordV1RequestBodyEncryptionAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddPasswordV1RequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddPasswordV1RequestBody();
    $request->encryptionAlgorithm = AddPasswordV1RequestBodyEncryptionAlgorithmEnum::AES128;
    $request->file = new AddPasswordV1RequestBodyFile();
    $request->file->content = 'vel';
    $request->file->file = 'error';
    $request->password = 'pa$$word';

    $response = $sdk->sdk->addPasswordV1($request);

    if ($response->addPasswordV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addRestrictionsV1

Add restrictions to prevent copying, printing, and modifying a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddRestrictionsV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddRestrictionsV1RequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddRestrictionsV1RequestBody();
    $request->allowAccessibility = false;
    $request->allowAssembleDocument = false;
    $request->allowChangeContent = false;
    $request->allowCommentAndFillForm = false;
    $request->allowCopyContent = false;
    $request->allowFillForm = false;
    $request->allowPrint = false;
    $request->allowPrintHighResolution = false;
    $request->encryptionAlgorithm = AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum::AES128;
    $request->file = new AddRestrictionsV1RequestBodyFile();
    $request->file->content = 'deserunt';
    $request->file->file = 'suscipit';
    $request->ownerPassword = 'pa$$word';
    $request->userPassword = 'pa$$word';

    $response = $sdk->sdk->addRestrictionsV1($request);

    if ($response->addRestrictionsV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addTextWatermarkV1

Add a text watermark to each page of a PDF document. Choose from several watermark templates.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-watermark-text>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTextWatermarkV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddTextWatermarkV1RequestBodyColorEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddTextWatermarkV1RequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTextWatermarkV1RequestBody();
    $request->color = AddTextWatermarkV1RequestBodyColorEnum::GRAY;
    $request->file = new AddTextWatermarkV1RequestBodyFile();
    $request->file->content = 'iure';
    $request->file->file = 'magnam';
    $request->line1 = 'Jane Doe';
    $request->line2 = 'ACME, Inc';
    $request->line3 = 'Confidential';
    $request->margin = 1;
    $request->template = 1001;
    $request->transparency = 75;

    $response = $sdk->sdk->addTextWatermarkV1($request);

    if ($response->addTextWatermarkV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## extractPagesV1

Extract one or more pages from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/extract-pages>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExtractPagesV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ExtractPagesV1RequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExtractPagesV1RequestBody();
    $request->file = new ExtractPagesV1RequestBodyFile();
    $request->file->content = 'debitis';
    $request->file->file = 'ipsa';
    $request->firstPage = 963663;
    $request->lastPage = 272656;

    $response = $sdk->sdk->extractPagesV1($request);

    if ($response->extractPagesV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergeDocumentsV1

Combine multiple PDF documents into a single PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/merge-documents>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergeDocumentsV1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeDocumentsV1RequestBody();
    $request->file = [
        'molestiae',
        'minus',
    ];

    $response = $sdk->sdk->mergeDocumentsV1($request);

    if ($response->mergeDocumentsV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removePagesV1

Remove one or more pages from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-pages>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemovePagesV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RemovePagesV1RequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemovePagesV1RequestBody();
    $request->file = new RemovePagesV1RequestBodyFile();
    $request->file->content = 'placeat';
    $request->file->file = 'voluptatum';
    $request->firstPage = 479977;
    $request->lastPage = 568045;

    $response = $sdk->sdk->removePagesV1($request);

    if ($response->removePagesV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removePasswordV1

Remove the password from an encrypted PDF document. The PDF document will no longer require a password to open.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-password>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemovePasswordV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RemovePasswordV1RequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemovePasswordV1RequestBody();
    $request->file = new RemovePasswordV1RequestBodyFile();
    $request->file->content = 'nisi';
    $request->file->file = 'recusandae';
    $request->password = 'pa$$word';

    $response = $sdk->sdk->removePasswordV1($request);

    if ($response->removePasswordV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeRestrictionsV1

Remove all the restrictions from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveRestrictionsV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RemoveRestrictionsV1RequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveRestrictionsV1RequestBody();
    $request->file = new RemoveRestrictionsV1RequestBodyFile();
    $request->file->content = 'temporibus';
    $request->file->file = 'ab';

    $response = $sdk->sdk->removeRestrictionsV1($request);

    if ($response->removeRestrictionsV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeSignaturesV1

Remove the cryptographic signatures and timestamps from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-signatures>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSignaturesV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSignaturesV1RequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveSignaturesV1RequestBody();
    $request->file = new RemoveSignaturesV1RequestBodyFile();
    $request->file->content = 'quis';
    $request->file->file = 'veritatis';

    $response = $sdk->sdk->removeSignaturesV1($request);

    if ($response->removeSignaturesV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reversePagesV1

Reverse the order of the pages of a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/reverse-pages>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReversePagesV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReversePagesV1RequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReversePagesV1RequestBody();
    $request->file = new ReversePagesV1RequestBodyFile();
    $request->file->content = 'deserunt';
    $request->file->file = 'perferendis';

    $response = $sdk->sdk->reversePagesV1($request);

    if ($response->reversePagesV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rotatePagesV1

Rotate one or more pages in a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/rotate-pages>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RotatePagesV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RotatePagesV1RequestBodyAngleEnum;
use \OpenAPI\OpenAPI\Models\Operations\RotatePagesV1RequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RotatePagesV1RequestBody();
    $request->angle = RotatePagesV1RequestBodyAngleEnum::ONE_HUNDRED_AND_EIGHTY;
    $request->file = new RotatePagesV1RequestBodyFile();
    $request->file->content = 'repellendus';
    $request->file->file = 'sapiente';
    $request->firstPage = 778157;
    $request->lastPage = 140350;

    $response = $sdk->sdk->rotatePagesV1($request);

    if ($response->rotatePagesV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
