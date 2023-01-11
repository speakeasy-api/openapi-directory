# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DeleteAeAssessmentRequest req = new DeleteAeAssessmentRequest() {{
                pathParams = new DeleteAeAssessmentPathParams() {{
                    aeAssessmentId = "optio";
                    employeeId = "eos";
                    employerId = "magnam";
                }};
                headers = new DeleteAeAssessmentHeaders() {{
                    apiVersion = "et";
                    authorization = "earum";
                }};
            }};

            DeleteAeAssessmentResponse res = sdk.aeAssessment.deleteAeAssessment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### AEAssessment

* `deleteAeAssessment` - Delete auto enrolment assessment
* `getAeAssessmentFromEmployee` - Get the auto enrolment assessment
* `getAeAssessmentsFromEmployee` - Get the auto enrolment assessments
* `getAeAssessmentsFromPayRun` - Get the auto enrolment assessments
* `postNewAeAssessment` - Insert new auto enrolment assessment
* `putNewAeAssessment` - Insert new auto enrolment assessment

### CIS

* `deleteCisInstruction` - Delete a CIS instruction
* `deleteCisInstructionTag` - Delete CIS instruction tag
* `deleteCisLine` - Delete a CIS line
* `deleteCisLineTag` - Delete CIS line tag
* `deleteCisLineType` - Delete an CIS line type
* `deleteCisLineTypeTag` - Delete CIS line type tag
* `deleteCisTransaction` - Delete the CIS transaction
* `deleteSubContractorTag` - Delete sub contractor tag
* `getAllCisInstructionTags` - Get all CIS instruction tags
* `getAllCisLineTags` - Get all CIS line tags
* `getAllCisLineTypeTags` - Get all CIS line type tags
* `getAllSubContractorTags` - Get all sub contractor tags
* `getCisInstructionFromSubContractor` - Get CIS instruction from sub contractor
* `getCisInstructionsFromSubContractor` - Get CIS instructions from sub contractor.
* `getCisInstructionsWithTag` - Get CIS instructions with tag
* `getCisLineFromSubContractor` - Get CIS line from sub contractor
* `getCisLineTypeFromEmployer` - Get CIS line type from employer
* `getCisLineTypesFromEmployer` - Get CIS line types from employer.
* `getCisLineTypesWithTag` - Get CIS line types with tag
* `getCisLinesFromSubContractor` - Get CIS lines from sub contractor.
* `getCisLinesWithTag` - Get CIS lines with tag
* `getCisTransactionFromEmployer` - Get the CIS transaction
* `getCisTransactionsFromEmployer` - Get all CIS transactions for the employer
* `getSubContractorsWithTag` - Get sub contractors with tag
* `getTagFromCisInstruction` - Get CIS instruction tag
* `getTagFromCisLine` - Get CIS line tag
* `getTagFromCisLineType` - Get CIS line type tag
* `getTagFromSubContractor` - Get sub contractor tag
* `getTagFromSubContractorRevision` - Get sub contractor revision tag
* `getTagsFromCisInstruction` - Get all tags from the CIS instruction
* `getTagsFromCisLine` - Get all tags from the CIS line
* `getTagsFromCisLineType` - Get all tags from the CIS line type
* `getTagsFromSubContractor` - Get all tags from the sub contractor
* `getTagsFromSubContractorRevision` - Get all sub contractor revision tags
* `patchCisInstruction` - Patches the CIS instruction
* `postCisInstructionIntoSubContractor` - Create a new CIS instruction
* `postCisLineTypeIntoEmployer` - Create a new CIS line type
* `putCisInstructionIntoSubContractor` - Updates the CIS instruction
* `putCisInstructionTag` - Insert CIS instruction tag
* `putCisLineTag` - Insert CIS line tag
* `putCisLineTypeIntoEmployer` - Updates the CIS line type
* `putCisLineTypeTag` - Insert CIS line type tag
* `putSubContractorTag` - Insert sub contractor tag

### DpsMessage

* `deleteDpsMessage` - Deletes the DPS message
* `getDpsMessageFromEmployer` - Gets the DPS message
* `getDpsMessagesFromEmployer` - Gets the DPS messages
* `patchDpsMessage` - Patches the DPS message
* `postDpsMessage` - Posta the DPS message
* `putDpsMessage` - Puts the DPS message

