import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ontology {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOntDagsUsingGet - Returns child and parent terms for Accession ID
    **/
    getOntDagsUsingGet(req: operations.GetOntDagsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetOntDagsUsingGetResponse>;
    /**
     * getTermUsingGet - Returns term for Accession ID
    **/
    getTermUsingGet(req: operations.GetTermUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTermUsingGetResponse>;
    /**
     * isDescendantOfUsingGet - Returns true or false for terms
    **/
    isDescendantOfUsingGet(req: operations.IsDescendantOfUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.IsDescendantOfUsingGetResponse>;
}
