import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Committees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * committeeDetailCommitteesCommitteeIdGet - Committee Detail
     *
     * Get details on a single committee by ID.
    **/
    committeeDetailCommitteesCommitteeIdGet(req: operations.CommitteeDetailCommitteesCommitteeIdGetRequest, config?: AxiosRequestConfig): Promise<operations.CommitteeDetailCommitteesCommitteeIdGetResponse>;
    /**
     * committeeListCommitteesGet - Committee List
    **/
    committeeListCommitteesGet(req: operations.CommitteeListCommitteesGetRequest, config?: AxiosRequestConfig): Promise<operations.CommitteeListCommitteesGetResponse>;
}
