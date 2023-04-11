import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PlacementStrategies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing placement strategy.
     */
    dfareportingPlacementStrategiesDelete(req: operations.DfareportingPlacementStrategiesDeleteRequest, security: operations.DfareportingPlacementStrategiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesDeleteResponse>;
    /**
     * Gets one placement strategy by ID.
     */
    dfareportingPlacementStrategiesGet(req: operations.DfareportingPlacementStrategiesGetRequest, security: operations.DfareportingPlacementStrategiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesGetResponse>;
    /**
     * Inserts a new placement strategy.
     */
    dfareportingPlacementStrategiesInsert(req: operations.DfareportingPlacementStrategiesInsertRequest, security: operations.DfareportingPlacementStrategiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesInsertResponse>;
    /**
     * Retrieves a list of placement strategies, possibly filtered. This method supports paging.
     */
    dfareportingPlacementStrategiesList(req: operations.DfareportingPlacementStrategiesListRequest, security: operations.DfareportingPlacementStrategiesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesListResponse>;
    /**
     * Updates an existing placement strategy. This method supports patch semantics.
     */
    dfareportingPlacementStrategiesPatch(req: operations.DfareportingPlacementStrategiesPatchRequest, security: operations.DfareportingPlacementStrategiesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesPatchResponse>;
    /**
     * Updates an existing placement strategy.
     */
    dfareportingPlacementStrategiesUpdate(req: operations.DfareportingPlacementStrategiesUpdateRequest, security: operations.DfareportingPlacementStrategiesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesUpdateResponse>;
}
