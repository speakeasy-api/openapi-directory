import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetDpsMessageReportOutputQueryParams:
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    from_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'FromDate', 'style': 'form', 'explode': True }})
    max_index: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxIndex', 'style': 'form', 'explode': True }})
    message_statuses: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MessageStatuses', 'style': 'form', 'explode': True }})
    message_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MessageTypes', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartIndex', 'style': 'form', 'explode': True }})
    to_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ToDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDpsMessageReportOutputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDpsMessageReportOutputRequest:
    headers: GetDpsMessageReportOutputHeaders = dataclasses.field()
    query_params: GetDpsMessageReportOutputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDpsMessageReportOutputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_dps_message_report_output_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
