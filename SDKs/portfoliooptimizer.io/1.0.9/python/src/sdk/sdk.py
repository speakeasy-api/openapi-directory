
__doc__ = """ SDK Documentation: https://docs.portfoliooptimizer.io/ - External documentation"""
import requests
from sdk.models import shared
from . import utils

from .assets_correlation_matrix import AssetsCorrelationMatrix
from .assets_covariance_matrix import AssetsCovarianceMatrix
from .assets_returns import AssetsReturns
from .assets_variance import AssetsVariance
from .assets_volatility import AssetsVolatility
from .factors import Factors
from .portfolio_analysis import PortfolioAnalysis
from .portfolio_construction import PortfolioConstruction
from .portfolio_optimization import PortfolioOptimization
from .portfolio_simulation import PortfolioSimulation


SERVERS = [
	"https://api.portfoliooptimizer.io/v1",
	"https://eu-west-1.api.portfoliooptimizer.io/v1",
]


class SDK:
    r"""SDK Documentation: https://docs.portfoliooptimizer.io/ - External documentation"""
    assets_correlation_matrix: AssetsCorrelationMatrix
    assets_covariance_matrix: AssetsCovarianceMatrix
    assets_returns: AssetsReturns
    assets_variance: AssetsVariance
    assets_volatility: AssetsVolatility
    factors: Factors
    portfolio_analysis: PortfolioAnalysis
    portfolio_construction: PortfolioConstruction
    portfolio_optimization: PortfolioOptimization
    portfolio_simulation: PortfolioSimulation

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
        
        self.assets_correlation_matrix = AssetsCorrelationMatrix(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.assets_covariance_matrix = AssetsCovarianceMatrix(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.assets_returns = AssetsReturns(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.assets_variance = AssetsVariance(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.assets_volatility = AssetsVolatility(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.factors = Factors(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.portfolio_analysis = PortfolioAnalysis(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.portfolio_construction = PortfolioConstruction(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.portfolio_optimization = PortfolioOptimization(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.portfolio_simulation = PortfolioSimulation(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    