import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Cadence Membership
 */
export declare class CadenceMemberships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a cadence membership
     *
     * @remarks
     * Cadence Membership
     *
     */
    deleteV2CadenceMembershipsIdJson(req: operations.DeleteV2CadenceMembershipsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2CadenceMembershipsIdJsonResponse>;
    /**
     * List cadence memberships
     *
     * @remarks
     * Fetches multiple cadence membership records. The records can be filtered, paged, and sorted according to
     * the respective parameters. A cadence membership is the association between a person and their current and
     * historical time on a cadence. Cadence membership records are mutable and change over time. If a person is
     * added to a cadence and re-added to the same cadence in the future, there is a single membership record.
     *
     */
    getV2CadenceMembershipsJson(req: operations.GetV2CadenceMembershipsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CadenceMembershipsJsonResponse>;
    /**
     * Fetch a cadence membership
     *
     * @remarks
     * Fetches a cadence membership, by ID only.
     *
     */
    getV2CadenceMembershipsIdJson(req: operations.GetV2CadenceMembershipsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CadenceMembershipsIdJsonResponse>;
    /**
     * Create a cadence membership
     *
     * @remarks
     * Adds a person to a cadence. person_id and cadence_id are required, and must be visible to the authenticated user. user_id will
     * default to the authenticated user, but can be set to any visible user on the authenticated team.
     *
     * A person cannot be added to a cadence on behalf of a teammate unless the cadence is a team cadence, the cadence is owned by
     * the teammate, or the teammate has the Personal Cadence Admin permission.
     *
     */
    postV2CadenceMembershipsJson(req: operations.PostV2CadenceMembershipsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV2CadenceMembershipsJsonResponse>;
}
