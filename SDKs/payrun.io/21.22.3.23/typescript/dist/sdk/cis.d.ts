import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCisInstruction - Delete a CIS instruction
     *
     * Delete the specified CIS instruction
    **/
    deleteCisInstruction(req: operations.DeleteCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisInstructionResponse>;
    /**
     * deleteCisInstructionTag - Delete CIS instruction tag
     *
     * Deletes a tag from the CIS instruction
    **/
    deleteCisInstructionTag(req: operations.DeleteCisInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisInstructionTagResponse>;
    /**
     * deleteCisLine - Delete a CIS line
     *
     * Delete the specified CIS line
    **/
    deleteCisLine(req: operations.DeleteCisLineRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineResponse>;
    /**
     * deleteCisLineTag - Delete CIS line tag
     *
     * Deletes a tag from the CIS line
    **/
    deleteCisLineTag(req: operations.DeleteCisLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTagResponse>;
    /**
     * deleteCisLineType - Delete an CIS line type
     *
     * Delete the specified CIS line type
    **/
    deleteCisLineType(req: operations.DeleteCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTypeResponse>;
    /**
     * deleteCisLineTypeTag - Delete CIS line type tag
     *
     * Deletes a tag from the CIS line type
    **/
    deleteCisLineTypeTag(req: operations.DeleteCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTypeTagResponse>;
    /**
     * deleteCisTransaction - Delete the CIS transaction
     *
     * Deletes the specified CIS transaction
    **/
    deleteCisTransaction(req: operations.DeleteCisTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisTransactionResponse>;
    /**
     * deleteSubContractorTag - Delete sub contractor tag
     *
     * Deletes a tag from the sub contractor
    **/
    deleteSubContractorTag(req: operations.DeleteSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorTagResponse>;
    /**
     * getAllCisInstructionTags - Get all CIS instruction tags
     *
     * Gets all the CIS instruction tags
    **/
    getAllCisInstructionTags(req: operations.GetAllCisInstructionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisInstructionTagsResponse>;
    /**
     * getAllCisLineTags - Get all CIS line tags
     *
     * Gets all the CIS line tags
    **/
    getAllCisLineTags(req: operations.GetAllCisLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisLineTagsResponse>;
    /**
     * getAllCisLineTypeTags - Get all CIS line type tags
     *
     * Gets all the CIS line type tags
    **/
    getAllCisLineTypeTags(req: operations.GetAllCisLineTypeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisLineTypeTagsResponse>;
    /**
     * getAllSubContractorTags - Get all sub contractor tags
     *
     * Gets all the sub contractor tags
    **/
    getAllSubContractorTags(req: operations.GetAllSubContractorTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllSubContractorTagsResponse>;
    /**
     * getCisInstructionFromSubContractor - Get CIS instruction from sub contractor
     *
     * Gets the specified CIS instruction from sub contractor.
    **/
    getCisInstructionFromSubContractor(req: operations.GetCisInstructionFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionFromSubContractorResponse>;
    /**
     * getCisInstructionsFromSubContractor - Get CIS instructions from sub contractor.
     *
     * Get links to all CIS instructions for the specified sub contractor.
    **/
    getCisInstructionsFromSubContractor(req: operations.GetCisInstructionsFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionsFromSubContractorResponse>;
    /**
     * getCisInstructionsWithTag - Get CIS instructions with tag
     *
     * Gets the CIS instruction with the tag
    **/
    getCisInstructionsWithTag(req: operations.GetCisInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionsWithTagResponse>;
    /**
     * getCisLineFromSubContractor - Get CIS line from sub contractor
     *
     * Gets the specified CIS line from sub contractor.
    **/
    getCisLineFromSubContractor(req: operations.GetCisLineFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineFromSubContractorResponse>;
    /**
     * getCisLineTypeFromEmployer - Get CIS line type from employer
     *
     * Gets the specified CIS line type from employer.
    **/
    getCisLineTypeFromEmployer(req: operations.GetCisLineTypeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypeFromEmployerResponse>;
    /**
     * getCisLineTypesFromEmployer - Get CIS line types from employer.
     *
     * Get links to all CIS line types for the specified employer.
    **/
    getCisLineTypesFromEmployer(req: operations.GetCisLineTypesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypesFromEmployerResponse>;
    /**
     * getCisLineTypesWithTag - Get CIS line types with tag
     *
     * Gets the CIS line type with the tag
    **/
    getCisLineTypesWithTag(req: operations.GetCisLineTypesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypesWithTagResponse>;
    /**
     * getCisLinesFromSubContractor - Get CIS lines from sub contractor.
     *
     * Get links to all CIS lines for the specified sub contractor.
    **/
    getCisLinesFromSubContractor(req: operations.GetCisLinesFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLinesFromSubContractorResponse>;
    /**
     * getCisLinesWithTag - Get CIS lines with tag
     *
     * Gets the CIS line with the tag
    **/
    getCisLinesWithTag(req: operations.GetCisLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLinesWithTagResponse>;
    /**
     * getCisTransactionFromEmployer - Get the CIS transaction
     *
     * Returns the specified CIS transaction
    **/
    getCisTransactionFromEmployer(req: operations.GetCisTransactionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisTransactionFromEmployerResponse>;
    /**
     * getCisTransactionsFromEmployer - Get all CIS transactions for the employer
     *
     * Get links for all CIS transactions for the specified employer
    **/
    getCisTransactionsFromEmployer(req: operations.GetCisTransactionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisTransactionsFromEmployerResponse>;
    /**
     * getSubContractorsWithTag - Get sub contractors with tag
     *
     * Gets the sub contractor with the tag
    **/
    getSubContractorsWithTag(req: operations.GetSubContractorsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsWithTagResponse>;
    /**
     * getTagFromCisInstruction - Get CIS instruction tag
     *
     * Gets the tag from the CIS instruction
    **/
    getTagFromCisInstruction(req: operations.GetTagFromCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisInstructionResponse>;
    /**
     * getTagFromCisLine - Get CIS line tag
     *
     * Gets the tag from the CIS line
    **/
    getTagFromCisLine(req: operations.GetTagFromCisLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisLineResponse>;
    /**
     * getTagFromCisLineType - Get CIS line type tag
     *
     * Gets the tag from the CIS line type
    **/
    getTagFromCisLineType(req: operations.GetTagFromCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisLineTypeResponse>;
    /**
     * getTagFromSubContractor - Get sub contractor tag
     *
     * Gets the tag from the sub contractor
    **/
    getTagFromSubContractor(req: operations.GetTagFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromSubContractorResponse>;
    /**
     * getTagFromSubContractorRevision - Get sub contractor revision tag
     *
     * Gets the tag from the sub contractor revision
    **/
    getTagFromSubContractorRevision(req: operations.GetTagFromSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromSubContractorRevisionResponse>;
    /**
     * getTagsFromCisInstruction - Get all tags from the CIS instruction
     *
     * Gets all the tags from the CIS instruction
    **/
    getTagsFromCisInstruction(req: operations.GetTagsFromCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisInstructionResponse>;
    /**
     * getTagsFromCisLine - Get all tags from the CIS line
     *
     * Gets all the tags from the CIS line
    **/
    getTagsFromCisLine(req: operations.GetTagsFromCisLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisLineResponse>;
    /**
     * getTagsFromCisLineType - Get all tags from the CIS line type
     *
     * Gets all the tags from the CIS line type
    **/
    getTagsFromCisLineType(req: operations.GetTagsFromCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisLineTypeResponse>;
    /**
     * getTagsFromSubContractor - Get all tags from the sub contractor
     *
     * Gets all the tags from the sub contractor
    **/
    getTagsFromSubContractor(req: operations.GetTagsFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromSubContractorResponse>;
    /**
     * getTagsFromSubContractorRevision - Get all sub contractor revision tags
     *
     * Gets all the tags from the sub contractor revision
    **/
    getTagsFromSubContractorRevision(req: operations.GetTagsFromSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromSubContractorRevisionResponse>;
    /**
     * patchCisInstruction - Patches the CIS instruction
     *
     * Update an existing CIS instruction object
    **/
    patchCisInstruction(req: operations.PatchCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PatchCisInstructionResponse>;
    /**
     * postCisInstructionIntoSubContractor - Create a new CIS instruction
     *
     * Create a new CIS instruction object
    **/
    postCisInstructionIntoSubContractor(req: operations.PostCisInstructionIntoSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PostCisInstructionIntoSubContractorResponse>;
    /**
     * postCisLineTypeIntoEmployer - Create a new CIS line type
     *
     * Create a new CIS line type object
    **/
    postCisLineTypeIntoEmployer(req: operations.PostCisLineTypeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostCisLineTypeIntoEmployerResponse>;
    /**
     * putCisInstructionIntoSubContractor - Updates the CIS instruction
     *
     * Insert or update existing CIS instruction object
    **/
    putCisInstructionIntoSubContractor(req: operations.PutCisInstructionIntoSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PutCisInstructionIntoSubContractorResponse>;
    /**
     * putCisInstructionTag - Insert CIS instruction tag
     *
     * Inserts a new tag on the CIS instruction
    **/
    putCisInstructionTag(req: operations.PutCisInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisInstructionTagResponse>;
    /**
     * putCisLineTag - Insert CIS line tag
     *
     * Inserts a new tag on the CIS line
    **/
    putCisLineTag(req: operations.PutCisLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTagResponse>;
    /**
     * putCisLineTypeIntoEmployer - Updates the CIS line type
     *
     * Updates the existing specified CIS line type object
    **/
    putCisLineTypeIntoEmployer(req: operations.PutCisLineTypeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTypeIntoEmployerResponse>;
    /**
     * putCisLineTypeTag - Insert CIS line type tag
     *
     * Inserts a new tag on the CIS line type
    **/
    putCisLineTypeTag(req: operations.PutCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTypeTagResponse>;
    /**
     * putSubContractorTag - Insert sub contractor tag
     *
     * Inserts a new tag on the sub contractor
    **/
    putSubContractorTag(req: operations.PutSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.PutSubContractorTagResponse>;
}
