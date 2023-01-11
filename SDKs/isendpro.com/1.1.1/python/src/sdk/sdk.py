

import requests

from . import utils

from .add_shortlink import AddShortlink
from .add_subaccount import AddSubaccount
from .campagne import Campagne
from .comptage import Comptage
from .credit import Credit
from .dellistenoire import DelListeNoire
from .edit_subaccount import EditSubaccount
from .getlistenoire import GetListeNoire
from .hlr import Hlr
from .repertoire import Repertoire
from .setlistenoire import SetListeNoire
from .sms import Sms


SERVERS = [
	"https://apirest.isendpro.com/cgi-bin",
	"http://apirest.isendpro.com/cgi-bin",
]


class SDK:
    
    add_shortlink: AddShortlink
    add_subaccount: AddSubaccount
    campagne: Campagne
    comptage: Comptage
    credit: Credit
    del_liste_noire: DelListeNoire
    edit_subaccount: EditSubaccount
    get_liste_noire: GetListeNoire
    hlr: Hlr
    repertoire: Repertoire
    set_liste_noire: SetListeNoire
    sms: Sms

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
        
        self.add_shortlink = AddShortlink(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.add_subaccount = AddSubaccount(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.campagne = Campagne(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.comptage = Comptage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.credit = Credit(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.del_liste_noire = DelListeNoire(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.edit_subaccount = EditSubaccount(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.get_liste_noire = GetListeNoire(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.hlr = Hlr(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.repertoire = Repertoire(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.set_liste_noire = SetListeNoire(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sms = Sms(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    