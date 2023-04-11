import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Resources
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Resources</b> associated with a business location. If not specified, the business location defaults to the primary business location. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getConsumerV1Resources(req: operations.GetConsumerV1ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcesResponse>;
    /**
     * Get Resource
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the <i>GET consumer/v1/resources</i> endpoint. </p>
     */
    getConsumerV1ResourcesId(req: operations.GetConsumerV1ResourcesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcesIdResponse>;
    /**
     * Get Resource Linked Services
     *
     * @remarks
     * <p>Use this endpoint to get a <b>List of Linked Services</b> associated with the resource requested. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, the maximum limit is 100. Use the other query parameters to filter the results further.</p>
     * <p>Resource linked services are used to explicitly define the services that can be booked for a specified resource. By default, all services are bookable for any resource. For more information: <a href="https://docs.onsched.com/docs/linked-services">Linked Services Overview</a></p>
     */
    getConsumerV1ResourcesIdServices(req: operations.GetConsumerV1ResourcesIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcesIdServicesResponse>;
}
