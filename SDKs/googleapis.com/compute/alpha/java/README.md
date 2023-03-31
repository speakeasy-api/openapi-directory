# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption3;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListPathParams;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListQueryParams;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAcceleratorTypesAggregatedListRequest req = new ComputeAcceleratorTypesAggregatedListRequest() {{
                security = new ComputeAcceleratorTypesAggregatedListSecurity() {{
                    option1 = new ComputeAcceleratorTypesAggregatedListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ComputeAcceleratorTypesAggregatedListPathParams() {{
                    project = "corrupti";
                }};
                queryParams = new ComputeAcceleratorTypesAggregatedListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    filter = "corrupti";
                    includeAllScopes = false;
                    key = "illum";
                    maxResults = 423655;
                    oauthToken = "error";
                    orderBy = "deserunt";
                    pageToken = "suscipit";
                    prettyPrint = false;
                    quotaUser = "iure";
                    returnPartialSuccess = false;
                    uploadType = "magnam";
                    uploadProtocol = "debitis";
                    userIp = "ipsa";
                }};
            }};            

            ComputeAcceleratorTypesAggregatedListResponse res = sdk.acceleratorTypes.computeAcceleratorTypesAggregatedList(req);

            if (res.acceleratorTypeAggregatedList.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### acceleratorTypes

* `computeAcceleratorTypesAggregatedList` - Retrieves an aggregated list of accelerator types.
* `computeAcceleratorTypesGet` - Returns the specified accelerator type.
* `computeAcceleratorTypesList` - Retrieves a list of accelerator types that are available to the specified project.

### addresses

* `computeAddressesAggregatedList` - Retrieves an aggregated list of addresses.
* `computeAddressesDelete` - Deletes the specified address resource.
* `computeAddressesGet` - Returns the specified address resource.
* `computeAddressesInsert` - Creates an address resource in the specified project by using the data included in the request.
* `computeAddressesList` - Retrieves a list of addresses contained within the specified region.
* `computeAddressesMove` - Moves the specified address resource.
* `computeAddressesSetLabels` - Sets the labels on an Address. To learn more about labels, read the Labeling Resources documentation.
* `computeAddressesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### autoscalers

* `computeAutoscalersAggregatedList` - Retrieves an aggregated list of autoscalers.
* `computeAutoscalersDelete` - Deletes the specified autoscaler.
* `computeAutoscalersGet` - Returns the specified autoscaler resource.
* `computeAutoscalersInsert` - Creates an autoscaler in the specified project using the data included in the request.
* `computeAutoscalersList` - Retrieves a list of autoscalers contained within the specified zone.
* `computeAutoscalersPatch` - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeAutoscalersTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeAutoscalersUpdate` - Updates an autoscaler in the specified project using the data included in the request.

### backendBuckets

* `computeBackendBucketsAddSignedUrlKey` - Adds a key for validating requests with signed URLs for this backend bucket.
* `computeBackendBucketsDelete` - Deletes the specified BackendBucket resource.
* `computeBackendBucketsDeleteSignedUrlKey` - Deletes a key for validating requests with signed URLs for this backend bucket.
* `computeBackendBucketsGet` - Returns the specified BackendBucket resource.
* `computeBackendBucketsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeBackendBucketsInsert` - Creates a BackendBucket resource in the specified project using the data included in the request.
* `computeBackendBucketsList` - Retrieves the list of BackendBucket resources available to the specified project.
* `computeBackendBucketsPatch` - Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeBackendBucketsSetEdgeSecurityPolicy` - Sets the edge security policy for the specified backend bucket.
* `computeBackendBucketsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeBackendBucketsTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeBackendBucketsUpdate` - Updates the specified BackendBucket resource with the data included in the request.

### backendServices

* `computeBackendServicesAddSignedUrlKey` - Adds a key for validating requests with signed URLs for this backend service.
* `computeBackendServicesAggregatedList` - Retrieves the list of all BackendService resources, regional and global, available to the specified project.
* `computeBackendServicesDelete` - Deletes the specified BackendService resource.
* `computeBackendServicesDeleteSignedUrlKey` - Deletes a key for validating requests with signed URLs for this backend service.
* `computeBackendServicesGet` - Returns the specified BackendService resource.
* `computeBackendServicesGetHealth` - Gets the most recent health check results for this BackendService. Example request body: { "group": "/zones/us-east1-b/instanceGroups/lb-backend-example" }
* `computeBackendServicesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeBackendServicesInsert` - Creates a BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview .
* `computeBackendServicesList` - Retrieves the list of BackendService resources available to the specified project.
* `computeBackendServicesPatch` - Patches the specified BackendService resource with the data included in the request. For more information, see Backend services overview. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeBackendServicesSetEdgeSecurityPolicy` - Sets the edge security policy for the specified backend service.
* `computeBackendServicesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeBackendServicesSetSecurityPolicy` - Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview
* `computeBackendServicesTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeBackendServicesUpdate` - Updates the specified BackendService resource with the data included in the request. For more information, see Backend services overview.

### diskTypes

* `computeDiskTypesAggregatedList` - Retrieves an aggregated list of disk types.
* `computeDiskTypesGet` - Returns the specified disk type.
* `computeDiskTypesList` - Retrieves a list of disk types available to the specified project.

### disks

* `computeDisksAddResourcePolicies` - Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
* `computeDisksAggregatedList` - Retrieves an aggregated list of persistent disks.
* `computeDisksBulkInsert` - Bulk create a set of disks.
* `computeDisksCreateSnapshot` - Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
* `computeDisksDelete` - Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
* `computeDisksGet` - Returns the specified persistent disk.
* `computeDisksGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeDisksInsert` - Creates a persistent disk in the specified project using the data in the request. You can create a disk from a source (sourceImage, sourceSnapshot, or sourceDisk) or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
* `computeDisksList` - Retrieves a list of persistent disks contained within the specified zone.
* `computeDisksRemoveResourcePolicies` - Removes resource policies from a disk.
* `computeDisksResize` - Resizes the specified persistent disk. You can only increase the size of the disk.
* `computeDisksSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeDisksSetLabels` - Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.
* `computeDisksStartAsyncReplication` - Starts asynchronous replication. Must be invoked on the primary disk.
* `computeDisksStopAsyncReplication` - Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
* `computeDisksStopGroupAsyncReplication` - Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.
* `computeDisksTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeDisksUpdate` - Updates the specified disk with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

### externalVpnGateways

* `computeExternalVpnGatewaysDelete` - Deletes the specified externalVpnGateway.
* `computeExternalVpnGatewaysGet` - Returns the specified externalVpnGateway. Get a list of available externalVpnGateways by making a list() request.
* `computeExternalVpnGatewaysInsert` - Creates a ExternalVpnGateway in the specified project using the data included in the request.
* `computeExternalVpnGatewaysList` - Retrieves the list of ExternalVpnGateway available to the specified project.
* `computeExternalVpnGatewaysSetLabels` - Sets the labels on an ExternalVpnGateway. To learn more about labels, read the Labeling Resources documentation.
* `computeExternalVpnGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### firewallPolicies

* `computeFirewallPoliciesAddAssociation` - Inserts an association for the specified firewall policy.
* `computeFirewallPoliciesAddRule` - Inserts a rule into a firewall policy.
* `computeFirewallPoliciesCloneRules` - Copies rules to the specified firewall policy.
* `computeFirewallPoliciesDelete` - Deletes the specified policy.
* `computeFirewallPoliciesGet` - Returns the specified firewall policy.
* `computeFirewallPoliciesGetAssociation` - Gets an association with the specified name.
* `computeFirewallPoliciesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeFirewallPoliciesGetRule` - Gets a rule of the specified priority.
* `computeFirewallPoliciesInsert` - Creates a new policy in the specified project using the data included in the request.
* `computeFirewallPoliciesList` - Lists all the policies that have been configured for the specified folder or organization.
* `computeFirewallPoliciesListAssociations` - Lists associations of a specified target, i.e., organization or folder.
* `computeFirewallPoliciesMove` - Moves the specified firewall policy.
* `computeFirewallPoliciesPatch` - Patches the specified policy with the data included in the request.
* `computeFirewallPoliciesPatchRule` - Patches a rule of the specified priority.
* `computeFirewallPoliciesRemoveAssociation` - Removes an association for the specified firewall policy.
* `computeFirewallPoliciesRemoveRule` - Deletes a rule of the specified priority.
* `computeFirewallPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeFirewallPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### firewalls

* `computeFirewallsDelete` - Deletes the specified firewall.
* `computeFirewallsGet` - Returns the specified firewall.
* `computeFirewallsInsert` - Creates a firewall rule in the specified project using the data included in the request.
* `computeFirewallsList` - Retrieves the list of firewall rules available to the specified project.
* `computeFirewallsPatch` - Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeFirewallsTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeFirewallsUpdate` - Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.

### forwardingRules

* `computeForwardingRulesAggregatedList` - Retrieves an aggregated list of forwarding rules.
* `computeForwardingRulesDelete` - Deletes the specified ForwardingRule resource.
* `computeForwardingRulesGet` - Returns the specified ForwardingRule resource.
* `computeForwardingRulesInsert` - Creates a ForwardingRule resource in the specified project and region using the data included in the request.
* `computeForwardingRulesList` - Retrieves a list of ForwardingRule resources available to the specified project and region.
* `computeForwardingRulesPatch` - Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
* `computeForwardingRulesSetLabels` - Sets the labels on the specified resource. To learn more about labels, read the Labeling Resources documentation.
* `computeForwardingRulesSetTarget` - Changes target URL for forwarding rule. The new target should be of the same type as the old target.
* `computeForwardingRulesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### futureReservations

* `computeFutureReservationsAggregatedList` - Retrieves an aggregated list of future reservations.
* `computeFutureReservationsCancel` - Cancel the specified future reservation.
* `computeFutureReservationsDelete` - Deletes the specified future reservation.
* `computeFutureReservationsGet` - Retrieves information about the specified future reservation.
* `computeFutureReservationsInsert` - Creates a new Future Reservation.
* `computeFutureReservationsList` - A list of all the future reservations that have been configured for the specified project in specified zone.
* `computeFutureReservationsUpdate` - Updates the specified future reservation.

### globalAddresses

* `computeGlobalAddressesDelete` - Deletes the specified address resource.
* `computeGlobalAddressesGet` - Returns the specified address resource.
* `computeGlobalAddressesGetOwnerInstance` - Find owner instance from given ip address
* `computeGlobalAddressesInsert` - Creates an address resource in the specified project by using the data included in the request.
* `computeGlobalAddressesList` - Retrieves a list of global addresses.
* `computeGlobalAddressesMove` - Moves the specified address resource from one project to another project.
* `computeGlobalAddressesSetLabels` - Sets the labels on a GlobalAddress. To learn more about labels, read the Labeling Resources documentation.
* `computeGlobalAddressesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### globalForwardingRules

* `computeGlobalForwardingRulesDelete` - Deletes the specified GlobalForwardingRule resource.
* `computeGlobalForwardingRulesGet` - Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.
* `computeGlobalForwardingRulesInsert` - Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
* `computeGlobalForwardingRulesList` - Retrieves a list of GlobalForwardingRule resources available to the specified project.
* `computeGlobalForwardingRulesPatch` - Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
* `computeGlobalForwardingRulesSetLabels` - Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.
* `computeGlobalForwardingRulesSetTarget` - Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
* `computeGlobalForwardingRulesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### globalNetworkEndpointGroups

* `computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints` - Attach a network endpoint to the specified network endpoint group.
* `computeGlobalNetworkEndpointGroupsDelete` - Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referencing it.
* `computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints` - Detach the network endpoint from the specified network endpoint group.
* `computeGlobalNetworkEndpointGroupsGet` - Returns the specified network endpoint group.
* `computeGlobalNetworkEndpointGroupsInsert` - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* `computeGlobalNetworkEndpointGroupsList` - Retrieves the list of network endpoint groups that are located in the specified project.
* `computeGlobalNetworkEndpointGroupsListNetworkEndpoints` - Lists the network endpoints in the specified network endpoint group.

### globalOperations

* `computeGlobalOperationsAggregatedList` - Retrieves an aggregated list of all operations.
* `computeGlobalOperationsDelete` - Deletes the specified Operations resource.
* `computeGlobalOperationsGet` - Retrieves the specified Operations resource.
* `computeGlobalOperationsList` - Retrieves a list of Operation resources contained within the specified project.
* `computeGlobalOperationsWait` - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### globalOrganizationOperations

* `computeGlobalOrganizationOperationsDelete` - Deletes the specified Operations resource.
* `computeGlobalOrganizationOperationsGet` - Retrieves the specified Operations resource. Gets a list of operations by making a `list()` request.
* `computeGlobalOrganizationOperationsList` - Retrieves a list of Operation resources contained within the specified organization.

### globalPublicDelegatedPrefixes

* `computeGlobalPublicDelegatedPrefixesDelete` - Deletes the specified global PublicDelegatedPrefix.
* `computeGlobalPublicDelegatedPrefixesGet` - Returns the specified global PublicDelegatedPrefix resource.
* `computeGlobalPublicDelegatedPrefixesInsert` - Creates a global PublicDelegatedPrefix in the specified project using the parameters that are included in the request.
* `computeGlobalPublicDelegatedPrefixesList` - Lists the global PublicDelegatedPrefixes for a project.
* `computeGlobalPublicDelegatedPrefixesPatch` - Patches the specified global PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### healthChecks

* `computeHealthChecksAggregatedList` - Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.
* `computeHealthChecksDelete` - Deletes the specified HealthCheck resource.
* `computeHealthChecksGet` - Returns the specified HealthCheck resource.
* `computeHealthChecksInsert` - Creates a HealthCheck resource in the specified project using the data included in the request.
* `computeHealthChecksList` - Retrieves the list of HealthCheck resources available to the specified project.
* `computeHealthChecksPatch` - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeHealthChecksTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeHealthChecksUpdate` - Updates a HealthCheck resource in the specified project using the data included in the request.

### httpHealthChecks

* `computeHttpHealthChecksDelete` - Deletes the specified HttpHealthCheck resource.
* `computeHttpHealthChecksGet` - Returns the specified HttpHealthCheck resource.
* `computeHttpHealthChecksInsert` - Creates a HttpHealthCheck resource in the specified project using the data included in the request.
* `computeHttpHealthChecksList` - Retrieves the list of HttpHealthCheck resources available to the specified project.
* `computeHttpHealthChecksPatch` - Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeHttpHealthChecksTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeHttpHealthChecksUpdate` - Updates a HttpHealthCheck resource in the specified project using the data included in the request.

### httpsHealthChecks

* `computeHttpsHealthChecksDelete` - Deletes the specified HttpsHealthCheck resource.
* `computeHttpsHealthChecksGet` - Returns the specified HttpsHealthCheck resource.
* `computeHttpsHealthChecksInsert` - Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
* `computeHttpsHealthChecksList` - Retrieves the list of HttpsHealthCheck resources available to the specified project.
* `computeHttpsHealthChecksPatch` - Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeHttpsHealthChecksTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeHttpsHealthChecksUpdate` - Updates a HttpsHealthCheck resource in the specified project using the data included in the request.

### imageFamilyViews

* `computeImageFamilyViewsGet` - Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.

### images

* `computeImagesDelete` - Deletes the specified image.
* `computeImagesDeprecate` - Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.
* `computeImagesGet` - Returns the specified image.
* `computeImagesGetFromFamily` - Returns the latest image that is part of an image family and is not deprecated. For more information on image families, see Public image families documentation.
* `computeImagesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeImagesInsert` - Creates an image in the specified project using the data included in the request.
* `computeImagesList` - Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
* `computeImagesPatch` - Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.
* `computeImagesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeImagesSetLabels` - Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.
* `computeImagesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### instanceGroupManagerResizeRequests

* `computeInstanceGroupManagerResizeRequestsCancel` - Cancels the specified resize request and removes it from the queue. Cancelled resize request does no longer wait for the resources to be provisioned. Cancel is only possible for requests that are accepted in the queue.
* `computeInstanceGroupManagerResizeRequestsDelete` - Deletes the specified, inactive resize request. Requests that are still active cannot be deleted. Deleting request does not delete instances that were provisioned previously.
* `computeInstanceGroupManagerResizeRequestsGet` - Returns all of the details about the specified resize request.
* `computeInstanceGroupManagerResizeRequestsInsert` - Creates a new resize request that starts provisioning VMs immediately or queues VM creation.
* `computeInstanceGroupManagerResizeRequestsList` - Retrieves a list of resize requests that are contained in the managed instance group.

### instanceGroupManagers

* `computeInstanceGroupManagersAbandonInstances` - Flags the specified instances to be removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* `computeInstanceGroupManagersAggregatedList` - Retrieves the list of managed instance groups and groups them by zone.
* `computeInstanceGroupManagersApplyUpdatesToInstances` - Applies changes to selected instances on the managed instance group. This method can be used to apply new overrides and/or new versions.
* `computeInstanceGroupManagersCreateInstances` - Creates instances with per-instance configurations in this managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
* `computeInstanceGroupManagersDelete` - Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read Deleting an instance group for more information.
* `computeInstanceGroupManagersDeleteInstances` - Flags the specified instances in the managed instance group for immediate deletion. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* `computeInstanceGroupManagersDeletePerInstanceConfigs` - Deletes selected per-instance configurations for the managed instance group.
* `computeInstanceGroupManagersGet` - Returns all of the details about the specified managed instance group.
* `computeInstanceGroupManagersInsert` - Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.
* `computeInstanceGroupManagersList` - Retrieves a list of managed instance groups that are contained within the specified project and zone.
* `computeInstanceGroupManagersListErrors` - Lists all errors thrown by actions on instances for a given managed instance group. The filter and orderBy query parameters are not supported.
* `computeInstanceGroupManagersListManagedInstances` - Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.
* `computeInstanceGroupManagersListPerInstanceConfigs` - Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.
* `computeInstanceGroupManagersPatch` - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listManagedInstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* `computeInstanceGroupManagersPatchPerInstanceConfigs` - Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
* `computeInstanceGroupManagersRecreateInstances` - Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* `computeInstanceGroupManagersResize` - Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. When resizing down, the instance group arbitrarily chooses the order in which VMs are deleted. The group takes into account some VM attributes when making the selection including: + The status of the VM instance. + The health of the VM instance. + The instance template version the VM is based on. + For regional managed instance groups, the location of the VM instance. This list is subject to change. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* `computeInstanceGroupManagersResizeAdvanced` - Resizes the managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size of the instance group, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating, creatingWithoutRetries, or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* `computeInstanceGroupManagersResumeInstances` - Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.
* `computeInstanceGroupManagersSetAutoHealingPolicies` - Motifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use instanceGroupManagers.patch instead.
* `computeInstanceGroupManagersSetInstanceTemplate` - Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
* `computeInstanceGroupManagersSetTargetPools` - Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
* `computeInstanceGroupManagersStartInstances` - Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.
* `computeInstanceGroupManagersStopInstances` - Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.
* `computeInstanceGroupManagersSuspendInstances` - Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.
* `computeInstanceGroupManagersTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeInstanceGroupManagersUpdate` - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listManagedInstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* `computeInstanceGroupManagersUpdatePerInstanceConfigs` - Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### instanceGroups

* `computeInstanceGroupsAddInstances` - Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.
* `computeInstanceGroupsAggregatedList` - Retrieves the list of instance groups and sorts them by zone.
* `computeInstanceGroupsDelete` - Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.
* `computeInstanceGroupsGet` - Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.
* `computeInstanceGroupsInsert` - Creates an instance group in the specified project using the parameters that are included in the request.
* `computeInstanceGroupsList` - Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.
* `computeInstanceGroupsListInstances` - Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.
* `computeInstanceGroupsRemoveInstances` - Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.
* `computeInstanceGroupsSetNamedPorts` - Sets the named ports for the specified instance group.
* `computeInstanceGroupsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### instanceSettings

* `computeInstanceSettingsGet` - Get Instance settings.
* `computeInstanceSettingsPatch` - Patch Instance settings

### instanceTemplates

* `computeInstanceTemplatesAggregatedList` - Retrieves the list of all InstanceTemplates resources, regional and global, available to the specified project.
* `computeInstanceTemplatesDelete` - Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone. It is not possible to delete templates that are already in use by a managed instance group.
* `computeInstanceTemplatesGet` - Returns the specified instance template.
* `computeInstanceTemplatesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeInstanceTemplatesInsert` - Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
* `computeInstanceTemplatesList` - Retrieves a list of instance templates that are contained within the specified project.
* `computeInstanceTemplatesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeInstanceTemplatesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### instances

* `computeInstancesAddAccessConfig` - Adds an access config to an instance's network interface.
* `computeInstancesAddResourcePolicies` - Adds existing resource policies to an instance. You can only add one policy right now which will be applied to this instance for scheduling live migrations.
* `computeInstancesAggregatedList` - Retrieves an aggregated list of all of the instances in your project across all regions and zones. The performance of this method degrades when a filter is specified on a project that has a very large number of instances.
* `computeInstancesAttachDisk` - Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.
* `computeInstancesBulkInsert` - Creates multiple instances. Count specifies the number of instances to create. For more information, see About bulk creation of VMs.
* `computeInstancesDelete` - Deletes the specified Instance resource. For more information, see Deleting an instance.
* `computeInstancesDeleteAccessConfig` - Deletes an access config from an instance's network interface.
* `computeInstancesDetachDisk` - Detaches a disk from an instance.
* `computeInstancesGet` - Returns the specified Instance resource.
* `computeInstancesGetEffectiveFirewalls` - Returns effective firewalls applied to an interface of the instance.
* `computeInstancesGetGuestAttributes` - Returns the specified guest attributes entry.
* `computeInstancesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeInstancesGetScreenshot` - Returns the screenshot from the specified instance.
* `computeInstancesGetSerialPortOutput` - Returns the last 1 MB of serial port output from the specified instance.
* `computeInstancesGetShieldedInstanceIdentity` - Returns the Shielded Instance Identity of an instance
* `computeInstancesGetShieldedVmIdentity` - Returns the Shielded VM Identity of an instance
* `computeInstancesInsert` - Creates an instance resource in the specified project using the data included in the request.
* `computeInstancesList` - Retrieves the list of instances contained within the specified zone.
* `computeInstancesListReferrers` - Retrieves a list of resources that refer to the VM instance specified in the request. For example, if the VM instance is part of a managed or unmanaged instance group, the referrers list includes the instance group. For more information, read Viewing referrers to VM instances.
* `computeInstancesPerformMaintenance` - Perform a manual maintenance on the instance.
* `computeInstancesRemoveResourcePolicies` - Removes resource policies from an instance.
* `computeInstancesReset` - Performs a reset on the instance. This is a hard reset. The VM does not do a graceful shutdown. For more information, see Resetting an instance.
* `computeInstancesResume` - Resumes an instance that was suspended using the instances().suspend method.
* `computeInstancesSendDiagnosticInterrupt` - Sends diagnostic interrupt to the instance.
* `computeInstancesSetDeletionProtection` - Sets deletion protection on the instance.
* `computeInstancesSetDiskAutoDelete` - Sets the auto-delete flag for a disk attached to an instance.
* `computeInstancesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeInstancesSetLabels` - Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.
* `computeInstancesSetMachineResources` - Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
* `computeInstancesSetMachineType` - Changes the machine type for a stopped instance to the machine type specified in the request.
* `computeInstancesSetMetadata` - Sets metadata for the specified instance to the data included in the request.
* `computeInstancesSetMinCpuPlatform` - Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read Specifying a Minimum CPU Platform.
* `computeInstancesSetName` - Sets name of an instance.
* `computeInstancesSetScheduling` - Sets an instance's scheduling options. You can only call this method on a stopped instance, that is, a VM instance that is in a `TERMINATED` state. See Instance Life Cycle for more information on the possible instance states. For more information about setting scheduling options for a VM, see Set VM host maintenance policy.
* `computeInstancesSetServiceAccount` - Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.
* `computeInstancesSetShieldedInstanceIntegrityPolicy` - Sets the Shielded Instance integrity policy for an instance. You can only use this method on a running instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeInstancesSetShieldedVmIntegrityPolicy` - Sets the Shielded VM integrity policy for a VM instance. You can only use this method on a running VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeInstancesSetTags` - Sets network tags for the specified instance to the data included in the request.
* `computeInstancesSimulateMaintenanceEvent` - Simulates a host maintenance event on a VM. For more information, see Simulate a host maintenance event.
* `computeInstancesStart` - Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
* `computeInstancesStartWithEncryptionKey` - Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
* `computeInstancesStop` - Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur VM usage charges while they are stopped. However, resources that the VM is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
* `computeInstancesSuspend` - This method suspends a running instance, saving its state to persistent storage, and allows you to resume the instance at a later time. Suspended instances have no compute costs (cores or RAM), and incur only storage charges for the saved VM memory and localSSD data. Any charged resources the virtual machine was using, such as persistent disks and static IP addresses, will continue to be charged while the instance is suspended. For more information, see Suspending and resuming an instance.
* `computeInstancesTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeInstancesUpdate` - Updates an instance only if the necessary resources are available. This method can update only a specific set of instance properties. See Updating a running instance for a list of updatable instance properties.
* `computeInstancesUpdateAccessConfig` - Updates the specified access config from an instance's network interface with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeInstancesUpdateDisplayDevice` - Updates the Display config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeInstancesUpdateNetworkInterface` - Updates an instance's network interface. This method can only update an interface's alias IP range and attached network. See Modifying alias IP ranges for an existing instance for instructions on changing alias IP ranges. See Migrating a VM between networks for instructions on migrating an interface. This method follows PATCH semantics.
* `computeInstancesUpdateShieldedInstanceConfig` - Updates the Shielded Instance config for an instance. You can only use this method on a stopped instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeInstancesUpdateShieldedVmConfig` - Updates the Shielded VM config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### instantSnapshots

* `computeInstantSnapshotsAggregatedList` - Retrieves an aggregated list of instantSnapshots.
* `computeInstantSnapshotsDelete` - Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.
* `computeInstantSnapshotsExport` - Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.
* `computeInstantSnapshotsGet` - Returns the specified InstantSnapshot resource in the specified zone.
* `computeInstantSnapshotsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeInstantSnapshotsInsert` - Creates an instant snapshot in the specified zone.
* `computeInstantSnapshotsList` - Retrieves the list of InstantSnapshot resources contained within the specified zone.
* `computeInstantSnapshotsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeInstantSnapshotsSetLabels` - Sets the labels on a instantSnapshot in the given zone. To learn more about labels, read the Labeling Resources documentation.
* `computeInstantSnapshotsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### interconnectAttachments

* `computeInterconnectAttachmentsAggregatedList` - Retrieves an aggregated list of interconnect attachments.
* `computeInterconnectAttachmentsDelete` - Deletes the specified interconnect attachment.
* `computeInterconnectAttachmentsGet` - Returns the specified interconnect attachment.
* `computeInterconnectAttachmentsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeInterconnectAttachmentsInsert` - Creates an InterconnectAttachment in the specified project using the data included in the request.
* `computeInterconnectAttachmentsList` - Retrieves the list of interconnect attachments contained within the specified region.
* `computeInterconnectAttachmentsPatch` - Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeInterconnectAttachmentsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeInterconnectAttachmentsSetLabels` - Sets the labels on an InterconnectAttachment. To learn more about labels, read the Labeling Resources documentation.
* `computeInterconnectAttachmentsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### interconnectLocations

* `computeInterconnectLocationsGet` - Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.
* `computeInterconnectLocationsList` - Retrieves the list of interconnect locations available to the specified project.
* `computeInterconnectLocationsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### interconnectRemoteLocations

* `computeInterconnectRemoteLocationsGet` - Returns the details for the specified interconnect remote location. Gets a list of available interconnect remote locations by making a list() request.
* `computeInterconnectRemoteLocationsList` - Retrieves the list of interconnect remote locations available to the specified project.
* `computeInterconnectRemoteLocationsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### interconnects

* `computeInterconnectsDelete` - Deletes the specified Interconnect.
* `computeInterconnectsGet` - Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.
* `computeInterconnectsGetDiagnostics` - Returns the interconnectDiagnostics for the specified Interconnect.
* `computeInterconnectsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeInterconnectsGetMacsecConfig` - Returns the interconnectMacsecConfig for the specified Interconnect.
* `computeInterconnectsInsert` - Creates an Interconnect in the specified project using the data included in the request.
* `computeInterconnectsList` - Retrieves the list of Interconnects available to the specified project.
* `computeInterconnectsPatch` - Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeInterconnectsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeInterconnectsSetLabels` - Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.
* `computeInterconnectsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### licenseCodes

* `computeLicenseCodesGet` - Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* `computeLicenseCodesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* `computeLicenseCodesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* `computeLicenseCodesTestIamPermissions` - Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### licenses

* `computeLicensesDelete` - Deletes the specified license. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* `computeLicensesGet` - Returns the specified License resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* `computeLicensesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* `computeLicensesInsert` - Create a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* `computeLicensesList` - Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* `computeLicensesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* `computeLicensesTestIamPermissions` - Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### machineImages

* `computeMachineImagesDelete` - Deletes the specified machine image. Deleting a machine image is permanent and cannot be undone.
* `computeMachineImagesGet` - Returns the specified machine image.
* `computeMachineImagesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeMachineImagesInsert` - Creates a machine image in the specified project using the data that is included in the request. If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.
* `computeMachineImagesList` - Retrieves a list of machine images that are contained within the specified project.
* `computeMachineImagesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeMachineImagesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### machineTypes

* `computeMachineTypesAggregatedList` - Retrieves an aggregated list of machine types.
* `computeMachineTypesGet` - Returns the specified machine type.
* `computeMachineTypesList` - Retrieves a list of machine types available to the specified project.

### networkAttachments

* `computeNetworkAttachmentsAggregatedList` - Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.
* `computeNetworkAttachmentsDelete` - Deletes the specified NetworkAttachment in the given scope
* `computeNetworkAttachmentsGet` - Returns the specified NetworkAttachment resource in the given scope.
* `computeNetworkAttachmentsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeNetworkAttachmentsInsert` - Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.
* `computeNetworkAttachmentsList` - Lists the NetworkAttachments for a project in the given scope.
* `computeNetworkAttachmentsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeNetworkAttachmentsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### networkEdgeSecurityServices

* `computeNetworkEdgeSecurityServicesAggregatedList` - Retrieves the list of all NetworkEdgeSecurityService resources available to the specified project.
* `computeNetworkEdgeSecurityServicesDelete` - Deletes the specified service.
* `computeNetworkEdgeSecurityServicesGet` - Gets a specified NetworkEdgeSecurityService.
* `computeNetworkEdgeSecurityServicesInsert` - Creates a new service in the specified project using the data included in the request.
* `computeNetworkEdgeSecurityServicesPatch` - Patches the specified policy with the data included in the request.

### networkEndpointGroups

* `computeNetworkEndpointGroupsAggregatedList` - Retrieves the list of network endpoint groups and sorts them by zone.
* `computeNetworkEndpointGroupsAttachNetworkEndpoints` - Attach a list of network endpoints to the specified network endpoint group.
* `computeNetworkEndpointGroupsDelete` - Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.
* `computeNetworkEndpointGroupsDetachNetworkEndpoints` - Detach a list of network endpoints from the specified network endpoint group.
* `computeNetworkEndpointGroupsGet` - Returns the specified network endpoint group.
* `computeNetworkEndpointGroupsInsert` - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* `computeNetworkEndpointGroupsList` - Retrieves the list of network endpoint groups that are located in the specified project and zone.
* `computeNetworkEndpointGroupsListNetworkEndpoints` - Lists the network endpoints in the specified network endpoint group.
* `computeNetworkEndpointGroupsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### networkFirewallPolicies

* `computeNetworkFirewallPoliciesAddAssociation` - Inserts an association for the specified firewall policy.
* `computeNetworkFirewallPoliciesAddRule` - Inserts a rule into a firewall policy.
* `computeNetworkFirewallPoliciesCloneRules` - Copies rules to the specified firewall policy.
* `computeNetworkFirewallPoliciesDelete` - Deletes the specified policy.
* `computeNetworkFirewallPoliciesGet` - Returns the specified network firewall policy.
* `computeNetworkFirewallPoliciesGetAssociation` - Gets an association with the specified name.
* `computeNetworkFirewallPoliciesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeNetworkFirewallPoliciesGetRule` - Gets a rule of the specified priority.
* `computeNetworkFirewallPoliciesInsert` - Creates a new policy in the specified project using the data included in the request.
* `computeNetworkFirewallPoliciesList` - Lists all the policies that have been configured for the specified project.
* `computeNetworkFirewallPoliciesPatch` - Patches the specified policy with the data included in the request.
* `computeNetworkFirewallPoliciesPatchRule` - Patches a rule of the specified priority.
* `computeNetworkFirewallPoliciesRemoveAssociation` - Removes an association for the specified firewall policy.
* `computeNetworkFirewallPoliciesRemoveRule` - Deletes a rule of the specified priority.
* `computeNetworkFirewallPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeNetworkFirewallPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### networks

* `computeNetworksAddPeering` - Adds a peering to the specified network.
* `computeNetworksDelete` - Deletes the specified network.
* `computeNetworksGet` - Returns the specified network.
* `computeNetworksGetEffectiveFirewalls` - Returns the effective firewalls on a given network.
* `computeNetworksInsert` - Creates a network in the specified project using the data included in the request.
* `computeNetworksList` - Retrieves the list of networks available to the specified project.
* `computeNetworksListIpAddresses` - Lists the internal IP addresses in the specified network.
* `computeNetworksListIpOwners` - Lists the internal IP owners in the specified network.
* `computeNetworksListPeeringRoutes` - Lists the peering routes exchanged over peering connection.
* `computeNetworksPatch` - Patches the specified network with the data included in the request. Only the following fields can be modified: routingConfig.routingMode.
* `computeNetworksRemovePeering` - Removes a peering from the specified network.
* `computeNetworksSwitchToCustomMode` - Switches the network mode from auto subnet mode to custom subnet mode.
* `computeNetworksTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeNetworksUpdatePeering` - Updates the specified network peering with the data included in the request. You can only modify the NetworkPeering.export_custom_routes field and the NetworkPeering.import_custom_routes field.

### nodeGroups

* `computeNodeGroupsAddNodes` - Adds specified number of nodes to the node group.
* `computeNodeGroupsAggregatedList` - Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group.
* `computeNodeGroupsDelete` - Deletes the specified NodeGroup resource.
* `computeNodeGroupsDeleteNodes` - Deletes specified nodes from the node group.
* `computeNodeGroupsGet` - Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the "nodes" field should not be used. Use nodeGroups.listNodes instead.
* `computeNodeGroupsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeNodeGroupsInsert` - Creates a NodeGroup resource in the specified project using the data included in the request.
* `computeNodeGroupsList` - Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details about each group.
* `computeNodeGroupsListNodes` - Lists nodes in the node group.
* `computeNodeGroupsPatch` - Updates the specified node group.
* `computeNodeGroupsPerformMaintenance` - Perform maintenance on a subset of nodes in the node group.
* `computeNodeGroupsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeNodeGroupsSetNodeTemplate` - Updates the node template of the node group.
* `computeNodeGroupsSimulateMaintenanceEvent` - Simulates maintenance event on specified nodes from the node group.
* `computeNodeGroupsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### nodeTemplates

* `computeNodeTemplatesAggregatedList` - Retrieves an aggregated list of node templates.
* `computeNodeTemplatesDelete` - Deletes the specified NodeTemplate resource.
* `computeNodeTemplatesGet` - Returns the specified node template.
* `computeNodeTemplatesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeNodeTemplatesInsert` - Creates a NodeTemplate resource in the specified project using the data included in the request.
* `computeNodeTemplatesList` - Retrieves a list of node templates available to the specified project.
* `computeNodeTemplatesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeNodeTemplatesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### nodeTypes

* `computeNodeTypesAggregatedList` - Retrieves an aggregated list of node types.
* `computeNodeTypesGet` - Returns the specified node type.
* `computeNodeTypesList` - Retrieves a list of node types available to the specified project.

### organizationSecurityPolicies

* `computeOrganizationSecurityPoliciesAddAssociation` - Inserts an association for the specified security policy.
* `computeOrganizationSecurityPoliciesAddRule` - Inserts a rule into a security policy.
* `computeOrganizationSecurityPoliciesCopyRules` - Copies rules to the specified security policy.
* `computeOrganizationSecurityPoliciesDelete` - Deletes the specified policy.
* `computeOrganizationSecurityPoliciesGet` - List all of the ordered rules present in a single specified policy.
* `computeOrganizationSecurityPoliciesGetAssociation` - Gets an association with the specified name.
* `computeOrganizationSecurityPoliciesGetRule` - Gets a rule at the specified priority.
* `computeOrganizationSecurityPoliciesInsert` - Creates a new policy in the specified project using the data included in the request.
* `computeOrganizationSecurityPoliciesList` - List all the policies that have been configured for the specified project.
* `computeOrganizationSecurityPoliciesListAssociations` - Lists associations of a specified target, i.e., organization or folder.
* `computeOrganizationSecurityPoliciesMove` - Moves the specified security policy.
* `computeOrganizationSecurityPoliciesPatch` - Patches the specified policy with the data included in the request.
* `computeOrganizationSecurityPoliciesPatchRule` - Patches a rule at the specified priority.
* `computeOrganizationSecurityPoliciesRemoveAssociation` - Removes an association for the specified security policy.
* `computeOrganizationSecurityPoliciesRemoveRule` - Deletes a rule at the specified priority.

### packetMirrorings

* `computePacketMirroringsAggregatedList` - Retrieves an aggregated list of packetMirrorings.
* `computePacketMirroringsDelete` - Deletes the specified PacketMirroring resource.
* `computePacketMirroringsGet` - Returns the specified PacketMirroring resource.
* `computePacketMirroringsInsert` - Creates a PacketMirroring resource in the specified project and region using the data included in the request.
* `computePacketMirroringsList` - Retrieves a list of PacketMirroring resources available to the specified project and region.
* `computePacketMirroringsPatch` - Patches the specified PacketMirroring resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* `computePacketMirroringsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### projects

* `computeProjectsDisableXpnHost` - Disable this project as a shared VPC host project.
* `computeProjectsDisableXpnResource` - Disable a service resource (also known as service project) associated with this host project.
* `computeProjectsEnableXpnHost` - Enable this project as a shared VPC host project.
* `computeProjectsEnableXpnResource` - Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.
* `computeProjectsGet` - Returns the specified Project resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.
* `computeProjectsGetXpnHost` - Gets the shared VPC host project that this project links to. May be empty if no link exists.
* `computeProjectsGetXpnResources` - Gets service resources (a.k.a service project) associated with this host project.
* `computeProjectsListXpnHosts` - Lists all shared VPC host projects visible to the user in an organization.
* `computeProjectsMoveDisk` - Moves a persistent disk from one zone to another.
* `computeProjectsMoveInstance` - Moves an instance and its attached persistent disks from one zone to another. *Note*: Moving VMs or disks by using this method might cause unexpected behavior. For more information, see the [known issue](/compute/docs/troubleshooting/known-issues#moving_vms_or_disks_using_the_moveinstance_api_or_the_causes_unexpected_behavior).
* `computeProjectsSetCommonInstanceMetadata` - Sets metadata common to all instances within the specified project using the data included in the request.
* `computeProjectsSetDefaultNetworkTier` - Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance is created without specifying the network tier field.
* `computeProjectsSetDefaultServiceAccount` - Sets the default service account of the project. The default service account is used when a VM instance is created with the service account email address set to "default".
* `computeProjectsSetUsageExportBucket` - Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.

### publicAdvertisedPrefixes

* `computePublicAdvertisedPrefixesAnnounce` - Announces the specified PublicAdvertisedPrefix
* `computePublicAdvertisedPrefixesDelete` - Deletes the specified PublicAdvertisedPrefix
* `computePublicAdvertisedPrefixesGet` - Returns the specified PublicAdvertisedPrefix resource.
* `computePublicAdvertisedPrefixesInsert` - Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.
* `computePublicAdvertisedPrefixesList` - Lists the PublicAdvertisedPrefixes for a project.
* `computePublicAdvertisedPrefixesPatch` - Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* `computePublicAdvertisedPrefixesWithdraw` - Withdraws the specified PublicAdvertisedPrefix

### publicDelegatedPrefixes

* `computePublicDelegatedPrefixesAggregatedList` - Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.
* `computePublicDelegatedPrefixesAnnounce` - Announces the specified PublicDelegatedPrefix in the given region.
* `computePublicDelegatedPrefixesDelete` - Deletes the specified PublicDelegatedPrefix in the given region.
* `computePublicDelegatedPrefixesGet` - Returns the specified PublicDelegatedPrefix resource in the given region.
* `computePublicDelegatedPrefixesInsert` - Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.
* `computePublicDelegatedPrefixesList` - Lists the PublicDelegatedPrefixes for a project in the given region.
* `computePublicDelegatedPrefixesPatch` - Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* `computePublicDelegatedPrefixesWithdraw` - Withdraws the specified PublicDelegatedPrefix in the given region.

### regionAutoscalers

* `computeRegionAutoscalersDelete` - Deletes the specified autoscaler.
* `computeRegionAutoscalersGet` - Returns the specified autoscaler.
* `computeRegionAutoscalersInsert` - Creates an autoscaler in the specified project using the data included in the request.
* `computeRegionAutoscalersList` - Retrieves a list of autoscalers contained within the specified region.
* `computeRegionAutoscalersPatch` - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeRegionAutoscalersTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeRegionAutoscalersUpdate` - Updates an autoscaler in the specified project using the data included in the request.

### regionBackendServices

* `computeRegionBackendServicesDelete` - Deletes the specified regional BackendService resource.
* `computeRegionBackendServicesGet` - Returns the specified regional BackendService resource.
* `computeRegionBackendServicesGetHealth` - Gets the most recent health check results for this regional BackendService.
* `computeRegionBackendServicesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeRegionBackendServicesInsert` - Creates a regional BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview.
* `computeRegionBackendServicesList` - Retrieves the list of regional BackendService resources available to the specified project in the given region.
* `computeRegionBackendServicesPatch` - Updates the specified regional BackendService resource with the data included in the request. For more information, see Understanding backend services This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeRegionBackendServicesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeRegionBackendServicesSetSecurityPolicy` - Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview
* `computeRegionBackendServicesTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeRegionBackendServicesUpdate` - Updates the specified regional BackendService resource with the data included in the request. For more information, see Backend services overview .

### regionCommitments

* `computeRegionCommitmentsAggregatedList` - Retrieves an aggregated list of commitments by region.
* `computeRegionCommitmentsGet` - Returns the specified commitment resource.
* `computeRegionCommitmentsInsert` - Creates a commitment in the specified project using the data included in the request.
* `computeRegionCommitmentsList` - Retrieves a list of commitments contained within the specified region.
* `computeRegionCommitmentsTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeRegionCommitmentsUpdate` - Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: auto_renew.
* `computeRegionCommitmentsUpdateReservations` - Transfers GPUs or local SSDs between reservations within commitments.

### regionDiskTypes

* `computeRegionDiskTypesGet` - Returns the specified regional disk type.
* `computeRegionDiskTypesList` - Retrieves a list of regional disk types available to the specified project.

### regionDisks

* `computeRegionDisksAddResourcePolicies` - Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
* `computeRegionDisksBulkInsert` - Bulk create a set of disks.
* `computeRegionDisksCreateSnapshot` - Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
* `computeRegionDisksDelete` - Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
* `computeRegionDisksGet` - Returns a specified regional persistent disk.
* `computeRegionDisksGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeRegionDisksInsert` - Creates a persistent regional disk in the specified project using the data included in the request.
* `computeRegionDisksList` - Retrieves the list of persistent disks contained within the specified region.
* `computeRegionDisksRemoveResourcePolicies` - Removes resource policies from a regional disk.
* `computeRegionDisksResize` - Resizes the specified regional persistent disk.
* `computeRegionDisksSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeRegionDisksSetLabels` - Sets the labels on the target regional disk.
* `computeRegionDisksStartAsyncReplication` - Starts asynchronous replication. Must be invoked on the primary disk.
* `computeRegionDisksStopAsyncReplication` - Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
* `computeRegionDisksStopGroupAsyncReplication` - Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.
* `computeRegionDisksTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeRegionDisksUpdate` - Update the specified disk with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

### regionHealthCheckServices

* `computeRegionHealthCheckServicesAggregatedList` - Retrieves the list of all HealthCheckService resources, regional and global, available to the specified project.
* `computeRegionHealthCheckServicesDelete` - Deletes the specified regional HealthCheckService.
* `computeRegionHealthCheckServicesGet` - Returns the specified regional HealthCheckService resource.
* `computeRegionHealthCheckServicesInsert` - Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.
* `computeRegionHealthCheckServicesList` - Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
* `computeRegionHealthCheckServicesPatch` - Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeRegionHealthCheckServicesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### regionHealthChecks

* `computeRegionHealthChecksDelete` - Deletes the specified HealthCheck resource.
* `computeRegionHealthChecksGet` - Returns the specified HealthCheck resource.
* `computeRegionHealthChecksInsert` - Creates a HealthCheck resource in the specified project using the data included in the request.
* `computeRegionHealthChecksList` - Retrieves the list of HealthCheck resources available to the specified project.
* `computeRegionHealthChecksPatch` - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeRegionHealthChecksTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeRegionHealthChecksUpdate` - Updates a HealthCheck resource in the specified project using the data included in the request.

### regionInstanceGroupManagers

* `computeRegionInstanceGroupManagersAbandonInstances` - Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* `computeRegionInstanceGroupManagersApplyUpdatesToInstances` - Apply updates to selected instances the managed instance group.
* `computeRegionInstanceGroupManagersCreateInstances` - Creates instances with per-instance configurations in this regional managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
* `computeRegionInstanceGroupManagersDelete` - Deletes the specified managed instance group and all of the instances in that group.
* `computeRegionInstanceGroupManagersDeleteInstances` - Flags the specified instances in the managed instance group to be immediately deleted. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. The deleteInstances operation is marked DONE if the deleteInstances request is successful. The underlying actions take additional time. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* `computeRegionInstanceGroupManagersDeletePerInstanceConfigs` - Deletes selected per-instance configurations for the managed instance group.
* `computeRegionInstanceGroupManagersGet` - Returns all of the details about the specified managed instance group.
* `computeRegionInstanceGroupManagersInsert` - Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A regional managed instance group can contain up to 2000 instances.
* `computeRegionInstanceGroupManagersList` - Retrieves the list of managed instance groups that are contained within the specified region.
* `computeRegionInstanceGroupManagersListErrors` - Lists all errors thrown by actions on instances for a given regional managed instance group. The filter and orderBy query parameters are not supported.
* `computeRegionInstanceGroupManagersListManagedInstances` - Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.
* `computeRegionInstanceGroupManagersListPerInstanceConfigs` - Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.
* `computeRegionInstanceGroupManagersPatch` - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* `computeRegionInstanceGroupManagersPatchPerInstanceConfigs` - Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
* `computeRegionInstanceGroupManagersRecreateInstances` - Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* `computeRegionInstanceGroupManagersResize` - Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* `computeRegionInstanceGroupManagersResizeAdvanced` - Resizes the regional managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* `computeRegionInstanceGroupManagersResumeInstances` - Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.
* `computeRegionInstanceGroupManagersSetAutoHealingPolicies` - Modifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use regionInstanceGroupManagers.patch instead.
* `computeRegionInstanceGroupManagersSetInstanceTemplate` - Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
* `computeRegionInstanceGroupManagersSetTargetPools` - Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
* `computeRegionInstanceGroupManagersStartInstances` - Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.
* `computeRegionInstanceGroupManagersStopInstances` - Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.
* `computeRegionInstanceGroupManagersSuspendInstances` - Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.
* `computeRegionInstanceGroupManagersTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeRegionInstanceGroupManagersUpdate` - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listmanagedinstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* `computeRegionInstanceGroupManagersUpdatePerInstanceConfigs` - Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### regionInstanceGroups

* `computeRegionInstanceGroupsGet` - Returns the specified instance group resource.
* `computeRegionInstanceGroupsList` - Retrieves the list of instance group resources contained within the specified region.
* `computeRegionInstanceGroupsListInstances` - Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running. The orderBy query parameter is not supported.
* `computeRegionInstanceGroupsSetNamedPorts` - Sets the named ports for the specified regional instance group.
* `computeRegionInstanceGroupsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### regionInstanceTemplates

* `computeRegionInstanceTemplatesDelete` - Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone.
* `computeRegionInstanceTemplatesGet` - Returns the specified instance template.
* `computeRegionInstanceTemplatesInsert` - Creates an instance template in the specified project and region using the global instance template whose URL is included in the request.
* `computeRegionInstanceTemplatesList` - Retrieves a list of instance templates that are contained within the specified project and region.

### regionInstances

* `computeRegionInstancesBulkInsert` - Creates multiple instances in a given region. Count specifies the number of instances to create.

### regionInstantSnapshots

* `computeRegionInstantSnapshotsDelete` - Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.
* `computeRegionInstantSnapshotsExport` - Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.
* `computeRegionInstantSnapshotsGet` - Returns the specified InstantSnapshot resource in the specified region.
* `computeRegionInstantSnapshotsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeRegionInstantSnapshotsInsert` - Creates an instant snapshot in the specified region.
* `computeRegionInstantSnapshotsList` - Retrieves the list of InstantSnapshot resources contained within the specified region.
* `computeRegionInstantSnapshotsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeRegionInstantSnapshotsSetLabels` - Sets the labels on a instantSnapshot in the given region. To learn more about labels, read the Labeling Resources documentation.
* `computeRegionInstantSnapshotsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### regionNetworkEndpointGroups

* `computeRegionNetworkEndpointGroupsAttachNetworkEndpoints` - Attach a list of network endpoints to the specified network endpoint group.
* `computeRegionNetworkEndpointGroupsDelete` - Deletes the specified network endpoint group. Note that the NEG cannot be deleted if it is configured as a backend of a backend service.
* `computeRegionNetworkEndpointGroupsDetachNetworkEndpoints` - Detach the network endpoint from the specified network endpoint group.
* `computeRegionNetworkEndpointGroupsGet` - Returns the specified network endpoint group.
* `computeRegionNetworkEndpointGroupsInsert` - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* `computeRegionNetworkEndpointGroupsList` - Retrieves the list of regional network endpoint groups available to the specified project in the given region.
* `computeRegionNetworkEndpointGroupsListNetworkEndpoints` - Lists the network endpoints in the specified network endpoint group.

### regionNetworkFirewallPolicies

* `computeRegionNetworkFirewallPoliciesAddAssociation` - Inserts an association for the specified network firewall policy.
* `computeRegionNetworkFirewallPoliciesAddRule` - Inserts a rule into a network firewall policy.
* `computeRegionNetworkFirewallPoliciesCloneRules` - Copies rules to the specified network firewall policy.
* `computeRegionNetworkFirewallPoliciesDelete` - Deletes the specified network firewall policy.
* `computeRegionNetworkFirewallPoliciesGet` - Returns the specified network firewall policy.
* `computeRegionNetworkFirewallPoliciesGetAssociation` - Gets an association with the specified name.
* `computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls` - Returns the effective firewalls on a given network.
* `computeRegionNetworkFirewallPoliciesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeRegionNetworkFirewallPoliciesGetRule` - Gets a rule of the specified priority.
* `computeRegionNetworkFirewallPoliciesInsert` - Creates a new network firewall policy in the specified project and region.
* `computeRegionNetworkFirewallPoliciesList` - Lists all the network firewall policies that have been configured for the specified project in the given region.
* `computeRegionNetworkFirewallPoliciesPatch` - Patches the specified network firewall policy.
* `computeRegionNetworkFirewallPoliciesPatchRule` - Patches a rule of the specified priority.
* `computeRegionNetworkFirewallPoliciesRemoveAssociation` - Removes an association for the specified network firewall policy.
* `computeRegionNetworkFirewallPoliciesRemoveRule` - Deletes a rule of the specified priority.
* `computeRegionNetworkFirewallPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeRegionNetworkFirewallPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### regionNotificationEndpoints

* `computeRegionNotificationEndpointsAggregatedList` - Retrieves the list of all NotificationEndpoint resources, regional and global, available to the specified project.
* `computeRegionNotificationEndpointsDelete` - Deletes the specified NotificationEndpoint in the given region
* `computeRegionNotificationEndpointsGet` - Returns the specified NotificationEndpoint resource in the given region.
* `computeRegionNotificationEndpointsInsert` - Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.
* `computeRegionNotificationEndpointsList` - Lists the NotificationEndpoints for a project in the given region.
* `computeRegionNotificationEndpointsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### regionOperations

* `computeRegionOperationsDelete` - Deletes the specified region-specific Operations resource.
* `computeRegionOperationsGet` - Retrieves the specified region-specific Operations resource.
* `computeRegionOperationsList` - Retrieves a list of Operation resources contained within the specified region.
* `computeRegionOperationsWait` - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### regionSecurityPolicies

* `computeRegionSecurityPoliciesAddRule` - Inserts a rule into a security policy.
* `computeRegionSecurityPoliciesDelete` - Deletes the specified policy.
* `computeRegionSecurityPoliciesGet` - List all of the ordered rules present in a single specified policy.
* `computeRegionSecurityPoliciesGetRule` - Gets a rule at the specified priority.
* `computeRegionSecurityPoliciesInsert` - Creates a new policy in the specified project using the data included in the request.
* `computeRegionSecurityPoliciesList` - List all the policies that have been configured for the specified project and region.
* `computeRegionSecurityPoliciesPatch` - Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
* `computeRegionSecurityPoliciesPatchRule` - Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.
* `computeRegionSecurityPoliciesRemoveRule` - Deletes a rule at the specified priority.

### regionSslCertificates

* `computeRegionSslCertificatesDelete` - Deletes the specified SslCertificate resource in the region.
* `computeRegionSslCertificatesGet` - Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by making a list() request.
* `computeRegionSslCertificatesInsert` - Creates a SslCertificate resource in the specified project and region using the data included in the request
* `computeRegionSslCertificatesList` - Retrieves the list of SslCertificate resources available to the specified project in the specified region.
* `computeRegionSslCertificatesTestIamPermissions` - Returns permissions that a caller has on the specified resource and region.

### regionSslPolicies

* `computeRegionSslPoliciesDelete` - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* `computeRegionSslPoliciesGet` - Lists all of the ordered rules present in a single specified policy.
* `computeRegionSslPoliciesInsert` - Creates a new policy in the specified project and region using the data included in the request.
* `computeRegionSslPoliciesList` - Lists all the SSL policies that have been configured for the specified project and region.
* `computeRegionSslPoliciesListAvailableFeatures` - Lists all features that can be specified in the SSL policy when using custom profile.
* `computeRegionSslPoliciesPatch` - Patches the specified SSL policy with the data included in the request.
* `computeRegionSslPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### regionTargetHttpProxies

* `computeRegionTargetHttpProxiesDelete` - Deletes the specified TargetHttpProxy resource.
* `computeRegionTargetHttpProxiesGet` - Returns the specified TargetHttpProxy resource in the specified region.
* `computeRegionTargetHttpProxiesInsert` - Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.
* `computeRegionTargetHttpProxiesList` - Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.
* `computeRegionTargetHttpProxiesSetUrlMap` - Changes the URL map for TargetHttpProxy.
* `computeRegionTargetHttpProxiesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### regionTargetHttpsProxies

* `computeRegionTargetHttpsProxiesDelete` - Deletes the specified TargetHttpsProxy resource.
* `computeRegionTargetHttpsProxiesGet` - Returns the specified TargetHttpsProxy resource in the specified region.
* `computeRegionTargetHttpsProxiesInsert` - Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.
* `computeRegionTargetHttpsProxiesList` - Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.
* `computeRegionTargetHttpsProxiesPatch` - Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* `computeRegionTargetHttpsProxiesSetSslCertificates` - Replaces SslCertificates for TargetHttpsProxy.
* `computeRegionTargetHttpsProxiesSetUrlMap` - Changes the URL map for TargetHttpsProxy.
* `computeRegionTargetHttpsProxiesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### regionTargetTcpProxies

* `computeRegionTargetTcpProxiesDelete` - Deletes the specified TargetTcpProxy resource.
* `computeRegionTargetTcpProxiesGet` - Returns the specified TargetTcpProxy resource.
* `computeRegionTargetTcpProxiesInsert` - Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.
* `computeRegionTargetTcpProxiesList` - Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.
* `computeRegionTargetTcpProxiesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### regionUrlMaps

* `computeRegionUrlMapsDelete` - Deletes the specified UrlMap resource.
* `computeRegionUrlMapsGet` - Returns the specified UrlMap resource.
* `computeRegionUrlMapsInsert` - Creates a UrlMap resource in the specified project using the data included in the request.
* `computeRegionUrlMapsInvalidateCache` - Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).
* `computeRegionUrlMapsList` - Retrieves the list of UrlMap resources available to the specified project in the specified region.
* `computeRegionUrlMapsPatch` - Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* `computeRegionUrlMapsTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeRegionUrlMapsUpdate` - Updates the specified UrlMap resource with the data included in the request.
* `computeRegionUrlMapsValidate` - Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.

