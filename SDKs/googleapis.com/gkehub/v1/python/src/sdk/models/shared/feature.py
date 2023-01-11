import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membershipfeaturespec as shared_membershipfeaturespec
from ..shared import membershipfeaturestate as shared_membershipfeaturestate
from ..shared import featureresourcestate as shared_featureresourcestate
from ..shared import scopefeaturestate as shared_scopefeaturestate
from ..shared import commonfeaturespec as shared_commonfeaturespec
from ..shared import commonfeaturestate as shared_commonfeaturestate
from ..shared import membershipfeaturespec as shared_membershipfeaturespec


@dataclass_json
@dataclasses.dataclass
class Feature:
    r"""Feature
    Feature represents the settings and status of any Hub Feature.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    membership_specs: Optional[dict[str, shared_membershipfeaturespec.MembershipFeatureSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipSpecs') }})
    membership_states: Optional[dict[str, shared_membershipfeaturestate.MembershipFeatureState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipStates') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_state: Optional[shared_featureresourcestate.FeatureResourceState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceState') }})
    scope_specs: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopeSpecs') }})
    scope_states: Optional[dict[str, shared_scopefeaturestate.ScopeFeatureState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopeStates') }})
    spec: Optional[shared_commonfeaturespec.CommonFeatureSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    state: Optional[shared_commonfeaturestate.CommonFeatureState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class FeatureInput:
    r"""FeatureInput
    Feature represents the settings and status of any Hub Feature.
    """
    
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    membership_specs: Optional[dict[str, shared_membershipfeaturespec.MembershipFeatureSpecInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipSpecs') }})
    resource_state: Optional[shared_featureresourcestate.FeatureResourceState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceState') }})
    scope_specs: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopeSpecs') }})
    spec: Optional[shared_commonfeaturespec.CommonFeatureSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    state: Optional[shared_commonfeaturestate.CommonFeatureState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
