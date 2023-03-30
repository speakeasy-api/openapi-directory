# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/payrun.io/22.23.10.42/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteAEAssessmentRequest{
        PathParams: operations.DeleteAEAssessmentPathParams{
            AEAssessmentID: "unde",
            EmployeeID: "deserunt",
            EmployerID: "porro",
        },
        Headers: operations.DeleteAEAssessmentHeaders{
            APIVersion: "nulla",
            Authorization: "id",
        },
    }

    ctx := context.Background()
    res, err := s.AEAssessment.DeleteAEAssessment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### AEAssessment

* `DeleteAEAssessment` - Delete auto enrolment assessment
* `GetAEAssessmentFromEmployee` - Get the auto enrolment assessment
* `GetAEAssessmentsFromEmployee` - Get the auto enrolment assessments
* `GetAEAssessmentsFromPayRun` - Get the auto enrolment assessments
* `PostNewAEAssessment` - Insert new auto enrolment assessment
* `PutNewAEAssessment` - Insert new auto enrolment assessment

### Application

* `DeleteApplicationSecret` - Deletes Application secret
* `GetApplicationSecret` - Get Application secret
* `GetApplicationSecrets` - Get all Application secret links
* `PostApplicationSecret` - Create a new Application secret
* `PutApplicationSecret` - Create a new Application secret

### Cis

* `DeleteCisInstruction` - Delete a CIS instruction
* `DeleteCisInstructionTag` - Delete CIS instruction tag
* `DeleteCisLine` - Delete a CIS line
* `DeleteCisLineTag` - Delete CIS line tag
* `DeleteCisLineType` - Delete an CIS line type
* `DeleteCisLineTypeTag` - Delete CIS line type tag
* `DeleteCisTransaction` - Delete the CIS transaction
* `DeleteSubContractorTag` - Delete sub contractor tag
* `GetAllCisInstructionTags` - Get all CIS instruction tags
* `GetAllCisLineTags` - Get all CIS line tags
* `GetAllCisLineTypeTags` - Get all CIS line type tags
* `GetAllSubContractorTags` - Get all sub contractor tags
* `GetCisInstructionFromSubContractor` - Get CIS instruction from sub contractor
* `GetCisInstructionsFromSubContractor` - Get CIS instructions from sub contractor.
* `GetCisInstructionsWithTag` - Get CIS instructions with tag
* `GetCisLineFromSubContractor` - Get CIS line from sub contractor
* `GetCisLineTypeFromEmployer` - Get CIS line type from employer
* `GetCisLineTypesFromEmployer` - Get CIS line types from employer.
* `GetCisLineTypesWithTag` - Get CIS line types with tag
* `GetCisLinesFromSubContractor` - Get CIS lines from sub contractor.
* `GetCisLinesWithTag` - Get CIS lines with tag
* `GetCisTransactionFromEmployer` - Get the CIS transaction
* `GetCisTransactionsFromEmployer` - Get all CIS transactions for the employer
* `GetSubContractorsWithTag` - Get sub contractors with tag
* `GetTagFromCisInstruction` - Get CIS instruction tag
* `GetTagFromCisLine` - Get CIS line tag
* `GetTagFromCisLineType` - Get CIS line type tag
* `GetTagFromSubContractor` - Get sub contractor tag
* `GetTagFromSubContractorRevision` - Get sub contractor revision tag
* `GetTagsFromCisInstruction` - Get all tags from the CIS instruction
* `GetTagsFromCisLine` - Get all tags from the CIS line
* `GetTagsFromCisLineType` - Get all tags from the CIS line type
* `GetTagsFromSubContractor` - Get all tags from the sub contractor
* `GetTagsFromSubContractorRevision` - Get all sub contractor revision tags
* `PatchCisInstruction` - Patches the CIS instruction
* `PostCisInstructionIntoSubContractor` - Create a new CIS instruction
* `PostCisLineTypeIntoEmployer` - Create a new CIS line type
* `PutCisInstructionIntoSubContractor` - Updates the CIS instruction
* `PutCisInstructionTag` - Insert CIS instruction tag
* `PutCisLineTag` - Insert CIS line tag
* `PutCisLineTypeIntoEmployer` - Updates the CIS line type
* `PutCisLineTypeTag` - Insert CIS line type tag
* `PutSubContractorTag` - Insert sub contractor tag

