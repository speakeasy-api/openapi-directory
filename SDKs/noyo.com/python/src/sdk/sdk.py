

import requests
from sdk.models import operations
from . import utils


from .agents import Agents
from .application_documents import ApplicationDocuments
from .applications import Applications
from .bank_accounts import BankAccounts
from .coverage_plans import CoveragePlans
from .dependents import Dependents
from .employees import Employees
from .group_configuration_contacts_ import GroupConfigurationContacts
from .group_configuration_locations_ import GroupConfigurationLocations
from .group_coverages import GroupCoverages
from .groups import Groups
from .member_elections import MemberElections


SERVERS = [
	"https://group-installation.noyo.com",
	"https://group-installation-sandbox.noyo.com",
]


class SDK:
    
    agents: Agents
    application_documents: ApplicationDocuments
    applications: Applications
    bank_accounts: BankAccounts
    coverage_plans: CoveragePlans
    dependents: Dependents
    employees: Employees
    group_configuration_contacts_: GroupConfigurationContacts
    group_configuration_locations_: GroupConfigurationLocations
    group_coverages: GroupCoverages
    groups: Groups
    member_elections: MemberElections

    _client: requests.Session
    _security_client: requests.Session
    
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
        
    
    
    
    def ping(self) -> operations.PingResponse:
        r"""Ping Endpoint
        Returns a simple OK message with a 200 status code
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ping"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    