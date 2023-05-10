# acmeChallengeSets

### Available Operations

* [acmednsAcmeChallengeSetsGet](#acmednsacmechallengesetsget) - Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.
* [acmednsAcmeChallengeSetsRotateChallenges](#acmednsacmechallengesetsrotatechallenges) - Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.

## acmednsAcmeChallengeSetsGet

Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AcmednsAcmeChallengeSetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcmednsAcmeChallengeSetsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->rootDomain = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $response = $sdk->acmeChallengeSets->acmednsAcmeChallengeSetsGet($request);

    if ($response->acmeChallengeSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## acmednsAcmeChallengeSetsRotateChallenges

Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AcmednsAcmeChallengeSetsRotateChallengesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RotateChallengesRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\AcmeTxtRecordInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcmednsAcmeChallengeSetsRotateChallengesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->rotateChallengesRequestInput = new RotateChallengesRequestInput();
    $request->rotateChallengesRequestInput->accessToken = 'iusto';
    $request->rotateChallengesRequestInput->keepExpiredRecords = false;
    $request->rotateChallengesRequestInput->recordsToAdd = [
        new AcmeTxtRecordInput(),
        new AcmeTxtRecordInput(),
        new AcmeTxtRecordInput(),
    ];
    $request->rotateChallengesRequestInput->recordsToRemove = [
        new AcmeTxtRecordInput(),
        new AcmeTxtRecordInput(),
    ];
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->rootDomain = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $response = $sdk->acmeChallengeSets->acmednsAcmeChallengeSetsRotateChallenges($request);

    if ($response->acmeChallengeSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
