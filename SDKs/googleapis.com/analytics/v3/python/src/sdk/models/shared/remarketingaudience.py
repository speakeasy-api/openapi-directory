import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import includeconditions as shared_includeconditions
from ..shared import linkedforeignaccount as shared_linkedforeignaccount
from ..shared import linkedforeignaccount as shared_linkedforeignaccount


@dataclass_json
@dataclasses.dataclass
class RemarketingAudienceAudienceDefinition:
    r"""RemarketingAudienceAudienceDefinition
    The simple audience definition that will cause a user to be added to an audience.
    """
    
    include_conditions: Optional[shared_includeconditions.IncludeConditions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeConditions') }})
    

@dataclass_json
@dataclasses.dataclass
class RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions:
    r"""RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions
    Defines the conditions to exclude users from the audience.
    """
    
    exclusion_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionDuration') }})
    segment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segment') }})
    

@dataclass_json
@dataclasses.dataclass
class RemarketingAudienceStateBasedAudienceDefinition:
    r"""RemarketingAudienceStateBasedAudienceDefinition
    A state based audience definition that will cause a user to be added or removed from an audience.
    """
    
    exclude_conditions: Optional[RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeConditions') }})
    include_conditions: Optional[shared_includeconditions.IncludeConditions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeConditions') }})
    

@dataclass_json
@dataclasses.dataclass
class RemarketingAudience:
    r"""RemarketingAudience
    JSON template for an Analytics remarketing audience.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    audience_definition: Optional[RemarketingAudienceAudienceDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceDefinition') }})
    audience_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceType') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    internal_web_property_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalWebPropertyId') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    linked_ad_accounts: Optional[list[shared_linkedforeignaccount.LinkedForeignAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedAdAccounts') }})
    linked_views: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedViews') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state_based_audience_definition: Optional[RemarketingAudienceStateBasedAudienceDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateBasedAudienceDefinition') }})
    updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    web_property_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    

@dataclass_json
@dataclasses.dataclass
class RemarketingAudienceInput:
    r"""RemarketingAudienceInput
    JSON template for an Analytics remarketing audience.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    audience_definition: Optional[RemarketingAudienceAudienceDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceDefinition') }})
    audience_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceType') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    linked_ad_accounts: Optional[list[shared_linkedforeignaccount.LinkedForeignAccountInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedAdAccounts') }})
    linked_views: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedViews') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state_based_audience_definition: Optional[RemarketingAudienceStateBasedAudienceDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateBasedAudienceDefinition') }})
    web_property_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    
