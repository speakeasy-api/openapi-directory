import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GlobalWineScore {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGlobalwinescoresLatest - List all latest GWS
     *
     * Returns the latest GWS available per wine/vintage.
    **/
    getGlobalwinescoresLatest(req: operations.GetGlobalwinescoresLatestRequest, config?: AxiosRequestConfig): Promise<operations.GetGlobalwinescoresLatestResponse>;
    /**
     * listHistoricalGws - List all historical GWS
     *
     * Returns all available GWS
    **/
    listHistoricalGws(req: operations.ListHistoricalGwsRequest, config?: AxiosRequestConfig): Promise<operations.ListHistoricalGwsResponse>;
}
