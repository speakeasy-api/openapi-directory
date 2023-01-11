import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getConsumerV1Resources - Returns a list of resources.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1Resources(req: operations.GetConsumerV1ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcesResponse>;
    /**
     * getConsumerV1ResourcesId - Returns a resource object.
     *
     * The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
     * or the GET consumer/v1/appointments end point.
    **/
    getConsumerV1ResourcesId(req: operations.GetConsumerV1ResourcesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcesIdResponse>;
    /**
     * getConsumerV1ResourcesIdServices - Returns a list of resource services.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
     * Resource services are used to explicitly define the services that can be booked for a resource. If no resource services are defined then by
     * default all services can be booked for the resource.
    **/
    getConsumerV1ResourcesIdServices(req: operations.GetConsumerV1ResourcesIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcesIdServicesResponse>;
}