### Employee

* `deleteEmployee` - Delete an Employee
* `deleteEmployeeRevision` - Delete an Employee revision matching the specified revision date.
* `deleteEmployeeRevisionByNumber` - Delete an Employee revision matching the specified revision number.
* `deleteEmployeeSecret` - Deletes employee secret
* `getAeAssessmentFromEmployee` - Get the auto enrolment assessment
* `getAeAssessmentsFromEmployee` - Get the auto enrolment assessments
* `getAllEmployeeTags` - Get all employee tags
* `getCommentariesFromEmployee` - Get links to all commentaries for the specified employee
* `getCommentaryFromEmployee` - Get commentary from employee
* `getCommentaryFromPayRunByEmployee` - Get commentary from payrun by specified employee.
* `getEmployeeByEffectiveDate` - Get employee by effective date.
* `getEmployeeFromEmployer` - Get employee from employer
* `getEmployeeRevisionByNumber` - Gets the employee by revision number
* `getEmployeeRevisions` - Get all employee revisions
* `getEmployeeSecret` - Get employee secret
* `getEmployeeSecrets` - Get all employee secret links
* `getEmployeesByEffectiveDate` - Get employees from employer at a given effective date.
* `getEmployeesFromEmployer` - Get employees from employer.
* `getEmployeesFromPayRun` - Get employees from the pay run
* `getEmployeesFromPaySchedule` - Get all employees revisions from a pay schedule.
* `getEmployeesFromPayScheduleOnEffectiveDate` - Get employees from a pay schedule on effective date.
* `getEmployeesWithTag` - Get employees with tag
* `getPayRunsFromEmployee` - Gets the pay runs from the employee
* `patchEmployee` - Patches the employee
* `postEmployeeIntoEmployer` - Create a new Employee
* `postEmployeeSecret` - Create a new employee secret
* `putEmployeeIntoEmployer` - Updates the Employee
* `putEmployeeSecret` - Create a new employee secret

### Employer

* `deleteEmployer` - Delete an Employer
* `deleteEmployerRevision` - Delete an Employer revision matching the specified revision date.
* `deleteEmployerRevisionByNumber` - Delete an Employer revision matching the specified revision number.
* `deleteEmployerSecret` - Deletes employer secret
* `getAllEmployerTags` - Get all employer tags
* `getEmployer` - Gets the employer
* `getEmployerByEffectiveDate` - Gets the employer at the specified effective
* `getEmployerRevisionByNumber` - Gets the employer by revision number
* `getEmployerRevisions` - Gets the employer revisions
* `getEmployerSecret` - Get employer secret
* `getEmployerSecrets` - Get all employer secret links
* `getEmployers` - Gets all employers
* `getEmployersByEffectiveDate` - Gets all employers at the specified effective date
* `getEmployersWithTag` - Get employers with tag
* `patchEmployer` - Patches the employer
* `postEmployer` - Create a new Employer
* `postEmployerSecret` - Create a new employer secret
* `putEmployer` - Updates the Employer
* `putEmployerSecret` - Create a new employer secret

### Healthcheck

* `getHealthCheck` - Get health check status

### HolidayScheme

* `deleteHolidayScheme` - Delete an holiday scheme
* `deleteHolidaySchemeRevision` - Delete an holiday scheme revision matching the specified revision date.
* `deleteHolidaySchemeRevisionByNumber` - Delete an HolidayScheme revision matching the specified revision number.
* `deleteHolidaySchemeTag` - Delete holiday scheme tag
* `getAllHolidaySchemeTags` - Get all holiday scheme tags
* `getHolidaySchemeByEffectiveDate` - Get holiday scheme by effective date.
* `getHolidaySchemeFromEmployer` - Get holiday scheme from employer
* `getHolidaySchemeRevisionByNumber` - Gets the holiday scheme revision by revision number
* `getHolidaySchemeRevisions` - Get all holiday scheme revisions
* `getHolidaySchemesByEffectiveDate` - Get holiday schemes from employer at a given effective date.
* `getHolidaySchemesFromEmployer` - Get holiday schemes from employer.
* `getHolidaySchemesWithTag` - Get holiday schemes with tag
* `getTagFromHolidayScheme` - Get holiday scheme tag
* `getTagFromHolidaySchemeRevision` - Get holiday scheme revision tag
* `getTagsFromHolidayScheme` - Get all tags from the holiday scheme
* `getTagsFromHolidaySchemeRevision` - Get all holiday scheme revision tags
* `patchHolidayScheme` - Patches the holiday scheme
* `postHolidaySchemeIntoEmployer` - Create a new holiday scheme
* `putHolidaySchemeIntoEmployer` - Updates the holiday scheme
* `putHolidaySchemeTag` - Insert holiday scheme tag

