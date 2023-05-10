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
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAcceleratorTypesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';
    $request->includeAllScopes = false;
    $request->key = 'corrupti';
    $request->maxResults = 847252;
    $request->oauthToken = 'vel';
    $request->orderBy = 'error';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'iure';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'ipsa';

    $requestSecurity = new ComputeAcceleratorTypesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeAcceleratorTypesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acceleratorTypes->computeAcceleratorTypesAggregatedList($request, $requestSecurity);

    if ($response->acceleratorTypeAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [acceleratorTypes](docs/acceleratortypes/README.md)

* [computeAcceleratorTypesAggregatedList](docs/acceleratortypes/README.md#computeacceleratortypesaggregatedlist) - Retrieves an aggregated list of accelerator types.
* [computeAcceleratorTypesGet](docs/acceleratortypes/README.md#computeacceleratortypesget) - Returns the specified accelerator type.
* [computeAcceleratorTypesList](docs/acceleratortypes/README.md#computeacceleratortypeslist) - Retrieves a list of accelerator types that are available to the specified project.

### [addresses](docs/addresses/README.md)

* [computeAddressesAggregatedList](docs/addresses/README.md#computeaddressesaggregatedlist) - Retrieves an aggregated list of addresses.
* [computeAddressesDelete](docs/addresses/README.md#computeaddressesdelete) - Deletes the specified address resource.
* [computeAddressesGet](docs/addresses/README.md#computeaddressesget) - Returns the specified address resource.
* [computeAddressesInsert](docs/addresses/README.md#computeaddressesinsert) - Creates an address resource in the specified project by using the data included in the request.
* [computeAddressesList](docs/addresses/README.md#computeaddresseslist) - Retrieves a list of addresses contained within the specified region.
* [computeAddressesMove](docs/addresses/README.md#computeaddressesmove) - Moves the specified address resource.
* [computeAddressesSetLabels](docs/addresses/README.md#computeaddressessetlabels) - Sets the labels on an Address. To learn more about labels, read the Labeling Resources documentation.
* [computeAddressesTestIamPermissions](docs/addresses/README.md#computeaddressestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [autoscalers](docs/autoscalers/README.md)

* [computeAutoscalersAggregatedList](docs/autoscalers/README.md#computeautoscalersaggregatedlist) - Retrieves an aggregated list of autoscalers.
* [computeAutoscalersDelete](docs/autoscalers/README.md#computeautoscalersdelete) - Deletes the specified autoscaler.
* [computeAutoscalersGet](docs/autoscalers/README.md#computeautoscalersget) - Returns the specified autoscaler resource.
* [computeAutoscalersInsert](docs/autoscalers/README.md#computeautoscalersinsert) - Creates an autoscaler in the specified project using the data included in the request.
* [computeAutoscalersList](docs/autoscalers/README.md#computeautoscalerslist) - Retrieves a list of autoscalers contained within the specified zone.
* [computeAutoscalersPatch](docs/autoscalers/README.md#computeautoscalerspatch) - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeAutoscalersTestIamPermissions](docs/autoscalers/README.md#computeautoscalerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeAutoscalersUpdate](docs/autoscalers/README.md#computeautoscalersupdate) - Updates an autoscaler in the specified project using the data included in the request.

### [backendBuckets](docs/backendbuckets/README.md)

* [computeBackendBucketsAddSignedUrlKey](docs/backendbuckets/README.md#computebackendbucketsaddsignedurlkey) - Adds a key for validating requests with signed URLs for this backend bucket.
* [computeBackendBucketsDelete](docs/backendbuckets/README.md#computebackendbucketsdelete) - Deletes the specified BackendBucket resource.
* [computeBackendBucketsDeleteSignedUrlKey](docs/backendbuckets/README.md#computebackendbucketsdeletesignedurlkey) - Deletes a key for validating requests with signed URLs for this backend bucket.
* [computeBackendBucketsGet](docs/backendbuckets/README.md#computebackendbucketsget) - Returns the specified BackendBucket resource.
* [computeBackendBucketsGetIamPolicy](docs/backendbuckets/README.md#computebackendbucketsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeBackendBucketsInsert](docs/backendbuckets/README.md#computebackendbucketsinsert) - Creates a BackendBucket resource in the specified project using the data included in the request.
* [computeBackendBucketsList](docs/backendbuckets/README.md#computebackendbucketslist) - Retrieves the list of BackendBucket resources available to the specified project.
* [computeBackendBucketsPatch](docs/backendbuckets/README.md#computebackendbucketspatch) - Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeBackendBucketsSetEdgeSecurityPolicy](docs/backendbuckets/README.md#computebackendbucketssetedgesecuritypolicy) - Sets the edge security policy for the specified backend bucket.
* [computeBackendBucketsSetIamPolicy](docs/backendbuckets/README.md#computebackendbucketssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeBackendBucketsTestIamPermissions](docs/backendbuckets/README.md#computebackendbucketstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeBackendBucketsUpdate](docs/backendbuckets/README.md#computebackendbucketsupdate) - Updates the specified BackendBucket resource with the data included in the request.

### [backendServices](docs/backendservices/README.md)

* [computeBackendServicesAddSignedUrlKey](docs/backendservices/README.md#computebackendservicesaddsignedurlkey) - Adds a key for validating requests with signed URLs for this backend service.
* [computeBackendServicesAggregatedList](docs/backendservices/README.md#computebackendservicesaggregatedlist) - Retrieves the list of all BackendService resources, regional and global, available to the specified project.
* [computeBackendServicesDelete](docs/backendservices/README.md#computebackendservicesdelete) - Deletes the specified BackendService resource.
* [computeBackendServicesDeleteSignedUrlKey](docs/backendservices/README.md#computebackendservicesdeletesignedurlkey) - Deletes a key for validating requests with signed URLs for this backend service.
* [computeBackendServicesGet](docs/backendservices/README.md#computebackendservicesget) - Returns the specified BackendService resource.
* [computeBackendServicesGetHealth](docs/backendservices/README.md#computebackendservicesgethealth) - Gets the most recent health check results for this BackendService. Example request body: { "group": "/zones/us-east1-b/instanceGroups/lb-backend-example" }
* [computeBackendServicesGetIamPolicy](docs/backendservices/README.md#computebackendservicesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeBackendServicesInsert](docs/backendservices/README.md#computebackendservicesinsert) - Creates a BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview .
* [computeBackendServicesList](docs/backendservices/README.md#computebackendserviceslist) - Retrieves the list of BackendService resources available to the specified project.
* [computeBackendServicesPatch](docs/backendservices/README.md#computebackendservicespatch) - Patches the specified BackendService resource with the data included in the request. For more information, see Backend services overview. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeBackendServicesSetEdgeSecurityPolicy](docs/backendservices/README.md#computebackendservicessetedgesecuritypolicy) - Sets the edge security policy for the specified backend service.
* [computeBackendServicesSetIamPolicy](docs/backendservices/README.md#computebackendservicessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeBackendServicesSetSecurityPolicy](docs/backendservices/README.md#computebackendservicessetsecuritypolicy) - Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview
* [computeBackendServicesTestIamPermissions](docs/backendservices/README.md#computebackendservicestestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeBackendServicesUpdate](docs/backendservices/README.md#computebackendservicesupdate) - Updates the specified BackendService resource with the data included in the request. For more information, see Backend services overview.

### [diskTypes](docs/disktypes/README.md)

* [computeDiskTypesAggregatedList](docs/disktypes/README.md#computedisktypesaggregatedlist) - Retrieves an aggregated list of disk types.
* [computeDiskTypesGet](docs/disktypes/README.md#computedisktypesget) - Returns the specified disk type.
* [computeDiskTypesList](docs/disktypes/README.md#computedisktypeslist) - Retrieves a list of disk types available to the specified project.

### [disks](docs/disks/README.md)

* [computeDisksAddResourcePolicies](docs/disks/README.md#computedisksaddresourcepolicies) - Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
* [computeDisksAggregatedList](docs/disks/README.md#computedisksaggregatedlist) - Retrieves an aggregated list of persistent disks.
* [computeDisksBulkInsert](docs/disks/README.md#computedisksbulkinsert) - Bulk create a set of disks.
* [computeDisksCreateSnapshot](docs/disks/README.md#computediskscreatesnapshot) - Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
* [computeDisksDelete](docs/disks/README.md#computedisksdelete) - Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
* [computeDisksGet](docs/disks/README.md#computedisksget) - Returns the specified persistent disk.
* [computeDisksGetIamPolicy](docs/disks/README.md#computedisksgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeDisksInsert](docs/disks/README.md#computedisksinsert) - Creates a persistent disk in the specified project using the data in the request. You can create a disk from a source (sourceImage, sourceSnapshot, or sourceDisk) or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
* [computeDisksList](docs/disks/README.md#computediskslist) - Retrieves a list of persistent disks contained within the specified zone.
* [computeDisksRemoveResourcePolicies](docs/disks/README.md#computedisksremoveresourcepolicies) - Removes resource policies from a disk.
* [computeDisksResize](docs/disks/README.md#computedisksresize) - Resizes the specified persistent disk. You can only increase the size of the disk.
* [computeDisksSetIamPolicy](docs/disks/README.md#computediskssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeDisksSetLabels](docs/disks/README.md#computediskssetlabels) - Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.
* [computeDisksStartAsyncReplication](docs/disks/README.md#computedisksstartasyncreplication) - Starts asynchronous replication. Must be invoked on the primary disk.
* [computeDisksStopAsyncReplication](docs/disks/README.md#computedisksstopasyncreplication) - Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
* [computeDisksStopGroupAsyncReplication](docs/disks/README.md#computedisksstopgroupasyncreplication) - Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.
* [computeDisksTestIamPermissions](docs/disks/README.md#computediskstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeDisksUpdate](docs/disks/README.md#computedisksupdate) - Updates the specified disk with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

### [externalVpnGateways](docs/externalvpngateways/README.md)

* [computeExternalVpnGatewaysDelete](docs/externalvpngateways/README.md#computeexternalvpngatewaysdelete) - Deletes the specified externalVpnGateway.
* [computeExternalVpnGatewaysGet](docs/externalvpngateways/README.md#computeexternalvpngatewaysget) - Returns the specified externalVpnGateway. Get a list of available externalVpnGateways by making a list() request.
* [computeExternalVpnGatewaysInsert](docs/externalvpngateways/README.md#computeexternalvpngatewaysinsert) - Creates a ExternalVpnGateway in the specified project using the data included in the request.
* [computeExternalVpnGatewaysList](docs/externalvpngateways/README.md#computeexternalvpngatewayslist) - Retrieves the list of ExternalVpnGateway available to the specified project.
* [computeExternalVpnGatewaysSetLabels](docs/externalvpngateways/README.md#computeexternalvpngatewayssetlabels) - Sets the labels on an ExternalVpnGateway. To learn more about labels, read the Labeling Resources documentation.
* [computeExternalVpnGatewaysTestIamPermissions](docs/externalvpngateways/README.md#computeexternalvpngatewaystestiampermissions) - Returns permissions that a caller has on the specified resource.

### [firewallPolicies](docs/firewallpolicies/README.md)

* [computeFirewallPoliciesAddAssociation](docs/firewallpolicies/README.md#computefirewallpoliciesaddassociation) - Inserts an association for the specified firewall policy.
* [computeFirewallPoliciesAddRule](docs/firewallpolicies/README.md#computefirewallpoliciesaddrule) - Inserts a rule into a firewall policy.
* [computeFirewallPoliciesCloneRules](docs/firewallpolicies/README.md#computefirewallpoliciesclonerules) - Copies rules to the specified firewall policy.
* [computeFirewallPoliciesDelete](docs/firewallpolicies/README.md#computefirewallpoliciesdelete) - Deletes the specified policy.
* [computeFirewallPoliciesGet](docs/firewallpolicies/README.md#computefirewallpoliciesget) - Returns the specified firewall policy.
* [computeFirewallPoliciesGetAssociation](docs/firewallpolicies/README.md#computefirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeFirewallPoliciesGetIamPolicy](docs/firewallpolicies/README.md#computefirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeFirewallPoliciesGetRule](docs/firewallpolicies/README.md#computefirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeFirewallPoliciesInsert](docs/firewallpolicies/README.md#computefirewallpoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeFirewallPoliciesList](docs/firewallpolicies/README.md#computefirewallpolicieslist) - Lists all the policies that have been configured for the specified folder or organization.
* [computeFirewallPoliciesListAssociations](docs/firewallpolicies/README.md#computefirewallpolicieslistassociations) - Lists associations of a specified target, i.e., organization or folder.
* [computeFirewallPoliciesMove](docs/firewallpolicies/README.md#computefirewallpoliciesmove) - Moves the specified firewall policy.
* [computeFirewallPoliciesPatch](docs/firewallpolicies/README.md#computefirewallpoliciespatch) - Patches the specified policy with the data included in the request.
* [computeFirewallPoliciesPatchRule](docs/firewallpolicies/README.md#computefirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeFirewallPoliciesRemoveAssociation](docs/firewallpolicies/README.md#computefirewallpoliciesremoveassociation) - Removes an association for the specified firewall policy.
* [computeFirewallPoliciesRemoveRule](docs/firewallpolicies/README.md#computefirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeFirewallPoliciesSetIamPolicy](docs/firewallpolicies/README.md#computefirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeFirewallPoliciesTestIamPermissions](docs/firewallpolicies/README.md#computefirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [firewalls](docs/firewalls/README.md)

* [computeFirewallsDelete](docs/firewalls/README.md#computefirewallsdelete) - Deletes the specified firewall.
* [computeFirewallsGet](docs/firewalls/README.md#computefirewallsget) - Returns the specified firewall.
* [computeFirewallsInsert](docs/firewalls/README.md#computefirewallsinsert) - Creates a firewall rule in the specified project using the data included in the request.
* [computeFirewallsList](docs/firewalls/README.md#computefirewallslist) - Retrieves the list of firewall rules available to the specified project.
* [computeFirewallsPatch](docs/firewalls/README.md#computefirewallspatch) - Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeFirewallsTestIamPermissions](docs/firewalls/README.md#computefirewallstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeFirewallsUpdate](docs/firewalls/README.md#computefirewallsupdate) - Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.

### [forwardingRules](docs/forwardingrules/README.md)

* [computeForwardingRulesAggregatedList](docs/forwardingrules/README.md#computeforwardingrulesaggregatedlist) - Retrieves an aggregated list of forwarding rules.
* [computeForwardingRulesDelete](docs/forwardingrules/README.md#computeforwardingrulesdelete) - Deletes the specified ForwardingRule resource.
* [computeForwardingRulesGet](docs/forwardingrules/README.md#computeforwardingrulesget) - Returns the specified ForwardingRule resource.
* [computeForwardingRulesInsert](docs/forwardingrules/README.md#computeforwardingrulesinsert) - Creates a ForwardingRule resource in the specified project and region using the data included in the request.
* [computeForwardingRulesList](docs/forwardingrules/README.md#computeforwardingruleslist) - Retrieves a list of ForwardingRule resources available to the specified project and region.
* [computeForwardingRulesPatch](docs/forwardingrules/README.md#computeforwardingrulespatch) - Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
* [computeForwardingRulesSetLabels](docs/forwardingrules/README.md#computeforwardingrulessetlabels) - Sets the labels on the specified resource. To learn more about labels, read the Labeling Resources documentation.
* [computeForwardingRulesSetTarget](docs/forwardingrules/README.md#computeforwardingrulessettarget) - Changes target URL for forwarding rule. The new target should be of the same type as the old target.
* [computeForwardingRulesTestIamPermissions](docs/forwardingrules/README.md#computeforwardingrulestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [globalAddresses](docs/globaladdresses/README.md)

* [computeGlobalAddressesDelete](docs/globaladdresses/README.md#computeglobaladdressesdelete) - Deletes the specified address resource.
* [computeGlobalAddressesGet](docs/globaladdresses/README.md#computeglobaladdressesget) - Returns the specified address resource.
* [computeGlobalAddressesInsert](docs/globaladdresses/README.md#computeglobaladdressesinsert) - Creates an address resource in the specified project by using the data included in the request.
* [computeGlobalAddressesList](docs/globaladdresses/README.md#computeglobaladdresseslist) - Retrieves a list of global addresses.
* [computeGlobalAddressesMove](docs/globaladdresses/README.md#computeglobaladdressesmove) - Moves the specified address resource from one project to another project.
* [computeGlobalAddressesSetLabels](docs/globaladdresses/README.md#computeglobaladdressessetlabels) - Sets the labels on a GlobalAddress. To learn more about labels, read the Labeling Resources documentation.
* [computeGlobalAddressesTestIamPermissions](docs/globaladdresses/README.md#computeglobaladdressestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [globalForwardingRules](docs/globalforwardingrules/README.md)

* [computeGlobalForwardingRulesDelete](docs/globalforwardingrules/README.md#computeglobalforwardingrulesdelete) - Deletes the specified GlobalForwardingRule resource.
* [computeGlobalForwardingRulesGet](docs/globalforwardingrules/README.md#computeglobalforwardingrulesget) - Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.
* [computeGlobalForwardingRulesInsert](docs/globalforwardingrules/README.md#computeglobalforwardingrulesinsert) - Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
* [computeGlobalForwardingRulesList](docs/globalforwardingrules/README.md#computeglobalforwardingruleslist) - Retrieves a list of GlobalForwardingRule resources available to the specified project.
* [computeGlobalForwardingRulesPatch](docs/globalforwardingrules/README.md#computeglobalforwardingrulespatch) - Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
* [computeGlobalForwardingRulesSetLabels](docs/globalforwardingrules/README.md#computeglobalforwardingrulessetlabels) - Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.
* [computeGlobalForwardingRulesSetTarget](docs/globalforwardingrules/README.md#computeglobalforwardingrulessettarget) - Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
* [computeGlobalForwardingRulesTestIamPermissions](docs/globalforwardingrules/README.md#computeglobalforwardingrulestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [globalNetworkEndpointGroups](docs/globalnetworkendpointgroups/README.md)

* [computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints](docs/globalnetworkendpointgroups/README.md#computeglobalnetworkendpointgroupsattachnetworkendpoints) - Attach a network endpoint to the specified network endpoint group.
* [computeGlobalNetworkEndpointGroupsDelete](docs/globalnetworkendpointgroups/README.md#computeglobalnetworkendpointgroupsdelete) - Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referencing it.
* [computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints](docs/globalnetworkendpointgroups/README.md#computeglobalnetworkendpointgroupsdetachnetworkendpoints) - Detach the network endpoint from the specified network endpoint group.
* [computeGlobalNetworkEndpointGroupsGet](docs/globalnetworkendpointgroups/README.md#computeglobalnetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeGlobalNetworkEndpointGroupsInsert](docs/globalnetworkendpointgroups/README.md#computeglobalnetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeGlobalNetworkEndpointGroupsList](docs/globalnetworkendpointgroups/README.md#computeglobalnetworkendpointgroupslist) - Retrieves the list of network endpoint groups that are located in the specified project.
* [computeGlobalNetworkEndpointGroupsListNetworkEndpoints](docs/globalnetworkendpointgroups/README.md#computeglobalnetworkendpointgroupslistnetworkendpoints) - Lists the network endpoints in the specified network endpoint group.

### [globalOperations](docs/globaloperations/README.md)

* [computeGlobalOperationsAggregatedList](docs/globaloperations/README.md#computeglobaloperationsaggregatedlist) - Retrieves an aggregated list of all operations.
* [computeGlobalOperationsDelete](docs/globaloperations/README.md#computeglobaloperationsdelete) - Deletes the specified Operations resource.
* [computeGlobalOperationsGet](docs/globaloperations/README.md#computeglobaloperationsget) - Retrieves the specified Operations resource.
* [computeGlobalOperationsList](docs/globaloperations/README.md#computeglobaloperationslist) - Retrieves a list of Operation resources contained within the specified project.
* [computeGlobalOperationsWait](docs/globaloperations/README.md#computeglobaloperationswait) - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### [globalOrganizationOperations](docs/globalorganizationoperations/README.md)

* [computeGlobalOrganizationOperationsDelete](docs/globalorganizationoperations/README.md#computeglobalorganizationoperationsdelete) - Deletes the specified Operations resource.
* [computeGlobalOrganizationOperationsGet](docs/globalorganizationoperations/README.md#computeglobalorganizationoperationsget) - Retrieves the specified Operations resource. Gets a list of operations by making a `list()` request.
* [computeGlobalOrganizationOperationsList](docs/globalorganizationoperations/README.md#computeglobalorganizationoperationslist) - Retrieves a list of Operation resources contained within the specified organization.

### [globalPublicDelegatedPrefixes](docs/globalpublicdelegatedprefixes/README.md)

* [computeGlobalPublicDelegatedPrefixesDelete](docs/globalpublicdelegatedprefixes/README.md#computeglobalpublicdelegatedprefixesdelete) - Deletes the specified global PublicDelegatedPrefix.
* [computeGlobalPublicDelegatedPrefixesGet](docs/globalpublicdelegatedprefixes/README.md#computeglobalpublicdelegatedprefixesget) - Returns the specified global PublicDelegatedPrefix resource.
* [computeGlobalPublicDelegatedPrefixesInsert](docs/globalpublicdelegatedprefixes/README.md#computeglobalpublicdelegatedprefixesinsert) - Creates a global PublicDelegatedPrefix in the specified project using the parameters that are included in the request.
* [computeGlobalPublicDelegatedPrefixesList](docs/globalpublicdelegatedprefixes/README.md#computeglobalpublicdelegatedprefixeslist) - Lists the global PublicDelegatedPrefixes for a project.
* [computeGlobalPublicDelegatedPrefixesPatch](docs/globalpublicdelegatedprefixes/README.md#computeglobalpublicdelegatedprefixespatch) - Patches the specified global PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### [healthChecks](docs/healthchecks/README.md)

* [computeHealthChecksAggregatedList](docs/healthchecks/README.md#computehealthchecksaggregatedlist) - Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.
* [computeHealthChecksDelete](docs/healthchecks/README.md#computehealthchecksdelete) - Deletes the specified HealthCheck resource.
* [computeHealthChecksGet](docs/healthchecks/README.md#computehealthchecksget) - Returns the specified HealthCheck resource.
* [computeHealthChecksInsert](docs/healthchecks/README.md#computehealthchecksinsert) - Creates a HealthCheck resource in the specified project using the data included in the request.
* [computeHealthChecksList](docs/healthchecks/README.md#computehealthcheckslist) - Retrieves the list of HealthCheck resources available to the specified project.
* [computeHealthChecksPatch](docs/healthchecks/README.md#computehealthcheckspatch) - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHealthChecksTestIamPermissions](docs/healthchecks/README.md#computehealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeHealthChecksUpdate](docs/healthchecks/README.md#computehealthchecksupdate) - Updates a HealthCheck resource in the specified project using the data included in the request.

### [httpHealthChecks](docs/httphealthchecks/README.md)

* [computeHttpHealthChecksDelete](docs/httphealthchecks/README.md#computehttphealthchecksdelete) - Deletes the specified HttpHealthCheck resource.
* [computeHttpHealthChecksGet](docs/httphealthchecks/README.md#computehttphealthchecksget) - Returns the specified HttpHealthCheck resource.
* [computeHttpHealthChecksInsert](docs/httphealthchecks/README.md#computehttphealthchecksinsert) - Creates a HttpHealthCheck resource in the specified project using the data included in the request.
* [computeHttpHealthChecksList](docs/httphealthchecks/README.md#computehttphealthcheckslist) - Retrieves the list of HttpHealthCheck resources available to the specified project.
* [computeHttpHealthChecksPatch](docs/httphealthchecks/README.md#computehttphealthcheckspatch) - Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHttpHealthChecksTestIamPermissions](docs/httphealthchecks/README.md#computehttphealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeHttpHealthChecksUpdate](docs/httphealthchecks/README.md#computehttphealthchecksupdate) - Updates a HttpHealthCheck resource in the specified project using the data included in the request.

### [httpsHealthChecks](docs/httpshealthchecks/README.md)

* [computeHttpsHealthChecksDelete](docs/httpshealthchecks/README.md#computehttpshealthchecksdelete) - Deletes the specified HttpsHealthCheck resource.
* [computeHttpsHealthChecksGet](docs/httpshealthchecks/README.md#computehttpshealthchecksget) - Returns the specified HttpsHealthCheck resource.
* [computeHttpsHealthChecksInsert](docs/httpshealthchecks/README.md#computehttpshealthchecksinsert) - Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
* [computeHttpsHealthChecksList](docs/httpshealthchecks/README.md#computehttpshealthcheckslist) - Retrieves the list of HttpsHealthCheck resources available to the specified project.
* [computeHttpsHealthChecksPatch](docs/httpshealthchecks/README.md#computehttpshealthcheckspatch) - Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHttpsHealthChecksTestIamPermissions](docs/httpshealthchecks/README.md#computehttpshealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeHttpsHealthChecksUpdate](docs/httpshealthchecks/README.md#computehttpshealthchecksupdate) - Updates a HttpsHealthCheck resource in the specified project using the data included in the request.

### [imageFamilyViews](docs/imagefamilyviews/README.md)

* [computeImageFamilyViewsGet](docs/imagefamilyviews/README.md#computeimagefamilyviewsget) - Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.

### [images](docs/images/README.md)

* [computeImagesDelete](docs/images/README.md#computeimagesdelete) - Deletes the specified image.
* [computeImagesDeprecate](docs/images/README.md#computeimagesdeprecate) - Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.
* [computeImagesGet](docs/images/README.md#computeimagesget) - Returns the specified image.
* [computeImagesGetFromFamily](docs/images/README.md#computeimagesgetfromfamily) - Returns the latest image that is part of an image family and is not deprecated. For more information on image families, see Public image families documentation.
* [computeImagesGetIamPolicy](docs/images/README.md#computeimagesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeImagesInsert](docs/images/README.md#computeimagesinsert) - Creates an image in the specified project using the data included in the request.
* [computeImagesList](docs/images/README.md#computeimageslist) - Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
* [computeImagesPatch](docs/images/README.md#computeimagespatch) - Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.
* [computeImagesSetIamPolicy](docs/images/README.md#computeimagessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeImagesSetLabels](docs/images/README.md#computeimagessetlabels) - Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.
* [computeImagesTestIamPermissions](docs/images/README.md#computeimagestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [instanceGroupManagers](docs/instancegroupmanagers/README.md)

* [computeInstanceGroupManagersAbandonInstances](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersabandoninstances) - Flags the specified instances to be removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersAggregatedList](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersaggregatedlist) - Retrieves the list of managed instance groups and groups them by zone.
* [computeInstanceGroupManagersApplyUpdatesToInstances](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersapplyupdatestoinstances) - Applies changes to selected instances on the managed instance group. This method can be used to apply new overrides and/or new versions.
* [computeInstanceGroupManagersCreateInstances](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerscreateinstances) - Creates instances with per-instance configurations in this managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
* [computeInstanceGroupManagersDelete](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersdelete) - Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read Deleting an instance group for more information.
* [computeInstanceGroupManagersDeleteInstances](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersdeleteinstances) - Flags the specified instances in the managed instance group for immediate deletion. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersDeletePerInstanceConfigs](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersdeleteperinstanceconfigs) - Deletes selected per-instance configurations for the managed instance group.
* [computeInstanceGroupManagersGet](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersget) - Returns all of the details about the specified managed instance group.
* [computeInstanceGroupManagersInsert](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersinsert) - Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.
* [computeInstanceGroupManagersList](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerslist) - Retrieves a list of managed instance groups that are contained within the specified project and zone.
* [computeInstanceGroupManagersListErrors](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerslisterrors) - Lists all errors thrown by actions on instances for a given managed instance group. The filter and orderBy query parameters are not supported.
* [computeInstanceGroupManagersListManagedInstances](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerslistmanagedinstances) - Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.
* [computeInstanceGroupManagersListPerInstanceConfigs](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerslistperinstanceconfigs) - Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.
* [computeInstanceGroupManagersPatch](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerspatch) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listManagedInstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeInstanceGroupManagersPatchPerInstanceConfigs](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerspatchperinstanceconfigs) - Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
* [computeInstanceGroupManagersRecreateInstances](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersrecreateinstances) - Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersResize](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersresize) - Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. When resizing down, the instance group arbitrarily chooses the order in which VMs are deleted. The group takes into account some VM attributes when making the selection including: + The status of the VM instance. + The health of the VM instance. + The instance template version the VM is based on. + For regional managed instance groups, the location of the VM instance. This list is subject to change. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeInstanceGroupManagersResizeAdvanced](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersresizeadvanced) - Resizes the managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size of the instance group, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating, creatingWithoutRetries, or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeInstanceGroupManagersSetAutoHealingPolicies](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerssetautohealingpolicies) - Motifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use instanceGroupManagers.patch instead.
* [computeInstanceGroupManagersSetInstanceTemplate](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerssetinstancetemplate) - Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
* [computeInstanceGroupManagersSetTargetPools](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerssettargetpools) - Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
* [computeInstanceGroupManagersTestIamPermissions](docs/instancegroupmanagers/README.md#computeinstancegroupmanagerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeInstanceGroupManagersUpdate](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersupdate) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listManagedInstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeInstanceGroupManagersUpdatePerInstanceConfigs](docs/instancegroupmanagers/README.md#computeinstancegroupmanagersupdateperinstanceconfigs) - Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### [instanceGroups](docs/instancegroups/README.md)

* [computeInstanceGroupsAddInstances](docs/instancegroups/README.md#computeinstancegroupsaddinstances) - Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.
* [computeInstanceGroupsAggregatedList](docs/instancegroups/README.md#computeinstancegroupsaggregatedlist) - Retrieves the list of instance groups and sorts them by zone.
* [computeInstanceGroupsDelete](docs/instancegroups/README.md#computeinstancegroupsdelete) - Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.
* [computeInstanceGroupsGet](docs/instancegroups/README.md#computeinstancegroupsget) - Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.
* [computeInstanceGroupsInsert](docs/instancegroups/README.md#computeinstancegroupsinsert) - Creates an instance group in the specified project using the parameters that are included in the request.
* [computeInstanceGroupsList](docs/instancegroups/README.md#computeinstancegroupslist) - Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.
* [computeInstanceGroupsListInstances](docs/instancegroups/README.md#computeinstancegroupslistinstances) - Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.
* [computeInstanceGroupsRemoveInstances](docs/instancegroups/README.md#computeinstancegroupsremoveinstances) - Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.
* [computeInstanceGroupsSetNamedPorts](docs/instancegroups/README.md#computeinstancegroupssetnamedports) - Sets the named ports for the specified instance group.
* [computeInstanceGroupsTestIamPermissions](docs/instancegroups/README.md#computeinstancegroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [instanceTemplates](docs/instancetemplates/README.md)

* [computeInstanceTemplatesAggregatedList](docs/instancetemplates/README.md#computeinstancetemplatesaggregatedlist) - Retrieves the list of all InstanceTemplates resources, regional and global, available to the specified project.
* [computeInstanceTemplatesDelete](docs/instancetemplates/README.md#computeinstancetemplatesdelete) - Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone. It is not possible to delete templates that are already in use by a managed instance group.
* [computeInstanceTemplatesGet](docs/instancetemplates/README.md#computeinstancetemplatesget) - Returns the specified instance template.
* [computeInstanceTemplatesGetIamPolicy](docs/instancetemplates/README.md#computeinstancetemplatesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInstanceTemplatesInsert](docs/instancetemplates/README.md#computeinstancetemplatesinsert) - Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
* [computeInstanceTemplatesList](docs/instancetemplates/README.md#computeinstancetemplateslist) - Retrieves a list of instance templates that are contained within the specified project.
* [computeInstanceTemplatesSetIamPolicy](docs/instancetemplates/README.md#computeinstancetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeInstanceTemplatesTestIamPermissions](docs/instancetemplates/README.md#computeinstancetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [instances](docs/instances/README.md)

* [computeInstancesAddAccessConfig](docs/instances/README.md#computeinstancesaddaccessconfig) - Adds an access config to an instance's network interface.
* [computeInstancesAddResourcePolicies](docs/instances/README.md#computeinstancesaddresourcepolicies) - Adds existing resource policies to an instance. You can only add one policy right now which will be applied to this instance for scheduling live migrations.
* [computeInstancesAggregatedList](docs/instances/README.md#computeinstancesaggregatedlist) - Retrieves an aggregated list of all of the instances in your project across all regions and zones. The performance of this method degrades when a filter is specified on a project that has a very large number of instances.
* [computeInstancesAttachDisk](docs/instances/README.md#computeinstancesattachdisk) - Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.
* [computeInstancesBulkInsert](docs/instances/README.md#computeinstancesbulkinsert) - Creates multiple instances. Count specifies the number of instances to create. For more information, see About bulk creation of VMs.
* [computeInstancesDelete](docs/instances/README.md#computeinstancesdelete) - Deletes the specified Instance resource. For more information, see Deleting an instance.
* [computeInstancesDeleteAccessConfig](docs/instances/README.md#computeinstancesdeleteaccessconfig) - Deletes an access config from an instance's network interface.
* [computeInstancesDetachDisk](docs/instances/README.md#computeinstancesdetachdisk) - Detaches a disk from an instance.
* [computeInstancesGet](docs/instances/README.md#computeinstancesget) - Returns the specified Instance resource.
* [computeInstancesGetEffectiveFirewalls](docs/instances/README.md#computeinstancesgeteffectivefirewalls) - Returns effective firewalls applied to an interface of the instance.
* [computeInstancesGetGuestAttributes](docs/instances/README.md#computeinstancesgetguestattributes) - Returns the specified guest attributes entry.
* [computeInstancesGetIamPolicy](docs/instances/README.md#computeinstancesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInstancesGetScreenshot](docs/instances/README.md#computeinstancesgetscreenshot) - Returns the screenshot from the specified instance.
* [computeInstancesGetSerialPortOutput](docs/instances/README.md#computeinstancesgetserialportoutput) - Returns the last 1 MB of serial port output from the specified instance.
* [computeInstancesGetShieldedInstanceIdentity](docs/instances/README.md#computeinstancesgetshieldedinstanceidentity) - Returns the Shielded Instance Identity of an instance
* [computeInstancesGetShieldedVmIdentity](docs/instances/README.md#computeinstancesgetshieldedvmidentity) - Returns the Shielded VM Identity of an instance
* [computeInstancesInsert](docs/instances/README.md#computeinstancesinsert) - Creates an instance resource in the specified project using the data included in the request.
* [computeInstancesList](docs/instances/README.md#computeinstanceslist) - Retrieves the list of instances contained within the specified zone.
* [computeInstancesListReferrers](docs/instances/README.md#computeinstanceslistreferrers) - Retrieves a list of resources that refer to the VM instance specified in the request. For example, if the VM instance is part of a managed or unmanaged instance group, the referrers list includes the instance group. For more information, read Viewing referrers to VM instances.
* [computeInstancesRemoveResourcePolicies](docs/instances/README.md#computeinstancesremoveresourcepolicies) - Removes resource policies from an instance.
* [computeInstancesReset](docs/instances/README.md#computeinstancesreset) - Performs a reset on the instance. This is a hard reset. The VM does not do a graceful shutdown. For more information, see Resetting an instance.
* [computeInstancesResume](docs/instances/README.md#computeinstancesresume) - Resumes an instance that was suspended using the instances().suspend method.
* [computeInstancesSendDiagnosticInterrupt](docs/instances/README.md#computeinstancessenddiagnosticinterrupt) - Sends diagnostic interrupt to the instance.
* [computeInstancesSetDeletionProtection](docs/instances/README.md#computeinstancessetdeletionprotection) - Sets deletion protection on the instance.
* [computeInstancesSetDiskAutoDelete](docs/instances/README.md#computeinstancessetdiskautodelete) - Sets the auto-delete flag for a disk attached to an instance.
* [computeInstancesSetIamPolicy](docs/instances/README.md#computeinstancessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeInstancesSetLabels](docs/instances/README.md#computeinstancessetlabels) - Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.
* [computeInstancesSetMachineResources](docs/instances/README.md#computeinstancessetmachineresources) - Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
* [computeInstancesSetMachineType](docs/instances/README.md#computeinstancessetmachinetype) - Changes the machine type for a stopped instance to the machine type specified in the request.
* [computeInstancesSetMetadata](docs/instances/README.md#computeinstancessetmetadata) - Sets metadata for the specified instance to the data included in the request.
* [computeInstancesSetMinCpuPlatform](docs/instances/README.md#computeinstancessetmincpuplatform) - Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read Specifying a Minimum CPU Platform.
* [computeInstancesSetName](docs/instances/README.md#computeinstancessetname) - Sets name of an instance.
* [computeInstancesSetScheduling](docs/instances/README.md#computeinstancessetscheduling) - Sets an instance's scheduling options. You can only call this method on a stopped instance, that is, a VM instance that is in a `TERMINATED` state. See Instance Life Cycle for more information on the possible instance states. For more information about setting scheduling options for a VM, see Set VM host maintenance policy.
* [computeInstancesSetServiceAccount](docs/instances/README.md#computeinstancessetserviceaccount) - Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.
* [computeInstancesSetShieldedInstanceIntegrityPolicy](docs/instances/README.md#computeinstancessetshieldedinstanceintegritypolicy) - Sets the Shielded Instance integrity policy for an instance. You can only use this method on a running instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesSetShieldedVmIntegrityPolicy](docs/instances/README.md#computeinstancessetshieldedvmintegritypolicy) - Sets the Shielded VM integrity policy for a VM instance. You can only use this method on a running VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesSetTags](docs/instances/README.md#computeinstancessettags) - Sets network tags for the specified instance to the data included in the request.
* [computeInstancesSimulateMaintenanceEvent](docs/instances/README.md#computeinstancessimulatemaintenanceevent) - Simulates a host maintenance event on a VM. For more information, see Simulate a host maintenance event.
* [computeInstancesStart](docs/instances/README.md#computeinstancesstart) - Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
* [computeInstancesStartWithEncryptionKey](docs/instances/README.md#computeinstancesstartwithencryptionkey) - Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
* [computeInstancesStop](docs/instances/README.md#computeinstancesstop) - Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur VM usage charges while they are stopped. However, resources that the VM is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
* [computeInstancesSuspend](docs/instances/README.md#computeinstancessuspend) - This method suspends a running instance, saving its state to persistent storage, and allows you to resume the instance at a later time. Suspended instances have no compute costs (cores or RAM), and incur only storage charges for the saved VM memory and localSSD data. Any charged resources the virtual machine was using, such as persistent disks and static IP addresses, will continue to be charged while the instance is suspended. For more information, see Suspending and resuming an instance.
* [computeInstancesTestIamPermissions](docs/instances/README.md#computeinstancestestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeInstancesUpdate](docs/instances/README.md#computeinstancesupdate) - Updates an instance only if the necessary resources are available. This method can update only a specific set of instance properties. See Updating a running instance for a list of updatable instance properties.
* [computeInstancesUpdateAccessConfig](docs/instances/README.md#computeinstancesupdateaccessconfig) - Updates the specified access config from an instance's network interface with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesUpdateDisplayDevice](docs/instances/README.md#computeinstancesupdatedisplaydevice) - Updates the Display config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesUpdateNetworkInterface](docs/instances/README.md#computeinstancesupdatenetworkinterface) - Updates an instance's network interface. This method can only update an interface's alias IP range and attached network. See Modifying alias IP ranges for an existing instance for instructions on changing alias IP ranges. See Migrating a VM between networks for instructions on migrating an interface. This method follows PATCH semantics.
* [computeInstancesUpdateShieldedInstanceConfig](docs/instances/README.md#computeinstancesupdateshieldedinstanceconfig) - Updates the Shielded Instance config for an instance. You can only use this method on a stopped instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesUpdateShieldedVmConfig](docs/instances/README.md#computeinstancesupdateshieldedvmconfig) - Updates the Shielded VM config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### [interconnectAttachments](docs/interconnectattachments/README.md)

* [computeInterconnectAttachmentsAggregatedList](docs/interconnectattachments/README.md#computeinterconnectattachmentsaggregatedlist) - Retrieves an aggregated list of interconnect attachments.
* [computeInterconnectAttachmentsDelete](docs/interconnectattachments/README.md#computeinterconnectattachmentsdelete) - Deletes the specified interconnect attachment.
* [computeInterconnectAttachmentsGet](docs/interconnectattachments/README.md#computeinterconnectattachmentsget) - Returns the specified interconnect attachment.
* [computeInterconnectAttachmentsInsert](docs/interconnectattachments/README.md#computeinterconnectattachmentsinsert) - Creates an InterconnectAttachment in the specified project using the data included in the request.
* [computeInterconnectAttachmentsList](docs/interconnectattachments/README.md#computeinterconnectattachmentslist) - Retrieves the list of interconnect attachments contained within the specified region.
* [computeInterconnectAttachmentsPatch](docs/interconnectattachments/README.md#computeinterconnectattachmentspatch) - Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectAttachmentsSetLabels](docs/interconnectattachments/README.md#computeinterconnectattachmentssetlabels) - Sets the labels on an InterconnectAttachment. To learn more about labels, read the Labeling Resources documentation.
* [computeInterconnectAttachmentsTestIamPermissions](docs/interconnectattachments/README.md#computeinterconnectattachmentstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [interconnectLocations](docs/interconnectlocations/README.md)

* [computeInterconnectLocationsGet](docs/interconnectlocations/README.md#computeinterconnectlocationsget) - Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.
* [computeInterconnectLocationsList](docs/interconnectlocations/README.md#computeinterconnectlocationslist) - Retrieves the list of interconnect locations available to the specified project.

### [interconnects](docs/interconnects/README.md)

* [computeInterconnectsDelete](docs/interconnects/README.md#computeinterconnectsdelete) - Deletes the specified Interconnect.
* [computeInterconnectsGet](docs/interconnects/README.md#computeinterconnectsget) - Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.
* [computeInterconnectsGetDiagnostics](docs/interconnects/README.md#computeinterconnectsgetdiagnostics) - Returns the interconnectDiagnostics for the specified Interconnect.
* [computeInterconnectsInsert](docs/interconnects/README.md#computeinterconnectsinsert) - Creates an Interconnect in the specified project using the data included in the request.
* [computeInterconnectsList](docs/interconnects/README.md#computeinterconnectslist) - Retrieves the list of Interconnects available to the specified project.
* [computeInterconnectsPatch](docs/interconnects/README.md#computeinterconnectspatch) - Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectsSetLabels](docs/interconnects/README.md#computeinterconnectssetlabels) - Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.
* [computeInterconnectsTestIamPermissions](docs/interconnects/README.md#computeinterconnectstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [licenseCodes](docs/licensecodes/README.md)

* [computeLicenseCodesGet](docs/licensecodes/README.md#computelicensecodesget) - Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicenseCodesTestIamPermissions](docs/licensecodes/README.md#computelicensecodestestiampermissions) - Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### [licenses](docs/licenses/README.md)

* [computeLicensesDelete](docs/licenses/README.md#computelicensesdelete) - Deletes the specified license. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesGet](docs/licenses/README.md#computelicensesget) - Returns the specified License resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesGetIamPolicy](docs/licenses/README.md#computelicensesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesInsert](docs/licenses/README.md#computelicensesinsert) - Create a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesList](docs/licenses/README.md#computelicenseslist) - Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesSetIamPolicy](docs/licenses/README.md#computelicensessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesTestIamPermissions](docs/licenses/README.md#computelicensestestiampermissions) - Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### [machineImages](docs/machineimages/README.md)

* [computeMachineImagesDelete](docs/machineimages/README.md#computemachineimagesdelete) - Deletes the specified machine image. Deleting a machine image is permanent and cannot be undone.
* [computeMachineImagesGet](docs/machineimages/README.md#computemachineimagesget) - Returns the specified machine image.
* [computeMachineImagesGetIamPolicy](docs/machineimages/README.md#computemachineimagesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeMachineImagesInsert](docs/machineimages/README.md#computemachineimagesinsert) - Creates a machine image in the specified project using the data that is included in the request. If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.
* [computeMachineImagesList](docs/machineimages/README.md#computemachineimageslist) - Retrieves a list of machine images that are contained within the specified project.
* [computeMachineImagesSetIamPolicy](docs/machineimages/README.md#computemachineimagessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeMachineImagesTestIamPermissions](docs/machineimages/README.md#computemachineimagestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [machineTypes](docs/machinetypes/README.md)

* [computeMachineTypesAggregatedList](docs/machinetypes/README.md#computemachinetypesaggregatedlist) - Retrieves an aggregated list of machine types.
* [computeMachineTypesGet](docs/machinetypes/README.md#computemachinetypesget) - Returns the specified machine type.
* [computeMachineTypesList](docs/machinetypes/README.md#computemachinetypeslist) - Retrieves a list of machine types available to the specified project.

### [networkAttachments](docs/networkattachments/README.md)

* [computeNetworkAttachmentsAggregatedList](docs/networkattachments/README.md#computenetworkattachmentsaggregatedlist) - Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.
* [computeNetworkAttachmentsDelete](docs/networkattachments/README.md#computenetworkattachmentsdelete) - Deletes the specified NetworkAttachment in the given scope
* [computeNetworkAttachmentsGet](docs/networkattachments/README.md#computenetworkattachmentsget) - Returns the specified NetworkAttachment resource in the given scope.
* [computeNetworkAttachmentsGetIamPolicy](docs/networkattachments/README.md#computenetworkattachmentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNetworkAttachmentsInsert](docs/networkattachments/README.md#computenetworkattachmentsinsert) - Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.
* [computeNetworkAttachmentsList](docs/networkattachments/README.md#computenetworkattachmentslist) - Lists the NetworkAttachments for a project in the given scope.
* [computeNetworkAttachmentsSetIamPolicy](docs/networkattachments/README.md#computenetworkattachmentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNetworkAttachmentsTestIamPermissions](docs/networkattachments/README.md#computenetworkattachmentstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [networkEdgeSecurityServices](docs/networkedgesecurityservices/README.md)

* [computeNetworkEdgeSecurityServicesAggregatedList](docs/networkedgesecurityservices/README.md#computenetworkedgesecurityservicesaggregatedlist) - Retrieves the list of all NetworkEdgeSecurityService resources available to the specified project.
* [computeNetworkEdgeSecurityServicesDelete](docs/networkedgesecurityservices/README.md#computenetworkedgesecurityservicesdelete) - Deletes the specified service.
* [computeNetworkEdgeSecurityServicesGet](docs/networkedgesecurityservices/README.md#computenetworkedgesecurityservicesget) - Gets a specified NetworkEdgeSecurityService.
* [computeNetworkEdgeSecurityServicesInsert](docs/networkedgesecurityservices/README.md#computenetworkedgesecurityservicesinsert) - Creates a new service in the specified project using the data included in the request.
* [computeNetworkEdgeSecurityServicesPatch](docs/networkedgesecurityservices/README.md#computenetworkedgesecurityservicespatch) - Patches the specified policy with the data included in the request.

### [networkEndpointGroups](docs/networkendpointgroups/README.md)

* [computeNetworkEndpointGroupsAggregatedList](docs/networkendpointgroups/README.md#computenetworkendpointgroupsaggregatedlist) - Retrieves the list of network endpoint groups and sorts them by zone.
* [computeNetworkEndpointGroupsAttachNetworkEndpoints](docs/networkendpointgroups/README.md#computenetworkendpointgroupsattachnetworkendpoints) - Attach a list of network endpoints to the specified network endpoint group.
* [computeNetworkEndpointGroupsDelete](docs/networkendpointgroups/README.md#computenetworkendpointgroupsdelete) - Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.
* [computeNetworkEndpointGroupsDetachNetworkEndpoints](docs/networkendpointgroups/README.md#computenetworkendpointgroupsdetachnetworkendpoints) - Detach a list of network endpoints from the specified network endpoint group.
* [computeNetworkEndpointGroupsGet](docs/networkendpointgroups/README.md#computenetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeNetworkEndpointGroupsInsert](docs/networkendpointgroups/README.md#computenetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeNetworkEndpointGroupsList](docs/networkendpointgroups/README.md#computenetworkendpointgroupslist) - Retrieves the list of network endpoint groups that are located in the specified project and zone.
* [computeNetworkEndpointGroupsListNetworkEndpoints](docs/networkendpointgroups/README.md#computenetworkendpointgroupslistnetworkendpoints) - Lists the network endpoints in the specified network endpoint group.
* [computeNetworkEndpointGroupsTestIamPermissions](docs/networkendpointgroups/README.md#computenetworkendpointgroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [networkFirewallPolicies](docs/networkfirewallpolicies/README.md)

* [computeNetworkFirewallPoliciesAddAssociation](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesaddassociation) - Inserts an association for the specified firewall policy.
* [computeNetworkFirewallPoliciesAddRule](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesaddrule) - Inserts a rule into a firewall policy.
* [computeNetworkFirewallPoliciesCloneRules](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesclonerules) - Copies rules to the specified firewall policy.
* [computeNetworkFirewallPoliciesDelete](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesdelete) - Deletes the specified policy.
* [computeNetworkFirewallPoliciesGet](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesget) - Returns the specified network firewall policy.
* [computeNetworkFirewallPoliciesGetAssociation](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeNetworkFirewallPoliciesGetIamPolicy](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNetworkFirewallPoliciesGetRule](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeNetworkFirewallPoliciesInsert](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeNetworkFirewallPoliciesList](docs/networkfirewallpolicies/README.md#computenetworkfirewallpolicieslist) - Lists all the policies that have been configured for the specified project.
* [computeNetworkFirewallPoliciesPatch](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciespatch) - Patches the specified policy with the data included in the request.
* [computeNetworkFirewallPoliciesPatchRule](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeNetworkFirewallPoliciesRemoveAssociation](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesremoveassociation) - Removes an association for the specified firewall policy.
* [computeNetworkFirewallPoliciesRemoveRule](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeNetworkFirewallPoliciesSetIamPolicy](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNetworkFirewallPoliciesTestIamPermissions](docs/networkfirewallpolicies/README.md#computenetworkfirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [networks](docs/networks/README.md)

* [computeNetworksAddPeering](docs/networks/README.md#computenetworksaddpeering) - Adds a peering to the specified network.
* [computeNetworksDelete](docs/networks/README.md#computenetworksdelete) - Deletes the specified network.
* [computeNetworksGet](docs/networks/README.md#computenetworksget) - Returns the specified network.
* [computeNetworksGetEffectiveFirewalls](docs/networks/README.md#computenetworksgeteffectivefirewalls) - Returns the effective firewalls on a given network.
* [computeNetworksInsert](docs/networks/README.md#computenetworksinsert) - Creates a network in the specified project using the data included in the request.
* [computeNetworksList](docs/networks/README.md#computenetworkslist) - Retrieves the list of networks available to the specified project.
* [computeNetworksListPeeringRoutes](docs/networks/README.md#computenetworkslistpeeringroutes) - Lists the peering routes exchanged over peering connection.
* [computeNetworksPatch](docs/networks/README.md#computenetworkspatch) - Patches the specified network with the data included in the request. Only the following fields can be modified: routingConfig.routingMode.
* [computeNetworksRemovePeering](docs/networks/README.md#computenetworksremovepeering) - Removes a peering from the specified network.
* [computeNetworksSwitchToCustomMode](docs/networks/README.md#computenetworksswitchtocustommode) - Switches the network mode from auto subnet mode to custom subnet mode.
* [computeNetworksTestIamPermissions](docs/networks/README.md#computenetworkstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeNetworksUpdatePeering](docs/networks/README.md#computenetworksupdatepeering) - Updates the specified network peering with the data included in the request. You can only modify the NetworkPeering.export_custom_routes field and the NetworkPeering.import_custom_routes field.

### [nodeGroups](docs/nodegroups/README.md)

* [computeNodeGroupsAddNodes](docs/nodegroups/README.md#computenodegroupsaddnodes) - Adds specified number of nodes to the node group.
* [computeNodeGroupsAggregatedList](docs/nodegroups/README.md#computenodegroupsaggregatedlist) - Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group.
* [computeNodeGroupsDelete](docs/nodegroups/README.md#computenodegroupsdelete) - Deletes the specified NodeGroup resource.
* [computeNodeGroupsDeleteNodes](docs/nodegroups/README.md#computenodegroupsdeletenodes) - Deletes specified nodes from the node group.
* [computeNodeGroupsGet](docs/nodegroups/README.md#computenodegroupsget) - Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the "nodes" field should not be used. Use nodeGroups.listNodes instead.
* [computeNodeGroupsGetIamPolicy](docs/nodegroups/README.md#computenodegroupsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNodeGroupsInsert](docs/nodegroups/README.md#computenodegroupsinsert) - Creates a NodeGroup resource in the specified project using the data included in the request.
* [computeNodeGroupsList](docs/nodegroups/README.md#computenodegroupslist) - Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details about each group.
* [computeNodeGroupsListNodes](docs/nodegroups/README.md#computenodegroupslistnodes) - Lists nodes in the node group.
* [computeNodeGroupsPatch](docs/nodegroups/README.md#computenodegroupspatch) - Updates the specified node group.
* [computeNodeGroupsSetIamPolicy](docs/nodegroups/README.md#computenodegroupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNodeGroupsSetNodeTemplate](docs/nodegroups/README.md#computenodegroupssetnodetemplate) - Updates the node template of the node group.
* [computeNodeGroupsSimulateMaintenanceEvent](docs/nodegroups/README.md#computenodegroupssimulatemaintenanceevent) - Simulates maintenance event on specified nodes from the node group.
* [computeNodeGroupsTestIamPermissions](docs/nodegroups/README.md#computenodegroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [nodeTemplates](docs/nodetemplates/README.md)

* [computeNodeTemplatesAggregatedList](docs/nodetemplates/README.md#computenodetemplatesaggregatedlist) - Retrieves an aggregated list of node templates.
* [computeNodeTemplatesDelete](docs/nodetemplates/README.md#computenodetemplatesdelete) - Deletes the specified NodeTemplate resource.
* [computeNodeTemplatesGet](docs/nodetemplates/README.md#computenodetemplatesget) - Returns the specified node template.
* [computeNodeTemplatesGetIamPolicy](docs/nodetemplates/README.md#computenodetemplatesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNodeTemplatesInsert](docs/nodetemplates/README.md#computenodetemplatesinsert) - Creates a NodeTemplate resource in the specified project using the data included in the request.
* [computeNodeTemplatesList](docs/nodetemplates/README.md#computenodetemplateslist) - Retrieves a list of node templates available to the specified project.
* [computeNodeTemplatesSetIamPolicy](docs/nodetemplates/README.md#computenodetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNodeTemplatesTestIamPermissions](docs/nodetemplates/README.md#computenodetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [nodeTypes](docs/nodetypes/README.md)

* [computeNodeTypesAggregatedList](docs/nodetypes/README.md#computenodetypesaggregatedlist) - Retrieves an aggregated list of node types.
* [computeNodeTypesGet](docs/nodetypes/README.md#computenodetypesget) - Returns the specified node type.
* [computeNodeTypesList](docs/nodetypes/README.md#computenodetypeslist) - Retrieves a list of node types available to the specified project.

### [organizationSecurityPolicies](docs/organizationsecuritypolicies/README.md)

* [computeOrganizationSecurityPoliciesAddAssociation](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciesaddassociation) - Inserts an association for the specified security policy.
* [computeOrganizationSecurityPoliciesAddRule](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciesaddrule) - Inserts a rule into a security policy.
* [computeOrganizationSecurityPoliciesCopyRules](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciescopyrules) - Copies rules to the specified security policy.
* [computeOrganizationSecurityPoliciesDelete](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciesdelete) - Deletes the specified policy.
* [computeOrganizationSecurityPoliciesGet](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeOrganizationSecurityPoliciesGetAssociation](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciesgetassociation) - Gets an association with the specified name.
* [computeOrganizationSecurityPoliciesGetRule](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciesgetrule) - Gets a rule at the specified priority.
* [computeOrganizationSecurityPoliciesInsert](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeOrganizationSecurityPoliciesList](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypolicieslist) - List all the policies that have been configured for the specified project.
* [computeOrganizationSecurityPoliciesListAssociations](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypolicieslistassociations) - Lists associations of a specified target, i.e., organization or folder.
* [computeOrganizationSecurityPoliciesMove](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciesmove) - Moves the specified security policy.
* [computeOrganizationSecurityPoliciesPatch](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciespatch) - Patches the specified policy with the data included in the request.
* [computeOrganizationSecurityPoliciesPatchRule](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciespatchrule) - Patches a rule at the specified priority.
* [computeOrganizationSecurityPoliciesRemoveAssociation](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciesremoveassociation) - Removes an association for the specified security policy.
* [computeOrganizationSecurityPoliciesRemoveRule](docs/organizationsecuritypolicies/README.md#computeorganizationsecuritypoliciesremoverule) - Deletes a rule at the specified priority.

### [packetMirrorings](docs/packetmirrorings/README.md)

* [computePacketMirroringsAggregatedList](docs/packetmirrorings/README.md#computepacketmirroringsaggregatedlist) - Retrieves an aggregated list of packetMirrorings.
* [computePacketMirroringsDelete](docs/packetmirrorings/README.md#computepacketmirroringsdelete) - Deletes the specified PacketMirroring resource.
* [computePacketMirroringsGet](docs/packetmirrorings/README.md#computepacketmirroringsget) - Returns the specified PacketMirroring resource.
* [computePacketMirroringsInsert](docs/packetmirrorings/README.md#computepacketmirroringsinsert) - Creates a PacketMirroring resource in the specified project and region using the data included in the request.
* [computePacketMirroringsList](docs/packetmirrorings/README.md#computepacketmirroringslist) - Retrieves a list of PacketMirroring resources available to the specified project and region.
* [computePacketMirroringsPatch](docs/packetmirrorings/README.md#computepacketmirroringspatch) - Patches the specified PacketMirroring resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computePacketMirroringsTestIamPermissions](docs/packetmirrorings/README.md#computepacketmirroringstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [projects](docs/projects/README.md)

* [computeProjectsDisableXpnHost](docs/projects/README.md#computeprojectsdisablexpnhost) - Disable this project as a shared VPC host project.
* [computeProjectsDisableXpnResource](docs/projects/README.md#computeprojectsdisablexpnresource) - Disable a service resource (also known as service project) associated with this host project.
* [computeProjectsEnableXpnHost](docs/projects/README.md#computeprojectsenablexpnhost) - Enable this project as a shared VPC host project.
* [computeProjectsEnableXpnResource](docs/projects/README.md#computeprojectsenablexpnresource) - Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.
* [computeProjectsGet](docs/projects/README.md#computeprojectsget) - Returns the specified Project resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.
* [computeProjectsGetXpnHost](docs/projects/README.md#computeprojectsgetxpnhost) - Gets the shared VPC host project that this project links to. May be empty if no link exists.
* [computeProjectsGetXpnResources](docs/projects/README.md#computeprojectsgetxpnresources) - Gets service resources (a.k.a service project) associated with this host project.
* [computeProjectsListXpnHosts](docs/projects/README.md#computeprojectslistxpnhosts) - Lists all shared VPC host projects visible to the user in an organization.
* [computeProjectsMoveDisk](docs/projects/README.md#computeprojectsmovedisk) - Moves a persistent disk from one zone to another.
* [computeProjectsMoveInstance](docs/projects/README.md#computeprojectsmoveinstance) - Moves an instance and its attached persistent disks from one zone to another. *Note*: Moving VMs or disks by using this method might cause unexpected behavior. For more information, see the [known issue](/compute/docs/troubleshooting/known-issues#moving_vms_or_disks_using_the_moveinstance_api_or_the_causes_unexpected_behavior).
* [computeProjectsSetCommonInstanceMetadata](docs/projects/README.md#computeprojectssetcommoninstancemetadata) - Sets metadata common to all instances within the specified project using the data included in the request.
* [computeProjectsSetDefaultNetworkTier](docs/projects/README.md#computeprojectssetdefaultnetworktier) - Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance is created without specifying the network tier field.
* [computeProjectsSetUsageExportBucket](docs/projects/README.md#computeprojectssetusageexportbucket) - Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.

### [publicAdvertisedPrefixes](docs/publicadvertisedprefixes/README.md)

* [computePublicAdvertisedPrefixesDelete](docs/publicadvertisedprefixes/README.md#computepublicadvertisedprefixesdelete) - Deletes the specified PublicAdvertisedPrefix
* [computePublicAdvertisedPrefixesGet](docs/publicadvertisedprefixes/README.md#computepublicadvertisedprefixesget) - Returns the specified PublicAdvertisedPrefix resource.
* [computePublicAdvertisedPrefixesInsert](docs/publicadvertisedprefixes/README.md#computepublicadvertisedprefixesinsert) - Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.
* [computePublicAdvertisedPrefixesList](docs/publicadvertisedprefixes/README.md#computepublicadvertisedprefixeslist) - Lists the PublicAdvertisedPrefixes for a project.
* [computePublicAdvertisedPrefixesPatch](docs/publicadvertisedprefixes/README.md#computepublicadvertisedprefixespatch) - Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### [publicDelegatedPrefixes](docs/publicdelegatedprefixes/README.md)

* [computePublicDelegatedPrefixesAggregatedList](docs/publicdelegatedprefixes/README.md#computepublicdelegatedprefixesaggregatedlist) - Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.
* [computePublicDelegatedPrefixesDelete](docs/publicdelegatedprefixes/README.md#computepublicdelegatedprefixesdelete) - Deletes the specified PublicDelegatedPrefix in the given region.
* [computePublicDelegatedPrefixesGet](docs/publicdelegatedprefixes/README.md#computepublicdelegatedprefixesget) - Returns the specified PublicDelegatedPrefix resource in the given region.
* [computePublicDelegatedPrefixesInsert](docs/publicdelegatedprefixes/README.md#computepublicdelegatedprefixesinsert) - Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.
* [computePublicDelegatedPrefixesList](docs/publicdelegatedprefixes/README.md#computepublicdelegatedprefixeslist) - Lists the PublicDelegatedPrefixes for a project in the given region.
* [computePublicDelegatedPrefixesPatch](docs/publicdelegatedprefixes/README.md#computepublicdelegatedprefixespatch) - Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### [regionAutoscalers](docs/regionautoscalers/README.md)

* [computeRegionAutoscalersDelete](docs/regionautoscalers/README.md#computeregionautoscalersdelete) - Deletes the specified autoscaler.
* [computeRegionAutoscalersGet](docs/regionautoscalers/README.md#computeregionautoscalersget) - Returns the specified autoscaler.
* [computeRegionAutoscalersInsert](docs/regionautoscalers/README.md#computeregionautoscalersinsert) - Creates an autoscaler in the specified project using the data included in the request.
* [computeRegionAutoscalersList](docs/regionautoscalers/README.md#computeregionautoscalerslist) - Retrieves a list of autoscalers contained within the specified region.
* [computeRegionAutoscalersPatch](docs/regionautoscalers/README.md#computeregionautoscalerspatch) - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionAutoscalersTestIamPermissions](docs/regionautoscalers/README.md#computeregionautoscalerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionAutoscalersUpdate](docs/regionautoscalers/README.md#computeregionautoscalersupdate) - Updates an autoscaler in the specified project using the data included in the request.

### [regionBackendServices](docs/regionbackendservices/README.md)

* [computeRegionBackendServicesDelete](docs/regionbackendservices/README.md#computeregionbackendservicesdelete) - Deletes the specified regional BackendService resource.
* [computeRegionBackendServicesGet](docs/regionbackendservices/README.md#computeregionbackendservicesget) - Returns the specified regional BackendService resource.
* [computeRegionBackendServicesGetHealth](docs/regionbackendservices/README.md#computeregionbackendservicesgethealth) - Gets the most recent health check results for this regional BackendService.
* [computeRegionBackendServicesGetIamPolicy](docs/regionbackendservices/README.md#computeregionbackendservicesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeRegionBackendServicesInsert](docs/regionbackendservices/README.md#computeregionbackendservicesinsert) - Creates a regional BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview.
* [computeRegionBackendServicesList](docs/regionbackendservices/README.md#computeregionbackendserviceslist) - Retrieves the list of regional BackendService resources available to the specified project in the given region.
* [computeRegionBackendServicesPatch](docs/regionbackendservices/README.md#computeregionbackendservicespatch) - Updates the specified regional BackendService resource with the data included in the request. For more information, see Understanding backend services This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionBackendServicesSetIamPolicy](docs/regionbackendservices/README.md#computeregionbackendservicessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeRegionBackendServicesTestIamPermissions](docs/regionbackendservices/README.md#computeregionbackendservicestestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionBackendServicesUpdate](docs/regionbackendservices/README.md#computeregionbackendservicesupdate) - Updates the specified regional BackendService resource with the data included in the request. For more information, see Backend services overview .

### [regionCommitments](docs/regioncommitments/README.md)

* [computeRegionCommitmentsAggregatedList](docs/regioncommitments/README.md#computeregioncommitmentsaggregatedlist) - Retrieves an aggregated list of commitments by region.
* [computeRegionCommitmentsGet](docs/regioncommitments/README.md#computeregioncommitmentsget) - Returns the specified commitment resource.
* [computeRegionCommitmentsInsert](docs/regioncommitments/README.md#computeregioncommitmentsinsert) - Creates a commitment in the specified project using the data included in the request.
* [computeRegionCommitmentsList](docs/regioncommitments/README.md#computeregioncommitmentslist) - Retrieves a list of commitments contained within the specified region.
* [computeRegionCommitmentsTestIamPermissions](docs/regioncommitments/README.md#computeregioncommitmentstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionCommitmentsUpdate](docs/regioncommitments/README.md#computeregioncommitmentsupdate) - Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: auto_renew.
* [computeRegionCommitmentsUpdateReservations](docs/regioncommitments/README.md#computeregioncommitmentsupdatereservations) - Transfers GPUs or local SSDs between reservations within commitments.

### [regionDiskTypes](docs/regiondisktypes/README.md)

* [computeRegionDiskTypesGet](docs/regiondisktypes/README.md#computeregiondisktypesget) - Returns the specified regional disk type.
* [computeRegionDiskTypesList](docs/regiondisktypes/README.md#computeregiondisktypeslist) - Retrieves a list of regional disk types available to the specified project.

### [regionDisks](docs/regiondisks/README.md)

* [computeRegionDisksAddResourcePolicies](docs/regiondisks/README.md#computeregiondisksaddresourcepolicies) - Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
* [computeRegionDisksBulkInsert](docs/regiondisks/README.md#computeregiondisksbulkinsert) - Bulk create a set of disks.
* [computeRegionDisksCreateSnapshot](docs/regiondisks/README.md#computeregiondiskscreatesnapshot) - Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
* [computeRegionDisksDelete](docs/regiondisks/README.md#computeregiondisksdelete) - Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
* [computeRegionDisksGet](docs/regiondisks/README.md#computeregiondisksget) - Returns a specified regional persistent disk.
* [computeRegionDisksGetIamPolicy](docs/regiondisks/README.md#computeregiondisksgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeRegionDisksInsert](docs/regiondisks/README.md#computeregiondisksinsert) - Creates a persistent regional disk in the specified project using the data included in the request.
* [computeRegionDisksList](docs/regiondisks/README.md#computeregiondiskslist) - Retrieves the list of persistent disks contained within the specified region.
* [computeRegionDisksRemoveResourcePolicies](docs/regiondisks/README.md#computeregiondisksremoveresourcepolicies) - Removes resource policies from a regional disk.
* [computeRegionDisksResize](docs/regiondisks/README.md#computeregiondisksresize) - Resizes the specified regional persistent disk.
* [computeRegionDisksSetIamPolicy](docs/regiondisks/README.md#computeregiondiskssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeRegionDisksSetLabels](docs/regiondisks/README.md#computeregiondiskssetlabels) - Sets the labels on the target regional disk.
* [computeRegionDisksStartAsyncReplication](docs/regiondisks/README.md#computeregiondisksstartasyncreplication) - Starts asynchronous replication. Must be invoked on the primary disk.
* [computeRegionDisksStopAsyncReplication](docs/regiondisks/README.md#computeregiondisksstopasyncreplication) - Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
* [computeRegionDisksStopGroupAsyncReplication](docs/regiondisks/README.md#computeregiondisksstopgroupasyncreplication) - Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.
* [computeRegionDisksTestIamPermissions](docs/regiondisks/README.md#computeregiondiskstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionDisksUpdate](docs/regiondisks/README.md#computeregiondisksupdate) - Update the specified disk with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

### [regionHealthCheckServices](docs/regionhealthcheckservices/README.md)

* [computeRegionHealthCheckServicesDelete](docs/regionhealthcheckservices/README.md#computeregionhealthcheckservicesdelete) - Deletes the specified regional HealthCheckService.
* [computeRegionHealthCheckServicesGet](docs/regionhealthcheckservices/README.md#computeregionhealthcheckservicesget) - Returns the specified regional HealthCheckService resource.
* [computeRegionHealthCheckServicesInsert](docs/regionhealthcheckservices/README.md#computeregionhealthcheckservicesinsert) - Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.
* [computeRegionHealthCheckServicesList](docs/regionhealthcheckservices/README.md#computeregionhealthcheckserviceslist) - Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
* [computeRegionHealthCheckServicesPatch](docs/regionhealthcheckservices/README.md#computeregionhealthcheckservicespatch) - Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionHealthCheckServicesTestIamPermissions](docs/regionhealthcheckservices/README.md#computeregionhealthcheckservicestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [regionHealthChecks](docs/regionhealthchecks/README.md)

* [computeRegionHealthChecksDelete](docs/regionhealthchecks/README.md#computeregionhealthchecksdelete) - Deletes the specified HealthCheck resource.
* [computeRegionHealthChecksGet](docs/regionhealthchecks/README.md#computeregionhealthchecksget) - Returns the specified HealthCheck resource.
* [computeRegionHealthChecksInsert](docs/regionhealthchecks/README.md#computeregionhealthchecksinsert) - Creates a HealthCheck resource in the specified project using the data included in the request.
* [computeRegionHealthChecksList](docs/regionhealthchecks/README.md#computeregionhealthcheckslist) - Retrieves the list of HealthCheck resources available to the specified project.
* [computeRegionHealthChecksPatch](docs/regionhealthchecks/README.md#computeregionhealthcheckspatch) - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionHealthChecksTestIamPermissions](docs/regionhealthchecks/README.md#computeregionhealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionHealthChecksUpdate](docs/regionhealthchecks/README.md#computeregionhealthchecksupdate) - Updates a HealthCheck resource in the specified project using the data included in the request.

### [regionInstanceGroupManagers](docs/regioninstancegroupmanagers/README.md)

* [computeRegionInstanceGroupManagersAbandonInstances](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersabandoninstances) - Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersApplyUpdatesToInstances](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersapplyupdatestoinstances) - Apply updates to selected instances the managed instance group.
* [computeRegionInstanceGroupManagersCreateInstances](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerscreateinstances) - Creates instances with per-instance configurations in this regional managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
* [computeRegionInstanceGroupManagersDelete](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersdelete) - Deletes the specified managed instance group and all of the instances in that group.
* [computeRegionInstanceGroupManagersDeleteInstances](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersdeleteinstances) - Flags the specified instances in the managed instance group to be immediately deleted. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. The deleteInstances operation is marked DONE if the deleteInstances request is successful. The underlying actions take additional time. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersDeletePerInstanceConfigs](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersdeleteperinstanceconfigs) - Deletes selected per-instance configurations for the managed instance group.
* [computeRegionInstanceGroupManagersGet](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersget) - Returns all of the details about the specified managed instance group.
* [computeRegionInstanceGroupManagersInsert](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersinsert) - Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A regional managed instance group can contain up to 2000 instances.
* [computeRegionInstanceGroupManagersList](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerslist) - Retrieves the list of managed instance groups that are contained within the specified region.
* [computeRegionInstanceGroupManagersListErrors](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerslisterrors) - Lists all errors thrown by actions on instances for a given regional managed instance group. The filter and orderBy query parameters are not supported.
* [computeRegionInstanceGroupManagersListManagedInstances](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerslistmanagedinstances) - Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.
* [computeRegionInstanceGroupManagersListPerInstanceConfigs](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerslistperinstanceconfigs) - Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.
* [computeRegionInstanceGroupManagersPatch](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerspatch) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeRegionInstanceGroupManagersPatchPerInstanceConfigs](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerspatchperinstanceconfigs) - Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
* [computeRegionInstanceGroupManagersRecreateInstances](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersrecreateinstances) - Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersResize](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersresize) - Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeRegionInstanceGroupManagersResizeAdvanced](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersresizeadvanced) - Resizes the regional managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeRegionInstanceGroupManagersSetAutoHealingPolicies](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerssetautohealingpolicies) - Modifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use regionInstanceGroupManagers.patch instead.
* [computeRegionInstanceGroupManagersSetInstanceTemplate](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerssetinstancetemplate) - Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
* [computeRegionInstanceGroupManagersSetTargetPools](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerssettargetpools) - Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
* [computeRegionInstanceGroupManagersTestIamPermissions](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionInstanceGroupManagersUpdate](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersupdate) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listmanagedinstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeRegionInstanceGroupManagersUpdatePerInstanceConfigs](docs/regioninstancegroupmanagers/README.md#computeregioninstancegroupmanagersupdateperinstanceconfigs) - Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### [regionInstanceGroups](docs/regioninstancegroups/README.md)

* [computeRegionInstanceGroupsGet](docs/regioninstancegroups/README.md#computeregioninstancegroupsget) - Returns the specified instance group resource.
* [computeRegionInstanceGroupsList](docs/regioninstancegroups/README.md#computeregioninstancegroupslist) - Retrieves the list of instance group resources contained within the specified region.
* [computeRegionInstanceGroupsListInstances](docs/regioninstancegroups/README.md#computeregioninstancegroupslistinstances) - Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running. The orderBy query parameter is not supported.
* [computeRegionInstanceGroupsSetNamedPorts](docs/regioninstancegroups/README.md#computeregioninstancegroupssetnamedports) - Sets the named ports for the specified regional instance group.
* [computeRegionInstanceGroupsTestIamPermissions](docs/regioninstancegroups/README.md#computeregioninstancegroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [regionInstanceTemplates](docs/regioninstancetemplates/README.md)

* [computeRegionInstanceTemplatesDelete](docs/regioninstancetemplates/README.md#computeregioninstancetemplatesdelete) - Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone.
* [computeRegionInstanceTemplatesGet](docs/regioninstancetemplates/README.md#computeregioninstancetemplatesget) - Returns the specified instance template.
* [computeRegionInstanceTemplatesInsert](docs/regioninstancetemplates/README.md#computeregioninstancetemplatesinsert) - Creates an instance template in the specified project and region using the global instance template whose URL is included in the request.
* [computeRegionInstanceTemplatesList](docs/regioninstancetemplates/README.md#computeregioninstancetemplateslist) - Retrieves a list of instance templates that are contained within the specified project and region.

### [regionInstances](docs/regioninstances/README.md)

* [computeRegionInstancesBulkInsert](docs/regioninstances/README.md#computeregioninstancesbulkinsert) - Creates multiple instances in a given region. Count specifies the number of instances to create.

### [regionNetworkEndpointGroups](docs/regionnetworkendpointgroups/README.md)

* [computeRegionNetworkEndpointGroupsDelete](docs/regionnetworkendpointgroups/README.md#computeregionnetworkendpointgroupsdelete) - Deletes the specified network endpoint group. Note that the NEG cannot be deleted if it is configured as a backend of a backend service.
* [computeRegionNetworkEndpointGroupsGet](docs/regionnetworkendpointgroups/README.md#computeregionnetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeRegionNetworkEndpointGroupsInsert](docs/regionnetworkendpointgroups/README.md#computeregionnetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeRegionNetworkEndpointGroupsList](docs/regionnetworkendpointgroups/README.md#computeregionnetworkendpointgroupslist) - Retrieves the list of regional network endpoint groups available to the specified project in the given region.

### [regionNetworkFirewallPolicies](docs/regionnetworkfirewallpolicies/README.md)

* [computeRegionNetworkFirewallPoliciesAddAssociation](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesaddassociation) - Inserts an association for the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesAddRule](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesaddrule) - Inserts a rule into a network firewall policy.
* [computeRegionNetworkFirewallPoliciesCloneRules](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesclonerules) - Copies rules to the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesDelete](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesdelete) - Deletes the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesGet](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesget) - Returns the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesGetAssociation](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesgeteffectivefirewalls) - Returns the effective firewalls on a given network.
* [computeRegionNetworkFirewallPoliciesGetIamPolicy](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeRegionNetworkFirewallPoliciesGetRule](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeRegionNetworkFirewallPoliciesInsert](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesinsert) - Creates a new network firewall policy in the specified project and region.
* [computeRegionNetworkFirewallPoliciesList](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpolicieslist) - Lists all the network firewall policies that have been configured for the specified project in the given region.
* [computeRegionNetworkFirewallPoliciesPatch](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciespatch) - Patches the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesPatchRule](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeRegionNetworkFirewallPoliciesRemoveAssociation](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesremoveassociation) - Removes an association for the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesRemoveRule](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeRegionNetworkFirewallPoliciesSetIamPolicy](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeRegionNetworkFirewallPoliciesTestIamPermissions](docs/regionnetworkfirewallpolicies/README.md#computeregionnetworkfirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [regionNotificationEndpoints](docs/regionnotificationendpoints/README.md)

* [computeRegionNotificationEndpointsDelete](docs/regionnotificationendpoints/README.md#computeregionnotificationendpointsdelete) - Deletes the specified NotificationEndpoint in the given region
* [computeRegionNotificationEndpointsGet](docs/regionnotificationendpoints/README.md#computeregionnotificationendpointsget) - Returns the specified NotificationEndpoint resource in the given region.
* [computeRegionNotificationEndpointsInsert](docs/regionnotificationendpoints/README.md#computeregionnotificationendpointsinsert) - Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.
* [computeRegionNotificationEndpointsList](docs/regionnotificationendpoints/README.md#computeregionnotificationendpointslist) - Lists the NotificationEndpoints for a project in the given region.
* [computeRegionNotificationEndpointsTestIamPermissions](docs/regionnotificationendpoints/README.md#computeregionnotificationendpointstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [regionOperations](docs/regionoperations/README.md)

* [computeRegionOperationsDelete](docs/regionoperations/README.md#computeregionoperationsdelete) - Deletes the specified region-specific Operations resource.
* [computeRegionOperationsGet](docs/regionoperations/README.md#computeregionoperationsget) - Retrieves the specified region-specific Operations resource.
* [computeRegionOperationsList](docs/regionoperations/README.md#computeregionoperationslist) - Retrieves a list of Operation resources contained within the specified region.
* [computeRegionOperationsWait](docs/regionoperations/README.md#computeregionoperationswait) - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### [regionSecurityPolicies](docs/regionsecuritypolicies/README.md)

* [computeRegionSecurityPoliciesAddRule](docs/regionsecuritypolicies/README.md#computeregionsecuritypoliciesaddrule) - Inserts a rule into a security policy.
* [computeRegionSecurityPoliciesDelete](docs/regionsecuritypolicies/README.md#computeregionsecuritypoliciesdelete) - Deletes the specified policy.
* [computeRegionSecurityPoliciesGet](docs/regionsecuritypolicies/README.md#computeregionsecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeRegionSecurityPoliciesGetRule](docs/regionsecuritypolicies/README.md#computeregionsecuritypoliciesgetrule) - Gets a rule at the specified priority.
* [computeRegionSecurityPoliciesInsert](docs/regionsecuritypolicies/README.md#computeregionsecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeRegionSecurityPoliciesList](docs/regionsecuritypolicies/README.md#computeregionsecuritypolicieslist) - List all the policies that have been configured for the specified project and region.
* [computeRegionSecurityPoliciesPatch](docs/regionsecuritypolicies/README.md#computeregionsecuritypoliciespatch) - Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
* [computeRegionSecurityPoliciesPatchRule](docs/regionsecuritypolicies/README.md#computeregionsecuritypoliciespatchrule) - Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.
* [computeRegionSecurityPoliciesRemoveRule](docs/regionsecuritypolicies/README.md#computeregionsecuritypoliciesremoverule) - Deletes a rule at the specified priority.

### [regionSslCertificates](docs/regionsslcertificates/README.md)

* [computeRegionSslCertificatesDelete](docs/regionsslcertificates/README.md#computeregionsslcertificatesdelete) - Deletes the specified SslCertificate resource in the region.
* [computeRegionSslCertificatesGet](docs/regionsslcertificates/README.md#computeregionsslcertificatesget) - Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by making a list() request.
* [computeRegionSslCertificatesInsert](docs/regionsslcertificates/README.md#computeregionsslcertificatesinsert) - Creates a SslCertificate resource in the specified project and region using the data included in the request
* [computeRegionSslCertificatesList](docs/regionsslcertificates/README.md#computeregionsslcertificateslist) - Retrieves the list of SslCertificate resources available to the specified project in the specified region.
* [computeRegionSslCertificatesTestIamPermissions](docs/regionsslcertificates/README.md#computeregionsslcertificatestestiampermissions) - Returns permissions that a caller has on the specified resource and region.

### [regionSslPolicies](docs/regionsslpolicies/README.md)

* [computeRegionSslPoliciesDelete](docs/regionsslpolicies/README.md#computeregionsslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeRegionSslPoliciesGet](docs/regionsslpolicies/README.md#computeregionsslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeRegionSslPoliciesInsert](docs/regionsslpolicies/README.md#computeregionsslpoliciesinsert) - Creates a new policy in the specified project and region using the data included in the request.
* [computeRegionSslPoliciesList](docs/regionsslpolicies/README.md#computeregionsslpolicieslist) - Lists all the SSL policies that have been configured for the specified project and region.
* [computeRegionSslPoliciesListAvailableFeatures](docs/regionsslpolicies/README.md#computeregionsslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeRegionSslPoliciesPatch](docs/regionsslpolicies/README.md#computeregionsslpoliciespatch) - Patches the specified SSL policy with the data included in the request.
* [computeRegionSslPoliciesTestIamPermissions](docs/regionsslpolicies/README.md#computeregionsslpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [regionTargetHttpProxies](docs/regiontargethttpproxies/README.md)

* [computeRegionTargetHttpProxiesDelete](docs/regiontargethttpproxies/README.md#computeregiontargethttpproxiesdelete) - Deletes the specified TargetHttpProxy resource.
* [computeRegionTargetHttpProxiesGet](docs/regiontargethttpproxies/README.md#computeregiontargethttpproxiesget) - Returns the specified TargetHttpProxy resource in the specified region.
* [computeRegionTargetHttpProxiesInsert](docs/regiontargethttpproxies/README.md#computeregiontargethttpproxiesinsert) - Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetHttpProxiesList](docs/regiontargethttpproxies/README.md#computeregiontargethttpproxieslist) - Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.
* [computeRegionTargetHttpProxiesSetUrlMap](docs/regiontargethttpproxies/README.md#computeregiontargethttpproxiesseturlmap) - Changes the URL map for TargetHttpProxy.
* [computeRegionTargetHttpProxiesTestIamPermissions](docs/regiontargethttpproxies/README.md#computeregiontargethttpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [regionTargetHttpsProxies](docs/regiontargethttpsproxies/README.md)

* [computeRegionTargetHttpsProxiesDelete](docs/regiontargethttpsproxies/README.md#computeregiontargethttpsproxiesdelete) - Deletes the specified TargetHttpsProxy resource.
* [computeRegionTargetHttpsProxiesGet](docs/regiontargethttpsproxies/README.md#computeregiontargethttpsproxiesget) - Returns the specified TargetHttpsProxy resource in the specified region.
* [computeRegionTargetHttpsProxiesInsert](docs/regiontargethttpsproxies/README.md#computeregiontargethttpsproxiesinsert) - Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetHttpsProxiesList](docs/regiontargethttpsproxies/README.md#computeregiontargethttpsproxieslist) - Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.
* [computeRegionTargetHttpsProxiesPatch](docs/regiontargethttpsproxies/README.md#computeregiontargethttpsproxiespatch) - Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeRegionTargetHttpsProxiesSetSslCertificates](docs/regiontargethttpsproxies/README.md#computeregiontargethttpsproxiessetsslcertificates) - Replaces SslCertificates for TargetHttpsProxy.
* [computeRegionTargetHttpsProxiesSetUrlMap](docs/regiontargethttpsproxies/README.md#computeregiontargethttpsproxiesseturlmap) - Changes the URL map for TargetHttpsProxy.
* [computeRegionTargetHttpsProxiesTestIamPermissions](docs/regiontargethttpsproxies/README.md#computeregiontargethttpsproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [regionTargetTcpProxies](docs/regiontargettcpproxies/README.md)

* [computeRegionTargetTcpProxiesDelete](docs/regiontargettcpproxies/README.md#computeregiontargettcpproxiesdelete) - Deletes the specified TargetTcpProxy resource.
* [computeRegionTargetTcpProxiesGet](docs/regiontargettcpproxies/README.md#computeregiontargettcpproxiesget) - Returns the specified TargetTcpProxy resource.
* [computeRegionTargetTcpProxiesInsert](docs/regiontargettcpproxies/README.md#computeregiontargettcpproxiesinsert) - Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetTcpProxiesList](docs/regiontargettcpproxies/README.md#computeregiontargettcpproxieslist) - Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.
* [computeRegionTargetTcpProxiesTestIamPermissions](docs/regiontargettcpproxies/README.md#computeregiontargettcpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [regionUrlMaps](docs/regionurlmaps/README.md)

* [computeRegionUrlMapsDelete](docs/regionurlmaps/README.md#computeregionurlmapsdelete) - Deletes the specified UrlMap resource.
* [computeRegionUrlMapsGet](docs/regionurlmaps/README.md#computeregionurlmapsget) - Returns the specified UrlMap resource.
* [computeRegionUrlMapsInsert](docs/regionurlmaps/README.md#computeregionurlmapsinsert) - Creates a UrlMap resource in the specified project using the data included in the request.
* [computeRegionUrlMapsInvalidateCache](docs/regionurlmaps/README.md#computeregionurlmapsinvalidatecache) - Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).
* [computeRegionUrlMapsList](docs/regionurlmaps/README.md#computeregionurlmapslist) - Retrieves the list of UrlMap resources available to the specified project in the specified region.
* [computeRegionUrlMapsPatch](docs/regionurlmaps/README.md#computeregionurlmapspatch) - Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeRegionUrlMapsTestIamPermissions](docs/regionurlmaps/README.md#computeregionurlmapstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionUrlMapsUpdate](docs/regionurlmaps/README.md#computeregionurlmapsupdate) - Updates the specified UrlMap resource with the data included in the request.
* [computeRegionUrlMapsValidate](docs/regionurlmaps/README.md#computeregionurlmapsvalidate) - Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.

### [regions](docs/regions/README.md)

* [computeRegionsGet](docs/regions/README.md#computeregionsget) - Returns the specified Region resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.
* [computeRegionsList](docs/regions/README.md#computeregionslist) - Retrieves the list of region resources available to the specified project. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `items.quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

### [reservations](docs/reservations/README.md)

* [computeReservationsAggregatedList](docs/reservations/README.md#computereservationsaggregatedlist) - Retrieves an aggregated list of reservations.
* [computeReservationsDelete](docs/reservations/README.md#computereservationsdelete) - Deletes the specified reservation.
* [computeReservationsGet](docs/reservations/README.md#computereservationsget) - Retrieves information about the specified reservation.
* [computeReservationsGetIamPolicy](docs/reservations/README.md#computereservationsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeReservationsInsert](docs/reservations/README.md#computereservationsinsert) - Creates a new reservation. For more information, read Reserving zonal resources.
* [computeReservationsList](docs/reservations/README.md#computereservationslist) - A list of all the reservations that have been configured for the specified project in specified zone.
* [computeReservationsResize](docs/reservations/README.md#computereservationsresize) - Resizes the reservation (applicable to standalone reservations only). For more information, read Modifying reservations.
* [computeReservationsSetIamPolicy](docs/reservations/README.md#computereservationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeReservationsTestIamPermissions](docs/reservations/README.md#computereservationstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeReservationsUpdate](docs/reservations/README.md#computereservationsupdate) - Update share settings of the reservation.

### [resourcePolicies](docs/resourcepolicies/README.md)

* [computeResourcePoliciesAggregatedList](docs/resourcepolicies/README.md#computeresourcepoliciesaggregatedlist) - Retrieves an aggregated list of resource policies.
* [computeResourcePoliciesDelete](docs/resourcepolicies/README.md#computeresourcepoliciesdelete) - Deletes the specified resource policy.
* [computeResourcePoliciesGet](docs/resourcepolicies/README.md#computeresourcepoliciesget) - Retrieves all information of the specified resource policy.
* [computeResourcePoliciesGetIamPolicy](docs/resourcepolicies/README.md#computeresourcepoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeResourcePoliciesInsert](docs/resourcepolicies/README.md#computeresourcepoliciesinsert) - Creates a new resource policy.
* [computeResourcePoliciesList](docs/resourcepolicies/README.md#computeresourcepolicieslist) - A list all the resource policies that have been configured for the specified project in specified region.
* [computeResourcePoliciesPatch](docs/resourcepolicies/README.md#computeresourcepoliciespatch) - Modify the specified resource policy.
* [computeResourcePoliciesSetIamPolicy](docs/resourcepolicies/README.md#computeresourcepoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeResourcePoliciesTestIamPermissions](docs/resourcepolicies/README.md#computeresourcepoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [routers](docs/routers/README.md)

* [computeRoutersAggregatedList](docs/routers/README.md#computeroutersaggregatedlist) - Retrieves an aggregated list of routers.
* [computeRoutersDelete](docs/routers/README.md#computeroutersdelete) - Deletes the specified Router resource.
* [computeRoutersGet](docs/routers/README.md#computeroutersget) - Returns the specified Router resource.
* [computeRoutersGetNatMappingInfo](docs/routers/README.md#computeroutersgetnatmappinginfo) - Retrieves runtime Nat mapping information of VM endpoints.
* [computeRoutersGetRouterStatus](docs/routers/README.md#computeroutersgetrouterstatus) - Retrieves runtime information of the specified router.
* [computeRoutersInsert](docs/routers/README.md#computeroutersinsert) - Creates a Router resource in the specified project and region using the data included in the request.
* [computeRoutersList](docs/routers/README.md#computerouterslist) - Retrieves a list of Router resources available to the specified project.
* [computeRoutersPatch](docs/routers/README.md#computerouterspatch) - Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeRoutersPreview](docs/routers/README.md#computerouterspreview) - Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
* [computeRoutersTestIamPermissions](docs/routers/README.md#computerouterstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRoutersUpdate](docs/routers/README.md#computeroutersupdate) - Updates the specified Router resource with the data included in the request. This method conforms to PUT semantics, which requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.

### [routes](docs/routes/README.md)

* [computeRoutesDelete](docs/routes/README.md#computeroutesdelete) - Deletes the specified Route resource.
* [computeRoutesGet](docs/routes/README.md#computeroutesget) - Returns the specified Route resource.
* [computeRoutesInsert](docs/routes/README.md#computeroutesinsert) - Creates a Route resource in the specified project using the data included in the request.
* [computeRoutesList](docs/routes/README.md#computerouteslist) - Retrieves the list of Route resources available to the specified project.
* [computeRoutesTestIamPermissions](docs/routes/README.md#computeroutestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [securityPolicies](docs/securitypolicies/README.md)

* [computeSecurityPoliciesAddRule](docs/securitypolicies/README.md#computesecuritypoliciesaddrule) - Inserts a rule into a security policy.
* [computeSecurityPoliciesAggregatedList](docs/securitypolicies/README.md#computesecuritypoliciesaggregatedlist) - Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project.
* [computeSecurityPoliciesDelete](docs/securitypolicies/README.md#computesecuritypoliciesdelete) - Deletes the specified policy.
* [computeSecurityPoliciesGet](docs/securitypolicies/README.md#computesecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeSecurityPoliciesGetRule](docs/securitypolicies/README.md#computesecuritypoliciesgetrule) - Gets a rule at the specified priority.
* [computeSecurityPoliciesInsert](docs/securitypolicies/README.md#computesecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeSecurityPoliciesList](docs/securitypolicies/README.md#computesecuritypolicieslist) - List all the policies that have been configured for the specified project.
* [computeSecurityPoliciesListPreconfiguredExpressionSets](docs/securitypolicies/README.md#computesecuritypolicieslistpreconfiguredexpressionsets) - Gets the current list of preconfigured Web Application Firewall (WAF) expressions.
* [computeSecurityPoliciesPatch](docs/securitypolicies/README.md#computesecuritypoliciespatch) - Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
* [computeSecurityPoliciesPatchRule](docs/securitypolicies/README.md#computesecuritypoliciespatchrule) - Patches a rule at the specified priority.
* [computeSecurityPoliciesRemoveRule](docs/securitypolicies/README.md#computesecuritypoliciesremoverule) - Deletes a rule at the specified priority.
* [computeSecurityPoliciesSetLabels](docs/securitypolicies/README.md#computesecuritypoliciessetlabels) - Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.
* [computeSecurityPoliciesTestIamPermissions](docs/securitypolicies/README.md#computesecuritypoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [serviceAttachments](docs/serviceattachments/README.md)

* [computeServiceAttachmentsAggregatedList](docs/serviceattachments/README.md#computeserviceattachmentsaggregatedlist) - Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.
* [computeServiceAttachmentsDelete](docs/serviceattachments/README.md#computeserviceattachmentsdelete) - Deletes the specified ServiceAttachment in the given scope
* [computeServiceAttachmentsGet](docs/serviceattachments/README.md#computeserviceattachmentsget) - Returns the specified ServiceAttachment resource in the given scope.
* [computeServiceAttachmentsGetIamPolicy](docs/serviceattachments/README.md#computeserviceattachmentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeServiceAttachmentsInsert](docs/serviceattachments/README.md#computeserviceattachmentsinsert) - Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.
* [computeServiceAttachmentsList](docs/serviceattachments/README.md#computeserviceattachmentslist) - Lists the ServiceAttachments for a project in the given scope.
* [computeServiceAttachmentsPatch](docs/serviceattachments/README.md#computeserviceattachmentspatch) - Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeServiceAttachmentsSetIamPolicy](docs/serviceattachments/README.md#computeserviceattachmentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeServiceAttachmentsTestIamPermissions](docs/serviceattachments/README.md#computeserviceattachmentstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [snapshots](docs/snapshots/README.md)

* [computeSnapshotsDelete](docs/snapshots/README.md#computesnapshotsdelete) - Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.
* [computeSnapshotsGet](docs/snapshots/README.md#computesnapshotsget) - Returns the specified Snapshot resource.
* [computeSnapshotsGetIamPolicy](docs/snapshots/README.md#computesnapshotsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeSnapshotsInsert](docs/snapshots/README.md#computesnapshotsinsert) - Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.
* [computeSnapshotsList](docs/snapshots/README.md#computesnapshotslist) - Retrieves the list of Snapshot resources contained within the specified project.
* [computeSnapshotsSetIamPolicy](docs/snapshots/README.md#computesnapshotssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeSnapshotsSetLabels](docs/snapshots/README.md#computesnapshotssetlabels) - Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.
* [computeSnapshotsTestIamPermissions](docs/snapshots/README.md#computesnapshotstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [sslCertificates](docs/sslcertificates/README.md)

* [computeSslCertificatesAggregatedList](docs/sslcertificates/README.md#computesslcertificatesaggregatedlist) - Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.
* [computeSslCertificatesDelete](docs/sslcertificates/README.md#computesslcertificatesdelete) - Deletes the specified SslCertificate resource.
* [computeSslCertificatesGet](docs/sslcertificates/README.md#computesslcertificatesget) - Returns the specified SslCertificate resource.
* [computeSslCertificatesInsert](docs/sslcertificates/README.md#computesslcertificatesinsert) - Creates a SslCertificate resource in the specified project using the data included in the request.
* [computeSslCertificatesList](docs/sslcertificates/README.md#computesslcertificateslist) - Retrieves the list of SslCertificate resources available to the specified project.
* [computeSslCertificatesTestIamPermissions](docs/sslcertificates/README.md#computesslcertificatestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [sslPolicies](docs/sslpolicies/README.md)

* [computeSslPoliciesAggregatedList](docs/sslpolicies/README.md#computesslpoliciesaggregatedlist) - Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.
* [computeSslPoliciesDelete](docs/sslpolicies/README.md#computesslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeSslPoliciesGet](docs/sslpolicies/README.md#computesslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeSslPoliciesInsert](docs/sslpolicies/README.md#computesslpoliciesinsert) - Returns the specified SSL policy resource.
* [computeSslPoliciesList](docs/sslpolicies/README.md#computesslpolicieslist) - Lists all the SSL policies that have been configured for the specified project.
* [computeSslPoliciesListAvailableFeatures](docs/sslpolicies/README.md#computesslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeSslPoliciesPatch](docs/sslpolicies/README.md#computesslpoliciespatch) - Patches the specified SSL policy with the data included in the request.
* [computeSslPoliciesTestIamPermissions](docs/sslpolicies/README.md#computesslpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [subnetworks](docs/subnetworks/README.md)

* [computeSubnetworksAggregatedList](docs/subnetworks/README.md#computesubnetworksaggregatedlist) - Retrieves an aggregated list of subnetworks.
* [computeSubnetworksDelete](docs/subnetworks/README.md#computesubnetworksdelete) - Deletes the specified subnetwork.
* [computeSubnetworksExpandIpCidrRange](docs/subnetworks/README.md#computesubnetworksexpandipcidrrange) - Expands the IP CIDR range of the subnetwork to a specified value.
* [computeSubnetworksGet](docs/subnetworks/README.md#computesubnetworksget) - Returns the specified subnetwork.
* [computeSubnetworksGetIamPolicy](docs/subnetworks/README.md#computesubnetworksgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeSubnetworksInsert](docs/subnetworks/README.md#computesubnetworksinsert) - Creates a subnetwork in the specified project using the data included in the request.
* [computeSubnetworksList](docs/subnetworks/README.md#computesubnetworkslist) - Retrieves a list of subnetworks available to the specified project.
* [computeSubnetworksListUsable](docs/subnetworks/README.md#computesubnetworkslistusable) - Retrieves an aggregated list of all usable subnetworks in the project.
* [computeSubnetworksPatch](docs/subnetworks/README.md#computesubnetworkspatch) - Patches the specified subnetwork with the data included in the request. Only certain fields can be updated with a patch request as indicated in the field descriptions. You must specify the current fingerprint of the subnetwork resource being patched.
* [computeSubnetworksSetIamPolicy](docs/subnetworks/README.md#computesubnetworkssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeSubnetworksSetPrivateIpGoogleAccess](docs/subnetworks/README.md#computesubnetworkssetprivateipgoogleaccess) - Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.
* [computeSubnetworksTestIamPermissions](docs/subnetworks/README.md#computesubnetworkstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [targetGrpcProxies](docs/targetgrpcproxies/README.md)

* [computeTargetGrpcProxiesDelete](docs/targetgrpcproxies/README.md#computetargetgrpcproxiesdelete) - Deletes the specified TargetGrpcProxy in the given scope
* [computeTargetGrpcProxiesGet](docs/targetgrpcproxies/README.md#computetargetgrpcproxiesget) - Returns the specified TargetGrpcProxy resource in the given scope.
* [computeTargetGrpcProxiesInsert](docs/targetgrpcproxies/README.md#computetargetgrpcproxiesinsert) - Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.
* [computeTargetGrpcProxiesList](docs/targetgrpcproxies/README.md#computetargetgrpcproxieslist) - Lists the TargetGrpcProxies for a project in the given scope.
* [computeTargetGrpcProxiesPatch](docs/targetgrpcproxies/README.md#computetargetgrpcproxiespatch) - Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetGrpcProxiesTestIamPermissions](docs/targetgrpcproxies/README.md#computetargetgrpcproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [targetHttpProxies](docs/targethttpproxies/README.md)

* [computeTargetHttpProxiesAggregatedList](docs/targethttpproxies/README.md#computetargethttpproxiesaggregatedlist) - Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.
* [computeTargetHttpProxiesDelete](docs/targethttpproxies/README.md#computetargethttpproxiesdelete) - Deletes the specified TargetHttpProxy resource.
* [computeTargetHttpProxiesGet](docs/targethttpproxies/README.md#computetargethttpproxiesget) - Returns the specified TargetHttpProxy resource.
* [computeTargetHttpProxiesInsert](docs/targethttpproxies/README.md#computetargethttpproxiesinsert) - Creates a TargetHttpProxy resource in the specified project using the data included in the request.
* [computeTargetHttpProxiesList](docs/targethttpproxies/README.md#computetargethttpproxieslist) - Retrieves the list of TargetHttpProxy resources available to the specified project.
* [computeTargetHttpProxiesPatch](docs/targethttpproxies/README.md#computetargethttpproxiespatch) - Patches the specified TargetHttpProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetHttpProxiesSetUrlMap](docs/targethttpproxies/README.md#computetargethttpproxiesseturlmap) - Changes the URL map for TargetHttpProxy.
* [computeTargetHttpProxiesTestIamPermissions](docs/targethttpproxies/README.md#computetargethttpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [targetHttpsProxies](docs/targethttpsproxies/README.md)

* [computeTargetHttpsProxiesAggregatedList](docs/targethttpsproxies/README.md#computetargethttpsproxiesaggregatedlist) - Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.
* [computeTargetHttpsProxiesDelete](docs/targethttpsproxies/README.md#computetargethttpsproxiesdelete) - Deletes the specified TargetHttpsProxy resource.
* [computeTargetHttpsProxiesGet](docs/targethttpsproxies/README.md#computetargethttpsproxiesget) - Returns the specified TargetHttpsProxy resource.
* [computeTargetHttpsProxiesInsert](docs/targethttpsproxies/README.md#computetargethttpsproxiesinsert) - Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
* [computeTargetHttpsProxiesList](docs/targethttpsproxies/README.md#computetargethttpsproxieslist) - Retrieves the list of TargetHttpsProxy resources available to the specified project.
* [computeTargetHttpsProxiesPatch](docs/targethttpsproxies/README.md#computetargethttpsproxiespatch) - Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetHttpsProxiesSetCertificateMap](docs/targethttpsproxies/README.md#computetargethttpsproxiessetcertificatemap) - Changes the Certificate Map for TargetHttpsProxy.
* [computeTargetHttpsProxiesSetQuicOverride](docs/targethttpsproxies/README.md#computetargethttpsproxiessetquicoverride) - Sets the QUIC override policy for TargetHttpsProxy.
* [computeTargetHttpsProxiesSetSslCertificates](docs/targethttpsproxies/README.md#computetargethttpsproxiessetsslcertificates) - Replaces SslCertificates for TargetHttpsProxy.
* [computeTargetHttpsProxiesSetSslPolicy](docs/targethttpsproxies/README.md#computetargethttpsproxiessetsslpolicy) - Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.
* [computeTargetHttpsProxiesSetUrlMap](docs/targethttpsproxies/README.md#computetargethttpsproxiesseturlmap) - Changes the URL map for TargetHttpsProxy.
* [computeTargetHttpsProxiesTestIamPermissions](docs/targethttpsproxies/README.md#computetargethttpsproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [targetInstances](docs/targetinstances/README.md)

* [computeTargetInstancesAggregatedList](docs/targetinstances/README.md#computetargetinstancesaggregatedlist) - Retrieves an aggregated list of target instances.
* [computeTargetInstancesDelete](docs/targetinstances/README.md#computetargetinstancesdelete) - Deletes the specified TargetInstance resource.
* [computeTargetInstancesGet](docs/targetinstances/README.md#computetargetinstancesget) - Returns the specified TargetInstance resource.
* [computeTargetInstancesInsert](docs/targetinstances/README.md#computetargetinstancesinsert) - Creates a TargetInstance resource in the specified project and zone using the data included in the request.
* [computeTargetInstancesList](docs/targetinstances/README.md#computetargetinstanceslist) - Retrieves a list of TargetInstance resources available to the specified project and zone.
* [computeTargetInstancesTestIamPermissions](docs/targetinstances/README.md#computetargetinstancestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [targetPools](docs/targetpools/README.md)

* [computeTargetPoolsAddHealthCheck](docs/targetpools/README.md#computetargetpoolsaddhealthcheck) - Adds health check URLs to a target pool.
* [computeTargetPoolsAddInstance](docs/targetpools/README.md#computetargetpoolsaddinstance) - Adds an instance to a target pool.
* [computeTargetPoolsAggregatedList](docs/targetpools/README.md#computetargetpoolsaggregatedlist) - Retrieves an aggregated list of target pools.
* [computeTargetPoolsDelete](docs/targetpools/README.md#computetargetpoolsdelete) - Deletes the specified target pool.
* [computeTargetPoolsGet](docs/targetpools/README.md#computetargetpoolsget) - Returns the specified target pool.
* [computeTargetPoolsGetHealth](docs/targetpools/README.md#computetargetpoolsgethealth) - Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
* [computeTargetPoolsInsert](docs/targetpools/README.md#computetargetpoolsinsert) - Creates a target pool in the specified project and region using the data included in the request.
* [computeTargetPoolsList](docs/targetpools/README.md#computetargetpoolslist) - Retrieves a list of target pools available to the specified project and region.
* [computeTargetPoolsRemoveHealthCheck](docs/targetpools/README.md#computetargetpoolsremovehealthcheck) - Removes health check URL from a target pool.
* [computeTargetPoolsRemoveInstance](docs/targetpools/README.md#computetargetpoolsremoveinstance) - Removes instance URL from a target pool.
* [computeTargetPoolsSetBackup](docs/targetpools/README.md#computetargetpoolssetbackup) - Changes a backup target pool's configurations.
* [computeTargetPoolsTestIamPermissions](docs/targetpools/README.md#computetargetpoolstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [targetSslProxies](docs/targetsslproxies/README.md)

* [computeTargetSslProxiesDelete](docs/targetsslproxies/README.md#computetargetsslproxiesdelete) - Deletes the specified TargetSslProxy resource.
* [computeTargetSslProxiesGet](docs/targetsslproxies/README.md#computetargetsslproxiesget) - Returns the specified TargetSslProxy resource.
* [computeTargetSslProxiesInsert](docs/targetsslproxies/README.md#computetargetsslproxiesinsert) - Creates a TargetSslProxy resource in the specified project using the data included in the request.
* [computeTargetSslProxiesList](docs/targetsslproxies/README.md#computetargetsslproxieslist) - Retrieves the list of TargetSslProxy resources available to the specified project.
* [computeTargetSslProxiesSetBackendService](docs/targetsslproxies/README.md#computetargetsslproxiessetbackendservice) - Changes the BackendService for TargetSslProxy.
* [computeTargetSslProxiesSetCertificateMap](docs/targetsslproxies/README.md#computetargetsslproxiessetcertificatemap) - Changes the Certificate Map for TargetSslProxy.
* [computeTargetSslProxiesSetProxyHeader](docs/targetsslproxies/README.md#computetargetsslproxiessetproxyheader) - Changes the ProxyHeaderType for TargetSslProxy.
* [computeTargetSslProxiesSetSslCertificates](docs/targetsslproxies/README.md#computetargetsslproxiessetsslcertificates) - Changes SslCertificates for TargetSslProxy.
* [computeTargetSslProxiesSetSslPolicy](docs/targetsslproxies/README.md#computetargetsslproxiessetsslpolicy) - Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the SSL proxy load balancer. They do not affect the connection between the load balancer and the backends.
* [computeTargetSslProxiesTestIamPermissions](docs/targetsslproxies/README.md#computetargetsslproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [targetTcpProxies](docs/targettcpproxies/README.md)

* [computeTargetTcpProxiesAggregatedList](docs/targettcpproxies/README.md#computetargettcpproxiesaggregatedlist) - Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.
* [computeTargetTcpProxiesDelete](docs/targettcpproxies/README.md#computetargettcpproxiesdelete) - Deletes the specified TargetTcpProxy resource.
* [computeTargetTcpProxiesGet](docs/targettcpproxies/README.md#computetargettcpproxiesget) - Returns the specified TargetTcpProxy resource.
* [computeTargetTcpProxiesInsert](docs/targettcpproxies/README.md#computetargettcpproxiesinsert) - Creates a TargetTcpProxy resource in the specified project using the data included in the request.
* [computeTargetTcpProxiesList](docs/targettcpproxies/README.md#computetargettcpproxieslist) - Retrieves the list of TargetTcpProxy resources available to the specified project.
* [computeTargetTcpProxiesSetBackendService](docs/targettcpproxies/README.md#computetargettcpproxiessetbackendservice) - Changes the BackendService for TargetTcpProxy.
* [computeTargetTcpProxiesSetProxyHeader](docs/targettcpproxies/README.md#computetargettcpproxiessetproxyheader) - Changes the ProxyHeaderType for TargetTcpProxy.
* [computeTargetTcpProxiesTestIamPermissions](docs/targettcpproxies/README.md#computetargettcpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

### [targetVpnGateways](docs/targetvpngateways/README.md)

* [computeTargetVpnGatewaysAggregatedList](docs/targetvpngateways/README.md#computetargetvpngatewaysaggregatedlist) - Retrieves an aggregated list of target VPN gateways.
* [computeTargetVpnGatewaysDelete](docs/targetvpngateways/README.md#computetargetvpngatewaysdelete) - Deletes the specified target VPN gateway.
* [computeTargetVpnGatewaysGet](docs/targetvpngateways/README.md#computetargetvpngatewaysget) - Returns the specified target VPN gateway.
* [computeTargetVpnGatewaysInsert](docs/targetvpngateways/README.md#computetargetvpngatewaysinsert) - Creates a target VPN gateway in the specified project and region using the data included in the request.
* [computeTargetVpnGatewaysList](docs/targetvpngateways/README.md#computetargetvpngatewayslist) - Retrieves a list of target VPN gateways available to the specified project and region.
* [computeTargetVpnGatewaysSetLabels](docs/targetvpngateways/README.md#computetargetvpngatewayssetlabels) - Sets the labels on a TargetVpnGateway. To learn more about labels, read the Labeling Resources documentation.
* [computeTargetVpnGatewaysTestIamPermissions](docs/targetvpngateways/README.md#computetargetvpngatewaystestiampermissions) - Returns permissions that a caller has on the specified resource.

### [urlMaps](docs/urlmaps/README.md)

* [computeUrlMapsAggregatedList](docs/urlmaps/README.md#computeurlmapsaggregatedlist) - Retrieves the list of all UrlMap resources, regional and global, available to the specified project.
* [computeUrlMapsDelete](docs/urlmaps/README.md#computeurlmapsdelete) - Deletes the specified UrlMap resource.
* [computeUrlMapsGet](docs/urlmaps/README.md#computeurlmapsget) - Returns the specified UrlMap resource.
* [computeUrlMapsInsert](docs/urlmaps/README.md#computeurlmapsinsert) - Creates a UrlMap resource in the specified project using the data included in the request.
* [computeUrlMapsInvalidateCache](docs/urlmaps/README.md#computeurlmapsinvalidatecache) - Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).
* [computeUrlMapsList](docs/urlmaps/README.md#computeurlmapslist) - Retrieves the list of UrlMap resources available to the specified project.
* [computeUrlMapsPatch](docs/urlmaps/README.md#computeurlmapspatch) - Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeUrlMapsTestIamPermissions](docs/urlmaps/README.md#computeurlmapstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeUrlMapsUpdate](docs/urlmaps/README.md#computeurlmapsupdate) - Updates the specified UrlMap resource with the data included in the request.
* [computeUrlMapsValidate](docs/urlmaps/README.md#computeurlmapsvalidate) - Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.

### [vpnGateways](docs/vpngateways/README.md)

* [computeVpnGatewaysAggregatedList](docs/vpngateways/README.md#computevpngatewaysaggregatedlist) - Retrieves an aggregated list of VPN gateways.
* [computeVpnGatewaysDelete](docs/vpngateways/README.md#computevpngatewaysdelete) - Deletes the specified VPN gateway.
* [computeVpnGatewaysGet](docs/vpngateways/README.md#computevpngatewaysget) - Returns the specified VPN gateway.
* [computeVpnGatewaysGetStatus](docs/vpngateways/README.md#computevpngatewaysgetstatus) - Returns the status for the specified VPN gateway.
* [computeVpnGatewaysInsert](docs/vpngateways/README.md#computevpngatewaysinsert) - Creates a VPN gateway in the specified project and region using the data included in the request.
* [computeVpnGatewaysList](docs/vpngateways/README.md#computevpngatewayslist) - Retrieves a list of VPN gateways available to the specified project and region.
* [computeVpnGatewaysSetLabels](docs/vpngateways/README.md#computevpngatewayssetlabels) - Sets the labels on a VpnGateway. To learn more about labels, read the Labeling Resources documentation.
* [computeVpnGatewaysTestIamPermissions](docs/vpngateways/README.md#computevpngatewaystestiampermissions) - Returns permissions that a caller has on the specified resource.

### [vpnTunnels](docs/vpntunnels/README.md)

* [computeVpnTunnelsAggregatedList](docs/vpntunnels/README.md#computevpntunnelsaggregatedlist) - Retrieves an aggregated list of VPN tunnels.
* [computeVpnTunnelsDelete](docs/vpntunnels/README.md#computevpntunnelsdelete) - Deletes the specified VpnTunnel resource.
* [computeVpnTunnelsGet](docs/vpntunnels/README.md#computevpntunnelsget) - Returns the specified VpnTunnel resource.
* [computeVpnTunnelsInsert](docs/vpntunnels/README.md#computevpntunnelsinsert) - Creates a VpnTunnel resource in the specified project and region using the data included in the request.
* [computeVpnTunnelsList](docs/vpntunnels/README.md#computevpntunnelslist) - Retrieves a list of VpnTunnel resources contained in the specified project and region.
* [computeVpnTunnelsSetLabels](docs/vpntunnels/README.md#computevpntunnelssetlabels) - Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.
* [computeVpnTunnelsTestIamPermissions](docs/vpntunnels/README.md#computevpntunnelstestiampermissions) - Returns permissions that a caller has on the specified resource.

### [zoneOperations](docs/zoneoperations/README.md)

* [computeZoneOperationsDelete](docs/zoneoperations/README.md#computezoneoperationsdelete) - Deletes the specified zone-specific Operations resource.
* [computeZoneOperationsGet](docs/zoneoperations/README.md#computezoneoperationsget) - Retrieves the specified zone-specific Operations resource.
* [computeZoneOperationsList](docs/zoneoperations/README.md#computezoneoperationslist) - Retrieves a list of Operation resources contained within the specified zone.
* [computeZoneOperationsWait](docs/zoneoperations/README.md#computezoneoperationswait) - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method waits for no more than the 2 minutes and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### [zones](docs/zones/README.md)

* [computeZonesGet](docs/zones/README.md#computezonesget) - Returns the specified Zone resource.
* [computeZonesList](docs/zones/README.md#computezoneslist) - Retrieves the list of Zone resources available to the specified project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
