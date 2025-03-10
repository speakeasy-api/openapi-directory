"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from .agr import Agr
from .annotation import Annotation
from .chromosome import Chromosome
from .enrichment_web_service import EnrichmentWebService
from .gene import Gene
from .lookup import Lookup
from .map import Map
from .ontology import Ontology
from .pathway import Pathway
from .qtl import Qtl
from .quantitative_phenotype import QuantitativePhenotype
from .rat_strain import RatStrain
from .sslp import Sslp
from .statistics import Statistics

SERVERS = [
    "//rest.rgd.mcw.edu/rgdws",
]
"""Contains the list of servers available to the SDK"""

class SDK:
    r"""The RGD REST API provides programmatic access to information and annotation stored in the Rat Genome Database"""
    agr: Agr
    r"""Alliance of Genome Resources"""
    annotation: Annotation
    chromosome: Chromosome
    gene: Gene
    lookup: Lookup
    map: Map
    r"""Map Web Service"""
    ontology: Ontology
    r"""Ontology Web Service"""
    pathway: Pathway
    qtl: Qtl
    quantitative_phenotype: QuantitativePhenotype
    r"""Phenotype Web Service"""
    rat_strain: RatStrain
    sslp: Sslp
    r"""SSLP Web Service"""
    statistics: Statistics
    r"""Stats Web Service"""
    enrichment_web_service: EnrichmentWebService
    r"""Enrichment Web Service"""

    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self,
                 server_url: str = None,
                 url_params: dict[str, str] = None,
                 client: requests_http.Session = None
                 ) -> None:
        """Instantiates the SDK configuring it with the provided parameters.
        
        :param server_url: The server URL to use for all operations
        :type server_url: str
        :param url_params: Parameters to optionally template the server URL with
        :type url_params: dict[str, str]
        :param client: The requests.Session HTTP client to use for all operations
        :type client: requests_http.Session        
        """
        self._client = requests_http.Session()
        
        
        if server_url is not None:
            if url_params is not None:
                self._server_url = utils.template_url(server_url, url_params)
            else:
                self._server_url = server_url

        if client is not None:
            self._client = client
        
        self._security_client = self._client
        

        self._init_sdks()
    
    def _init_sdks(self):
        self.agr = Agr(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.annotation = Annotation(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.chromosome = Chromosome(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.gene = Gene(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.lookup = Lookup(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.map = Map(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ontology = Ontology(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pathway = Pathway(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.qtl = Qtl(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.quantitative_phenotype = QuantitativePhenotype(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rat_strain = RatStrain(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sslp = Sslp(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.statistics = Statistics(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.enrichment_web_service = EnrichmentWebService(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
    