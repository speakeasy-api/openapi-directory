import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MachineTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of machine types.
     */
    computeMachineTypesAggregatedList(req: operations.ComputeMachineTypesAggregatedListRequest, security: operations.ComputeMachineTypesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeMachineTypesAggregatedListResponse>;
    /**
     * Returns the specified machine type.
     */
    computeMachineTypesGet(req: operations.ComputeMachineTypesGetRequest, security: operations.ComputeMachineTypesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeMachineTypesGetResponse>;
    /**
     * Retrieves a list of machine types available to the specified project.
     */
    computeMachineTypesList(req: operations.ComputeMachineTypesListRequest, security: operations.ComputeMachineTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeMachineTypesListResponse>;
}
