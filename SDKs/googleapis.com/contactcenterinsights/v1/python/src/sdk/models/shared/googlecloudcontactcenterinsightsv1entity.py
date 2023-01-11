import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1sentimentdata as shared_googlecloudcontactcenterinsightsv1sentimentdata

class GoogleCloudContactcenterinsightsV1EntityTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PERSON = "PERSON"
    LOCATION = "LOCATION"
    ORGANIZATION = "ORGANIZATION"
    EVENT = "EVENT"
    WORK_OF_ART = "WORK_OF_ART"
    CONSUMER_GOOD = "CONSUMER_GOOD"
    OTHER = "OTHER"
    PHONE_NUMBER = "PHONE_NUMBER"
    ADDRESS = "ADDRESS"
    DATE = "DATE"
    NUMBER = "NUMBER"
    PRICE = "PRICE"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1Entity:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    salience: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salience') }})
    sentiment: Optional[shared_googlecloudcontactcenterinsightsv1sentimentdata.GoogleCloudContactcenterinsightsV1SentimentData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    type: Optional[GoogleCloudContactcenterinsightsV1EntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
