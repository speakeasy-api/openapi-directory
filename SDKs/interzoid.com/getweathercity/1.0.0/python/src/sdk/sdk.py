
__doc__ = """ SDK Documentation: https://www.interzoid.com/services/getweathercity - API home page and documentation"""
import requests

from . import utils

from .weather_by_city_and_state import WeatherByCityAndState


SERVERS = [
	"https://api.interzoid.com",
]


class SDK:
    r"""SDK Documentation: https://www.interzoid.com/services/getweathercity - API home page and documentation"""
    weather_by_city_and_state: WeatherByCityAndState

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
        
        self.weather_by_city_and_state = WeatherByCityAndState(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    