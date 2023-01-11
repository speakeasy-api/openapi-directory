import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class NodesContributorsPartialUpdatePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class NodesContributorsPartialUpdateContributorAttributesPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclasses.dataclass
class NodesContributorsPartialUpdateContributorAttributesInput:
    r"""NodesContributorsPartialUpdateContributorAttributesInput
    The properties of the contributor entity.
    """
    
    bibliographic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bibliographic') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    permission: Optional[NodesContributorsPartialUpdateContributorAttributesPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass_json
@dataclasses.dataclass
class NodesContributorsPartialUpdateContributorRelationshipsInput:
    r"""NodesContributorsPartialUpdateContributorRelationshipsInput
    URLs to other entities or entity collections that have a relationship to the contributor entity.
    """
    
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class NodesContributorsPartialUpdateContributorInput:
    relationships: NodesContributorsPartialUpdateContributorRelationshipsInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    attributes: Optional[NodesContributorsPartialUpdateContributorAttributesInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclasses.dataclass
class NodesContributorsPartialUpdateRequest:
    path_params: NodesContributorsPartialUpdatePathParams = dataclasses.field()
    request: NodesContributorsPartialUpdateContributorInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NodesContributorsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
