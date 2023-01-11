import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betadatastream as shared_googleanalyticsadminv1betadatastream


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaListDataStreamsResponse:
    r"""GoogleAnalyticsAdminV1betaListDataStreamsResponse
    Response message for ListDataStreams RPC.
    """
    
    data_streams: Optional[list[shared_googleanalyticsadminv1betadatastream.GoogleAnalyticsAdminV1betaDataStream]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataStreams') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
