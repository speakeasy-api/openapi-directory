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
from ..shared import appendvaluesresponse as shared_appendvaluesresponse


@dataclasses.dataclass
class SheetsSpreadsheetsValuesAppendPathParams:
    range: str = dataclasses.field(metadata={'path_param': { 'field_name': 'range', 'style': 'simple', 'explode': False }})
    spreadsheet_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'spreadsheetId', 'style': 'simple', 'explode': False }})
    
class SheetsSpreadsheetsValuesAppendInsertDataOptionEnum(str, Enum):
    OVERWRITE = "OVERWRITE"
    INSERT_ROWS = "INSERT_ROWS"

class SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum(str, Enum):
    SERIAL_NUMBER = "SERIAL_NUMBER"
    FORMATTED_STRING = "FORMATTED_STRING"

class SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum(str, Enum):
    FORMATTED_VALUE = "FORMATTED_VALUE"
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE"
    FORMULA = "FORMULA"

class SheetsSpreadsheetsValuesAppendValueInputOptionEnum(str, Enum):
    INPUT_VALUE_OPTION_UNSPECIFIED = "INPUT_VALUE_OPTION_UNSPECIFIED"
    RAW = "RAW"
    USER_ENTERED = "USER_ENTERED"


@dataclasses.dataclass
class SheetsSpreadsheetsValuesAppendQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_values_in_response: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeValuesInResponse', 'style': 'form', 'explode': True }})
    insert_data_option: Optional[SheetsSpreadsheetsValuesAppendInsertDataOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'insertDataOption', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    response_date_time_render_option: Optional[SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'responseDateTimeRenderOption', 'style': 'form', 'explode': True }})
    response_value_render_option: Optional[SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'responseValueRenderOption', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    value_input_option: Optional[SheetsSpreadsheetsValuesAppendValueInputOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'valueInputOption', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesAppendSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesAppendSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesAppendSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesAppendSecurity:
    option1: Optional[SheetsSpreadsheetsValuesAppendSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SheetsSpreadsheetsValuesAppendSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[SheetsSpreadsheetsValuesAppendSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesAppendRequest:
    path_params: SheetsSpreadsheetsValuesAppendPathParams = dataclasses.field()
    query_params: SheetsSpreadsheetsValuesAppendQueryParams = dataclasses.field()
    security: SheetsSpreadsheetsValuesAppendSecurity = dataclasses.field()
    request: Optional[shared_valuerange.ValueRange] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SheetsSpreadsheetsValuesAppendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    append_values_response: Optional[shared_appendvaluesresponse.AppendValuesResponse] = dataclasses.field(default=None)
    
