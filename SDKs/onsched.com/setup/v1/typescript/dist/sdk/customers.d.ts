import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSetupV1Customers - Returns a list of customers.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Customers(req: operations.GetSetupV1CustomersRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CustomersResponse>;
    /**
     * getSetupV1CustomersId - Returns a customer object.
     *
     * The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
     * or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
    **/
    getSetupV1CustomersId(req: operations.GetSetupV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CustomersIdResponse>;
    /**
     * getSetupV1CustomersIdPrivacy - Returns a customer privacy report data.
     *
     * The result returned contains customer data and customer appointments data
    **/
    getSetupV1CustomersIdPrivacy(req: operations.GetSetupV1CustomersIdPrivacyRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CustomersIdPrivacyResponse>;
}
