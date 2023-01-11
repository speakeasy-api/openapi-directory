import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import collectionresponsewithtotaldomainforwardpaging as shared_collectionresponsewithtotaldomainforwardpaging


@dataclasses.dataclass
class GetCmsV3DomainsGetPageQueryParams:
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    created_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdAt', 'style': 'form', 'explode': True }})
    created_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    sort: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    updated_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedAfter', 'style': 'form', 'explode': True }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedAt', 'style': 'form', 'explode': True }})
    updated_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedBefore', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCmsV3DomainsGetPageSecurity:
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth3: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps: Optional[shared_security.SchemePrivateApps] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps1: Optional[shared_security.SchemePrivateApps] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetCmsV3DomainsGetPageRequest:
    query_params: GetCmsV3DomainsGetPageQueryParams = dataclasses.field()
    security: GetCmsV3DomainsGetPageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCmsV3DomainsGetPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    collection_response_with_total_domain_forward_paging: Optional[shared_collectionresponsewithtotaldomainforwardpaging.CollectionResponseWithTotalDomainForwardPaging] = dataclasses.field(default=None)
    