### regions

* `computeRegionsGet` - Returns the specified Region resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.
* `computeRegionsList` - Retrieves the list of region resources available to the specified project. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `items.quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

### reservations

* `computeReservationsAggregatedList` - Retrieves an aggregated list of reservations.
* `computeReservationsDelete` - Deletes the specified reservation.
* `computeReservationsGet` - Retrieves information about the specified reservation.
* `computeReservationsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeReservationsInsert` - Creates a new reservation. For more information, read Reserving zonal resources.
* `computeReservationsList` - A list of all the reservations that have been configured for the specified project in specified zone.
* `computeReservationsResize` - Resizes the reservation (applicable to standalone reservations only). For more information, read Modifying reservations.
* `computeReservationsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeReservationsTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeReservationsUpdate` - Update share settings of the reservation.

### resourcePolicies

* `computeResourcePoliciesAggregatedList` - Retrieves an aggregated list of resource policies.
* `computeResourcePoliciesDelete` - Deletes the specified resource policy.
* `computeResourcePoliciesGet` - Retrieves all information of the specified resource policy.
* `computeResourcePoliciesGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeResourcePoliciesInsert` - Creates a new resource policy.
* `computeResourcePoliciesList` - A list all the resource policies that have been configured for the specified project in specified region.
* `computeResourcePoliciesPatch` - Modify the specified resource policy.
* `computeResourcePoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeResourcePoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### routers

