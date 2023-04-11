import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a CIS instruction
     *
     * @remarks
     * Delete the specified CIS instruction
     */
    deleteCisInstruction(req: operations.DeleteCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisInstructionResponse>;
    /**
     * Delete CIS instruction tag
     *
     * @remarks
     * Deletes a tag from the CIS instruction
     */
    deleteCisInstructionTag(req: operations.DeleteCisInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisInstructionTagResponse>;
    /**
     * Delete a CIS line
     *
     * @remarks
     * Delete the specified CIS line
     */
    deleteCisLine(req: operations.DeleteCisLineRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineResponse>;
    /**
     * Delete CIS line tag
     *
     * @remarks
     * Deletes a tag from the CIS line
     */
    deleteCisLineTag(req: operations.DeleteCisLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTagResponse>;
    /**
     * Delete an CIS line type
     *
     * @remarks
     * Delete the specified CIS line type
     */
    deleteCisLineType(req: operations.DeleteCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTypeResponse>;
    /**
     * Delete CIS line type tag
     *
     * @remarks
     * Deletes a tag from the CIS line type
     */
    deleteCisLineTypeTag(req: operations.DeleteCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTypeTagResponse>;
    /**
     * Delete the CIS transaction
     *
     * @remarks
     * Deletes the specified CIS transaction
     */
    deleteCisTransaction(req: operations.DeleteCisTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisTransactionResponse>;
    /**
     * Delete sub contractor tag
     *
     * @remarks
     * Deletes a tag from the sub contractor
     */
    deleteSubContractorTag(req: operations.DeleteSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorTagResponse>;
    /**
     * Get all CIS instruction tags
     *
     * @remarks
     * Gets all the CIS instruction tags
     */
    getAllCisInstructionTags(req: operations.GetAllCisInstructionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisInstructionTagsResponse>;
    /**
     * Get all CIS line tags
     *
     * @remarks
     * Gets all the CIS line tags
     */
    getAllCisLineTags(req: operations.GetAllCisLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisLineTagsResponse>;
    /**
     * Get all CIS line type tags
     *
     * @remarks
     * Gets all the CIS line type tags
     */
    getAllCisLineTypeTags(req: operations.GetAllCisLineTypeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCisLineTypeTagsResponse>;
    /**
     * Get all sub contractor tags
     *
     * @remarks
     * Gets all the sub contractor tags
     */
    getAllSubContractorTags(req: operations.GetAllSubContractorTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllSubContractorTagsResponse>;
    /**
     * Get CIS instruction from sub contractor
     *
     * @remarks
     * Gets the specified CIS instruction from sub contractor.
     */
    getCisInstructionFromSubContractor(req: operations.GetCisInstructionFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionFromSubContractorResponse>;
    /**
     * Get CIS instructions from sub contractor.
     *
     * @remarks
     * Get links to all CIS instructions for the specified sub contractor.
     */
    getCisInstructionsFromSubContractor(req: operations.GetCisInstructionsFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionsFromSubContractorResponse>;
    /**
     * Get CIS instructions with tag
     *
     * @remarks
     * Gets the CIS instruction with the tag
     */
    getCisInstructionsWithTag(req: operations.GetCisInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionsWithTagResponse>;
    /**
     * Get CIS line from sub contractor
     *
     * @remarks
     * Gets the specified CIS line from sub contractor.
     */
    getCisLineFromSubContractor(req: operations.GetCisLineFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineFromSubContractorResponse>;
    /**
     * Get CIS line type from employer
     *
     * @remarks
     * Gets the specified CIS line type from employer.
     */
    getCisLineTypeFromEmployer(req: operations.GetCisLineTypeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypeFromEmployerResponse>;
    /**
     * Get CIS line types from employer.
     *
     * @remarks
     * Get links to all CIS line types for the specified employer.
     */
    getCisLineTypesFromEmployer(req: operations.GetCisLineTypesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypesFromEmployerResponse>;
    /**
     * Get CIS line types with tag
     *
     * @remarks
     * Gets the CIS line type with the tag
     */
    getCisLineTypesWithTag(req: operations.GetCisLineTypesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypesWithTagResponse>;
    /**
     * Get CIS lines from sub contractor.
     *
     * @remarks
     * Get links to all CIS lines for the specified sub contractor.
     */
    getCisLinesFromSubContractor(req: operations.GetCisLinesFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLinesFromSubContractorResponse>;
    /**
     * Get CIS lines with tag
     *
     * @remarks
     * Gets the CIS line with the tag
     */
    getCisLinesWithTag(req: operations.GetCisLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLinesWithTagResponse>;
    /**
     * Get the CIS transaction
     *
     * @remarks
     * Returns the specified CIS transaction
     */
    getCisTransactionFromEmployer(req: operations.GetCisTransactionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisTransactionFromEmployerResponse>;
    /**
     * Get all CIS transactions for the employer
     *
     * @remarks
     * Get links for all CIS transactions for the specified employer
     */
    getCisTransactionsFromEmployer(req: operations.GetCisTransactionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetCisTransactionsFromEmployerResponse>;
    /**
     * Get sub contractors with tag
     *
     * @remarks
     * Gets the sub contractor with the tag
     */
    getSubContractorsWithTag(req: operations.GetSubContractorsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsWithTagResponse>;
    /**
     * Get CIS instruction tag
     *
     * @remarks
     * Gets the tag from the CIS instruction
     */
    getTagFromCisInstruction(req: operations.GetTagFromCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisInstructionResponse>;
    /**
     * Get CIS line tag
     *
     * @remarks
     * Gets the tag from the CIS line
     */
    getTagFromCisLine(req: operations.GetTagFromCisLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisLineResponse>;
    /**
     * Get CIS line type tag
     *
     * @remarks
     * Gets the tag from the CIS line type
     */
    getTagFromCisLineType(req: operations.GetTagFromCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromCisLineTypeResponse>;
    /**
     * Get sub contractor tag
     *
     * @remarks
     * Gets the tag from the sub contractor
     */
    getTagFromSubContractor(req: operations.GetTagFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromSubContractorResponse>;
    /**
     * Get sub contractor revision tag
     *
     * @remarks
     * Gets the tag from the sub contractor revision
     */
    getTagFromSubContractorRevision(req: operations.GetTagFromSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromSubContractorRevisionResponse>;
    /**
     * Get all tags from the CIS instruction
     *
     * @remarks
     * Gets all the tags from the CIS instruction
     */
    getTagsFromCisInstruction(req: operations.GetTagsFromCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisInstructionResponse>;
    /**
     * Get all tags from the CIS line
     *
     * @remarks
     * Gets all the tags from the CIS line
     */
    getTagsFromCisLine(req: operations.GetTagsFromCisLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisLineResponse>;
    /**
     * Get all tags from the CIS line type
     *
     * @remarks
     * Gets all the tags from the CIS line type
     */
    getTagsFromCisLineType(req: operations.GetTagsFromCisLineTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromCisLineTypeResponse>;
    /**
     * Get all tags from the sub contractor
     *
     * @remarks
     * Gets all the tags from the sub contractor
     */
    getTagsFromSubContractor(req: operations.GetTagsFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromSubContractorResponse>;
    /**
     * Get all sub contractor revision tags
     *
     * @remarks
     * Gets all the tags from the sub contractor revision
     */
    getTagsFromSubContractorRevision(req: operations.GetTagsFromSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromSubContractorRevisionResponse>;
    /**
     * Patches the CIS instruction
     *
     * @remarks
     * Update an existing CIS instruction object
     */
    patchCisInstruction(req: operations.PatchCisInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PatchCisInstructionResponse>;
    /**
     * Create a new CIS instruction
     *
     * @remarks
     * Create a new CIS instruction object
     */
    postCisInstructionIntoSubContractor(req: operations.PostCisInstructionIntoSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PostCisInstructionIntoSubContractorResponse>;
    /**
     * Create a new CIS line type
     *
     * @remarks
     * Create a new CIS line type object
     */
    postCisLineTypeIntoEmployer(req: operations.PostCisLineTypeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostCisLineTypeIntoEmployerResponse>;
    /**
     * Updates the CIS instruction
     *
     * @remarks
     * Insert or update existing CIS instruction object
     */
    putCisInstructionIntoSubContractor(req: operations.PutCisInstructionIntoSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PutCisInstructionIntoSubContractorResponse>;
    /**
     * Insert CIS instruction tag
     *
     * @remarks
     * Inserts a new tag on the CIS instruction
     */
    putCisInstructionTag(req: operations.PutCisInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisInstructionTagResponse>;
    /**
     * Insert CIS line tag
     *
     * @remarks
     * Inserts a new tag on the CIS line
     */
    putCisLineTag(req: operations.PutCisLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTagResponse>;
    /**
     * Updates the CIS line type
     *
     * @remarks
     * Updates the existing specified CIS line type object
     */
    putCisLineTypeIntoEmployer(req: operations.PutCisLineTypeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTypeIntoEmployerResponse>;
    /**
     * Insert CIS line type tag
     *
     * @remarks
     * Inserts a new tag on the CIS line type
     */
    putCisLineTypeTag(req: operations.PutCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTypeTagResponse>;
    /**
     * Insert sub contractor tag
     *
     * @remarks
     * Inserts a new tag on the sub contractor
     */
    putSubContractorTag(req: operations.PutSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.PutSubContractorTagResponse>;
}
