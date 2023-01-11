import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedzonecloudloggingconfig as shared_managedzonecloudloggingconfig
from ..shared import managedzonednssecconfig as shared_managedzonednssecconfig
from ..shared import managedzoneforwardingconfig as shared_managedzoneforwardingconfig
from ..shared import managedzonepeeringconfig as shared_managedzonepeeringconfig
from ..shared import managedzoneprivatevisibilityconfig as shared_managedzoneprivatevisibilityconfig
from ..shared import managedzonereverselookupconfig as shared_managedzonereverselookupconfig
from ..shared import managedzoneservicedirectoryconfig as shared_managedzoneservicedirectoryconfig

class ManagedZoneVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class ManagedZone:
    r"""ManagedZone
    A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
    """
    
    cloud_logging_config: Optional[shared_managedzonecloudloggingconfig.ManagedZoneCloudLoggingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudLoggingConfig') }})
    creation_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dns_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsName') }})
    dnssec_config: Optional[shared_managedzonednssecconfig.ManagedZoneDNSSecConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnssecConfig') }})
    forwarding_config: Optional[shared_managedzoneforwardingconfig.ManagedZoneForwardingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingConfig') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_server_set: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameServerSet') }})
    name_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameServers') }})
    peering_config: Optional[shared_managedzonepeeringconfig.ManagedZonePeeringConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeringConfig') }})
    private_visibility_config: Optional[shared_managedzoneprivatevisibilityconfig.ManagedZonePrivateVisibilityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateVisibilityConfig') }})
    reverse_lookup_config: Optional[shared_managedzonereverselookupconfig.ManagedZoneReverseLookupConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverseLookupConfig') }})
    service_directory_config: Optional[shared_managedzoneservicedirectoryconfig.ManagedZoneServiceDirectoryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDirectoryConfig') }})
    visibility: Optional[ManagedZoneVisibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