* `computeRoutersAggregatedList` - Retrieves an aggregated list of routers.
* `computeRoutersDelete` - Deletes the specified Router resource.
* `computeRoutersGet` - Returns the specified Router resource.
* `computeRoutersGetNatMappingInfo` - Retrieves runtime Nat mapping information of VM endpoints.
* `computeRoutersGetRouterStatus` - Retrieves runtime information of the specified router.
* `computeRoutersInsert` - Creates a Router resource in the specified project and region using the data included in the request.
* `computeRoutersList` - Retrieves a list of Router resources available to the specified project.
* `computeRoutersPatch` - Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* `computeRoutersPreview` - Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
* `computeRoutersTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeRoutersUpdate` - Updates the specified Router resource with the data included in the request. This method conforms to PUT semantics, which requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.

### routes

* `computeRoutesDelete` - Deletes the specified Route resource.
* `computeRoutesGet` - Returns the specified Route resource.
* `computeRoutesInsert` - Creates a Route resource in the specified project using the data included in the request.
* `computeRoutesList` - Retrieves the list of Route resources available to the specified project.
* `computeRoutesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### securityPolicies

* `computeSecurityPoliciesAddRule` - Inserts a rule into a security policy.
* `computeSecurityPoliciesAggregatedList` - Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project.
* `computeSecurityPoliciesDelete` - Deletes the specified policy.
* `computeSecurityPoliciesGet` - List all of the ordered rules present in a single specified policy.
* `computeSecurityPoliciesGetRule` - Gets a rule at the specified priority.
* `computeSecurityPoliciesInsert` - Creates a new policy in the specified project using the data included in the request.
* `computeSecurityPoliciesList` - List all the policies that have been configured for the specified project.
* `computeSecurityPoliciesListPreconfiguredExpressionSets` - Gets the current list of preconfigured Web Application Firewall (WAF) expressions.
* `computeSecurityPoliciesPatch` - Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
* `computeSecurityPoliciesPatchRule` - Patches a rule at the specified priority.
* `computeSecurityPoliciesRemoveRule` - Deletes a rule at the specified priority.
* `computeSecurityPoliciesSetLabels` - Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.
* `computeSecurityPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### serviceAttachments

