import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class NodesContributorsCreatePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    
class NodesContributorsCreateContributorAttributesPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclasses.dataclass
class NodesContributorsCreateContributorAttributesInput:
    r"""NodesContributorsCreateContributorAttributesInput
    The properties of the contributor entity.
    """
    
    bibliographic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bibliographic') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    permission: Optional[NodesContributorsCreateContributorAttributesPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass_json
@dataclasses.dataclass
class NodesContributorsCreateContributorRelationshipsInput:
    r"""NodesContributorsCreateContributorRelationshipsInput
    URLs to other entities or entity collections that have a relationship to the contributor entity.
    """
    
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class NodesContributorsCreateContributorInput:
    relationships: NodesContributorsCreateContributorRelationshipsInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    attributes: Optional[NodesContributorsCreateContributorAttributesInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclasses.dataclass
class NodesContributorsCreateRequest:
    path_params: NodesContributorsCreatePathParams = dataclasses.field()
    request: NodesContributorsCreateContributorInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NodesContributorsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
