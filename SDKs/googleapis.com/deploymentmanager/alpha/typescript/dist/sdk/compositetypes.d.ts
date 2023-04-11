import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CompositeTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a composite type.
     */
    deploymentmanagerCompositeTypesDelete(req: operations.DeploymentmanagerCompositeTypesDeleteRequest, security: operations.DeploymentmanagerCompositeTypesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesDeleteResponse>;
    /**
     * Gets information about a specific composite type.
     */
    deploymentmanagerCompositeTypesGet(req: operations.DeploymentmanagerCompositeTypesGetRequest, security: operations.DeploymentmanagerCompositeTypesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesGetResponse>;
    /**
     * Creates a composite type.
     */
    deploymentmanagerCompositeTypesInsert(req: operations.DeploymentmanagerCompositeTypesInsertRequest, security: operations.DeploymentmanagerCompositeTypesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesInsertResponse>;
    /**
     * Lists all composite types for Deployment Manager.
     */
    deploymentmanagerCompositeTypesList(req: operations.DeploymentmanagerCompositeTypesListRequest, security: operations.DeploymentmanagerCompositeTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesListResponse>;
    /**
     * Patches a composite type.
     */
    deploymentmanagerCompositeTypesPatch(req: operations.DeploymentmanagerCompositeTypesPatchRequest, security: operations.DeploymentmanagerCompositeTypesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesPatchResponse>;
    /**
     * Updates a composite type.
     */
    deploymentmanagerCompositeTypesUpdate(req: operations.DeploymentmanagerCompositeTypesUpdateRequest, security: operations.DeploymentmanagerCompositeTypesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesUpdateResponse>;
}
