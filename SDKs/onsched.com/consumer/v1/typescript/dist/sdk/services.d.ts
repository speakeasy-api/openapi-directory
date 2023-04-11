import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Services
     *
     * @remarks
     * <p>Use this endpoint to <b>List Services</b> available at your business location and/or company. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getConsumerV1Services(req: operations.GetConsumerV1ServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesResponse>;
    /**
     * Get Service Allocation
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Service Allocation</b> object. A valid <b>serviceAllocation id</b> is required. Find service allocation id's by using the <i>GET/consumer /v1 /services /{id} /allocations</i> endpoint.</p>
     */
    getConsumerV1ServicesAllocationsId(req: operations.GetConsumerV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesAllocationsIdResponse>;
    /**
     * Get Service
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /consumer/v1/services</i> endpoint.</p>
     */
    getConsumerV1ServicesId(req: operations.GetConsumerV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesIdResponse>;
    /**
     * List Service Allocations
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Service Allocations</b> associated with the requested service. A valid <b>service id</b> is required. Allocations are used for Event type services/bookings. Retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service supply the service id. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://docs.onsched.com/reference/post_setup-v1-services-id-allocations">Create Service Allocations</a></p>
     */
    getConsumerV1ServicesIdAllocations(req: operations.GetConsumerV1ServicesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesIdAllocationsResponse>;
    /**
     * List Resources for Service
     *
     * @remarks
     * <p>Use this endpoint to return a list of <b>Resources that provide the Service requested</b>. A valid <b>service id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getConsumerV1ServicesIdResources(req: operations.GetConsumerV1ServicesIdResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesIdResourcesResponse>;
}