### DpsMessage

* `DeleteDpsMessage` - Deletes the DPS message
* `GetDpsMessageFromEmployer` - Gets the DPS message
* `GetDpsMessagesFromEmployer` - Gets the DPS messages
* `PatchDpsMessage` - Patches the DPS message
* `PostDpsMessage` - Posta the DPS message
* `PutDpsMessage` - Puts the DPS message

### Employee

* `DeleteEmployee` - Delete an Employee
* `DeleteEmployeeRevision` - Delete an Employee revision matching the specified revision date.
* `DeleteEmployeeRevisionByNumber` - Delete an Employee revision matching the specified revision number.
* `DeleteEmployeeSecret` - Deletes employee secret
* `GetAEAssessmentFromEmployee` - Get the auto enrolment assessment
* `GetAEAssessmentsFromEmployee` - Get the auto enrolment assessments
* `GetAllEmployeeTags` - Get all employee tags
* `GetCommentariesFromEmployee` - Get links to all commentaries for the specified employee
* `GetCommentaryFromEmployee` - Get commentary from employee
* `GetCommentaryFromPayRunByEmployee` - Get commentary from payrun by specified employee.
* `GetEmployeeByEffectiveDate` - Get employee by effective date.
* `GetEmployeeFromEmployer` - Get employee from employer
* `GetEmployeeRevisionByNumber` - Gets the employee by revision number
* `GetEmployeeRevisionSummaries` - Get all employee revision summaries
* `GetEmployeeRevisionSummaryByNumber` - Gets the employee summary by revision number
* `GetEmployeeRevisions` - Get all employee revisions
* `GetEmployeeSecret` - Get employee secret
* `GetEmployeeSecrets` - Get all employee secret links
* `GetEmployeeSummariesByEffectiveDate` - Get employee summaries from employer at a given effective date.
* `GetEmployeeSummariesFromEmployer` - Get employee summaries from employer.
* `GetEmployeeSummaryByEffectiveDate` - Get employee summary by effective date.
* `GetEmployeeSummaryFromEmployer` - Get employee summary from employer
* `GetEmployeesByEffectiveDate` - Get employees from employer at a given effective date.
* `GetEmployeesFromEmployer` - Get employees from employer.
* `GetEmployeesFromPayRun` - Get employees from the pay run
* `GetEmployeesFromPaySchedule` - Get all employees revisions from a pay schedule.
* `GetEmployeesFromPayScheduleOnEffectiveDate` - Get employees from a pay schedule on effective date.
* `GetEmployeesWithTag` - Get employees with tag
* `GetPayRunsFromEmployee` - Gets the pay runs from the employee
* `PatchEmployee` - Patches the employee
* `PostEmployeeIntoEmployer` - Create a new Employee
* `PostEmployeeSecret` - Create a new employee secret
* `PutEmployeeIntoEmployer` - Updates the Employee
* `PutEmployeeSecret` - Create a new employee secret

### Employer

* `DeleteEmployer` - Delete an Employer
* `DeleteEmployerRevision` - Delete an Employer revision matching the specified revision date.
* `DeleteEmployerRevisionByNumber` - Delete an Employer revision matching the specified revision number.
* `DeleteEmployerSecret` - Deletes employer secret
* `GetAllEmployerTags` - Get all employer tags
* `GetEmployer` - Gets the employer
* `GetEmployerByEffectiveDate` - Gets the employer at the specified effective
* `GetEmployerRevisionByNumber` - Gets the employer by revision number
* `GetEmployerRevisionSummaries` - Get all employer revision summaries
* `GetEmployerRevisionSummaryByNumber` - Gets the employer summary by revision number
* `GetEmployerRevisions` - Gets the employer revisions
* `GetEmployerSecret` - Get employer secret
* `GetEmployerSecrets` - Get all employer secret links
* `GetEmployerSummaries` - Get employer summaries.
* `GetEmployerSummariesByEffectiveDate` - Get employer summaries at a given effective date.
* `GetEmployerSummary` - Get employer summary
* `GetEmployerSummaryByEffectiveDate` - Get employer summary by effective date.
* `GetEmployers` - Gets all employers
* `GetEmployersByEffectiveDate` - Gets all employers at the specified effective date
* `GetEmployersWithTag` - Get employers with tag
* `PatchEmployer` - Patches the employer
* `PostEmployer` - Create a new Employer
* `PostEmployerSecret` - Create a new employer secret
* `PutEmployer` - Updates the Employer
* `PutEmployerSecret` - Create a new employer secret

