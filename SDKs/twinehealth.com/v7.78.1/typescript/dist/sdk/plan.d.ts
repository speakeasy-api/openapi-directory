import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A plan is the set of actions and associated goals for a patient.
 */
export declare class Plan {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List patient plan summaries
     *
     * @remarks
     * Get a list of patient plan summaries
     */
    fetchPatientPlanSummaries(req: operations.FetchPatientPlanSummariesRequest, config?: AxiosRequestConfig): Promise<operations.FetchPatientPlanSummariesResponse>;
    /**
     * Get the plan summary for a patient
     *
     * @remarks
     * Get the plan summary for a patient.
     */
    fetchPatientPlanSummary(req: operations.FetchPatientPlanSummaryRequest, config?: AxiosRequestConfig): Promise<operations.FetchPatientPlanSummaryResponse>;
    /**
     * Update a plan summary
     *
     * @remarks
     * Update a plan summary record for a patient.
     */
    updatePatientPlanSummary(req: operations.UpdatePatientPlanSummaryRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePatientPlanSummaryResponse>;
}
