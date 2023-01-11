import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bioentity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAnatomyGeneAssociations - Returns genes associated with a given anatomy
    **/
    getAnatomyGeneAssociations(req: operations.GetAnatomyGeneAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAnatomyGeneAssociationsResponse>;
    /**
     * getAnatomyGeneByTaxonAssociations - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon
     *
     * For example, + NCBITaxon:10090 (mouse)
    **/
    getAnatomyGeneByTaxonAssociations(req: operations.GetAnatomyGeneByTaxonAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAnatomyGeneByTaxonAssociationsResponse>;
    /**
     * getCaseDiseaseAssociations - Returns diseases associated with a case
    **/
    getCaseDiseaseAssociations(req: operations.GetCaseDiseaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetCaseDiseaseAssociationsResponse>;
    /**
     * getCaseGenotypeAssociations - Returns genotypes associated with a case
    **/
    getCaseGenotypeAssociations(req: operations.GetCaseGenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetCaseGenotypeAssociationsResponse>;
    /**
     * getCaseModelAssociations - Returns models associated with a case
    **/
    getCaseModelAssociations(req: operations.GetCaseModelAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetCaseModelAssociationsResponse>;
    /**
     * getCasePhenotypeAssociations - Returns phenotypes associated with a case
    **/
    getCasePhenotypeAssociations(req: operations.GetCasePhenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetCasePhenotypeAssociationsResponse>;
    /**
     * getCaseVariantAssociations - Returns variants associated with a case
    **/
    getCaseVariantAssociations(req: operations.GetCaseVariantAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetCaseVariantAssociationsResponse>;
    /**
     * getDiseaseCaseAssociations - Returns cases associated with a disease
    **/
    getDiseaseCaseAssociations(req: operations.GetDiseaseCaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseaseCaseAssociationsResponse>;
    /**
     * getDiseaseGeneAssociations - Returns genes associated with a disease
    **/
    getDiseaseGeneAssociations(req: operations.GetDiseaseGeneAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseaseGeneAssociationsResponse>;
    /**
     * getDiseaseGenotypeAssociations - Returns genotypes associated with a disease
    **/
    getDiseaseGenotypeAssociations(req: operations.GetDiseaseGenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseaseGenotypeAssociationsResponse>;
    /**
     * getDiseaseModelAssociations - Returns associations to models of the disease
     *
     * In the association object returned, the subject will be the disease, and the object will be the model.
     * The model may be a gene or genetic element.
     *
     * If the query disease is a general class, the association subject may be to a specific disease.
     *
     * In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.
     *
     * In other cases, the association will be *indirect*, for
     * example, chaining over orthology. In these cases the chain
     * will be reflected in the *evidence graph*
     *
     * * TODO: provide hook into owlsim for dynamic computation of models by similarity
    **/
    getDiseaseModelAssociations(req: operations.GetDiseaseModelAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseaseModelAssociationsResponse>;
    /**
     * getDiseaseModelTaxonAssociations - Returns associations to models of the disease constrained by taxon
     *
     * See /disease/<id>/models route for full details
    **/
    getDiseaseModelTaxonAssociations(req: operations.GetDiseaseModelTaxonAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseaseModelTaxonAssociationsResponse>;
    /**
     * getDiseasePathwayAssociations - Returns pathways associated with a disease
    **/
    getDiseasePathwayAssociations(req: operations.GetDiseasePathwayAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseasePathwayAssociationsResponse>;
    /**
     * getDiseasePhenotypeAssociations - Returns phenotypes associated with disease
    **/
    getDiseasePhenotypeAssociations(req: operations.GetDiseasePhenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseasePhenotypeAssociationsResponse>;
    /**
     * getDiseasePublicationAssociations - Returns publications associated with a disease
    **/
    getDiseasePublicationAssociations(req: operations.GetDiseasePublicationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseasePublicationAssociationsResponse>;
    /**
     * getDiseaseSubstanceAssociations - Returns substances associated with a disease
     *
     * e.g. drugs or small molecules used to treat
    **/
    getDiseaseSubstanceAssociations(req: operations.GetDiseaseSubstanceAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseaseSubstanceAssociationsResponse>;
    /**
     * getDiseaseVariantAssociations - Returns variants associated with a disease
    **/
    getDiseaseVariantAssociations(req: operations.GetDiseaseVariantAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseaseVariantAssociationsResponse>;
    /**
     * getFunctionAssociations - Returns annotations associated to a function term
    **/
    getFunctionAssociations(req: operations.GetFunctionAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionAssociationsResponse>;
    /**
     * getFunctionGeneAssociations - Returns genes associated to a GO term
    **/
    getFunctionGeneAssociations(req: operations.GetFunctionGeneAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionGeneAssociationsResponse>;
    /**
     * getFunctionPublicationAssociations - Returns publications associated to a GO term
    **/
    getFunctionPublicationAssociations(req: operations.GetFunctionPublicationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionPublicationAssociationsResponse>;
    /**
     * getFunctionTaxonAssociations - Returns taxons associated to a GO term
    **/
    getFunctionTaxonAssociations(req: operations.GetFunctionTaxonAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionTaxonAssociationsResponse>;
    /**
     * getGeneAnatomyAssociations - Returns anatomical entities associated with a gene
    **/
    getGeneAnatomyAssociations(req: operations.GetGeneAnatomyAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneAnatomyAssociationsResponse>;
    /**
     * getGeneCaseAssociations - Returns cases associated with a gene
    **/
    getGeneCaseAssociations(req: operations.GetGeneCaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneCaseAssociationsResponse>;
    /**
     * getGeneDiseaseAssociations - Returns diseases associated with gene
    **/
    getGeneDiseaseAssociations(req: operations.GetGeneDiseaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneDiseaseAssociationsResponse>;
    /**
     * getGeneExpressionAssociations - Returns expression events for a gene
    **/
    getGeneExpressionAssociations(req: operations.GetGeneExpressionAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneExpressionAssociationsResponse>;
    /**
     * getGeneFunctionAssociations - Returns function associations for a gene
     *
     * IMPLEMENTATION DETAILS
     * ----------------------
     *
     * Note: currently this is implemented as a query to the GO/AmiGO solr instance.
     * This directly supports IDs such as:
     *
     *  - ZFIN e.g. ZFIN:ZDB-GENE-050417-357
     *
     * Note that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,
     * the standard for biolink is MGI:nnnn, so you should use this (will be transparently
     * mapped to legacy ID)
     *
     * Additionally, for some species such as Human, GO has the annotation attached to the UniProt ID.
     * Again, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be
     * mapped behind the scenes for querying.
    **/
    getGeneFunctionAssociations(req: operations.GetGeneFunctionAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneFunctionAssociationsResponse>;
    /**
     * getGeneGenotypeAssociations - Returns genotypes associated with a gene
    **/
    getGeneGenotypeAssociations(req: operations.GetGeneGenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneGenotypeAssociationsResponse>;
    /**
     * getGeneHomologAssociations - Returns homologs for a gene
    **/
    getGeneHomologAssociations(req: operations.GetGeneHomologAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneHomologAssociationsResponse>;
    /**
     * getGeneInteractions - Returns interactions for a gene
    **/
    getGeneInteractions(req: operations.GetGeneInteractionsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneInteractionsResponse>;
    /**
     * getGeneModelAssociations - Returns models associated with a gene
    **/
    getGeneModelAssociations(req: operations.GetGeneModelAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneModelAssociationsResponse>;
    /**
     * getGeneOrthologDiseaseAssociations - Return diseases associated with orthologs of a gene
    **/
    getGeneOrthologDiseaseAssociations(req: operations.GetGeneOrthologDiseaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneOrthologDiseaseAssociationsResponse>;
    /**
     * getGeneOrthologPhenotypeAssociations - Return phenotypes associated with orthologs for a gene
    **/
    getGeneOrthologPhenotypeAssociations(req: operations.GetGeneOrthologPhenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneOrthologPhenotypeAssociationsResponse>;
    /**
     * getGenePathwayAssociations - Returns pathways associated with gene
    **/
    getGenePathwayAssociations(req: operations.GetGenePathwayAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenePathwayAssociationsResponse>;
    /**
     * getGenePhenotypeAssociations - Returns phenotypes associated with gene
    **/
    getGenePhenotypeAssociations(req: operations.GetGenePhenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenePhenotypeAssociationsResponse>;
    /**
     * getGenePublicationAssociations - Returns publications associated with a gene
    **/
    getGenePublicationAssociations(req: operations.GetGenePublicationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenePublicationAssociationsResponse>;
    /**
     * getGeneVariantAssociations - Returns variants associated with a gene
    **/
    getGeneVariantAssociations(req: operations.GetGeneVariantAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneVariantAssociationsResponse>;
    /**
     * getGenericAssociations - Returns associations for an entity regardless of the type
    **/
    getGenericAssociations(req: operations.GetGenericAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenericAssociationsResponse>;
    /**
     * getGenericObject - Returns basic info on object of any type
    **/
    getGenericObject(req: operations.GetGenericObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetGenericObjectResponse>;
    /**
     * getGenericObjectByType - Return basic info on an object for a given type
    **/
    getGenericObjectByType(req: operations.GetGenericObjectByTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetGenericObjectByTypeResponse>;
    /**
     * getGenotypeCaseAssociations - Returns cases associated with a genotype
    **/
    getGenotypeCaseAssociations(req: operations.GetGenotypeCaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenotypeCaseAssociationsResponse>;
    /**
     * getGenotypeDiseaseAssociations - Returns diseases associated with a genotype
    **/
    getGenotypeDiseaseAssociations(req: operations.GetGenotypeDiseaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenotypeDiseaseAssociationsResponse>;
    /**
     * getGenotypeGeneAssociations - Returns genes associated with a genotype
    **/
    getGenotypeGeneAssociations(req: operations.GetGenotypeGeneAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenotypeGeneAssociationsResponse>;
    /**
     * getGenotypeGenotypeAssociations - Returns genotypes-genotype associations
     *
     * Genotypes may be related to one another according to the GENO model
    **/
    getGenotypeGenotypeAssociations(req: operations.GetGenotypeGenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenotypeGenotypeAssociationsResponse>;
    /**
     * getGenotypeModelAssociations - Returns models associated with a genotype
    **/
    getGenotypeModelAssociations(req: operations.GetGenotypeModelAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenotypeModelAssociationsResponse>;
    /**
     * getGenotypePhenotypeAssociations - Returns phenotypes associated with a genotype
    **/
    getGenotypePhenotypeAssociations(req: operations.GetGenotypePhenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenotypePhenotypeAssociationsResponse>;
    /**
     * getGenotypePublicationAssociations - Returns publications associated with a genotype
    **/
    getGenotypePublicationAssociations(req: operations.GetGenotypePublicationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenotypePublicationAssociationsResponse>;
    /**
     * getGenotypeVariantAssociations - Returns genotypes-variant associations
    **/
    getGenotypeVariantAssociations(req: operations.GetGenotypeVariantAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenotypeVariantAssociationsResponse>;
    /**
     * getGotermGeneAssociations - Returns associations to GO terms for a gene
    **/
    getGotermGeneAssociations(req: operations.GetGotermGeneAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGotermGeneAssociationsResponse>;
    /**
     * getModelCaseAssociations - Returns cases associated with a model
    **/
    getModelCaseAssociations(req: operations.GetModelCaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetModelCaseAssociationsResponse>;
    /**
     * getModelDiseaseAssociations - Returns diseases associated with a model
    **/
    getModelDiseaseAssociations(req: operations.GetModelDiseaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetModelDiseaseAssociationsResponse>;
    /**
     * getModelGeneAssociations - Returns genes associated with a model
    **/
    getModelGeneAssociations(req: operations.GetModelGeneAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetModelGeneAssociationsResponse>;
    /**
     * getModelGenotypeAssociations - Returns genotypes associated with a model
    **/
    getModelGenotypeAssociations(req: operations.GetModelGenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetModelGenotypeAssociationsResponse>;
    /**
     * getModelPhenotypeAssociations - Returns phenotypes associated with a model
    **/
    getModelPhenotypeAssociations(req: operations.GetModelPhenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetModelPhenotypeAssociationsResponse>;
    /**
     * getModelPublicationAssociations - Returns publications associated with a model
    **/
    getModelPublicationAssociations(req: operations.GetModelPublicationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetModelPublicationAssociationsResponse>;
    /**
     * getModelVariantAssociations - Returns variants associated with a model
    **/
    getModelVariantAssociations(req: operations.GetModelVariantAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetModelVariantAssociationsResponse>;
    /**
     * getPathwayDiseaseAssociations - Returns diseases associated with a pathway
    **/
    getPathwayDiseaseAssociations(req: operations.GetPathwayDiseaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPathwayDiseaseAssociationsResponse>;
    /**
     * getPathwayGeneAssociations - Returns genes associated with a pathway
    **/
    getPathwayGeneAssociations(req: operations.GetPathwayGeneAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPathwayGeneAssociationsResponse>;
    /**
     * getPathwayPhenotypeAssociations - Returns phenotypes associated with a pathway
    **/
    getPathwayPhenotypeAssociations(req: operations.GetPathwayPhenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPathwayPhenotypeAssociationsResponse>;
    /**
     * getPhenotypeAnatomyAssociations - Returns anatomical entities associated with a phenotype
     *
     * Example IDs:
     *
     *  * MP:0008521 abnormal Bowman membrane
    **/
    getPhenotypeAnatomyAssociations(req: operations.GetPhenotypeAnatomyAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypeAnatomyAssociationsResponse>;
    /**
     * getPhenotypeCaseAssociations - Returns cases associated with a phenotype
    **/
    getPhenotypeCaseAssociations(req: operations.GetPhenotypeCaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypeCaseAssociationsResponse>;
    /**
     * getPhenotypeDiseaseAssociations - Returns diseases associated with a phenotype
    **/
    getPhenotypeDiseaseAssociations(req: operations.GetPhenotypeDiseaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypeDiseaseAssociationsResponse>;
    /**
     * getPhenotypeGeneAssociations - Returns genes associated with a phenotype
    **/
    getPhenotypeGeneAssociations(req: operations.GetPhenotypeGeneAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypeGeneAssociationsResponse>;
    /**
     * getPhenotypeGeneByTaxonAssociations - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon
     *
     * For example, MP:0001569 + NCBITaxon:10090 (mouse)
    **/
    getPhenotypeGeneByTaxonAssociations(req: operations.GetPhenotypeGeneByTaxonAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypeGeneByTaxonAssociationsResponse>;
    /**
     * getPhenotypeGenotypeAssociations - Returns genotypes associated with a phenotype
    **/
    getPhenotypeGenotypeAssociations(req: operations.GetPhenotypeGenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypeGenotypeAssociationsResponse>;
    /**
     * getPhenotypePathwayAssociations - Returns pathways associated with a phenotype
    **/
    getPhenotypePathwayAssociations(req: operations.GetPhenotypePathwayAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypePathwayAssociationsResponse>;
    /**
     * getPhenotypePublicationAssociations - Returns publications associated with a phenotype
    **/
    getPhenotypePublicationAssociations(req: operations.GetPhenotypePublicationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypePublicationAssociationsResponse>;
    /**
     * getPhenotypeVariantAssociations - Returns variants associated with a phenotype
    **/
    getPhenotypeVariantAssociations(req: operations.GetPhenotypeVariantAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypeVariantAssociationsResponse>;
    /**
     * getPublicationDiseaseAssociations - Returns diseases associated with a publication
    **/
    getPublicationDiseaseAssociations(req: operations.GetPublicationDiseaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicationDiseaseAssociationsResponse>;
    /**
     * getPublicationGeneAssociations - Returns genes associated with a publication
    **/
    getPublicationGeneAssociations(req: operations.GetPublicationGeneAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicationGeneAssociationsResponse>;
    /**
     * getPublicationGenotypeAssociations - Returns genotypes associated with a publication
    **/
    getPublicationGenotypeAssociations(req: operations.GetPublicationGenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicationGenotypeAssociationsResponse>;
    /**
     * getPublicationModelAssociations - Returns models associated with a publication
    **/
    getPublicationModelAssociations(req: operations.GetPublicationModelAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicationModelAssociationsResponse>;
    /**
     * getPublicationPhenotypeAssociations - Returns phenotypes associated with a publication
    **/
    getPublicationPhenotypeAssociations(req: operations.GetPublicationPhenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicationPhenotypeAssociationsResponse>;
    /**
     * getPublicationVariantAssociations - Returns variants associated with a publication
    **/
    getPublicationVariantAssociations(req: operations.GetPublicationVariantAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicationVariantAssociationsResponse>;
    /**
     * getSubstanceParticipantInAssociations - Returns associations between an activity and process and the specified substance
     *
     * Examples relationships:
     *
     *  * substance is a metabolite of a process
     *  * substance is synthesized by a process
     *  * substance is modified by an activity
     *  * substance elicits a response program/pathway
     *  * substance is transported by activity or pathway
     *
     * For example, CHEBI:40036 (amitrole)
    **/
    getSubstanceParticipantInAssociations(req: operations.GetSubstanceParticipantInAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceParticipantInAssociationsResponse>;
    /**
     * getSubstanceRoleAssociations - Returns associations between given drug and roles
     *
     * Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)
    **/
    getSubstanceRoleAssociations(req: operations.GetSubstanceRoleAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceRoleAssociationsResponse>;
    /**
     * getSubstanceTreatsAssociations - Returns substances associated with a disease
     *
     * e.g. drugs or small molecules used to treat
    **/
    getSubstanceTreatsAssociations(req: operations.GetSubstanceTreatsAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceTreatsAssociationsResponse>;
    /**
     * getVariantCaseAssociations - Returns cases associated with a variant
    **/
    getVariantCaseAssociations(req: operations.GetVariantCaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantCaseAssociationsResponse>;
    /**
     * getVariantDiseaseAssociations - Returns diseases associated with a variant
    **/
    getVariantDiseaseAssociations(req: operations.GetVariantDiseaseAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantDiseaseAssociationsResponse>;
    /**
     * getVariantGeneAssociations - Returns genes associated with a variant
    **/
    getVariantGeneAssociations(req: operations.GetVariantGeneAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantGeneAssociationsResponse>;
    /**
     * getVariantGenotypeAssociations - Returns genotypes associated with a variant
    **/
    getVariantGenotypeAssociations(req: operations.GetVariantGenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantGenotypeAssociationsResponse>;
    /**
     * getVariantModelAssociations - Returns models associated with a variant
    **/
    getVariantModelAssociations(req: operations.GetVariantModelAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantModelAssociationsResponse>;
    /**
     * getVariantPhenotypeAssociations - Returns phenotypes associated with a variant
    **/
    getVariantPhenotypeAssociations(req: operations.GetVariantPhenotypeAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantPhenotypeAssociationsResponse>;
    /**
     * getVariantPublicationAssociations - Returns publications associated with a variant
    **/
    getVariantPublicationAssociations(req: operations.GetVariantPublicationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantPublicationAssociationsResponse>;
}