### Healthcheck

* `GetHealthCheck` - Get health check status

### HolidayScheme

* `DeleteHolidayScheme` - Delete an holiday scheme
* `DeleteHolidaySchemeRevision` - Delete an holiday scheme revision matching the specified revision date.
* `DeleteHolidaySchemeRevisionByNumber` - Delete an HolidayScheme revision matching the specified revision number.
* `DeleteHolidaySchemeTag` - Delete holiday scheme tag
* `GetAllHolidaySchemeTags` - Get all holiday scheme tags
* `GetHolidaySchemeByEffectiveDate` - Get holiday scheme by effective date.
* `GetHolidaySchemeFromEmployer` - Get holiday scheme from employer
* `GetHolidaySchemeRevisionByNumber` - Gets the holiday scheme revision by revision number
* `GetHolidaySchemeRevisions` - Get all holiday scheme revisions
* `GetHolidaySchemesByEffectiveDate` - Get holiday schemes from employer at a given effective date.
* `GetHolidaySchemesFromEmployer` - Get holiday schemes from employer.
* `GetHolidaySchemesWithTag` - Get holiday schemes with tag
* `GetTagFromHolidayScheme` - Get holiday scheme tag
* `GetTagFromHolidaySchemeRevision` - Get holiday scheme revision tag
* `GetTagsFromHolidayScheme` - Get all tags from the holiday scheme
* `GetTagsFromHolidaySchemeRevision` - Get all holiday scheme revision tags
* `PatchHolidayScheme` - Patches the holiday scheme
* `PostHolidaySchemeIntoEmployer` - Create a new holiday scheme
* `PutHolidaySchemeIntoEmployer` - Updates the holiday scheme
* `PutHolidaySchemeTag` - Insert holiday scheme tag

### Jobs

* `DeleteBatchJob` - Delete the Batch job
* `DeleteCisJob` - Delete the CIS job
* `DeleteDpsJob` - Delete the DPS job
* `DeletePayRunJob` - Delete the pay run job
* `DeleteRtiJob` - Delete the RTI job
* `DeleteThirdPartyJob` - Delete the Third Party job
* `GetBatchJobInfo` - Get the Batch job information
* `GetBatchJobProgress` - Get the Batch job progress
* `GetBatchJobStatus` - Get the Batch job status
* `GetBatchJobs` - Get all Batch jobs
* `GetCisJobInfo` - Get the CIS job information
* `GetCisJobProgress` - Get the CIS job progress
* `GetCisJobStatus` - Get the CIS job status
* `GetCisJobs` - Get all CIS jobs
* `GetDpsJobInfo` - Get the DPS job information
* `GetDpsJobProgress` - Get the DPS job progress
* `GetDpsJobStatus` - Get the DPS job status
* `GetDpsJobs` - Get all DPS jobs
* `GetEmployerJobs` - Gets all jobs relating to the employer.
* `GetPayRunJobInfo` - Get the pay run job information
* `GetPayRunJobProgress` - Get the pay run job progress
* `GetPayRunJobStatus` - Get the pay run job status
* `GetPayRunJobs` - Get all PayRun jobs
* `GetRtiJobInfo` - Get the RTI job information
* `GetRtiJobProgress` - Get the RTI job progress
* `GetRtiJobStatus` - Get the RTI job status
* `GetRtiJobs` - Get all RTI jobs
* `GetThirdPartyJobInfo` - Get the Third Party job information
* `GetThirdPartyJobProgress` - Get the Third Party job progress
* `GetThirdPartyJobStatus` - Get the Third Party job status
* `GetThirdPartyJobs` - Get all Third Party jobs
* `PostNewBatchJob` - Create new Batch job
* `PostNewCisJob` - Create new CIS job
* `PostNewDpsJob` - Create new DPS job
* `PostNewPayRunJob` - Create new PayRun job
* `PostNewRtiJob` - Create new RTI job
* `PostNewThirdPartyJob` - Create new Third Party job

