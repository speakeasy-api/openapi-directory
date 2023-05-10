# associationsessions

### Available Operations

* [adsensehostAssociationsessionsStart](#adsensehostassociationsessionsstart) - Create an association session for initiating an association with an AdSense user.
* [adsensehostAssociationsessionsVerify](#adsensehostassociationsessionsverify) - Verify an association session after the association callback returns from AdSense signup.

## adsensehostAssociationsessionsStart

Create an association session for initiating an association with an AdSense user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAssociationsessionsStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAssociationsessionsStartProductCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAssociationsessionsStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAssociationsessionsStartRequest();
    $request->alt = AltEnum::CSV;
    $request->callbackUrl = 'accusantium';
    $request->fields = 'ab';
    $request->key = 'maiores';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->productCode = [
        AdsensehostAssociationsessionsStartProductCodeEnum::AFMC,
        AdsensehostAssociationsessionsStartProductCodeEnum::AFMC,
    ];
    $request->quotaUser = 'nam';
    $request->userIp = 'eaque';
    $request->userLocale = 'pariatur';
    $request->websiteLocale = 'nemo';
    $request->websiteUrl = 'voluptatibus';

    $requestSecurity = new AdsensehostAssociationsessionsStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->associationsessions->adsensehostAssociationsessionsStart($request, $requestSecurity);

    if ($response->associationSession !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAssociationsessionsVerify

Verify an association session after the association callback returns from AdSense signup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAssociationsessionsVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAssociationsessionsVerifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAssociationsessionsVerifyRequest();
    $request->alt = AltEnum::CSV;
    $request->fields = 'fugiat';
    $request->key = 'amet';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->token = 'corporis';
    $request->userIp = 'hic';

    $requestSecurity = new AdsensehostAssociationsessionsVerifySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->associationsessions->adsensehostAssociationsessionsVerify($request, $requestSecurity);

    if ($response->associationSession !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
