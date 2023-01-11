

import requests

from . import utils

from .get_devices import GetDevices
from .get_locations import GetLocations
from .get_os_browsers import GetOsBrowsers
from .get_profiles import GetProfiles
from .get_resolutions import GetResolutions
from .get_screenshots import GetScreenshots
from .get_zipped_screenshots import GetZippedScreenshots
from .start_screenshot_test import StartScreenshotTest
from .stop_screenshot_test import StopScreenshotTest


SERVERS = [
	"https://api.lambdatest.com/screenshots/v1",
]


class SDK:
    
    get_devices: GetDevices
    get_locations: GetLocations
    get_os_browsers: GetOsBrowsers
    get_profiles: GetProfiles
    get_resolutions: GetResolutions
    get_screenshots: GetScreenshots
    get_zipped_screenshots: GetZippedScreenshots
    start_screenshot_test: StartScreenshotTest
    stop_screenshot_test: StopScreenshotTest

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
        
        self.get_devices = GetDevices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.get_locations = GetLocations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.get_os_browsers = GetOsBrowsers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.get_profiles = GetProfiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.get_resolutions = GetResolutions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.get_screenshots = GetScreenshots(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.get_zipped_screenshots = GetZippedScreenshots(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.start_screenshot_test = StartScreenshotTest(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.stop_screenshot_test = StopScreenshotTest(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    