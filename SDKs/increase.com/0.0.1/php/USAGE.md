<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActionARealTimeDecisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParameters;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersCardAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersCardAuthorizationDecisionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersDigitalWalletAuthentication;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersDigitalWalletToken;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersDigitalWalletTokenApproval;
use \OpenAPI\OpenAPI\Models\Shared\ActionARealTimeDecisionParametersDigitalWalletTokenDecline;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionARealTimeDecisionRequest();
    $request->actionARealTimeDecisionParameters = new ActionARealTimeDecisionParameters();
    $request->actionARealTimeDecisionParameters->cardAuthorization = new ActionARealTimeDecisionParametersCardAuthorization();
    $request->actionARealTimeDecisionParameters->cardAuthorization->decision = ActionARealTimeDecisionParametersCardAuthorizationDecisionEnum::DECLINE;
    $request->actionARealTimeDecisionParameters->digitalWalletAuthentication = new ActionARealTimeDecisionParametersDigitalWalletAuthentication();
    $request->actionARealTimeDecisionParameters->digitalWalletAuthentication->result = ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnum::FAILURE;
    $request->actionARealTimeDecisionParameters->digitalWalletToken = new ActionARealTimeDecisionParametersDigitalWalletToken();
    $request->actionARealTimeDecisionParameters->digitalWalletToken->approval = new ActionARealTimeDecisionParametersDigitalWalletTokenApproval();
    $request->actionARealTimeDecisionParameters->digitalWalletToken->approval->cardProfileId = 'distinctio';
    $request->actionARealTimeDecisionParameters->digitalWalletToken->approval->email = 'Leda_Stiedemann@hotmail.com';
    $request->actionARealTimeDecisionParameters->digitalWalletToken->approval->phone = '1-663-528-0923 x478';
    $request->actionARealTimeDecisionParameters->digitalWalletToken->decline = new ActionARealTimeDecisionParametersDigitalWalletTokenDecline();
    $request->actionARealTimeDecisionParameters->digitalWalletToken->decline->reason = 'voluptatum';
    $request->realTimeDecisionId = 'iusto';

    $response = $sdk->actionARealTimeDecision($request);

    if ($response->realTimeDecision !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->