* `computeServiceAttachmentsAggregatedList` - Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.
* `computeServiceAttachmentsDelete` - Deletes the specified ServiceAttachment in the given scope
* `computeServiceAttachmentsGet` - Returns the specified ServiceAttachment resource in the given scope.
* `computeServiceAttachmentsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeServiceAttachmentsInsert` - Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.
* `computeServiceAttachmentsList` - Lists the ServiceAttachments for a project in the given scope.
* `computeServiceAttachmentsPatch` - Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* `computeServiceAttachmentsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeServiceAttachmentsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### snapshots

* `computeSnapshotsDelete` - Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.
* `computeSnapshotsGet` - Returns the specified Snapshot resource.
* `computeSnapshotsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeSnapshotsInsert` - Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.
* `computeSnapshotsList` - Retrieves the list of Snapshot resources contained within the specified project.
* `computeSnapshotsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeSnapshotsSetLabels` - Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.
* `computeSnapshotsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### sslCertificates

* `computeSslCertificatesAggregatedList` - Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.
* `computeSslCertificatesDelete` - Deletes the specified SslCertificate resource.
* `computeSslCertificatesGet` - Returns the specified SslCertificate resource.
* `computeSslCertificatesInsert` - Creates a SslCertificate resource in the specified project using the data included in the request.
* `computeSslCertificatesList` - Retrieves the list of SslCertificate resources available to the specified project.
* `computeSslCertificatesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### sslPolicies

* `computeSslPoliciesAggregatedList` - Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.
* `computeSslPoliciesDelete` - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* `computeSslPoliciesGet` - Lists all of the ordered rules present in a single specified policy.
* `computeSslPoliciesInsert` - Returns the specified SSL policy resource.
* `computeSslPoliciesList` - Lists all the SSL policies that have been configured for the specified project.
* `computeSslPoliciesListAvailableFeatures` - Lists all features that can be specified in the SSL policy when using custom profile.
* `computeSslPoliciesPatch` - Patches the specified SSL policy with the data included in the request.
* `computeSslPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### subnetworks

