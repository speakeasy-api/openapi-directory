import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CoveragePlans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Coverage Plan
     *
     * @remarks
     * Here you can associate a plan with a line of coverage and then pass information about the plan like the name, network, waiting periods, and other details.
     */
    createCoveragePlan(req: operations.CreateCoveragePlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateCoveragePlanResponse>;
    /**
     * Edit a Coverage Plan
     *
     * @remarks
     * Edit a coverage plan based on the ID provided. The version parameter must match the latest coverage plan version.
     */
    editCoveragePlan(req: operations.EditCoveragePlanRequest, config?: AxiosRequestConfig): Promise<operations.EditCoveragePlanResponse>;
    /**
     * Get Coverage Plan
     *
     * @remarks
     * Returns the latest version of a single coverage plan based on the ID provided.
     */
    getCoveragePlan(req: operations.GetCoveragePlanRequest, config?: AxiosRequestConfig): Promise<operations.GetCoveragePlanResponse>;
    /**
     * Get all Group Coverage Plans
     *
     * @remarks
     * Returns a list of all coverage plans for a given group coverage
     */
    getGroupCoveragePlans(req: operations.GetGroupCoveragePlansRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupCoveragePlansResponse>;
}
