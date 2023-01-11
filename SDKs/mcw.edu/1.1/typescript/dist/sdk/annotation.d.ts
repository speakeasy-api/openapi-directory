import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Annotation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAnnotationCountByAccIdAndObjectTypeUsingGet - Returns annotation count for ontology accession ID and object type
    **/
    getAnnotationCountByAccIdAndObjectTypeUsingGet(req: operations.GetAnnotationCountByAccIdAndObjectTypeUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationCountByAccIdAndObjectTypeUsingGetResponse>;
    /**
     * getAnnotationCountByAccIdAndSpeciesUsingGet - Returns annotation count for ontology accession ID and speicies
    **/
    getAnnotationCountByAccIdAndSpeciesUsingGet(req: operations.GetAnnotationCountByAccIdAndSpeciesUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationCountByAccIdAndSpeciesUsingGetResponse>;
    /**
     * getAnnotationCountByAccIdUsingGet - Returns annotation count for ontology accession ID
    **/
    getAnnotationCountByAccIdUsingGet(req: operations.GetAnnotationCountByAccIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationCountByAccIdUsingGetResponse>;
    /**
     * getAnnotationsByAccIdAndRgdIdUsingGet - Returns a list of annotations by RGD ID and ontology term accession ID
    **/
    getAnnotationsByAccIdAndRgdIdUsingGet(req: operations.GetAnnotationsByAccIdAndRgdIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsByAccIdAndRgdIdUsingGetResponse>;
    /**
     * getAnnotationsByRgdIdAndOntologyUsingGet - Returns a list of annotations by RGD ID and ontology prefix
    **/
    getAnnotationsByRgdIdAndOntologyUsingGet(req: operations.GetAnnotationsByRgdIdAndOntologyUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsByRgdIdAndOntologyUsingGetResponse>;
    /**
     * getAnnotationsByRgdIdUsingGet - Returns a list of annotations by RGD ID
    **/
    getAnnotationsByRgdIdUsingGet(req: operations.GetAnnotationsByRgdIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsByRgdIdUsingGetResponse>;
    /**
     * getAnnotationsUsingGet - Returns a list annotations for an ontology term or a term and it's children
    **/
    getAnnotationsUsingGet(req: operations.GetAnnotationsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsUsingGetResponse>;
    /**
     * getAnnotationsUsingPost - Return a list of genes annotated to an ontology term
    **/
    getAnnotationsUsingPost(req: operations.GetAnnotationsUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsUsingPostResponse>;
    /**
     * getAnnotsByRefrerenceUsingGet - Returns a list of annotations for a reference
    **/
    getAnnotsByRefrerenceUsingGet(req: operations.GetAnnotsByRefrerenceUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotsByRefrerenceUsingGetResponse>;
    /**
     * getTermAccIdsUsingGet - Returns a list ontology term accession IDs annotated to an rgd object
    **/
    getTermAccIdsUsingGet(req: operations.GetTermAccIdsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTermAccIdsUsingGetResponse>;
}
