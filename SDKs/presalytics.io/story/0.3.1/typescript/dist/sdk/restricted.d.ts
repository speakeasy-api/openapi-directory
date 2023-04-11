import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Restricted {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Collborators: Bulk Update (Admin Only)
     *
     * @remarks
     * Allows for bulk updates on collaborator metadata.  Restricted to internal admins
     */
    collaboratorsPost(req: shared.CollaboratorBulkUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CollaboratorsPostResponse>;
}
