<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NoteInput;
use \OpenAPI\OpenAPI\Models\Shared\Section;
use \OpenAPI\OpenAPI\Models\Shared\ListContent;
use \OpenAPI\OpenAPI\Models\Shared\ListItem;
use \OpenAPI\OpenAPI\Models\Shared\TextContent;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\KeepNotesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeepNotesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->noteInput = new NoteInput();
    $request->noteInput->body = new Section();
    $request->noteInput->body->list = new ListContent();
    $request->noteInput->body->list->listItems = [
        new ListItem(),
        new ListItem(),
        new ListItem(),
    ];
    $request->noteInput->body->text = new TextContent();
    $request->noteInput->body->text->text = 'distinctio';
    $request->noteInput->title = 'Dr.';
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'illum';
    $request->key = 'vel';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new KeepNotesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notes->keepNotesCreate($request, $requestSecurity);

    if ($response->note !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->