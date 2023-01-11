import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getConsumerV1Locations - Returns a list of business locations.
     *
     * Use this api end point if you have multiple business locations in your company.
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
     *
     * To leverage the search by serviceId, setup locationService's see endpoints in this controller.
     * Location services allow you to exclude company scoped services for locations that do not offer them.
     * You can explicitly define which services are offered or if none are defined then all services are offererd
    **/
    getConsumerV1Locations(req: operations.GetConsumerV1LocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1LocationsResponse>;
    /**
     * getConsumerV1LocationsId - Returns a business location object.
     *
     * The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
    **/
    getConsumerV1LocationsId(req: operations.GetConsumerV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1LocationsIdResponse>;
}
