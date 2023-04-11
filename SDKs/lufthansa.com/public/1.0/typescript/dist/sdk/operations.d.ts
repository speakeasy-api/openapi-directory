import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Operations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Flight Status at Arrival Airport
     *
     * @remarks
     * Status of all arrivals at a given airport up to 4 hours from the provided date time.
     */
    operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(req: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest, security: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse>;
    /**
     * Flight Status
     *
     * @remarks
     * Status of a particular flight (boarding, delayed, etc.).
     */
    operationsFlightstatusByFlightNumberAndDateGet(req: operations.OperationsFlightstatusByFlightNumberAndDateGetRequest, security: operations.OperationsFlightstatusByFlightNumberAndDateGetSecurity, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusByFlightNumberAndDateGetResponse>;
    /**
     * Flight Status at Departure Airport
     *
     * @remarks
     * Status of all departures from a given airport up to 4 hours from the provided date time.
     */
    operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(req: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest, security: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse>;
    /**
     * Flight Status by Route
     *
     * @remarks
     * Status of flights between a given origin and destination on a given date.
     */
    operationsFlightstatusRouteDateByOriginAndDestinationGet(req: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest, security: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse>;
    /**
     * Flight Schedules
     *
     * @remarks
     * Scheduled flights between given airports on a given date.
     */
    operationsSchedulesFromDateTimeByOriginAndDestinationGet(req: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest, security: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity, config?: AxiosRequestConfig): Promise<operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse>;
}
