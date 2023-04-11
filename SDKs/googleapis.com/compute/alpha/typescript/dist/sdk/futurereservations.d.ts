import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FutureReservations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of future reservations.
     */
    computeFutureReservationsAggregatedList(req: operations.ComputeFutureReservationsAggregatedListRequest, security: operations.ComputeFutureReservationsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFutureReservationsAggregatedListResponse>;
    /**
     * Cancel the specified future reservation.
     */
    computeFutureReservationsCancel(req: operations.ComputeFutureReservationsCancelRequest, security: operations.ComputeFutureReservationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFutureReservationsCancelResponse>;
    /**
     * Deletes the specified future reservation.
     */
    computeFutureReservationsDelete(req: operations.ComputeFutureReservationsDeleteRequest, security: operations.ComputeFutureReservationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFutureReservationsDeleteResponse>;
    /**
     * Retrieves information about the specified future reservation.
     */
    computeFutureReservationsGet(req: operations.ComputeFutureReservationsGetRequest, security: operations.ComputeFutureReservationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFutureReservationsGetResponse>;
    /**
     * Creates a new Future Reservation.
     */
    computeFutureReservationsInsert(req: operations.ComputeFutureReservationsInsertRequest, security: operations.ComputeFutureReservationsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFutureReservationsInsertResponse>;
    /**
     * A list of all the future reservations that have been configured for the specified project in specified zone.
     */
    computeFutureReservationsList(req: operations.ComputeFutureReservationsListRequest, security: operations.ComputeFutureReservationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFutureReservationsListResponse>;
    /**
     * Updates the specified future reservation.
     */
    computeFutureReservationsUpdate(req: operations.ComputeFutureReservationsUpdateRequest, security: operations.ComputeFutureReservationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFutureReservationsUpdateResponse>;
}