* `computeSubnetworksAggregatedList` - Retrieves an aggregated list of subnetworks.
* `computeSubnetworksDelete` - Deletes the specified subnetwork.
* `computeSubnetworksExpandIpCidrRange` - Expands the IP CIDR range of the subnetwork to a specified value.
* `computeSubnetworksGet` - Returns the specified subnetwork.
* `computeSubnetworksGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `computeSubnetworksInsert` - Creates a subnetwork in the specified project using the data included in the request.
* `computeSubnetworksList` - Retrieves a list of subnetworks available to the specified project.
* `computeSubnetworksListUsable` - Retrieves an aggregated list of all usable subnetworks in the project.
* `computeSubnetworksPatch` - Patches the specified subnetwork with the data included in the request. Only certain fields can be updated with a patch request as indicated in the field descriptions. You must specify the current fingerprint of the subnetwork resource being patched.
* `computeSubnetworksSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `computeSubnetworksSetPrivateIpGoogleAccess` - Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.
* `computeSubnetworksTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### targetGrpcProxies

* `computeTargetGrpcProxiesDelete` - Deletes the specified TargetGrpcProxy in the given scope
* `computeTargetGrpcProxiesGet` - Returns the specified TargetGrpcProxy resource in the given scope.
* `computeTargetGrpcProxiesInsert` - Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.
* `computeTargetGrpcProxiesList` - Lists the TargetGrpcProxies for a project in the given scope.
* `computeTargetGrpcProxiesPatch` - Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* `computeTargetGrpcProxiesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### targetHttpProxies

