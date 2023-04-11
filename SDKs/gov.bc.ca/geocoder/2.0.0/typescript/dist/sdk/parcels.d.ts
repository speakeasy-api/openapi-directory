import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Parcels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a comma-separated string of all pids for a given site
     *
     * @remarks
     * Represents all parcel identifiers associated with an individual site
     */
    getParcelsPidsSiteIDOutputFormat(req: operations.GetParcelsPidsSiteIDOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetParcelsPidsSiteIDOutputFormatResponse>;
}
