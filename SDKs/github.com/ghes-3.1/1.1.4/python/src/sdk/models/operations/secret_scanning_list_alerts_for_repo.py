import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repo_enum7 as shared_repo_enum7
from ..shared import secret_scanning_alert as shared_secret_scanning_alert


@dataclasses.dataclass
class SecretScanningListAlertsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SecretScanningListAlertsForRepoQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[shared_repo_enum7.RepoEnum7] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SecretScanningListAlertsForRepo503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SecretScanningListAlertsForRepoRequest:
    path_params: SecretScanningListAlertsForRepoPathParams = dataclasses.field()
    query_params: SecretScanningListAlertsForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SecretScanningListAlertsForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secret_scanning_alerts: Optional[list[shared_secret_scanning_alert.SecretScanningAlert]] = dataclasses.field(default=None)
    secret_scanning_list_alerts_for_repo_503_application_json_object: Optional[SecretScanningListAlertsForRepo503ApplicationJSON] = dataclasses.field(default=None)
    
