import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectorversion as shared_connectorversion


@dataclass_json
@dataclasses.dataclass
class ListConnectorVersionsResponse:
    r"""ListConnectorVersionsResponse
    Response message for Connectors.ListConnectorVersions.
    """
    
    connector_versions: Optional[list[shared_connectorversion.ConnectorVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorVersions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
