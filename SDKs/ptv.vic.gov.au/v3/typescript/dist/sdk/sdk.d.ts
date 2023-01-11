import { AxiosInstance } from "axios";
import { Departures } from "./departures";
import { Directions } from "./directions";
import { Disruptions } from "./disruptions";
import { FareEstimate } from "./fareestimate";
import { Outlets } from "./outlets";
import { Patterns } from "./patterns";
import { RouteTypes } from "./routetypes";
import { Routes } from "./routes";
import { Runs } from "./runs";
import { Search } from "./search";
import { Stops } from "./stops";
export declare const ServerList: readonly ["http://timetableapi.ptv.vic.gov.au", "https://timetableapi.ptv.vic.gov.au"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    departures: Departures;
    directions: Directions;
    disruptions: Disruptions;
    fareEstimate: FareEstimate;
    outlets: Outlets;
    patterns: Patterns;
    routeTypes: RouteTypes;
    routes: Routes;
    runs: Runs;
    search: Search;
    stops: Stops;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
