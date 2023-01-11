import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RouteTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * routeTypesGetRouteTypes - View all route types and their names
    **/
    routeTypesGetRouteTypes(req: operations.RouteTypesGetRouteTypesRequest, config?: AxiosRequestConfig): Promise<operations.RouteTypesGetRouteTypesResponse>;
}
