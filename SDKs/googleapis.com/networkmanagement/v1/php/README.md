# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectivityTestInput = new ConnectivityTestInput();
    $request->connectivityTestInput->description = 'provident';
    $request->connectivityTestInput->destination = new Endpoint();
    $request->connectivityTestInput->destination->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->destination->appEngineVersion->uri = 'https://terrible-nutrient.org';
    $request->connectivityTestInput->destination->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->destination->cloudFunction->uri = 'https://that-hellcat.name';
    $request->connectivityTestInput->destination->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->destination->cloudRunRevision->uri = 'https://high-hound.biz';
    $request->connectivityTestInput->destination->cloudSqlInstance = 'debitis';
    $request->connectivityTestInput->destination->gkeMasterCluster = 'ipsa';
    $request->connectivityTestInput->destination->instance = 'delectus';
    $request->connectivityTestInput->destination->ipAddress = 'tempora';
    $request->connectivityTestInput->destination->network = 'suscipit';
    $request->connectivityTestInput->destination->networkType = EndpointNetworkTypeEnum::GCP_NETWORK;
    $request->connectivityTestInput->destination->port = 791725;
    $request->connectivityTestInput->destination->projectId = 'placeat';
    $request->connectivityTestInput->labels = [
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ];
    $request->connectivityTestInput->name = 'Mrs. Marie O'Connell';
    $request->connectivityTestInput->protocol = 'sapiente';
    $request->connectivityTestInput->reachabilityDetails = new ReachabilityDetails();
    $request->connectivityTestInput->reachabilityDetails->error = new Status();
    $request->connectivityTestInput->reachabilityDetails->error->code = 778157;
    $request->connectivityTestInput->reachabilityDetails->error->details = [
        [
            'at' => 'maiores',
            'molestiae' => 'quod',
            'quod' => 'esse',
            'totam' => 'porro',
        ],
    ];
    $request->connectivityTestInput->reachabilityDetails->error->message = 'dolorum';
    $request->connectivityTestInput->reachabilityDetails->result = ReachabilityDetailsResultEnum::RESULT_UNSPECIFIED;
    $request->connectivityTestInput->reachabilityDetails->traces = [
        new Trace(),
        new Trace(),
        new Trace(),
    ];
    $request->connectivityTestInput->reachabilityDetails->verifyTime = 'officia';
    $request->connectivityTestInput->relatedProjects = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->connectivityTestInput->source = new Endpoint();
    $request->connectivityTestInput->source->appEngineVersion = new AppEngineVersionEndpoint();
    $request->connectivityTestInput->source->appEngineVersion->uri = 'https://mean-brick.info';
    $request->connectivityTestInput->source->cloudFunction = new CloudFunctionEndpoint();
    $request->connectivityTestInput->source->cloudFunction->uri = 'http://familiar-commotion.net';
    $request->connectivityTestInput->source->cloudRunRevision = new CloudRunRevisionEndpoint();
    $request->connectivityTestInput->source->cloudRunRevision->uri = 'https://jolly-cowboy.name';
    $request->connectivityTestInput->source->cloudSqlInstance = 'aspernatur';
    $request->connectivityTestInput->source->gkeMasterCluster = 'perferendis';
    $request->connectivityTestInput->source->instance = 'ad';
    $request->connectivityTestInput->source->ipAddress = 'natus';
    $request->connectivityTestInput->source->network = 'sed';
    $request->connectivityTestInput->source->networkType = EndpointNetworkTypeEnum::GCP_NETWORK;
    $request->connectivityTestInput->source->port = 222321;
    $request->connectivityTestInput->source->projectId = 'natus';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->testId = 'saepe';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'architecto';

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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [networkmanagementProjectsLocationsGlobalConnectivityTestsCreate](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestscreate) - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsList](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestslist) - Lists all Connectivity Tests owned by a project.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsPatch](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestspatch) - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsRerun](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestsrerun) - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivityteststestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networkmanagementProjectsLocationsGlobalOperationsCancel](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networkmanagementProjectsLocationsGlobalOperationsDelete](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [networkmanagementProjectsLocationsGlobalOperationsGet](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [networkmanagementProjectsLocationsGlobalOperationsList](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networkmanagementProjectsLocationsList](docs/projects/README.md#networkmanagementprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
