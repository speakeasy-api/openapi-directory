# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hetzner.cloud/1.0.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.GetActions(ctx, operations.GetActionsRequest{
        ID: sdk.Int64(548814),
        Sort: operations.GetActionsSortParameterSortEnumProgressAsc.ToPointer(),
        Status: operations.GetActionsStatusParameterStatusEnumError.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Actions](docs/actions/README.md)

* [GetActions](docs/actions/README.md#getactions) - Get all Actions
* [GetActionsID](docs/actions/README.md#getactionsid) - Get an Action

### [CertificateActions](docs/certificateactions/README.md)

* [GetCertificatesIDActions](docs/certificateactions/README.md#getcertificatesidactions) - Get all Actions for a Certificate
* [GetCertificatesIDActionsActionID](docs/certificateactions/README.md#getcertificatesidactionsactionid) - Get an Action for a Certificate
* [PostCertificatesIDActionsRetry](docs/certificateactions/README.md#postcertificatesidactionsretry) - Retry Issuance or Renewal

### [Certificates](docs/certificates/README.md)

* [DeleteCertificatesID](docs/certificates/README.md#deletecertificatesid) - Delete a Certificate
* [GetCertificates](docs/certificates/README.md#getcertificates) - Get all Certificates
* [GetCertificatesID](docs/certificates/README.md#getcertificatesid) - Get a Certificate
* [PostCertificates](docs/certificates/README.md#postcertificates) - Create a Certificate
* [PutCertificatesID](docs/certificates/README.md#putcertificatesid) - Update a Certificate

### [Datacenters](docs/datacenters/README.md)

* [GetDatacenters](docs/datacenters/README.md#getdatacenters) - Get all Datacenters
* [GetDatacentersID](docs/datacenters/README.md#getdatacentersid) - Get a Datacenter

### [FirewallActions](docs/firewallactions/README.md)

* [GetFirewallsIDActions](docs/firewallactions/README.md#getfirewallsidactions) - Get all Actions for a Firewall
* [GetFirewallsIDActionsActionID](docs/firewallactions/README.md#getfirewallsidactionsactionid) - Get an Action for a Firewall
* [PostFirewallsIDActionsApplyToResources](docs/firewallactions/README.md#postfirewallsidactionsapplytoresources) - Apply to Resources
* [PostFirewallsIDActionsRemoveFromResources](docs/firewallactions/README.md#postfirewallsidactionsremovefromresources) - Remove from Resources
* [PostFirewallsIDActionsSetRules](docs/firewallactions/README.md#postfirewallsidactionssetrules) - Set Rules

### [Firewalls](docs/firewalls/README.md)

* [DeleteFirewallsID](docs/firewalls/README.md#deletefirewallsid) - Delete a Firewall
* [GetFirewalls](docs/firewalls/README.md#getfirewalls) - Get all Firewalls
* [GetFirewallsID](docs/firewalls/README.md#getfirewallsid) - Get a Firewall
* [PostFirewalls](docs/firewalls/README.md#postfirewalls) - Create a Firewall
* [PutFirewallsID](docs/firewalls/README.md#putfirewallsid) - Update a Firewall

### [FloatingIPActions](docs/floatingipactions/README.md)

* [GetFloatingIpsIDActions](docs/floatingipactions/README.md#getfloatingipsidactions) - Get all Actions for a Floating IP
* [GetFloatingIpsIDActionsActionID](docs/floatingipactions/README.md#getfloatingipsidactionsactionid) - Get an Action for a Floating IP
* [PostFloatingIpsIDActionsAssign](docs/floatingipactions/README.md#postfloatingipsidactionsassign) - Assign a Floating IP to a Server
* [PostFloatingIpsIDActionsChangeDNSPtr](docs/floatingipactions/README.md#postfloatingipsidactionschangednsptr) - Change reverse DNS entry for a Floating IP
* [PostFloatingIpsIDActionsChangeProtection](docs/floatingipactions/README.md#postfloatingipsidactionschangeprotection) - Change Floating IP Protection
* [PostFloatingIpsIDActionsUnassign](docs/floatingipactions/README.md#postfloatingipsidactionsunassign) - Unassign a Floating IP

### [FloatingIPs](docs/floatingips/README.md)

* [DeleteFloatingIpsID](docs/floatingips/README.md#deletefloatingipsid) - Delete a Floating IP
* [GetFloatingIps](docs/floatingips/README.md#getfloatingips) - Get all Floating IPs
* [GetFloatingIpsID](docs/floatingips/README.md#getfloatingipsid) - Get a Floating IP
* [PostFloatingIps](docs/floatingips/README.md#postfloatingips) - Create a Floating IP
* [PutFloatingIpsID](docs/floatingips/README.md#putfloatingipsid) - Update a Floating IP

### [ISOs](docs/isos/README.md)

* [GetIsos](docs/isos/README.md#getisos) - Get all ISOs
* [GetIsosID](docs/isos/README.md#getisosid) - Get an ISO

### [ImageActions](docs/imageactions/README.md)

* [GetImagesIDActions](docs/imageactions/README.md#getimagesidactions) - Get all Actions for an Image
* [GetImagesIDActionsActionID](docs/imageactions/README.md#getimagesidactionsactionid) - Get an Action for an Image
* [PostImagesIDActionsChangeProtection](docs/imageactions/README.md#postimagesidactionschangeprotection) - Change Image Protection

### [Images](docs/images/README.md)

* [DeleteImagesID](docs/images/README.md#deleteimagesid) - Delete an Image
* [GetImages](docs/images/README.md#getimages) - Get all Images
* [GetImagesID](docs/images/README.md#getimagesid) - Get an Image
* [PutImagesID](docs/images/README.md#putimagesid) - Update an Image

### [LoadBalancerActions](docs/loadbalanceractions/README.md)

* [GetLoadBalancersIDActions](docs/loadbalanceractions/README.md#getloadbalancersidactions) - Get all Actions for a Load Balancer
* [GetLoadBalancersIDActionsActionID](docs/loadbalanceractions/README.md#getloadbalancersidactionsactionid) - Get an Action for a Load Balancer
* [PostLoadBalancersIDActionsAddService](docs/loadbalanceractions/README.md#postloadbalancersidactionsaddservice) - Add Service
* [PostLoadBalancersIDActionsAddTarget](docs/loadbalanceractions/README.md#postloadbalancersidactionsaddtarget) - Add Target
* [PostLoadBalancersIDActionsAttachToNetwork](docs/loadbalanceractions/README.md#postloadbalancersidactionsattachtonetwork) - Attach a Load Balancer to a Network
* [PostLoadBalancersIDActionsChangeAlgorithm](docs/loadbalanceractions/README.md#postloadbalancersidactionschangealgorithm) - Change Algorithm
* [PostLoadBalancersIDActionsChangeDNSPtr](docs/loadbalanceractions/README.md#postloadbalancersidactionschangednsptr) - Change reverse DNS entry for this Load Balancer
* [PostLoadBalancersIDActionsChangeProtection](docs/loadbalanceractions/README.md#postloadbalancersidactionschangeprotection) - Change Load Balancer Protection
* [PostLoadBalancersIDActionsChangeType](docs/loadbalanceractions/README.md#postloadbalancersidactionschangetype) - Change the Type of a Load Balancer
* [PostLoadBalancersIDActionsDeleteService](docs/loadbalanceractions/README.md#postloadbalancersidactionsdeleteservice) - Delete Service
* [PostLoadBalancersIDActionsDetachFromNetwork](docs/loadbalanceractions/README.md#postloadbalancersidactionsdetachfromnetwork) - Detach a Load Balancer from a Network
* [PostLoadBalancersIDActionsDisablePublicInterface](docs/loadbalanceractions/README.md#postloadbalancersidactionsdisablepublicinterface) - Disable the public interface of a Load Balancer
* [PostLoadBalancersIDActionsEnablePublicInterface](docs/loadbalanceractions/README.md#postloadbalancersidactionsenablepublicinterface) - Enable the public interface of a Load Balancer
* [PostLoadBalancersIDActionsRemoveTarget](docs/loadbalanceractions/README.md#postloadbalancersidactionsremovetarget) - Remove Target
* [PostLoadBalancersIDActionsUpdateService](docs/loadbalanceractions/README.md#postloadbalancersidactionsupdateservice) - Update Service

### [LoadBalancerTypes](docs/loadbalancertypes/README.md)

* [GetLoadBalancerTypes](docs/loadbalancertypes/README.md#getloadbalancertypes) - Get all Load Balancer Types
* [GetLoadBalancerTypesID](docs/loadbalancertypes/README.md#getloadbalancertypesid) - Get a Load Balancer Type

### [LoadBalancers](docs/loadbalancers/README.md)

* [DeleteLoadBalancersID](docs/loadbalancers/README.md#deleteloadbalancersid) - Delete a Load Balancer
* [GetLoadBalancers](docs/loadbalancers/README.md#getloadbalancers) - Get all Load Balancers
* [GetLoadBalancersID](docs/loadbalancers/README.md#getloadbalancersid) - Get a Load Balancer
* [GetLoadBalancersIDMetrics](docs/loadbalancers/README.md#getloadbalancersidmetrics) - Get Metrics for a LoadBalancer
* [PostLoadBalancers](docs/loadbalancers/README.md#postloadbalancers) - Create a Load Balancer
* [PutLoadBalancersID](docs/loadbalancers/README.md#putloadbalancersid) - Update a Load Balancer

### [Locations](docs/locations/README.md)

* [GetLocations](docs/locations/README.md#getlocations) - Get all Locations
* [GetLocationsID](docs/locations/README.md#getlocationsid) - Get a Location

### [NetworkActions](docs/networkactions/README.md)

* [GetNetworksIDActions](docs/networkactions/README.md#getnetworksidactions) - Get all Actions for a Network
* [GetNetworksIDActionsActionID](docs/networkactions/README.md#getnetworksidactionsactionid) - Get an Action for a Network
* [PostNetworksIDActionsAddRoute](docs/networkactions/README.md#postnetworksidactionsaddroute) - Add a route to a Network
* [PostNetworksIDActionsAddSubnet](docs/networkactions/README.md#postnetworksidactionsaddsubnet) - Add a subnet to a Network
* [PostNetworksIDActionsChangeIPRange](docs/networkactions/README.md#postnetworksidactionschangeiprange) - Change IP range of a Network
* [PostNetworksIDActionsChangeProtection](docs/networkactions/README.md#postnetworksidactionschangeprotection) - Change Network Protection
* [PostNetworksIDActionsDeleteRoute](docs/networkactions/README.md#postnetworksidactionsdeleteroute) - Delete a route from a Network
* [PostNetworksIDActionsDeleteSubnet](docs/networkactions/README.md#postnetworksidactionsdeletesubnet) - Delete a subnet from a Network

### [Networks](docs/networks/README.md)

* [DeleteNetworksID](docs/networks/README.md#deletenetworksid) - Delete a Network
* [GetNetworks](docs/networks/README.md#getnetworks) - Get all Networks
* [GetNetworksID](docs/networks/README.md#getnetworksid) - Get a Network
* [PostNetworks](docs/networks/README.md#postnetworks) - Create a Network
* [PutNetworksID](docs/networks/README.md#putnetworksid) - Update a Network

### [PlacementGroups](docs/placementgroups/README.md)

* [DeletePlacementGroupsID](docs/placementgroups/README.md#deleteplacementgroupsid) - Delete a PlacementGroup
* [GetPlacementGroups](docs/placementgroups/README.md#getplacementgroups) - Get all PlacementGroups
* [GetPlacementGroupsID](docs/placementgroups/README.md#getplacementgroupsid) - Get a PlacementGroup
* [PostPlacementGroups](docs/placementgroups/README.md#postplacementgroups) - Create a PlacementGroup
* [PutPlacementGroupsID](docs/placementgroups/README.md#putplacementgroupsid) - Update a PlacementGroup

### [Pricing](docs/pricing/README.md)

* [GetPricing](docs/pricing/README.md#getpricing) - Get all prices

### [PrimaryIPActions](docs/primaryipactions/README.md)

* [PostPrimaryIpsIDActionsAssign](docs/primaryipactions/README.md#postprimaryipsidactionsassign) - Assign a Primary IP to a resource
* [PostPrimaryIpsIDActionsChangeDNSPtr](docs/primaryipactions/README.md#postprimaryipsidactionschangednsptr) - Change reverse DNS entry for a Primary IP
* [PostPrimaryIpsIDActionsChangeProtection](docs/primaryipactions/README.md#postprimaryipsidactionschangeprotection) - Change Primary IP Protection
* [PostPrimaryIpsIDActionsUnassign](docs/primaryipactions/README.md#postprimaryipsidactionsunassign) - Unassign a Primary IP from a resource

### [PrimaryIPs](docs/primaryips/README.md)

* [DeletePrimaryIpsID](docs/primaryips/README.md#deleteprimaryipsid) - Delete a Primary IP
* [GetPrimaryIps](docs/primaryips/README.md#getprimaryips) - Get all Primary IPs
* [GetPrimaryIpsID](docs/primaryips/README.md#getprimaryipsid) - Get a Primary IP
* [PostPrimaryIps](docs/primaryips/README.md#postprimaryips) - Create a Primary IP
* [PutPrimaryIpsID](docs/primaryips/README.md#putprimaryipsid) - Update a Primary IP

### [SSHKeys](docs/sshkeys/README.md)

* [DeleteSSHKeysID](docs/sshkeys/README.md#deletesshkeysid) - Delete an SSH key
* [GetSSHKeys](docs/sshkeys/README.md#getsshkeys) - Get all SSH keys
* [GetSSHKeysID](docs/sshkeys/README.md#getsshkeysid) - Get a SSH key
* [PostSSHKeys](docs/sshkeys/README.md#postsshkeys) - Create an SSH key
* [PutSSHKeysID](docs/sshkeys/README.md#putsshkeysid) - Update an SSH key

### [ServerActions](docs/serveractions/README.md)

* [GetServersIDActions](docs/serveractions/README.md#getserversidactions) - Get all Actions for a Server
* [GetServersIDActionsActionID](docs/serveractions/README.md#getserversidactionsactionid) - Get an Action for a Server
* [PostServersIDActionsAddToPlacementGroup](docs/serveractions/README.md#postserversidactionsaddtoplacementgroup) - Add a Server to a Placement Group
* [PostServersIDActionsAttachIso](docs/serveractions/README.md#postserversidactionsattachiso) - Attach an ISO to a Server
* [PostServersIDActionsAttachToNetwork](docs/serveractions/README.md#postserversidactionsattachtonetwork) - Attach a Server to a Network
* [PostServersIDActionsChangeAliasIps](docs/serveractions/README.md#postserversidactionschangealiasips) - Change alias IPs of a Network
* [PostServersIDActionsChangeDNSPtr](docs/serveractions/README.md#postserversidactionschangednsptr) - Change reverse DNS entry for this Server
* [PostServersIDActionsChangeProtection](docs/serveractions/README.md#postserversidactionschangeprotection) - Change Server Protection
* [PostServersIDActionsChangeType](docs/serveractions/README.md#postserversidactionschangetype) - Change the Type of a Server
* [PostServersIDActionsCreateImage](docs/serveractions/README.md#postserversidactionscreateimage) - Create Image from a Server
* [PostServersIDActionsDetachFromNetwork](docs/serveractions/README.md#postserversidactionsdetachfromnetwork) - Detach a Server from a Network
* [PostServersIDActionsDetachIso](docs/serveractions/README.md#postserversidactionsdetachiso) - Detach an ISO from a Server
* [PostServersIDActionsDisableBackup](docs/serveractions/README.md#postserversidactionsdisablebackup) - Disable Backups for a Server
* [PostServersIDActionsDisableRescue](docs/serveractions/README.md#postserversidactionsdisablerescue) - Disable Rescue Mode for a Server
* [PostServersIDActionsEnableBackup](docs/serveractions/README.md#postserversidactionsenablebackup) - Enable and Configure Backups for a Server
* [PostServersIDActionsEnableRescue](docs/serveractions/README.md#postserversidactionsenablerescue) - Enable Rescue Mode for a Server
* [PostServersIDActionsPoweroff](docs/serveractions/README.md#postserversidactionspoweroff) - Power off a Server
* [PostServersIDActionsPoweron](docs/serveractions/README.md#postserversidactionspoweron) - Power on a Server
* [PostServersIDActionsReboot](docs/serveractions/README.md#postserversidactionsreboot) - Soft-reboot a Server
* [PostServersIDActionsRebuild](docs/serveractions/README.md#postserversidactionsrebuild) - Rebuild a Server from an Image
* [PostServersIDActionsRemoveFromPlacementGroup](docs/serveractions/README.md#postserversidactionsremovefromplacementgroup) - Remove from Placement Group
* [PostServersIDActionsRequestConsole](docs/serveractions/README.md#postserversidactionsrequestconsole) - Request Console for a Server
* [PostServersIDActionsReset](docs/serveractions/README.md#postserversidactionsreset) - Reset a Server
* [PostServersIDActionsResetPassword](docs/serveractions/README.md#postserversidactionsresetpassword) - Reset root Password of a Server
* [PostServersIDActionsShutdown](docs/serveractions/README.md#postserversidactionsshutdown) - Shutdown a Server

### [ServerTypes](docs/servertypes/README.md)

* [GetServerTypes](docs/servertypes/README.md#getservertypes) - Get all Server Types
* [GetServerTypesID](docs/servertypes/README.md#getservertypesid) - Get a Server Type

### [Servers](docs/servers/README.md)

* [DeleteServersID](docs/servers/README.md#deleteserversid) - Delete a Server
* [GetServers](docs/servers/README.md#getservers) - Get all Servers
* [GetServersID](docs/servers/README.md#getserversid) - Get a Server
* [GetServersIDMetrics](docs/servers/README.md#getserversidmetrics) - Get Metrics for a Server
* [PostServers](docs/servers/README.md#postservers) - Create a Server
* [PutServersID](docs/servers/README.md#putserversid) - Update a Server

### [VolumeActions](docs/volumeactions/README.md)

* [GetVolumesIDActions](docs/volumeactions/README.md#getvolumesidactions) - Get all Actions for a Volume
* [GetVolumesIDActionsActionID](docs/volumeactions/README.md#getvolumesidactionsactionid) - Get an Action for a Volume
* [PostVolumesIDActionsAttach](docs/volumeactions/README.md#postvolumesidactionsattach) - Attach Volume to a Server
* [PostVolumesIDActionsChangeProtection](docs/volumeactions/README.md#postvolumesidactionschangeprotection) - Change Volume Protection
* [PostVolumesIDActionsDetach](docs/volumeactions/README.md#postvolumesidactionsdetach) - Detach Volume
* [PostVolumesIDActionsResize](docs/volumeactions/README.md#postvolumesidactionsresize) - Resize Volume

### [Volumes](docs/volumes/README.md)

* [DeleteVolumesID](docs/volumes/README.md#deletevolumesid) - Delete a Volume
* [GetVolumes](docs/volumes/README.md#getvolumes) - Get all Volumes
* [GetVolumesID](docs/volumes/README.md#getvolumesid) - Get a Volume
* [PostVolumes](docs/volumes/README.md#postvolumes) - Create a Volume
* [PutVolumesID](docs/volumes/README.md#putvolumesid) - Update a Volume
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
