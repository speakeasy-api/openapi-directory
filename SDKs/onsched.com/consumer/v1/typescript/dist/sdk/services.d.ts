import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getConsumerV1Services - Returns a list of services.
     *
     * Use this endpoint to get services available at your business location and/or company. If no locationId is provided the primary company will be queried.
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size.
     * Default offset is <b>0</b>, and limit is <b>20</b>. Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1Services(req: operations.GetConsumerV1ServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesResponse>;
    /**
     * getConsumerV1ServicesAllocationsId - Get a service allocation
    **/
    getConsumerV1ServicesAllocationsId(req: operations.GetConsumerV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesAllocationsIdResponse>;
    /**
     * getConsumerV1ServicesId - Returns a service object.
     *
     * The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
     * or the GET consumer/v1/appointments end point.
    **/
    getConsumerV1ServicesId(req: operations.GetConsumerV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesIdResponse>;
    /**
     * getConsumerV1ServicesIdAllocations - Returns a list of service allocations.
     *
     * This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event
     * against the service.
     *
     * You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
     * pass in the service id.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1ServicesIdAllocations(req: operations.GetConsumerV1ServicesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesIdAllocationsResponse>;
    /**
     * getConsumerV1ServicesIdResources - Returns a list of resources.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1ServicesIdResources(req: operations.GetConsumerV1ServicesIdResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesIdResourcesResponse>;
}
