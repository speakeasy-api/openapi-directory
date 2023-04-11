import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Calls that return district, or district-related information.
 */
export declare class District {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a list of events in the given district.
     */
    getDistrictEvents(req: operations.GetDistrictEventsRequest, security: operations.GetDistrictEventsSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictEventsResponse>;
    /**
     * Gets a list of event keys for events in the given district.
     */
    getDistrictEventsKeys(req: operations.GetDistrictEventsKeysRequest, security: operations.GetDistrictEventsKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictEventsKeysResponse>;
    /**
     * Gets a short-form list of events in the given district.
     */
    getDistrictEventsSimple(req: operations.GetDistrictEventsSimpleRequest, security: operations.GetDistrictEventsSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictEventsSimpleResponse>;
    /**
     * Gets a list of team district rankings for the given district.
     */
    getDistrictRankings(req: operations.GetDistrictRankingsRequest, security: operations.GetDistrictRankingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictRankingsResponse>;
    /**
     * Gets a list of `Team` objects that competed in events in the given district.
     */
    getDistrictTeams(req: operations.GetDistrictTeamsRequest, security: operations.GetDistrictTeamsSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictTeamsResponse>;
    /**
     * Gets a list of `Team` objects that competed in events in the given district.
     */
    getDistrictTeamsKeys(req: operations.GetDistrictTeamsKeysRequest, security: operations.GetDistrictTeamsKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictTeamsKeysResponse>;
    /**
     * Gets a short-form list of `Team` objects that competed in events in the given district.
     */
    getDistrictTeamsSimple(req: operations.GetDistrictTeamsSimpleRequest, security: operations.GetDistrictTeamsSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictTeamsSimpleResponse>;
    /**
     * Gets a list of districts and their corresponding district key, for the given year.
     */
    getDistrictsByYear(req: operations.GetDistrictsByYearRequest, security: operations.GetDistrictsByYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictsByYearResponse>;
    /**
     * Gets a list of team rankings for the Event.
     */
    getEventDistrictPoints(req: operations.GetEventDistrictPointsRequest, security: operations.GetEventDistrictPointsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventDistrictPointsResponse>;
    /**
     * Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
     */
    getTeamDistricts(req: operations.GetTeamDistrictsRequest, security: operations.GetTeamDistrictsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamDistrictsResponse>;
}
