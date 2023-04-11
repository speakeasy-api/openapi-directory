import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerAdditionalFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Customer Additional Field.
     */
    deleteCustomersIdFieldsFieldId(req: operations.DeleteCustomersIdFieldsFieldIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomersIdFieldsFieldIdResponse>;
    /**
     * Retrieves the Customer Additional Field of a Customer.
     */
    getCustomersIdFields(req: operations.GetCustomersIdFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersIdFieldsResponse>;
    /**
     * Retrieve a single Customer Additional Field.
     */
    getCustomersIdFieldsFieldId(req: operations.GetCustomersIdFieldsFieldIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersIdFieldsFieldIdResponse>;
    /**
     * Adds Customer Additional Fields to a Customer.
     */
    postCustomersIdFields(req: operations.PostCustomersIdFieldsRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomersIdFieldsResponse>;
    /**
     * Update a Customer Additional Field.
     */
    putCustomersIdFieldsFieldId(req: operations.PutCustomersIdFieldsFieldIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomersIdFieldsFieldIdResponse>;
}
