import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Nodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Signs a device.
     */
    sasportalNodesDevicesSignDevice(req: operations.SasportalNodesDevicesSignDeviceRequest, security: operations.SasportalNodesDevicesSignDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesDevicesSignDeviceResponse>;
    /**
     * Updates a signed device.
     */
    sasportalNodesDevicesUpdateSigned(req: operations.SasportalNodesDevicesUpdateSignedRequest, security: operations.SasportalNodesDevicesUpdateSignedSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesDevicesUpdateSignedResponse>;
    /**
     * Deletes a node.
     */
    sasportalNodesNodesDelete(req: operations.SasportalNodesNodesDeleteRequest, security: operations.SasportalNodesNodesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDeleteResponse>;
    /**
     * Creates a new deployment.
     */
    sasportalNodesNodesDeploymentsCreate(req: operations.SasportalNodesNodesDeploymentsCreateRequest, security: operations.SasportalNodesNodesDeploymentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDeploymentsCreateResponse>;
    /**
     * Lists deployments.
     */
    sasportalNodesNodesDeploymentsList(req: operations.SasportalNodesNodesDeploymentsListRequest, security: operations.SasportalNodesNodesDeploymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDeploymentsListResponse>;
    /**
     * Creates a device under a node or customer.
     */
    sasportalNodesNodesDevicesCreate(req: operations.SasportalNodesNodesDevicesCreateRequest, security: operations.SasportalNodesNodesDevicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDevicesCreateResponse>;
    /**
     * Creates a signed device under a node or customer.
     */
    sasportalNodesNodesDevicesCreateSigned(req: operations.SasportalNodesNodesDevicesCreateSignedRequest, security: operations.SasportalNodesNodesDevicesCreateSignedSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDevicesCreateSignedResponse>;
    /**
     * Lists devices under a node or customer.
     */
    sasportalNodesNodesDevicesList(req: operations.SasportalNodesNodesDevicesListRequest, security: operations.SasportalNodesNodesDevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDevicesListResponse>;
    /**
     * Returns a requested node.
     */
    sasportalNodesNodesGet(req: operations.SasportalNodesNodesGetRequest, security: operations.SasportalNodesNodesGetSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesGetResponse>;
    /**
     * Moves a node under another node or customer.
     */
    sasportalNodesNodesMove(req: operations.SasportalNodesNodesMoveRequest, security: operations.SasportalNodesNodesMoveSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesMoveResponse>;
    /**
     * Creates a new node.
     */
    sasportalNodesNodesNodesCreate(req: operations.SasportalNodesNodesNodesCreateRequest, security: operations.SasportalNodesNodesNodesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesNodesCreateResponse>;
    /**
     * Lists nodes.
     */
    sasportalNodesNodesNodesList(req: operations.SasportalNodesNodesNodesListRequest, security: operations.SasportalNodesNodesNodesListSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesNodesListResponse>;
    /**
     * Updates an existing node.
     */
    sasportalNodesNodesPatch(req: operations.SasportalNodesNodesPatchRequest, security: operations.SasportalNodesNodesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesPatchResponse>;
}
