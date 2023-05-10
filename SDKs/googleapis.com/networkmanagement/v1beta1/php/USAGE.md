<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectivityTestInput;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineVersionEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\CloudFunctionEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunRevisionEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\EndpointNetworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProbingDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProbingDetailsAbortCauseEnum;
use \OpenAPI\OpenAPI\Models\Shared\EdgeLocation;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInfo;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\LatencyDistribution;
use \OpenAPI\OpenAPI\Models\Shared\LatencyPercentile;
use \OpenAPI\OpenAPI\Models\Shared\ProbingDetailsResultEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReachabilityDetails;
use \OpenAPI\OpenAPI\Models\Shared\ReachabilityDetailsResultEnum;
use \OpenAPI\OpenAPI\Models\Shared\Trace;
use \OpenAPI\OpenAPI\Models\Shared\Step;
use \OpenAPI\OpenAPI\Models\Shared\AbortInfo;
use \OpenAPI\OpenAPI\Models\Shared\AbortInfoCauseEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineVersionInfo;
use \OpenAPI\OpenAPI\Models\Shared\CloudFunctionInfo;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunRevisionInfo;
use \OpenAPI\OpenAPI\Models\Shared\CloudSQLInstanceInfo;
use \OpenAPI\OpenAPI\Models\Shared\DeliverInfo;
use \OpenAPI\OpenAPI\Models\Shared\DeliverInfoTargetEnum;
use \OpenAPI\OpenAPI\Models\Shared\DropInfo;
use \OpenAPI\OpenAPI\Models\Shared\DropInfoCauseEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallInfo;
use \OpenAPI\OpenAPI\Models\Shared\FirewallInfoFirewallRuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardInfo;
use \OpenAPI\OpenAPI\Models\Shared\ForwardInfoTargetEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleInfo;
use \OpenAPI\OpenAPI\Models\Shared\GKEMasterInfo;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInfo;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancerInfo;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancerInfoBackendTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancerBackend;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancerBackendHealthCheckFirewallStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancerInfoLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInfo;
use \OpenAPI\OpenAPI\Models\Shared\RouteInfo;
use \OpenAPI\OpenAPI\Models\Shared\RouteInfoNextHopTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteInfoRouteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StepStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpcConnectorInfo;
use \OpenAPI\OpenAPI\Models\Shared\VpnGatewayInfo;
use \OpenAPI\OpenAPI\Models\Shared\VpnTunnelInfo;
use \OpenAPI\OpenAPI\Models\Shared\VpnTunnelInfoRoutingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectivityTestInput = new ConnectivityTestInput();
    $request->connectivityTestInput->description = 'provident';
    $request->connectivityTestInput->destination = new EndpointInput();
    $request->connectivityTestInput->destination->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->destination->appEngineVersion->uri = 'https://terrible-nutrient.org';
    $request->connectivityTestInput->destination->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->destination->cloudFunction->uri = 'https://that-hellcat.name';
    $request->connectivityTestInput->destination->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->destination->cloudRunRevision->uri = 'https://high-hound.biz';
    $request->connectivityTestInput->destination->cloudSqlInstance = 'debitis';
    $request->connectivityTestInput->destination->forwardingRule = 'ipsa';
    $request->connectivityTestInput->destination->gkeMasterCluster = 'delectus';
    $request->connectivityTestInput->destination->instance = 'tempora';
    $request->connectivityTestInput->destination->ipAddress = 'suscipit';
    $request->connectivityTestInput->destination->network = 'molestiae';
    $request->connectivityTestInput->destination->networkType = EndpointNetworkTypeEnum::NON_GCP_NETWORK;
    $request->connectivityTestInput->destination->port = 812169;
    $request->connectivityTestInput->destination->projectId = 'voluptatum';
    $request->connectivityTestInput->labels = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->connectivityTestInput->name = 'Erica Bogisich III';
    $request->connectivityTestInput->probingDetails = new ProbingDetails();
    $request->connectivityTestInput->probingDetails->abortCause = ProbingDetailsAbortCauseEnum::NO_SOURCE_LOCATION;
    $request->connectivityTestInput->probingDetails->destinationEgressLocation = new EdgeLocation();
    $request->connectivityTestInput->probingDetails->destinationEgressLocation->metropolitanArea = 'sapiente';
    $request->connectivityTestInput->probingDetails->endpointInfo = new EndpointInfo();
    $request->connectivityTestInput->probingDetails->endpointInfo->destinationIp = 'quo';
    $request->connectivityTestInput->probingDetails->endpointInfo->destinationNetworkUri = 'odit';
    $request->connectivityTestInput->probingDetails->endpointInfo->destinationPort = 870013;
    $request->connectivityTestInput->probingDetails->endpointInfo->protocol = 'at';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourceAgentUri = 'maiores';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourceIp = 'molestiae';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourceNetworkUri = 'quod';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourcePort = 800911;
    $request->connectivityTestInput->probingDetails->error = new Status();
    $request->connectivityTestInput->probingDetails->error->code = 461479;
    $request->connectivityTestInput->probingDetails->error->details = [
        [
            'dolorum' => 'dicta',
            'nam' => 'officia',
            'occaecati' => 'fugit',
            'deleniti' => 'hic',
        ],
        [
            'totam' => 'beatae',
            'commodi' => 'molestiae',
            'modi' => 'qui',
            'impedit' => 'cum',
        ],
        [
            'ipsum' => 'excepturi',
            'aspernatur' => 'perferendis',
        ],
    ];
    $request->connectivityTestInput->probingDetails->error->message = 'ad';
    $request->connectivityTestInput->probingDetails->probingLatency = new LatencyDistribution();
    $request->connectivityTestInput->probingDetails->probingLatency->latencyPercentiles = [
        new LatencyPercentile(),
        new LatencyPercentile(),
        new LatencyPercentile(),
    ];
    $request->connectivityTestInput->probingDetails->result = ProbingDetailsResultEnum::PROBING_RESULT_UNSPECIFIED;
    $request->connectivityTestInput->probingDetails->sentProbeCount = 612096;
    $request->connectivityTestInput->probingDetails->successfulProbeCount = 222321;
    $request->connectivityTestInput->probingDetails->verifyTime = 'natus';
    $request->connectivityTestInput->protocol = 'laboriosam';
    $request->connectivityTestInput->reachabilityDetails = new ReachabilityDetails();
    $request->connectivityTestInput->reachabilityDetails->error = new Status();
    $request->connectivityTestInput->reachabilityDetails->error->code = 943749;
    $request->connectivityTestInput->reachabilityDetails->error->details = [
        [
            'in' => 'corporis',
            'iste' => 'iure',
            'saepe' => 'quidem',
        ],
        [
            'ipsa' => 'reiciendis',
        ],
        [
            'mollitia' => 'laborum',
            'dolores' => 'dolorem',
            'corporis' => 'explicabo',
        ],
        [
            'enim' => 'omnis',
            'nemo' => 'minima',
            'excepturi' => 'accusantium',
            'iure' => 'culpa',
        ],
    ];
    $request->connectivityTestInput->reachabilityDetails->error->message = 'doloribus';
    $request->connectivityTestInput->reachabilityDetails->result = ReachabilityDetailsResultEnum::UNDETERMINED;
    $request->connectivityTestInput->reachabilityDetails->traces = [
        new Trace(),
    ];
    $request->connectivityTestInput->reachabilityDetails->verifyTime = 'mollitia';
    $request->connectivityTestInput->relatedProjects = [
        'culpa',
    ];
    $request->connectivityTestInput->source = new EndpointInput();
    $request->connectivityTestInput->source->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->source->appEngineVersion->uri = 'http://young-pew.name';
    $request->connectivityTestInput->source->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->source->cloudFunction->uri = 'http://immediate-instructor.info';
    $request->connectivityTestInput->source->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->source->cloudRunRevision->uri = 'http://physical-chord.info';
    $request->connectivityTestInput->source->cloudSqlInstance = 'vitae';
    $request->connectivityTestInput->source->forwardingRule = 'laborum';
    $request->connectivityTestInput->source->gkeMasterCluster = 'animi';
    $request->connectivityTestInput->source->instance = 'enim';
    $request->connectivityTestInput->source->ipAddress = 'odit';
    $request->connectivityTestInput->source->network = 'quo';
    $request->connectivityTestInput->source->networkType = EndpointNetworkTypeEnum::NETWORK_TYPE_UNSPECIFIED;
    $request->connectivityTestInput->source->port = 949572;
    $request->connectivityTestInput->source->projectId = 'ipsam';
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'quasi';
    $request->key = 'error';
    $request->oauthToken = 'temporibus';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->testId = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalConnectivityTestsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->