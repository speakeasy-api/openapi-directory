import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PayInstruction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePayInstruction - Deletes a pay instruction
     *
     * Delete the specified pay instruction
    **/
    deletePayInstruction(req: operations.DeletePayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayInstructionResponse>;
    /**
     * getAllPayInstructionTags - Get all pay instruction tags
     *
     * Gets all the pay instruction tags
    **/
    getAllPayInstructionTags(req: operations.GetAllPayInstructionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayInstructionTagsResponse>;
    /**
     * getPayInstructionFromEmployee - Gets the specified pay instruction from the employee
     *
     * Returns the specified pay instruction from employee
    **/
    getPayInstructionFromEmployee(req: operations.GetPayInstructionFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionFromEmployeeResponse>;
    /**
     * getPayInstructionsFromEmployee - Gets the pay instructions from the specified employee
     *
     * Get links to all pay instructions for the specified employee
    **/
    getPayInstructionsFromEmployee(req: operations.GetPayInstructionsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionsFromEmployeeResponse>;
    /**
     * getPayInstructionsWithTag - Get pay instructions with tag
     *
     * Gets the pay instructions with the tag
    **/
    getPayInstructionsWithTag(req: operations.GetPayInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionsWithTagResponse>;
    /**
     * patchPayInstruction - Sparse Update of a Pay Instruction
     *
     * Patches the specified pay instruction with the supplied values
    **/
    patchPayInstruction(req: operations.PatchPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPayInstructionResponse>;
    /**
     * postPayInstruction - Creates a new Pay Instruction
     *
     * Creates a new pay instruction object
    **/
    postPayInstruction(req: operations.PostPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostPayInstructionResponse>;
    /**
     * putPayInstruction - Update a Pay Instruction
     *
     * Updates the existing specified pay instruction object
    **/
    putPayInstruction(req: operations.PutPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutPayInstructionResponse>;
}
