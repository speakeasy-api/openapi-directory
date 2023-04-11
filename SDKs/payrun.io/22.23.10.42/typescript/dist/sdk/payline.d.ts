import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PayLine {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all pay line tags
     *
     * @remarks
     * Gets all the pay line tags
     */
    getAllPayLineTags(req: operations.GetAllPayLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayLineTagsResponse>;
    /**
     * Gets the specified pay line from the employee
     *
     * @remarks
     * Returns the specified pay line from employee
     */
    getPayLineFromEmployee(req: operations.GetPayLineFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLineFromEmployeeResponse>;
    /**
     * Gets the pay lines from the specified employee
     *
     * @remarks
     * Get links to all pay lines for the specified employee
     */
    getPayLinesFromEmployee(req: operations.GetPayLinesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesFromEmployeeResponse>;
    /**
     * Gets the pay lines from the specified pay run
     *
     * @remarks
     * Get links to all pay lines for the specified pay run
     */
    getPayLinesFromPayRun(req: operations.GetPayLinesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesFromPayRunResponse>;
    /**
     * Get pay lines with tag
     *
     * @remarks
     * Gets the pay line with the tag
     */
    getPayLinesWithTag(req: operations.GetPayLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesWithTagResponse>;
}
