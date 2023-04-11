import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ReferenceData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Seat Details
     *
     * @remarks
     * A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.
     */
    seatDetails(req: operations.SeatDetailsRequest, security: operations.SeatDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.SeatDetailsResponse>;
}