### Jobs

* `deleteBatchJob` - Delete the Batch job
* `deleteCisJob` - Delete the CIS job
* `deleteDpsJob` - Delete the DPS job
* `deletePayRunJob` - Delete the pay run job
* `deleteRtiJob` - Delete the RTI job
* `deleteThirdPartyJob` - Delete the Third Party job
* `getBatchJobInfo` - Get the Batch job information
* `getBatchJobProgress` - Get the Batch job progress
* `getBatchJobStatus` - Get the Batch job status
* `getBatchJobs` - Get all Batch jobs
* `getCisJobInfo` - Get the CIS job information
* `getCisJobProgress` - Get the CIS job progress
* `getCisJobStatus` - Get the CIS job status
* `getCisJobs` - Get all CIS jobs
* `getDpsJobInfo` - Get the DPS job information
* `getDpsJobProgress` - Get the DPS job progress
* `getDpsJobStatus` - Get the DPS job status
* `getDpsJobs` - Get all DPS jobs
* `getEmployerJobs` - Gets all jobs relating to the employer.
* `getPayRunJobInfo` - Get the pay run job information
* `getPayRunJobProgress` - Get the pay run job progress
* `getPayRunJobStatus` - Get the pay run job status
* `getPayRunJobs` - Get all PayRun jobs
* `getRtiJobInfo` - Get the RTI job information
* `getRtiJobProgress` - Get the RTI job progress
* `getRtiJobStatus` - Get the RTI job status
* `getRtiJobs` - Get all RTI jobs
* `getThirdPartyJobInfo` - Get the Third Party job information
* `getThirdPartyJobProgress` - Get the Third Party job progress
* `getThirdPartyJobStatus` - Get the Third Party job status
* `getThirdPartyJobs` - Get all Third Party jobs
* `postNewBatchJob` - Create new Batch job
* `postNewCisJob` - Create new CIS job
* `postNewDpsJob` - Create new DPS job
* `postNewPayRunJob` - Create new PayRun job
* `postNewRtiJob` - Create new RTI job
* `postNewThirdPartyJob` - Create new Third Party job

### JournalLine

* `deleteJournalLineTag` - Delete journal line tag
* `getAllJournalLineTags` - Get all journal line tags
* `getAllJournalLinesWithTag` - Get links to tagged journal lines
* `getTagFromJournalLine` - Get journal line tag
* `getTagsFromJournalLine` - Get tags from journal line
* `putJournalLineTag` - Insert journal line tag

### Journals

* `deleteJournalInstruction` - Deletes a Journal instruction
* `deleteJournalInstructionTemplate` - Deletes a Journal instruction template
* `getJournalInstructionFromEmployer` - Gets the specified journal instruction from the employer
* `getJournalInstructionTemplate` - Gets the Journal instructions template for the application
* `getJournalInstructionTemplates` - Gets the Journal instructions templates for the application
* `getJournalInstructionsFromEmployer` - Gets the Journal instructions from the specified employer
* `getJournalLineFromEmployer` - Gets the specified journal Line from the employer
* `getJournalLinesFromEmployee` - Gets the journal Lines from the specified employee
* `getJournalLinesFromEmployer` - Gets the Journal Lines from the specified employer
* `getJournalLinesFromPayRun` - Gets the journal Lines from the specified pay run
* `getJournalLinesFromSubContractor` - Gets the journal Lines from the specified sub contractor
* `postJournalInstruction` - Creates a new Journal Instruction
* `postJournalInstructionTemplate` - Creates a new Journal Instruction template
* `putJournalInstruction` - Update a Journal Instruction
* `putJournalInstructionTemplate` - Update a Journal Instruction template

