<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->memberSlug = 'deserunt';
    $request->workspaceSlug = 'perferendis';

    $requestSecurity = new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activities->deleteWorkspaceSlugMembersMemberSlugActivitiesId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->