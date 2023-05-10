<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentMask;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchGetDocumentsRequest = new BatchGetDocumentsRequest();
    $request->batchGetDocumentsRequest->documents = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->batchGetDocumentsRequest->mask = new DocumentMask();
    $request->batchGetDocumentsRequest->mask->fieldPaths = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->batchGetDocumentsRequest->newTransaction = new TransactionOptions();
    $request->batchGetDocumentsRequest->newTransaction->readOnly = new ReadOnlyT();
    $request->batchGetDocumentsRequest->newTransaction->readOnly->readTime = 'deserunt';
    $request->batchGetDocumentsRequest->newTransaction->readWrite = new ReadWrite();
    $request->batchGetDocumentsRequest->newTransaction->readWrite->retryTransaction = 'suscipit';
    $request->batchGetDocumentsRequest->readTime = 'iure';
    $request->batchGetDocumentsRequest->transaction = 'magnam';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->database = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsBatchGetSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsBatchGet($request, $requestSecurity);

    if ($response->batchGetDocumentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->