import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Journals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteJournalInstruction - Deletes a Journal instruction
     *
     * Delete the specified Journal instruction
    **/
    deleteJournalInstruction(req: operations.DeleteJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalInstructionResponse>;
    /**
     * deleteJournalInstructionTemplate - Deletes a Journal instruction template
     *
     * Delete the specified Journal instruction template object
    **/
    deleteJournalInstructionTemplate(req: operations.DeleteJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalInstructionTemplateResponse>;
    /**
     * getJournalInstructionFromEmployer - Gets the specified journal instruction from the employer
     *
     * Returns the specified journal instruction from employer
    **/
    getJournalInstructionFromEmployer(req: operations.GetJournalInstructionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionFromEmployerResponse>;
    /**
     * getJournalInstructionTemplate - Gets the Journal instructions template for the application
     *
     * Retrurns the specified journal instruction from the application
    **/
    getJournalInstructionTemplate(req: operations.GetJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionTemplateResponse>;
    /**
     * getJournalInstructionTemplates - Gets the Journal instructions templates for the application
     *
     * Get links to all journal instruction templates for the application
    **/
    getJournalInstructionTemplates(req: operations.GetJournalInstructionTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionTemplatesResponse>;
    /**
     * getJournalInstructionsFromEmployer - Gets the Journal instructions from the specified employer
     *
     * Get links to all journal instructions for the specified employer
    **/
    getJournalInstructionsFromEmployer(req: operations.GetJournalInstructionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalInstructionsFromEmployerResponse>;
    /**
     * getJournalLineFromEmployer - Gets the specified journal Line from the employer
     *
     * Returns the specified journal Line from employer
    **/
    getJournalLineFromEmployer(req: operations.GetJournalLineFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLineFromEmployerResponse>;
    /**
     * getJournalLinesFromEmployee - Gets the journal Lines from the specified employee
     *
     * Get links to all journal lines for the specified employee
    **/
    getJournalLinesFromEmployee(req: operations.GetJournalLinesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromEmployeeResponse>;
    /**
     * getJournalLinesFromEmployer - Gets the Journal Lines from the specified employer
     *
     * Get links to all journal Lines for the specified employer
    **/
    getJournalLinesFromEmployer(req: operations.GetJournalLinesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromEmployerResponse>;
    /**
     * getJournalLinesFromPayRun - Gets the journal Lines from the specified pay run
     *
     * Get links to all journal lines for the specified pay run
    **/
    getJournalLinesFromPayRun(req: operations.GetJournalLinesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromPayRunResponse>;
    /**
     * getJournalLinesFromSubContractor - Gets the journal Lines from the specified sub contractor
     *
     * Get links to all journal lines for the specified sub contractor
    **/
    getJournalLinesFromSubContractor(req: operations.GetJournalLinesFromSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalLinesFromSubContractorResponse>;
    /**
     * postJournalInstruction - Creates a new Journal Instruction
     *
     * Creates a new Journal instruction object
    **/
    postJournalInstruction(req: operations.PostJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PostJournalInstructionResponse>;
    /**
     * postJournalInstructionTemplate - Creates a new Journal Instruction template
     *
     * Creates a new Journal instruction teamplte object
    **/
    postJournalInstructionTemplate(req: operations.PostJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PostJournalInstructionTemplateResponse>;
    /**
     * putJournalInstruction - Update a Journal Instruction
     *
     * Updates the existing specified Journal instruction object
    **/
    putJournalInstruction(req: operations.PutJournalInstructionRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalInstructionResponse>;
    /**
     * putJournalInstructionTemplate - Update a Journal Instruction template
     *
     * Updates the existing specified Journal instruction template object
    **/
    putJournalInstructionTemplate(req: operations.PutJournalInstructionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalInstructionTemplateResponse>;
}
