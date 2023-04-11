import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PlaceActionTypeMetadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the list of available place action types for a location or country.
     */
    mybusinessplaceactionsPlaceActionTypeMetadataList(req: operations.MybusinessplaceactionsPlaceActionTypeMetadataListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsPlaceActionTypeMetadataListResponse>;
}
