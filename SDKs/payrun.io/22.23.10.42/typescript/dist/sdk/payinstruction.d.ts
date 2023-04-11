import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PayInstruction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a pay instruction
     *
     * @remarks
     * Delete the specified pay instruction
     */
    deletePayInstruction(req: operations.DeletePayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayInstructionResponse>;
    /**
     * Get all pay instruction tags
     *
     * @remarks
     * Gets all the pay instruction tags
     */
    getAllPayInstructionTags(req: operations.GetAllPayInstructionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayInstructionTagsResponse>;
    /**
     * Gets the specified pay instruction from the employee
     *
     * @remarks
     * Returns the specified pay instruction from employee
     */
    getPayInstructionFromEmployee(req: operations.GetPayInstructionFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionFromEmployeeResponse>;
    /**
     * Gets the pay instructions from the specified employee
     *
     * @remarks
     * Get links to all pay instructions for the specified employee
     */
    getPayInstructionsFromEmployee(req: operations.GetPayInstructionsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionsFromEmployeeResponse>;
    /**
     * Get pay instructions with tag
     *
     * @remarks
     * Gets the pay instructions with the tag
     */
    getPayInstructionsWithTag(req: operations.GetPayInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionsWithTagResponse>;
    /**
     * Sparse Update of a Pay Instruction
     *
     * @remarks
     * Patches the specified pay instruction with the supplied values
     */
    patchPayInstruction(req: operations.PatchPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPayInstructionResponse>;
    /**
     * Creates a new Pay Instruction
     *
     * @remarks
     * Creates a new pay instruction object
     */
    postPayInstruction(req: operations.PostPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostPayInstructionResponse>;
    /**
     * Update a Pay Instruction
     *
     * @remarks
     * Updates the existing specified pay instruction object
     */
    putPayInstruction(req: operations.PutPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutPayInstructionResponse>;
}
