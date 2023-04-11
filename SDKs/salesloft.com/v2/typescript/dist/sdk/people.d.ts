import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Person Management
 */
export declare class People {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a person
     *
     * @remarks
     * Deletes a person. This operation is not reversible without contacting support.
     * This operation can be called multiple times successfully.
     *
     */
    deleteV2PeopleIdJson(req: operations.DeleteV2PeopleIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2PeopleIdJsonResponse>;
    /**
     * List people
     *
     * @remarks
     * Fetches multiple person records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2PeopleJson(req: operations.GetV2PeopleJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2PeopleJsonResponse>;
    /**
     * Fetch a person
     *
     * @remarks
     * Fetches a person, by ID only.
     *
     */
    getV2PeopleIdJson(req: operations.GetV2PeopleIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2PeopleIdJsonResponse>;
    /**
     * Create a person
     *
     * @remarks
     * Creates a person. Either email_address or phone/last_name must be provided as a unique lookup
     * on the team.
     *
     */
    postV2PeopleJson(req: operations.PostV2PeopleJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2PeopleJsonResponse>;
    /**
     * Update a person
     *
     * @remarks
     * Updates a person.
     *
     */
    putV2PeopleIdJson(req: operations.PutV2PeopleIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2PeopleIdJsonResponse>;
}
