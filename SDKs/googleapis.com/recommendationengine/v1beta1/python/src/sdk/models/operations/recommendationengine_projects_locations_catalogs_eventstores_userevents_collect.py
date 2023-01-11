import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import googleapihttpbody as shared_googleapihttpbody


@dataclasses.dataclass
class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectPathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    ets: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ets', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uri', 'style': 'form', 'explode': True }})
    user_event: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userEvent', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest:
    path_params: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectPathParams = dataclasses.field()
    query_params: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectQueryParams = dataclasses.field()
    security: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_api_http_body: Optional[shared_googleapihttpbody.GoogleAPIHTTPBody] = dataclasses.field(default=None)
    
