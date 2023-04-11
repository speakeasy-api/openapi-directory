import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/nascar/v2", "https://azure-api.sportsdata.io/nascar/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Driver Details
     */
    driverDetails(req: operations.DriverDetailsRequest, config?: AxiosRequestConfig): Promise<operations.DriverDetailsResponse>;
    /**
     * Driver Race Projections (Entry List)
     */
    driverRaceProjectionsEntryList(req: operations.DriverRaceProjectionsEntryListRequest, config?: AxiosRequestConfig): Promise<operations.DriverRaceProjectionsEntryListResponse>;
    /**
     * Drivers
     */
    drivers(req: operations.DriversRequest, config?: AxiosRequestConfig): Promise<operations.DriversResponse>;
    /**
     * Race Results
     */
    raceResults(req: operations.RaceResultsRequest, config?: AxiosRequestConfig): Promise<operations.RaceResultsResponse>;
    /**
     * Races / Schedule
     */
    racesSchedule(req: operations.RacesScheduleRequest, config?: AxiosRequestConfig): Promise<operations.RacesScheduleResponse>;
    /**
     * Series
     */
    series(req: operations.SeriesRequest, config?: AxiosRequestConfig): Promise<operations.SeriesResponse>;
}
