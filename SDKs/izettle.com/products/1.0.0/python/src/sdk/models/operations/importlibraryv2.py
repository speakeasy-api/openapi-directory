import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import bulkimportrequest as shared_bulkimportrequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import importresponse as shared_importresponse


@dataclasses.dataclass
class ImportLibraryV2PathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportLibraryV2Security:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ImportLibraryV2Request:
    path_params: ImportLibraryV2PathParams = dataclasses.field()
    request: shared_bulkimportrequest.BulkImportRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: ImportLibraryV2Security = dataclasses.field()
    

@dataclasses.dataclass
class ImportLibraryV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    import_response: Optional[shared_importresponse.ImportResponse] = dataclasses.field(default=None)
    
