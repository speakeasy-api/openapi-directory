# projects

### Available Operations

* [networkmanagementProjectsLocationsGlobalConnectivityTestsCreate](#networkmanagementprojectslocationsglobalconnectivitytestscreate) - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy](#networkmanagementprojectslocationsglobalconnectivitytestsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsList](#networkmanagementprojectslocationsglobalconnectivitytestslist) - Lists all Connectivity Tests owned by a project.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsPatch](#networkmanagementprojectslocationsglobalconnectivitytestspatch) - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsRerun](#networkmanagementprojectslocationsglobalconnectivitytestsrerun) - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy](#networkmanagementprojectslocationsglobalconnectivitytestssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions](#networkmanagementprojectslocationsglobalconnectivityteststestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networkmanagementProjectsLocationsGlobalOperationsCancel](#networkmanagementprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networkmanagementProjectsLocationsGlobalOperationsDelete](#networkmanagementprojectslocationsglobaloperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [networkmanagementProjectsLocationsGlobalOperationsGet](#networkmanagementprojectslocationsglobaloperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [networkmanagementProjectsLocationsGlobalOperationsList](#networkmanagementprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networkmanagementProjectsLocationsList](#networkmanagementprojectslocationslist) - Lists information about the supported locations for this service.

## networkmanagementProjectsLocationsGlobalConnectivityTestsCreate

Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->connectivityTestInput = new ConnectivityTestInput();
    $request->connectivityTestInput->description = 'praesentium';
    $request->connectivityTestInput->destination = new EndpointInput();
    $request->connectivityTestInput->destination->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->destination->appEngineVersion->uri = 'https://aware-objection.info';
    $request->connectivityTestInput->destination->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->destination->cloudFunction->uri = 'https://agile-arch-rival.info';
    $request->connectivityTestInput->destination->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->destination->cloudRunRevision->uri = 'http://wooden-cabin.info';
    $request->connectivityTestInput->destination->cloudSqlInstance = 'dolore';
    $request->connectivityTestInput->destination->forwardingRule = 'iusto';
    $request->connectivityTestInput->destination->gkeMasterCluster = 'dicta';
    $request->connectivityTestInput->destination->instance = 'harum';
    $request->connectivityTestInput->destination->ipAddress = 'enim';
    $request->connectivityTestInput->destination->network = 'accusamus';
    $request->connectivityTestInput->destination->networkType = EndpointNetworkTypeEnum::GCP_NETWORK;
    $request->connectivityTestInput->destination->port = 918236;
    $request->connectivityTestInput->destination->projectId = 'quae';
    $request->connectivityTestInput->labels = [
        'quidem' => 'molestias',
    ];
    $request->connectivityTestInput->name = 'Ervin Gleason';
    $request->connectivityTestInput->probingDetails = new ProbingDetails();
    $request->connectivityTestInput->probingDetails->abortCause = ProbingDetailsAbortCauseEnum::NO_SOURCE_LOCATION;
    $request->connectivityTestInput->probingDetails->destinationEgressLocation = new EdgeLocation();
    $request->connectivityTestInput->probingDetails->destinationEgressLocation->metropolitanArea = 'quasi';
    $request->connectivityTestInput->probingDetails->endpointInfo = new EndpointInfo();
    $request->connectivityTestInput->probingDetails->endpointInfo->destinationIp = 'repudiandae';
    $request->connectivityTestInput->probingDetails->endpointInfo->destinationNetworkUri = 'sint';
    $request->connectivityTestInput->probingDetails->endpointInfo->destinationPort = 83112;
    $request->connectivityTestInput->probingDetails->endpointInfo->protocol = 'itaque';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourceAgentUri = 'incidunt';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourceIp = 'enim';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourceNetworkUri = 'consequatur';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourcePort = 667411;
    $request->connectivityTestInput->probingDetails->error = new Status();
    $request->connectivityTestInput->probingDetails->error->code = 842342;
    $request->connectivityTestInput->probingDetails->error->details = [
        [
            'distinctio' => 'quibusdam',
            'labore' => 'modi',
            'qui' => 'aliquid',
        ],
    ];
    $request->connectivityTestInput->probingDetails->error->message = 'cupiditate';
    $request->connectivityTestInput->probingDetails->probingLatency = new LatencyDistribution();
    $request->connectivityTestInput->probingDetails->probingLatency->latencyPercentiles = [
        new LatencyPercentile(),
        new LatencyPercentile(),
        new LatencyPercentile(),
    ];
    $request->connectivityTestInput->probingDetails->result = ProbingDetailsResultEnum::PROBING_RESULT_UNSPECIFIED;
    $request->connectivityTestInput->probingDetails->sentProbeCount = 164940;
    $request->connectivityTestInput->probingDetails->successfulProbeCount = 828940;
    $request->connectivityTestInput->probingDetails->verifyTime = 'ipsam';
    $request->connectivityTestInput->protocol = 'alias';
    $request->connectivityTestInput->reachabilityDetails = new ReachabilityDetails();
    $request->connectivityTestInput->reachabilityDetails->error = new Status();
    $request->connectivityTestInput->reachabilityDetails->error->code = 146441;
    $request->connectivityTestInput->reachabilityDetails->error->details = [
        [
            'tempora' => 'facilis',
            'tempore' => 'labore',
            'delectus' => 'eum',
        ],
        [
            'eligendi' => 'sint',
        ],
        [
            'provident' => 'necessitatibus',
            'sint' => 'officia',
        ],
    ];
    $request->connectivityTestInput->reachabilityDetails->error->message = 'dolor';
    $request->connectivityTestInput->reachabilityDetails->result = ReachabilityDetailsResultEnum::UNDETERMINED;
    $request->connectivityTestInput->reachabilityDetails->traces = [
        new Trace(),
        new Trace(),
        new Trace(),
        new Trace(),
    ];
    $request->connectivityTestInput->reachabilityDetails->verifyTime = 'dolorum';
    $request->connectivityTestInput->relatedProjects = [
        'in',
        'illum',
    ];
    $request->connectivityTestInput->source = new EndpointInput();
    $request->connectivityTestInput->source->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->source->appEngineVersion->uri = 'https://right-burn.biz';
    $request->connectivityTestInput->source->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->source->cloudFunction->uri = 'https://stupendous-handmaiden.info';
    $request->connectivityTestInput->source->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->source->cloudRunRevision->uri = 'https://unaware-department.name';
    $request->connectivityTestInput->source->cloudSqlInstance = 'enim';
    $request->connectivityTestInput->source->forwardingRule = 'accusamus';
    $request->connectivityTestInput->source->gkeMasterCluster = 'delectus';
    $request->connectivityTestInput->source->instance = 'quidem';
    $request->connectivityTestInput->source->ipAddress = 'provident';
    $request->connectivityTestInput->source->network = 'nam';
    $request->connectivityTestInput->source->networkType = EndpointNetworkTypeEnum::GCP_NETWORK;
    $request->connectivityTestInput->source->port = 501324;
    $request->connectivityTestInput->source->projectId = 'deleniti';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->key = 'vel';
    $request->oauthToken = 'natus';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->testId = 'perferendis';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'magnam';

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

## networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->key = 'natus';
    $request->oauthToken = 'nobis';
    $request->optionsRequestedPolicyVersion = 428769;
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->resource = 'aspernatur';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsList

Lists all Connectivity Tests owned by a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'quos';
    $request->filter = 'sint';
    $request->key = 'accusantium';
    $request->oauthToken = 'mollitia';
    $request->orderBy = 'reiciendis';
    $request->pageSize = 652103;
    $request->pageToken = 'ad';
    $request->parent = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalConnectivityTestsList($request, $requestSecurity);

    if ($response->listConnectivityTestsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsPatch

Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->connectivityTestInput = new ConnectivityTestInput();
    $request->connectivityTestInput->description = 'quasi';
    $request->connectivityTestInput->destination = new EndpointInput();
    $request->connectivityTestInput->destination->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->destination->appEngineVersion->uri = 'http://worrisome-teenager.biz';
    $request->connectivityTestInput->destination->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->destination->cloudFunction->uri = 'https://miserly-pruner.info';
    $request->connectivityTestInput->destination->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->destination->cloudRunRevision->uri = 'http://burly-trachoma.info';
    $request->connectivityTestInput->destination->cloudSqlInstance = 'expedita';
    $request->connectivityTestInput->destination->forwardingRule = 'nihil';
    $request->connectivityTestInput->destination->gkeMasterCluster = 'repellat';
    $request->connectivityTestInput->destination->instance = 'quibusdam';
    $request->connectivityTestInput->destination->ipAddress = 'sed';
    $request->connectivityTestInput->destination->network = 'saepe';
    $request->connectivityTestInput->destination->networkType = EndpointNetworkTypeEnum::NON_GCP_NETWORK;
    $request->connectivityTestInput->destination->port = 37559;
    $request->connectivityTestInput->destination->projectId = 'consequuntur';
    $request->connectivityTestInput->labels = [
        'natus' => 'magni',
        'sunt' => 'quo',
        'illum' => 'pariatur',
    ];
    $request->connectivityTestInput->name = 'Nathaniel Marks';
    $request->connectivityTestInput->probingDetails = new ProbingDetails();
    $request->connectivityTestInput->probingDetails->abortCause = ProbingDetailsAbortCauseEnum::PROBING_ABORT_CAUSE_UNSPECIFIED;
    $request->connectivityTestInput->probingDetails->destinationEgressLocation = new EdgeLocation();
    $request->connectivityTestInput->probingDetails->destinationEgressLocation->metropolitanArea = 'ab';
    $request->connectivityTestInput->probingDetails->endpointInfo = new EndpointInfo();
    $request->connectivityTestInput->probingDetails->endpointInfo->destinationIp = 'maiores';
    $request->connectivityTestInput->probingDetails->endpointInfo->destinationNetworkUri = 'quidem';
    $request->connectivityTestInput->probingDetails->endpointInfo->destinationPort = 373291;
    $request->connectivityTestInput->probingDetails->endpointInfo->protocol = 'voluptate';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourceAgentUri = 'autem';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourceIp = 'nam';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourceNetworkUri = 'eaque';
    $request->connectivityTestInput->probingDetails->endpointInfo->sourcePort = 866383;
    $request->connectivityTestInput->probingDetails->error = new Status();
    $request->connectivityTestInput->probingDetails->error->code = 365496;
    $request->connectivityTestInput->probingDetails->error->details = [
        [
            'fugiat' => 'amet',
        ],
        [
            'cumque' => 'corporis',
        ],
        [
            'libero' => 'nobis',
            'dolores' => 'quis',
            'totam' => 'dignissimos',
            'eaque' => 'quis',
        ],
        [
            'eos' => 'perferendis',
        ],
    ];
    $request->connectivityTestInput->probingDetails->error->message = 'dolores';
    $request->connectivityTestInput->probingDetails->probingLatency = new LatencyDistribution();
    $request->connectivityTestInput->probingDetails->probingLatency->latencyPercentiles = [
        new LatencyPercentile(),
        new LatencyPercentile(),
        new LatencyPercentile(),
        new LatencyPercentile(),
    ];
    $request->connectivityTestInput->probingDetails->result = ProbingDetailsResultEnum::UNREACHABLE;
    $request->connectivityTestInput->probingDetails->sentProbeCount = 223924;
    $request->connectivityTestInput->probingDetails->successfulProbeCount = 874573;
    $request->connectivityTestInput->probingDetails->verifyTime = 'nostrum';
    $request->connectivityTestInput->protocol = 'hic';
    $request->connectivityTestInput->reachabilityDetails = new ReachabilityDetails();
    $request->connectivityTestInput->reachabilityDetails->error = new Status();
    $request->connectivityTestInput->reachabilityDetails->error->code = 928082;
    $request->connectivityTestInput->reachabilityDetails->error->details = [
        [
            'perspiciatis' => 'voluptatem',
            'porro' => 'consequuntur',
            'blanditiis' => 'error',
        ],
        [
            'occaecati' => 'rerum',
        ],
        [
            'asperiores' => 'earum',
        ],
    ];
    $request->connectivityTestInput->reachabilityDetails->error->message = 'modi';
    $request->connectivityTestInput->reachabilityDetails->result = ReachabilityDetailsResultEnum::AMBIGUOUS;
    $request->connectivityTestInput->reachabilityDetails->traces = [
        new Trace(),
        new Trace(),
        new Trace(),
    ];
    $request->connectivityTestInput->reachabilityDetails->verifyTime = 'deleniti';
    $request->connectivityTestInput->relatedProjects = [
        'provident',
        'nobis',
        'libero',
        'delectus',
    ];
    $request->connectivityTestInput->source = new EndpointInput();
    $request->connectivityTestInput->source->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->source->appEngineVersion->uri = 'http://mysterious-grass.biz';
    $request->connectivityTestInput->source->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->source->cloudFunction->uri = 'http://ecstatic-commonsense.biz';
    $request->connectivityTestInput->source->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->source->cloudRunRevision->uri = 'https://nimble-reporter.info';
    $request->connectivityTestInput->source->cloudSqlInstance = 'dignissimos';
    $request->connectivityTestInput->source->forwardingRule = 'reiciendis';
    $request->connectivityTestInput->source->gkeMasterCluster = 'amet';
    $request->connectivityTestInput->source->instance = 'dolorum';
    $request->connectivityTestInput->source->ipAddress = 'numquam';
    $request->connectivityTestInput->source->network = 'veritatis';
    $request->connectivityTestInput->source->networkType = EndpointNetworkTypeEnum::NETWORK_TYPE_UNSPECIFIED;
    $request->connectivityTestInput->source->port = 56418;
    $request->connectivityTestInput->source->projectId = 'iure';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'quidem';
    $request->key = 'voluptatibus';
    $request->name = 'Faye Daugherty PhD';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->updateMask = 'dolorum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalConnectivityTestsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsRerun

Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'omnis' => 'necessitatibus',
        'distinctio' => 'asperiores',
        'nihil' => 'ipsum',
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'eius';
    $request->key = 'aspernatur';
    $request->name = 'Wendy Rosenbaum';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalConnectivityTestsRerun($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'similique';
    $request->setIamPolicyRequest->policy->version = 55;
    $request->setIamPolicyRequest->updateMask = 'at';
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'quod';
    $request->key = 'officiis';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->resource = 'a';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'quisquam',
    ];
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempore';
    $request->fields = 'accusamus';
    $request->key = 'numquam';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->resource = 'sapiente';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkmanagementProjectsLocationsGlobalOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'neque' => 'sed',
        'vel' => 'libero',
        'voluptas' => 'deserunt',
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'qui';
    $request->key = 'cupiditate';
    $request->name = 'Miss Jody Rogahn';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkmanagementProjectsLocationsGlobalOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestias';
    $request->fields = 'temporibus';
    $request->key = 'qui';
    $request->name = 'Beverly Cummerata II';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkmanagementProjectsLocationsGlobalOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'ipsum';
    $request->key = 'veritatis';
    $request->name = 'Isaac Reynolds DVM';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkmanagementProjectsLocationsGlobalOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsGlobalOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsGlobalOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'quas';
    $request->filter = 'itaque';
    $request->key = 'consequatur';
    $request->name = 'Marcos Schaden';
    $request->oauthToken = 'facilis';
    $request->pageSize = 586410;
    $request->pageToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new NetworkmanagementProjectsLocationsGlobalOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsGlobalOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkmanagementProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkmanagementProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkmanagementProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'omnis';
    $request->filter = 'quis';
    $request->key = 'ipsum';
    $request->name = 'Karl Feeney';
    $request->oauthToken = 'dignissimos';
    $request->pageSize = 941378;
    $request->pageToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new NetworkmanagementProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkmanagementProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
