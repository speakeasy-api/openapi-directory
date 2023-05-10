<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationBySubjectAndAssocTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationBySubjectAndAssocTypeRequest();
    $request->associationType = 'corrupti';
    $request->evidence = 'provident';
    $request->excludeAutomaticAssertions = false;
    $request->object = 'distinctio';
    $request->rows = 844266;
    $request->start = 602763;
    $request->subject = 'nulla';
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->association->getAssociationBySubjectAndAssocType($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->