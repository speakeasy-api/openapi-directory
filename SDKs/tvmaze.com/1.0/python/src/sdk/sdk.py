

import requests
from sdk.models import shared
from . import utils

from .auth import Auth
from .followed_networks import FollowedNetworks
from .followed_people import FollowedPeople
from .followed_shows import FollowedShows
from .followed_webchannels import FollowedWebchannels
from .marked_episodes import MarkedEpisodes
from .scrobbling import Scrobbling
from .tagged_shows import TaggedShows
from .voted_episodes import VotedEpisodes
from .voted_shows import VotedShows


SERVERS = [
	"https://api.tvmaze.com/v1",
	"http://api.tvmaze.com/v1",
]


class SDK:
    
    auth: Auth
    followed_networks: FollowedNetworks
    followed_people: FollowedPeople
    followed_shows: FollowedShows
    followed_webchannels: FollowedWebchannels
    marked_episodes: MarkedEpisodes
    scrobbling: Scrobbling
    tagged_shows: TaggedShows
    voted_episodes: VotedEpisodes
    voted_shows: VotedShows

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
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        self._init_sdks()
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.auth = Auth(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.followed_networks = FollowedNetworks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.followed_people = FollowedPeople(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.followed_shows = FollowedShows(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.followed_webchannels = FollowedWebchannels(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marked_episodes = MarkedEpisodes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.scrobbling = Scrobbling(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.tagged_shows = TaggedShows(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.voted_episodes = VotedEpisodes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.voted_shows = VotedShows(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    