### JournalLine

* `DeleteJournalLineTag` - Delete journal line tag
* `GetAllJournalLineTags` - Get all journal line tags
* `GetAllJournalLinesWithTag` - Get links to tagged journal lines
* `GetTagFromJournalLine` - Get journal line tag
* `GetTagsFromJournalLine` - Get tags from journal line
* `PutJournalLineTag` - Insert journal line tag

### Journals

* `DeleteJournalInstruction` - Deletes a Journal instruction
* `DeleteJournalInstructionTemplate` - Deletes a Journal instruction template
* `GetJournalInstructionFromEmployer` - Gets the specified journal instruction from the employer
* `GetJournalInstructionTemplate` - Gets the Journal instructions template for the application
* `GetJournalInstructionTemplates` - Gets the Journal instructions templates for the application
* `GetJournalInstructionsFromEmployer` - Gets the Journal instructions from the specified employer
* `GetJournalLineFromEmployer` - Gets the specified journal Line from the employer
* `GetJournalLinesFromEmployee` - Gets the journal Lines from the specified employee
* `GetJournalLinesFromEmployer` - Gets the Journal Lines from the specified employer
* `GetJournalLinesFromPayRun` - Gets the journal Lines from the specified pay run
* `GetJournalLinesFromSubContractor` - Gets the journal Lines from the specified sub contractor
* `PostJournalInstruction` - Creates a new Journal Instruction
* `PostJournalInstructionTemplate` - Creates a new Journal Instruction template
* `PutJournalInstruction` - Update a Journal Instruction
* `PutJournalInstructionTemplate` - Update a Journal Instruction template

### NominalCode

* `DeleteNominalCode` - Deletes the nominal codes
* `GetNominalCodeFromEmployer` - Gets the nominal code
* `GetNominalCodesFromEmployer` - Gets the nominal codes
* `PostNominalCode` - Insert nominal code
* `PutNominalCode` - Insert nominal code

### PayCode

* `DeletePayCode` - Deletes a pay code
* `DeletePayCodeRevision` - Deletes a pay code revision
* `DeletePayCodeRevisionByNumber` - Delete an PayCode revision matching the specified revision number.
* `GetAllPayCodeTags` - Get all pay code tags
* `GetPayCodeByEffectiveDate` - Gets pay code for specified date
* `GetPayCodeFromEmployer` - Gets the specified pay code from the employer
* `GetPayCodeRevisionByNumber` - Gets the pay code by revision number
* `GetPayCodeRevisions` - Get all revisions of the Pay Code
* `GetPayCodesByEffectiveDate` - Gets all pay codes for specified date
* `GetPayCodesFromEmployer` - Gets the pay codes from the employer
* `GetPayCodesFromNominalCode` - Gets the pay codes by nominal code
* `GetPayCodesWithTag` - Get pay codes with tag
* `PatchPayCode` - Patches the pay code
* `PostPayCode` - Create a new pay code
* `PutPayCode` - Updates a pay code

### PayInstruction

* `DeletePayInstruction` - Deletes a pay instruction
* `GetAllPayInstructionTags` - Get all pay instruction tags
* `GetPayInstructionFromEmployee` - Gets the specified pay instruction from the employee
* `GetPayInstructionsFromEmployee` - Gets the pay instructions from the specified employee
* `GetPayInstructionsWithTag` - Get pay instructions with tag
* `PatchPayInstruction` - Sparse Update of a Pay Instruction
* `PostPayInstruction` - Creates a new Pay Instruction
* `PutPayInstruction` - Update a Pay Instruction

### PayLine