### NominalCode

* `deleteNominalCode` - Deletes the nominal codes
* `getNominalCodeFromEmployer` - Gets the nominal code
* `getNominalCodesFromEmployer` - Gets the nominal codes
* `postNominalCode` - Insert nominal code
* `putNominalCode` - Insert nominal code

### PayCode

* `deletePayCode` - Deletes a pay code
* `deletePayCodeRevision` - Deletes a pay code revision
* `deletePayCodeRevisionByNumber` - Delete an PayCode revision matching the specified revision number.
* `getAllPayCodeTags` - Get all pay code tags
* `getPayCodeByEffectiveDate` - Gets pay code for specified date
* `getPayCodeFromEmployer` - Gets the specified pay code from the employer
* `getPayCodeRevisionByNumber` - Gets the pay code by revision number
* `getPayCodeRevisions` - Get all revisions of the Pay Code
* `getPayCodesByEffectiveDate` - Gets all pay codes for specified date
* `getPayCodesFromEmployer` - Gets the pay codes from the employer
* `getPayCodesFromNominalCode` - Gets the pay codes by nominal code
* `getPayCodesWithTag` - Get pay codes with tag
* `patchPayCode` - Patches the pay code
* `postPayCode` - Create a new pay code
* `putPayCode` - Updates a pay code

### PayInstruction

* `deletePayInstruction` - Deletes a pay instruction
* `getAllPayInstructionTags` - Get all pay instruction tags
* `getPayInstructionFromEmployee` - Gets the specified pay instruction from the employee
* `getPayInstructionsFromEmployee` - Gets the pay instructions from the specified employee
* `getPayInstructionsWithTag` - Get pay instructions with tag
* `patchPayInstruction` - Sparse Update of a Pay Instruction
* `postPayInstruction` - Creates a new Pay Instruction
* `putPayInstruction` - Update a Pay Instruction

### PayLine

* `getAllPayLineTags` - Get all pay line tags
* `getPayLineFromEmployee` - Gets the specified pay line from the employee
* `getPayLinesFromEmployee` - Gets the pay lines from the specified employee
* `getPayLinesWithTag` - Get pay lines with tag

### PayRun

* `deletePayRun` - Deletes a pay run
* `deletePayRunEmployee` - Deletes a pay run employee
* `getAeAssessmentsFromPayRun` - Get the auto enrolment assessments
* `getAllPayRunTags` - Get all pay run tags
* `getCommentariesFromPayRun` - Get links to all commentaries for the specified pay run
* `getCommentaryFromPayRunByEmployee` - Get commentary from payrun by specified employee.
* `getEmployeesFromPayRun` - Get employees from the pay run
* `getPayRunFromPaySchedule` - Gets the pay run from the pay schedule
* `getPayRunsFromEmployee` - Gets the pay runs from the employee
* `getPayRunsFromPaySchedule` - Gets the pay runs from the pay schedule
* `getPayRunsWithTag` - Get pay runs with tag
* `getReportLinesFromPayRun` - Gets the report lines from the specified pay run

### PaySchedule

* `deletePaySchedule` - Deletes a pay schedule
* `getAllPayScheduleTags` - Get all pay schedule tags
* `getEmployeesFromPaySchedule` - Get all employees revisions from a pay schedule.
* `getEmployeesFromPayScheduleOnEffectiveDate` - Get employees from a pay schedule on effective date.
* `getPayRunFromPaySchedule` - Gets the pay run from the pay schedule
* `getPayRunsFromPaySchedule` - Gets the pay runs from the pay schedule
* `getPayScheduleFromEmployer` - Gets the specified pay schedule from the employer
* `getPaySchedulesFromEmployer` - Gets the pay schedule from the specified employer
* `getPaySchedulesWithTag` - Get pay schedule with tag
* `postPaySchedule` - Create a new pay schedule
* `putPaySchedule` - Updates a pay schedule

### Pension

