import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { ClusterApi } from "./clusterapi";
import { GeocodingApi } from "./geocodingapi";
import { IsochroneApi } from "./isochroneapi";
import { MapMatchingApi } from "./mapmatchingapi";
import { MatrixApi } from "./matrixapi";
import { RouteOptimizationApi } from "./routeoptimizationapi";
import { RoutingApi } from "./routingapi";
export declare const ServerList: readonly ["https://graphhopper.com/api/1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    clusterAPI: ClusterApi;
    geocodingAPI: GeocodingApi;
    isochroneAPI: IsochroneApi;
    mapMatchingAPI: MapMatchingApi;
    matrixAPI: MatrixApi;
    routeOptimizationAPI: RouteOptimizationApi;
    routingAPI: RoutingApi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