* `GetAllPayLineTags` - Get all pay line tags
* `GetPayLineFromEmployee` - Gets the specified pay line from the employee
* `GetPayLinesFromEmployee` - Gets the pay lines from the specified employee
* `GetPayLinesFromPayRun` - Gets the pay lines from the specified pay run
* `GetPayLinesWithTag` - Get pay lines with tag

### PayRun

* `DeletePayRun` - Deletes a pay run
* `DeletePayRunEmployee` - Deletes a pay run employee
* `GetAEAssessmentsFromPayRun` - Get the auto enrolment assessments
* `GetAllPayRunTags` - Get all pay run tags
* `GetCommentariesFromPayRun` - Get links to all commentaries for the specified pay run
* `GetCommentaryFromPayRunByEmployee` - Get commentary from payrun by specified employee.
* `GetEmployeesFromPayRun` - Get employees from the pay run
* `GetPayRunFromPaySchedule` - Gets the pay run from the pay schedule
* `GetPayRunsFromEmployee` - Gets the pay runs from the employee
* `GetPayRunsFromPaySchedule` - Gets the pay runs from the pay schedule
* `GetPayRunsWithTag` - Get pay runs with tag
* `GetReportLinesFromPayRun` - Gets the report lines from the specified pay run

### PaySchedule

* `DeletePaySchedule` - Deletes a pay schedule
* `GetAllPayScheduleTags` - Get all pay schedule tags
* `GetEmployeesFromPaySchedule` - Get all employees revisions from a pay schedule.
* `GetEmployeesFromPayScheduleOnEffectiveDate` - Get employees from a pay schedule on effective date.
* `GetPayRunFromPaySchedule` - Gets the pay run from the pay schedule
* `GetPayRunsFromPaySchedule` - Gets the pay runs from the pay schedule
* `GetPayScheduleFromEmployer` - Gets the specified pay schedule from the employer
* `GetPaySchedulesFromEmployer` - Gets the pay schedule from the specified employer
* `GetPaySchedulesWithTag` - Get pay schedule with tag
* `PostPaySchedule` - Create a new pay schedule
* `PutPaySchedule` - Updates a pay schedule

### Pension

* `DeletePension` - Delete a Pension
* `DeletePensionRevision` - Delete an Pension revision matching the specified revision date.
* `DeletePensionRevisionByNumber` - Delete an Pension revision matching the specified revision number.
* `GetPensionByEffectiveDate` - Get pension by effective date.
* `GetPensionFromEmployer` - Get pension from employer
* `GetPensionRevisionByNumber` - Gets the pension by revision number
* `GetPensionRevisions` - Get all pension revisions
* `GetPensionsByEffectiveDate` - Get pensions from employer at a given effective date.
* `GetPensionsFromEmployer` - Get pensions from employer.
* `PatchPension` - Patches the pension
* `PostPensionIntoEmployer` - Create a new Pension
* `PutPensionIntoEmployer` - Updates the Pension

### Permission

* `DeletePermission` - Deletes the permission object
* `DeletePermissionTag` - Delete Permission tag
* `GetAllPermissionTags` - Get all Permission tags
* `GetAllPermissionsWithTag` - Get links to tagged Permissions
* `GetPermission` - Gets the permission object
* `GetPermissions` - Gets all permission objects
* `GetTagFromPermission` - Get Permission tag
* `GetTagsFromPermission` - Get tags from Permission
* `GetUserPermissions` - Gets the user permissions
* `PatchPermission` - Patch permission object
* `PostPermission` - Post permisson object
* `PutPermission` - Puts permisson object
* `PutPermissionTag` - Insert Permission tag

### Query

* `GetQueryResponse` - Get the query result

### Rti

* `DeleteRtiTransaction` - Delete the RTI transaction
* `GetAllRtiTransactionTags` - Get all RTI transaction tags
* `GetRtiTransactionFromEmployer` - Get the RTI transaction
* `GetRtiTransactionSummariesFromEmployer` - Get all RTI transaction summaries for the employer
* `GetRtiTransactionSummaryFromEmployer` - Get the RTI transaction summary
* `GetRtiTransactionsFromEmployer` - Get all RTI transactions for the employer
* `GetRtiTransactionsWithTag` - Get RTI transactions with tag

### Reference

