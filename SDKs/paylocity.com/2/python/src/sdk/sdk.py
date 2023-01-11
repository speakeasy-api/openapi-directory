

import requests

from . import utils

from .additional_rates import AdditionalRates
from .client_credentials import ClientCredentials
from .company_codes import CompanyCodes
from .company_specific_schema import CompanySpecificSchema
from .custom_fields import CustomFields
from .direct_deposit import DirectDeposit
from .earnings import Earnings
from .emergency_contacts import EmergencyContacts
from .employee import Employee
from .employee_benefit_setup import EmployeeBenefitSetup
from .employee_staging import EmployeeStaging
from .local_taxes import LocalTaxes
from .non_primary_state_tax import NonPrimaryStateTax
from .paystatements import PayStatements
from .primary_state_tax import PrimaryStateTax


SERVERS = [
	"https://api.paylocity.com/api",
]


class SDK:
    
    additional_rates: AdditionalRates
    client_credentials: ClientCredentials
    company_codes: CompanyCodes
    company_specific_schema: CompanySpecificSchema
    custom_fields: CustomFields
    direct_deposit: DirectDeposit
    earnings: Earnings
    emergency_contacts: EmergencyContacts
    employee: Employee
    employee_benefit_setup: EmployeeBenefitSetup
    employee_staging: EmployeeStaging
    local_taxes: LocalTaxes
    non_primary_state_tax: NonPrimaryStateTax
    pay_statements: PayStatements
    primary_state_tax: PrimaryStateTax

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.additional_rates = AdditionalRates(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.client_credentials = ClientCredentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.company_codes = CompanyCodes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.company_specific_schema = CompanySpecificSchema(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.custom_fields = CustomFields(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.direct_deposit = DirectDeposit(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.earnings = Earnings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.emergency_contacts = EmergencyContacts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.employee = Employee(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.employee_benefit_setup = EmployeeBenefitSetup(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.employee_staging = EmployeeStaging(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.local_taxes = LocalTaxes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.non_primary_state_tax = NonPrimaryStateTax(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pay_statements = PayStatements(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.primary_state_tax = PrimaryStateTax(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    