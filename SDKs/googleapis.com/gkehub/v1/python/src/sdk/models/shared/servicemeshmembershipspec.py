"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ServiceMeshMembershipSpecControlPlaneEnum(str, Enum):
    r"""Enables automatic control plane management."""
    CONTROL_PLANE_MANAGEMENT_UNSPECIFIED = 'CONTROL_PLANE_MANAGEMENT_UNSPECIFIED'
    AUTOMATIC = 'AUTOMATIC'
    MANUAL = 'MANUAL'

class ServiceMeshMembershipSpecManagementEnum(str, Enum):
    r"""Enables automatic Service Mesh management."""
    MANAGEMENT_UNSPECIFIED = 'MANAGEMENT_UNSPECIFIED'
    MANAGEMENT_AUTOMATIC = 'MANAGEMENT_AUTOMATIC'
    MANAGEMENT_MANUAL = 'MANAGEMENT_MANUAL'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ServiceMeshMembershipSpec:
    r"""**Service Mesh**: Spec for a single Membership for the servicemesh feature"""
    
    control_plane: Optional[ServiceMeshMembershipSpecControlPlaneEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('controlPlane'), 'exclude': lambda f: f is None }})
    r"""Enables automatic control plane management."""  
    management: Optional[ServiceMeshMembershipSpecManagementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('management'), 'exclude': lambda f: f is None }})
    r"""Enables automatic Service Mesh management."""  
    