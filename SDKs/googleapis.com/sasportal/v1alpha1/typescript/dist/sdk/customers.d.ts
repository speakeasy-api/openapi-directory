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
    sasportalCustomersList(req: operations.SasportalCustomersListRequest, security: operations.SasportalCustomersListSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalCustomersListResponse>;
    /**
     * Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.
     */
    sasportalCustomersProvisionDeployment(req: operations.SasportalCustomersProvisionDeploymentRequest, security: operations.SasportalCustomersProvisionDeploymentSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalCustomersProvisionDeploymentResponse>;
}