* `GetJournalExpressionSchema` - Gets the journal expression data schema

### ReportLine

* `GetReportLineFromEmployer` - Gets the specified report line from the employer
* `GetReportLinesFromEmployer` - Gets the report lines from the specified employer
* `GetReportLinesFromPayRun` - Gets the report lines from the specified pay run

### ReportLineInstruction

* `DeleteReportingInstruction` - Deletes a reporting instruction
* `GetReportingInstructionFromEmployer` - Gets the specified reporting instruction from the employer
* `GetReportingInstructionsFromEmployer` - Gets the reporting instructions from the specified employer
* `PostReportingInstruction` - Creates a new Reporting Instruction
* `PutReportingInstruction` - Update a reporting Instruction

### Reports

* `DeleteReportDefinition` - Deletes a report definition
* `DeleteTransformDefinition` - Deletes a transform definition
* `GetActivePayInstructionsReportOutput` - Runs the active pay instructions report
* `GetAoeLiabilityReportOuput` - Runs the AOE liability report
* `GetDpsMessageReportOutput` - Runs the DPS message report
* `GetEmployerSummaryReportOuput` - Runs the employer summary report
* `GetGrossToNetReportOutput` - Runs the gross to net report
* `GetHolidayBalanceReportOutput` - Runs the holiday balance report
* `GetJournalReportOuput` - Runs the journal report
* `GetLastPayDateReportOuput` - Runs the last pay date report
* `GetNetPayReportOutput` - Runs the net pay report
* `GetNextPayPeriodDatesReportOutput` - Runs the next pay period report
* `GetP11SummaryReportOutput` - Runs the P11 summary report
* `GetP32NetReportOutput` - Runs the P32 report
* `GetP32SummaryNetReportOutput` - Runs the P32 summary report
* `GetP45ReportOutput` - Runs the P45 report
* `GetP60ReportOutput` - Runs the P60 report
* `GetPapdisReportOuput` - Runs the PAPDIS report
* `GetPassReportOuput` - Runs the PASS report
* `GetPayDashboardPayslipReportOuput` - Runs the Pay Dashboard payslips report
* `GetPayslip3ReportOutput` - Runs the verbose payslip report
* `GetPensionLiabilityReportOutput` - Runs the pension liability report
* `GetReportDefinitionFromApplication` - Get the report definition
* `GetReportDefinitionsFromApplication` - Gets all reports
* `GetReportOutput` - Runs the specified report definition
* `GetTransformDefinitionFromApplication` - Get the transform definition
* `GetTransformDefinitionsFromApplication` - Gets all transform definitions
* `PostReportDefinition` - Create a new report definition
* `PostTransformDefinition` - Create a new transform definition
* `PutReportDefinition` - Updates a report definition
* `PutTransformDefinition` - Updates a transform definition

### Schemas

* `GetSchema` - Get XSD schema
* `GetSchemas` - Get a list of all available schemas

### SubContractor

* `DeleteSubContractor` - Delete an sub contractor
* `DeleteSubContractorRevision` - Delete an sub contractor revision matching the specified revision date.
* `DeleteSubContractorRevisionByNumber` - Delete an SubContractor revision matching the specified revision number.
* `GetSubContractorByEffectiveDate` - Get sub contractor by effective date.
* `GetSubContractorFromEmployer` - Get sub contractor from employer
* `GetSubContractorRevisionByNumber` - Gets the sub contractor by revision number
* `GetSubContractorRevisions` - Get all sub contractor revisions
* `GetSubContractorsByEffectiveDate` - Get sub contractors from employer at a given effective date.
* `GetSubContractorsFromEmployer` - Get sub contractors from employer.
* `PatchSubContractor` - Patches the sub contractor
* `PostSubContractorIntoEmployer` - Create a new sub contractor
* `PutSubContractorIntoEmployer` - Updates the sub contractor

### Tagging

