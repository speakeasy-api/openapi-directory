import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaySchedule {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePaySchedule - Deletes a pay schedule
     *
     * Delete the specified pay schedule
    **/
    deletePaySchedule(req: operations.DeletePayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayScheduleResponse>;
    /**
     * getAllPayScheduleTags - Get all pay schedule tags
     *
     * Gets all the pay schedule tags
    **/
    getAllPayScheduleTags(req: operations.GetAllPayScheduleTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayScheduleTagsResponse>;
    /**
     * getEmployeesFromPaySchedule - Get all employees revisions from a pay schedule.
     *
     * Gets links to all employee revisions that have ever existed in the specified pay schedule.
    **/
    getEmployeesFromPaySchedule(req: operations.GetEmployeesFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleResponse>;
    /**
     * getEmployeesFromPayScheduleOnEffectiveDate - Get employees from a pay schedule on effective date.
     *
     * Gets links to all employee revisions in the specified pay schedule for the given effective date.
    **/
    getEmployeesFromPayScheduleOnEffectiveDate(req: operations.GetEmployeesFromPayScheduleOnEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleOnEffectiveDateResponse>;
    /**
     * getPayRunFromPaySchedule - Gets the pay run from the pay schedule
     *
     * Returns the pay run from the pay schedule
    **/
    getPayRunFromPaySchedule(req: operations.GetPayRunFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunFromPayScheduleResponse>;
    /**
     * getPayRunsFromPaySchedule - Gets the pay runs from the pay schedule
     *
     * Get links to all pay runs for the specified pay schedule
    **/
    getPayRunsFromPaySchedule(req: operations.GetPayRunsFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromPayScheduleResponse>;
    /**
     * getPayScheduleFromEmployer - Gets the specified pay schedule from the employer
     *
     * Returns the specified pay schedule object from employer
    **/
    getPayScheduleFromEmployer(req: operations.GetPayScheduleFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayScheduleFromEmployerResponse>;
    /**
     * getPaySchedulesFromEmployer - Gets the pay schedule from the specified employer
     *
     * Get links to all pay schedules for the specified employer
    **/
    getPaySchedulesFromEmployer(req: operations.GetPaySchedulesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPaySchedulesFromEmployerResponse>;
    /**
     * getPaySchedulesWithTag - Get pay schedule with tag
     *
     * Gets the pay schedules with the tag
    **/
    getPaySchedulesWithTag(req: operations.GetPaySchedulesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPaySchedulesWithTagResponse>;
    /**
     * postPaySchedule - Create a new pay schedule
     *
     * Create a new pay schedule object
    **/
    postPaySchedule(req: operations.PostPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PostPayScheduleResponse>;
    /**
     * putPaySchedule - Updates a pay schedule
     *
     * Updates the existing specified pay schedule object
    **/
    putPaySchedule(req: operations.PutPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PutPayScheduleResponse>;
}
