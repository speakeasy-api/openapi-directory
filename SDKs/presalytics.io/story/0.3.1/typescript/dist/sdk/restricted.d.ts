import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Restricted {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * collaboratorsPost - Collborators: Bulk Update (Admin Only)
     *
     * Allows for bulk updates on collaborator metadata.  Restricted to internal admins
    **/
    collaboratorsPost(req: operations.CollaboratorsPostRequest, config?: AxiosRequestConfig): Promise<operations.CollaboratorsPostResponse>;
}
