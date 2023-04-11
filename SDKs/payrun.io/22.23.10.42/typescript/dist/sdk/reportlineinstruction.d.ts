import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ReportLineInstruction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a reporting instruction
     *
     * @remarks
     * Delete the specified reporting instruction
     */
    deleteReportingInstruction(req: operations.DeleteReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportingInstructionResponse>;
    /**
     * Gets the specified reporting instruction from the employer
     *
     * @remarks
     * Returns the specified pay instruction from employee
     */
    getReportingInstructionFromEmployer(req: operations.GetReportingInstructionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportingInstructionFromEmployerResponse>;
    /**
     * Gets the reporting instructions from the specified employer
     *
     * @remarks
     * Get links to all pay instructions for the specified employee
     */
    getReportingInstructionsFromEmployer(req: operations.GetReportingInstructionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetReportingInstructionsFromEmployerResponse>;
    /**
     * Creates a new Reporting Instruction
     *
     * @remarks
     * Creates a new reporting instruction object
     */
    postReportingInstruction(req: operations.PostReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostReportingInstructionResponse>;
    /**
     * Update a reporting Instruction
     *
     * @remarks
     * Updates the existing specified reporting instruction object
     */
    putReportingInstruction(req: operations.PutReportingInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportingInstructionResponse>;
}
