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
import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListRequest;
import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListResponse;
import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsAggregatedUsableSubnetworksListRequest req = new ContainerProjectsAggregatedUsableSubnetworksListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            ContainerProjectsAggregatedUsableSubnetworksListResponse res = sdk.projects.containerProjectsAggregatedUsableSubnetworksList(req, new ContainerProjectsAggregatedUsableSubnetworksListSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUsableSubnetworksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [containerProjectsAggregatedUsableSubnetworksList](docs/projects/README.md#containerprojectsaggregatedusablesubnetworkslist) - Lists subnetworks that can be used for creating clusters in a project.
* [containerProjectsLocationsClustersCompleteIpRotation](docs/projects/README.md#containerprojectslocationsclusterscompleteiprotation) - Completes master IP rotation.
* [containerProjectsLocationsClustersCreate](docs/projects/README.md#containerprojectslocationsclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [containerProjectsLocationsClustersGetJwks](docs/projects/README.md#containerprojectslocationsclustersgetjwks) - Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
* [containerProjectsLocationsClustersList](docs/projects/README.md#containerprojectslocationsclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [containerProjectsLocationsClustersNodePoolsCompleteUpgrade](docs/projects/README.md#containerprojectslocationsclustersnodepoolscompleteupgrade) - CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
* [containerProjectsLocationsClustersNodePoolsCreate](docs/projects/README.md#containerprojectslocationsclustersnodepoolscreate) - Creates a node pool for a cluster.
* [containerProjectsLocationsClustersNodePoolsDelete](docs/projects/README.md#containerprojectslocationsclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [containerProjectsLocationsClustersNodePoolsList](docs/projects/README.md#containerprojectslocationsclustersnodepoolslist) - Lists the node pools for a cluster.
* [containerProjectsLocationsClustersNodePoolsRollback](docs/projects/README.md#containerprojectslocationsclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [containerProjectsLocationsClustersNodePoolsSetAutoscaling](docs/projects/README.md#containerprojectslocationsclustersnodepoolssetautoscaling) - Sets the autoscaling settings of a specific node pool.
* [containerProjectsLocationsClustersNodePoolsSetManagement](docs/projects/README.md#containerprojectslocationsclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [containerProjectsLocationsClustersNodePoolsSetSize](docs/projects/README.md#containerprojectslocationsclustersnodepoolssetsize) - SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [containerProjectsLocationsClustersNodePoolsUpdate](docs/projects/README.md#containerprojectslocationsclustersnodepoolsupdate) - Updates the version and/or image type of a specific node pool.
* [containerProjectsLocationsClustersSetAddons](docs/projects/README.md#containerprojectslocationsclusterssetaddons) - Sets the addons for a specific cluster.
* [containerProjectsLocationsClustersSetLegacyAbac](docs/projects/README.md#containerprojectslocationsclusterssetlegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [containerProjectsLocationsClustersSetLocations](docs/projects/README.md#containerprojectslocationsclusterssetlocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
* [containerProjectsLocationsClustersSetLogging](docs/projects/README.md#containerprojectslocationsclusterssetlogging) - Sets the logging service for a specific cluster.
* [containerProjectsLocationsClustersSetMaintenancePolicy](docs/projects/README.md#containerprojectslocationsclusterssetmaintenancepolicy) - Sets the maintenance policy for a cluster.
* [containerProjectsLocationsClustersSetMasterAuth](docs/projects/README.md#containerprojectslocationsclusterssetmasterauth) - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* [containerProjectsLocationsClustersSetMonitoring](docs/projects/README.md#containerprojectslocationsclusterssetmonitoring) - Sets the monitoring service for a specific cluster.
* [containerProjectsLocationsClustersSetNetworkPolicy](docs/projects/README.md#containerprojectslocationsclusterssetnetworkpolicy) - Enables or disables Network Policy for a cluster.
* [containerProjectsLocationsClustersSetResourceLabels](docs/projects/README.md#containerprojectslocationsclusterssetresourcelabels) - Sets labels on a cluster.
* [containerProjectsLocationsClustersStartIpRotation](docs/projects/README.md#containerprojectslocationsclustersstartiprotation) - Starts master IP rotation.
* [containerProjectsLocationsClustersUpdateMaster](docs/projects/README.md#containerprojectslocationsclustersupdatemaster) - Updates the master for a specific cluster.
* [containerProjectsLocationsClustersWellKnownGetOpenidConfiguration](docs/projects/README.md#containerprojectslocationsclusterswellknowngetopenidconfiguration) - Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
* [containerProjectsLocationsGetServerConfig](docs/projects/README.md#containerprojectslocationsgetserverconfig) - Returns configuration info about the Google Kubernetes Engine service.
* [containerProjectsLocationsList](docs/projects/README.md#containerprojectslocationslist) - Fetches locations that offer Google Kubernetes Engine.
* [containerProjectsLocationsOperationsCancel](docs/projects/README.md#containerprojectslocationsoperationscancel) - Cancels the specified operation.
* [containerProjectsLocationsOperationsGet](docs/projects/README.md#containerprojectslocationsoperationsget) - Gets the specified operation.
* [containerProjectsLocationsOperationsList](docs/projects/README.md#containerprojectslocationsoperationslist) - Lists all operations in a project in the specified zone or all zones.
* [containerProjectsZonesClustersAddons](docs/projects/README.md#containerprojectszonesclustersaddons) - Sets the addons for a specific cluster.
* [containerProjectsZonesClustersCompleteIpRotation](docs/projects/README.md#containerprojectszonesclusterscompleteiprotation) - Completes master IP rotation.
* [containerProjectsZonesClustersCreate](docs/projects/README.md#containerprojectszonesclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [containerProjectsZonesClustersDelete](docs/projects/README.md#containerprojectszonesclustersdelete) - Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
* [containerProjectsZonesClustersGet](docs/projects/README.md#containerprojectszonesclustersget) - Gets the details for a specific cluster.
* [containerProjectsZonesClustersLegacyAbac](docs/projects/README.md#containerprojectszonesclusterslegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [containerProjectsZonesClustersList](docs/projects/README.md#containerprojectszonesclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [containerProjectsZonesClustersLocations](docs/projects/README.md#containerprojectszonesclusterslocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
* [containerProjectsZonesClustersLogging](docs/projects/README.md#containerprojectszonesclusterslogging) - Sets the logging service for a specific cluster.
* [containerProjectsZonesClustersMaster](docs/projects/README.md#containerprojectszonesclustersmaster) - Updates the master for a specific cluster.
* [containerProjectsZonesClustersMonitoring](docs/projects/README.md#containerprojectszonesclustersmonitoring) - Sets the monitoring service for a specific cluster.
* [containerProjectsZonesClustersNodePoolsAutoscaling](docs/projects/README.md#containerprojectszonesclustersnodepoolsautoscaling) - Sets the autoscaling settings of a specific node pool.
* [containerProjectsZonesClustersNodePoolsCreate](docs/projects/README.md#containerprojectszonesclustersnodepoolscreate) - Creates a node pool for a cluster.
* [containerProjectsZonesClustersNodePoolsDelete](docs/projects/README.md#containerprojectszonesclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [containerProjectsZonesClustersNodePoolsGet](docs/projects/README.md#containerprojectszonesclustersnodepoolsget) - Retrieves the requested node pool.
* [containerProjectsZonesClustersNodePoolsList](docs/projects/README.md#containerprojectszonesclustersnodepoolslist) - Lists the node pools for a cluster.
* [containerProjectsZonesClustersNodePoolsRollback](docs/projects/README.md#containerprojectszonesclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [containerProjectsZonesClustersNodePoolsSetManagement](docs/projects/README.md#containerprojectszonesclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [containerProjectsZonesClustersNodePoolsSetSize](docs/projects/README.md#containerprojectszonesclustersnodepoolssetsize) - SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [containerProjectsZonesClustersNodePoolsUpdate](docs/projects/README.md#containerprojectszonesclustersnodepoolsupdate) - Updates the version and/or image type of a specific node pool.
* [containerProjectsZonesClustersResourceLabels](docs/projects/README.md#containerprojectszonesclustersresourcelabels) - Sets labels on a cluster.
* [containerProjectsZonesClustersSetMaintenancePolicy](docs/projects/README.md#containerprojectszonesclusterssetmaintenancepolicy) - Sets the maintenance policy for a cluster.
* [containerProjectsZonesClustersSetMasterAuth](docs/projects/README.md#containerprojectszonesclusterssetmasterauth) - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* [containerProjectsZonesClustersSetNetworkPolicy](docs/projects/README.md#containerprojectszonesclusterssetnetworkpolicy) - Enables or disables Network Policy for a cluster.
* [containerProjectsZonesClustersStartIpRotation](docs/projects/README.md#containerprojectszonesclustersstartiprotation) - Starts master IP rotation.
* [containerProjectsZonesClustersUpdate](docs/projects/README.md#containerprojectszonesclustersupdate) - Updates the settings for a specific cluster.
* [containerProjectsZonesGetServerconfig](docs/projects/README.md#containerprojectszonesgetserverconfig) - Returns configuration info about the Google Kubernetes Engine service.
* [containerProjectsZonesOperationsCancel](docs/projects/README.md#containerprojectszonesoperationscancel) - Cancels the specified operation.
* [containerProjectsZonesOperationsGet](docs/projects/README.md#containerprojectszonesoperationsget) - Gets the specified operation.
* [containerProjectsZonesOperationsList](docs/projects/README.md#containerprojectszonesoperationslist) - Lists all operations in a project in the specified zone or all zones.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