* `deletePension` - Delete a Pension
* `deletePensionRevision` - Delete an Pension revision matching the specified revision date.
* `deletePensionRevisionByNumber` - Delete an Pension revision matching the specified revision number.
* `getPensionByEffectiveDate` - Get pension by effective date.
* `getPensionFromEmployer` - Get pension from employer
* `getPensionRevisionByNumber` - Gets the pension by revision number
* `getPensionRevisions` - Get all pension revisions
* `getPensionsByEffectiveDate` - Get pensions from employer at a given effective date.
* `getPensionsFromEmployer` - Get pensions from employer.
* `patchPension` - Patches the pension
* `postPensionIntoEmployer` - Create a new Pension
* `putPensionIntoEmployer` - Updates the Pension

### Permission

* `deletePermission` - Deletes the permission object
* `getPermission` - Gets the permission object
* `getPermissions` - Gets all permission objects
* `patchPermission` - Patch permission object
* `postPermission` - Post permisson object
* `putPermission` - Puts permisson object

### Query

* `getQueryResponse` - Get the query result

### RTI

* `deleteRtiTransaction` - Delete the RTI transaction
* `getAllRtiTransactionTags` - Get all RTI transaction tags
* `getRtiTransactionFromEmployer` - Get the RTI transaction
* `getRtiTransactionsFromEmployer` - Get all RTI transactions for the employer
* `getRtiTransactionsWithTag` - Get RTI transactions with tag

### Reference

* `getJournalExpressionSchema` - Gets the journal expression data schema

### ReportLine

* `getReportLineFromEmployer` - Gets the specified report line from the employer
* `getReportLinesFromEmployer` - Gets the report lines from the specified employer
* `getReportLinesFromPayRun` - Gets the report lines from the specified pay run

### ReportLineInstruction

* `deleteReportingInstruction` - Deletes a reporting instruction
* `getReportingInstructionFromEmployer` - Gets the specified reporting instruction from the employer
* `getReportingInstructionsFromEmployer` - Gets the reporting instructions from the specified employer
* `postReportingInstruction` - Creates a new Reporting Instruction
* `putReportingInstruction` - Update a reporting Instruction

### Reports

* `deleteReportDefinition` - Deletes a report definition
* `deleteTransformDefinition` - Deletes a transform definition
* `getActivePayInstructionsReportOutput` - Runs the active pay instructions report
* `getAoeLiabilityReportOuput` - Runs the AOE liability report
* `getDpsMessageReportOutput` - Runs the DPS message report
* `getEmployerSummaryReportOuput` - Runs the employer summary report
* `getGrossToNetReportOutput` - Runs the gross to net report
* `getHolidayBalanceReportOutput` - Runs the holiday balance report
* `getJournalReportOuput` - Runs the journal report
* `getLastPayDateReportOuput` - Runs the last pay date report
* `getNetPayReportOutput` - Runs the net pay report
* `getNextPayPeriodDatesReportOutput` - Runs the next pay period report
* `getP11SummaryReportOutput` - Runs the P11 summary report
* `getP32NetReportOutput` - Runs the P32 report
* `getP32SummaryNetReportOutput` - Runs the P32 summary report
* `getP45ReportOutput` - Runs the P45 report
* `getP60ReportOutput` - Runs the P60 report
* `getPapdisReportOuput` - Runs the PAPDIS report
* `getPassReportOuput` - Runs the PASS report
* `getPayDashboardPayslipReportOuput` - Runs the Pay Dashboard payslips report
* `getPayslip3ReportOutput` - Runs the verbose payslip report
* `getPensionLiabilityReportOutput` - Runs the pension liability report
* `getReportDefinitionFromApplication` - Get the report definition
* `getReportDefinitionsFromApplication` - Gets all reports
* `getReportOutput` - Runs the specified report definition
* `getTransformDefinitionFromApplication` - Get the transform definition
* `getTransformDefinitionsFromApplication` - Gets all transform definitions
* `postReportDefinition` - Create a new report definition
* `postTransformDefinition` - Create a new transform definition
* `putReportDefinition` - Updates a report definition
* `putTransformDefinition` - Updates a transform definition

### Schemas

* `getSchema` - Get XSD schema
* `getSchemas` - Get a list of all available schemas

### SubContractor

