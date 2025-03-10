"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import managedzonecloudloggingconfig as shared_managedzonecloudloggingconfig
from ..shared import managedzonednssecconfig as shared_managedzonednssecconfig
from ..shared import managedzoneforwardingconfig as shared_managedzoneforwardingconfig
from ..shared import managedzonepeeringconfig as shared_managedzonepeeringconfig
from ..shared import managedzoneprivatevisibilityconfig as shared_managedzoneprivatevisibilityconfig
from ..shared import managedzonereverselookupconfig as shared_managedzonereverselookupconfig
from ..shared import managedzoneservicedirectoryconfig as shared_managedzoneservicedirectoryconfig
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ManagedZoneVisibilityEnum(str, Enum):
    r"""The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources."""
    PUBLIC = 'public'
    PRIVATE = 'private'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ManagedZone:
    r"""A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service."""
    
    cloud_logging_config: Optional[shared_managedzonecloudloggingconfig.ManagedZoneCloudLoggingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cloudLoggingConfig'), 'exclude': lambda f: f is None }})
    r"""Cloud Logging configurations for publicly visible zones."""  
    creation_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('creationTime'), 'exclude': lambda f: f is None }})
    r"""The time that this resource was created on the server. This is in RFC3339 text format. Output only."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function."""  
    dns_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dnsName'), 'exclude': lambda f: f is None }})
    r"""The DNS name of this managed zone, for instance \\"example.com.\\"."""  
    dnssec_config: Optional[shared_managedzonednssecconfig.ManagedZoneDNSSecConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dnssecConfig'), 'exclude': lambda f: f is None }})  
    forwarding_config: Optional[shared_managedzoneforwardingconfig.ManagedZoneForwardingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('forwardingConfig'), 'exclude': lambda f: f is None }})  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""Unique identifier for the resource; defined by the server (output only)"""  
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})  
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""User labels."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes."""  
    name_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nameServers'), 'exclude': lambda f: f is None }})
    r"""Delegate your managed_zone to these virtual name servers; defined by the server (output only)"""  
    name_server_set: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nameServerSet'), 'exclude': lambda f: f is None }})
    r"""Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team."""  
    peering_config: Optional[shared_managedzonepeeringconfig.ManagedZonePeeringConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('peeringConfig'), 'exclude': lambda f: f is None }})  
    private_visibility_config: Optional[shared_managedzoneprivatevisibilityconfig.ManagedZonePrivateVisibilityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('privateVisibilityConfig'), 'exclude': lambda f: f is None }})  
    reverse_lookup_config: Optional[shared_managedzonereverselookupconfig.ManagedZoneReverseLookupConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reverseLookupConfig'), 'exclude': lambda f: f is None }})  
    service_directory_config: Optional[shared_managedzoneservicedirectoryconfig.ManagedZoneServiceDirectoryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('serviceDirectoryConfig'), 'exclude': lambda f: f is None }})
    r"""Contains information about Service Directory-backed zones."""  
    visibility: Optional[ManagedZoneVisibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('visibility'), 'exclude': lambda f: f is None }})
    r"""The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources."""  
    