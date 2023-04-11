import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Two2UserTripsOptional {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Trips - trip details
     *
     * @remarks
     * Trips - trip details
     */
    tripsTripDetails(req: operations.TripsTripDetailsRequest, config?: AxiosRequestConfig): Promise<operations.TripsTripDetailsResponse>;
}
