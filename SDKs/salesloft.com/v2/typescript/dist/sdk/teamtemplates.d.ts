import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Team Template Management
 */
export declare class TeamTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List team templates
     *
     * @remarks
     * Fetches multiple team template records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     * Team templates are templates that are available team-wide. Admins may use
     * team templates to create original content for the entire team, monitor version control to ensure templates are always up to date,
     * and track template performance across the entire organization. All metrics on a team template reflect usage across the team; individual metrics can be found with the email_templates API endpoint.
     *
     */
    getV2TeamTemplatesJson(req: operations.GetV2TeamTemplatesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2TeamTemplatesJsonResponse>;
    /**
     * Fetch a team template
     *
     * @remarks
     * Fetches a team template, by ID only.
     *
     */
    getV2TeamTemplatesIdJson(req: operations.GetV2TeamTemplatesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2TeamTemplatesIdJsonResponse>;
}