* `computeTargetHttpProxiesAggregatedList` - Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.
* `computeTargetHttpProxiesDelete` - Deletes the specified TargetHttpProxy resource.
* `computeTargetHttpProxiesGet` - Returns the specified TargetHttpProxy resource.
* `computeTargetHttpProxiesInsert` - Creates a TargetHttpProxy resource in the specified project using the data included in the request.
* `computeTargetHttpProxiesList` - Retrieves the list of TargetHttpProxy resources available to the specified project.
* `computeTargetHttpProxiesPatch` - Patches the specified TargetHttpProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* `computeTargetHttpProxiesSetUrlMap` - Changes the URL map for TargetHttpProxy.
* `computeTargetHttpProxiesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### targetHttpsProxies

* `computeTargetHttpsProxiesAggregatedList` - Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.
* `computeTargetHttpsProxiesDelete` - Deletes the specified TargetHttpsProxy resource.
* `computeTargetHttpsProxiesGet` - Returns the specified TargetHttpsProxy resource.
* `computeTargetHttpsProxiesInsert` - Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
* `computeTargetHttpsProxiesList` - Retrieves the list of TargetHttpsProxy resources available to the specified project.
* `computeTargetHttpsProxiesPatch` - Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* `computeTargetHttpsProxiesSetCertificateMap` - Changes the Certificate Map for TargetHttpsProxy.
* `computeTargetHttpsProxiesSetQuicOverride` - Sets the QUIC override policy for TargetHttpsProxy.
* `computeTargetHttpsProxiesSetSslCertificates` - Replaces SslCertificates for TargetHttpsProxy.
* `computeTargetHttpsProxiesSetSslPolicy` - Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.
* `computeTargetHttpsProxiesSetUrlMap` - Changes the URL map for TargetHttpsProxy.
* `computeTargetHttpsProxiesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### targetInstances

