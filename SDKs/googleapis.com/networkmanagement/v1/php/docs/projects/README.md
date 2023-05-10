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
use \OpenAPI\OpenAPI\Models\Shared\Endpoint;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineVersionEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\CloudFunctionEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunRevisionEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\EndpointNetworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReachabilityDetails;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\ReachabilityDetailsResultEnum;
use \OpenAPI\OpenAPI\Models\Shared\Trace;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInfo;
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
    $request->connectivityTestInput->description = 'reiciendis';
    $request->connectivityTestInput->destination = new Endpoint();
    $request->connectivityTestInput->destination->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->destination->appEngineVersion->uri = 'https://prize-plier.biz';
    $request->connectivityTestInput->destination->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->destination->cloudFunction->uri = 'http://growing-cappelletti.net';
    $request->connectivityTestInput->destination->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->destination->cloudRunRevision->uri = 'http://palatable-forum.biz';
    $request->connectivityTestInput->destination->cloudSqlInstance = 'excepturi';
    $request->connectivityTestInput->destination->gkeMasterCluster = 'accusantium';
    $request->connectivityTestInput->destination->instance = 'iure';
    $request->connectivityTestInput->destination->ipAddress = 'culpa';
    $request->connectivityTestInput->destination->network = 'doloribus';
    $request->connectivityTestInput->destination->networkType = EndpointNetworkTypeEnum::NON_GCP_NETWORK;
    $request->connectivityTestInput->destination->port = 102044;
    $request->connectivityTestInput->destination->projectId = 'mollitia';
    $request->connectivityTestInput->labels = [
        'culpa' => 'consequuntur',
    ];
    $request->connectivityTestInput->name = 'Shaun McCullough';
    $request->connectivityTestInput->protocol = 'quam';
    $request->connectivityTestInput->reachabilityDetails = new ReachabilityDetails();
    $request->connectivityTestInput->reachabilityDetails->error = new Status();
    $request->connectivityTestInput->reachabilityDetails->error->code = 474697;
    $request->connectivityTestInput->reachabilityDetails->error->details = [
        [
            'quia' => 'quis',
            'vitae' => 'laborum',
            'animi' => 'enim',
        ],
    ];
    $request->connectivityTestInput->reachabilityDetails->error->message = 'odit';
    $request->connectivityTestInput->reachabilityDetails->result = ReachabilityDetailsResultEnum::AMBIGUOUS;
    $request->connectivityTestInput->reachabilityDetails->traces = [
        new Trace(),
    ];
    $request->connectivityTestInput->reachabilityDetails->verifyTime = 'tenetur';
    $request->connectivityTestInput->relatedProjects = [
        'id',
        'possimus',
    ];
    $request->connectivityTestInput->source = new Endpoint();
    $request->connectivityTestInput->source->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->source->appEngineVersion->uri = 'http://bumpy-overview.org';
    $request->connectivityTestInput->source->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->source->cloudFunction->uri = 'https://bubbly-waterbed.org';
    $request->connectivityTestInput->source->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->source->cloudRunRevision->uri = 'https://klutzy-level.org';
    $request->connectivityTestInput->source->cloudSqlInstance = 'ipsa';
    $request->connectivityTestInput->source->gkeMasterCluster = 'omnis';
    $request->connectivityTestInput->source->instance = 'voluptate';
    $request->connectivityTestInput->source->ipAddress = 'cum';
    $request->connectivityTestInput->source->network = 'perferendis';
    $request->connectivityTestInput->source->networkType = EndpointNetworkTypeEnum::NETWORK_TYPE_UNSPECIFIED;
    $request->connectivityTestInput->source->port = 441711;
    $request->connectivityTestInput->source->projectId = 'ut';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->oauthToken = 'dicta';
    $request->parent = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->testId = 'accusamus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'repudiandae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'excepturi';
    $request->key = 'pariatur';
    $request->oauthToken = 'modi';
    $request->optionsRequestedPolicyVersion = 508969;
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->resource = 'voluptates';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'repudiandae';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'enim';
    $request->filter = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'quibusdam';
    $request->orderBy = 'explicabo';
    $request->pageSize = 647174;
    $request->pageToken = 'distinctio';
    $request->parent = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

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
use \OpenAPI\OpenAPI\Models\Shared\Endpoint;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineVersionEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\CloudFunctionEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunRevisionEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\EndpointNetworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReachabilityDetails;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\ReachabilityDetailsResultEnum;
use \OpenAPI\OpenAPI\Models\Shared\Trace;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInfo;
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
    $request->connectivityTestInput->description = 'cupiditate';
    $request->connectivityTestInput->destination = new Endpoint();
    $request->connectivityTestInput->destination->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->destination->appEngineVersion->uri = 'https://agile-clamp.net';
    $request->connectivityTestInput->destination->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->destination->cloudFunction->uri = 'http://acceptable-chamber.net';
    $request->connectivityTestInput->destination->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->destination->cloudRunRevision->uri = 'https://far-off-prune.net';
    $request->connectivityTestInput->destination->cloudSqlInstance = 'labore';
    $request->connectivityTestInput->destination->gkeMasterCluster = 'delectus';
    $request->connectivityTestInput->destination->instance = 'eum';
    $request->connectivityTestInput->destination->ipAddress = 'non';
    $request->connectivityTestInput->destination->network = 'eligendi';
    $request->connectivityTestInput->destination->networkType = EndpointNetworkTypeEnum::GCP_NETWORK;
    $request->connectivityTestInput->destination->port = 396098;
    $request->connectivityTestInput->destination->projectId = 'provident';
    $request->connectivityTestInput->labels = [
        'sint' => 'officia',
        'dolor' => 'debitis',
        'a' => 'dolorum',
        'in' => 'in',
    ];
    $request->connectivityTestInput->name = 'Mrs. Emilio Price';
    $request->connectivityTestInput->protocol = 'facere';
    $request->connectivityTestInput->reachabilityDetails = new ReachabilityDetails();
    $request->connectivityTestInput->reachabilityDetails->error = new Status();
    $request->connectivityTestInput->reachabilityDetails->error->code = 411820;
    $request->connectivityTestInput->reachabilityDetails->error->details = [
        [
            'accusamus' => 'non',
            'occaecati' => 'enim',
            'accusamus' => 'delectus',
        ],
        [
            'provident' => 'nam',
            'id' => 'blanditiis',
            'deleniti' => 'sapiente',
        ],
    ];
    $request->connectivityTestInput->reachabilityDetails->error->message = 'amet';
    $request->connectivityTestInput->reachabilityDetails->result = ReachabilityDetailsResultEnum::AMBIGUOUS;
    $request->connectivityTestInput->reachabilityDetails->traces = [
        new Trace(),
        new Trace(),
    ];
    $request->connectivityTestInput->reachabilityDetails->verifyTime = 'vel';
    $request->connectivityTestInput->relatedProjects = [
        'omnis',
        'molestiae',
        'perferendis',
    ];
    $request->connectivityTestInput->source = new Endpoint();
    $request->connectivityTestInput->source->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->source->appEngineVersion->uri = 'http://formal-racist.name';
    $request->connectivityTestInput->source->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->source->cloudFunction->uri = 'http://flawed-gherkin.name';
    $request->connectivityTestInput->source->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->source->cloudRunRevision->uri = 'https://inconsequential-swimming.com';
    $request->connectivityTestInput->source->cloudSqlInstance = 'architecto';
    $request->connectivityTestInput->source->gkeMasterCluster = 'magnam';
    $request->connectivityTestInput->source->instance = 'et';
    $request->connectivityTestInput->source->ipAddress = 'excepturi';
    $request->connectivityTestInput->source->network = 'ullam';
    $request->connectivityTestInput->source->networkType = EndpointNetworkTypeEnum::GCP_NETWORK;
    $request->connectivityTestInput->source->port = 551816;
    $request->connectivityTestInput->source->projectId = 'sint';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'mollitia';
    $request->key = 'ad';
    $request->name = 'Carmen Treutel';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->updateMask = 'doloribus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eius';

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
        'facilis' => 'in',
        'architecto' => 'architecto',
        'repudiandae' => 'ullam',
    ];
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->name = 'Al Bashirian';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quo';

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
    $request->dollarXgafv = XgafvEnum::TWO;
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
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'ea';
    $request->setIamPolicyRequest->policy->version = 569101;
    $request->setIamPolicyRequest->updateMask = 'odit';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'maiores';
    $request->key = 'quidem';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->resource = 'autem';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'eaque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'voluptatibus',
        'perferendis',
    ];
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'cumque';
    $request->key = 'corporis';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->resource = 'nobis';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'quis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'eaque' => 'quis',
        'nesciunt' => 'eos',
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->fields = 'quam';
    $request->key = 'dolor';
    $request->name = 'Dean Welch';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'perspiciatis';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'porro';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'occaecati';
    $request->key = 'rerum';
    $request->name = 'Ollie Watsica';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'provident';

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
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'quos';
    $request->key = 'aliquid';
    $request->name = 'Dawn Fadel';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'voluptate';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'numquam';
    $request->filter = 'veritatis';
    $request->key = 'ipsa';
    $request->name = 'Vera Kuhlman';
    $request->oauthToken = 'quidem';
    $request->pageSize = 976405;
    $request->pageToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'atque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->fields = 'dolorum';
    $request->filter = 'iusto';
    $request->key = 'voluptate';
    $request->name = 'Alfredo Mohr';
    $request->oauthToken = 'asperiores';
    $request->pageSize = 469497;
    $request->pageToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'saepe';

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
