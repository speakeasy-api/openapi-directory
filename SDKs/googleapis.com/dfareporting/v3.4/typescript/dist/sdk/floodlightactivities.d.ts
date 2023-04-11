import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FloodlightActivities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing floodlight activity.
     */
    dfareportingFloodlightActivitiesDelete(req: operations.DfareportingFloodlightActivitiesDeleteRequest, security: operations.DfareportingFloodlightActivitiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesDeleteResponse>;
    /**
     * Generates a tag for a floodlight activity.
     */
    dfareportingFloodlightActivitiesGeneratetag(req: operations.DfareportingFloodlightActivitiesGeneratetagRequest, security: operations.DfareportingFloodlightActivitiesGeneratetagSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesGeneratetagResponse>;
    /**
     * Gets one floodlight activity by ID.
     */
    dfareportingFloodlightActivitiesGet(req: operations.DfareportingFloodlightActivitiesGetRequest, security: operations.DfareportingFloodlightActivitiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesGetResponse>;
    /**
     * Inserts a new floodlight activity.
     */
    dfareportingFloodlightActivitiesInsert(req: operations.DfareportingFloodlightActivitiesInsertRequest, security: operations.DfareportingFloodlightActivitiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesInsertResponse>;
    /**
     * Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
     */
    dfareportingFloodlightActivitiesList(req: operations.DfareportingFloodlightActivitiesListRequest, security: operations.DfareportingFloodlightActivitiesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesListResponse>;
    /**
     * Updates an existing floodlight activity. This method supports patch semantics.
     */
    dfareportingFloodlightActivitiesPatch(req: operations.DfareportingFloodlightActivitiesPatchRequest, security: operations.DfareportingFloodlightActivitiesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesPatchResponse>;
    /**
     * Updates an existing floodlight activity.
     */
    dfareportingFloodlightActivitiesUpdate(req: operations.DfareportingFloodlightActivitiesUpdateRequest, security: operations.DfareportingFloodlightActivitiesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesUpdateResponse>;
}