* `computeTargetInstancesAggregatedList` - Retrieves an aggregated list of target instances.
* `computeTargetInstancesDelete` - Deletes the specified TargetInstance resource.
* `computeTargetInstancesGet` - Returns the specified TargetInstance resource.
* `computeTargetInstancesInsert` - Creates a TargetInstance resource in the specified project and zone using the data included in the request.
* `computeTargetInstancesList` - Retrieves a list of TargetInstance resources available to the specified project and zone.
* `computeTargetInstancesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### targetPools

* `computeTargetPoolsAddHealthCheck` - Adds health check URLs to a target pool.
* `computeTargetPoolsAddInstance` - Adds an instance to a target pool.
* `computeTargetPoolsAggregatedList` - Retrieves an aggregated list of target pools.
* `computeTargetPoolsDelete` - Deletes the specified target pool.
* `computeTargetPoolsGet` - Returns the specified target pool.
* `computeTargetPoolsGetHealth` - Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
* `computeTargetPoolsInsert` - Creates a target pool in the specified project and region using the data included in the request.
* `computeTargetPoolsList` - Retrieves a list of target pools available to the specified project and region.
* `computeTargetPoolsRemoveHealthCheck` - Removes health check URL from a target pool.
* `computeTargetPoolsRemoveInstance` - Removes instance URL from a target pool.
* `computeTargetPoolsSetBackup` - Changes a backup target pool's configurations.
* `computeTargetPoolsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### targetSslProxies

