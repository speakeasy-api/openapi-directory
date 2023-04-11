import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Routes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * View route names and numbers for all routes
     */
    routesOneOrMoreRoutes(req: operations.RoutesOneOrMoreRoutesRequest, config?: AxiosRequestConfig): Promise<operations.RoutesOneOrMoreRoutesResponse>;
    /**
     * View route name and number for specific route ID
     */
    routesRouteFromId(req: operations.RoutesRouteFromIdRequest, config?: AxiosRequestConfig): Promise<operations.RoutesRouteFromIdResponse>;
}
