import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listdatapointchangesresponse as shared_listdatapointchangesresponse


@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListPathParams:
    data_source_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataSourceId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption4:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption5:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption6:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption7:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption8:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption9:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption10:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption11:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption12:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption13:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption14:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption15:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption16:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption17:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption18:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption19:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption20:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption21:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption22:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurity:
    option1: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option10: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption10] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option11: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption11] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option12: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption12] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option13: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption13] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option14: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption14] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option15: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption15] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option16: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption16] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option17: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption17] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option18: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption18] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option19: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption19] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option20: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption20] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option21: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption21] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option22: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption22] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption4] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption5] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption6] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption7] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption8] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option9: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption9] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListRequest:
    path_params: FitnessUsersDataSourcesDataPointChangesListPathParams = dataclasses.field()
    query_params: FitnessUsersDataSourcesDataPointChangesListQueryParams = dataclasses.field()
    security: FitnessUsersDataSourcesDataPointChangesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FitnessUsersDataSourcesDataPointChangesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_data_point_changes_response: Optional[shared_listdatapointchangesresponse.ListDataPointChangesResponse] = dataclasses.field(default=None)
    
