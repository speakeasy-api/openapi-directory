import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetP45ReportOutputQueryParams:
    employee_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployeeKey', 'style': 'form', 'explode': True }})
    employer_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    transform_definition_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TransformDefinitionKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetP45ReportOutputHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetP45ReportOutputRequest:
    headers: GetP45ReportOutputHeaders = dataclasses.field()
    query_params: GetP45ReportOutputQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetP45ReportOutputResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_p45_report_output_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
