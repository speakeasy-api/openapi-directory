import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CashDrawers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * ListCashDrawerShiftEvents
     *
     * @remarks
     * Provides a paginated list of events for a single cash drawer shift.
     */
    listCashDrawerShiftEvents(req: operations.ListCashDrawerShiftEventsRequest, security: operations.ListCashDrawerShiftEventsSecurity, config?: AxiosRequestConfig): Promise<operations.ListCashDrawerShiftEventsResponse>;
    /**
     * ListCashDrawerShifts
     *
     * @remarks
     * Provides the details for all of the cash drawer shifts for a location
     * in a date range.
     */
    listCashDrawerShifts(req: operations.ListCashDrawerShiftsRequest, security: operations.ListCashDrawerShiftsSecurity, config?: AxiosRequestConfig): Promise<operations.ListCashDrawerShiftsResponse>;
    /**
     * RetrieveCashDrawerShift
     *
     * @remarks
     * Provides the summary details for a single cash drawer shift. See
     * [ListCashDrawerShiftEvents](https://developer.squareup.com/reference/square_2021-08-18/cash-drawers-api/list-cash-drawer-shift-events) for a list of cash drawer shift events.
     */
    retrieveCashDrawerShift(req: operations.RetrieveCashDrawerShiftRequest, security: operations.RetrieveCashDrawerShiftSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveCashDrawerShiftResponse>;
}
