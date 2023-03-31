# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/hetzner.cloud/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetActionsRequest(
    id=548814,
    sort="progress:asc",
    status="error",
)
    
res = s.actions.get_actions(req)

if res.actions_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### actions

* `get_actions` - Get all Actions
* `get_actions_id_` - Get an Action

### certificate_actions

* `get_certificates_id_actions` - Get all Actions for a Certificate
* `get_certificates_id_actions_action_id_` - Get an Action for a Certificate
* `post_certificates_id_actions_retry` - Retry Issuance or Renewal

### certificates

* `delete_certificates_id_` - Delete a Certificate
* `get_certificates` - Get all Certificates
* `get_certificates_id_` - Get a Certificate
* `post_certificates` - Create a Certificate
* `put_certificates_id_` - Update a Certificate

### datacenters

* `get_datacenters` - Get all Datacenters
* `get_datacenters_id_` - Get a Datacenter

### firewall_actions

* `get_firewalls_id_actions` - Get all Actions for a Firewall
* `get_firewalls_id_actions_action_id_` - Get an Action for a Firewall
* `post_firewalls_id_actions_apply_to_resources` - Apply to Resources
* `post_firewalls_id_actions_remove_from_resources` - Remove from Resources
* `post_firewalls_id_actions_set_rules` - Set Rules

### firewalls

* `delete_firewalls_id_` - Delete a Firewall
* `get_firewalls` - Get all Firewalls
* `get_firewalls_id_` - Get a Firewall
* `post_firewalls` - Create a Firewall
* `put_firewalls_id_` - Update a Firewall

### floating_ip_actions

* `get_floating_ips_id_actions` - Get all Actions for a Floating IP
* `get_floating_ips_id_actions_action_id_` - Get an Action for a Floating IP
* `post_floating_ips_id_actions_assign` - Assign a Floating IP to a Server
* `post_floating_ips_id_actions_change_dns_ptr` - Change reverse DNS entry for a Floating IP
* `post_floating_ips_id_actions_change_protection` - Change Floating IP Protection
* `post_floating_ips_id_actions_unassign` - Unassign a Floating IP

### floating_i_ps

* `delete_floating_ips_id_` - Delete a Floating IP
* `get_floating_ips` - Get all Floating IPs
* `get_floating_ips_id_` - Get a Floating IP
* `post_floating_ips` - Create a Floating IP
* `put_floating_ips_id_` - Update a Floating IP

### is_os

* `get_isos` - Get all ISOs
* `get_isos_id_` - Get an ISO

### image_actions

* `get_images_id_actions` - Get all Actions for an Image
* `get_images_id_actions_action_id_` - Get an Action for an Image
* `post_images_id_actions_change_protection` - Change Image Protection

### images

* `delete_images_id_` - Delete an Image
* `get_images` - Get all Images
* `get_images_id_` - Get an Image
* `put_images_id_` - Update an Image

### load_balancer_actions

* `get_load_balancers_id_actions` - Get all Actions for a Load Balancer
* `get_load_balancers_id_actions_action_id_` - Get an Action for a Load Balancer
* `post_load_balancers_id_actions_add_service` - Add Service
* `post_load_balancers_id_actions_add_target` - Add Target
* `post_load_balancers_id_actions_attach_to_network` - Attach a Load Balancer to a Network
* `post_load_balancers_id_actions_change_algorithm` - Change Algorithm
* `post_load_balancers_id_actions_change_dns_ptr` - Change reverse DNS entry for this Load Balancer
* `post_load_balancers_id_actions_change_protection` - Change Load Balancer Protection
* `post_load_balancers_id_actions_change_type` - Change the Type of a Load Balancer
* `post_load_balancers_id_actions_delete_service` - Delete Service
* `post_load_balancers_id_actions_detach_from_network` - Detach a Load Balancer from a Network
* `post_load_balancers_id_actions_disable_public_interface` - Disable the public interface of a Load Balancer
* `post_load_balancers_id_actions_enable_public_interface` - Enable the public interface of a Load Balancer
* `post_load_balancers_id_actions_remove_target` - Remove Target
* `post_load_balancers_id_actions_update_service` - Update Service

### load_balancer_types

* `get_load_balancer_types` - Get all Load Balancer Types
* `get_load_balancer_types_id_` - Get a Load Balancer Type

### load_balancers

* `delete_load_balancers_id_` - Delete a Load Balancer
* `get_load_balancers` - Get all Load Balancers
* `get_load_balancers_id_` - Get a Load Balancer
* `get_load_balancers_id_metrics` - Get Metrics for a LoadBalancer
* `post_load_balancers` - Create a Load Balancer
* `put_load_balancers_id_` - Update a Load Balancer

### locations

* `get_locations` - Get all Locations
* `get_locations_id_` - Get a Location

### network_actions

