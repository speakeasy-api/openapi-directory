import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ExportAssetsNmapXMLQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportAssetsNmapXMLSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExportAssetsNmapXMLRequest:
    query_params: ExportAssetsNmapXMLQueryParams = dataclasses.field()
    security: ExportAssetsNmapXMLSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportAssetsNmapXMLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_assets_nmap_xml_200_text_xml_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
