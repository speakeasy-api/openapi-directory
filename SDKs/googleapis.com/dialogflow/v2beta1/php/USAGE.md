<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1CompileSuggestionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1CompileSuggestionRequest = new GoogleCloudDialogflowV2beta1CompileSuggestionRequest();
    $request->googleCloudDialogflowV2beta1CompileSuggestionRequest->contextSize = 592845;
    $request->googleCloudDialogflowV2beta1CompileSuggestionRequest->latestMessage = 'distinctio';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity();
    $requestSecurity->option1 = new DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsConversationsParticipantsSuggestionsCompile($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1CompileSuggestionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->