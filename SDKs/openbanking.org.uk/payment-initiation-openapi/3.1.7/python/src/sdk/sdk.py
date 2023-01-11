

import requests

from . import utils

from .domestic_payments import DomesticPayments
from .domestic_scheduled_payments import DomesticScheduledPayments
from .domestic_standing_orders import DomesticStandingOrders
from .file_payments import FilePayments
from .international_payments import InternationalPayments
from .international_scheduled_payments import InternationalScheduledPayments
from .international_standing_orders import InternationalStandingOrders
from .payment_details import PaymentDetails


SERVERS = [
	"https://openbanking.org.uk",
	"https://openbanking.org.uk/open-banking/v3.1/pisp",
]


class SDK:
    
    domestic_payments: DomesticPayments
    domestic_scheduled_payments: DomesticScheduledPayments
    domestic_standing_orders: DomesticStandingOrders
    file_payments: FilePayments
    international_payments: InternationalPayments
    international_scheduled_payments: InternationalScheduledPayments
    international_standing_orders: InternationalStandingOrders
    payment_details: PaymentDetails

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
        
        self.domestic_payments = DomesticPayments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.domestic_scheduled_payments = DomesticScheduledPayments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.domestic_standing_orders = DomesticStandingOrders(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.file_payments = FilePayments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.international_payments = InternationalPayments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.international_scheduled_payments = InternationalScheduledPayments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.international_standing_orders = InternationalStandingOrders(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payment_details = PaymentDetails(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    