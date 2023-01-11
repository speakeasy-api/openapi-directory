import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Routes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * routesOneOrMoreRoutes - View route names and numbers for all routes
    **/
    routesOneOrMoreRoutes(req: operations.RoutesOneOrMoreRoutesRequest, config?: AxiosRequestConfig): Promise<operations.RoutesOneOrMoreRoutesResponse>;
    /**
     * routesRouteFromId - View route name and number for specific route ID
    **/
    routesRouteFromId(req: operations.RoutesRouteFromIdRequest, config?: AxiosRequestConfig): Promise<operations.RoutesRouteFromIdResponse>;
}
