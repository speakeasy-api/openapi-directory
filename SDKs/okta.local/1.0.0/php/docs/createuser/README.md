# createUser

### Available Operations

* [createUserInGroup](#createuseringroup) - Create User in Group

## createUserInGroup

Create User in Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserInGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserInGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserInGroupRequestBodyProfile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserInGroupRequest();
    $request->requestBody = new CreateUserInGroupRequestBody();
    $request->requestBody->groupIds = [
        '{{groupId}}',
        '{{groupId}}',
        '{{groupId}}',
        '{{groupId}}',
    ];
    $request->requestBody->profile = new CreateUserInGroupRequestBodyProfile();
    $request->requestBody->profile->email = 'isaac@{{email-suffix}}';
    $request->requestBody->profile->firstName = 'Isaac';
    $request->requestBody->profile->lastName = 'Brock';
    $request->requestBody->profile->login = 'isaac@{{email-suffix}}';
    $request->activate = 'false';

    $response = $sdk->createUser->createUserInGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
