import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1sentimentdata as shared_googlecloudcontactcenterinsightsv1sentimentdata

class GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum(str, Enum):
    MENTION_TYPE_UNSPECIFIED = "MENTION_TYPE_UNSPECIFIED"
    PROPER = "PROPER"
    COMMON = "COMMON"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1EntityMentionData:
    r"""GoogleCloudContactcenterinsightsV1EntityMentionData
    The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.
    """
    
    entity_unique_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityUniqueId') }})
    sentiment: Optional[shared_googlecloudcontactcenterinsightsv1sentimentdata.GoogleCloudContactcenterinsightsV1SentimentData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    type: Optional[GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
