import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Person Stage Management
 */
export declare class PersonStages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an person stage
     *
     * @remarks
     * Deletes a person stage. This operation is not reversible without contacting support.
     * This operation can be called multiple times successfully.
     *
     */
    deleteV2PersonStagesIdJson(req: operations.DeleteV2PersonStagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2PersonStagesIdJsonResponse>;
    /**
     * List person stages
     *
     * @remarks
     * Fetches multiple person stage records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2PersonStagesJson(req: operations.GetV2PersonStagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2PersonStagesJsonResponse>;
    /**
     * Fetch a person stage
     *
     * @remarks
     * Fetches a person stage, by ID only.
     *
     */
    getV2PersonStagesIdJson(req: operations.GetV2PersonStagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2PersonStagesIdJsonResponse>;
    /**
     * Create a person stage
     *
     * @remarks
     * Creates a person stage.
     *
     */
    postV2PersonStagesJson(req: operations.PostV2PersonStagesJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2PersonStagesJsonResponse>;
    /**
     * Update a person stage
     *
     * @remarks
     * Updates a person stage.
     *
     */
    putV2PersonStagesIdJson(req: operations.PutV2PersonStagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2PersonStagesIdJsonResponse>;
}
