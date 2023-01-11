import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betadatastreamandroidappstreamdata as shared_googleanalyticsadminv1betadatastreamandroidappstreamdata
from ..shared import googleanalyticsadminv1betadatastreamiosappstreamdata as shared_googleanalyticsadminv1betadatastreamiosappstreamdata
from ..shared import googleanalyticsadminv1betadatastreamwebstreamdata as shared_googleanalyticsadminv1betadatastreamwebstreamdata
from ..shared import googleanalyticsadminv1betadatastreamandroidappstreamdata as shared_googleanalyticsadminv1betadatastreamandroidappstreamdata
from ..shared import googleanalyticsadminv1betadatastreamiosappstreamdata as shared_googleanalyticsadminv1betadatastreamiosappstreamdata
from ..shared import googleanalyticsadminv1betadatastreamwebstreamdata as shared_googleanalyticsadminv1betadatastreamwebstreamdata

class GoogleAnalyticsAdminV1betaDataStreamTypeEnum(str, Enum):
    DATA_STREAM_TYPE_UNSPECIFIED = "DATA_STREAM_TYPE_UNSPECIFIED"
    WEB_DATA_STREAM = "WEB_DATA_STREAM"
    ANDROID_APP_DATA_STREAM = "ANDROID_APP_DATA_STREAM"
    IOS_APP_DATA_STREAM = "IOS_APP_DATA_STREAM"


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaDataStream:
    r"""GoogleAnalyticsAdminV1betaDataStream
    A resource message representing a data stream.
    """
    
    android_app_stream_data: Optional[shared_googleanalyticsadminv1betadatastreamandroidappstreamdata.GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidAppStreamData') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    ios_app_stream_data: Optional[shared_googleanalyticsadminv1betadatastreamiosappstreamdata.GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosAppStreamData') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GoogleAnalyticsAdminV1betaDataStreamTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    web_stream_data: Optional[shared_googleanalyticsadminv1betadatastreamwebstreamdata.GoogleAnalyticsAdminV1betaDataStreamWebStreamData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webStreamData') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaDataStreamInput:
    r"""GoogleAnalyticsAdminV1betaDataStreamInput
    A resource message representing a data stream.
    """
    
    android_app_stream_data: Optional[shared_googleanalyticsadminv1betadatastreamandroidappstreamdata.GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidAppStreamData') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    ios_app_stream_data: Optional[shared_googleanalyticsadminv1betadatastreamiosappstreamdata.GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosAppStreamData') }})
    type: Optional[GoogleAnalyticsAdminV1betaDataStreamTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    web_stream_data: Optional[shared_googleanalyticsadminv1betadatastreamwebstreamdata.GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webStreamData') }})
    
