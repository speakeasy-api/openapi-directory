import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Line {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the list of arrival predictions for given line ids based at the given stop
     */
    lineArrivals(req: operations.LineArrivalsRequest, config?: AxiosRequestConfig): Promise<operations.LineArrivalsResponse>;
    /**
     * Get disruptions for the given line ids
     */
    lineDisruption(req: operations.LineDisruptionRequest, config?: AxiosRequestConfig): Promise<operations.LineDisruptionResponse>;
    /**
     * Get disruptions for all lines of the given modes.
     */
    lineDisruptionByMode(req: operations.LineDisruptionByModeRequest, config?: AxiosRequestConfig): Promise<operations.LineDisruptionByModeResponse>;
    /**
     * Gets lines that match the specified line ids.
     */
    lineGet(req: operations.LineGetRequest, config?: AxiosRequestConfig): Promise<operations.LineGetResponse>;
    /**
     * Gets lines that serve the given modes.
     */
    lineGetByMode(req: operations.LineGetByModeRequest, config?: AxiosRequestConfig): Promise<operations.LineGetByModeResponse>;
    /**
     * Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
     */
    lineLineRoutesByIds(req: operations.LineLineRoutesByIdsRequest, config?: AxiosRequestConfig): Promise<operations.LineLineRoutesByIdsResponse>;
    /**
     * Gets a list of valid disruption categories
     */
    lineMetaDisruptionCategories(config?: AxiosRequestConfig): Promise<operations.LineMetaDisruptionCategoriesResponse>;
    /**
     * Gets a list of valid modes
     */
    lineMetaModes(config?: AxiosRequestConfig): Promise<operations.LineMetaModesResponse>;
    /**
     * Gets a list of valid ServiceTypes to filter on
     */
    lineMetaServiceTypes(config?: AxiosRequestConfig): Promise<operations.LineMetaServiceTypesResponse>;
    /**
     * Gets a list of valid severity codes
     */
    lineMetaSeverity(config?: AxiosRequestConfig): Promise<operations.LineMetaSeverityResponse>;
    /**
     * Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
     */
    lineRoute(req: operations.LineRouteRequest, config?: AxiosRequestConfig): Promise<operations.LineRouteResponse>;
    /**
     * Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
     */
    lineRouteByMode(req: operations.LineRouteByModeRequest, config?: AxiosRequestConfig): Promise<operations.LineRouteByModeResponse>;
    /**
     * Gets all valid routes for given line id, including the sequence of stops on each route.
     */
    lineRouteSequence(req: operations.LineRouteSequenceRequest, config?: AxiosRequestConfig): Promise<operations.LineRouteSequenceResponse>;
    /**
     * Search for lines or routes matching the query string
     */
    lineSearch(req: operations.LineSearchRequest, config?: AxiosRequestConfig): Promise<operations.LineSearchResponse>;
    /**
     * Gets the line status for given line ids during the provided dates e.g Minor Delays
     */
    lineStatus(req: operations.LineStatusRequest, config?: AxiosRequestConfig): Promise<operations.LineStatusResponse>;
    /**
     * Gets the line status of for given line ids e.g Minor Delays
     */
    lineStatusByIds(req: operations.LineStatusByIdsRequest, config?: AxiosRequestConfig): Promise<operations.LineStatusByIdsResponse>;
    /**
     * Gets the line status of for all lines for the given modes
     */
    lineStatusByMode(req: operations.LineStatusByModeRequest, config?: AxiosRequestConfig): Promise<operations.LineStatusByModeResponse>;
    /**
     * Gets the line status for all lines with a given severity
     *             A list of valid severity codes can be obtained from a call to Line/Meta/Severity
     */
    lineStatusBySeverity(req: operations.LineStatusBySeverityRequest, config?: AxiosRequestConfig): Promise<operations.LineStatusBySeverityResponse>;
    /**
     * Gets a list of the stations that serve the given line id
     */
    lineStopPoints(req: operations.LineStopPointsRequest, config?: AxiosRequestConfig): Promise<operations.LineStopPointsResponse>;
    /**
     * Gets the timetable for a specified station on the give line
     */
    lineTimetable(req: operations.LineTimetableRequest, config?: AxiosRequestConfig): Promise<operations.LineTimetableResponse>;
    /**
     * Gets the timetable for a specified station on the give line with specified destination
     */
    lineTimetableTo(req: operations.LineTimetableToRequest, config?: AxiosRequestConfig): Promise<operations.LineTimetableToResponse>;
}
