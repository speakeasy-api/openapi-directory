import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServiceGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getConsumerV1Servicegroups - Returns a list of service groups.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1Servicegroups(req: operations.GetConsumerV1ServicegroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicegroupsResponse>;
    /**
     * getConsumerV1ServicegroupsId - Returns a serviceGroup object.
     *
     * The result returned is a single serviceGroup object. An id is required to find the serviceGroup. Find serviceGroup id's using
     * the GET consumer/v1/servicegroups end point,
    **/
    getConsumerV1ServicegroupsId(req: operations.GetConsumerV1ServicegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicegroupsIdResponse>;
}
