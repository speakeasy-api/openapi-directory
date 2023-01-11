

import requests

from . import utils

from .districts_in_region import DistrictsInRegion
from .streets_in_a_ward import StreetsInAWard
from .tanzania_regions import TanzaniaRegions
from .wards_in_a_district import WardsInADistrict
from .neighborhood_in_a_street import NeighborhoodInAStreet


SERVERS = [
	"https://mtaa-api.herokuapp.com/api",
]


class SDK:
    
    districts_in_region: DistrictsInRegion
    streets_in_a_ward: StreetsInAWard
    tanzania_regions: TanzaniaRegions
    wards_in_a_district: WardsInADistrict
    neighborhood_in_a_street: NeighborhoodInAStreet

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
        
        self.districts_in_region = DistrictsInRegion(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.streets_in_a_ward = StreetsInAWard(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.tanzania_regions = TanzaniaRegions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.wards_in_a_district = WardsInADistrict(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.neighborhood_in_a_street = NeighborhoodInAStreet(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    