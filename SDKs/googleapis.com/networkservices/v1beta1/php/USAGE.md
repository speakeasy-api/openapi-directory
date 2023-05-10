<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\EndpointMatcher;
use \OpenAPI\OpenAPI\Models\Shared\MetadataLabelMatcher;
use \OpenAPI\OpenAPI\Models\Shared\MetadataLabelMatcherMetadataLabelMatchCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataLabels;
use \OpenAPI\OpenAPI\Models\Shared\TrafficPortSelector;
use \OpenAPI\OpenAPI\Models\Shared\EndpointPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->endpointPolicyInput = new EndpointPolicyInput();
    $request->endpointPolicyInput->authorizationPolicy = 'provident';
    $request->endpointPolicyInput->clientTlsPolicy = 'distinctio';
    $request->endpointPolicyInput->description = 'quibusdam';
    $request->endpointPolicyInput->endpointMatcher = new EndpointMatcher();
    $request->endpointPolicyInput->endpointMatcher->metadataLabelMatcher = new MetadataLabelMatcher();
    $request->endpointPolicyInput->endpointMatcher->metadataLabelMatcher->metadataLabelMatchCriteria = MetadataLabelMatcherMetadataLabelMatchCriteriaEnum::MATCH_ANY;
    $request->endpointPolicyInput->endpointMatcher->metadataLabelMatcher->metadataLabels = [
        new MetadataLabels(),
        new MetadataLabels(),
        new MetadataLabels(),
        new MetadataLabels(),
    ];
    $request->endpointPolicyInput->labels = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->endpointPolicyInput->name = 'Raquel Bednar';
    $request->endpointPolicyInput->serverTlsPolicy = 'suscipit';
    $request->endpointPolicyInput->trafficPortSelector = new TrafficPortSelector();
    $request->endpointPolicyInput->trafficPortSelector->ports = [
        'minus',
        'placeat',
    ];
    $request->endpointPolicyInput->type = EndpointPolicyTypeEnum::SIDECAR_PROXY;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->endpointPolicyId = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsEndpointPoliciesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->