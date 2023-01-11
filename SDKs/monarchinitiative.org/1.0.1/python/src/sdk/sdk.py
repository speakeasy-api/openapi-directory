

import requests

from . import utils

from .association import Association
from .bioentity import Bioentity
from .bioentityset import Bioentityset
from .bioentityset_homologs import BioentitysetHomologs
from .bioentityset_slimmer import BioentitysetSlimmer
from .cam import Cam
from .evidence_graph import EvidenceGraph
from .genome_features import GenomeFeatures
from .graph import Graph
from .identifier_mapper import IdentifierMapper
from .identifier_prefixes import IdentifierPrefixes
from .individual import Individual
from .mart import Mart
from .metadata import Metadata
from .nlp_annotate import NlpAnnotate
from .ontol import Ontol
from .ontol_labeler import OntolLabeler
from .ontology import Ontology
from .owl_ontology import OwlOntology
from .pair_sim import PairSim
from .relation_usage import RelationUsage
from .search import Search
from .sim import Sim
from .variation_set import VariationSet


SERVERS = [
	"https://monarchinitiative.org/api",
]


class SDK:
    
    association: Association
    bioentity: Bioentity
    bioentityset: Bioentityset
    bioentityset_homologs: BioentitysetHomologs
    bioentityset_slimmer: BioentitysetSlimmer
    cam: Cam
    evidence_graph: EvidenceGraph
    genome_features: GenomeFeatures
    graph: Graph
    identifier_mapper: IdentifierMapper
    identifier_prefixes: IdentifierPrefixes
    individual: Individual
    mart: Mart
    metadata: Metadata
    nlp_annotate: NlpAnnotate
    ontol: Ontol
    ontol_labeler: OntolLabeler
    ontology: Ontology
    owl_ontology: OwlOntology
    pair_sim: PairSim
    relation_usage: RelationUsage
    search: Search
    sim: Sim
    variation_set: VariationSet

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
        
        self.association = Association(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bioentity = Bioentity(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bioentityset = Bioentityset(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bioentityset_homologs = BioentitysetHomologs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bioentityset_slimmer = BioentitysetSlimmer(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.cam = Cam(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.evidence_graph = EvidenceGraph(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.genome_features = GenomeFeatures(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.graph = Graph(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.identifier_mapper = IdentifierMapper(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.identifier_prefixes = IdentifierPrefixes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.individual = Individual(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.mart = Mart(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.metadata = Metadata(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.nlp_annotate = NlpAnnotate(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ontol = Ontol(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ontol_labeler = OntolLabeler(
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
        
        self.owl_ontology = OwlOntology(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pair_sim = PairSim(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.relation_usage = RelationUsage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.search = Search(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sim = Sim(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.variation_set = VariationSet(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    