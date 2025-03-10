"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import dimensionvalue as shared_dimensionvalue
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class TargetableRemarketingListListSourceEnum(str, Enum):
    r"""Product from which this targetable remarketing list was originated."""
    REMARKETING_LIST_SOURCE_OTHER = 'REMARKETING_LIST_SOURCE_OTHER'
    REMARKETING_LIST_SOURCE_ADX = 'REMARKETING_LIST_SOURCE_ADX'
    REMARKETING_LIST_SOURCE_DFP = 'REMARKETING_LIST_SOURCE_DFP'
    REMARKETING_LIST_SOURCE_XFP = 'REMARKETING_LIST_SOURCE_XFP'
    REMARKETING_LIST_SOURCE_DFA = 'REMARKETING_LIST_SOURCE_DFA'
    REMARKETING_LIST_SOURCE_GA = 'REMARKETING_LIST_SOURCE_GA'
    REMARKETING_LIST_SOURCE_YOUTUBE = 'REMARKETING_LIST_SOURCE_YOUTUBE'
    REMARKETING_LIST_SOURCE_DBM = 'REMARKETING_LIST_SOURCE_DBM'
    REMARKETING_LIST_SOURCE_GPLUS = 'REMARKETING_LIST_SOURCE_GPLUS'
    REMARKETING_LIST_SOURCE_DMP = 'REMARKETING_LIST_SOURCE_DMP'
    REMARKETING_LIST_SOURCE_PLAY_STORE = 'REMARKETING_LIST_SOURCE_PLAY_STORE'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TargetableRemarketingList:
    r"""Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to faciliate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource."""
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('accountId'), 'exclude': lambda f: f is None }})
    r"""Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests."""  
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('active'), 'exclude': lambda f: f is None }})
    r"""Whether this targetable remarketing list is active."""  
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('advertiserId'), 'exclude': lambda f: f is None }})
    r"""Dimension value for the advertiser ID that owns this targetable remarketing list."""  
    advertiser_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('advertiserIdDimensionValue'), 'exclude': lambda f: f is None }})
    r"""Represents a DimensionValue resource."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""Targetable remarketing list description."""  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""Targetable remarketing list ID."""  
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""Identifies what kind of resource this is. Value: the fixed string \\"dfareporting#targetableRemarketingList\\"."""  
    life_span: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('lifeSpan'), 'exclude': lambda f: f is None }})
    r"""Number of days that a user should remain in the targetable remarketing list without an impression."""  
    list_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('listSize'), 'exclude': lambda f: f is None }})
    r"""Number of users currently in the list. This is a read-only field."""  
    list_source: Optional[TargetableRemarketingListListSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('listSource'), 'exclude': lambda f: f is None }})
    r"""Product from which this targetable remarketing list was originated."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Name of the targetable remarketing list. Is no greater than 128 characters long."""  
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subaccountId'), 'exclude': lambda f: f is None }})
    r"""Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests."""  
    