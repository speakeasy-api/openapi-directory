<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Change;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordSet;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyHealthCheckTargets;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTarget;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyPrimaryBackupPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\ChangeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsChangesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->change = new Change();
    $request->change->additions = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->change->deletions = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->change->id = 'd9d8d69a-674e-40f4-a7cc-8796ed151a05';
    $request->change->isServing = false;
    $request->change->kind = 'repellendus';
    $request->change->startTime = 'sapiente';
    $request->change->status = ChangeStatusEnum::DONE;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->clientOperationId = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->managedZone = 'quod';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DnsChangesCreateSecurity();
    $requestSecurity->option1 = new DnsChangesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changes->dnsChangesCreate($request, $requestSecurity);

    if ($response->change !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->