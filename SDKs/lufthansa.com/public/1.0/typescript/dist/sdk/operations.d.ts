import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Operations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet - Flight Status at Arrival Airport
     *
     * Status of all arrivals at a given airport up to 4 hours from the provided date time.
    **/
    operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(req: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse>;
    /**
     * operationsFlightstatusByFlightNumberAndDateGet - Flight Status
     *
     * Status of a particular flight (boarding, delayed, etc.).
    **/
    operationsFlightstatusByFlightNumberAndDateGet(req: operations.OperationsFlightstatusByFlightNumberAndDateGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusByFlightNumberAndDateGetResponse>;
    /**
     * operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet - Flight Status at Departure Airport
     *
     * Status of all departures from a given airport up to 4 hours from the provided date time.
    **/
    operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(req: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse>;
    /**
     * operationsFlightstatusRouteDateByOriginAndDestinationGet - Flight Status by Route
     *
     * Status of flights between a given origin and destination on a given date.
    **/
    operationsFlightstatusRouteDateByOriginAndDestinationGet(req: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse>;
    /**
     * operationsSchedulesFromDateTimeByOriginAndDestinationGet - Flight Schedules
     *
     * Scheduled flights between given airports on a given date.
    **/
    operationsSchedulesFromDateTimeByOriginAndDestinationGet(req: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse>;
}
