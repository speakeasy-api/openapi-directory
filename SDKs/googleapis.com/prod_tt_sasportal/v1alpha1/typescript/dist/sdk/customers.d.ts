import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list of requested customers.
     */
    prodTtSasportalCustomersList(req: operations.ProdTtSasportalCustomersListRequest, security: operations.ProdTtSasportalCustomersListSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalCustomersListResponse>;
    /**
     * Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.
     */
    prodTtSasportalCustomersProvisionDeployment(req: operations.ProdTtSasportalCustomersProvisionDeploymentRequest, security: operations.ProdTtSasportalCustomersProvisionDeploymentSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalCustomersProvisionDeploymentResponse>;
}
