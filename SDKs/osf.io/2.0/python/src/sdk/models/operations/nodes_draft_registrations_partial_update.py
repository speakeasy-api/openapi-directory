import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class NodesDraftRegistrationsPartialUpdatePathParams:
    draft_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'draft_id', 'style': 'simple', 'explode': False }})
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput:
    r"""NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput
    The properties of the draft registration entity.
    """
    
    registration_supplement: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_supplement') }})
    registration_metadata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_metadata') }})
    

@dataclass_json
@dataclasses.dataclass
class NodesDraftRegistrationsPartialUpdateDraftRegistrationInput:
    attributes: NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclasses.dataclass
class NodesDraftRegistrationsPartialUpdateRequest:
    path_params: NodesDraftRegistrationsPartialUpdatePathParams = dataclasses.field()
    request: NodesDraftRegistrationsPartialUpdateDraftRegistrationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NodesDraftRegistrationsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