* `computeTargetSslProxiesDelete` - Deletes the specified TargetSslProxy resource.
* `computeTargetSslProxiesGet` - Returns the specified TargetSslProxy resource.
* `computeTargetSslProxiesInsert` - Creates a TargetSslProxy resource in the specified project using the data included in the request.
* `computeTargetSslProxiesList` - Retrieves the list of TargetSslProxy resources available to the specified project.
* `computeTargetSslProxiesSetBackendService` - Changes the BackendService for TargetSslProxy.
* `computeTargetSslProxiesSetCertificateMap` - Changes the Certificate Map for TargetSslProxy.
* `computeTargetSslProxiesSetProxyHeader` - Changes the ProxyHeaderType for TargetSslProxy.
* `computeTargetSslProxiesSetSslCertificates` - Changes SslCertificates for TargetSslProxy.
* `computeTargetSslProxiesSetSslPolicy` - Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the SSL proxy load balancer. They do not affect the connection between the load balancer and the backends.
* `computeTargetSslProxiesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### targetTcpProxies

* `computeTargetTcpProxiesAggregatedList` - Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.
* `computeTargetTcpProxiesDelete` - Deletes the specified TargetTcpProxy resource.
* `computeTargetTcpProxiesGet` - Returns the specified TargetTcpProxy resource.
* `computeTargetTcpProxiesInsert` - Creates a TargetTcpProxy resource in the specified project using the data included in the request.
* `computeTargetTcpProxiesList` - Retrieves the list of TargetTcpProxy resources available to the specified project.
* `computeTargetTcpProxiesSetBackendService` - Changes the BackendService for TargetTcpProxy.
* `computeTargetTcpProxiesSetProxyHeader` - Changes the ProxyHeaderType for TargetTcpProxy.
* `computeTargetTcpProxiesTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### targetVpnGateways

* `computeTargetVpnGatewaysAggregatedList` - Retrieves an aggregated list of target VPN gateways.
* `computeTargetVpnGatewaysDelete` - Deletes the specified target VPN gateway.
* `computeTargetVpnGatewaysGet` - Returns the specified target VPN gateway.
* `computeTargetVpnGatewaysInsert` - Creates a target VPN gateway in the specified project and region using the data included in the request.
* `computeTargetVpnGatewaysList` - Retrieves a list of target VPN gateways available to the specified project and region.
* `computeTargetVpnGatewaysSetLabels` - Sets the labels on a TargetVpnGateway. To learn more about labels, read the Labeling Resources documentation.
* `computeTargetVpnGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### urlMaps

* `computeUrlMapsAggregatedList` - Retrieves the list of all UrlMap resources, regional and global, available to the specified project.
* `computeUrlMapsDelete` - Deletes the specified UrlMap resource.
* `computeUrlMapsGet` - Returns the specified UrlMap resource.
* `computeUrlMapsInsert` - Creates a UrlMap resource in the specified project using the data included in the request.
* `computeUrlMapsInvalidateCache` - Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).
* `computeUrlMapsList` - Retrieves the list of UrlMap resources available to the specified project.
* `computeUrlMapsPatch` - Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* `computeUrlMapsTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `computeUrlMapsUpdate` - Updates the specified UrlMap resource with the data included in the request.
* `computeUrlMapsValidate` - Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.

### vpnGateways

* `computeVpnGatewaysAggregatedList` - Retrieves an aggregated list of VPN gateways.
* `computeVpnGatewaysDelete` - Deletes the specified VPN gateway.
* `computeVpnGatewaysGet` - Returns the specified VPN gateway.
* `computeVpnGatewaysGetStatus` - Returns the status for the specified VPN gateway.
* `computeVpnGatewaysInsert` - Creates a VPN gateway in the specified project and region using the data included in the request.
* `computeVpnGatewaysList` - Retrieves a list of VPN gateways available to the specified project and region.
* `computeVpnGatewaysSetLabels` - Sets the labels on a VpnGateway. To learn more about labels, read the Labeling Resources documentation.
* `computeVpnGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### vpnTunnels

* `computeVpnTunnelsAggregatedList` - Retrieves an aggregated list of VPN tunnels.
* `computeVpnTunnelsDelete` - Deletes the specified VpnTunnel resource.
* `computeVpnTunnelsGet` - Returns the specified VpnTunnel resource.
* `computeVpnTunnelsInsert` - Creates a VpnTunnel resource in the specified project and region using the data included in the request.
* `computeVpnTunnelsList` - Retrieves a list of VpnTunnel resources contained in the specified project and region.
* `computeVpnTunnelsSetLabels` - Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.
* `computeVpnTunnelsTestIamPermissions` - Returns permissions that a caller has on the specified resource.

### zoneOperations

* `computeZoneOperationsDelete` - Deletes the specified zone-specific Operations resource.
* `computeZoneOperationsGet` - Retrieves the specified zone-specific Operations resource.
* `computeZoneOperationsList` - Retrieves a list of Operation resources contained within the specified zone.
* `computeZoneOperationsWait` - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method waits for no more than the 2 minutes and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### zoneQueuedResources

* `computeZoneQueuedResourcesAggregatedList` - Retrieves an aggregated list of all of the queued resources in a project across all zones.
* `computeZoneQueuedResourcesCancel` - Cancels a QueuedResource. Only a resource in ACCEPTED state may be cancelled.
* `computeZoneQueuedResourcesDelete` - Deletes a QueuedResource. For a QueuedResource in ACCEPTED state, call cancel on the resource before deleting, to make sure no VMs have been provisioned and may require cleaning up. For a QueuedResource in PROVISIONING state the request to delete is registered for execution following the provisioning.
* `computeZoneQueuedResourcesGet` - Returns the specified QueuedResource resource.
* `computeZoneQueuedResourcesInsert` - Creates a QueuedResource.
* `computeZoneQueuedResourcesList` - Retrieves the list of QueuedResource resources.

### zones

* `computeZonesGet` - Returns the specified Zone resource.
* `computeZonesList` - Retrieves the list of Zone resources available to the specified project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