* `deleteSubContractor` - Delete an sub contractor
* `deleteSubContractorRevision` - Delete an sub contractor revision matching the specified revision date.
* `deleteSubContractorRevisionByNumber` - Delete an SubContractor revision matching the specified revision number.
* `getSubContractorByEffectiveDate` - Get sub contractor by effective date.
* `getSubContractorFromEmployer` - Get sub contractor from employer
* `getSubContractorRevisionByNumber` - Gets the sub contractor by revision number
* `getSubContractorRevisions` - Get all sub contractor revisions
* `getSubContractorsByEffectiveDate` - Get sub contractors from employer at a given effective date.
* `getSubContractorsFromEmployer` - Get sub contractors from employer.
* `patchSubContractor` - Patches the sub contractor
* `postSubContractorIntoEmployer` - Create a new sub contractor
* `putSubContractorIntoEmployer` - Updates the sub contractor

### Tagging

* `deleteCisInstructionTag` - Delete CIS instruction tag
* `deleteCisLineTag` - Delete CIS line tag
* `deleteCisLineTypeTag` - Delete CIS line type tag
* `deleteEmployeeTag` - Delete employee tag
* `deleteEmployerTag` - Delete employer tag
* `deleteHolidaySchemeTag` - Delete holiday scheme tag
* `deleteJournalLineTag` - Delete journal line tag
* `deletePayCodeTag` - Delete pay code tag
* `deletePayInstructionTag` - Delete pay instruction tag
* `deletePayLineTag` - Delete pay line tag
* `deletePayRunTag` - Delete pay run tag
* `deletePayScheduleTag` - Delete pay schedule tag
* `deleteRtiTransactionTag` - Delete RTI transaction tag
* `deleteSubContractorTag` - Delete sub contractor tag
* `deleteThirdPartyTransactionTag` - Delete third party transaction tag
* `deleteUserTag` - Delete user tag
* `getAllCisInstructionTags` - Get all CIS instruction tags
* `getAllCisLineTags` - Get all CIS line tags
* `getAllCisLineTypeTags` - Get all CIS line type tags
* `getAllEmployeeTags` - Get all employee tags
* `getAllEmployerTags` - Get all employer tags
* `getAllHolidaySchemeTags` - Get all holiday scheme tags
* `getAllJournalLineTags` - Get all journal line tags
* `getAllJournalLinesWithTag` - Get links to tagged journal lines
* `getAllPayCodeTags` - Get all pay code tags
* `getAllPayInstructionTags` - Get all pay instruction tags
* `getAllPayLineTags` - Get all pay line tags
* `getAllPayRunTags` - Get all pay run tags
* `getAllPayScheduleTags` - Get all pay schedule tags
* `getAllRtiTransactionTags` - Get all RTI transaction tags
* `getAllSubContractorTags` - Get all sub contractor tags
* `getAllThirdPartyTransactionTags` - Get all third party transaction tags
* `getAllThirdPartyTransactionsWithTag` - Get links to tagged third party transactions
* `getAllUserTags` - Get all user tags
* `getAllUsersWithTag` - Get links to tagged users
* `getCisInstructionsWithTag` - Get CIS instructions with tag
* `getCisLineTypesWithTag` - Get CIS line types with tag
* `getCisLinesWithTag` - Get CIS lines with tag
* `getEmployeesWithTag` - Get employees with tag
* `getEmployersWithTag` - Get employers with tag
* `getHolidaySchemesWithTag` - Get holiday schemes with tag
* `getPayCodesWithTag` - Get pay codes with tag
* `getPayInstructionsWithTag` - Get pay instructions with tag
* `getPayLinesWithTag` - Get pay lines with tag
* `getPayRunsWithTag` - Get pay runs with tag
* `getPaySchedulesWithTag` - Get pay schedule with tag
* `getRtiTransactionsWithTag` - Get RTI transactions with tag
* `getSubContractorsWithTag` - Get sub contractors with tag
* `getTagFromCisInstruction` - Get CIS instruction tag
* `getTagFromCisLine` - Get CIS line tag
* `getTagFromCisLineType` - Get CIS line type tag
* `getTagFromEmployee` - Get employee tag
* `getTagFromEmployeeRevision` - Get employee revision tag
* `getTagFromEmployer` - Get employer tag
* `getTagFromEmployerRevision` - Get employer revision tag
* `getTagFromHolidayScheme` - Get holiday scheme tag
* `getTagFromHolidaySchemeRevision` - Get holiday scheme revision tag
* `getTagFromJournalLine` - Get journal line tag
* `getTagFromPayCode` - Get pay code tag
* `getTagFromPayInstruction` - Get pay instruction tag
* `getTagFromPayLine` - Get pay line tag
* `getTagFromPayRun` - Get pay run tag
* `getTagFromPaySchedule` - Get pay schedule tag
* `getTagFromRtiTransaction` - Get RTI transaction tag
* `getTagFromSubContractor` - Get sub contractor tag
* `getTagFromSubContractorRevision` - Get sub contractor revision tag
* `getTagFromThirdPartyTransaction` - Get third party transaction tag
* `getTagFromUser` - Get user tag
* `getTagsFromCisInstruction` - Get all tags from the CIS instruction
* `getTagsFromCisLine` - Get all tags from the CIS line
* `getTagsFromCisLineType` - Get all tags from the CIS line type
* `getTagsFromEmployee` - Get all employee tags
* `getTagsFromEmployeeRevision` - Get all employee revision tags
* `getTagsFromEmployer` - Get all employer tags
* `getTagsFromEmployerRevision` - Get all employer revision tags
* `getTagsFromHolidayScheme` - Get all tags from the holiday scheme
* `getTagsFromHolidaySchemeRevision` - Get all holiday scheme revision tags
* `getTagsFromJournalLine` - Get tags from journal line
* `getTagsFromPayCode` - Get all pay code tags
* `getTagsFromPayInstruction` - Get all tags from the pay instruction
* `getTagsFromPayLine` - Get all tags from the pay line
* `getTagsFromPayRun` - Get all pay run tags
* `getTagsFromPaySchedule` - Get all pay schedule tags
* `getTagsFromRtiTransaction` - Get all tags from RTI transaction
* `getTagsFromSubContractor` - Get all tags from the sub contractor
* `getTagsFromSubContractorRevision` - Get all sub contractor revision tags
* `getTagsFromThirdPartyTransaction` - Get tags from third party transaction
* `getTagsFromUser` - Get tags from user
* `putCisInstructionTag` - Insert CIS instruction tag
* `putCisLineTag` - Insert CIS line tag
* `putCisLineTypeTag` - Insert CIS line type tag
* `putEmployeeTag` - Insert employee tag
* `putEmployerTag` - Insert employer tag
* `putHolidaySchemeTag` - Insert holiday scheme tag
* `putJournalLineTag` - Insert journal line tag
* `putPayCodeTag` - Insert pay code tag
* `putPayInstructionTag` - Insert pay instruction tag
* `putPayLineTag` - Insert pay line tag
* `putPayRunTag` - Insert pay run tag
* `putPayScheduleTag` - Insert pay schedule tag
* `putRtiTransactionTag` - Insert RTI transaction tag
* `putSubContractorTag` - Insert sub contractor tag
* `putThirdPartyTransactionTag` - insert third party transaction tag
* `putUserTag` - Insert user tag

