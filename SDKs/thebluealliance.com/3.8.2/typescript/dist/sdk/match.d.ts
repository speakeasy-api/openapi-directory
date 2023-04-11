import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Calls that return match, or match-specific information.
 */
export declare class Match {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
     * *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
     * *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
     */
    getEventMatchTimeseries(req: operations.GetEventMatchTimeseriesRequest, security: operations.GetEventMatchTimeseriesSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventMatchTimeseriesResponse>;
    /**
     * Gets a list of matches for the given event.
     */
    getEventMatches(req: operations.GetEventMatchesRequest, security: operations.GetEventMatchesSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventMatchesResponse>;
    /**
     * Gets a list of match keys for the given event.
     */
    getEventMatchesKeys(req: operations.GetEventMatchesKeysRequest, security: operations.GetEventMatchesKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventMatchesKeysResponse>;
    /**
     * Gets a short-form list of matches for the given event.
     */
    getEventMatchesSimple(req: operations.GetEventMatchesSimpleRequest, security: operations.GetEventMatchesSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventMatchesSimpleResponse>;
    /**
     * Gets a `Match` object for the given match key.
     */
    getMatch(req: operations.GetMatchRequest, security: operations.GetMatchSecurity, config?: AxiosRequestConfig): Promise<operations.GetMatchResponse>;
    /**
     * Gets a short-form `Match` object for the given match key.
     */
    getMatchSimple(req: operations.GetMatchSimpleRequest, security: operations.GetMatchSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetMatchSimpleResponse>;
    /**
     * Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
     * *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
     * *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
     */
    getMatchTimeseries(req: operations.GetMatchTimeseriesRequest, security: operations.GetMatchTimeseriesSecurity, config?: AxiosRequestConfig): Promise<operations.GetMatchTimeseriesResponse>;
    /**
     * Gets Zebra MotionWorks data for a Match for the given match key.
     */
    getMatchZebra(req: operations.GetMatchZebraRequest, security: operations.GetMatchZebraSecurity, config?: AxiosRequestConfig): Promise<operations.GetMatchZebraResponse>;
    /**
     * Gets a list of matches for the given team and event.
     */
    getTeamEventMatches(req: operations.GetTeamEventMatchesRequest, security: operations.GetTeamEventMatchesSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventMatchesResponse>;
    /**
     * Gets a list of match keys for matches for the given team and event.
     */
    getTeamEventMatchesKeys(req: operations.GetTeamEventMatchesKeysRequest, security: operations.GetTeamEventMatchesKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventMatchesKeysResponse>;
    /**
     * Gets a short-form list of matches for the given team and event.
     */
    getTeamEventMatchesSimple(req: operations.GetTeamEventMatchesSimpleRequest, security: operations.GetTeamEventMatchesSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventMatchesSimpleResponse>;
    /**
     * Gets a list of matches for the given team and year.
     */
    getTeamMatchesByYear(req: operations.GetTeamMatchesByYearRequest, security: operations.GetTeamMatchesByYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchesByYearResponse>;
    /**
     * Gets a list of match keys for matches for the given team and year.
     */
    getTeamMatchesByYearKeys(req: operations.GetTeamMatchesByYearKeysRequest, security: operations.GetTeamMatchesByYearKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchesByYearKeysResponse>;
    /**
     * Gets a short-form list of matches for the given team and year.
     */
    getTeamMatchesByYearSimple(req: operations.GetTeamMatchesByYearSimpleRequest, security: operations.GetTeamMatchesByYearSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchesByYearSimpleResponse>;
}
