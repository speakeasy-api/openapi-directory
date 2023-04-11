import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Journals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a Journal instruction
     *
     * @remarks
     * Delete the specified Journal instruction
     */
    deleteJournalInstruction(req: operations.DeleteJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalInstructionResponse>;
    /**
     * Deletes a Journal instruction template
     *
     * @remarks
     * Delete the specified Journal instruction template object
     */
    deleteJournalInstructionTemplate(req: operations.DeleteJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalInstructionTemplateResponse>;
    /**
     * Gets the specified journal instruction from the employer
     *
     * @remarks
     * Returns the specified journal instruction from employer
     */
    getJournalInstructionFromEmployer(req: operations.GetJournalInstructionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionFromEmployerResponse>;
    /**
     * Gets the Journal instructions template for the application
     *
     * @remarks
     * Retrurns the specified journal instruction from the application
     */
    getJournalInstructionTemplate(req: operations.GetJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionTemplateResponse>;
    /**
     * Gets the Journal instructions templates for the application
     *
     * @remarks
     * Get links to all journal instruction templates for the application
     */
    getJournalInstructionTemplates(req: operations.GetJournalInstructionTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionTemplatesResponse>;
    /**
     * Gets the Journal instructions from the specified employer
     *
     * @remarks
     * Get links to all journal instructions for the specified employer
     */
    getJournalInstructionsFromEmployer(req: operations.GetJournalInstructionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionsFromEmployerResponse>;
    /**
     * Gets the specified journal Line from the employer
     *
     * @remarks
     * Returns the specified journal Line from employer
     */
    getJournalLineFromEmployer(req: operations.GetJournalLineFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLineFromEmployerResponse>;
    /**
     * Gets the journal Lines from the specified employee
     *
     * @remarks
     * Get links to all journal lines for the specified employee
     */
    getJournalLinesFromEmployee(req: operations.GetJournalLinesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromEmployeeResponse>;
    /**
     * Gets the Journal Lines from the specified employer
     *
     * @remarks
     * Get links to all journal Lines for the specified employer
     */
    getJournalLinesFromEmployer(req: operations.GetJournalLinesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromEmployerResponse>;
    /**
     * Gets the journal Lines from the specified pay run
     *
     * @remarks
     * Get links to all journal lines for the specified pay run
     */
    getJournalLinesFromPayRun(req: operations.GetJournalLinesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromPayRunResponse>;
    /**
     * Gets the journal Lines from the specified sub contractor
     *
     * @remarks
     * Get links to all journal lines for the specified sub contractor
     */
    getJournalLinesFromSubContractor(req: operations.GetJournalLinesFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromSubContractorResponse>;
    /**
     * Creates a new Journal Instruction
     *
     * @remarks
     * Creates a new Journal instruction object
     */
    postJournalInstruction(req: operations.PostJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostJournalInstructionResponse>;
    /**
     * Creates a new Journal Instruction template
     *
     * @remarks
     * Creates a new Journal instruction teamplte object
     */
    postJournalInstructionTemplate(req: operations.PostJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PostJournalInstructionTemplateResponse>;
    /**
     * Update a Journal Instruction
     *
     * @remarks
     * Updates the existing specified Journal instruction object
     */
    putJournalInstruction(req: operations.PutJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalInstructionResponse>;
    /**
     * Update a Journal Instruction template
     *
     * @remarks
     * Updates the existing specified Journal instruction template object
     */
    putJournalInstructionTemplate(req: operations.PutJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalInstructionTemplateResponse>;
}
