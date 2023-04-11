import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GlobalWineScore {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all latest GWS
     *
     * @remarks
     * Returns the latest GWS available per wine/vintage.
     */
    getGlobalwinescoresLatest(req: operations.GetGlobalwinescoresLatestRequest, config?: AxiosRequestConfig): Promise<operations.GetGlobalwinescoresLatestResponse>;
    /**
     * List all historical GWS
     *
     * @remarks
     * Returns all available GWS
     */
    listHistoricalGWS(req: operations.ListHistoricalGWSRequest, config?: AxiosRequestConfig): Promise<operations.ListHistoricalGWSResponse>;
}