* `DeleteCisInstructionTag` - Delete CIS instruction tag
* `DeleteCisLineTag` - Delete CIS line tag
* `DeleteCisLineTypeTag` - Delete CIS line type tag
* `DeleteEmployeeTag` - Delete employee tag
* `DeleteEmployerTag` - Delete employer tag
* `DeleteHolidaySchemeTag` - Delete holiday scheme tag
* `DeleteJournalLineTag` - Delete journal line tag
* `DeletePayCodeTag` - Delete pay code tag
* `DeletePayInstructionTag` - Delete pay instruction tag
* `DeletePayLineTag` - Delete pay line tag
* `DeletePayRunTag` - Delete pay run tag
* `DeletePayScheduleTag` - Delete pay schedule tag
* `DeletePermissionTag` - Delete Permission tag
* `DeleteRtiTransactionTag` - Delete RTI transaction tag
* `DeleteSubContractorTag` - Delete sub contractor tag
* `DeleteThirdPartyTransactionTag` - Delete third party transaction tag
* `DeleteUserTag` - Delete user tag
* `GetAllCisInstructionTags` - Get all CIS instruction tags
* `GetAllCisLineTags` - Get all CIS line tags
* `GetAllCisLineTypeTags` - Get all CIS line type tags
* `GetAllEmployeeTags` - Get all employee tags
* `GetAllEmployerTags` - Get all employer tags
* `GetAllHolidaySchemeTags` - Get all holiday scheme tags
* `GetAllJournalLineTags` - Get all journal line tags
* `GetAllJournalLinesWithTag` - Get links to tagged journal lines
* `GetAllPayCodeTags` - Get all pay code tags
* `GetAllPayInstructionTags` - Get all pay instruction tags
* `GetAllPayLineTags` - Get all pay line tags
* `GetAllPayRunTags` - Get all pay run tags
* `GetAllPayScheduleTags` - Get all pay schedule tags
* `GetAllPermissionTags` - Get all Permission tags
* `GetAllPermissionsWithTag` - Get links to tagged Permissions
* `GetAllRtiTransactionTags` - Get all RTI transaction tags
* `GetAllSubContractorTags` - Get all sub contractor tags
* `GetAllThirdPartyTransactionTags` - Get all third party transaction tags
* `GetAllThirdPartyTransactionsWithTag` - Get links to tagged third party transactions
* `GetAllUserTags` - Get all user tags
* `GetAllUsersWithTag` - Get links to tagged users
* `GetCisInstructionsWithTag` - Get CIS instructions with tag
* `GetCisLineTypesWithTag` - Get CIS line types with tag
* `GetCisLinesWithTag` - Get CIS lines with tag
* `GetEmployeesWithTag` - Get employees with tag
* `GetEmployersWithTag` - Get employers with tag
* `GetHolidaySchemesWithTag` - Get holiday schemes with tag
* `GetPayCodesWithTag` - Get pay codes with tag
* `GetPayInstructionsWithTag` - Get pay instructions with tag
* `GetPayLinesWithTag` - Get pay lines with tag
* `GetPayRunsWithTag` - Get pay runs with tag
* `GetPaySchedulesWithTag` - Get pay schedule with tag
* `GetRtiTransactionsWithTag` - Get RTI transactions with tag
* `GetSubContractorsWithTag` - Get sub contractors with tag
* `GetTagFromCisInstruction` - Get CIS instruction tag
* `GetTagFromCisLine` - Get CIS line tag
* `GetTagFromCisLineType` - Get CIS line type tag
* `GetTagFromEmployee` - Get employee tag
* `GetTagFromEmployeeRevision` - Get employee revision tag
* `GetTagFromEmployer` - Get employer tag
* `GetTagFromEmployerRevision` - Get employer revision tag
* `GetTagFromHolidayScheme` - Get holiday scheme tag
* `GetTagFromHolidaySchemeRevision` - Get holiday scheme revision tag
* `GetTagFromJournalLine` - Get journal line tag
* `GetTagFromPayCode` - Get pay code tag
* `GetTagFromPayInstruction` - Get pay instruction tag
* `GetTagFromPayLine` - Get pay line tag
* `GetTagFromPayRun` - Get pay run tag
* `GetTagFromPaySchedule` - Get pay schedule tag
* `GetTagFromPermission` - Get Permission tag
* `GetTagFromRtiTransaction` - Get RTI transaction tag
* `GetTagFromSubContractor` - Get sub contractor tag
* `GetTagFromSubContractorRevision` - Get sub contractor revision tag
* `GetTagFromThirdPartyTransaction` - Get third party transaction tag
* `GetTagFromUser` - Get user tag
* `GetTagsFromCisInstruction` - Get all tags from the CIS instruction
* `GetTagsFromCisLine` - Get all tags from the CIS line
* `GetTagsFromCisLineType` - Get all tags from the CIS line type
* `GetTagsFromEmployee` - Get all employee tags
* `GetTagsFromEmployeeRevision` - Get all employee revision tags
* `GetTagsFromEmployer` - Get all employer tags
* `GetTagsFromEmployerRevision` - Get all employer revision tags
* `GetTagsFromHolidayScheme` - Get all tags from the holiday scheme
* `GetTagsFromHolidaySchemeRevision` - Get all holiday scheme revision tags
* `GetTagsFromJournalLine` - Get tags from journal line
* `GetTagsFromPayCode` - Get all pay code tags
* `GetTagsFromPayInstruction` - Get all tags from the pay instruction
* `GetTagsFromPayLine` - Get all tags from the pay line
* `GetTagsFromPayRun` - Get all pay run tags
* `GetTagsFromPaySchedule` - Get all pay schedule tags
* `GetTagsFromPermission` - Get tags from Permission
* `GetTagsFromRtiTransaction` - Get all tags from RTI transaction
* `GetTagsFromSubContractor` - Get all tags from the sub contractor
* `GetTagsFromSubContractorRevision` - Get all sub contractor revision tags
* `GetTagsFromThirdPartyTransaction` - Get tags from third party transaction
* `GetTagsFromUser` - Get tags from user
* `PutCisInstructionTag` - Insert CIS instruction tag
* `PutCisLineTag` - Insert CIS line tag
* `PutCisLineTypeTag` - Insert CIS line type tag
* `PutEmployeeTag` - Insert employee tag
* `PutEmployerTag` - Insert employer tag
* `PutHolidaySchemeTag` - Insert holiday scheme tag
* `PutJournalLineTag` - Insert journal line tag
* `PutPayCodeTag` - Insert pay code tag
* `PutPayInstructionTag` - Insert pay instruction tag
* `PutPayLineTag` - Insert pay line tag
* `PutPayRunTag` - Insert pay run tag
* `PutPayScheduleTag` - Insert pay schedule tag
* `PutPermissionTag` - Insert Permission tag
* `PutRtiTransactionTag` - Insert RTI transaction tag
* `PutSubContractorTag` - Insert sub contractor tag
* `PutThirdPartyTransactionTag` - insert third party transaction tag
* `PutUserTag` - Insert user tag

