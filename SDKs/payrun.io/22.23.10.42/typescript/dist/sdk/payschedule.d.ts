import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaySchedule {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a pay schedule
     *
     * @remarks
     * Delete the specified pay schedule
     */
    deletePaySchedule(req: operations.DeletePayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayScheduleResponse>;
    /**
     * Get all pay schedule tags
     *
     * @remarks
     * Gets all the pay schedule tags
     */
    getAllPayScheduleTags(req: operations.GetAllPayScheduleTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayScheduleTagsResponse>;
    /**
     * Get all employees revisions from a pay schedule.
     *
     * @remarks
     * Gets links to all employee revisions that have ever existed in the specified pay schedule.
     */
    getEmployeesFromPaySchedule(req: operations.GetEmployeesFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleResponse>;
    /**
     * Get employees from a pay schedule on effective date.
     *
     * @remarks
     * Gets links to all employee revisions in the specified pay schedule for the given effective date.
     */
    getEmployeesFromPayScheduleOnEffectiveDate(req: operations.GetEmployeesFromPayScheduleOnEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleOnEffectiveDateResponse>;
    /**
     * Gets the pay run from the pay schedule
     *
     * @remarks
     * Returns the pay run from the pay schedule
     */
    getPayRunFromPaySchedule(req: operations.GetPayRunFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunFromPayScheduleResponse>;
    /**
     * Gets the pay runs from the pay schedule
     *
     * @remarks
     * Get links to all pay runs for the specified pay schedule
     */
    getPayRunsFromPaySchedule(req: operations.GetPayRunsFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromPayScheduleResponse>;
    /**
     * Gets the specified pay schedule from the employer
     *
     * @remarks
     * Returns the specified pay schedule object from employer
     */
    getPayScheduleFromEmployer(req: operations.GetPayScheduleFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayScheduleFromEmployerResponse>;
    /**
     * Gets the pay schedule from the specified employer
     *
     * @remarks
     * Get links to all pay schedules for the specified employer
     */
    getPaySchedulesFromEmployer(req: operations.GetPaySchedulesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPaySchedulesFromEmployerResponse>;
    /**
     * Get pay schedule with tag
     *
     * @remarks
     * Gets the pay schedules with the tag
     */
    getPaySchedulesWithTag(req: operations.GetPaySchedulesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPaySchedulesWithTagResponse>;
    /**
     * Create a new pay schedule
     *
     * @remarks
     * Create a new pay schedule object
     */
    postPaySchedule(req: operations.PostPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PostPayScheduleResponse>;
    /**
     * Updates a pay schedule
     *
     * @remarks
     * Updates the existing specified pay schedule object
     */
    putPaySchedule(req: operations.PutPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PutPayScheduleResponse>;
}
