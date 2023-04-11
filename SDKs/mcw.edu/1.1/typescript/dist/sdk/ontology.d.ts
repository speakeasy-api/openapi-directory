import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Ontology Web Service
 */
export declare class Ontology {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns child and parent terms for Accession ID
     */
    getOntDagsUsingGET(req: operations.GETOntDagsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETOntDagsUsingGETResponse>;
    /**
     * Returns term for Accession ID
     */
    getTermUsingGET(req: operations.GETTermUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETTermUsingGETResponse>;
    /**
     * Returns true or false for terms
     */
    isDescendantOfUsingGET(req: operations.IsDescendantOfUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.IsDescendantOfUsingGETResponse>;
}
