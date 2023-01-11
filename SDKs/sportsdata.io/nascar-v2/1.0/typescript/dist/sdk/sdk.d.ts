import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://api.sportsdata.io", "https://api.sportsdata.io", "http://azure-api.sportsdata.io", "https://azure-api.sportsdata.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * driverDetails - Driver Details
    **/
    driverDetails(req: operations.DriverDetailsRequest, config?: AxiosRequestConfig): Promise<operations.DriverDetailsResponse>;
    /**
     * driverRaceProjectionsEntryList - Driver Race Projections (Entry List)
    **/
    driverRaceProjectionsEntryList(req: operations.DriverRaceProjectionsEntryListRequest, config?: AxiosRequestConfig): Promise<operations.DriverRaceProjectionsEntryListResponse>;
    /**
     * drivers - Drivers
    **/
    drivers(req: operations.DriversRequest, config?: AxiosRequestConfig): Promise<operations.DriversResponse>;
    /**
     * raceResults - Race Results
    **/
    raceResults(req: operations.RaceResultsRequest, config?: AxiosRequestConfig): Promise<operations.RaceResultsResponse>;
    /**
     * racesSchedule - Races / Schedule
    **/
    racesSchedule(req: operations.RacesScheduleRequest, config?: AxiosRequestConfig): Promise<operations.RacesScheduleResponse>;
    /**
     * series - Series
    **/
    series(req: operations.SeriesRequest, config?: AxiosRequestConfig): Promise<operations.SeriesResponse>;
}
