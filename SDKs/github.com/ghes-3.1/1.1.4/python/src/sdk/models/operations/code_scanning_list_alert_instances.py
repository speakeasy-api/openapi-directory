import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import code_scanning_alert_instance as shared_code_scanning_alert_instance


@dataclasses.dataclass
class CodeScanningListAlertInstancesPathParams:
    alert_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CodeScanningListAlertInstancesQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    ref: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CodeScanningListAlertInstances503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CodeScanningListAlertInstancesRequest:
    path_params: CodeScanningListAlertInstancesPathParams = dataclasses.field()
    query_params: CodeScanningListAlertInstancesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CodeScanningListAlertInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    code_scanning_alert_instances: Optional[list[shared_code_scanning_alert_instance.CodeScanningAlertInstance]] = dataclasses.field(default=None)
    code_scanning_list_alert_instances_503_application_json_object: Optional[CodeScanningListAlertInstances503ApplicationJSON] = dataclasses.field(default=None)
    
