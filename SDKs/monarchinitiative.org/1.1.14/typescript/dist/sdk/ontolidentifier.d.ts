import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Retrieve IDs for labels
 */
export declare class OntolIdentifier {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetches a map from CURIEs/IDs to labels
     */
    getOntolIdentifierResource(req: operations.GetOntolIdentifierResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetOntolIdentifierResourceResponse>;
    /**
     * Fetches a map from CURIEs/IDs to labels
     *
     * @remarks
     * Takes 'label' list argument either as a querystring argument or as a key
     * in the POST body when content-type is application/json.
     */
    postOntolIdentifierResource(req: operations.PostOntolIdentifierResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostOntolIdentifierResourceResponse>;
}
