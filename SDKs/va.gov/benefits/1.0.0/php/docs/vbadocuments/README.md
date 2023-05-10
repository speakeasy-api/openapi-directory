# vbaDocuments

## Overview

VA Benefits document upload functionality

### Available Operations

* [getBenefitsDocumentUploadDownload](#getbenefitsdocumentuploaddownload) - Download zip of "what the server sees"
* [getBenefitsDocumentUploadStatus](#getbenefitsdocumentuploadstatus) - Get status for a previous benefits document upload
* [getBenefitsDocumentUploadStatusReport](#getbenefitsdocumentuploadstatusreport) - Get a bulk status report for a list of previous uploads
* [postBenefitsDocumentUpload](#postbenefitsdocumentupload) - Get a location for subsequent document upload PUT request
* [postBenefitsDocumentUploadValidateDocument](#postbenefitsdocumentuploadvalidatedocument) - Validate an individual document against system file requirements
* [putBenefitsDocumentUpload](#putbenefitsdocumentupload) - Accepts document upload.

## getBenefitsDocumentUploadDownload

An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBenefitsDocumentUploadDownloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBenefitsDocumentUploadDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBenefitsDocumentUploadDownloadRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $requestSecurity = new GetBenefitsDocumentUploadDownloadSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->vbaDocuments->getBenefitsDocumentUploadDownload($request, $requestSecurity);

    if ($response->getBenefitsDocumentUploadDownload200ApplicationZipBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBenefitsDocumentUploadStatus

Get status for a previous benefits document upload

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBenefitsDocumentUploadStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBenefitsDocumentUploadStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBenefitsDocumentUploadStatusRequest();
    $request->id = 'cb739205-9293-496f-aa75-96eb10faaa23';

    $requestSecurity = new GetBenefitsDocumentUploadStatusSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->vbaDocuments->getBenefitsDocumentUploadStatus($request, $requestSecurity);

    if ($response->getBenefitsDocumentUploadStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBenefitsDocumentUploadStatusReport

Get a bulk status report for a list of previous uploads

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DocumentUploadStatusGuidList;
use \OpenAPI\OpenAPI\Models\Operations\GetBenefitsDocumentUploadStatusReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentUploadStatusGuidList();
    $request->ids = [
        '6d8433c1-cd55-4c24-affd-f592287a7572',
        '6d8433c1-cd55-4c24-affd-f592287a7572',
    ];

    $requestSecurity = new GetBenefitsDocumentUploadStatusReportSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->vbaDocuments->getBenefitsDocumentUploadStatusReport($request, $requestSecurity);

    if ($response->getBenefitsDocumentUploadStatusReport200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBenefitsDocumentUpload

Get a location for subsequent document upload PUT request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBenefitsDocumentUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PostBenefitsDocumentUploadSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->vbaDocuments->postBenefitsDocumentUpload($requestSecurity);

    if ($response->postBenefitsDocumentUpload202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBenefitsDocumentUploadValidateDocument

Using this endpoint will decrease the likelihood of errors associated with individual documents during
the submission process. Validations performed:
* Document is a valid PDF (Note: `Content-Type` header value must be "application/pdf")
* Document does not have a user password (an owner password is acceptable)
* File size does not exceed 100 MB
* Page size does not exceed 21" x 21"

Each PDF document is sent as a direct file upload. The request body should contain nothing other than the document in
binary format. Binary multipart/form-data encoding is not supported. This endpoint does NOT validate metadata in JSON
format.

This endpoint does NOT initiate the claims intake process or submit data to that process. After using this endpoint,
individual PDF documents can be combined and submitted as a payload using PUT `/path`.

A `200` response confirms that the individual document provided passes the system requirements.

A `422` response indicates one or more problems with the document that should be resolved before submitting it in the
full document submission payload.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->vbaDocuments->postBenefitsDocumentUploadValidateDocument();

    if ($response->postBenefitsDocumentUploadValidateDocument200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putBenefitsDocumentUpload

Accepts document metadata, document binary, and attachment binaries. Full URL, including
query parameters, provided from POST `/document_uploads`.

## Example Payload

The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
endpoint. Most programming languages should have provisions for assembling a multipart
payload like this without having to do so manually.

```
--17de1ed8f01442b2a2d7a93506314b76
Content-Disposition: form-data; name="metadata"
Content-Type: application/json

{"veteranFirstName": "Jane",
"veteranLastName": "Doe",
"fileNumber": "012345678",
"zipCode": "97202",
"source": "MyVSO",
"docType": "21-22"
"businessLine": "CMP"}
--17de1ed8f01442b2a2d7a93506314b76
Content-Disposition: form-data; name="content"
Content-Type: application/pdf

<Binary PDF contents>
--17de1ed8f01442b2a2d7a93506314b76
Content-Disposition: form-data; name="attachment1"
Content-Type: application/pdf

<Binary PDF attachment contents>
--17de1ed8f01442b2a2d7a93506314b76--
```

This PUT request would have an overall HTTP Content-Type header:

```
Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
```

Note that the Content-Disposition parameter "name" in each part must be the expected values
"metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named 
exactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"
are invalid.

This is an example curl command:

```
curl -v -L -X PUT '<Location from \uploads>' -F 'metadata="{\"veteranFirstName\": \"Jane\",\"veteranLastName\": \"Doe\",\"fileNumber\": \"012345678\",\"zipCode\": \"97202\",\"source\": \"MyVSO\",\"docType\": \"21-22\",\"businessLine\": \"CMP\"}";type=application/json' -F 'content=@"content.pdf"' -F 'attachment1=@"file1.pdf"' -F 'attachment2=@"another_file.pdf"'
```


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutBenefitsDocumentUploadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutBenefitsDocumentUploadRequest();
    $request->contentMd5 = 'explicabo';

    $response = $sdk->vbaDocuments->putBenefitsDocumentUpload($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
