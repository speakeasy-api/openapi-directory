import { AccidentStats } from "./accidentstats";
import { AirQuality } from "./airquality";
import { BikePoint } from "./bikepoint";
import { Cabwise } from "./cabwise";
import { Journey } from "./journey";
import { Line } from "./line";
import { Mode } from "./mode";
import { Occupancy } from "./occupancy";
import { Place } from "./place";
import { Road } from "./road";
import { Search } from "./search";
import { StopPoint } from "./stoppoint";
import { TravelTime } from "./traveltime";
import { Vehicle } from "./vehicle";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.digital.tfl.gov.uk"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Our unified API brings together data across all modes of transport into a single RESTful API. This API provides access to the most highly requested realtime and status infomation across all the modes of transport, in a single and consistent way. Access to the developer documentation is available at https://api.tfl.gov.uk
 */
export declare class SDK {
    accidentStats: AccidentStats;
    airQuality: AirQuality;
    bikePoint: BikePoint;
    cabwise: Cabwise;
    journey: Journey;
    line: Line;
    mode: Mode;
    occupancy: Occupancy;
    place: Place;
    road: Road;
    search: Search;
    stopPoint: StopPoint;
    travelTime: TravelTime;
    vehicle: Vehicle;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
