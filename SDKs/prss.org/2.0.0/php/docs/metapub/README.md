# metaPub

## Overview

Endpoints to access MetaPub ingest functionality such as synchronizing producer metadata to programs and episodes. These API operations are deprecated. Use the pieces endpoints instead.

### Available Operations

* [~~getApiV2MetapubProgramInformationBatchBatchId~~](#getapiv2metapubprograminformationbatchbatchid) - Get an EPG batch operation. :warning: **Deprecated**
* [~~postApiV2MetapubProgramInformationBatch~~](#postapiv2metapubprograminformationbatch) - Create a batch operation on EPG information. :warning: **Deprecated**

## ~~getApiV2MetapubProgramInformationBatchBatchId~~

Gets the batch information which can be used to check the status of the operation or retrieve more details if the batch fails.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2MetapubProgramInformationBatchBatchIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2MetapubProgramInformationBatchBatchIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2MetapubProgramInformationBatchBatchIdRequest();
    $request->batchId = 800911;

    $requestSecurity = new GetApiV2MetapubProgramInformationBatchBatchIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->metaPub->getApiV2MetapubProgramInformationBatchBatchId($request, $requestSecurity);

    if ($response->programInformationBatch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~postApiV2MetapubProgramInformationBatch~~

Create a batch to process the metadata of one or more electronic program guide (EPG) programs using metadata that has been uploaded to the customer's CD Drive. If multiple EPG programs are present in the metadata, they will all be updated, however updates across programs are not atomic. Note that an EPG program maps to the ContentDepot concept of an episode which is also known as a "program instance".

A batch operation must be explicitly created rather than the server attempting to detect new metadata in order to allow for all the content to be uploaded including any supporting content like images. A batch operation is accepted and queued for asynchronous processing at a later time. A client can poll the batch periodically to determine when it completes and the resulting state.


Find RadioDns to ContentDepot Mapping here
</api/epg-cd-mapping.html>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2MetapubProgramInformationBatchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2MetapubProgramInformationBatchRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2MetapubProgramInformationBatchRequestBodyProgram;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2MetapubProgramInformationBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV2MetapubProgramInformationBatchRequestBody();
    $request->format = PostApiV2MetapubProgramInformationBatchRequestBodyFormatEnum::RADIODNS;
    $request->name = 'Deanna Sauer MD';
    $request->program = new PostApiV2MetapubProgramInformationBatchRequestBodyProgram();
    $request->program->airDate = 'officia';
    $request->program->title = 'Ms.';
    $request->uri = 'http://miserly-usage.net';

    $requestSecurity = new PostApiV2MetapubProgramInformationBatchSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->metaPub->postApiV2MetapubProgramInformationBatch($request, $requestSecurity);

    if ($response->programInformationBatch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
