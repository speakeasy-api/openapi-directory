import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Location rules are directives for the localization engine that may be useful for certain solutions.
 *
 * @remarks
 *
 */
export declare class Locationrules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create location rule
     */
    addLocationRule(req: shared.LocationRuleUpdate, config?: AxiosRequestConfig): Promise<operations.AddLocationRuleResponse>;
    /**
     * Delete location rule
     */
    deleteLocationRule(req: operations.DeleteLocationRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocationRuleResponse>;
    /**
     * Get location rule
     */
    getLocationRuleById(req: operations.GetLocationRuleByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationRuleByIdResponse>;
    /**
     * Get all location rules
     */
    getLocationRules(req: operations.GetLocationRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationRulesResponse>;
    /**
     * Update existing location rule
     */
    updateLocationRule(req: operations.UpdateLocationRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLocationRuleResponse>;
}
