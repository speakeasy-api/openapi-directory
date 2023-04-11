import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateCustomerGroup
     *
     * @remarks
     * Creates a new customer group for a business.
     *
     * The request must include the `name` value of the group.
     */
    createCustomerGroup(req: shared.CreateCustomerGroupRequest, security: operations.CreateCustomerGroupSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCustomerGroupResponse>;
    /**
     * DeleteCustomerGroup
     *
     * @remarks
     * Deletes a customer group as identified by the `group_id` value.
     */
    deleteCustomerGroup(req: operations.DeleteCustomerGroupRequest, security: operations.DeleteCustomerGroupSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerGroupResponse>;
    /**
     * ListCustomerGroups
     *
     * @remarks
     * Retrieves the list of customer groups of a business.
     */
    listCustomerGroups(req: operations.ListCustomerGroupsRequest, security: operations.ListCustomerGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.ListCustomerGroupsResponse>;
    /**
     * RetrieveCustomerGroup
     *
     * @remarks
     * Retrieves a specific customer group as identified by the `group_id` value.
     */
    retrieveCustomerGroup(req: operations.RetrieveCustomerGroupRequest, security: operations.RetrieveCustomerGroupSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveCustomerGroupResponse>;
    /**
     * UpdateCustomerGroup
     *
     * @remarks
     * Updates a customer group as identified by the `group_id` value.
     */
    updateCustomerGroup(req: operations.UpdateCustomerGroupRequest, security: operations.UpdateCustomerGroupSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCustomerGroupResponse>;
}
