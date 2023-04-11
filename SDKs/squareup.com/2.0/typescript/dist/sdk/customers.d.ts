import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * AddGroupToCustomer
     *
     * @remarks
     * Adds a group membership to a customer.
     *
     * The customer is identified by the `customer_id` value
     * and the customer group is identified by the `group_id` value.
     */
    addGroupToCustomer(req: operations.AddGroupToCustomerRequest, security: operations.AddGroupToCustomerSecurity, config?: AxiosRequestConfig): Promise<operations.AddGroupToCustomerResponse>;
    /**
     * CreateCustomer
     *
     * @remarks
     * Creates a new customer for a business.
     *
     * You must provide at least one of the following values in your request to this
     * endpoint:
     *
     * - `given_name`
     * - `family_name`
     * - `company_name`
     * - `email_address`
     * - `phone_number`
     */
    createCustomer(req: shared.CreateCustomerRequest, security: operations.CreateCustomerSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCustomerResponse>;
    /**
     * CreateCustomerCard
     *
     * @remarks
     * Adds a card on file to an existing customer.
     *
     * As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
     * calls with the same card nonce return the same card record that was created
     * with the provided nonce during the _first_ call.
     */
    createCustomerCard(req: operations.CreateCustomerCardRequest, security: operations.CreateCustomerCardSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCustomerCardResponse>;
    /**
     * DeleteCustomer
     *
     * @remarks
     * Deletes a customer profile from a business. This operation also unlinks any associated cards on file.
     *
     * As a best practice, you should include the `version` field in the request to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control. The value must be set to the current version of the customer profile.
     *
     * To delete a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.
     */
    deleteCustomer(req: operations.DeleteCustomerRequest, security: operations.DeleteCustomerSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerResponse>;
    /**
     * DeleteCustomerCard
     *
     * @remarks
     * Removes a card on file from a customer.
     */
    deleteCustomerCard(req: operations.DeleteCustomerCardRequest, security: operations.DeleteCustomerCardSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerCardResponse>;
    /**
     * ListCustomers
     *
     * @remarks
     * Lists customer profiles associated with a Square account.
     *
     * Under normal operating conditions, newly created or updated customer profiles become available
     * for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
     * profiles can take closer to one minute or longer, especially during network incidents and outages.
     */
    listCustomers(req: operations.ListCustomersRequest, security: operations.ListCustomersSecurity, config?: AxiosRequestConfig): Promise<operations.ListCustomersResponse>;
    /**
     * RemoveGroupFromCustomer
     *
     * @remarks
     * Removes a group membership from a customer.
     *
     * The customer is identified by the `customer_id` value
     * and the customer group is identified by the `group_id` value.
     */
    removeGroupFromCustomer(req: operations.RemoveGroupFromCustomerRequest, security: operations.RemoveGroupFromCustomerSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveGroupFromCustomerResponse>;
    /**
     * RetrieveCustomer
     *
     * @remarks
     * Returns details for a single customer.
     */
    retrieveCustomer(req: operations.RetrieveCustomerRequest, security: operations.RetrieveCustomerSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveCustomerResponse>;
    /**
     * SearchCustomers
     *
     * @remarks
     * Searches the customer profiles associated with a Square account using a supported query filter.
     *
     * Calling `SearchCustomers` without any explicit query filter returns all
     * customer profiles ordered alphabetically based on `given_name` and
     * `family_name`.
     *
     * Under normal operating conditions, newly created or updated customer profiles become available
     * for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
     * profiles can take closer to one minute or longer, especially during network incidents and outages.
     */
    searchCustomers(req: shared.SearchCustomersRequest, security: operations.SearchCustomersSecurity, config?: AxiosRequestConfig): Promise<operations.SearchCustomersResponse>;
    /**
     * UpdateCustomer
     *
     * @remarks
     * Updates a customer profile. To change an attribute, specify the new value. To remove an attribute, specify the value as an empty string or empty object.
     *
     * As a best practice, you should include the `version` field in the request to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control. The value must be set to the current version of the customer profile.
     *
     * To update a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.
     *
     * You cannot use this endpoint to change cards on file. To make changes, use the [Cards API](https://developer.squareup.com/reference/square_2021-08-18/cards-api) or [Gift Cards API](https://developer.squareup.com/reference/square_2021-08-18/gift-cards-api).
     */
    updateCustomer(req: operations.UpdateCustomerRequest, security: operations.UpdateCustomerSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCustomerResponse>;
}
