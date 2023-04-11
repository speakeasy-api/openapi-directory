import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the next arrival predictions for all stops of a given mode
     */
    modeArrivals(req: operations.ModeArrivalsRequest, config?: AxiosRequestConfig): Promise<operations.ModeArrivalsResponse>;
    /**
     * Returns the service type active for a mode.
     *             Currently only supports tube
     */
    modeGetActiveServiceTypes(config?: AxiosRequestConfig): Promise<operations.ModeGetActiveServiceTypesResponse>;
}
