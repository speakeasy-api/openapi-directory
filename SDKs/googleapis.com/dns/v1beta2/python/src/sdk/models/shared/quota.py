import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnskeyspec as shared_dnskeyspec


@dataclass_json
@dataclasses.dataclass
class Quota:
    r"""Quota
    Limits associated with a Project.
    """
    
    dns_keys_per_managed_zone: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsKeysPerManagedZone') }})
    gke_clusters_per_managed_zone: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClustersPerManagedZone') }})
    gke_clusters_per_policy: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClustersPerPolicy') }})
    gke_clusters_per_response_policy: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClustersPerResponsePolicy') }})
    items_per_routing_policy: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsPerRoutingPolicy') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    managed_zones: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedZones') }})
    managed_zones_per_gke_cluster: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedZonesPerGkeCluster') }})
    managed_zones_per_network: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedZonesPerNetwork') }})
    networks_per_managed_zone: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networksPerManagedZone') }})
    networks_per_policy: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networksPerPolicy') }})
    networks_per_response_policy: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networksPerResponsePolicy') }})
    peering_zones_per_target_network: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeringZonesPerTargetNetwork') }})
    policies: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    resource_records_per_rrset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRecordsPerRrset') }})
    response_policies: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsePolicies') }})
    response_policy_rules_per_response_policy: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsePolicyRulesPerResponsePolicy') }})
    rrset_additions_per_change: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rrsetAdditionsPerChange') }})
    rrset_deletions_per_change: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rrsetDeletionsPerChange') }})
    rrsets_per_managed_zone: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rrsetsPerManagedZone') }})
    target_name_servers_per_managed_zone: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNameServersPerManagedZone') }})
    target_name_servers_per_policy: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNameServersPerPolicy') }})
    total_rrdata_size_per_change: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRrdataSizePerChange') }})
    whitelisted_key_specs: Optional[list[shared_dnskeyspec.DNSKeySpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelistedKeySpecs') }})
    