* `get_networks_id_actions` - Get all Actions for a Network
* `get_networks_id_actions_action_id_` - Get an Action for a Network
* `post_networks_id_actions_add_route` - Add a route to a Network
* `post_networks_id_actions_add_subnet` - Add a subnet to a Network
* `post_networks_id_actions_change_ip_range` - Change IP range of a Network
* `post_networks_id_actions_change_protection` - Change Network Protection
* `post_networks_id_actions_delete_route` - Delete a route from a Network
* `post_networks_id_actions_delete_subnet` - Delete a subnet from a Network

### networks

* `delete_networks_id_` - Delete a Network
* `get_networks` - Get all Networks
* `get_networks_id_` - Get a Network
* `post_networks` - Create a Network
* `put_networks_id_` - Update a Network

### placement_groups

* `delete_placement_groups_id_` - Delete a PlacementGroup
* `get_placement_groups` - Get all PlacementGroups
* `get_placement_groups_id_` - Get a PlacementGroup
* `post_placement_groups` - Create a PlacementGroup
* `put_placement_groups_id_` - Update a PlacementGroup

### pricing

* `get_pricing` - Get all prices

### primary_ip_actions

* `post_primary_ips_id_actions_assign` - Assign a Primary IP to a resource
* `post_primary_ips_id_actions_change_dns_ptr` - Change reverse DNS entry for a Primary IP
* `post_primary_ips_id_actions_change_protection` - Change Primary IP Protection
* `post_primary_ips_id_actions_unassign` - Unassign a Primary IP from a resource

### primary_i_ps

* `delete_primary_ips_id_` - Delete a Primary IP
* `get_primary_ips` - Get all Primary IPs
* `get_primary_ips_id_` - Get a Primary IP
* `post_primary_ips` - Create a Primary IP
* `put_primary_ips_id_` - Update a Primary IP

### ssh_keys

* `delete_ssh_keys_id_` - Delete an SSH key
* `get_ssh_keys` - Get all SSH keys
* `get_ssh_keys_id_` - Get a SSH key
* `post_ssh_keys` - Create an SSH key
* `put_ssh_keys_id_` - Update an SSH key

### server_actions

* `get_servers_id_actions` - Get all Actions for a Server
* `get_servers_id_actions_action_id_` - Get an Action for a Server
* `post_servers_id_actions_add_to_placement_group` - Add a Server to a Placement Group
* `post_servers_id_actions_attach_iso` - Attach an ISO to a Server
* `post_servers_id_actions_attach_to_network` - Attach a Server to a Network
* `post_servers_id_actions_change_alias_ips` - Change alias IPs of a Network
* `post_servers_id_actions_change_dns_ptr` - Change reverse DNS entry for this Server
* `post_servers_id_actions_change_protection` - Change Server Protection
* `post_servers_id_actions_change_type` - Change the Type of a Server
* `post_servers_id_actions_create_image` - Create Image from a Server
* `post_servers_id_actions_detach_from_network` - Detach a Server from a Network
* `post_servers_id_actions_detach_iso` - Detach an ISO from a Server
* `post_servers_id_actions_disable_backup` - Disable Backups for a Server
* `post_servers_id_actions_disable_rescue` - Disable Rescue Mode for a Server
* `post_servers_id_actions_enable_backup` - Enable and Configure Backups for a Server
* `post_servers_id_actions_enable_rescue` - Enable Rescue Mode for a Server
* `post_servers_id_actions_poweroff` - Power off a Server
* `post_servers_id_actions_poweron` - Power on a Server
* `post_servers_id_actions_reboot` - Soft-reboot a Server
* `post_servers_id_actions_rebuild` - Rebuild a Server from an Image
* `post_servers_id_actions_remove_from_placement_group` - Remove from Placement Group
* `post_servers_id_actions_request_console` - Request Console for a Server
* `post_servers_id_actions_reset` - Reset a Server
* `post_servers_id_actions_reset_password` - Reset root Password of a Server
* `post_servers_id_actions_shutdown` - Shutdown a Server

### server_types

* `get_server_types` - Get all Server Types
* `get_server_types_id_` - Get a Server Type

### servers

* `delete_servers_id_` - Delete a Server
* `get_servers` - Get all Servers
* `get_servers_id_` - Get a Server
* `get_servers_id_metrics` - Get Metrics for a Server
* `post_servers` - Create a Server
* `put_servers_id_` - Update a Server

### volume_actions

* `get_volumes_id_actions` - Get all Actions for a Volume
* `get_volumes_id_actions_action_id_` - Get an Action for a Volume
* `post_volumes_id_actions_attach` - Attach Volume to a Server
* `post_volumes_id_actions_change_protection` - Change Volume Protection
* `post_volumes_id_actions_detach` - Detach Volume
* `post_volumes_id_actions_resize` - Resize Volume

### volumes

* `delete_volumes_id_` - Delete a Volume
* `get_volumes` - Get all Volumes
* `get_volumes_id_` - Get a Volume
* `post_volumes` - Create a Volume
* `put_volumes_id_` - Update a Volume
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
