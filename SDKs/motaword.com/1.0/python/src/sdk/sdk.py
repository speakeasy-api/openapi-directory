
__doc__ = """ SDK Documentation: https://www.motaword.com/developer"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils


from .activity import Activity
from .async_ import Async
from .auth import Auth
from .blog import Blog
from .commission import Commission
from .continuousproject import ContinuousProject
from .corporate import Corporate
from .document import Document
from .glossary import Glossary
from .invitation import Invitation
from .pam import Pam
from .payment import Payment
from .project import Project
from .project_document import ProjectDocument
from .project_webhooks import ProjectWebhooks
from .report import Report
from .search import Search
from .static import Static
from .stats import Stats
from .strings import Strings
from .style_guide import StyleGuide
from .translations import Translations
from .user import User
from .vendor import Vendor


SERVERS = [
	"https://api.motaword.com",
	"https://sandbox.motaword.com",
	"http://localhost",
]


class SDK:
    r"""SDK Documentation: https://www.motaword.com/developer"""
    activity: Activity
    async_: Async
    auth: Auth
    blog: Blog
    commission: Commission
    continuous_project: ContinuousProject
    corporate: Corporate
    document: Document
    glossary: Glossary
    invitation: Invitation
    pam: Pam
    payment: Payment
    project: Project
    project_document: ProjectDocument
    project_webhooks: ProjectWebhooks
    report: Report
    search: Search
    static: Static
    stats: Stats
    strings: Strings
    style_guide: StyleGuide
    translations: Translations
    user: User
    vendor: Vendor

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def delete_cache(self, request: operations.DeleteCacheRequest) -> operations.DeleteCacheResponse:
        r"""Clear cache by key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cache/{key}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCacheResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OperationStatus])
                res.operation_status = out

        return res

    