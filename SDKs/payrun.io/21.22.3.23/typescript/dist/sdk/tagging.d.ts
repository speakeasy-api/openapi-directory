import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tagging {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCisInstructionTag - Delete CIS instruction tag
     *
     * Deletes a tag from the CIS instruction
    **/
    deleteCisInstructionTag(req: operations.DeleteCisInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisInstructionTagResponse>;
    /**
     * deleteCisLineTag - Delete CIS line tag
     *
     * Deletes a tag from the CIS line
    **/
    deleteCisLineTag(req: operations.DeleteCisLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTagResponse>;
    /**
     * deleteCisLineTypeTag - Delete CIS line type tag
     *
     * Deletes a tag from the CIS line type
    **/
    deleteCisLineTypeTag(req: operations.DeleteCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTypeTagResponse>;
    /**
     * deleteEmployeeTag - Delete employee tag
     *
     * Deletes a tag from the employee
    **/
    deleteEmployeeTag(req: operations.DeleteEmployeeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeTagResponse>;
    /**
     * deleteEmployerTag - Delete employer tag
     *
     * Deletes a tag from the employer
    **/
    deleteEmployerTag(req: operations.DeleteEmployerTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerTagResponse>;
    /**
     * deleteHolidaySchemeTag - Delete holiday scheme tag
     *
     * Deletes a tag from the holiday scheme
    **/
    deleteHolidaySchemeTag(req: operations.DeleteHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeTagResponse>;
    /**
     * deleteJournalLineTag - Delete journal line tag
     *
     * Deletes a tag from the journal line
    **/
    deleteJournalLineTag(req: operations.DeleteJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalLineTagResponse>;
    /**
     * deletePayCodeTag - Delete pay code tag
     *
     * Deletes a tag from the pay code
    **/
    deletePayCodeTag(req: operations.DeletePayCodeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeTagResponse>;
    /**
     * deletePayInstructionTag - Delete pay instruction tag
     *
     * Deletes a tag from the pay instruction
    **/
    deletePayInstructionTag(req: operations.DeletePayInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayInstructionTagResponse>;
    /**
     * deletePayLineTag - Delete pay line tag
     *
     * Deletes a tag from the pay line
    **/
    deletePayLineTag(req: operations.DeletePayLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayLineTagResponse>;
    /**
     * deletePayRunTag - Delete pay run tag
     *
     * Deletes a tag from the pay run
    **/
    deletePayRunTag(req: operations.DeletePayRunTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunTagResponse>;
    /**
     * deletePayScheduleTag - Delete pay schedule tag
     *
     * Deletes a tag from the pay schedule
    **/
    deletePayScheduleTag(req: operations.DeletePayScheduleTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayScheduleTagResponse>;
    /**
     * deleteRtiTransactionTag - Delete RTI transaction tag
     *
     * Deletes a tag from the RTI transaction
    **/
    deleteRtiTransactionTag(req: operations.DeleteRtiTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiTransactionTagResponse>;
    /**
     * deleteSubContractorTag - Delete sub contractor tag
     *
     * Deletes a tag from the sub contractor
    **/
    deleteSubContractorTag(req: operations.DeleteSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorTagResponse>;
    /**
     * deleteThirdPartyTransactionTag - Delete third party transaction tag
     *
     * Deletes a tag from the third party transaction
    **/
    deleteThirdPartyTransactionTag(req: operations.DeleteThirdPartyTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyTransactionTagResponse>;
    /**
     * deleteUserTag - Delete user tag
     *
     * Deletes a tag from the user
    **/
    deleteUserTag(req: operations.DeleteUserTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagResponse>;
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
     * getAllEmployeeTags - Get all employee tags
     *
     * Gets all the employee tags
    **/
    getAllEmployeeTags(req: operations.GetAllEmployeeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployeeTagsResponse>;
    /**
     * getAllEmployerTags - Get all employer tags
     *
     * Gets all the employer tags
    **/
    getAllEmployerTags(req: operations.GetAllEmployerTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployerTagsResponse>;
    /**
     * getAllHolidaySchemeTags - Get all holiday scheme tags
     *
     * Gets all the holiday scheme tags
    **/
    getAllHolidaySchemeTags(req: operations.GetAllHolidaySchemeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllHolidaySchemeTagsResponse>;
    /**
     * getAllJournalLineTags - Get all journal line tags
     *
     * Gets all the journal line tags
    **/
    getAllJournalLineTags(req: operations.GetAllJournalLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLineTagsResponse>;
    /**
     * getAllJournalLinesWithTag - Get links to tagged journal lines
     *
     * Gets the journal lines with the specified tag
    **/
    getAllJournalLinesWithTag(req: operations.GetAllJournalLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLinesWithTagResponse>;
    /**
     * getAllPayCodeTags - Get all pay code tags
     *
     * Gets all the pay code tags
    **/
    getAllPayCodeTags(req: operations.GetAllPayCodeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayCodeTagsResponse>;
    /**
     * getAllPayInstructionTags - Get all pay instruction tags
     *
     * Gets all the pay instruction tags
    **/
    getAllPayInstructionTags(req: operations.GetAllPayInstructionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayInstructionTagsResponse>;
    /**
     * getAllPayLineTags - Get all pay line tags
     *
     * Gets all the pay line tags
    **/
    getAllPayLineTags(req: operations.GetAllPayLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayLineTagsResponse>;
    /**
     * getAllPayRunTags - Get all pay run tags
     *
     * Gets all the pay run tags
    **/
    getAllPayRunTags(req: operations.GetAllPayRunTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayRunTagsResponse>;
    /**
     * getAllPayScheduleTags - Get all pay schedule tags
     *
     * Gets all the pay schedule tags
    **/
    getAllPayScheduleTags(req: operations.GetAllPayScheduleTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayScheduleTagsResponse>;
    /**
     * getAllRtiTransactionTags - Get all RTI transaction tags
     *
     * Gets all the RTI transaction tags
    **/
    getAllRtiTransactionTags(req: operations.GetAllRtiTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllRtiTransactionTagsResponse>;
    /**
     * getAllSubContractorTags - Get all sub contractor tags
     *
     * Gets all the sub contractor tags
    **/
    getAllSubContractorTags(req: operations.GetAllSubContractorTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllSubContractorTagsResponse>;
    /**
     * getAllThirdPartyTransactionTags - Get all third party transaction tags
     *
     * Gets all the third party transaction tags
    **/
    getAllThirdPartyTransactionTags(req: operations.GetAllThirdPartyTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllThirdPartyTransactionTagsResponse>;
    /**
     * getAllThirdPartyTransactionsWithTag - Get links to tagged third party transactions
     *
     * Gets the third party transactions with the specified tag
    **/
    getAllThirdPartyTransactionsWithTag(req: operations.GetAllThirdPartyTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllThirdPartyTransactionsWithTagResponse>;
    /**
     * getAllUserTags - Get all user tags
     *
     * Get all tags from all users
    **/
    getAllUserTags(req: operations.GetAllUserTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUserTagsResponse>;
    /**
     * getAllUsersWithTag - Get links to tagged users
     *
     * Gets the users with the specified tag
    **/
    getAllUsersWithTag(req: operations.GetAllUsersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUsersWithTagResponse>;
    /**
     * getCisInstructionsWithTag - Get CIS instructions with tag
     *
     * Gets the CIS instruction with the tag
    **/
    getCisInstructionsWithTag(req: operations.GetCisInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionsWithTagResponse>;
    /**
     * getCisLineTypesWithTag - Get CIS line types with tag
     *
     * Gets the CIS line type with the tag
    **/
    getCisLineTypesWithTag(req: operations.GetCisLineTypesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypesWithTagResponse>;
    /**
     * getCisLinesWithTag - Get CIS lines with tag
     *
     * Gets the CIS line with the tag
    **/
    getCisLinesWithTag(req: operations.GetCisLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLinesWithTagResponse>;
    /**
     * getEmployeesWithTag - Get employees with tag
     *
     * Gets the employees with the tag
    **/
    getEmployeesWithTag(req: operations.GetEmployeesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesWithTagResponse>;
    /**
     * getEmployersWithTag - Get employers with tag
     *
     * Gets the employers with the tag
    **/
    getEmployersWithTag(req: operations.GetEmployersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersWithTagResponse>;
    /**
     * getHolidaySchemesWithTag - Get holiday schemes with tag
     *
     * Gets the holiday scheme with the tag
    **/
    getHolidaySchemesWithTag(req: operations.GetHolidaySchemesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesWithTagResponse>;
    /**
     * getPayCodesWithTag - Get pay codes with tag
     *
     * Gets the pay codes with the tag
    **/
    getPayCodesWithTag(req: operations.GetPayCodesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesWithTagResponse>;
    /**
     * getPayInstructionsWithTag - Get pay instructions with tag
     *
     * Gets the pay instructions with the tag
    **/
    getPayInstructionsWithTag(req: operations.GetPayInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionsWithTagResponse>;
    /**
     * getPayLinesWithTag - Get pay lines with tag
     *
     * Gets the pay line with the tag
    **/
    getPayLinesWithTag(req: operations.GetPayLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesWithTagResponse>;
    /**
     * getPayRunsWithTag - Get pay runs with tag
     *
     * Gets the pay runs with the tag
    **/
    getPayRunsWithTag(req: operations.GetPayRunsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsWithTagResponse>;
    /**
     * getPaySchedulesWithTag - Get pay schedule with tag
     *
     * Gets the pay schedules with the tag
    **/
    getPaySchedulesWithTag(req: operations.GetPaySchedulesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPaySchedulesWithTagResponse>;
    /**
     * getRtiTransactionsWithTag - Get RTI transactions with tag
     *
     * Gets the RTI transactions with the tag
    **/
    getRtiTransactionsWithTag(req: operations.GetRtiTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionsWithTagResponse>;
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
     * getTagFromEmployee - Get employee tag
     *
     * Gets the tag from the employee
    **/
    getTagFromEmployee(req: operations.GetTagFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployeeResponse>;
    /**
     * getTagFromEmployeeRevision - Get employee revision tag
     *
     * Gets the tag from the employee revision
    **/
    getTagFromEmployeeRevision(req: operations.GetTagFromEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployeeRevisionResponse>;
    /**
     * getTagFromEmployer - Get employer tag
     *
     * Gets the tag from the employer
    **/
    getTagFromEmployer(req: operations.GetTagFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployerResponse>;
    /**
     * getTagFromEmployerRevision - Get employer revision tag
     *
     * Gets the tag from the employer revision
    **/
    getTagFromEmployerRevision(req: operations.GetTagFromEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployerRevisionResponse>;
    /**
     * getTagFromHolidayScheme - Get holiday scheme tag
     *
     * Gets the tag from the holiday scheme
    **/
    getTagFromHolidayScheme(req: operations.GetTagFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeResponse>;
    /**
     * getTagFromHolidaySchemeRevision - Get holiday scheme revision tag
     *
     * Gets the tag from the holiday scheme revision
    **/
    getTagFromHolidaySchemeRevision(req: operations.GetTagFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeRevisionResponse>;
    /**
     * getTagFromJournalLine - Get journal line tag
     *
     * Gets a tag from the journal line
    **/
    getTagFromJournalLine(req: operations.GetTagFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromJournalLineResponse>;
    /**
     * getTagFromPayCode - Get pay code tag
     *
     * Gets the tag from the pay code
    **/
    getTagFromPayCode(req: operations.GetTagFromPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayCodeResponse>;
    /**
     * getTagFromPayInstruction - Get pay instruction tag
     *
     * Gets the tag from the pay instruction
    **/
    getTagFromPayInstruction(req: operations.GetTagFromPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayInstructionResponse>;
    /**
     * getTagFromPayLine - Get pay line tag
     *
     * Gets the tag from the pay line
    **/
    getTagFromPayLine(req: operations.GetTagFromPayLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayLineResponse>;
    /**
     * getTagFromPayRun - Get pay run tag
     *
     * Gets the tag from the pay run
    **/
    getTagFromPayRun(req: operations.GetTagFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayRunResponse>;
    /**
     * getTagFromPaySchedule - Get pay schedule tag
     *
     * Gets the tag from the pay schedule
    **/
    getTagFromPaySchedule(req: operations.GetTagFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayScheduleResponse>;
    /**
     * getTagFromRtiTransaction - Get RTI transaction tag
     *
     * Gets the tag from the RTI transaction
    **/
    getTagFromRtiTransaction(req: operations.GetTagFromRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromRtiTransactionResponse>;
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
     * getTagFromThirdPartyTransaction - Get third party transaction tag
     *
     * Gets a tag from the third party transaction
    **/
    getTagFromThirdPartyTransaction(req: operations.GetTagFromThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromThirdPartyTransactionResponse>;
    /**
     * getTagFromUser - Get user tag
     *
     * Gets a tag from the user
    **/
    getTagFromUser(req: operations.GetTagFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromUserResponse>;
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
     * getTagsFromEmployee - Get all employee tags
     *
     * Gets all the tags from the employee
    **/
    getTagsFromEmployee(req: operations.GetTagsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployeeResponse>;
    /**
     * getTagsFromEmployeeRevision - Get all employee revision tags
     *
     * Gets all the tags from the employee revision
    **/
    getTagsFromEmployeeRevision(req: operations.GetTagsFromEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployeeRevisionResponse>;
    /**
     * getTagsFromEmployer - Get all employer tags
     *
     * Gets all the tags from the employer
    **/
    getTagsFromEmployer(req: operations.GetTagsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployerResponse>;
    /**
     * getTagsFromEmployerRevision - Get all employer revision tags
     *
     * Gets all the tags from the employer revision
    **/
    getTagsFromEmployerRevision(req: operations.GetTagsFromEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployerRevisionResponse>;
    /**
     * getTagsFromHolidayScheme - Get all tags from the holiday scheme
     *
     * Gets all the tags from the holiday scheme
    **/
    getTagsFromHolidayScheme(req: operations.GetTagsFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeResponse>;
    /**
     * getTagsFromHolidaySchemeRevision - Get all holiday scheme revision tags
     *
     * Gets all the tags from the holiday scheme revision
    **/
    getTagsFromHolidaySchemeRevision(req: operations.GetTagsFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeRevisionResponse>;
    /**
     * getTagsFromJournalLine - Get tags from journal line
     *
     * Gets all tags from the journal line
    **/
    getTagsFromJournalLine(req: operations.GetTagsFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromJournalLineResponse>;
    /**
     * getTagsFromPayCode - Get all pay code tags
     *
     * Gets all the tags from the pay code
    **/
    getTagsFromPayCode(req: operations.GetTagsFromPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayCodeResponse>;
    /**
     * getTagsFromPayInstruction - Get all tags from the pay instruction
     *
     * Gets all the tags from the pay instruction
    **/
    getTagsFromPayInstruction(req: operations.GetTagsFromPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayInstructionResponse>;
    /**
     * getTagsFromPayLine - Get all tags from the pay line
     *
     * Gets all the tags from the pay line
    **/
    getTagsFromPayLine(req: operations.GetTagsFromPayLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayLineResponse>;
    /**
     * getTagsFromPayRun - Get all pay run tags
     *
     * Gets all the tags from the pay run
    **/
    getTagsFromPayRun(req: operations.GetTagsFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayRunResponse>;
    /**
     * getTagsFromPaySchedule - Get all pay schedule tags
     *
     * Gets all the tags from the pay schedule
    **/
    getTagsFromPaySchedule(req: operations.GetTagsFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayScheduleResponse>;
    /**
     * getTagsFromRtiTransaction - Get all tags from RTI transaction
     *
     * Gets all the tags from the RTI transaction
    **/
    getTagsFromRtiTransaction(req: operations.GetTagsFromRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromRtiTransactionResponse>;
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
     * getTagsFromThirdPartyTransaction - Get tags from third party transaction
     *
     * Gets all tags from the third party transaction
    **/
    getTagsFromThirdPartyTransaction(req: operations.GetTagsFromThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromThirdPartyTransactionResponse>;
    /**
     * getTagsFromUser - Get tags from user
     *
     * Gets all tags from the user
    **/
    getTagsFromUser(req: operations.GetTagsFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromUserResponse>;
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
     * putCisLineTypeTag - Insert CIS line type tag
     *
     * Inserts a new tag on the CIS line type
    **/
    putCisLineTypeTag(req: operations.PutCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTypeTagResponse>;
    /**
     * putEmployeeTag - Insert employee tag
     *
     * Inserts a new tag on the employee
    **/
    putEmployeeTag(req: operations.PutEmployeeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeTagResponse>;
    /**
     * putEmployerTag - Insert employer tag
     *
     * Inserts a new tag on the employer
    **/
    putEmployerTag(req: operations.PutEmployerTagRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerTagResponse>;
    /**
     * putHolidaySchemeTag - Insert holiday scheme tag
     *
     * Inserts a new tag on the holiday scheme
    **/
    putHolidaySchemeTag(req: operations.PutHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutHolidaySchemeTagResponse>;
    /**
     * putJournalLineTag - Insert journal line tag
     *
     * Inserts a tag on the journal line
    **/
    putJournalLineTag(req: operations.PutJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalLineTagResponse>;
    /**
     * putPayCodeTag - Insert pay code tag
     *
     * Inserts a new tag on the pay code
    **/
    putPayCodeTag(req: operations.PutPayCodeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayCodeTagResponse>;
    /**
     * putPayInstructionTag - Insert pay instruction tag
     *
     * Inserts a new tag on the pay instruction
    **/
    putPayInstructionTag(req: operations.PutPayInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayInstructionTagResponse>;
    /**
     * putPayLineTag - Insert pay line tag
     *
     * Inserts a new tag on the pay line
    **/
    putPayLineTag(req: operations.PutPayLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayLineTagResponse>;
    /**
     * putPayRunTag - Insert pay run tag
     *
     * Inserts a new tag on the pay run
    **/
    putPayRunTag(req: operations.PutPayRunTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayRunTagResponse>;
    /**
     * putPayScheduleTag - Insert pay schedule tag
     *
     * Inserts a new tag on the pay schedule
    **/
    putPayScheduleTag(req: operations.PutPayScheduleTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayScheduleTagResponse>;
    /**
     * putRtiTransactionTag - Insert RTI transaction tag
     *
     * Inserts a new tag on the RTI transaction
    **/
    putRtiTransactionTag(req: operations.PutRtiTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutRtiTransactionTagResponse>;
    /**
     * putSubContractorTag - Insert sub contractor tag
     *
     * Inserts a new tag on the sub contractor
    **/
    putSubContractorTag(req: operations.PutSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.PutSubContractorTagResponse>;
    /**
     * putThirdPartyTransactionTag - insert third party transaction tag
     *
     * Inserts a tag on the third party transaction
    **/
    putThirdPartyTransactionTag(req: operations.PutThirdPartyTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutThirdPartyTransactionTagResponse>;
    /**
     * putUserTag - Insert user tag
     *
     * Inserts a tag on the user
    **/
    putUserTag(req: operations.PutUserTagRequest, config?: AxiosRequestConfig): Promise<operations.PutUserTagResponse>;
}
