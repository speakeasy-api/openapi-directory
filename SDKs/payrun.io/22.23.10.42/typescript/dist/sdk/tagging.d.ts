import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tagging {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete CIS instruction tag
     *
     * @remarks
     * Deletes a tag from the CIS instruction
     */
    deleteCisInstructionTag(req: operations.DeleteCisInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisInstructionTagResponse>;
    /**
     * Delete CIS line tag
     *
     * @remarks
     * Deletes a tag from the CIS line
     */
    deleteCisLineTag(req: operations.DeleteCisLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTagResponse>;
    /**
     * Delete CIS line type tag
     *
     * @remarks
     * Deletes a tag from the CIS line type
     */
    deleteCisLineTypeTag(req: operations.DeleteCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisLineTypeTagResponse>;
    /**
     * Delete employee tag
     *
     * @remarks
     * Deletes a tag from the employee
     */
    deleteEmployeeTag(req: operations.DeleteEmployeeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeTagResponse>;
    /**
     * Delete employer tag
     *
     * @remarks
     * Deletes a tag from the employer
     */
    deleteEmployerTag(req: operations.DeleteEmployerTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerTagResponse>;
    /**
     * Delete holiday scheme tag
     *
     * @remarks
     * Deletes a tag from the holiday scheme
     */
    deleteHolidaySchemeTag(req: operations.DeleteHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeTagResponse>;
    /**
     * Delete journal line tag
     *
     * @remarks
     * Deletes a tag from the journal line
     */
    deleteJournalLineTag(req: operations.DeleteJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalLineTagResponse>;
    /**
     * Delete pay code tag
     *
     * @remarks
     * Deletes a tag from the pay code
     */
    deletePayCodeTag(req: operations.DeletePayCodeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeTagResponse>;
    /**
     * Delete pay instruction tag
     *
     * @remarks
     * Deletes a tag from the pay instruction
     */
    deletePayInstructionTag(req: operations.DeletePayInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayInstructionTagResponse>;
    /**
     * Delete pay line tag
     *
     * @remarks
     * Deletes a tag from the pay line
     */
    deletePayLineTag(req: operations.DeletePayLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayLineTagResponse>;
    /**
     * Delete pay run tag
     *
     * @remarks
     * Deletes a tag from the pay run
     */
    deletePayRunTag(req: operations.DeletePayRunTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunTagResponse>;
    /**
     * Delete pay schedule tag
     *
     * @remarks
     * Deletes a tag from the pay schedule
     */
    deletePayScheduleTag(req: operations.DeletePayScheduleTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayScheduleTagResponse>;
    /**
     * Delete Permission tag
     *
     * @remarks
     * Deletes a tag from the Permission
     */
    deletePermissionTag(req: operations.DeletePermissionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionTagResponse>;
    /**
     * Delete RTI transaction tag
     *
     * @remarks
     * Deletes a tag from the RTI transaction
     */
    deleteRtiTransactionTag(req: operations.DeleteRtiTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiTransactionTagResponse>;
    /**
     * Delete sub contractor tag
     *
     * @remarks
     * Deletes a tag from the sub contractor
     */
    deleteSubContractorTag(req: operations.DeleteSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorTagResponse>;
    /**
     * Delete third party transaction tag
     *
     * @remarks
     * Deletes a tag from the third party transaction
     */
    deleteThirdPartyTransactionTag(req: operations.DeleteThirdPartyTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyTransactionTagResponse>;
    /**
     * Delete user tag
     *
     * @remarks
     * Deletes a tag from the user
     */
    deleteUserTag(req: operations.DeleteUserTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagResponse>;
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
     * Get all employee tags
     *
     * @remarks
     * Gets all the employee tags
     */
    getAllEmployeeTags(req: operations.GetAllEmployeeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployeeTagsResponse>;
    /**
     * Get all employer tags
     *
     * @remarks
     * Gets all the employer tags
     */
    getAllEmployerTags(req: operations.GetAllEmployerTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployerTagsResponse>;
    /**
     * Get all holiday scheme tags
     *
     * @remarks
     * Gets all the holiday scheme tags
     */
    getAllHolidaySchemeTags(req: operations.GetAllHolidaySchemeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllHolidaySchemeTagsResponse>;
    /**
     * Get all journal line tags
     *
     * @remarks
     * Gets all the journal line tags
     */
    getAllJournalLineTags(req: operations.GetAllJournalLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLineTagsResponse>;
    /**
     * Get links to tagged journal lines
     *
     * @remarks
     * Gets the journal lines with the specified tag
     */
    getAllJournalLinesWithTag(req: operations.GetAllJournalLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLinesWithTagResponse>;
    /**
     * Get all pay code tags
     *
     * @remarks
     * Gets all the pay code tags
     */
    getAllPayCodeTags(req: operations.GetAllPayCodeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayCodeTagsResponse>;
    /**
     * Get all pay instruction tags
     *
     * @remarks
     * Gets all the pay instruction tags
     */
    getAllPayInstructionTags(req: operations.GetAllPayInstructionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayInstructionTagsResponse>;
    /**
     * Get all pay line tags
     *
     * @remarks
     * Gets all the pay line tags
     */
    getAllPayLineTags(req: operations.GetAllPayLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayLineTagsResponse>;
    /**
     * Get all pay run tags
     *
     * @remarks
     * Gets all the pay run tags
     */
    getAllPayRunTags(req: operations.GetAllPayRunTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayRunTagsResponse>;
    /**
     * Get all pay schedule tags
     *
     * @remarks
     * Gets all the pay schedule tags
     */
    getAllPayScheduleTags(req: operations.GetAllPayScheduleTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayScheduleTagsResponse>;
    /**
     * Get all Permission tags
     *
     * @remarks
     * Get all tags from all Permissions
     */
    getAllPermissionTags(req: operations.GetAllPermissionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPermissionTagsResponse>;
    /**
     * Get links to tagged Permissions
     *
     * @remarks
     * Gets the Permissions with the specified tag
     */
    getAllPermissionsWithTag(req: operations.GetAllPermissionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPermissionsWithTagResponse>;
    /**
     * Get all RTI transaction tags
     *
     * @remarks
     * Gets all the RTI transaction tags
     */
    getAllRtiTransactionTags(req: operations.GetAllRtiTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllRtiTransactionTagsResponse>;
    /**
     * Get all sub contractor tags
     *
     * @remarks
     * Gets all the sub contractor tags
     */
    getAllSubContractorTags(req: operations.GetAllSubContractorTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllSubContractorTagsResponse>;
    /**
     * Get all third party transaction tags
     *
     * @remarks
     * Gets all the third party transaction tags
     */
    getAllThirdPartyTransactionTags(req: operations.GetAllThirdPartyTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllThirdPartyTransactionTagsResponse>;
    /**
     * Get links to tagged third party transactions
     *
     * @remarks
     * Gets the third party transactions with the specified tag
     */
    getAllThirdPartyTransactionsWithTag(req: operations.GetAllThirdPartyTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllThirdPartyTransactionsWithTagResponse>;
    /**
     * Get all user tags
     *
     * @remarks
     * Get all tags from all users
     */
    getAllUserTags(req: operations.GetAllUserTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUserTagsResponse>;
    /**
     * Get links to tagged users
     *
     * @remarks
     * Gets the users with the specified tag
     */
    getAllUsersWithTag(req: operations.GetAllUsersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUsersWithTagResponse>;
    /**
     * Get CIS instructions with tag
     *
     * @remarks
     * Gets the CIS instruction with the tag
     */
    getCisInstructionsWithTag(req: operations.GetCisInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisInstructionsWithTagResponse>;
    /**
     * Get CIS line types with tag
     *
     * @remarks
     * Gets the CIS line type with the tag
     */
    getCisLineTypesWithTag(req: operations.GetCisLineTypesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLineTypesWithTagResponse>;
    /**
     * Get CIS lines with tag
     *
     * @remarks
     * Gets the CIS line with the tag
     */
    getCisLinesWithTag(req: operations.GetCisLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetCisLinesWithTagResponse>;
    /**
     * Get employees with tag
     *
     * @remarks
     * Gets the employees with the tag
     */
    getEmployeesWithTag(req: operations.GetEmployeesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesWithTagResponse>;
    /**
     * Get employers with tag
     *
     * @remarks
     * Gets the employers with the tag
     */
    getEmployersWithTag(req: operations.GetEmployersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersWithTagResponse>;
    /**
     * Get holiday schemes with tag
     *
     * @remarks
     * Gets the holiday scheme with the tag
     */
    getHolidaySchemesWithTag(req: operations.GetHolidaySchemesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesWithTagResponse>;
    /**
     * Get pay codes with tag
     *
     * @remarks
     * Gets the pay codes with the tag
     */
    getPayCodesWithTag(req: operations.GetPayCodesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesWithTagResponse>;
    /**
     * Get pay instructions with tag
     *
     * @remarks
     * Gets the pay instructions with the tag
     */
    getPayInstructionsWithTag(req: operations.GetPayInstructionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayInstructionsWithTagResponse>;
    /**
     * Get pay lines with tag
     *
     * @remarks
     * Gets the pay line with the tag
     */
    getPayLinesWithTag(req: operations.GetPayLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayLinesWithTagResponse>;
    /**
     * Get pay runs with tag
     *
     * @remarks
     * Gets the pay runs with the tag
     */
    getPayRunsWithTag(req: operations.GetPayRunsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsWithTagResponse>;
    /**
     * Get pay schedule with tag
     *
     * @remarks
     * Gets the pay schedules with the tag
     */
    getPaySchedulesWithTag(req: operations.GetPaySchedulesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPaySchedulesWithTagResponse>;
    /**
     * Get RTI transactions with tag
     *
     * @remarks
     * Gets the RTI transactions with the tag
     */
    getRtiTransactionsWithTag(req: operations.GetRtiTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionsWithTagResponse>;
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
     * Get employee tag
     *
     * @remarks
     * Gets the tag from the employee
     */
    getTagFromEmployee(req: operations.GetTagFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployeeResponse>;
    /**
     * Get employee revision tag
     *
     * @remarks
     * Gets the tag from the employee revision
     */
    getTagFromEmployeeRevision(req: operations.GetTagFromEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployeeRevisionResponse>;
    /**
     * Get employer tag
     *
     * @remarks
     * Gets the tag from the employer
     */
    getTagFromEmployer(req: operations.GetTagFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployerResponse>;
    /**
     * Get employer revision tag
     *
     * @remarks
     * Gets the tag from the employer revision
     */
    getTagFromEmployerRevision(req: operations.GetTagFromEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromEmployerRevisionResponse>;
    /**
     * Get holiday scheme tag
     *
     * @remarks
     * Gets the tag from the holiday scheme
     */
    getTagFromHolidayScheme(req: operations.GetTagFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeResponse>;
    /**
     * Get holiday scheme revision tag
     *
     * @remarks
     * Gets the tag from the holiday scheme revision
     */
    getTagFromHolidaySchemeRevision(req: operations.GetTagFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeRevisionResponse>;
    /**
     * Get journal line tag
     *
     * @remarks
     * Gets a tag from the journal line
     */
    getTagFromJournalLine(req: operations.GetTagFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromJournalLineResponse>;
    /**
     * Get pay code tag
     *
     * @remarks
     * Gets the tag from the pay code
     */
    getTagFromPayCode(req: operations.GetTagFromPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayCodeResponse>;
    /**
     * Get pay instruction tag
     *
     * @remarks
     * Gets the tag from the pay instruction
     */
    getTagFromPayInstruction(req: operations.GetTagFromPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayInstructionResponse>;
    /**
     * Get pay line tag
     *
     * @remarks
     * Gets the tag from the pay line
     */
    getTagFromPayLine(req: operations.GetTagFromPayLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayLineResponse>;
    /**
     * Get pay run tag
     *
     * @remarks
     * Gets the tag from the pay run
     */
    getTagFromPayRun(req: operations.GetTagFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayRunResponse>;
    /**
     * Get pay schedule tag
     *
     * @remarks
     * Gets the tag from the pay schedule
     */
    getTagFromPaySchedule(req: operations.GetTagFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPayScheduleResponse>;
    /**
     * Get Permission tag
     *
     * @remarks
     * Gets a tag from the Permission
     */
    getTagFromPermission(req: operations.GetTagFromPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPermissionResponse>;
    /**
     * Get RTI transaction tag
     *
     * @remarks
     * Gets the tag from the RTI transaction
     */
    getTagFromRtiTransaction(req: operations.GetTagFromRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromRtiTransactionResponse>;
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
     * Get third party transaction tag
     *
     * @remarks
     * Gets a tag from the third party transaction
     */
    getTagFromThirdPartyTransaction(req: operations.GetTagFromThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromThirdPartyTransactionResponse>;
    /**
     * Get user tag
     *
     * @remarks
     * Gets a tag from the user
     */
    getTagFromUser(req: operations.GetTagFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromUserResponse>;
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
     * Get all employee tags
     *
     * @remarks
     * Gets all the tags from the employee
     */
    getTagsFromEmployee(req: operations.GetTagsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployeeResponse>;
    /**
     * Get all employee revision tags
     *
     * @remarks
     * Gets all the tags from the employee revision
     */
    getTagsFromEmployeeRevision(req: operations.GetTagsFromEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployeeRevisionResponse>;
    /**
     * Get all employer tags
     *
     * @remarks
     * Gets all the tags from the employer
     */
    getTagsFromEmployer(req: operations.GetTagsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployerResponse>;
    /**
     * Get all employer revision tags
     *
     * @remarks
     * Gets all the tags from the employer revision
     */
    getTagsFromEmployerRevision(req: operations.GetTagsFromEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromEmployerRevisionResponse>;
    /**
     * Get all tags from the holiday scheme
     *
     * @remarks
     * Gets all the tags from the holiday scheme
     */
    getTagsFromHolidayScheme(req: operations.GetTagsFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeResponse>;
    /**
     * Get all holiday scheme revision tags
     *
     * @remarks
     * Gets all the tags from the holiday scheme revision
     */
    getTagsFromHolidaySchemeRevision(req: operations.GetTagsFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeRevisionResponse>;
    /**
     * Get tags from journal line
     *
     * @remarks
     * Gets all tags from the journal line
     */
    getTagsFromJournalLine(req: operations.GetTagsFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromJournalLineResponse>;
    /**
     * Get all pay code tags
     *
     * @remarks
     * Gets all the tags from the pay code
     */
    getTagsFromPayCode(req: operations.GetTagsFromPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayCodeResponse>;
    /**
     * Get all tags from the pay instruction
     *
     * @remarks
     * Gets all the tags from the pay instruction
     */
    getTagsFromPayInstruction(req: operations.GetTagsFromPayInstructionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayInstructionResponse>;
    /**
     * Get all tags from the pay line
     *
     * @remarks
     * Gets all the tags from the pay line
     */
    getTagsFromPayLine(req: operations.GetTagsFromPayLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayLineResponse>;
    /**
     * Get all pay run tags
     *
     * @remarks
     * Gets all the tags from the pay run
     */
    getTagsFromPayRun(req: operations.GetTagsFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayRunResponse>;
    /**
     * Get all pay schedule tags
     *
     * @remarks
     * Gets all the tags from the pay schedule
     */
    getTagsFromPaySchedule(req: operations.GetTagsFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPayScheduleResponse>;
    /**
     * Get tags from Permission
     *
     * @remarks
     * Gets all tags from the Permission
     */
    getTagsFromPermission(req: operations.GetTagsFromPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPermissionResponse>;
    /**
     * Get all tags from RTI transaction
     *
     * @remarks
     * Gets all the tags from the RTI transaction
     */
    getTagsFromRtiTransaction(req: operations.GetTagsFromRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromRtiTransactionResponse>;
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
     * Get tags from third party transaction
     *
     * @remarks
     * Gets all tags from the third party transaction
     */
    getTagsFromThirdPartyTransaction(req: operations.GetTagsFromThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromThirdPartyTransactionResponse>;
    /**
     * Get tags from user
     *
     * @remarks
     * Gets all tags from the user
     */
    getTagsFromUser(req: operations.GetTagsFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromUserResponse>;
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
     * Insert CIS line type tag
     *
     * @remarks
     * Inserts a new tag on the CIS line type
     */
    putCisLineTypeTag(req: operations.PutCisLineTypeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutCisLineTypeTagResponse>;
    /**
     * Insert employee tag
     *
     * @remarks
     * Inserts a new tag on the employee
     */
    putEmployeeTag(req: operations.PutEmployeeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeTagResponse>;
    /**
     * Insert employer tag
     *
     * @remarks
     * Inserts a new tag on the employer
     */
    putEmployerTag(req: operations.PutEmployerTagRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerTagResponse>;
    /**
     * Insert holiday scheme tag
     *
     * @remarks
     * Inserts a new tag on the holiday scheme
     */
    putHolidaySchemeTag(req: operations.PutHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutHolidaySchemeTagResponse>;
    /**
     * Insert journal line tag
     *
     * @remarks
     * Inserts a tag on the journal line
     */
    putJournalLineTag(req: operations.PutJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalLineTagResponse>;
    /**
     * Insert pay code tag
     *
     * @remarks
     * Inserts a new tag on the pay code
     */
    putPayCodeTag(req: operations.PutPayCodeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayCodeTagResponse>;
    /**
     * Insert pay instruction tag
     *
     * @remarks
     * Inserts a new tag on the pay instruction
     */
    putPayInstructionTag(req: operations.PutPayInstructionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayInstructionTagResponse>;
    /**
     * Insert pay line tag
     *
     * @remarks
     * Inserts a new tag on the pay line
     */
    putPayLineTag(req: operations.PutPayLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayLineTagResponse>;
    /**
     * Insert pay run tag
     *
     * @remarks
     * Inserts a new tag on the pay run
     */
    putPayRunTag(req: operations.PutPayRunTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayRunTagResponse>;
    /**
     * Insert pay schedule tag
     *
     * @remarks
     * Inserts a new tag on the pay schedule
     */
    putPayScheduleTag(req: operations.PutPayScheduleTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPayScheduleTagResponse>;
    /**
     * Insert Permission tag
     *
     * @remarks
     * Inserts a tag on the Permission
     */
    putPermissionTag(req: operations.PutPermissionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPermissionTagResponse>;
    /**
     * Insert RTI transaction tag
     *
     * @remarks
     * Inserts a new tag on the RTI transaction
     */
    putRtiTransactionTag(req: operations.PutRtiTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutRtiTransactionTagResponse>;
    /**
     * Insert sub contractor tag
     *
     * @remarks
     * Inserts a new tag on the sub contractor
     */
    putSubContractorTag(req: operations.PutSubContractorTagRequest, config?: AxiosRequestConfig): Promise<operations.PutSubContractorTagResponse>;
    /**
     * insert third party transaction tag
     *
     * @remarks
     * Inserts a tag on the third party transaction
     */
    putThirdPartyTransactionTag(req: operations.PutThirdPartyTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutThirdPartyTransactionTagResponse>;
    /**
     * Insert user tag
     *
     * @remarks
     * Inserts a tag on the user
     */
    putUserTag(req: operations.PutUserTagRequest, config?: AxiosRequestConfig): Promise<operations.PutUserTagResponse>;
}
