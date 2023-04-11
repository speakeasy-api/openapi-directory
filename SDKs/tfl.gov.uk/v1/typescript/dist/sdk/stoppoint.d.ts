import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class StopPoint {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)
     */
    stopPointArrivalDepartures(req: operations.StopPointArrivalDeparturesRequest, config?: AxiosRequestConfig): Promise<operations.StopPointArrivalDeparturesResponse>;
    /**
     * Gets the list of arrival predictions for the given stop point id
     */
    stopPointArrivals(req: operations.StopPointArrivalsRequest, config?: AxiosRequestConfig): Promise<operations.StopPointArrivalsResponse>;
    /**
     * Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
     */
    stopPointCrowding(req: operations.StopPointCrowdingRequest, config?: AxiosRequestConfig): Promise<operations.StopPointCrowdingResponse>;
    /**
     * Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
     */
    stopPointDirection(req: operations.StopPointDirectionRequest, config?: AxiosRequestConfig): Promise<operations.StopPointDirectionResponse>;
    /**
     * Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
     */
    stopPointDisruption(req: operations.StopPointDisruptionRequest, config?: AxiosRequestConfig): Promise<operations.StopPointDisruptionResponse>;
    /**
     * Gets a distinct list of disrupted stop points for the given modes
     */
    stopPointDisruptionByMode(req: operations.StopPointDisruptionByModeRequest, config?: AxiosRequestConfig): Promise<operations.StopPointDisruptionByModeResponse>;
    /**
     * Gets a list of StopPoints corresponding to the given list of stop ids.
     */
    stopPointGet(req: operations.StopPointGetRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetResponse>;
    /**
     * Gets a list of StopPoints within {radius} by the specified criteria
     */
    stopPointGetByGeoPoint(req: operations.StopPointGetByGeoPointRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetByGeoPointResponse>;
    /**
     * Gets a list of StopPoints filtered by the modes available at that StopPoint.
     */
    stopPointGetByMode(req: operations.StopPointGetByModeRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetByModeResponse>;
    /**
     * Gets a StopPoint for a given sms code.
     */
    stopPointGetBySms(req: operations.StopPointGetBySmsRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetBySmsResponse>;
    /**
     * Gets all stop points of a given type
     */
    stopPointGetByType(req: operations.StopPointGetByTypeRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetByTypeResponse>;
    /**
     * Gets all the stop points of given type(s) with a page number
     */
    stopPointGetByTypeWithPagination(req: operations.StopPointGetByTypeWithPaginationRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetByTypeWithPaginationResponse>;
    /**
     * Get car parks corresponding to the given stop point id.
     */
    stopPointGetCarParksById(req: operations.StopPointGetCarParksByIdRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetCarParksByIdResponse>;
    /**
     * Gets the service types for a given stoppoint
     */
    stopPointGetServiceTypes(req: operations.StopPointGetServiceTypesRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetServiceTypesResponse>;
    /**
     * Gets a list of taxi ranks corresponding to the given stop point id.
     */
    stopPointGetTaxiRanksByIds(req: operations.StopPointGetTaxiRanksByIdsRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetTaxiRanksByIdsResponse>;
    /**
     * Gets the list of available StopPoint additional information categories
     */
    stopPointMetaCategories(config?: AxiosRequestConfig): Promise<operations.StopPointMetaCategoriesResponse>;
    /**
     * Gets the list of available StopPoint modes
     */
    stopPointMetaModes(config?: AxiosRequestConfig): Promise<operations.StopPointMetaModesResponse>;
    /**
     * Gets the list of available StopPoint types
     */
    stopPointMetaStopTypes(config?: AxiosRequestConfig): Promise<operations.StopPointMetaStopTypesResponse>;
    /**
     * Gets Stopoints that are reachable from a station/line combination.
     */
    stopPointReachableFrom(req: operations.StopPointReachableFromRequest, config?: AxiosRequestConfig): Promise<operations.StopPointReachableFromResponse>;
    /**
     * Returns the route sections for all the lines that service the given stop point ids
     */
    stopPointRoute(req: operations.StopPointRouteRequest, config?: AxiosRequestConfig): Promise<operations.StopPointRouteResponse>;
    /**
     * Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
     */
    stopPointSearch(req: operations.StopPointSearchRequest, config?: AxiosRequestConfig): Promise<operations.StopPointSearchResponse>;
    /**
     * Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
     */
    getStopPointSearch(req: operations.GetStopPointSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetStopPointSearchResponse>;
    /**
     * Get a list of places corresponding to a given id and place types.
     */
    getStopPointIdPlaceTypes(req: operations.GetStopPointIdPlaceTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetStopPointIdPlaceTypesResponse>;
}
