import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pre_receive_environment_download_status as shared_pre_receive_environment_download_status


@dataclasses.dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams:
    pre_receive_environment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON:
    errors: Optional[list[EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest:
    path_params: EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_start_pre_receive_environment_download_422_application_json_object: Optional[EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON] = dataclasses.field(default=None)
    pre_receive_environment_download_status: Optional[shared_pre_receive_environment_download_status.PreReceiveEnvironmentDownloadStatus] = dataclasses.field(default=None)
    
