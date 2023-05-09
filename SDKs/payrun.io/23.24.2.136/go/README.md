# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/payrun.io/23.24.2.136/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AEAssessment.DeleteAEAssessment(ctx, operations.DeleteAEAssessmentRequest{
        AEAssessmentID: "corrupti",
        APIVersion: "provident",
        Authorization: "distinctio",
        EmployeeID: "quibusdam",
        EmployerID: "unde",
    })
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
## Available Resources and Operations


### [AEAssessment](docs/aeassessment/README.md)

* [DeleteAEAssessment](docs/aeassessment/README.md#deleteaeassessment) - Delete auto enrolment assessment
* [GetAEAssessmentFromEmployee](docs/aeassessment/README.md#getaeassessmentfromemployee) - Get the auto enrolment assessment
* [GetAEAssessmentsFromEmployee](docs/aeassessment/README.md#getaeassessmentsfromemployee) - Get the auto enrolment assessments
* [GetAEAssessmentsFromPayRun](docs/aeassessment/README.md#getaeassessmentsfrompayrun) - Get the auto enrolment assessments
* [PostNewAEAssessment](docs/aeassessment/README.md#postnewaeassessment) - Insert new auto enrolment assessment
* [PutNewAEAssessment](docs/aeassessment/README.md#putnewaeassessment) - Insert new auto enrolment assessment

### [Application](docs/application/README.md)

* [DeleteApplicationSecret](docs/application/README.md#deleteapplicationsecret) - Deletes Application secret
* [GetApplicationSecret](docs/application/README.md#getapplicationsecret) - Get Application secret
* [GetApplicationSecrets](docs/application/README.md#getapplicationsecrets) - Get all Application secret links
* [PostApplicationSecret](docs/application/README.md#postapplicationsecret) - Create a new Application secret
* [PutApplicationSecret](docs/application/README.md#putapplicationsecret) - Create a new Application secret

### [Cis](docs/cis/README.md)

* [DeleteCisInstruction](docs/cis/README.md#deletecisinstruction) - Delete a CIS instruction
* [DeleteCisInstructionTag](docs/cis/README.md#deletecisinstructiontag) - Delete CIS instruction tag
* [DeleteCisLine](docs/cis/README.md#deletecisline) - Delete a CIS line
* [DeleteCisLineTag](docs/cis/README.md#deletecislinetag) - Delete CIS line tag
* [DeleteCisLineType](docs/cis/README.md#deletecislinetype) - Delete an CIS line type
* [DeleteCisLineTypeTag](docs/cis/README.md#deletecislinetypetag) - Delete CIS line type tag
* [DeleteCisTransaction](docs/cis/README.md#deletecistransaction) - Delete the CIS transaction
* [DeleteSubContractorTag](docs/cis/README.md#deletesubcontractortag) - Delete sub contractor tag
* [GetAllCisInstructionTags](docs/cis/README.md#getallcisinstructiontags) - Get all CIS instruction tags
* [GetAllCisLineTags](docs/cis/README.md#getallcislinetags) - Get all CIS line tags
* [GetAllCisLineTypeTags](docs/cis/README.md#getallcislinetypetags) - Get all CIS line type tags
* [GetAllSubContractorTags](docs/cis/README.md#getallsubcontractortags) - Get all sub contractor tags
* [GetCisInstructionFromSubContractor](docs/cis/README.md#getcisinstructionfromsubcontractor) - Get CIS instruction from sub contractor
* [GetCisInstructionsFromSubContractor](docs/cis/README.md#getcisinstructionsfromsubcontractor) - Get CIS instructions from sub contractor.
* [GetCisInstructionsWithTag](docs/cis/README.md#getcisinstructionswithtag) - Get CIS instructions with tag
* [GetCisLineFromSubContractor](docs/cis/README.md#getcislinefromsubcontractor) - Get CIS line from sub contractor
* [GetCisLineTypeFromEmployer](docs/cis/README.md#getcislinetypefromemployer) - Get CIS line type from employer
* [GetCisLineTypesFromEmployer](docs/cis/README.md#getcislinetypesfromemployer) - Get CIS line types from employer.
* [GetCisLineTypesWithTag](docs/cis/README.md#getcislinetypeswithtag) - Get CIS line types with tag
* [GetCisLinesFromSubContractor](docs/cis/README.md#getcislinesfromsubcontractor) - Get CIS lines from sub contractor.
* [GetCisLinesWithTag](docs/cis/README.md#getcislineswithtag) - Get CIS lines with tag
* [GetCisTransactionFromEmployer](docs/cis/README.md#getcistransactionfromemployer) - Get the CIS transaction
* [GetCisTransactionsFromEmployer](docs/cis/README.md#getcistransactionsfromemployer) - Get all CIS transactions for the employer
* [GetSubContractorsWithTag](docs/cis/README.md#getsubcontractorswithtag) - Get sub contractors with tag
* [GetTagFromCisInstruction](docs/cis/README.md#gettagfromcisinstruction) - Get CIS instruction tag
* [GetTagFromCisLine](docs/cis/README.md#gettagfromcisline) - Get CIS line tag
* [GetTagFromCisLineType](docs/cis/README.md#gettagfromcislinetype) - Get CIS line type tag
* [GetTagFromSubContractor](docs/cis/README.md#gettagfromsubcontractor) - Get sub contractor tag
* [GetTagFromSubContractorRevision](docs/cis/README.md#gettagfromsubcontractorrevision) - Get sub contractor revision tag
* [GetTagsFromCisInstruction](docs/cis/README.md#gettagsfromcisinstruction) - Get all tags from the CIS instruction
* [GetTagsFromCisLine](docs/cis/README.md#gettagsfromcisline) - Get all tags from the CIS line
* [GetTagsFromCisLineType](docs/cis/README.md#gettagsfromcislinetype) - Get all tags from the CIS line type
* [GetTagsFromSubContractor](docs/cis/README.md#gettagsfromsubcontractor) - Get all tags from the sub contractor
* [GetTagsFromSubContractorRevision](docs/cis/README.md#gettagsfromsubcontractorrevision) - Get all sub contractor revision tags
* [PatchCisInstruction](docs/cis/README.md#patchcisinstruction) - Patches the CIS instruction
* [PostCisInstructionIntoSubContractor](docs/cis/README.md#postcisinstructionintosubcontractor) - Create a new CIS instruction
* [PostCisLineTypeIntoEmployer](docs/cis/README.md#postcislinetypeintoemployer) - Create a new CIS line type
* [PutCisInstructionIntoSubContractor](docs/cis/README.md#putcisinstructionintosubcontractor) - Updates the CIS instruction
* [PutCisInstructionTag](docs/cis/README.md#putcisinstructiontag) - Insert CIS instruction tag
* [PutCisLineTag](docs/cis/README.md#putcislinetag) - Insert CIS line tag
* [PutCisLineTypeIntoEmployer](docs/cis/README.md#putcislinetypeintoemployer) - Updates the CIS line type
* [PutCisLineTypeTag](docs/cis/README.md#putcislinetypetag) - Insert CIS line type tag
* [PutSubContractorTag](docs/cis/README.md#putsubcontractortag) - Insert sub contractor tag

### [DpsMessage](docs/dpsmessage/README.md)

* [DeleteDpsMessage](docs/dpsmessage/README.md#deletedpsmessage) - Deletes the DPS message
* [GetDpsMessageFromEmployer](docs/dpsmessage/README.md#getdpsmessagefromemployer) - Gets the DPS message
* [GetDpsMessagesFromEmployer](docs/dpsmessage/README.md#getdpsmessagesfromemployer) - Gets the DPS messages
* [PatchDpsMessage](docs/dpsmessage/README.md#patchdpsmessage) - Patches the DPS message
* [PostDpsMessage](docs/dpsmessage/README.md#postdpsmessage) - Posta the DPS message
* [PutDpsMessage](docs/dpsmessage/README.md#putdpsmessage) - Puts the DPS message

### [Employee](docs/employee/README.md)

* [DeleteEmployee](docs/employee/README.md#deleteemployee) - Delete an Employee
* [DeleteEmployeeRevision](docs/employee/README.md#deleteemployeerevision) - Delete an Employee revision matching the specified revision date.
* [DeleteEmployeeRevisionByNumber](docs/employee/README.md#deleteemployeerevisionbynumber) - Delete an Employee revision matching the specified revision number.
* [DeleteEmployeeSecret](docs/employee/README.md#deleteemployeesecret) - Deletes employee secret
* [GetAEAssessmentFromEmployee](docs/employee/README.md#getaeassessmentfromemployee) - Get the auto enrolment assessment
* [GetAEAssessmentsFromEmployee](docs/employee/README.md#getaeassessmentsfromemployee) - Get the auto enrolment assessments
* [GetAllEmployeeTags](docs/employee/README.md#getallemployeetags) - Get all employee tags
* [GetCommentariesFromEmployee](docs/employee/README.md#getcommentariesfromemployee) - Get links to all commentaries for the specified employee
* [GetCommentaryFromEmployee](docs/employee/README.md#getcommentaryfromemployee) - Get commentary from employee
* [GetCommentaryFromPayRunByEmployee](docs/employee/README.md#getcommentaryfrompayrunbyemployee) - Get commentary from payrun by specified employee.
* [GetEmployeeByEffectiveDate](docs/employee/README.md#getemployeebyeffectivedate) - Get employee by effective date.
* [GetEmployeeFromEmployer](docs/employee/README.md#getemployeefromemployer) - Get employee from employer
* [GetEmployeeRevisionByNumber](docs/employee/README.md#getemployeerevisionbynumber) - Gets the employee by revision number
* [GetEmployeeRevisionSummaries](docs/employee/README.md#getemployeerevisionsummaries) - Get all employee revision summaries
* [GetEmployeeRevisionSummaryByNumber](docs/employee/README.md#getemployeerevisionsummarybynumber) - Gets the employee summary by revision number
* [GetEmployeeRevisions](docs/employee/README.md#getemployeerevisions) - Get all employee revisions
* [GetEmployeeSecret](docs/employee/README.md#getemployeesecret) - Get employee secret
* [GetEmployeeSecrets](docs/employee/README.md#getemployeesecrets) - Get all employee secret links
* [GetEmployeeSummariesByEffectiveDate](docs/employee/README.md#getemployeesummariesbyeffectivedate) - Get employee summaries from employer at a given effective date.
* [GetEmployeeSummariesFromEmployer](docs/employee/README.md#getemployeesummariesfromemployer) - Get employee summaries from employer.
* [GetEmployeeSummaryByEffectiveDate](docs/employee/README.md#getemployeesummarybyeffectivedate) - Get employee summary by effective date.
* [GetEmployeeSummaryFromEmployer](docs/employee/README.md#getemployeesummaryfromemployer) - Get employee summary from employer
* [GetEmployeesByEffectiveDate](docs/employee/README.md#getemployeesbyeffectivedate) - Get employees from employer at a given effective date.
* [GetEmployeesFromEmployer](docs/employee/README.md#getemployeesfromemployer) - Get employees from employer.
* [GetEmployeesFromPayRun](docs/employee/README.md#getemployeesfrompayrun) - Get employees from the pay run
* [GetEmployeesFromPaySchedule](docs/employee/README.md#getemployeesfrompayschedule) - Get all employees revisions from a pay schedule.
* [GetEmployeesFromPayScheduleOnEffectiveDate](docs/employee/README.md#getemployeesfrompayscheduleoneffectivedate) - Get employees from a pay schedule on effective date.
* [GetEmployeesWithTag](docs/employee/README.md#getemployeeswithtag) - Get employees with tag
* [GetPayRunsFromEmployee](docs/employee/README.md#getpayrunsfromemployee) - Gets the pay runs from the employee
* [PatchEmployee](docs/employee/README.md#patchemployee) - Patches the employee
* [PostEmployeeIntoEmployer](docs/employee/README.md#postemployeeintoemployer) - Create a new Employee
* [PostEmployeeSecret](docs/employee/README.md#postemployeesecret) - Create a new employee secret
* [PutEmployeeIntoEmployer](docs/employee/README.md#putemployeeintoemployer) - Updates the Employee
* [PutEmployeeSecret](docs/employee/README.md#putemployeesecret) - Create a new employee secret

### [Employer](docs/employer/README.md)

* [DeleteEmployer](docs/employer/README.md#deleteemployer) - Delete an Employer
* [DeleteEmployerRevision](docs/employer/README.md#deleteemployerrevision) - Delete an Employer revision matching the specified revision date.
* [DeleteEmployerRevisionByNumber](docs/employer/README.md#deleteemployerrevisionbynumber) - Delete an Employer revision matching the specified revision number.
* [DeleteEmployerSecret](docs/employer/README.md#deleteemployersecret) - Deletes employer secret
* [GetAllEmployerTags](docs/employer/README.md#getallemployertags) - Get all employer tags
* [GetEmployer](docs/employer/README.md#getemployer) - Gets the employer
* [GetEmployerByEffectiveDate](docs/employer/README.md#getemployerbyeffectivedate) - Gets the employer at the specified effective
* [GetEmployerRevisionByNumber](docs/employer/README.md#getemployerrevisionbynumber) - Gets the employer by revision number
* [GetEmployerRevisionSummaries](docs/employer/README.md#getemployerrevisionsummaries) - Get all employer revision summaries
* [GetEmployerRevisionSummaryByNumber](docs/employer/README.md#getemployerrevisionsummarybynumber) - Gets the employer summary by revision number
* [GetEmployerRevisions](docs/employer/README.md#getemployerrevisions) - Gets the employer revisions
* [GetEmployerSecret](docs/employer/README.md#getemployersecret) - Get employer secret
* [GetEmployerSecrets](docs/employer/README.md#getemployersecrets) - Get all employer secret links
* [GetEmployerSummaries](docs/employer/README.md#getemployersummaries) - Get employer summaries.
* [GetEmployerSummariesByEffectiveDate](docs/employer/README.md#getemployersummariesbyeffectivedate) - Get employer summaries at a given effective date.
* [GetEmployerSummary](docs/employer/README.md#getemployersummary) - Get employer summary
* [GetEmployerSummaryByEffectiveDate](docs/employer/README.md#getemployersummarybyeffectivedate) - Get employer summary by effective date.
* [GetEmployers](docs/employer/README.md#getemployers) - Gets all employers
* [GetEmployersByEffectiveDate](docs/employer/README.md#getemployersbyeffectivedate) - Gets all employers at the specified effective date
* [GetEmployersWithTag](docs/employer/README.md#getemployerswithtag) - Get employers with tag
* [PatchEmployer](docs/employer/README.md#patchemployer) - Patches the employer
* [PostEmployer](docs/employer/README.md#postemployer) - Create a new Employer
* [PostEmployerSecret](docs/employer/README.md#postemployersecret) - Create a new employer secret
* [PutEmployer](docs/employer/README.md#putemployer) - Updates the Employer
* [PutEmployerSecret](docs/employer/README.md#putemployersecret) - Create a new employer secret

### [Healthcheck](docs/healthcheck/README.md)

* [GetHealthCheck](docs/healthcheck/README.md#gethealthcheck) - Get health check status

### [HolidayScheme](docs/holidayscheme/README.md)

* [DeleteHolidayScheme](docs/holidayscheme/README.md#deleteholidayscheme) - Delete an holiday scheme
* [DeleteHolidaySchemeRevision](docs/holidayscheme/README.md#deleteholidayschemerevision) - Delete an holiday scheme revision matching the specified revision date.
* [DeleteHolidaySchemeRevisionByNumber](docs/holidayscheme/README.md#deleteholidayschemerevisionbynumber) - Delete an HolidayScheme revision matching the specified revision number.
* [DeleteHolidaySchemeTag](docs/holidayscheme/README.md#deleteholidayschemetag) - Delete holiday scheme tag
* [GetAllHolidaySchemeTags](docs/holidayscheme/README.md#getallholidayschemetags) - Get all holiday scheme tags
* [GetHolidaySchemeByEffectiveDate](docs/holidayscheme/README.md#getholidayschemebyeffectivedate) - Get holiday scheme by effective date.
* [GetHolidaySchemeFromEmployer](docs/holidayscheme/README.md#getholidayschemefromemployer) - Get holiday scheme from employer
* [GetHolidaySchemeRevisionByNumber](docs/holidayscheme/README.md#getholidayschemerevisionbynumber) - Gets the holiday scheme revision by revision number
* [GetHolidaySchemeRevisions](docs/holidayscheme/README.md#getholidayschemerevisions) - Get all holiday scheme revisions
* [GetHolidaySchemesByEffectiveDate](docs/holidayscheme/README.md#getholidayschemesbyeffectivedate) - Get holiday schemes from employer at a given effective date.
* [GetHolidaySchemesFromEmployer](docs/holidayscheme/README.md#getholidayschemesfromemployer) - Get holiday schemes from employer.
* [GetHolidaySchemesWithTag](docs/holidayscheme/README.md#getholidayschemeswithtag) - Get holiday schemes with tag
* [GetTagFromHolidayScheme](docs/holidayscheme/README.md#gettagfromholidayscheme) - Get holiday scheme tag
* [GetTagFromHolidaySchemeRevision](docs/holidayscheme/README.md#gettagfromholidayschemerevision) - Get holiday scheme revision tag
* [GetTagsFromHolidayScheme](docs/holidayscheme/README.md#gettagsfromholidayscheme) - Get all tags from the holiday scheme
* [GetTagsFromHolidaySchemeRevision](docs/holidayscheme/README.md#gettagsfromholidayschemerevision) - Get all holiday scheme revision tags
* [PatchHolidayScheme](docs/holidayscheme/README.md#patchholidayscheme) - Patches the holiday scheme
* [PostHolidaySchemeIntoEmployer](docs/holidayscheme/README.md#postholidayschemeintoemployer) - Create a new holiday scheme
* [PutHolidaySchemeIntoEmployer](docs/holidayscheme/README.md#putholidayschemeintoemployer) - Updates the holiday scheme
* [PutHolidaySchemeTag](docs/holidayscheme/README.md#putholidayschemetag) - Insert holiday scheme tag

### [Jobs](docs/jobs/README.md)

* [DeleteBatchJob](docs/jobs/README.md#deletebatchjob) - Delete the Batch job
* [DeleteCisJob](docs/jobs/README.md#deletecisjob) - Delete the CIS job
* [DeleteDpsJob](docs/jobs/README.md#deletedpsjob) - Delete the DPS job
* [DeletePayRunJob](docs/jobs/README.md#deletepayrunjob) - Delete the pay run job
* [DeleteRtiJob](docs/jobs/README.md#deletertijob) - Delete the RTI job
* [DeleteThirdPartyJob](docs/jobs/README.md#deletethirdpartyjob) - Delete the Third Party job
* [GetBatchJobInfo](docs/jobs/README.md#getbatchjobinfo) - Get the Batch job information
* [GetBatchJobProgress](docs/jobs/README.md#getbatchjobprogress) - Get the Batch job progress
* [GetBatchJobStatus](docs/jobs/README.md#getbatchjobstatus) - Get the Batch job status
* [GetBatchJobs](docs/jobs/README.md#getbatchjobs) - Get all Batch jobs
* [GetCisJobInfo](docs/jobs/README.md#getcisjobinfo) - Get the CIS job information
* [GetCisJobProgress](docs/jobs/README.md#getcisjobprogress) - Get the CIS job progress
* [GetCisJobStatus](docs/jobs/README.md#getcisjobstatus) - Get the CIS job status
* [GetCisJobs](docs/jobs/README.md#getcisjobs) - Get all CIS jobs
* [GetDpsJobInfo](docs/jobs/README.md#getdpsjobinfo) - Get the DPS job information
* [GetDpsJobProgress](docs/jobs/README.md#getdpsjobprogress) - Get the DPS job progress
* [GetDpsJobStatus](docs/jobs/README.md#getdpsjobstatus) - Get the DPS job status
* [GetDpsJobs](docs/jobs/README.md#getdpsjobs) - Get all DPS jobs
* [GetEmployerJobs](docs/jobs/README.md#getemployerjobs) - Gets all jobs relating to the employer.
* [GetPayRunJobInfo](docs/jobs/README.md#getpayrunjobinfo) - Get the pay run job information
* [GetPayRunJobProgress](docs/jobs/README.md#getpayrunjobprogress) - Get the pay run job progress
* [GetPayRunJobStatus](docs/jobs/README.md#getpayrunjobstatus) - Get the pay run job status
* [GetPayRunJobs](docs/jobs/README.md#getpayrunjobs) - Get all PayRun jobs
* [GetRtiJobInfo](docs/jobs/README.md#getrtijobinfo) - Get the RTI job information
* [GetRtiJobProgress](docs/jobs/README.md#getrtijobprogress) - Get the RTI job progress
* [GetRtiJobStatus](docs/jobs/README.md#getrtijobstatus) - Get the RTI job status
* [GetRtiJobs](docs/jobs/README.md#getrtijobs) - Get all RTI jobs
* [GetThirdPartyJobInfo](docs/jobs/README.md#getthirdpartyjobinfo) - Get the Third Party job information
* [GetThirdPartyJobProgress](docs/jobs/README.md#getthirdpartyjobprogress) - Get the Third Party job progress
* [GetThirdPartyJobStatus](docs/jobs/README.md#getthirdpartyjobstatus) - Get the Third Party job status
* [GetThirdPartyJobs](docs/jobs/README.md#getthirdpartyjobs) - Get all Third Party jobs
* [PostNewBatchJob](docs/jobs/README.md#postnewbatchjob) - Create new Batch job
* [PostNewCisJob](docs/jobs/README.md#postnewcisjob) - Create new CIS job
* [PostNewDpsJob](docs/jobs/README.md#postnewdpsjob) - Create new DPS job
* [PostNewPayRunJob](docs/jobs/README.md#postnewpayrunjob) - Create new PayRun job
* [PostNewRtiJob](docs/jobs/README.md#postnewrtijob) - Create new RTI job
* [PostNewThirdPartyJob](docs/jobs/README.md#postnewthirdpartyjob) - Create new Third Party job

### [JournalLine](docs/journalline/README.md)

* [DeleteJournalLineTag](docs/journalline/README.md#deletejournallinetag) - Delete journal line tag
* [GetAllJournalLineTags](docs/journalline/README.md#getalljournallinetags) - Get all journal line tags
* [GetAllJournalLinesWithTag](docs/journalline/README.md#getalljournallineswithtag) - Get links to tagged journal lines
* [GetTagFromJournalLine](docs/journalline/README.md#gettagfromjournalline) - Get journal line tag
* [GetTagsFromJournalLine](docs/journalline/README.md#gettagsfromjournalline) - Get tags from journal line
* [PutJournalLineTag](docs/journalline/README.md#putjournallinetag) - Insert journal line tag

### [Journals](docs/journals/README.md)

* [DeleteJournalInstruction](docs/journals/README.md#deletejournalinstruction) - Deletes a Journal instruction
* [DeleteJournalInstructionTemplate](docs/journals/README.md#deletejournalinstructiontemplate) - Deletes a Journal instruction template
* [GetJournalInstructionFromEmployer](docs/journals/README.md#getjournalinstructionfromemployer) - Gets the specified journal instruction from the employer
* [GetJournalInstructionTemplate](docs/journals/README.md#getjournalinstructiontemplate) - Gets the Journal instructions template for the application
* [GetJournalInstructionTemplates](docs/journals/README.md#getjournalinstructiontemplates) - Gets the Journal instructions templates for the application
* [GetJournalInstructionsFromEmployer](docs/journals/README.md#getjournalinstructionsfromemployer) - Gets the Journal instructions from the specified employer
* [GetJournalLineFromEmployer](docs/journals/README.md#getjournallinefromemployer) - Gets the specified journal Line from the employer
* [GetJournalLinesFromEmployee](docs/journals/README.md#getjournallinesfromemployee) - Gets the journal Lines from the specified employee
* [GetJournalLinesFromEmployer](docs/journals/README.md#getjournallinesfromemployer) - Gets the Journal Lines from the specified employer
* [GetJournalLinesFromPayRun](docs/journals/README.md#getjournallinesfrompayrun) - Gets the journal Lines from the specified pay run
* [GetJournalLinesFromSubContractor](docs/journals/README.md#getjournallinesfromsubcontractor) - Gets the journal Lines from the specified sub contractor
* [PostJournalInstruction](docs/journals/README.md#postjournalinstruction) - Creates a new Journal Instruction
* [PostJournalInstructionTemplate](docs/journals/README.md#postjournalinstructiontemplate) - Creates a new Journal Instruction template
* [PutJournalInstruction](docs/journals/README.md#putjournalinstruction) - Update a Journal Instruction
* [PutJournalInstructionTemplate](docs/journals/README.md#putjournalinstructiontemplate) - Update a Journal Instruction template

### [NominalCode](docs/nominalcode/README.md)

* [DeleteNominalCode](docs/nominalcode/README.md#deletenominalcode) - Deletes the nominal codes
* [GetNominalCodeFromEmployer](docs/nominalcode/README.md#getnominalcodefromemployer) - Gets the nominal code
* [GetNominalCodesFromEmployer](docs/nominalcode/README.md#getnominalcodesfromemployer) - Gets the nominal codes
* [PostNominalCode](docs/nominalcode/README.md#postnominalcode) - Insert nominal code
* [PutNominalCode](docs/nominalcode/README.md#putnominalcode) - Insert nominal code

### [PayCode](docs/paycode/README.md)

* [DeletePayCode](docs/paycode/README.md#deletepaycode) - Deletes a pay code
* [DeletePayCodeRevision](docs/paycode/README.md#deletepaycoderevision) - Deletes a pay code revision
* [DeletePayCodeRevisionByNumber](docs/paycode/README.md#deletepaycoderevisionbynumber) - Delete an PayCode revision matching the specified revision number.
* [GetAllPayCodeTags](docs/paycode/README.md#getallpaycodetags) - Get all pay code tags
* [GetPayCodeByEffectiveDate](docs/paycode/README.md#getpaycodebyeffectivedate) - Gets pay code for specified date
* [GetPayCodeFromEmployer](docs/paycode/README.md#getpaycodefromemployer) - Gets the specified pay code from the employer
* [GetPayCodeRevisionByNumber](docs/paycode/README.md#getpaycoderevisionbynumber) - Gets the pay code by revision number
* [GetPayCodeRevisions](docs/paycode/README.md#getpaycoderevisions) - Get all revisions of the Pay Code
* [GetPayCodesByEffectiveDate](docs/paycode/README.md#getpaycodesbyeffectivedate) - Gets all pay codes for specified date
* [GetPayCodesFromEmployer](docs/paycode/README.md#getpaycodesfromemployer) - Gets the pay codes from the employer
* [GetPayCodesFromNominalCode](docs/paycode/README.md#getpaycodesfromnominalcode) - Gets the pay codes by nominal code
* [GetPayCodesWithTag](docs/paycode/README.md#getpaycodeswithtag) - Get pay codes with tag
* [PatchPayCode](docs/paycode/README.md#patchpaycode) - Patches the pay code
* [PostPayCode](docs/paycode/README.md#postpaycode) - Create a new pay code
* [PutPayCode](docs/paycode/README.md#putpaycode) - Updates a pay code

### [PayInstruction](docs/payinstruction/README.md)

* [DeletePayInstruction](docs/payinstruction/README.md#deletepayinstruction) - Deletes a pay instruction
* [GetAllPayInstructionTags](docs/payinstruction/README.md#getallpayinstructiontags) - Get all pay instruction tags
* [GetPayInstructionFromEmployee](docs/payinstruction/README.md#getpayinstructionfromemployee) - Gets the specified pay instruction from the employee
* [GetPayInstructionsFromEmployee](docs/payinstruction/README.md#getpayinstructionsfromemployee) - Gets the pay instructions from the specified employee
* [GetPayInstructionsWithTag](docs/payinstruction/README.md#getpayinstructionswithtag) - Get pay instructions with tag
* [PatchPayInstruction](docs/payinstruction/README.md#patchpayinstruction) - Sparse Update of a Pay Instruction
* [PostPayInstruction](docs/payinstruction/README.md#postpayinstruction) - Creates a new Pay Instruction
* [PutPayInstruction](docs/payinstruction/README.md#putpayinstruction) - Update a Pay Instruction

### [PayLine](docs/payline/README.md)

* [GetAllPayLineTags](docs/payline/README.md#getallpaylinetags) - Get all pay line tags
* [GetPayLineFromEmployee](docs/payline/README.md#getpaylinefromemployee) - Gets the specified pay line from the employee
* [GetPayLinesFromEmployee](docs/payline/README.md#getpaylinesfromemployee) - Gets the pay lines from the specified employee
* [GetPayLinesFromPayRun](docs/payline/README.md#getpaylinesfrompayrun) - Gets the pay lines from the specified pay run
* [GetPayLinesWithTag](docs/payline/README.md#getpaylineswithtag) - Get pay lines with tag

### [PayRun](docs/payrun/README.md)

* [DeletePayRun](docs/payrun/README.md#deletepayrun) - Deletes a pay run
* [DeletePayRunEmployee](docs/payrun/README.md#deletepayrunemployee) - Deletes a pay run employee
* [GetAEAssessmentsFromPayRun](docs/payrun/README.md#getaeassessmentsfrompayrun) - Get the auto enrolment assessments
* [GetAllPayRunTags](docs/payrun/README.md#getallpayruntags) - Get all pay run tags
* [GetCommentariesFromPayRun](docs/payrun/README.md#getcommentariesfrompayrun) - Get links to all commentaries for the specified pay run
* [GetCommentaryFromPayRunByEmployee](docs/payrun/README.md#getcommentaryfrompayrunbyemployee) - Get commentary from payrun by specified employee.
* [GetEmployeesFromPayRun](docs/payrun/README.md#getemployeesfrompayrun) - Get employees from the pay run
* [GetPayRunFromPaySchedule](docs/payrun/README.md#getpayrunfrompayschedule) - Gets the pay run from the pay schedule
* [GetPayRunsFromEmployee](docs/payrun/README.md#getpayrunsfromemployee) - Gets the pay runs from the employee
* [GetPayRunsFromPaySchedule](docs/payrun/README.md#getpayrunsfrompayschedule) - Gets the pay runs from the pay schedule
* [GetPayRunsWithTag](docs/payrun/README.md#getpayrunswithtag) - Get pay runs with tag
* [GetReportLinesFromPayRun](docs/payrun/README.md#getreportlinesfrompayrun) - Gets the report lines from the specified pay run

### [PaySchedule](docs/payschedule/README.md)

* [DeletePaySchedule](docs/payschedule/README.md#deletepayschedule) - Deletes a pay schedule
* [GetAllPayScheduleTags](docs/payschedule/README.md#getallpayscheduletags) - Get all pay schedule tags
* [GetEmployeesFromPaySchedule](docs/payschedule/README.md#getemployeesfrompayschedule) - Get all employees revisions from a pay schedule.
* [GetEmployeesFromPayScheduleOnEffectiveDate](docs/payschedule/README.md#getemployeesfrompayscheduleoneffectivedate) - Get employees from a pay schedule on effective date.
* [GetPayRunFromPaySchedule](docs/payschedule/README.md#getpayrunfrompayschedule) - Gets the pay run from the pay schedule
* [GetPayRunsFromPaySchedule](docs/payschedule/README.md#getpayrunsfrompayschedule) - Gets the pay runs from the pay schedule
* [GetPayScheduleFromEmployer](docs/payschedule/README.md#getpayschedulefromemployer) - Gets the specified pay schedule from the employer
* [GetPaySchedulesFromEmployer](docs/payschedule/README.md#getpayschedulesfromemployer) - Gets the pay schedule from the specified employer
* [GetPaySchedulesWithTag](docs/payschedule/README.md#getpayscheduleswithtag) - Get pay schedule with tag
* [PostPaySchedule](docs/payschedule/README.md#postpayschedule) - Create a new pay schedule
* [PutPaySchedule](docs/payschedule/README.md#putpayschedule) - Updates a pay schedule

### [Pension](docs/pension/README.md)

* [DeletePension](docs/pension/README.md#deletepension) - Delete a Pension
* [DeletePensionRevision](docs/pension/README.md#deletepensionrevision) - Delete an Pension revision matching the specified revision date.
* [DeletePensionRevisionByNumber](docs/pension/README.md#deletepensionrevisionbynumber) - Delete an Pension revision matching the specified revision number.
* [GetPensionByEffectiveDate](docs/pension/README.md#getpensionbyeffectivedate) - Get pension by effective date.
* [GetPensionFromEmployer](docs/pension/README.md#getpensionfromemployer) - Get pension from employer
* [GetPensionRevisionByNumber](docs/pension/README.md#getpensionrevisionbynumber) - Gets the pension by revision number
* [GetPensionRevisions](docs/pension/README.md#getpensionrevisions) - Get all pension revisions
* [GetPensionsByEffectiveDate](docs/pension/README.md#getpensionsbyeffectivedate) - Get pensions from employer at a given effective date.
* [GetPensionsFromEmployer](docs/pension/README.md#getpensionsfromemployer) - Get pensions from employer.
* [PatchPension](docs/pension/README.md#patchpension) - Patches the pension
* [PostPensionIntoEmployer](docs/pension/README.md#postpensionintoemployer) - Create a new Pension
* [PutPensionIntoEmployer](docs/pension/README.md#putpensionintoemployer) - Updates the Pension

### [Permission](docs/permission/README.md)

* [DeletePermission](docs/permission/README.md#deletepermission) - Deletes the permission object
* [DeletePermissionTag](docs/permission/README.md#deletepermissiontag) - Delete Permission tag
* [GetAllPermissionTags](docs/permission/README.md#getallpermissiontags) - Get all Permission tags
* [GetAllPermissionsWithTag](docs/permission/README.md#getallpermissionswithtag) - Get links to tagged Permissions
* [GetPermission](docs/permission/README.md#getpermission) - Gets the permission object
* [GetPermissions](docs/permission/README.md#getpermissions) - Gets all permission objects
* [GetTagFromPermission](docs/permission/README.md#gettagfrompermission) - Get Permission tag
* [GetTagsFromPermission](docs/permission/README.md#gettagsfrompermission) - Get tags from Permission
* [GetUserPermissions](docs/permission/README.md#getuserpermissions) - Gets the user permissions
* [GetUsersFromPermission](docs/permission/README.md#getusersfrompermission) - Gets the users with the specified permission
* [PatchPermission](docs/permission/README.md#patchpermission) - Patch permission object
* [PostPermission](docs/permission/README.md#postpermission) - Post permisson object
* [PutPermission](docs/permission/README.md#putpermission) - Puts permisson object
* [PutPermissionTag](docs/permission/README.md#putpermissiontag) - Insert Permission tag

### [Query](docs/query/README.md)

* [GetQueryResponse](docs/query/README.md#getqueryresponse) - Get the query result

### [Rti](docs/rti/README.md)

* [DeleteRtiTransaction](docs/rti/README.md#deletertitransaction) - Delete the RTI transaction
* [GetAllRtiTransactionTags](docs/rti/README.md#getallrtitransactiontags) - Get all RTI transaction tags
* [GetRtiTransactionFromEmployer](docs/rti/README.md#getrtitransactionfromemployer) - Get the RTI transaction
* [GetRtiTransactionSummariesFromEmployer](docs/rti/README.md#getrtitransactionsummariesfromemployer) - Get all RTI transaction summaries for the employer
* [GetRtiTransactionSummaryFromEmployer](docs/rti/README.md#getrtitransactionsummaryfromemployer) - Get the RTI transaction summary
* [GetRtiTransactionsFromEmployer](docs/rti/README.md#getrtitransactionsfromemployer) - Get all RTI transactions for the employer
* [GetRtiTransactionsWithTag](docs/rti/README.md#getrtitransactionswithtag) - Get RTI transactions with tag

### [Reference](docs/reference/README.md)

* [GetJournalExpressionSchema](docs/reference/README.md#getjournalexpressionschema) - Gets the journal expression data schema

### [ReportLine](docs/reportline/README.md)

* [GetReportLineFromEmployer](docs/reportline/README.md#getreportlinefromemployer) - Gets the specified report line from the employer
* [GetReportLinesFromEmployer](docs/reportline/README.md#getreportlinesfromemployer) - Gets the report lines from the specified employer
* [GetReportLinesFromPayRun](docs/reportline/README.md#getreportlinesfrompayrun) - Gets the report lines from the specified pay run

### [ReportLineInstruction](docs/reportlineinstruction/README.md)

* [DeleteReportingInstruction](docs/reportlineinstruction/README.md#deletereportinginstruction) - Deletes a reporting instruction
* [GetReportingInstructionFromEmployer](docs/reportlineinstruction/README.md#getreportinginstructionfromemployer) - Gets the specified reporting instruction from the employer
* [GetReportingInstructionsFromEmployer](docs/reportlineinstruction/README.md#getreportinginstructionsfromemployer) - Gets the reporting instructions from the specified employer
* [PostReportingInstruction](docs/reportlineinstruction/README.md#postreportinginstruction) - Creates a new Reporting Instruction
* [PutReportingInstruction](docs/reportlineinstruction/README.md#putreportinginstruction) - Update a reporting Instruction

### [Reports](docs/reports/README.md)

* [DeleteReportDefinition](docs/reports/README.md#deletereportdefinition) - Deletes a report definition
* [DeleteTransformDefinition](docs/reports/README.md#deletetransformdefinition) - Deletes a transform definition
* [GetActivePayInstructionsReportOutput](docs/reports/README.md#getactivepayinstructionsreportoutput) - Runs the active pay instructions report
* [GetAoeLiabilityReportOuput](docs/reports/README.md#getaoeliabilityreportouput) - Runs the AOE liability report
* [GetDpsMessageReportOutput](docs/reports/README.md#getdpsmessagereportoutput) - Runs the DPS message report
* [GetEmployerSummaryReportOuput](docs/reports/README.md#getemployersummaryreportouput) - Runs the employer summary report
* [GetGrossToNetReportOutput](docs/reports/README.md#getgrosstonetreportoutput) - Runs the gross to net report
* [GetHolidayBalanceReportOutput](docs/reports/README.md#getholidaybalancereportoutput) - Runs the holiday balance report
* [GetJournalReportOuput](docs/reports/README.md#getjournalreportouput) - Runs the journal report
* [GetLastPayDateReportOuput](docs/reports/README.md#getlastpaydatereportouput) - Runs the last pay date report
* [GetNetPayReportOutput](docs/reports/README.md#getnetpayreportoutput) - Runs the net pay report
* [GetNextPayPeriodDatesReportOutput](docs/reports/README.md#getnextpayperioddatesreportoutput) - Runs the next pay period report
* [GetP11SummaryReportOutput](docs/reports/README.md#getp11summaryreportoutput) - Runs the P11 summary report
* [GetP32NetReportOutput](docs/reports/README.md#getp32netreportoutput) - Runs the P32 report
* [GetP32SummaryNetReportOutput](docs/reports/README.md#getp32summarynetreportoutput) - Runs the P32 summary report
* [GetP45ReportOutput](docs/reports/README.md#getp45reportoutput) - Runs the P45 report
* [GetP60ReportOutput](docs/reports/README.md#getp60reportoutput) - Runs the P60 report
* [GetPapdisReportOuput](docs/reports/README.md#getpapdisreportouput) - Runs the PAPDIS report
* [GetPassReportOuput](docs/reports/README.md#getpassreportouput) - Runs the PASS report
* [GetPayDashboardPayslipReportOuput](docs/reports/README.md#getpaydashboardpayslipreportouput) - Runs the Pay Dashboard payslips report
* [GetPayslip3ReportOutput](docs/reports/README.md#getpayslip3reportoutput) - Runs the verbose payslip report
* [GetPensionLiabilityReportOutput](docs/reports/README.md#getpensionliabilityreportoutput) - Runs the pension liability report
* [GetReportDefinitionFromApplication](docs/reports/README.md#getreportdefinitionfromapplication) - Get the report definition
* [GetReportDefinitionsFromApplication](docs/reports/README.md#getreportdefinitionsfromapplication) - Gets all reports
* [GetReportOutput](docs/reports/README.md#getreportoutput) - Runs the specified report definition
* [GetTransformDefinitionFromApplication](docs/reports/README.md#gettransformdefinitionfromapplication) - Get the transform definition
* [GetTransformDefinitionsFromApplication](docs/reports/README.md#gettransformdefinitionsfromapplication) - Gets all transform definitions
* [PostReportDefinition](docs/reports/README.md#postreportdefinition) - Create a new report definition
* [PostTransformDefinition](docs/reports/README.md#posttransformdefinition) - Create a new transform definition
* [PutReportDefinition](docs/reports/README.md#putreportdefinition) - Updates a report definition
* [PutTransformDefinition](docs/reports/README.md#puttransformdefinition) - Updates a transform definition

### [Schemas](docs/schemas/README.md)

* [GetSchema](docs/schemas/README.md#getschema) - Get XSD schema
* [GetSchemas](docs/schemas/README.md#getschemas) - Get a list of all available schemas

### [SubContractor](docs/subcontractor/README.md)

* [DeleteSubContractor](docs/subcontractor/README.md#deletesubcontractor) - Delete an sub contractor
* [DeleteSubContractorRevision](docs/subcontractor/README.md#deletesubcontractorrevision) - Delete an sub contractor revision matching the specified revision date.
* [DeleteSubContractorRevisionByNumber](docs/subcontractor/README.md#deletesubcontractorrevisionbynumber) - Delete an SubContractor revision matching the specified revision number.
* [GetSubContractorByEffectiveDate](docs/subcontractor/README.md#getsubcontractorbyeffectivedate) - Get sub contractor by effective date.
* [GetSubContractorFromEmployer](docs/subcontractor/README.md#getsubcontractorfromemployer) - Get sub contractor from employer
* [GetSubContractorRevisionByNumber](docs/subcontractor/README.md#getsubcontractorrevisionbynumber) - Gets the sub contractor by revision number
* [GetSubContractorRevisions](docs/subcontractor/README.md#getsubcontractorrevisions) - Get all sub contractor revisions
* [GetSubContractorsByEffectiveDate](docs/subcontractor/README.md#getsubcontractorsbyeffectivedate) - Get sub contractors from employer at a given effective date.
* [GetSubContractorsFromEmployer](docs/subcontractor/README.md#getsubcontractorsfromemployer) - Get sub contractors from employer.
* [PatchSubContractor](docs/subcontractor/README.md#patchsubcontractor) - Patches the sub contractor
* [PostSubContractorIntoEmployer](docs/subcontractor/README.md#postsubcontractorintoemployer) - Create a new sub contractor
* [PutSubContractorIntoEmployer](docs/subcontractor/README.md#putsubcontractorintoemployer) - Updates the sub contractor

### [Tagging](docs/tagging/README.md)

* [DeleteCisInstructionTag](docs/tagging/README.md#deletecisinstructiontag) - Delete CIS instruction tag
* [DeleteCisLineTag](docs/tagging/README.md#deletecislinetag) - Delete CIS line tag
* [DeleteCisLineTypeTag](docs/tagging/README.md#deletecislinetypetag) - Delete CIS line type tag
* [DeleteEmployeeTag](docs/tagging/README.md#deleteemployeetag) - Delete employee tag
* [DeleteEmployerTag](docs/tagging/README.md#deleteemployertag) - Delete employer tag
* [DeleteHolidaySchemeTag](docs/tagging/README.md#deleteholidayschemetag) - Delete holiday scheme tag
* [DeleteJournalLineTag](docs/tagging/README.md#deletejournallinetag) - Delete journal line tag
* [DeletePayCodeTag](docs/tagging/README.md#deletepaycodetag) - Delete pay code tag
* [DeletePayInstructionTag](docs/tagging/README.md#deletepayinstructiontag) - Delete pay instruction tag
* [DeletePayLineTag](docs/tagging/README.md#deletepaylinetag) - Delete pay line tag
* [DeletePayRunTag](docs/tagging/README.md#deletepayruntag) - Delete pay run tag
* [DeletePayScheduleTag](docs/tagging/README.md#deletepayscheduletag) - Delete pay schedule tag
* [DeletePermissionTag](docs/tagging/README.md#deletepermissiontag) - Delete Permission tag
* [DeleteRtiTransactionTag](docs/tagging/README.md#deletertitransactiontag) - Delete RTI transaction tag
* [DeleteSubContractorTag](docs/tagging/README.md#deletesubcontractortag) - Delete sub contractor tag
* [DeleteThirdPartyTransactionTag](docs/tagging/README.md#deletethirdpartytransactiontag) - Delete third party transaction tag
* [DeleteUserTag](docs/tagging/README.md#deleteusertag) - Delete user tag
* [GetAllCisInstructionTags](docs/tagging/README.md#getallcisinstructiontags) - Get all CIS instruction tags
* [GetAllCisLineTags](docs/tagging/README.md#getallcislinetags) - Get all CIS line tags
* [GetAllCisLineTypeTags](docs/tagging/README.md#getallcislinetypetags) - Get all CIS line type tags
* [GetAllEmployeeTags](docs/tagging/README.md#getallemployeetags) - Get all employee tags
* [GetAllEmployerTags](docs/tagging/README.md#getallemployertags) - Get all employer tags
* [GetAllHolidaySchemeTags](docs/tagging/README.md#getallholidayschemetags) - Get all holiday scheme tags
* [GetAllJournalLineTags](docs/tagging/README.md#getalljournallinetags) - Get all journal line tags
* [GetAllJournalLinesWithTag](docs/tagging/README.md#getalljournallineswithtag) - Get links to tagged journal lines
* [GetAllPayCodeTags](docs/tagging/README.md#getallpaycodetags) - Get all pay code tags
* [GetAllPayInstructionTags](docs/tagging/README.md#getallpayinstructiontags) - Get all pay instruction tags
* [GetAllPayLineTags](docs/tagging/README.md#getallpaylinetags) - Get all pay line tags
* [GetAllPayRunTags](docs/tagging/README.md#getallpayruntags) - Get all pay run tags
* [GetAllPayScheduleTags](docs/tagging/README.md#getallpayscheduletags) - Get all pay schedule tags
* [GetAllPermissionTags](docs/tagging/README.md#getallpermissiontags) - Get all Permission tags
* [GetAllPermissionsWithTag](docs/tagging/README.md#getallpermissionswithtag) - Get links to tagged Permissions
* [GetAllRtiTransactionTags](docs/tagging/README.md#getallrtitransactiontags) - Get all RTI transaction tags
* [GetAllSubContractorTags](docs/tagging/README.md#getallsubcontractortags) - Get all sub contractor tags
* [GetAllThirdPartyTransactionTags](docs/tagging/README.md#getallthirdpartytransactiontags) - Get all third party transaction tags
* [GetAllThirdPartyTransactionsWithTag](docs/tagging/README.md#getallthirdpartytransactionswithtag) - Get links to tagged third party transactions
* [GetAllUserTags](docs/tagging/README.md#getallusertags) - Get all user tags
* [GetAllUsersWithTag](docs/tagging/README.md#getalluserswithtag) - Get links to tagged users
* [GetCisInstructionsWithTag](docs/tagging/README.md#getcisinstructionswithtag) - Get CIS instructions with tag
* [GetCisLineTypesWithTag](docs/tagging/README.md#getcislinetypeswithtag) - Get CIS line types with tag
* [GetCisLinesWithTag](docs/tagging/README.md#getcislineswithtag) - Get CIS lines with tag
* [GetEmployeesWithTag](docs/tagging/README.md#getemployeeswithtag) - Get employees with tag
* [GetEmployersWithTag](docs/tagging/README.md#getemployerswithtag) - Get employers with tag
* [GetHolidaySchemesWithTag](docs/tagging/README.md#getholidayschemeswithtag) - Get holiday schemes with tag
* [GetPayCodesWithTag](docs/tagging/README.md#getpaycodeswithtag) - Get pay codes with tag
* [GetPayInstructionsWithTag](docs/tagging/README.md#getpayinstructionswithtag) - Get pay instructions with tag
* [GetPayLinesWithTag](docs/tagging/README.md#getpaylineswithtag) - Get pay lines with tag
* [GetPayRunsWithTag](docs/tagging/README.md#getpayrunswithtag) - Get pay runs with tag
* [GetPaySchedulesWithTag](docs/tagging/README.md#getpayscheduleswithtag) - Get pay schedule with tag
* [GetRtiTransactionsWithTag](docs/tagging/README.md#getrtitransactionswithtag) - Get RTI transactions with tag
* [GetSubContractorsWithTag](docs/tagging/README.md#getsubcontractorswithtag) - Get sub contractors with tag
* [GetTagFromCisInstruction](docs/tagging/README.md#gettagfromcisinstruction) - Get CIS instruction tag
* [GetTagFromCisLine](docs/tagging/README.md#gettagfromcisline) - Get CIS line tag
* [GetTagFromCisLineType](docs/tagging/README.md#gettagfromcislinetype) - Get CIS line type tag
* [GetTagFromEmployee](docs/tagging/README.md#gettagfromemployee) - Get employee tag
* [GetTagFromEmployeeRevision](docs/tagging/README.md#gettagfromemployeerevision) - Get employee revision tag
* [GetTagFromEmployer](docs/tagging/README.md#gettagfromemployer) - Get employer tag
* [GetTagFromEmployerRevision](docs/tagging/README.md#gettagfromemployerrevision) - Get employer revision tag
* [GetTagFromHolidayScheme](docs/tagging/README.md#gettagfromholidayscheme) - Get holiday scheme tag
* [GetTagFromHolidaySchemeRevision](docs/tagging/README.md#gettagfromholidayschemerevision) - Get holiday scheme revision tag
* [GetTagFromJournalLine](docs/tagging/README.md#gettagfromjournalline) - Get journal line tag
* [GetTagFromPayCode](docs/tagging/README.md#gettagfrompaycode) - Get pay code tag
* [GetTagFromPayInstruction](docs/tagging/README.md#gettagfrompayinstruction) - Get pay instruction tag
* [GetTagFromPayLine](docs/tagging/README.md#gettagfrompayline) - Get pay line tag
* [GetTagFromPayRun](docs/tagging/README.md#gettagfrompayrun) - Get pay run tag
* [GetTagFromPaySchedule](docs/tagging/README.md#gettagfrompayschedule) - Get pay schedule tag
* [GetTagFromPermission](docs/tagging/README.md#gettagfrompermission) - Get Permission tag
* [GetTagFromRtiTransaction](docs/tagging/README.md#gettagfromrtitransaction) - Get RTI transaction tag
* [GetTagFromSubContractor](docs/tagging/README.md#gettagfromsubcontractor) - Get sub contractor tag
* [GetTagFromSubContractorRevision](docs/tagging/README.md#gettagfromsubcontractorrevision) - Get sub contractor revision tag
* [GetTagFromThirdPartyTransaction](docs/tagging/README.md#gettagfromthirdpartytransaction) - Get third party transaction tag
* [GetTagFromUser](docs/tagging/README.md#gettagfromuser) - Get user tag
* [GetTagsFromCisInstruction](docs/tagging/README.md#gettagsfromcisinstruction) - Get all tags from the CIS instruction
* [GetTagsFromCisLine](docs/tagging/README.md#gettagsfromcisline) - Get all tags from the CIS line
* [GetTagsFromCisLineType](docs/tagging/README.md#gettagsfromcislinetype) - Get all tags from the CIS line type
* [GetTagsFromEmployee](docs/tagging/README.md#gettagsfromemployee) - Get all employee tags
* [GetTagsFromEmployeeRevision](docs/tagging/README.md#gettagsfromemployeerevision) - Get all employee revision tags
* [GetTagsFromEmployer](docs/tagging/README.md#gettagsfromemployer) - Get all employer tags
* [GetTagsFromEmployerRevision](docs/tagging/README.md#gettagsfromemployerrevision) - Get all employer revision tags
* [GetTagsFromHolidayScheme](docs/tagging/README.md#gettagsfromholidayscheme) - Get all tags from the holiday scheme
* [GetTagsFromHolidaySchemeRevision](docs/tagging/README.md#gettagsfromholidayschemerevision) - Get all holiday scheme revision tags
* [GetTagsFromJournalLine](docs/tagging/README.md#gettagsfromjournalline) - Get tags from journal line
* [GetTagsFromPayCode](docs/tagging/README.md#gettagsfrompaycode) - Get all pay code tags
* [GetTagsFromPayInstruction](docs/tagging/README.md#gettagsfrompayinstruction) - Get all tags from the pay instruction
* [GetTagsFromPayLine](docs/tagging/README.md#gettagsfrompayline) - Get all tags from the pay line
* [GetTagsFromPayRun](docs/tagging/README.md#gettagsfrompayrun) - Get all pay run tags
* [GetTagsFromPaySchedule](docs/tagging/README.md#gettagsfrompayschedule) - Get all pay schedule tags
* [GetTagsFromPermission](docs/tagging/README.md#gettagsfrompermission) - Get tags from Permission
* [GetTagsFromRtiTransaction](docs/tagging/README.md#gettagsfromrtitransaction) - Get all tags from RTI transaction
* [GetTagsFromSubContractor](docs/tagging/README.md#gettagsfromsubcontractor) - Get all tags from the sub contractor
* [GetTagsFromSubContractorRevision](docs/tagging/README.md#gettagsfromsubcontractorrevision) - Get all sub contractor revision tags
* [GetTagsFromThirdPartyTransaction](docs/tagging/README.md#gettagsfromthirdpartytransaction) - Get tags from third party transaction
* [GetTagsFromUser](docs/tagging/README.md#gettagsfromuser) - Get tags from user
* [PutCisInstructionTag](docs/tagging/README.md#putcisinstructiontag) - Insert CIS instruction tag
* [PutCisLineTag](docs/tagging/README.md#putcislinetag) - Insert CIS line tag
* [PutCisLineTypeTag](docs/tagging/README.md#putcislinetypetag) - Insert CIS line type tag
* [PutEmployeeTag](docs/tagging/README.md#putemployeetag) - Insert employee tag
* [PutEmployerTag](docs/tagging/README.md#putemployertag) - Insert employer tag
* [PutHolidaySchemeTag](docs/tagging/README.md#putholidayschemetag) - Insert holiday scheme tag
* [PutJournalLineTag](docs/tagging/README.md#putjournallinetag) - Insert journal line tag
* [PutPayCodeTag](docs/tagging/README.md#putpaycodetag) - Insert pay code tag
* [PutPayInstructionTag](docs/tagging/README.md#putpayinstructiontag) - Insert pay instruction tag
* [PutPayLineTag](docs/tagging/README.md#putpaylinetag) - Insert pay line tag
* [PutPayRunTag](docs/tagging/README.md#putpayruntag) - Insert pay run tag
* [PutPayScheduleTag](docs/tagging/README.md#putpayscheduletag) - Insert pay schedule tag
* [PutPermissionTag](docs/tagging/README.md#putpermissiontag) - Insert Permission tag
* [PutRtiTransactionTag](docs/tagging/README.md#putrtitransactiontag) - Insert RTI transaction tag
* [PutSubContractorTag](docs/tagging/README.md#putsubcontractortag) - Insert sub contractor tag
* [PutThirdPartyTransactionTag](docs/tagging/README.md#putthirdpartytransactiontag) - insert third party transaction tag
* [PutUserTag](docs/tagging/README.md#putusertag) - Insert user tag

### [Templates](docs/templates/README.md)

* [GetTemplateModel](docs/templates/README.md#gettemplatemodel) - Get the object template
* [GetTemplates](docs/templates/README.md#gettemplates) - Get a list of all available data object tempaltes

### [ThirdPartyTransaction](docs/thirdpartytransaction/README.md)

* [DeleteThirdPartyTransactionTag](docs/thirdpartytransaction/README.md#deletethirdpartytransactiontag) - Delete third party transaction tag
* [GetAllThirdPartyTransactionTags](docs/thirdpartytransaction/README.md#getallthirdpartytransactiontags) - Get all third party transaction tags
* [GetAllThirdPartyTransactionsWithTag](docs/thirdpartytransaction/README.md#getallthirdpartytransactionswithtag) - Get links to tagged third party transactions
* [GetTagFromThirdPartyTransaction](docs/thirdpartytransaction/README.md#gettagfromthirdpartytransaction) - Get third party transaction tag
* [GetTagsFromThirdPartyTransaction](docs/thirdpartytransaction/README.md#gettagsfromthirdpartytransaction) - Get tags from third party transaction
* [PutThirdPartyTransactionTag](docs/thirdpartytransaction/README.md#putthirdpartytransactiontag) - insert third party transaction tag

### [ThirdPartyTransmission](docs/thirdpartytransmission/README.md)

* [DeleteThirdPartyTransaction](docs/thirdpartytransmission/README.md#deletethirdpartytransaction) - Delete third party transaction
* [GetThirdPartyTransaction](docs/thirdpartytransmission/README.md#getthirdpartytransaction) - Get a third party transaction
* [GetThirdPartyTransactions](docs/thirdpartytransmission/README.md#getthirdpartytransactions) - Get all third party transaction links

### [User](docs/user/README.md)

* [DeleteUser](docs/user/README.md#deleteuser) - Deletes the user object
* [DeleteUserTag](docs/user/README.md#deleteusertag) - Delete user tag
* [GetAllUserTags](docs/user/README.md#getallusertags) - Get all user tags
* [GetAllUsersWithTag](docs/user/README.md#getalluserswithtag) - Get links to tagged users
* [GetTagFromUser](docs/user/README.md#gettagfromuser) - Get user tag
* [GetTagsFromUser](docs/user/README.md#gettagsfromuser) - Get tags from user
* [GetUser](docs/user/README.md#getuser) - Gets the user object
* [GetUserPermissions](docs/user/README.md#getuserpermissions) - Gets the user permissions
* [GetUsers](docs/user/README.md#getusers) - Gets all user objects
* [PatchUser](docs/user/README.md#patchuser) - Patch user object
* [PostUser](docs/user/README.md#postuser) - Post user object
* [PutUser](docs/user/README.md#putuser) - Puts user object
* [PutUserTag](docs/user/README.md#putusertag) - Insert user tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
