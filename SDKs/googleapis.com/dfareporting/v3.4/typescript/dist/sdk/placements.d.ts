import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Placements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generates tags for a placement.
     */
    dfareportingPlacementsGeneratetags(req: operations.DfareportingPlacementsGeneratetagsRequest, security: operations.DfareportingPlacementsGeneratetagsSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsGeneratetagsResponse>;
    /**
     * Gets one placement by ID.
     */
    dfareportingPlacementsGet(req: operations.DfareportingPlacementsGetRequest, security: operations.DfareportingPlacementsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsGetResponse>;
    /**
     * Inserts a new placement.
     */
    dfareportingPlacementsInsert(req: operations.DfareportingPlacementsInsertRequest, security: operations.DfareportingPlacementsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsInsertResponse>;
    /**
     * Retrieves a list of placements, possibly filtered. This method supports paging.
     */
    dfareportingPlacementsList(req: operations.DfareportingPlacementsListRequest, security: operations.DfareportingPlacementsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsListResponse>;
    /**
     * Updates an existing placement. This method supports patch semantics.
     */
    dfareportingPlacementsPatch(req: operations.DfareportingPlacementsPatchRequest, security: operations.DfareportingPlacementsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsPatchResponse>;
    /**
     * Updates an existing placement.
     */
    dfareportingPlacementsUpdate(req: operations.DfareportingPlacementsUpdateRequest, security: operations.DfareportingPlacementsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsUpdateResponse>;
}
