import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Annotation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns annotation count for ontology accession ID and object type
     */
    getAnnotationCountByAccIdAndObjectTypeUsingGET(req: operations.GETAnnotationCountByAccIdAndObjectTypeUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAnnotationCountByAccIdAndObjectTypeUsingGETResponse>;
    /**
     * Returns annotation count for ontology accession ID and speicies
     */
    getAnnotationCountByAccIdAndSpeciesUsingGET(req: operations.GETAnnotationCountByAccIdAndSpeciesUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAnnotationCountByAccIdAndSpeciesUsingGETResponse>;
    /**
     * Returns annotation count for ontology accession ID
     */
    getAnnotationCountByAccIdUsingGET(req: operations.GETAnnotationCountByAccIdUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAnnotationCountByAccIdUsingGETResponse>;
    /**
     * Returns a list of annotations by RGD ID and ontology term accession ID
     */
    getAnnotationsByAccIdAndRgdIdUsingGET(req: operations.GETAnnotationsByAccIdAndRgdIdUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAnnotationsByAccIdAndRgdIdUsingGETResponse>;
    /**
     * Returns a list of annotations by RGD ID and ontology prefix
     */
    getAnnotationsByRgdIdAndOntologyUsingGET(req: operations.GETAnnotationsByRgdIdAndOntologyUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAnnotationsByRgdIdAndOntologyUsingGETResponse>;
    /**
     * Returns a list of annotations by RGD ID
     */
    getAnnotationsByRgdIdUsingGET(req: operations.GETAnnotationsByRgdIdUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAnnotationsByRgdIdUsingGETResponse>;
    /**
     * Returns a list annotations for an ontology term or a term and it's children
     */
    getAnnotationsUsingGET(req: operations.GETAnnotationsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAnnotationsUsingGETResponse>;
    /**
     * Return a list of genes annotated to an ontology term
     */
    getAnnotationsUsingPOST(req: shared.AnnotationRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsUsingPOSTResponse>;
    /**
     * Returns a list of annotations for a reference
     */
    getAnnotsByRefrerenceUsingGET(req: operations.GETAnnotsByRefrerenceUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAnnotsByRefrerenceUsingGETResponse>;
    /**
     * Returns a list ontology term accession IDs annotated to an rgd object
     */
    getTermAccIdsUsingGET(req: operations.GETTermAccIdsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETTermAccIdsUsingGETResponse>;
}
