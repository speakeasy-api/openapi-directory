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
    prodTtSasportalNodesDevicesSignDevice(req: operations.ProdTtSasportalNodesDevicesSignDeviceRequest, security: operations.ProdTtSasportalNodesDevicesSignDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesDevicesSignDeviceResponse>;
    /**
     * Updates a signed device.
     */
    prodTtSasportalNodesDevicesUpdateSigned(req: operations.ProdTtSasportalNodesDevicesUpdateSignedRequest, security: operations.ProdTtSasportalNodesDevicesUpdateSignedSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesDevicesUpdateSignedResponse>;
    /**
     * Deletes a node.
     */
    prodTtSasportalNodesNodesDelete(req: operations.ProdTtSasportalNodesNodesDeleteRequest, security: operations.ProdTtSasportalNodesNodesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDeleteResponse>;
    /**
     * Creates a new deployment.
     */
    prodTtSasportalNodesNodesDeploymentsCreate(req: operations.ProdTtSasportalNodesNodesDeploymentsCreateRequest, security: operations.ProdTtSasportalNodesNodesDeploymentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDeploymentsCreateResponse>;
    /**
     * Lists deployments.
     */
    prodTtSasportalNodesNodesDeploymentsList(req: operations.ProdTtSasportalNodesNodesDeploymentsListRequest, security: operations.ProdTtSasportalNodesNodesDeploymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDeploymentsListResponse>;
    /**
     * Creates a device under a node or customer.
     */
    prodTtSasportalNodesNodesDevicesCreate(req: operations.ProdTtSasportalNodesNodesDevicesCreateRequest, security: operations.ProdTtSasportalNodesNodesDevicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDevicesCreateResponse>;
    /**
     * Creates a signed device under a node or customer.
     */
    prodTtSasportalNodesNodesDevicesCreateSigned(req: operations.ProdTtSasportalNodesNodesDevicesCreateSignedRequest, security: operations.ProdTtSasportalNodesNodesDevicesCreateSignedSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDevicesCreateSignedResponse>;
    /**
     * Lists devices under a node or customer.
     */
    prodTtSasportalNodesNodesDevicesList(req: operations.ProdTtSasportalNodesNodesDevicesListRequest, security: operations.ProdTtSasportalNodesNodesDevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDevicesListResponse>;
    /**
     * Returns a requested node.
     */
    prodTtSasportalNodesNodesGet(req: operations.ProdTtSasportalNodesNodesGetRequest, security: operations.ProdTtSasportalNodesNodesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesGetResponse>;
    /**
     * Moves a node under another node or customer.
     */
    prodTtSasportalNodesNodesMove(req: operations.ProdTtSasportalNodesNodesMoveRequest, security: operations.ProdTtSasportalNodesNodesMoveSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesMoveResponse>;
    /**
     * Creates a new node.
     */
    prodTtSasportalNodesNodesNodesCreate(req: operations.ProdTtSasportalNodesNodesNodesCreateRequest, security: operations.ProdTtSasportalNodesNodesNodesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesNodesCreateResponse>;
    /**
     * Lists nodes.
     */
    prodTtSasportalNodesNodesNodesList(req: operations.ProdTtSasportalNodesNodesNodesListRequest, security: operations.ProdTtSasportalNodesNodesNodesListSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesNodesListResponse>;
    /**
     * Updates an existing node.
     */
    prodTtSasportalNodesNodesPatch(req: operations.ProdTtSasportalNodesNodesPatchRequest, security: operations.ProdTtSasportalNodesNodesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesPatchResponse>;
}