### Templates

* `getTemplateModel` - Get the object template
* `getTemplates` - Get a list of all available data object tempaltes

### ThirdPartyTransaction

* `deleteThirdPartyTransactionTag` - Delete third party transaction tag
* `getAllThirdPartyTransactionTags` - Get all third party transaction tags
* `getAllThirdPartyTransactionsWithTag` - Get links to tagged third party transactions
* `getTagFromThirdPartyTransaction` - Get third party transaction tag
* `getTagsFromThirdPartyTransaction` - Get tags from third party transaction
* `putThirdPartyTransactionTag` - insert third party transaction tag

### ThirdPartyTransmission

* `deleteThirdPartyTransaction` - Delete third party transaction
* `getThirdPartyTransaction` - Get a third party transaction
* `getThirdPartyTransactions` - Get all third party transaction links

### User

* `deleteUser` - Deletes the user object
* `deleteUserTag` - Delete user tag
* `getAllUserTags` - Get all user tags
* `getAllUsersWithTag` - Get links to tagged users
* `getTagFromUser` - Get user tag
* `getTagsFromUser` - Get tags from user
* `getUser` - Gets the user object
* `getUsers` - Gets all user objects
* `patchUser` - Patch user object
* `postUser` - Post user object
* `putUser` - Puts user object
* `putUserTag` - Insert user tag

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
