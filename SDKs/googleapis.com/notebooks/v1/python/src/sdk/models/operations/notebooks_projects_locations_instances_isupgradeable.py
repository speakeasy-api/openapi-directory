import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import isinstanceupgradeableresponse as shared_isinstanceupgradeableresponse


@dataclasses.dataclass
class NotebooksProjectsLocationsInstancesIsUpgradeablePathParams:
    notebook_instance: str = dataclasses.field(metadata={'path_param': { 'field_name': 'notebookInstance', 'style': 'simple', 'explode': False }})
    
class NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum(str, Enum):
    UPGRADE_TYPE_UNSPECIFIED = "UPGRADE_TYPE_UNSPECIFIED"
    UPGRADE_FRAMEWORK = "UPGRADE_FRAMEWORK"
    UPGRADE_OS = "UPGRADE_OS"
    UPGRADE_CUDA = "UPGRADE_CUDA"
    UPGRADE_ALL = "UPGRADE_ALL"


@dataclasses.dataclass
class NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    type: Optional[NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class NotebooksProjectsLocationsInstancesIsUpgradeableSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class NotebooksProjectsLocationsInstancesIsUpgradeableRequest:
    path_params: NotebooksProjectsLocationsInstancesIsUpgradeablePathParams = dataclasses.field()
    query_params: NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams = dataclasses.field()
    security: NotebooksProjectsLocationsInstancesIsUpgradeableSecurity = dataclasses.field()
    

@dataclasses.dataclass
class NotebooksProjectsLocationsInstancesIsUpgradeableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    is_instance_upgradeable_response: Optional[shared_isinstanceupgradeableresponse.IsInstanceUpgradeableResponse] = dataclasses.field(default=None)
    
