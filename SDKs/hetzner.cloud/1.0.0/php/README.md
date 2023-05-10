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
use \OpenAPI\OpenAPI\Models\Operations\GetActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionsRequest();
    $request->id = 548814;
    $request->sort = GetActionsSortParameterSortEnum::PROGRESS_ASC;
    $request->status = GetActionsStatusParameterStatusEnum::ERROR;

    $response = $sdk->actions->getActions($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [actions](docs/actions/README.md)

* [getActions](docs/actions/README.md#getactions) - Get all Actions
* [getActionsId](docs/actions/README.md#getactionsid) - Get an Action

### [certificateActions](docs/certificateactions/README.md)

* [getCertificatesIdActions](docs/certificateactions/README.md#getcertificatesidactions) - Get all Actions for a Certificate
* [getCertificatesIdActionsActionId](docs/certificateactions/README.md#getcertificatesidactionsactionid) - Get an Action for a Certificate
* [postCertificatesIdActionsRetry](docs/certificateactions/README.md#postcertificatesidactionsretry) - Retry Issuance or Renewal

### [certificates](docs/certificates/README.md)

* [deleteCertificatesId](docs/certificates/README.md#deletecertificatesid) - Delete a Certificate
* [getCertificates](docs/certificates/README.md#getcertificates) - Get all Certificates
* [getCertificatesId](docs/certificates/README.md#getcertificatesid) - Get a Certificate
* [postCertificates](docs/certificates/README.md#postcertificates) - Create a Certificate
* [putCertificatesId](docs/certificates/README.md#putcertificatesid) - Update a Certificate

### [datacenters](docs/datacenters/README.md)

* [getDatacenters](docs/datacenters/README.md#getdatacenters) - Get all Datacenters
* [getDatacentersId](docs/datacenters/README.md#getdatacentersid) - Get a Datacenter

### [firewallActions](docs/firewallactions/README.md)

* [getFirewallsIdActions](docs/firewallactions/README.md#getfirewallsidactions) - Get all Actions for a Firewall
* [getFirewallsIdActionsActionId](docs/firewallactions/README.md#getfirewallsidactionsactionid) - Get an Action for a Firewall
* [postFirewallsIdActionsApplyToResources](docs/firewallactions/README.md#postfirewallsidactionsapplytoresources) - Apply to Resources
* [postFirewallsIdActionsRemoveFromResources](docs/firewallactions/README.md#postfirewallsidactionsremovefromresources) - Remove from Resources
* [postFirewallsIdActionsSetRules](docs/firewallactions/README.md#postfirewallsidactionssetrules) - Set Rules

### [firewalls](docs/firewalls/README.md)

* [deleteFirewallsId](docs/firewalls/README.md#deletefirewallsid) - Delete a Firewall
* [getFirewalls](docs/firewalls/README.md#getfirewalls) - Get all Firewalls
* [getFirewallsId](docs/firewalls/README.md#getfirewallsid) - Get a Firewall
* [postFirewalls](docs/firewalls/README.md#postfirewalls) - Create a Firewall
* [putFirewallsId](docs/firewalls/README.md#putfirewallsid) - Update a Firewall

### [floatingIPActions](docs/floatingipactions/README.md)

* [getFloatingIpsIdActions](docs/floatingipactions/README.md#getfloatingipsidactions) - Get all Actions for a Floating IP
* [getFloatingIpsIdActionsActionId](docs/floatingipactions/README.md#getfloatingipsidactionsactionid) - Get an Action for a Floating IP
* [postFloatingIpsIdActionsAssign](docs/floatingipactions/README.md#postfloatingipsidactionsassign) - Assign a Floating IP to a Server
* [postFloatingIpsIdActionsChangeDnsPtr](docs/floatingipactions/README.md#postfloatingipsidactionschangednsptr) - Change reverse DNS entry for a Floating IP
* [postFloatingIpsIdActionsChangeProtection](docs/floatingipactions/README.md#postfloatingipsidactionschangeprotection) - Change Floating IP Protection
* [postFloatingIpsIdActionsUnassign](docs/floatingipactions/README.md#postfloatingipsidactionsunassign) - Unassign a Floating IP

### [floatingIPs](docs/floatingips/README.md)

* [deleteFloatingIpsId](docs/floatingips/README.md#deletefloatingipsid) - Delete a Floating IP
* [getFloatingIps](docs/floatingips/README.md#getfloatingips) - Get all Floating IPs
* [getFloatingIpsId](docs/floatingips/README.md#getfloatingipsid) - Get a Floating IP
* [postFloatingIps](docs/floatingips/README.md#postfloatingips) - Create a Floating IP
* [putFloatingIpsId](docs/floatingips/README.md#putfloatingipsid) - Update a Floating IP

### [isOs](docs/isos/README.md)

* [getIsos](docs/isos/README.md#getisos) - Get all ISOs
* [getIsosId](docs/isos/README.md#getisosid) - Get an ISO

### [imageActions](docs/imageactions/README.md)

* [getImagesIdActions](docs/imageactions/README.md#getimagesidactions) - Get all Actions for an Image
* [getImagesIdActionsActionId](docs/imageactions/README.md#getimagesidactionsactionid) - Get an Action for an Image
* [postImagesIdActionsChangeProtection](docs/imageactions/README.md#postimagesidactionschangeprotection) - Change Image Protection

### [images](docs/images/README.md)

* [deleteImagesId](docs/images/README.md#deleteimagesid) - Delete an Image
* [getImages](docs/images/README.md#getimages) - Get all Images
* [getImagesId](docs/images/README.md#getimagesid) - Get an Image
* [putImagesId](docs/images/README.md#putimagesid) - Update an Image

### [loadBalancerActions](docs/loadbalanceractions/README.md)

* [getLoadBalancersIdActions](docs/loadbalanceractions/README.md#getloadbalancersidactions) - Get all Actions for a Load Balancer
* [getLoadBalancersIdActionsActionId](docs/loadbalanceractions/README.md#getloadbalancersidactionsactionid) - Get an Action for a Load Balancer
* [postLoadBalancersIdActionsAddService](docs/loadbalanceractions/README.md#postloadbalancersidactionsaddservice) - Add Service
* [postLoadBalancersIdActionsAddTarget](docs/loadbalanceractions/README.md#postloadbalancersidactionsaddtarget) - Add Target
* [postLoadBalancersIdActionsAttachToNetwork](docs/loadbalanceractions/README.md#postloadbalancersidactionsattachtonetwork) - Attach a Load Balancer to a Network
* [postLoadBalancersIdActionsChangeAlgorithm](docs/loadbalanceractions/README.md#postloadbalancersidactionschangealgorithm) - Change Algorithm
* [postLoadBalancersIdActionsChangeDnsPtr](docs/loadbalanceractions/README.md#postloadbalancersidactionschangednsptr) - Change reverse DNS entry for this Load Balancer
* [postLoadBalancersIdActionsChangeProtection](docs/loadbalanceractions/README.md#postloadbalancersidactionschangeprotection) - Change Load Balancer Protection
* [postLoadBalancersIdActionsChangeType](docs/loadbalanceractions/README.md#postloadbalancersidactionschangetype) - Change the Type of a Load Balancer
* [postLoadBalancersIdActionsDeleteService](docs/loadbalanceractions/README.md#postloadbalancersidactionsdeleteservice) - Delete Service
* [postLoadBalancersIdActionsDetachFromNetwork](docs/loadbalanceractions/README.md#postloadbalancersidactionsdetachfromnetwork) - Detach a Load Balancer from a Network
* [postLoadBalancersIdActionsDisablePublicInterface](docs/loadbalanceractions/README.md#postloadbalancersidactionsdisablepublicinterface) - Disable the public interface of a Load Balancer
* [postLoadBalancersIdActionsEnablePublicInterface](docs/loadbalanceractions/README.md#postloadbalancersidactionsenablepublicinterface) - Enable the public interface of a Load Balancer
* [postLoadBalancersIdActionsRemoveTarget](docs/loadbalanceractions/README.md#postloadbalancersidactionsremovetarget) - Remove Target
* [postLoadBalancersIdActionsUpdateService](docs/loadbalanceractions/README.md#postloadbalancersidactionsupdateservice) - Update Service

### [loadBalancerTypes](docs/loadbalancertypes/README.md)

* [getLoadBalancerTypes](docs/loadbalancertypes/README.md#getloadbalancertypes) - Get all Load Balancer Types
* [getLoadBalancerTypesId](docs/loadbalancertypes/README.md#getloadbalancertypesid) - Get a Load Balancer Type

### [loadBalancers](docs/loadbalancers/README.md)

* [deleteLoadBalancersId](docs/loadbalancers/README.md#deleteloadbalancersid) - Delete a Load Balancer
* [getLoadBalancers](docs/loadbalancers/README.md#getloadbalancers) - Get all Load Balancers
* [getLoadBalancersId](docs/loadbalancers/README.md#getloadbalancersid) - Get a Load Balancer
* [getLoadBalancersIdMetrics](docs/loadbalancers/README.md#getloadbalancersidmetrics) - Get Metrics for a LoadBalancer
* [postLoadBalancers](docs/loadbalancers/README.md#postloadbalancers) - Create a Load Balancer
* [putLoadBalancersId](docs/loadbalancers/README.md#putloadbalancersid) - Update a Load Balancer

### [locations](docs/locations/README.md)

* [getLocations](docs/locations/README.md#getlocations) - Get all Locations
* [getLocationsId](docs/locations/README.md#getlocationsid) - Get a Location

### [networkActions](docs/networkactions/README.md)

* [getNetworksIdActions](docs/networkactions/README.md#getnetworksidactions) - Get all Actions for a Network
* [getNetworksIdActionsActionId](docs/networkactions/README.md#getnetworksidactionsactionid) - Get an Action for a Network
* [postNetworksIdActionsAddRoute](docs/networkactions/README.md#postnetworksidactionsaddroute) - Add a route to a Network
* [postNetworksIdActionsAddSubnet](docs/networkactions/README.md#postnetworksidactionsaddsubnet) - Add a subnet to a Network
* [postNetworksIdActionsChangeIpRange](docs/networkactions/README.md#postnetworksidactionschangeiprange) - Change IP range of a Network
* [postNetworksIdActionsChangeProtection](docs/networkactions/README.md#postnetworksidactionschangeprotection) - Change Network Protection
* [postNetworksIdActionsDeleteRoute](docs/networkactions/README.md#postnetworksidactionsdeleteroute) - Delete a route from a Network
* [postNetworksIdActionsDeleteSubnet](docs/networkactions/README.md#postnetworksidactionsdeletesubnet) - Delete a subnet from a Network

### [networks](docs/networks/README.md)

* [deleteNetworksId](docs/networks/README.md#deletenetworksid) - Delete a Network
* [getNetworks](docs/networks/README.md#getnetworks) - Get all Networks
* [getNetworksId](docs/networks/README.md#getnetworksid) - Get a Network
* [postNetworks](docs/networks/README.md#postnetworks) - Create a Network
* [putNetworksId](docs/networks/README.md#putnetworksid) - Update a Network

### [placementGroups](docs/placementgroups/README.md)

* [deletePlacementGroupsId](docs/placementgroups/README.md#deleteplacementgroupsid) - Delete a PlacementGroup
* [getPlacementGroups](docs/placementgroups/README.md#getplacementgroups) - Get all PlacementGroups
* [getPlacementGroupsId](docs/placementgroups/README.md#getplacementgroupsid) - Get a PlacementGroup
* [postPlacementGroups](docs/placementgroups/README.md#postplacementgroups) - Create a PlacementGroup
* [putPlacementGroupsId](docs/placementgroups/README.md#putplacementgroupsid) - Update a PlacementGroup

### [pricing](docs/pricing/README.md)

* [getPricing](docs/pricing/README.md#getpricing) - Get all prices

### [primaryIPActions](docs/primaryipactions/README.md)

* [postPrimaryIpsIdActionsAssign](docs/primaryipactions/README.md#postprimaryipsidactionsassign) - Assign a Primary IP to a resource
* [postPrimaryIpsIdActionsChangeDnsPtr](docs/primaryipactions/README.md#postprimaryipsidactionschangednsptr) - Change reverse DNS entry for a Primary IP
* [postPrimaryIpsIdActionsChangeProtection](docs/primaryipactions/README.md#postprimaryipsidactionschangeprotection) - Change Primary IP Protection
* [postPrimaryIpsIdActionsUnassign](docs/primaryipactions/README.md#postprimaryipsidactionsunassign) - Unassign a Primary IP from a resource

### [primaryIPs](docs/primaryips/README.md)

* [deletePrimaryIpsId](docs/primaryips/README.md#deleteprimaryipsid) - Delete a Primary IP
* [getPrimaryIps](docs/primaryips/README.md#getprimaryips) - Get all Primary IPs
* [getPrimaryIpsId](docs/primaryips/README.md#getprimaryipsid) - Get a Primary IP
* [postPrimaryIps](docs/primaryips/README.md#postprimaryips) - Create a Primary IP
* [putPrimaryIpsId](docs/primaryips/README.md#putprimaryipsid) - Update a Primary IP

### [sshKeys](docs/sshkeys/README.md)

* [deleteSshKeysId](docs/sshkeys/README.md#deletesshkeysid) - Delete an SSH key
* [getSshKeys](docs/sshkeys/README.md#getsshkeys) - Get all SSH keys
* [getSshKeysId](docs/sshkeys/README.md#getsshkeysid) - Get a SSH key
* [postSshKeys](docs/sshkeys/README.md#postsshkeys) - Create an SSH key
* [putSshKeysId](docs/sshkeys/README.md#putsshkeysid) - Update an SSH key

### [serverActions](docs/serveractions/README.md)

* [getServersIdActions](docs/serveractions/README.md#getserversidactions) - Get all Actions for a Server
* [getServersIdActionsActionId](docs/serveractions/README.md#getserversidactionsactionid) - Get an Action for a Server
* [postServersIdActionsAddToPlacementGroup](docs/serveractions/README.md#postserversidactionsaddtoplacementgroup) - Add a Server to a Placement Group
* [postServersIdActionsAttachIso](docs/serveractions/README.md#postserversidactionsattachiso) - Attach an ISO to a Server
* [postServersIdActionsAttachToNetwork](docs/serveractions/README.md#postserversidactionsattachtonetwork) - Attach a Server to a Network
* [postServersIdActionsChangeAliasIps](docs/serveractions/README.md#postserversidactionschangealiasips) - Change alias IPs of a Network
* [postServersIdActionsChangeDnsPtr](docs/serveractions/README.md#postserversidactionschangednsptr) - Change reverse DNS entry for this Server
* [postServersIdActionsChangeProtection](docs/serveractions/README.md#postserversidactionschangeprotection) - Change Server Protection
* [postServersIdActionsChangeType](docs/serveractions/README.md#postserversidactionschangetype) - Change the Type of a Server
* [postServersIdActionsCreateImage](docs/serveractions/README.md#postserversidactionscreateimage) - Create Image from a Server
* [postServersIdActionsDetachFromNetwork](docs/serveractions/README.md#postserversidactionsdetachfromnetwork) - Detach a Server from a Network
* [postServersIdActionsDetachIso](docs/serveractions/README.md#postserversidactionsdetachiso) - Detach an ISO from a Server
* [postServersIdActionsDisableBackup](docs/serveractions/README.md#postserversidactionsdisablebackup) - Disable Backups for a Server
* [postServersIdActionsDisableRescue](docs/serveractions/README.md#postserversidactionsdisablerescue) - Disable Rescue Mode for a Server
* [postServersIdActionsEnableBackup](docs/serveractions/README.md#postserversidactionsenablebackup) - Enable and Configure Backups for a Server
* [postServersIdActionsEnableRescue](docs/serveractions/README.md#postserversidactionsenablerescue) - Enable Rescue Mode for a Server
* [postServersIdActionsPoweroff](docs/serveractions/README.md#postserversidactionspoweroff) - Power off a Server
* [postServersIdActionsPoweron](docs/serveractions/README.md#postserversidactionspoweron) - Power on a Server
* [postServersIdActionsReboot](docs/serveractions/README.md#postserversidactionsreboot) - Soft-reboot a Server
* [postServersIdActionsRebuild](docs/serveractions/README.md#postserversidactionsrebuild) - Rebuild a Server from an Image
* [postServersIdActionsRemoveFromPlacementGroup](docs/serveractions/README.md#postserversidactionsremovefromplacementgroup) - Remove from Placement Group
* [postServersIdActionsRequestConsole](docs/serveractions/README.md#postserversidactionsrequestconsole) - Request Console for a Server
* [postServersIdActionsReset](docs/serveractions/README.md#postserversidactionsreset) - Reset a Server
* [postServersIdActionsResetPassword](docs/serveractions/README.md#postserversidactionsresetpassword) - Reset root Password of a Server
* [postServersIdActionsShutdown](docs/serveractions/README.md#postserversidactionsshutdown) - Shutdown a Server

### [serverTypes](docs/servertypes/README.md)

* [getServerTypes](docs/servertypes/README.md#getservertypes) - Get all Server Types
* [getServerTypesId](docs/servertypes/README.md#getservertypesid) - Get a Server Type

### [servers](docs/servers/README.md)

* [deleteServersId](docs/servers/README.md#deleteserversid) - Delete a Server
* [getServers](docs/servers/README.md#getservers) - Get all Servers
* [getServersId](docs/servers/README.md#getserversid) - Get a Server
* [getServersIdMetrics](docs/servers/README.md#getserversidmetrics) - Get Metrics for a Server
* [postServers](docs/servers/README.md#postservers) - Create a Server
* [putServersId](docs/servers/README.md#putserversid) - Update a Server

### [volumeActions](docs/volumeactions/README.md)

* [getVolumesIdActions](docs/volumeactions/README.md#getvolumesidactions) - Get all Actions for a Volume
* [getVolumesIdActionsActionId](docs/volumeactions/README.md#getvolumesidactionsactionid) - Get an Action for a Volume
* [postVolumesIdActionsAttach](docs/volumeactions/README.md#postvolumesidactionsattach) - Attach Volume to a Server
* [postVolumesIdActionsChangeProtection](docs/volumeactions/README.md#postvolumesidactionschangeprotection) - Change Volume Protection
* [postVolumesIdActionsDetach](docs/volumeactions/README.md#postvolumesidactionsdetach) - Detach Volume
* [postVolumesIdActionsResize](docs/volumeactions/README.md#postvolumesidactionsresize) - Resize Volume

### [volumes](docs/volumes/README.md)

* [deleteVolumesId](docs/volumes/README.md#deletevolumesid) - Delete a Volume
* [getVolumes](docs/volumes/README.md#getvolumes) - Get all Volumes
* [getVolumesId](docs/volumes/README.md#getvolumesid) - Get a Volume
* [postVolumes](docs/volumes/README.md#postvolumes) - Create a Volume
* [putVolumesId](docs/volumes/README.md#putvolumesid) - Update a Volume
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
