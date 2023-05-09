# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/container/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.ContainerProjectsAggregatedUsableSubnetworksList(ctx, operations.ContainerProjectsAggregatedUsableSubnetworksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.ContainerProjectsAggregatedUsableSubnetworksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsableSubnetworksResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [ContainerProjectsAggregatedUsableSubnetworksList](docs/projects/README.md#containerprojectsaggregatedusablesubnetworkslist) - Lists subnetworks that can be used for creating clusters in a project.
* [ContainerProjectsLocationsClustersCompleteIPRotation](docs/projects/README.md#containerprojectslocationsclusterscompleteiprotation) - Completes master IP rotation.
* [ContainerProjectsLocationsClustersCreate](docs/projects/README.md#containerprojectslocationsclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [ContainerProjectsLocationsClustersGetJwks](docs/projects/README.md#containerprojectslocationsclustersgetjwks) - Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
* [ContainerProjectsLocationsClustersList](docs/projects/README.md#containerprojectslocationsclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [ContainerProjectsLocationsClustersNodePoolsCompleteUpgrade](docs/projects/README.md#containerprojectslocationsclustersnodepoolscompleteupgrade) - CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
* [ContainerProjectsLocationsClustersNodePoolsCreate](docs/projects/README.md#containerprojectslocationsclustersnodepoolscreate) - Creates a node pool for a cluster.
* [ContainerProjectsLocationsClustersNodePoolsDelete](docs/projects/README.md#containerprojectslocationsclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [ContainerProjectsLocationsClustersNodePoolsList](docs/projects/README.md#containerprojectslocationsclustersnodepoolslist) - Lists the node pools for a cluster.
* [ContainerProjectsLocationsClustersNodePoolsRollback](docs/projects/README.md#containerprojectslocationsclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [ContainerProjectsLocationsClustersNodePoolsSetAutoscaling](docs/projects/README.md#containerprojectslocationsclustersnodepoolssetautoscaling) - Sets the autoscaling settings of a specific node pool.
* [ContainerProjectsLocationsClustersNodePoolsSetManagement](docs/projects/README.md#containerprojectslocationsclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [ContainerProjectsLocationsClustersNodePoolsSetSize](docs/projects/README.md#containerprojectslocationsclustersnodepoolssetsize) - SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [ContainerProjectsLocationsClustersNodePoolsUpdate](docs/projects/README.md#containerprojectslocationsclustersnodepoolsupdate) - Updates the version and/or image type of a specific node pool.
* [ContainerProjectsLocationsClustersSetAddons](docs/projects/README.md#containerprojectslocationsclusterssetaddons) - Sets the addons for a specific cluster.
* [ContainerProjectsLocationsClustersSetLegacyAbac](docs/projects/README.md#containerprojectslocationsclusterssetlegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [ContainerProjectsLocationsClustersSetLocations](docs/projects/README.md#containerprojectslocationsclusterssetlocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
* [ContainerProjectsLocationsClustersSetLogging](docs/projects/README.md#containerprojectslocationsclusterssetlogging) - Sets the logging service for a specific cluster.
* [ContainerProjectsLocationsClustersSetMaintenancePolicy](docs/projects/README.md#containerprojectslocationsclusterssetmaintenancepolicy) - Sets the maintenance policy for a cluster.
* [ContainerProjectsLocationsClustersSetMasterAuth](docs/projects/README.md#containerprojectslocationsclusterssetmasterauth) - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* [ContainerProjectsLocationsClustersSetMonitoring](docs/projects/README.md#containerprojectslocationsclusterssetmonitoring) - Sets the monitoring service for a specific cluster.
* [ContainerProjectsLocationsClustersSetNetworkPolicy](docs/projects/README.md#containerprojectslocationsclusterssetnetworkpolicy) - Enables or disables Network Policy for a cluster.
* [ContainerProjectsLocationsClustersSetResourceLabels](docs/projects/README.md#containerprojectslocationsclusterssetresourcelabels) - Sets labels on a cluster.
* [ContainerProjectsLocationsClustersStartIPRotation](docs/projects/README.md#containerprojectslocationsclustersstartiprotation) - Starts master IP rotation.
* [ContainerProjectsLocationsClustersUpdateMaster](docs/projects/README.md#containerprojectslocationsclustersupdatemaster) - Updates the master for a specific cluster.
* [ContainerProjectsLocationsClustersWellKnownGetOpenidConfiguration](docs/projects/README.md#containerprojectslocationsclusterswellknowngetopenidconfiguration) - Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
* [ContainerProjectsLocationsGetServerConfig](docs/projects/README.md#containerprojectslocationsgetserverconfig) - Returns configuration info about the Google Kubernetes Engine service.
* [ContainerProjectsLocationsList](docs/projects/README.md#containerprojectslocationslist) - Fetches locations that offer Google Kubernetes Engine.
* [ContainerProjectsLocationsOperationsCancel](docs/projects/README.md#containerprojectslocationsoperationscancel) - Cancels the specified operation.
* [ContainerProjectsLocationsOperationsGet](docs/projects/README.md#containerprojectslocationsoperationsget) - Gets the specified operation.
* [ContainerProjectsLocationsOperationsList](docs/projects/README.md#containerprojectslocationsoperationslist) - Lists all operations in a project in the specified zone or all zones.
* [ContainerProjectsZonesClustersAddons](docs/projects/README.md#containerprojectszonesclustersaddons) - Sets the addons for a specific cluster.
* [ContainerProjectsZonesClustersCompleteIPRotation](docs/projects/README.md#containerprojectszonesclusterscompleteiprotation) - Completes master IP rotation.
* [ContainerProjectsZonesClustersCreate](docs/projects/README.md#containerprojectszonesclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [ContainerProjectsZonesClustersDelete](docs/projects/README.md#containerprojectszonesclustersdelete) - Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
* [ContainerProjectsZonesClustersGet](docs/projects/README.md#containerprojectszonesclustersget) - Gets the details for a specific cluster.
* [ContainerProjectsZonesClustersLegacyAbac](docs/projects/README.md#containerprojectszonesclusterslegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [ContainerProjectsZonesClustersList](docs/projects/README.md#containerprojectszonesclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [ContainerProjectsZonesClustersLocations](docs/projects/README.md#containerprojectszonesclusterslocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
* [ContainerProjectsZonesClustersLogging](docs/projects/README.md#containerprojectszonesclusterslogging) - Sets the logging service for a specific cluster.
* [ContainerProjectsZonesClustersMaster](docs/projects/README.md#containerprojectszonesclustersmaster) - Updates the master for a specific cluster.
* [ContainerProjectsZonesClustersMonitoring](docs/projects/README.md#containerprojectszonesclustersmonitoring) - Sets the monitoring service for a specific cluster.
* [ContainerProjectsZonesClustersNodePoolsAutoscaling](docs/projects/README.md#containerprojectszonesclustersnodepoolsautoscaling) - Sets the autoscaling settings of a specific node pool.
* [ContainerProjectsZonesClustersNodePoolsCreate](docs/projects/README.md#containerprojectszonesclustersnodepoolscreate) - Creates a node pool for a cluster.
* [ContainerProjectsZonesClustersNodePoolsDelete](docs/projects/README.md#containerprojectszonesclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [ContainerProjectsZonesClustersNodePoolsGet](docs/projects/README.md#containerprojectszonesclustersnodepoolsget) - Retrieves the requested node pool.
* [ContainerProjectsZonesClustersNodePoolsList](docs/projects/README.md#containerprojectszonesclustersnodepoolslist) - Lists the node pools for a cluster.
* [ContainerProjectsZonesClustersNodePoolsRollback](docs/projects/README.md#containerprojectszonesclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [ContainerProjectsZonesClustersNodePoolsSetManagement](docs/projects/README.md#containerprojectszonesclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [ContainerProjectsZonesClustersNodePoolsSetSize](docs/projects/README.md#containerprojectszonesclustersnodepoolssetsize) - SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [ContainerProjectsZonesClustersNodePoolsUpdate](docs/projects/README.md#containerprojectszonesclustersnodepoolsupdate) - Updates the version and/or image type of a specific node pool.
* [ContainerProjectsZonesClustersResourceLabels](docs/projects/README.md#containerprojectszonesclustersresourcelabels) - Sets labels on a cluster.
* [ContainerProjectsZonesClustersSetMaintenancePolicy](docs/projects/README.md#containerprojectszonesclusterssetmaintenancepolicy) - Sets the maintenance policy for a cluster.
* [ContainerProjectsZonesClustersSetMasterAuth](docs/projects/README.md#containerprojectszonesclusterssetmasterauth) - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* [ContainerProjectsZonesClustersSetNetworkPolicy](docs/projects/README.md#containerprojectszonesclusterssetnetworkpolicy) - Enables or disables Network Policy for a cluster.
* [ContainerProjectsZonesClustersStartIPRotation](docs/projects/README.md#containerprojectszonesclustersstartiprotation) - Starts master IP rotation.
* [ContainerProjectsZonesClustersUpdate](docs/projects/README.md#containerprojectszonesclustersupdate) - Updates the settings for a specific cluster.
* [ContainerProjectsZonesGetServerconfig](docs/projects/README.md#containerprojectszonesgetserverconfig) - Returns configuration info about the Google Kubernetes Engine service.
* [ContainerProjectsZonesOperationsCancel](docs/projects/README.md#containerprojectszonesoperationscancel) - Cancels the specified operation.
* [ContainerProjectsZonesOperationsGet](docs/projects/README.md#containerprojectszonesoperationsget) - Gets the specified operation.
* [ContainerProjectsZonesOperationsList](docs/projects/README.md#containerprojectszonesoperationslist) - Lists all operations in a project in the specified zone or all zones.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
