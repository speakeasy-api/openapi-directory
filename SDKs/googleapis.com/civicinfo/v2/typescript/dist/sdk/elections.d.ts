import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Elections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List of available elections to query.
     */
    civicinfoElectionsElectionQuery(req: operations.CivicinfoElectionsElectionQueryRequest, config?: AxiosRequestConfig): Promise<operations.CivicinfoElectionsElectionQueryResponse>;
    /**
     * Looks up information relevant to a voter based on the voter's registered address.
     */
    civicinfoElectionsVoterInfoQuery(req: operations.CivicinfoElectionsVoterInfoQueryRequest, config?: AxiosRequestConfig): Promise<operations.CivicinfoElectionsVoterInfoQueryResponse>;
}
