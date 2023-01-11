import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listdatasourcesresponse as shared_listdatasourcesresponse


@dataclasses.dataclass
class FitnessUsersDataSourcesListPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    data_type_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dataTypeName', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption4:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption5:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption6:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption7:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption8:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption9:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption10:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption11:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption12:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption13:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption14:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption15:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption16:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption17:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption18:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption19:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption20:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption21:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurityOption22:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListSecurity:
    option1: Optional[FitnessUsersDataSourcesListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option10: Optional[FitnessUsersDataSourcesListSecurityOption10] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option11: Optional[FitnessUsersDataSourcesListSecurityOption11] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option12: Optional[FitnessUsersDataSourcesListSecurityOption12] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option13: Optional[FitnessUsersDataSourcesListSecurityOption13] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option14: Optional[FitnessUsersDataSourcesListSecurityOption14] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option15: Optional[FitnessUsersDataSourcesListSecurityOption15] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option16: Optional[FitnessUsersDataSourcesListSecurityOption16] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option17: Optional[FitnessUsersDataSourcesListSecurityOption17] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option18: Optional[FitnessUsersDataSourcesListSecurityOption18] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option19: Optional[FitnessUsersDataSourcesListSecurityOption19] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FitnessUsersDataSourcesListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option20: Optional[FitnessUsersDataSourcesListSecurityOption20] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option21: Optional[FitnessUsersDataSourcesListSecurityOption21] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option22: Optional[FitnessUsersDataSourcesListSecurityOption22] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FitnessUsersDataSourcesListSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FitnessUsersDataSourcesListSecurityOption4] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FitnessUsersDataSourcesListSecurityOption5] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FitnessUsersDataSourcesListSecurityOption6] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[FitnessUsersDataSourcesListSecurityOption7] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[FitnessUsersDataSourcesListSecurityOption8] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option9: Optional[FitnessUsersDataSourcesListSecurityOption9] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListRequest:
    path_params: FitnessUsersDataSourcesListPathParams = dataclasses.field()
    query_params: FitnessUsersDataSourcesListQueryParams = dataclasses.field()
    security: FitnessUsersDataSourcesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FitnessUsersDataSourcesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_data_sources_response: Optional[shared_listdatasourcesresponse.ListDataSourcesResponse] = dataclasses.field(default=None)
    
