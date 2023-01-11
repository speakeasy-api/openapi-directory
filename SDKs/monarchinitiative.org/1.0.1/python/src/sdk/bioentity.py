import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Bioentity:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_anatomy_gene_associations(self, request: operations.GetAnatomyGeneAssociationsRequest) -> operations.GetAnatomyGeneAssociationsResponse:
        r"""Returns genes associated with a given anatomy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/anatomy/{id}/genes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnatomyGeneAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_anatomy_gene_by_taxon_associations(self, request: operations.GetAnatomyGeneByTaxonAssociationsRequest) -> operations.GetAnatomyGeneByTaxonAssociationsResponse:
        r"""Returns gene IDs for all genes associated with a given anatomy, filtered by taxon
        For example, + NCBITaxon:10090 (mouse)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/anatomy/{id}/genes/{taxid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnatomyGeneByTaxonAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_case_disease_associations(self, request: operations.GetCaseDiseaseAssociationsRequest) -> operations.GetCaseDiseaseAssociationsResponse:
        r"""Returns diseases associated with a case
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/case/{id}/diseases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCaseDiseaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_case_genotype_associations(self, request: operations.GetCaseGenotypeAssociationsRequest) -> operations.GetCaseGenotypeAssociationsResponse:
        r"""Returns genotypes associated with a case
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/case/{id}/genotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCaseGenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_case_model_associations(self, request: operations.GetCaseModelAssociationsRequest) -> operations.GetCaseModelAssociationsResponse:
        r"""Returns models associated with a case
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/case/{id}/models", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCaseModelAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_case_phenotype_associations(self, request: operations.GetCasePhenotypeAssociationsRequest) -> operations.GetCasePhenotypeAssociationsResponse:
        r"""Returns phenotypes associated with a case
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/case/{id}/phenotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCasePhenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_case_variant_associations(self, request: operations.GetCaseVariantAssociationsRequest) -> operations.GetCaseVariantAssociationsResponse:
        r"""Returns variants associated with a case
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/case/{id}/variants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCaseVariantAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_disease_case_associations(self, request: operations.GetDiseaseCaseAssociationsRequest) -> operations.GetDiseaseCaseAssociationsResponse:
        r"""Returns cases associated with a disease
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/disease/{id}/cases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseaseCaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_disease_gene_associations(self, request: operations.GetDiseaseGeneAssociationsRequest) -> operations.GetDiseaseGeneAssociationsResponse:
        r"""Returns genes associated with a disease
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/disease/{id}/genes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseaseGeneAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_disease_genotype_associations(self, request: operations.GetDiseaseGenotypeAssociationsRequest) -> operations.GetDiseaseGenotypeAssociationsResponse:
        r"""Returns genotypes associated with a disease
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/disease/{id}/genotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseaseGenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_disease_model_associations(self, request: operations.GetDiseaseModelAssociationsRequest) -> operations.GetDiseaseModelAssociationsResponse:
        r"""Returns associations to models of the disease
        In the association object returned, the subject will be the disease, and the object will be the model.
        The model may be a gene or genetic element.
        
        If the query disease is a general class, the association subject may be to a specific disease.
        
        In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.
        
        In other cases, the association will be *indirect*, for
        example, chaining over orthology. In these cases the chain
        will be reflected in the *evidence graph*
        
        * TODO: provide hook into owlsim for dynamic computation of models by similarity
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/disease/{id}/models", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseaseModelAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_disease_model_taxon_associations(self, request: operations.GetDiseaseModelTaxonAssociationsRequest) -> operations.GetDiseaseModelTaxonAssociationsResponse:
        r"""Returns associations to models of the disease constrained by taxon
        See /disease/<id>/models route for full details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/disease/{id}/models/{taxon}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseaseModelTaxonAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_disease_pathway_associations(self, request: operations.GetDiseasePathwayAssociationsRequest) -> operations.GetDiseasePathwayAssociationsResponse:
        r"""Returns pathways associated with a disease
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/disease/{id}/pathways", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseasePathwayAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_disease_phenotype_associations(self, request: operations.GetDiseasePhenotypeAssociationsRequest) -> operations.GetDiseasePhenotypeAssociationsResponse:
        r"""Returns phenotypes associated with disease
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/disease/{id}/phenotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseasePhenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.D2PAssociationResults])
                res.d2_p_association_results = out

        return res

    
    def get_disease_publication_associations(self, request: operations.GetDiseasePublicationAssociationsRequest) -> operations.GetDiseasePublicationAssociationsResponse:
        r"""Returns publications associated with a disease
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/disease/{id}/publications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseasePublicationAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_disease_substance_associations(self, request: operations.GetDiseaseSubstanceAssociationsRequest) -> operations.GetDiseaseSubstanceAssociationsResponse:
        r"""Returns substances associated with a disease
        e.g. drugs or small molecules used to treat
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/disease/{id}/treatment", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseaseSubstanceAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_disease_variant_associations(self, request: operations.GetDiseaseVariantAssociationsRequest) -> operations.GetDiseaseVariantAssociationsResponse:
        r"""Returns variants associated with a disease
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/disease/{id}/variants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseaseVariantAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_function_associations(self, request: operations.GetFunctionAssociationsRequest) -> operations.GetFunctionAssociationsResponse:
        r"""Returns annotations associated to a function term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/function/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFunctionAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_function_gene_associations(self, request: operations.GetFunctionGeneAssociationsRequest) -> operations.GetFunctionGeneAssociationsResponse:
        r"""Returns genes associated to a GO term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/function/{id}/genes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFunctionGeneAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_function_publication_associations(self, request: operations.GetFunctionPublicationAssociationsRequest) -> operations.GetFunctionPublicationAssociationsResponse:
        r"""Returns publications associated to a GO term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/function/{id}/publications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFunctionPublicationAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_function_taxon_associations(self, request: operations.GetFunctionTaxonAssociationsRequest) -> operations.GetFunctionTaxonAssociationsResponse:
        r"""Returns taxons associated to a GO term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/function/{id}/taxons", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFunctionTaxonAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_gene_anatomy_associations(self, request: operations.GetGeneAnatomyAssociationsRequest) -> operations.GetGeneAnatomyAssociationsResponse:
        r"""Returns anatomical entities associated with a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/anatomy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneAnatomyAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_case_associations(self, request: operations.GetGeneCaseAssociationsRequest) -> operations.GetGeneCaseAssociationsResponse:
        r"""Returns cases associated with a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/cases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneCaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_disease_associations(self, request: operations.GetGeneDiseaseAssociationsRequest) -> operations.GetGeneDiseaseAssociationsResponse:
        r"""Returns diseases associated with gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/diseases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneDiseaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_expression_associations(self, request: operations.GetGeneExpressionAssociationsRequest) -> operations.GetGeneExpressionAssociationsResponse:
        r"""Returns expression events for a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/expression/anatomy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneExpressionAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_function_associations(self, request: operations.GetGeneFunctionAssociationsRequest) -> operations.GetGeneFunctionAssociationsResponse:
        r"""Returns function associations for a gene
        IMPLEMENTATION DETAILS
        ----------------------
        
        Note: currently this is implemented as a query to the GO/AmiGO solr instance.
        This directly supports IDs such as:
        
         - ZFIN e.g. ZFIN:ZDB-GENE-050417-357
        
        Note that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,
        the standard for biolink is MGI:nnnn, so you should use this (will be transparently
        mapped to legacy ID)
        
        Additionally, for some species such as Human, GO has the annotation attached to the UniProt ID.
        Again, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be
        mapped behind the scenes for querying.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/function", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneFunctionAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_genotype_associations(self, request: operations.GetGeneGenotypeAssociationsRequest) -> operations.GetGeneGenotypeAssociationsResponse:
        r"""Returns genotypes associated with a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/genotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneGenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_homolog_associations(self, request: operations.GetGeneHomologAssociationsRequest) -> operations.GetGeneHomologAssociationsResponse:
        r"""Returns homologs for a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/homologs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneHomologAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_interactions(self, request: operations.GetGeneInteractionsRequest) -> operations.GetGeneInteractionsResponse:
        r"""Returns interactions for a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/interactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneInteractionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_model_associations(self, request: operations.GetGeneModelAssociationsRequest) -> operations.GetGeneModelAssociationsResponse:
        r"""Returns models associated with a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/models", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneModelAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_ortholog_disease_associations(self, request: operations.GetGeneOrthologDiseaseAssociationsRequest) -> operations.GetGeneOrthologDiseaseAssociationsResponse:
        r"""Return diseases associated with orthologs of a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/ortholog/diseases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneOrthologDiseaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_ortholog_phenotype_associations(self, request: operations.GetGeneOrthologPhenotypeAssociationsRequest) -> operations.GetGeneOrthologPhenotypeAssociationsResponse:
        r"""Return phenotypes associated with orthologs for a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/ortholog/phenotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneOrthologPhenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_pathway_associations(self, request: operations.GetGenePathwayAssociationsRequest) -> operations.GetGenePathwayAssociationsResponse:
        r"""Returns pathways associated with gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/pathways", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenePathwayAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_phenotype_associations(self, request: operations.GetGenePhenotypeAssociationsRequest) -> operations.GetGenePhenotypeAssociationsResponse:
        r"""Returns phenotypes associated with gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/phenotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenePhenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_publication_associations(self, request: operations.GetGenePublicationAssociationsRequest) -> operations.GetGenePublicationAssociationsResponse:
        r"""Returns publications associated with a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/publications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenePublicationAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_gene_variant_associations(self, request: operations.GetGeneVariantAssociationsRequest) -> operations.GetGeneVariantAssociationsResponse:
        r"""Returns variants associated with a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/gene/{id}/variants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneVariantAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_generic_associations(self, request: operations.GetGenericAssociationsRequest) -> operations.GetGenericAssociationsResponse:
        r"""Returns associations for an entity regardless of the type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/{id}/associations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenericAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_generic_object(self, request: operations.GetGenericObjectRequest) -> operations.GetGenericObjectResponse:
        r"""Returns basic info on object of any type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenericObjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BioObject])
                res.bio_object = out

        return res

    
    def get_generic_object_by_type(self, request: operations.GetGenericObjectByTypeRequest) -> operations.GetGenericObjectByTypeResponse:
        r"""Return basic info on an object for a given type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/{type}/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenericObjectByTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_genotype_case_associations(self, request: operations.GetGenotypeCaseAssociationsRequest) -> operations.GetGenotypeCaseAssociationsResponse:
        r"""Returns cases associated with a genotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/genotype/{id}/cases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenotypeCaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_genotype_disease_associations(self, request: operations.GetGenotypeDiseaseAssociationsRequest) -> operations.GetGenotypeDiseaseAssociationsResponse:
        r"""Returns diseases associated with a genotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/genotype/{id}/diseases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenotypeDiseaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_genotype_gene_associations(self, request: operations.GetGenotypeGeneAssociationsRequest) -> operations.GetGenotypeGeneAssociationsResponse:
        r"""Returns genes associated with a genotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/genotype/{id}/genes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenotypeGeneAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_genotype_genotype_associations(self, request: operations.GetGenotypeGenotypeAssociationsRequest) -> operations.GetGenotypeGenotypeAssociationsResponse:
        r"""Returns genotypes-genotype associations
        Genotypes may be related to one another according to the GENO model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/genotype/{id}/genotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenotypeGenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_genotype_model_associations(self, request: operations.GetGenotypeModelAssociationsRequest) -> operations.GetGenotypeModelAssociationsResponse:
        r"""Returns models associated with a genotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/genotype/{id}/models", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenotypeModelAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_genotype_phenotype_associations(self, request: operations.GetGenotypePhenotypeAssociationsRequest) -> operations.GetGenotypePhenotypeAssociationsResponse:
        r"""Returns phenotypes associated with a genotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/genotype/{id}/phenotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenotypePhenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_genotype_publication_associations(self, request: operations.GetGenotypePublicationAssociationsRequest) -> operations.GetGenotypePublicationAssociationsResponse:
        r"""Returns publications associated with a genotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/genotype/{id}/publications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenotypePublicationAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_genotype_variant_associations(self, request: operations.GetGenotypeVariantAssociationsRequest) -> operations.GetGenotypeVariantAssociationsResponse:
        r"""Returns genotypes-variant associations
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/genotype/{id}/variants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenotypeVariantAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_goterm_gene_associations(self, request: operations.GetGotermGeneAssociationsRequest) -> operations.GetGotermGeneAssociationsResponse:
        r"""Returns associations to GO terms for a gene
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/goterm/{id}/genes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGotermGeneAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_model_case_associations(self, request: operations.GetModelCaseAssociationsRequest) -> operations.GetModelCaseAssociationsResponse:
        r"""Returns cases associated with a model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/model/{id}/cases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelCaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_model_disease_associations(self, request: operations.GetModelDiseaseAssociationsRequest) -> operations.GetModelDiseaseAssociationsResponse:
        r"""Returns diseases associated with a model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/model/{id}/diseases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelDiseaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_model_gene_associations(self, request: operations.GetModelGeneAssociationsRequest) -> operations.GetModelGeneAssociationsResponse:
        r"""Returns genes associated with a model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/model/{id}/genes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelGeneAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_model_genotype_associations(self, request: operations.GetModelGenotypeAssociationsRequest) -> operations.GetModelGenotypeAssociationsResponse:
        r"""Returns genotypes associated with a model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/model/{id}/genotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelGenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_model_phenotype_associations(self, request: operations.GetModelPhenotypeAssociationsRequest) -> operations.GetModelPhenotypeAssociationsResponse:
        r"""Returns phenotypes associated with a model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/model/{id}/phenotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelPhenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_model_publication_associations(self, request: operations.GetModelPublicationAssociationsRequest) -> operations.GetModelPublicationAssociationsResponse:
        r"""Returns publications associated with a model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/model/{id}/publications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelPublicationAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_model_variant_associations(self, request: operations.GetModelVariantAssociationsRequest) -> operations.GetModelVariantAssociationsResponse:
        r"""Returns variants associated with a model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/model/{id}/variants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelVariantAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_pathway_disease_associations(self, request: operations.GetPathwayDiseaseAssociationsRequest) -> operations.GetPathwayDiseaseAssociationsResponse:
        r"""Returns diseases associated with a pathway
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/pathway/{id}/diseases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPathwayDiseaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_pathway_gene_associations(self, request: operations.GetPathwayGeneAssociationsRequest) -> operations.GetPathwayGeneAssociationsResponse:
        r"""Returns genes associated with a pathway
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/pathway/{id}/genes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPathwayGeneAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_pathway_phenotype_associations(self, request: operations.GetPathwayPhenotypeAssociationsRequest) -> operations.GetPathwayPhenotypeAssociationsResponse:
        r"""Returns phenotypes associated with a pathway
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/pathway/{id}/phenotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPathwayPhenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_phenotype_anatomy_associations(self, request: operations.GetPhenotypeAnatomyAssociationsRequest) -> operations.GetPhenotypeAnatomyAssociationsResponse:
        r"""Returns anatomical entities associated with a phenotype
        Example IDs:
        
         * MP:0008521 abnormal Bowman membrane
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/phenotype/{id}/anatomy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypeAnatomyAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.NamedObject]])
                res.named_objects = out

        return res

    
    def get_phenotype_case_associations(self, request: operations.GetPhenotypeCaseAssociationsRequest) -> operations.GetPhenotypeCaseAssociationsResponse:
        r"""Returns cases associated with a phenotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/phenotype/{id}/cases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypeCaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_phenotype_disease_associations(self, request: operations.GetPhenotypeDiseaseAssociationsRequest) -> operations.GetPhenotypeDiseaseAssociationsResponse:
        r"""Returns diseases associated with a phenotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/phenotype/{id}/diseases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypeDiseaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.D2PAssociationResults])
                res.d2_p_association_results = out

        return res

    
    def get_phenotype_gene_associations(self, request: operations.GetPhenotypeGeneAssociationsRequest) -> operations.GetPhenotypeGeneAssociationsResponse:
        r"""Returns genes associated with a phenotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/phenotype/{id}/genes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypeGeneAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_phenotype_gene_by_taxon_associations(self, request: operations.GetPhenotypeGeneByTaxonAssociationsRequest) -> operations.GetPhenotypeGeneByTaxonAssociationsResponse:
        r"""Returns gene IDs for all genes associated with a given phenotype, filtered by taxon
        For example, MP:0001569 + NCBITaxon:10090 (mouse)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/phenotype/{id}/gene/{taxid}/ids", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypeGeneByTaxonAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_phenotype_genotype_associations(self, request: operations.GetPhenotypeGenotypeAssociationsRequest) -> operations.GetPhenotypeGenotypeAssociationsResponse:
        r"""Returns genotypes associated with a phenotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/phenotype/{id}/genotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypeGenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_phenotype_pathway_associations(self, request: operations.GetPhenotypePathwayAssociationsRequest) -> operations.GetPhenotypePathwayAssociationsResponse:
        r"""Returns pathways associated with a phenotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/phenotype/{id}/pathways", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypePathwayAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_phenotype_publication_associations(self, request: operations.GetPhenotypePublicationAssociationsRequest) -> operations.GetPhenotypePublicationAssociationsResponse:
        r"""Returns publications associated with a phenotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/phenotype/{id}/publications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypePublicationAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_phenotype_variant_associations(self, request: operations.GetPhenotypeVariantAssociationsRequest) -> operations.GetPhenotypeVariantAssociationsResponse:
        r"""Returns variants associated with a phenotype
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/phenotype/{id}/variants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypeVariantAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_publication_disease_associations(self, request: operations.GetPublicationDiseaseAssociationsRequest) -> operations.GetPublicationDiseaseAssociationsResponse:
        r"""Returns diseases associated with a publication
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/publication/{id}/diseases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicationDiseaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_publication_gene_associations(self, request: operations.GetPublicationGeneAssociationsRequest) -> operations.GetPublicationGeneAssociationsResponse:
        r"""Returns genes associated with a publication
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/publication/{id}/genes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicationGeneAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_publication_genotype_associations(self, request: operations.GetPublicationGenotypeAssociationsRequest) -> operations.GetPublicationGenotypeAssociationsResponse:
        r"""Returns genotypes associated with a publication
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/publication/{id}/genotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicationGenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_publication_model_associations(self, request: operations.GetPublicationModelAssociationsRequest) -> operations.GetPublicationModelAssociationsResponse:
        r"""Returns models associated with a publication
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/publication/{id}/models", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicationModelAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_publication_phenotype_associations(self, request: operations.GetPublicationPhenotypeAssociationsRequest) -> operations.GetPublicationPhenotypeAssociationsResponse:
        r"""Returns phenotypes associated with a publication
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/publication/{id}/phenotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicationPhenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_publication_variant_associations(self, request: operations.GetPublicationVariantAssociationsRequest) -> operations.GetPublicationVariantAssociationsResponse:
        r"""Returns variants associated with a publication
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/publication/{id}/variants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicationVariantAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_substance_participant_in_associations(self, request: operations.GetSubstanceParticipantInAssociationsRequest) -> operations.GetSubstanceParticipantInAssociationsResponse:
        r"""Returns associations between an activity and process and the specified substance
        Examples relationships:
        
         * substance is a metabolite of a process
         * substance is synthesized by a process
         * substance is modified by an activity
         * substance elicits a response program/pathway
         * substance is transported by activity or pathway
        
        For example, CHEBI:40036 (amitrole)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/substance/{id}/participant_in", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubstanceParticipantInAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Association]])
                res.associations = out

        return res

    
    def get_substance_role_associations(self, request: operations.GetSubstanceRoleAssociationsRequest) -> operations.GetSubstanceRoleAssociationsResponse:
        r"""Returns associations between given drug and roles
        Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/substance/{id}/roles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubstanceRoleAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Association]])
                res.associations = out

        return res

    
    def get_substance_treats_associations(self, request: operations.GetSubstanceTreatsAssociationsRequest) -> operations.GetSubstanceTreatsAssociationsResponse:
        r"""Returns substances associated with a disease
        e.g. drugs or small molecules used to treat
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/substance/{id}/treats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubstanceTreatsAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_variant_case_associations(self, request: operations.GetVariantCaseAssociationsRequest) -> operations.GetVariantCaseAssociationsResponse:
        r"""Returns cases associated with a variant
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/variant/{id}/cases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantCaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_variant_disease_associations(self, request: operations.GetVariantDiseaseAssociationsRequest) -> operations.GetVariantDiseaseAssociationsResponse:
        r"""Returns diseases associated with a variant
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/variant/{id}/diseases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantDiseaseAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_variant_gene_associations(self, request: operations.GetVariantGeneAssociationsRequest) -> operations.GetVariantGeneAssociationsResponse:
        r"""Returns genes associated with a variant
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/variant/{id}/genes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantGeneAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_variant_genotype_associations(self, request: operations.GetVariantGenotypeAssociationsRequest) -> operations.GetVariantGenotypeAssociationsResponse:
        r"""Returns genotypes associated with a variant
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/variant/{id}/genotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantGenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_variant_model_associations(self, request: operations.GetVariantModelAssociationsRequest) -> operations.GetVariantModelAssociationsResponse:
        r"""Returns models associated with a variant
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/variant/{id}/models", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantModelAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_variant_phenotype_associations(self, request: operations.GetVariantPhenotypeAssociationsRequest) -> operations.GetVariantPhenotypeAssociationsResponse:
        r"""Returns phenotypes associated with a variant
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/variant/{id}/phenotypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantPhenotypeAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    
    def get_variant_publication_associations(self, request: operations.GetVariantPublicationAssociationsRequest) -> operations.GetVariantPublicationAssociationsResponse:
        r"""Returns publications associated with a variant
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bioentity/variant/{id}/publications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantPublicationAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociationResults])
                res.association_results = out

        return res

    