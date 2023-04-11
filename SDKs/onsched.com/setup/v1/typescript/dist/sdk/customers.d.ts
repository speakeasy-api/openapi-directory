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
     * List Customers
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1Customers(req: operations.GetSetupV1CustomersRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CustomersResponse>;
    /**
     * Get Customer
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /setup/v1/customers</i> endpoint.</p>
     */
    getSetupV1CustomersId(req: operations.GetSetupV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CustomersIdResponse>;
    /**
     * Get Customer Data
     *
     * @remarks
     * <p>Use this endpoint to return the <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's using the <i>GET /setup/v1/customers</i> endpoint.</p>
     */
    getSetupV1CustomersIdPrivacy(req: operations.GetSetupV1CustomersIdPrivacyRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CustomersIdPrivacyResponse>;
}