### Templates

* `GetTemplateModel` - Get the object template
* `GetTemplates` - Get a list of all available data object tempaltes

### ThirdPartyTransaction

* `DeleteThirdPartyTransactionTag` - Delete third party transaction tag
* `GetAllThirdPartyTransactionTags` - Get all third party transaction tags
* `GetAllThirdPartyTransactionsWithTag` - Get links to tagged third party transactions
* `GetTagFromThirdPartyTransaction` - Get third party transaction tag
* `GetTagsFromThirdPartyTransaction` - Get tags from third party transaction
* `PutThirdPartyTransactionTag` - insert third party transaction tag

### ThirdPartyTransmission

* `DeleteThirdPartyTransaction` - Delete third party transaction
* `GetThirdPartyTransaction` - Get a third party transaction
* `GetThirdPartyTransactions` - Get all third party transaction links

### User

* `DeleteUser` - Deletes the user object
* `DeleteUserTag` - Delete user tag
* `GetAllUserTags` - Get all user tags
* `GetAllUsersWithTag` - Get links to tagged users
* `GetTagFromUser` - Get user tag
* `GetTagsFromUser` - Get tags from user
* `GetUser` - Gets the user object
* `GetUserPermissions` - Gets the user permissions
* `GetUsers` - Gets all user objects
* `PatchUser` - Patch user object
* `PostUser` - Post user object
* `PutUser` - Puts user object
* `PutUserTag` - Insert user tag
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
