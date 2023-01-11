import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import valuerange as shared_valuerange
from ..shared import updatevaluesresponse as shared_updatevaluesresponse


@dataclasses.dataclass
class SheetsSpreadsheetsValuesUpdatePathParams:
    range: str = dataclasses.field(metadata={'path_param': { 'field_name': 'range', 'style': 'simple', 'explode': False }})
    spreadsheet_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'spreadsheetId', 'style': 'simple', 'explode': False }})
    
class SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum(str, Enum):
    SERIAL_NUMBER = "SERIAL_NUMBER"
    FORMATTED_STRING = "FORMATTED_STRING"

class SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum(str, Enum):
    FORMATTED_VALUE = "FORMATTED_VALUE"
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE"
    FORMULA = "FORMULA"

class SheetsSpreadsheetsValuesUpdateValueInputOptionEnum(str, Enum):
    INPUT_VALUE_OPTION_UNSPECIFIED = "INPUT_VALUE_OPTION_UNSPECIFIED"
    RAW = "RAW"
    USER_ENTERED = "USER_ENTERED"


@dataclasses.dataclass
class SheetsSpreadsheetsValuesUpdateQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_values_in_response: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeValuesInResponse', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    response_date_time_render_option: Optional[SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'responseDateTimeRenderOption', 'style': 'form', 'explode': True }})
    response_value_render_option: Optional[SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'responseValueRenderOption', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    value_input_option: Optional[SheetsSpreadsheetsValuesUpdateValueInputOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'valueInputOption', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesUpdateSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesUpdateSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesUpdateSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesUpdateSecurity:
    option1: Optional[SheetsSpreadsheetsValuesUpdateSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SheetsSpreadsheetsValuesUpdateSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[SheetsSpreadsheetsValuesUpdateSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesUpdateRequest:
    path_params: SheetsSpreadsheetsValuesUpdatePathParams = dataclasses.field()
    query_params: SheetsSpreadsheetsValuesUpdateQueryParams = dataclasses.field()
    security: SheetsSpreadsheetsValuesUpdateSecurity = dataclasses.field()
    request: Optional[shared_valuerange.ValueRange] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_values_response: Optional[shared_updatevaluesresponse.UpdateValuesResponse] = dataclasses.field(default=None)
    
