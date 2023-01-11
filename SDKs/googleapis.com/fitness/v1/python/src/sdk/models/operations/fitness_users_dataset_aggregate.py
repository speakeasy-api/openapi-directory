import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import aggregaterequest as shared_aggregaterequest
from ..shared import aggregateresponse as shared_aggregateresponse


@dataclasses.dataclass
class FitnessUsersDatasetAggregatePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption4:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption5:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption6:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption7:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption8:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption9:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption10:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption11:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption12:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption13:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption14:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption15:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption16:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption17:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption18:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption19:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption20:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption21:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurityOption22:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateSecurity:
    option1: Optional[FitnessUsersDatasetAggregateSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option10: Optional[FitnessUsersDatasetAggregateSecurityOption10] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option11: Optional[FitnessUsersDatasetAggregateSecurityOption11] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option12: Optional[FitnessUsersDatasetAggregateSecurityOption12] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option13: Optional[FitnessUsersDatasetAggregateSecurityOption13] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option14: Optional[FitnessUsersDatasetAggregateSecurityOption14] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option15: Optional[FitnessUsersDatasetAggregateSecurityOption15] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option16: Optional[FitnessUsersDatasetAggregateSecurityOption16] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option17: Optional[FitnessUsersDatasetAggregateSecurityOption17] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option18: Optional[FitnessUsersDatasetAggregateSecurityOption18] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option19: Optional[FitnessUsersDatasetAggregateSecurityOption19] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FitnessUsersDatasetAggregateSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option20: Optional[FitnessUsersDatasetAggregateSecurityOption20] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option21: Optional[FitnessUsersDatasetAggregateSecurityOption21] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option22: Optional[FitnessUsersDatasetAggregateSecurityOption22] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FitnessUsersDatasetAggregateSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FitnessUsersDatasetAggregateSecurityOption4] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FitnessUsersDatasetAggregateSecurityOption5] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FitnessUsersDatasetAggregateSecurityOption6] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[FitnessUsersDatasetAggregateSecurityOption7] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[FitnessUsersDatasetAggregateSecurityOption8] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option9: Optional[FitnessUsersDatasetAggregateSecurityOption9] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateRequest:
    path_params: FitnessUsersDatasetAggregatePathParams = dataclasses.field()
    query_params: FitnessUsersDatasetAggregateQueryParams = dataclasses.field()
    security: FitnessUsersDatasetAggregateSecurity = dataclasses.field()
    request: Optional[shared_aggregaterequest.AggregateRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FitnessUsersDatasetAggregateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aggregate_response: Optional[shared_aggregateresponse.AggregateResponse] = dataclasses.field(default=None)
    
