# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hetzner.cloud/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hetzner.cloud/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetActionsRequest,
  GetActionsResponse,
  GetActionsSortParameterSortEnum,
  GetActionsStatusParameterStatusEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetActionsRequest = {
  id: 548814,
  sort: GetActionsSortParameterSortEnum.ProgressAsc,
  status: GetActionsStatusParameterStatusEnum.Error,
};

sdk.actions.getActions(req).then((res: GetActionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### actions

* `getActions` - Get all Actions
* `getActionsId` - Get an Action

### certificateActions

* `getCertificatesIdActions` - Get all Actions for a Certificate
* `getCertificatesIdActionsActionId` - Get an Action for a Certificate
* `postCertificatesIdActionsRetry` - Retry Issuance or Renewal

### certificates

* `deleteCertificatesId` - Delete a Certificate
* `getCertificates` - Get all Certificates
* `getCertificatesId` - Get a Certificate
* `postCertificates` - Create a Certificate
* `putCertificatesId` - Update a Certificate

### datacenters

* `getDatacenters` - Get all Datacenters
* `getDatacentersId` - Get a Datacenter

### firewallActions

* `getFirewallsIdActions` - Get all Actions for a Firewall
* `getFirewallsIdActionsActionId` - Get an Action for a Firewall
* `postFirewallsIdActionsApplyToResources` - Apply to Resources
* `postFirewallsIdActionsRemoveFromResources` - Remove from Resources
* `postFirewallsIdActionsSetRules` - Set Rules

### firewalls

* `deleteFirewallsId` - Delete a Firewall
* `getFirewalls` - Get all Firewalls
* `getFirewallsId` - Get a Firewall
* `postFirewalls` - Create a Firewall
* `putFirewallsId` - Update a Firewall

### floatingIPActions

* `getFloatingIpsIdActions` - Get all Actions for a Floating IP
* `getFloatingIpsIdActionsActionId` - Get an Action for a Floating IP
* `postFloatingIpsIdActionsAssign` - Assign a Floating IP to a Server
* `postFloatingIpsIdActionsChangeDnsPtr` - Change reverse DNS entry for a Floating IP
* `postFloatingIpsIdActionsChangeProtection` - Change Floating IP Protection
* `postFloatingIpsIdActionsUnassign` - Unassign a Floating IP

### floatingIPs

* `deleteFloatingIpsId` - Delete a Floating IP
* `getFloatingIps` - Get all Floating IPs
* `getFloatingIpsId` - Get a Floating IP
* `postFloatingIps` - Create a Floating IP
* `putFloatingIpsId` - Update a Floating IP

### isOs

* `getIsos` - Get all ISOs
* `getIsosId` - Get an ISO

### imageActions

* `getImagesIdActions` - Get all Actions for an Image
* `getImagesIdActionsActionId` - Get an Action for an Image
* `postImagesIdActionsChangeProtection` - Change Image Protection

### images

* `deleteImagesId` - Delete an Image
* `getImages` - Get all Images
* `getImagesId` - Get an Image
* `putImagesId` - Update an Image

### loadBalancerActions

* `getLoadBalancersIdActions` - Get all Actions for a Load Balancer
* `getLoadBalancersIdActionsActionId` - Get an Action for a Load Balancer
* `postLoadBalancersIdActionsAddService` - Add Service
* `postLoadBalancersIdActionsAddTarget` - Add Target
* `postLoadBalancersIdActionsAttachToNetwork` - Attach a Load Balancer to a Network
* `postLoadBalancersIdActionsChangeAlgorithm` - Change Algorithm
* `postLoadBalancersIdActionsChangeDnsPtr` - Change reverse DNS entry for this Load Balancer
* `postLoadBalancersIdActionsChangeProtection` - Change Load Balancer Protection
* `postLoadBalancersIdActionsChangeType` - Change the Type of a Load Balancer
* `postLoadBalancersIdActionsDeleteService` - Delete Service
* `postLoadBalancersIdActionsDetachFromNetwork` - Detach a Load Balancer from a Network
* `postLoadBalancersIdActionsDisablePublicInterface` - Disable the public interface of a Load Balancer
* `postLoadBalancersIdActionsEnablePublicInterface` - Enable the public interface of a Load Balancer
* `postLoadBalancersIdActionsRemoveTarget` - Remove Target
* `postLoadBalancersIdActionsUpdateService` - Update Service

### loadBalancerTypes

* `getLoadBalancerTypes` - Get all Load Balancer Types
* `getLoadBalancerTypesId` - Get a Load Balancer Type

### loadBalancers

* `deleteLoadBalancersId` - Delete a Load Balancer
* `getLoadBalancers` - Get all Load Balancers
* `getLoadBalancersId` - Get a Load Balancer
* `getLoadBalancersIdMetrics` - Get Metrics for a LoadBalancer
* `postLoadBalancers` - Create a Load Balancer
* `putLoadBalancersId` - Update a Load Balancer

### locations

* `getLocations` - Get all Locations
* `getLocationsId` - Get a Location

### networkActions

* `getNetworksIdActions` - Get all Actions for a Network
* `getNetworksIdActionsActionId` - Get an Action for a Network
* `postNetworksIdActionsAddRoute` - Add a route to a Network
* `postNetworksIdActionsAddSubnet` - Add a subnet to a Network
* `postNetworksIdActionsChangeIpRange` - Change IP range of a Network
* `postNetworksIdActionsChangeProtection` - Change Network Protection
* `postNetworksIdActionsDeleteRoute` - Delete a route from a Network
* `postNetworksIdActionsDeleteSubnet` - Delete a subnet from a Network

### networks

* `deleteNetworksId` - Delete a Network
* `getNetworks` - Get all Networks
* `getNetworksId` - Get a Network
* `postNetworks` - Create a Network
* `putNetworksId` - Update a Network

### placementGroups

* `deletePlacementGroupsId` - Delete a PlacementGroup
* `getPlacementGroups` - Get all PlacementGroups
* `getPlacementGroupsId` - Get a PlacementGroup
* `postPlacementGroups` - Create a PlacementGroup
* `putPlacementGroupsId` - Update a PlacementGroup

### pricing

* `getPricing` - Get all prices

### primaryIPActions

* `postPrimaryIpsIdActionsAssign` - Assign a Primary IP to a resource
* `postPrimaryIpsIdActionsChangeDnsPtr` - Change reverse DNS entry for a Primary IP
* `postPrimaryIpsIdActionsChangeProtection` - Change Primary IP Protection
* `postPrimaryIpsIdActionsUnassign` - Unassign a Primary IP from a resource

### primaryIPs

* `deletePrimaryIpsId` - Delete a Primary IP
* `getPrimaryIps` - Get all Primary IPs
* `getPrimaryIpsId` - Get a Primary IP
* `postPrimaryIps` - Create a Primary IP
* `putPrimaryIpsId` - Update a Primary IP

### sshKeys

* `deleteSshKeysId` - Delete an SSH key
* `getSshKeys` - Get all SSH keys
* `getSshKeysId` - Get a SSH key
* `postSshKeys` - Create an SSH key
* `putSshKeysId` - Update an SSH key

### serverActions

* `getServersIdActions` - Get all Actions for a Server
* `getServersIdActionsActionId` - Get an Action for a Server
* `postServersIdActionsAddToPlacementGroup` - Add a Server to a Placement Group
* `postServersIdActionsAttachIso` - Attach an ISO to a Server
* `postServersIdActionsAttachToNetwork` - Attach a Server to a Network
* `postServersIdActionsChangeAliasIps` - Change alias IPs of a Network
* `postServersIdActionsChangeDnsPtr` - Change reverse DNS entry for this Server
* `postServersIdActionsChangeProtection` - Change Server Protection
* `postServersIdActionsChangeType` - Change the Type of a Server
* `postServersIdActionsCreateImage` - Create Image from a Server
* `postServersIdActionsDetachFromNetwork` - Detach a Server from a Network
* `postServersIdActionsDetachIso` - Detach an ISO from a Server
* `postServersIdActionsDisableBackup` - Disable Backups for a Server
* `postServersIdActionsDisableRescue` - Disable Rescue Mode for a Server
* `postServersIdActionsEnableBackup` - Enable and Configure Backups for a Server
* `postServersIdActionsEnableRescue` - Enable Rescue Mode for a Server
* `postServersIdActionsPoweroff` - Power off a Server
* `postServersIdActionsPoweron` - Power on a Server
* `postServersIdActionsReboot` - Soft-reboot a Server
* `postServersIdActionsRebuild` - Rebuild a Server from an Image
* `postServersIdActionsRemoveFromPlacementGroup` - Remove from Placement Group
* `postServersIdActionsRequestConsole` - Request Console for a Server
* `postServersIdActionsReset` - Reset a Server
* `postServersIdActionsResetPassword` - Reset root Password of a Server
* `postServersIdActionsShutdown` - Shutdown a Server

### serverTypes

* `getServerTypes` - Get all Server Types
* `getServerTypesId` - Get a Server Type

### servers

* `deleteServersId` - Delete a Server
* `getServers` - Get all Servers
* `getServersId` - Get a Server
* `getServersIdMetrics` - Get Metrics for a Server
* `postServers` - Create a Server
* `putServersId` - Update a Server

### volumeActions

* `getVolumesIdActions` - Get all Actions for a Volume
* `getVolumesIdActionsActionId` - Get an Action for a Volume
* `postVolumesIdActionsAttach` - Attach Volume to a Server
* `postVolumesIdActionsChangeProtection` - Change Volume Protection
* `postVolumesIdActionsDetach` - Detach Volume
* `postVolumesIdActionsResize` - Resize Volume

### volumes

* `deleteVolumesId` - Delete a Volume
* `getVolumes` - Get all Volumes
* `getVolumesId` - Get a Volume
* `postVolumes` - Create a Volume
* `putVolumesId` - Update a Volume
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

