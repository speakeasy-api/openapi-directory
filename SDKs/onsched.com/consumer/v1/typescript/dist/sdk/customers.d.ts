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
     * Delete Customer
     *
     * @remarks
     * <p>Use this endpoint to permanently <b>Delete</b> a Customer object. A valid <b>customer id</b> is required.</p>
     */
    deleteConsumerV1CustomersId(req: operations.DeleteConsumerV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConsumerV1CustomersIdResponse>;
    /**
     * List Customers
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getConsumerV1Customers(req: operations.GetConsumerV1CustomersRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersResponse>;
    /**
     * Get Customer Booking Fields
     *
     * @remarks
     * <p>Use this endpoint to return <b>Customer Booking Fields</b>. Customer booking fields are stored with each customer object. They are used when the information collected during the booking is for a particular customer. Customer Booking Fields include any custom customer fields you define and want to capture with the Booking.</p>
     */
    getConsumerV1CustomersBookingfields(req: operations.GetConsumerV1CustomersBookingfieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersBookingfieldsResponse>;
    /**
     * List Country Codes
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Countries with their associated Country Code</b>. Country codes are based on the 2-character ANSI standard. If your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>
     */
    getConsumerV1CustomersCountries(config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersCountriesResponse>;
    /**
     * Get Customer Custom Fields
     *
     * @remarks
     * <p>Use this endpoint to return <b>Customer Custom Fields</b>. Customer custom fields are stored with the customer object. They are used when the information collected during the booking is specific to a particular customer.</p>
     */
    getConsumerV1CustomersCustomfields(req: operations.GetConsumerV1CustomersCustomfieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersCustomfieldsResponse>;
    /**
     * List Country States
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Countries with their associated State Codes</b>. Supply a country code to filter results further. If states for your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>
     */
    getConsumerV1CustomersStates(req: operations.GetConsumerV1CustomersStatesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersStatesResponse>;
    /**
     * Get Customer
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /consumer/v1/customers</i> endpoint.</p>
     */
    getConsumerV1CustomersId(req: operations.GetConsumerV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersIdResponse>;
    /**
     * Create Customer
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a new Customer. A customer object is automatically created with the first appointment booking if it doesn't already exist. If not specified, the business location id defaults to the primary business location.</p>
     * <p>Required Fields: <b>Email</b> and <b>Name</b> or <b>First and Lastname</b> depending on customer type. Type 0 = Person, Type 1 = Business. For type 0, the firstname and lastname fields are used. For type 1, the Name field is used, and the name field is also used to populate the lastname.</p>
     */
    postConsumerV1Customers(req: shared.CustomerInputModel, config?: AxiosRequestConfig): Promise<operations.PostConsumerV1CustomersResponse>;
    /**
     * Update Customer
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a Customer object. A valid <b>customer id</b> is required. Note: Blank fields are not changed.</p>
     */
    putConsumerV1CustomersId(req: operations.PutConsumerV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1CustomersIdResponse>;
}
