import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class NodesDraftRegistrationsCreatePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class NodesDraftRegistrationsCreateDraftRegistrationAttributesInput:
    r"""NodesDraftRegistrationsCreateDraftRegistrationAttributesInput
    The properties of the draft registration entity.
    """
    
    registration_supplement: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_supplement') }})
    registration_metadata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_metadata') }})
    

@dataclass_json
@dataclasses.dataclass
class NodesDraftRegistrationsCreateDraftRegistrationInput:
    attributes: NodesDraftRegistrationsCreateDraftRegistrationAttributesInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclasses.dataclass
class NodesDraftRegistrationsCreateRequest:
    path_params: NodesDraftRegistrationsCreatePathParams = dataclasses.field()
    request: NodesDraftRegistrationsCreateDraftRegistrationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NodesDraftRegistrationsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
