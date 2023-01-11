import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PayLine {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAllPayLineTags - Get all pay line tags
     *
     * Gets all the pay line tags
    **/
    getAllPayLineTags(req: operations.GetAllPayLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayLineTagsResponse>;
    /**
     * getPayLineFromEmployee - Gets the specified pay line from the employee
     *
     * Returns the specified pay line from employee
    **/
    getPayLineFromEmployee(req: operations.GetPayLineFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLineFromEmployeeResponse>;
    /**
     * getPayLinesFromEmployee - Gets the pay lines from the specified employee
     *
     * Get links to all pay lines for the specified employee
    **/
    getPayLinesFromEmployee(req: operations.GetPayLinesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesFromEmployeeResponse>;
    /**
     * getPayLinesWithTag - Get pay lines with tag
     *
     * Gets the pay line with the tag
    **/
    getPayLinesWithTag(req: operations.GetPayLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesWithTagResponse>;
}
