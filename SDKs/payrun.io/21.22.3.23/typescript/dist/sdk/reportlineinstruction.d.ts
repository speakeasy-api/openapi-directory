import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ReportLineInstruction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteReportingInstruction - Deletes a reporting instruction
     *
     * Delete the specified reporting instruction
    **/
    deleteReportingInstruction(req: operations.DeleteReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportingInstructionResponse>;
    /**
     * getReportingInstructionFromEmployer - Gets the specified reporting instruction from the employer
     *
     * Returns the specified pay instruction from employee
    **/
    getReportingInstructionFromEmployer(req: operations.GetReportingInstructionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportingInstructionFromEmployerResponse>;
    /**
     * getReportingInstructionsFromEmployer - Gets the reporting instructions from the specified employer
     *
     * Get links to all pay instructions for the specified employee
    **/
    getReportingInstructionsFromEmployer(req: operations.GetReportingInstructionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportingInstructionsFromEmployerResponse>;
    /**
     * postReportingInstruction - Creates a new Reporting Instruction
     *
     * Creates a new reporting instruction object
    **/
    postReportingInstruction(req: operations.PostReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostReportingInstructionResponse>;
    /**
     * putReportingInstruction - Update a reporting Instruction
     *
     * Updates the existing specified reporting instruction object
    **/
    putReportingInstruction(req: operations.PutReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportingInstructionResponse>;
}
