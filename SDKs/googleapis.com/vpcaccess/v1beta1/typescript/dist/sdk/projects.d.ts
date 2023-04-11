import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a Serverless VPC Access connector, returns an operation.
     */
    vpcaccessProjectsLocationsConnectorsCreate(req: operations.VpcaccessProjectsLocationsConnectorsCreateRequest, security: operations.VpcaccessProjectsLocationsConnectorsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VpcaccessProjectsLocationsConnectorsCreateResponse>;
    /**
     * Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
     */
    vpcaccessProjectsLocationsConnectorsDelete(req: operations.VpcaccessProjectsLocationsConnectorsDeleteRequest, security: operations.VpcaccessProjectsLocationsConnectorsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.VpcaccessProjectsLocationsConnectorsDeleteResponse>;
    /**
     * Lists Serverless VPC Access connectors.
     */
    vpcaccessProjectsLocationsConnectorsList(req: operations.VpcaccessProjectsLocationsConnectorsListRequest, security: operations.VpcaccessProjectsLocationsConnectorsListSecurity, config?: AxiosRequestConfig): Promise<operations.VpcaccessProjectsLocationsConnectorsListResponse>;
    /**
     * Updates a Serverless VPC Access connector, returns an operation.
     */
    vpcaccessProjectsLocationsConnectorsPatch(req: operations.VpcaccessProjectsLocationsConnectorsPatchRequest, security: operations.VpcaccessProjectsLocationsConnectorsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.VpcaccessProjectsLocationsConnectorsPatchResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    vpcaccessProjectsLocationsList(req: operations.VpcaccessProjectsLocationsListRequest, security: operations.VpcaccessProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.VpcaccessProjectsLocationsListResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    vpcaccessProjectsLocationsOperationsGet(req: operations.VpcaccessProjectsLocationsOperationsGetRequest, security: operations.VpcaccessProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.VpcaccessProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    vpcaccessProjectsLocationsOperationsList(req: operations.VpcaccessProjectsLocationsOperationsListRequest, security: operations.VpcaccessProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.VpcaccessProjectsLocationsOperationsListResponse>;
}
