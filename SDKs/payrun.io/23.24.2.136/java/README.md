# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAEAssessmentRequest;
import org.openapis.openapi.models.operations.DeleteAEAssessmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAEAssessmentRequest req = new DeleteAEAssessmentRequest("corrupti", "provident", "distinctio", "quibusdam", "unde");            

            DeleteAEAssessmentResponse res = sdk.aeAssessment.deleteAEAssessment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [aeAssessment](docs/aeassessment/README.md)

* [deleteAEAssessment](docs/aeassessment/README.md#deleteaeassessment) - Delete auto enrolment assessment
* [getAEAssessmentFromEmployee](docs/aeassessment/README.md#getaeassessmentfromemployee) - Get the auto enrolment assessment
* [getAEAssessmentsFromEmployee](docs/aeassessment/README.md#getaeassessmentsfromemployee) - Get the auto enrolment assessments
* [getAEAssessmentsFromPayRun](docs/aeassessment/README.md#getaeassessmentsfrompayrun) - Get the auto enrolment assessments
* [postNewAEAssessment](docs/aeassessment/README.md#postnewaeassessment) - Insert new auto enrolment assessment
* [putNewAEAssessment](docs/aeassessment/README.md#putnewaeassessment) - Insert new auto enrolment assessment

### [application](docs/application/README.md)

* [deleteApplicationSecret](docs/application/README.md#deleteapplicationsecret) - Deletes Application secret
* [getApplicationSecret](docs/application/README.md#getapplicationsecret) - Get Application secret
* [getApplicationSecrets](docs/application/README.md#getapplicationsecrets) - Get all Application secret links
* [postApplicationSecret](docs/application/README.md#postapplicationsecret) - Create a new Application secret
* [putApplicationSecret](docs/application/README.md#putapplicationsecret) - Create a new Application secret

### [cis](docs/cis/README.md)

* [deleteCisInstruction](docs/cis/README.md#deletecisinstruction) - Delete a CIS instruction
* [deleteCisInstructionTag](docs/cis/README.md#deletecisinstructiontag) - Delete CIS instruction tag
* [deleteCisLine](docs/cis/README.md#deletecisline) - Delete a CIS line
* [deleteCisLineTag](docs/cis/README.md#deletecislinetag) - Delete CIS line tag
* [deleteCisLineType](docs/cis/README.md#deletecislinetype) - Delete an CIS line type
* [deleteCisLineTypeTag](docs/cis/README.md#deletecislinetypetag) - Delete CIS line type tag
* [deleteCisTransaction](docs/cis/README.md#deletecistransaction) - Delete the CIS transaction
* [deleteSubContractorTag](docs/cis/README.md#deletesubcontractortag) - Delete sub contractor tag
* [getAllCisInstructionTags](docs/cis/README.md#getallcisinstructiontags) - Get all CIS instruction tags
* [getAllCisLineTags](docs/cis/README.md#getallcislinetags) - Get all CIS line tags
* [getAllCisLineTypeTags](docs/cis/README.md#getallcislinetypetags) - Get all CIS line type tags
* [getAllSubContractorTags](docs/cis/README.md#getallsubcontractortags) - Get all sub contractor tags
* [getCisInstructionFromSubContractor](docs/cis/README.md#getcisinstructionfromsubcontractor) - Get CIS instruction from sub contractor
* [getCisInstructionsFromSubContractor](docs/cis/README.md#getcisinstructionsfromsubcontractor) - Get CIS instructions from sub contractor.
* [getCisInstructionsWithTag](docs/cis/README.md#getcisinstructionswithtag) - Get CIS instructions with tag
* [getCisLineFromSubContractor](docs/cis/README.md#getcislinefromsubcontractor) - Get CIS line from sub contractor
* [getCisLineTypeFromEmployer](docs/cis/README.md#getcislinetypefromemployer) - Get CIS line type from employer
* [getCisLineTypesFromEmployer](docs/cis/README.md#getcislinetypesfromemployer) - Get CIS line types from employer.
* [getCisLineTypesWithTag](docs/cis/README.md#getcislinetypeswithtag) - Get CIS line types with tag
* [getCisLinesFromSubContractor](docs/cis/README.md#getcislinesfromsubcontractor) - Get CIS lines from sub contractor.
* [getCisLinesWithTag](docs/cis/README.md#getcislineswithtag) - Get CIS lines with tag
* [getCisTransactionFromEmployer](docs/cis/README.md#getcistransactionfromemployer) - Get the CIS transaction
* [getCisTransactionsFromEmployer](docs/cis/README.md#getcistransactionsfromemployer) - Get all CIS transactions for the employer
* [getSubContractorsWithTag](docs/cis/README.md#getsubcontractorswithtag) - Get sub contractors with tag
* [getTagFromCisInstruction](docs/cis/README.md#gettagfromcisinstruction) - Get CIS instruction tag
* [getTagFromCisLine](docs/cis/README.md#gettagfromcisline) - Get CIS line tag
* [getTagFromCisLineType](docs/cis/README.md#gettagfromcislinetype) - Get CIS line type tag
* [getTagFromSubContractor](docs/cis/README.md#gettagfromsubcontractor) - Get sub contractor tag
* [getTagFromSubContractorRevision](docs/cis/README.md#gettagfromsubcontractorrevision) - Get sub contractor revision tag
* [getTagsFromCisInstruction](docs/cis/README.md#gettagsfromcisinstruction) - Get all tags from the CIS instruction
* [getTagsFromCisLine](docs/cis/README.md#gettagsfromcisline) - Get all tags from the CIS line
* [getTagsFromCisLineType](docs/cis/README.md#gettagsfromcislinetype) - Get all tags from the CIS line type
* [getTagsFromSubContractor](docs/cis/README.md#gettagsfromsubcontractor) - Get all tags from the sub contractor
* [getTagsFromSubContractorRevision](docs/cis/README.md#gettagsfromsubcontractorrevision) - Get all sub contractor revision tags
* [patchCisInstruction](docs/cis/README.md#patchcisinstruction) - Patches the CIS instruction
* [postCisInstructionIntoSubContractor](docs/cis/README.md#postcisinstructionintosubcontractor) - Create a new CIS instruction
* [postCisLineTypeIntoEmployer](docs/cis/README.md#postcislinetypeintoemployer) - Create a new CIS line type
* [putCisInstructionIntoSubContractor](docs/cis/README.md#putcisinstructionintosubcontractor) - Updates the CIS instruction
* [putCisInstructionTag](docs/cis/README.md#putcisinstructiontag) - Insert CIS instruction tag
* [putCisLineTag](docs/cis/README.md#putcislinetag) - Insert CIS line tag
* [putCisLineTypeIntoEmployer](docs/cis/README.md#putcislinetypeintoemployer) - Updates the CIS line type
* [putCisLineTypeTag](docs/cis/README.md#putcislinetypetag) - Insert CIS line type tag
* [putSubContractorTag](docs/cis/README.md#putsubcontractortag) - Insert sub contractor tag

### [dpsMessage](docs/dpsmessage/README.md)

* [deleteDpsMessage](docs/dpsmessage/README.md#deletedpsmessage) - Deletes the DPS message
* [getDpsMessageFromEmployer](docs/dpsmessage/README.md#getdpsmessagefromemployer) - Gets the DPS message
* [getDpsMessagesFromEmployer](docs/dpsmessage/README.md#getdpsmessagesfromemployer) - Gets the DPS messages
* [patchDpsMessage](docs/dpsmessage/README.md#patchdpsmessage) - Patches the DPS message
* [postDpsMessage](docs/dpsmessage/README.md#postdpsmessage) - Posta the DPS message
* [putDpsMessage](docs/dpsmessage/README.md#putdpsmessage) - Puts the DPS message

### [employee](docs/employee/README.md)

* [deleteEmployee](docs/employee/README.md#deleteemployee) - Delete an Employee
* [deleteEmployeeRevision](docs/employee/README.md#deleteemployeerevision) - Delete an Employee revision matching the specified revision date.
* [deleteEmployeeRevisionByNumber](docs/employee/README.md#deleteemployeerevisionbynumber) - Delete an Employee revision matching the specified revision number.
* [deleteEmployeeSecret](docs/employee/README.md#deleteemployeesecret) - Deletes employee secret
* [getAEAssessmentFromEmployee](docs/employee/README.md#getaeassessmentfromemployee) - Get the auto enrolment assessment
* [getAEAssessmentsFromEmployee](docs/employee/README.md#getaeassessmentsfromemployee) - Get the auto enrolment assessments
* [getAllEmployeeTags](docs/employee/README.md#getallemployeetags) - Get all employee tags
* [getCommentariesFromEmployee](docs/employee/README.md#getcommentariesfromemployee) - Get links to all commentaries for the specified employee
* [getCommentaryFromEmployee](docs/employee/README.md#getcommentaryfromemployee) - Get commentary from employee
* [getCommentaryFromPayRunByEmployee](docs/employee/README.md#getcommentaryfrompayrunbyemployee) - Get commentary from payrun by specified employee.
* [getEmployeeByEffectiveDate](docs/employee/README.md#getemployeebyeffectivedate) - Get employee by effective date.
* [getEmployeeFromEmployer](docs/employee/README.md#getemployeefromemployer) - Get employee from employer
* [getEmployeeRevisionByNumber](docs/employee/README.md#getemployeerevisionbynumber) - Gets the employee by revision number
* [getEmployeeRevisionSummaries](docs/employee/README.md#getemployeerevisionsummaries) - Get all employee revision summaries
* [getEmployeeRevisionSummaryByNumber](docs/employee/README.md#getemployeerevisionsummarybynumber) - Gets the employee summary by revision number
* [getEmployeeRevisions](docs/employee/README.md#getemployeerevisions) - Get all employee revisions
* [getEmployeeSecret](docs/employee/README.md#getemployeesecret) - Get employee secret
* [getEmployeeSecrets](docs/employee/README.md#getemployeesecrets) - Get all employee secret links
* [getEmployeeSummariesByEffectiveDate](docs/employee/README.md#getemployeesummariesbyeffectivedate) - Get employee summaries from employer at a given effective date.
* [getEmployeeSummariesFromEmployer](docs/employee/README.md#getemployeesummariesfromemployer) - Get employee summaries from employer.
* [getEmployeeSummaryByEffectiveDate](docs/employee/README.md#getemployeesummarybyeffectivedate) - Get employee summary by effective date.
* [getEmployeeSummaryFromEmployer](docs/employee/README.md#getemployeesummaryfromemployer) - Get employee summary from employer
* [getEmployeesByEffectiveDate](docs/employee/README.md#getemployeesbyeffectivedate) - Get employees from employer at a given effective date.
* [getEmployeesFromEmployer](docs/employee/README.md#getemployeesfromemployer) - Get employees from employer.
* [getEmployeesFromPayRun](docs/employee/README.md#getemployeesfrompayrun) - Get employees from the pay run
* [getEmployeesFromPaySchedule](docs/employee/README.md#getemployeesfrompayschedule) - Get all employees revisions from a pay schedule.
* [getEmployeesFromPayScheduleOnEffectiveDate](docs/employee/README.md#getemployeesfrompayscheduleoneffectivedate) - Get employees from a pay schedule on effective date.
* [getEmployeesWithTag](docs/employee/README.md#getemployeeswithtag) - Get employees with tag
* [getPayRunsFromEmployee](docs/employee/README.md#getpayrunsfromemployee) - Gets the pay runs from the employee
* [patchEmployee](docs/employee/README.md#patchemployee) - Patches the employee
* [postEmployeeIntoEmployer](docs/employee/README.md#postemployeeintoemployer) - Create a new Employee
* [postEmployeeSecret](docs/employee/README.md#postemployeesecret) - Create a new employee secret
* [putEmployeeIntoEmployer](docs/employee/README.md#putemployeeintoemployer) - Updates the Employee
* [putEmployeeSecret](docs/employee/README.md#putemployeesecret) - Create a new employee secret

### [employer](docs/employer/README.md)

* [deleteEmployer](docs/employer/README.md#deleteemployer) - Delete an Employer
* [deleteEmployerRevision](docs/employer/README.md#deleteemployerrevision) - Delete an Employer revision matching the specified revision date.
* [deleteEmployerRevisionByNumber](docs/employer/README.md#deleteemployerrevisionbynumber) - Delete an Employer revision matching the specified revision number.
* [deleteEmployerSecret](docs/employer/README.md#deleteemployersecret) - Deletes employer secret
* [getAllEmployerTags](docs/employer/README.md#getallemployertags) - Get all employer tags
* [getEmployer](docs/employer/README.md#getemployer) - Gets the employer
* [getEmployerByEffectiveDate](docs/employer/README.md#getemployerbyeffectivedate) - Gets the employer at the specified effective
* [getEmployerRevisionByNumber](docs/employer/README.md#getemployerrevisionbynumber) - Gets the employer by revision number
* [getEmployerRevisionSummaries](docs/employer/README.md#getemployerrevisionsummaries) - Get all employer revision summaries
* [getEmployerRevisionSummaryByNumber](docs/employer/README.md#getemployerrevisionsummarybynumber) - Gets the employer summary by revision number
* [getEmployerRevisions](docs/employer/README.md#getemployerrevisions) - Gets the employer revisions
* [getEmployerSecret](docs/employer/README.md#getemployersecret) - Get employer secret
* [getEmployerSecrets](docs/employer/README.md#getemployersecrets) - Get all employer secret links
* [getEmployerSummaries](docs/employer/README.md#getemployersummaries) - Get employer summaries.
* [getEmployerSummariesByEffectiveDate](docs/employer/README.md#getemployersummariesbyeffectivedate) - Get employer summaries at a given effective date.
* [getEmployerSummary](docs/employer/README.md#getemployersummary) - Get employer summary
* [getEmployerSummaryByEffectiveDate](docs/employer/README.md#getemployersummarybyeffectivedate) - Get employer summary by effective date.
* [getEmployers](docs/employer/README.md#getemployers) - Gets all employers
* [getEmployersByEffectiveDate](docs/employer/README.md#getemployersbyeffectivedate) - Gets all employers at the specified effective date
* [getEmployersWithTag](docs/employer/README.md#getemployerswithtag) - Get employers with tag
* [patchEmployer](docs/employer/README.md#patchemployer) - Patches the employer
* [postEmployer](docs/employer/README.md#postemployer) - Create a new Employer
* [postEmployerSecret](docs/employer/README.md#postemployersecret) - Create a new employer secret
* [putEmployer](docs/employer/README.md#putemployer) - Updates the Employer
* [putEmployerSecret](docs/employer/README.md#putemployersecret) - Create a new employer secret

### [healthcheck](docs/healthcheck/README.md)

* [getHealthCheck](docs/healthcheck/README.md#gethealthcheck) - Get health check status

### [holidayScheme](docs/holidayscheme/README.md)

* [deleteHolidayScheme](docs/holidayscheme/README.md#deleteholidayscheme) - Delete an holiday scheme
* [deleteHolidaySchemeRevision](docs/holidayscheme/README.md#deleteholidayschemerevision) - Delete an holiday scheme revision matching the specified revision date.
* [deleteHolidaySchemeRevisionByNumber](docs/holidayscheme/README.md#deleteholidayschemerevisionbynumber) - Delete an HolidayScheme revision matching the specified revision number.
* [deleteHolidaySchemeTag](docs/holidayscheme/README.md#deleteholidayschemetag) - Delete holiday scheme tag
* [getAllHolidaySchemeTags](docs/holidayscheme/README.md#getallholidayschemetags) - Get all holiday scheme tags
* [getHolidaySchemeByEffectiveDate](docs/holidayscheme/README.md#getholidayschemebyeffectivedate) - Get holiday scheme by effective date.
* [getHolidaySchemeFromEmployer](docs/holidayscheme/README.md#getholidayschemefromemployer) - Get holiday scheme from employer
* [getHolidaySchemeRevisionByNumber](docs/holidayscheme/README.md#getholidayschemerevisionbynumber) - Gets the holiday scheme revision by revision number
* [getHolidaySchemeRevisions](docs/holidayscheme/README.md#getholidayschemerevisions) - Get all holiday scheme revisions
* [getHolidaySchemesByEffectiveDate](docs/holidayscheme/README.md#getholidayschemesbyeffectivedate) - Get holiday schemes from employer at a given effective date.
* [getHolidaySchemesFromEmployer](docs/holidayscheme/README.md#getholidayschemesfromemployer) - Get holiday schemes from employer.
* [getHolidaySchemesWithTag](docs/holidayscheme/README.md#getholidayschemeswithtag) - Get holiday schemes with tag
* [getTagFromHolidayScheme](docs/holidayscheme/README.md#gettagfromholidayscheme) - Get holiday scheme tag
* [getTagFromHolidaySchemeRevision](docs/holidayscheme/README.md#gettagfromholidayschemerevision) - Get holiday scheme revision tag
* [getTagsFromHolidayScheme](docs/holidayscheme/README.md#gettagsfromholidayscheme) - Get all tags from the holiday scheme
* [getTagsFromHolidaySchemeRevision](docs/holidayscheme/README.md#gettagsfromholidayschemerevision) - Get all holiday scheme revision tags
* [patchHolidayScheme](docs/holidayscheme/README.md#patchholidayscheme) - Patches the holiday scheme
* [postHolidaySchemeIntoEmployer](docs/holidayscheme/README.md#postholidayschemeintoemployer) - Create a new holiday scheme
* [putHolidaySchemeIntoEmployer](docs/holidayscheme/README.md#putholidayschemeintoemployer) - Updates the holiday scheme
* [putHolidaySchemeTag](docs/holidayscheme/README.md#putholidayschemetag) - Insert holiday scheme tag

### [jobs](docs/jobs/README.md)

* [deleteBatchJob](docs/jobs/README.md#deletebatchjob) - Delete the Batch job
* [deleteCisJob](docs/jobs/README.md#deletecisjob) - Delete the CIS job
* [deleteDpsJob](docs/jobs/README.md#deletedpsjob) - Delete the DPS job
* [deletePayRunJob](docs/jobs/README.md#deletepayrunjob) - Delete the pay run job
* [deleteRtiJob](docs/jobs/README.md#deletertijob) - Delete the RTI job
* [deleteThirdPartyJob](docs/jobs/README.md#deletethirdpartyjob) - Delete the Third Party job
* [getBatchJobInfo](docs/jobs/README.md#getbatchjobinfo) - Get the Batch job information
* [getBatchJobProgress](docs/jobs/README.md#getbatchjobprogress) - Get the Batch job progress
* [getBatchJobStatus](docs/jobs/README.md#getbatchjobstatus) - Get the Batch job status
* [getBatchJobs](docs/jobs/README.md#getbatchjobs) - Get all Batch jobs
* [getCisJobInfo](docs/jobs/README.md#getcisjobinfo) - Get the CIS job information
* [getCisJobProgress](docs/jobs/README.md#getcisjobprogress) - Get the CIS job progress
* [getCisJobStatus](docs/jobs/README.md#getcisjobstatus) - Get the CIS job status
* [getCisJobs](docs/jobs/README.md#getcisjobs) - Get all CIS jobs
* [getDpsJobInfo](docs/jobs/README.md#getdpsjobinfo) - Get the DPS job information
* [getDpsJobProgress](docs/jobs/README.md#getdpsjobprogress) - Get the DPS job progress
* [getDpsJobStatus](docs/jobs/README.md#getdpsjobstatus) - Get the DPS job status
* [getDpsJobs](docs/jobs/README.md#getdpsjobs) - Get all DPS jobs
* [getEmployerJobs](docs/jobs/README.md#getemployerjobs) - Gets all jobs relating to the employer.
* [getPayRunJobInfo](docs/jobs/README.md#getpayrunjobinfo) - Get the pay run job information
* [getPayRunJobProgress](docs/jobs/README.md#getpayrunjobprogress) - Get the pay run job progress
* [getPayRunJobStatus](docs/jobs/README.md#getpayrunjobstatus) - Get the pay run job status
* [getPayRunJobs](docs/jobs/README.md#getpayrunjobs) - Get all PayRun jobs
* [getRtiJobInfo](docs/jobs/README.md#getrtijobinfo) - Get the RTI job information
* [getRtiJobProgress](docs/jobs/README.md#getrtijobprogress) - Get the RTI job progress
* [getRtiJobStatus](docs/jobs/README.md#getrtijobstatus) - Get the RTI job status
* [getRtiJobs](docs/jobs/README.md#getrtijobs) - Get all RTI jobs
* [getThirdPartyJobInfo](docs/jobs/README.md#getthirdpartyjobinfo) - Get the Third Party job information
* [getThirdPartyJobProgress](docs/jobs/README.md#getthirdpartyjobprogress) - Get the Third Party job progress
* [getThirdPartyJobStatus](docs/jobs/README.md#getthirdpartyjobstatus) - Get the Third Party job status
* [getThirdPartyJobs](docs/jobs/README.md#getthirdpartyjobs) - Get all Third Party jobs
* [postNewBatchJob](docs/jobs/README.md#postnewbatchjob) - Create new Batch job
* [postNewCisJob](docs/jobs/README.md#postnewcisjob) - Create new CIS job
* [postNewDpsJob](docs/jobs/README.md#postnewdpsjob) - Create new DPS job
* [postNewPayRunJob](docs/jobs/README.md#postnewpayrunjob) - Create new PayRun job
* [postNewRtiJob](docs/jobs/README.md#postnewrtijob) - Create new RTI job
* [postNewThirdPartyJob](docs/jobs/README.md#postnewthirdpartyjob) - Create new Third Party job

### [journalLine](docs/journalline/README.md)

* [deleteJournalLineTag](docs/journalline/README.md#deletejournallinetag) - Delete journal line tag
* [getAllJournalLineTags](docs/journalline/README.md#getalljournallinetags) - Get all journal line tags
* [getAllJournalLinesWithTag](docs/journalline/README.md#getalljournallineswithtag) - Get links to tagged journal lines
* [getTagFromJournalLine](docs/journalline/README.md#gettagfromjournalline) - Get journal line tag
* [getTagsFromJournalLine](docs/journalline/README.md#gettagsfromjournalline) - Get tags from journal line
* [putJournalLineTag](docs/journalline/README.md#putjournallinetag) - Insert journal line tag

### [journals](docs/journals/README.md)

* [deleteJournalInstruction](docs/journals/README.md#deletejournalinstruction) - Deletes a Journal instruction
* [deleteJournalInstructionTemplate](docs/journals/README.md#deletejournalinstructiontemplate) - Deletes a Journal instruction template
* [getJournalInstructionFromEmployer](docs/journals/README.md#getjournalinstructionfromemployer) - Gets the specified journal instruction from the employer
* [getJournalInstructionTemplate](docs/journals/README.md#getjournalinstructiontemplate) - Gets the Journal instructions template for the application
* [getJournalInstructionTemplates](docs/journals/README.md#getjournalinstructiontemplates) - Gets the Journal instructions templates for the application
* [getJournalInstructionsFromEmployer](docs/journals/README.md#getjournalinstructionsfromemployer) - Gets the Journal instructions from the specified employer
* [getJournalLineFromEmployer](docs/journals/README.md#getjournallinefromemployer) - Gets the specified journal Line from the employer
* [getJournalLinesFromEmployee](docs/journals/README.md#getjournallinesfromemployee) - Gets the journal Lines from the specified employee
* [getJournalLinesFromEmployer](docs/journals/README.md#getjournallinesfromemployer) - Gets the Journal Lines from the specified employer
* [getJournalLinesFromPayRun](docs/journals/README.md#getjournallinesfrompayrun) - Gets the journal Lines from the specified pay run
* [getJournalLinesFromSubContractor](docs/journals/README.md#getjournallinesfromsubcontractor) - Gets the journal Lines from the specified sub contractor
* [postJournalInstruction](docs/journals/README.md#postjournalinstruction) - Creates a new Journal Instruction
* [postJournalInstructionTemplate](docs/journals/README.md#postjournalinstructiontemplate) - Creates a new Journal Instruction template
* [putJournalInstruction](docs/journals/README.md#putjournalinstruction) - Update a Journal Instruction
* [putJournalInstructionTemplate](docs/journals/README.md#putjournalinstructiontemplate) - Update a Journal Instruction template

### [nominalCode](docs/nominalcode/README.md)

* [deleteNominalCode](docs/nominalcode/README.md#deletenominalcode) - Deletes the nominal codes
* [getNominalCodeFromEmployer](docs/nominalcode/README.md#getnominalcodefromemployer) - Gets the nominal code
* [getNominalCodesFromEmployer](docs/nominalcode/README.md#getnominalcodesfromemployer) - Gets the nominal codes
* [postNominalCode](docs/nominalcode/README.md#postnominalcode) - Insert nominal code
* [putNominalCode](docs/nominalcode/README.md#putnominalcode) - Insert nominal code

### [payCode](docs/paycode/README.md)

* [deletePayCode](docs/paycode/README.md#deletepaycode) - Deletes a pay code
* [deletePayCodeRevision](docs/paycode/README.md#deletepaycoderevision) - Deletes a pay code revision
* [deletePayCodeRevisionByNumber](docs/paycode/README.md#deletepaycoderevisionbynumber) - Delete an PayCode revision matching the specified revision number.
* [getAllPayCodeTags](docs/paycode/README.md#getallpaycodetags) - Get all pay code tags
* [getPayCodeByEffectiveDate](docs/paycode/README.md#getpaycodebyeffectivedate) - Gets pay code for specified date
* [getPayCodeFromEmployer](docs/paycode/README.md#getpaycodefromemployer) - Gets the specified pay code from the employer
* [getPayCodeRevisionByNumber](docs/paycode/README.md#getpaycoderevisionbynumber) - Gets the pay code by revision number
* [getPayCodeRevisions](docs/paycode/README.md#getpaycoderevisions) - Get all revisions of the Pay Code
* [getPayCodesByEffectiveDate](docs/paycode/README.md#getpaycodesbyeffectivedate) - Gets all pay codes for specified date
* [getPayCodesFromEmployer](docs/paycode/README.md#getpaycodesfromemployer) - Gets the pay codes from the employer
* [getPayCodesFromNominalCode](docs/paycode/README.md#getpaycodesfromnominalcode) - Gets the pay codes by nominal code
* [getPayCodesWithTag](docs/paycode/README.md#getpaycodeswithtag) - Get pay codes with tag
* [patchPayCode](docs/paycode/README.md#patchpaycode) - Patches the pay code
* [postPayCode](docs/paycode/README.md#postpaycode) - Create a new pay code
* [putPayCode](docs/paycode/README.md#putpaycode) - Updates a pay code

### [payInstruction](docs/payinstruction/README.md)

* [deletePayInstruction](docs/payinstruction/README.md#deletepayinstruction) - Deletes a pay instruction
* [getAllPayInstructionTags](docs/payinstruction/README.md#getallpayinstructiontags) - Get all pay instruction tags
* [getPayInstructionFromEmployee](docs/payinstruction/README.md#getpayinstructionfromemployee) - Gets the specified pay instruction from the employee
* [getPayInstructionsFromEmployee](docs/payinstruction/README.md#getpayinstructionsfromemployee) - Gets the pay instructions from the specified employee
* [getPayInstructionsWithTag](docs/payinstruction/README.md#getpayinstructionswithtag) - Get pay instructions with tag
* [patchPayInstruction](docs/payinstruction/README.md#patchpayinstruction) - Sparse Update of a Pay Instruction
* [postPayInstruction](docs/payinstruction/README.md#postpayinstruction) - Creates a new Pay Instruction
* [putPayInstruction](docs/payinstruction/README.md#putpayinstruction) - Update a Pay Instruction

### [payLine](docs/payline/README.md)

* [getAllPayLineTags](docs/payline/README.md#getallpaylinetags) - Get all pay line tags
* [getPayLineFromEmployee](docs/payline/README.md#getpaylinefromemployee) - Gets the specified pay line from the employee
* [getPayLinesFromEmployee](docs/payline/README.md#getpaylinesfromemployee) - Gets the pay lines from the specified employee
* [getPayLinesFromPayRun](docs/payline/README.md#getpaylinesfrompayrun) - Gets the pay lines from the specified pay run
* [getPayLinesWithTag](docs/payline/README.md#getpaylineswithtag) - Get pay lines with tag

### [payRun](docs/payrun/README.md)

* [deletePayRun](docs/payrun/README.md#deletepayrun) - Deletes a pay run
* [deletePayRunEmployee](docs/payrun/README.md#deletepayrunemployee) - Deletes a pay run employee
* [getAEAssessmentsFromPayRun](docs/payrun/README.md#getaeassessmentsfrompayrun) - Get the auto enrolment assessments
* [getAllPayRunTags](docs/payrun/README.md#getallpayruntags) - Get all pay run tags
* [getCommentariesFromPayRun](docs/payrun/README.md#getcommentariesfrompayrun) - Get links to all commentaries for the specified pay run
* [getCommentaryFromPayRunByEmployee](docs/payrun/README.md#getcommentaryfrompayrunbyemployee) - Get commentary from payrun by specified employee.
* [getEmployeesFromPayRun](docs/payrun/README.md#getemployeesfrompayrun) - Get employees from the pay run
* [getPayRunFromPaySchedule](docs/payrun/README.md#getpayrunfrompayschedule) - Gets the pay run from the pay schedule
* [getPayRunsFromEmployee](docs/payrun/README.md#getpayrunsfromemployee) - Gets the pay runs from the employee
* [getPayRunsFromPaySchedule](docs/payrun/README.md#getpayrunsfrompayschedule) - Gets the pay runs from the pay schedule
* [getPayRunsWithTag](docs/payrun/README.md#getpayrunswithtag) - Get pay runs with tag
* [getReportLinesFromPayRun](docs/payrun/README.md#getreportlinesfrompayrun) - Gets the report lines from the specified pay run

### [paySchedule](docs/payschedule/README.md)

* [deletePaySchedule](docs/payschedule/README.md#deletepayschedule) - Deletes a pay schedule
* [getAllPayScheduleTags](docs/payschedule/README.md#getallpayscheduletags) - Get all pay schedule tags
* [getEmployeesFromPaySchedule](docs/payschedule/README.md#getemployeesfrompayschedule) - Get all employees revisions from a pay schedule.
* [getEmployeesFromPayScheduleOnEffectiveDate](docs/payschedule/README.md#getemployeesfrompayscheduleoneffectivedate) - Get employees from a pay schedule on effective date.
* [getPayRunFromPaySchedule](docs/payschedule/README.md#getpayrunfrompayschedule) - Gets the pay run from the pay schedule
* [getPayRunsFromPaySchedule](docs/payschedule/README.md#getpayrunsfrompayschedule) - Gets the pay runs from the pay schedule
* [getPayScheduleFromEmployer](docs/payschedule/README.md#getpayschedulefromemployer) - Gets the specified pay schedule from the employer
* [getPaySchedulesFromEmployer](docs/payschedule/README.md#getpayschedulesfromemployer) - Gets the pay schedule from the specified employer
* [getPaySchedulesWithTag](docs/payschedule/README.md#getpayscheduleswithtag) - Get pay schedule with tag
* [postPaySchedule](docs/payschedule/README.md#postpayschedule) - Create a new pay schedule
* [putPaySchedule](docs/payschedule/README.md#putpayschedule) - Updates a pay schedule

### [pension](docs/pension/README.md)

* [deletePension](docs/pension/README.md#deletepension) - Delete a Pension
* [deletePensionRevision](docs/pension/README.md#deletepensionrevision) - Delete an Pension revision matching the specified revision date.
* [deletePensionRevisionByNumber](docs/pension/README.md#deletepensionrevisionbynumber) - Delete an Pension revision matching the specified revision number.
* [getPensionByEffectiveDate](docs/pension/README.md#getpensionbyeffectivedate) - Get pension by effective date.
* [getPensionFromEmployer](docs/pension/README.md#getpensionfromemployer) - Get pension from employer
* [getPensionRevisionByNumber](docs/pension/README.md#getpensionrevisionbynumber) - Gets the pension by revision number
* [getPensionRevisions](docs/pension/README.md#getpensionrevisions) - Get all pension revisions
* [getPensionsByEffectiveDate](docs/pension/README.md#getpensionsbyeffectivedate) - Get pensions from employer at a given effective date.
* [getPensionsFromEmployer](docs/pension/README.md#getpensionsfromemployer) - Get pensions from employer.
* [patchPension](docs/pension/README.md#patchpension) - Patches the pension
* [postPensionIntoEmployer](docs/pension/README.md#postpensionintoemployer) - Create a new Pension
* [putPensionIntoEmployer](docs/pension/README.md#putpensionintoemployer) - Updates the Pension

### [permission](docs/permission/README.md)

* [deletePermission](docs/permission/README.md#deletepermission) - Deletes the permission object
* [deletePermissionTag](docs/permission/README.md#deletepermissiontag) - Delete Permission tag
* [getAllPermissionTags](docs/permission/README.md#getallpermissiontags) - Get all Permission tags
* [getAllPermissionsWithTag](docs/permission/README.md#getallpermissionswithtag) - Get links to tagged Permissions
* [getPermission](docs/permission/README.md#getpermission) - Gets the permission object
* [getPermissions](docs/permission/README.md#getpermissions) - Gets all permission objects
* [getTagFromPermission](docs/permission/README.md#gettagfrompermission) - Get Permission tag
* [getTagsFromPermission](docs/permission/README.md#gettagsfrompermission) - Get tags from Permission
* [getUserPermissions](docs/permission/README.md#getuserpermissions) - Gets the user permissions
* [getUsersFromPermission](docs/permission/README.md#getusersfrompermission) - Gets the users with the specified permission
* [patchPermission](docs/permission/README.md#patchpermission) - Patch permission object
* [postPermission](docs/permission/README.md#postpermission) - Post permisson object
* [putPermission](docs/permission/README.md#putpermission) - Puts permisson object
* [putPermissionTag](docs/permission/README.md#putpermissiontag) - Insert Permission tag

### [query](docs/query/README.md)

* [getQueryResponse](docs/query/README.md#getqueryresponse) - Get the query result

### [rti](docs/rti/README.md)

* [deleteRtiTransaction](docs/rti/README.md#deletertitransaction) - Delete the RTI transaction
* [getAllRtiTransactionTags](docs/rti/README.md#getallrtitransactiontags) - Get all RTI transaction tags
* [getRtiTransactionFromEmployer](docs/rti/README.md#getrtitransactionfromemployer) - Get the RTI transaction
* [getRtiTransactionSummariesFromEmployer](docs/rti/README.md#getrtitransactionsummariesfromemployer) - Get all RTI transaction summaries for the employer
* [getRtiTransactionSummaryFromEmployer](docs/rti/README.md#getrtitransactionsummaryfromemployer) - Get the RTI transaction summary
* [getRtiTransactionsFromEmployer](docs/rti/README.md#getrtitransactionsfromemployer) - Get all RTI transactions for the employer
* [getRtiTransactionsWithTag](docs/rti/README.md#getrtitransactionswithtag) - Get RTI transactions with tag

### [reference](docs/reference/README.md)

* [getJournalExpressionSchema](docs/reference/README.md#getjournalexpressionschema) - Gets the journal expression data schema

### [reportLine](docs/reportline/README.md)

* [getReportLineFromEmployer](docs/reportline/README.md#getreportlinefromemployer) - Gets the specified report line from the employer
* [getReportLinesFromEmployer](docs/reportline/README.md#getreportlinesfromemployer) - Gets the report lines from the specified employer
* [getReportLinesFromPayRun](docs/reportline/README.md#getreportlinesfrompayrun) - Gets the report lines from the specified pay run

### [reportLineInstruction](docs/reportlineinstruction/README.md)

* [deleteReportingInstruction](docs/reportlineinstruction/README.md#deletereportinginstruction) - Deletes a reporting instruction
* [getReportingInstructionFromEmployer](docs/reportlineinstruction/README.md#getreportinginstructionfromemployer) - Gets the specified reporting instruction from the employer
* [getReportingInstructionsFromEmployer](docs/reportlineinstruction/README.md#getreportinginstructionsfromemployer) - Gets the reporting instructions from the specified employer
* [postReportingInstruction](docs/reportlineinstruction/README.md#postreportinginstruction) - Creates a new Reporting Instruction
* [putReportingInstruction](docs/reportlineinstruction/README.md#putreportinginstruction) - Update a reporting Instruction

### [reports](docs/reports/README.md)

* [deleteReportDefinition](docs/reports/README.md#deletereportdefinition) - Deletes a report definition
* [deleteTransformDefinition](docs/reports/README.md#deletetransformdefinition) - Deletes a transform definition
* [getActivePayInstructionsReportOutput](docs/reports/README.md#getactivepayinstructionsreportoutput) - Runs the active pay instructions report
* [getAoeLiabilityReportOuput](docs/reports/README.md#getaoeliabilityreportouput) - Runs the AOE liability report
* [getDpsMessageReportOutput](docs/reports/README.md#getdpsmessagereportoutput) - Runs the DPS message report
* [getEmployerSummaryReportOuput](docs/reports/README.md#getemployersummaryreportouput) - Runs the employer summary report
* [getGrossToNetReportOutput](docs/reports/README.md#getgrosstonetreportoutput) - Runs the gross to net report
* [getHolidayBalanceReportOutput](docs/reports/README.md#getholidaybalancereportoutput) - Runs the holiday balance report
* [getJournalReportOuput](docs/reports/README.md#getjournalreportouput) - Runs the journal report
* [getLastPayDateReportOuput](docs/reports/README.md#getlastpaydatereportouput) - Runs the last pay date report
* [getNetPayReportOutput](docs/reports/README.md#getnetpayreportoutput) - Runs the net pay report
* [getNextPayPeriodDatesReportOutput](docs/reports/README.md#getnextpayperioddatesreportoutput) - Runs the next pay period report
* [getP11SummaryReportOutput](docs/reports/README.md#getp11summaryreportoutput) - Runs the P11 summary report
* [getP32NetReportOutput](docs/reports/README.md#getp32netreportoutput) - Runs the P32 report
* [getP32SummaryNetReportOutput](docs/reports/README.md#getp32summarynetreportoutput) - Runs the P32 summary report
* [getP45ReportOutput](docs/reports/README.md#getp45reportoutput) - Runs the P45 report
* [getP60ReportOutput](docs/reports/README.md#getp60reportoutput) - Runs the P60 report
* [getPapdisReportOuput](docs/reports/README.md#getpapdisreportouput) - Runs the PAPDIS report
* [getPassReportOuput](docs/reports/README.md#getpassreportouput) - Runs the PASS report
* [getPayDashboardPayslipReportOuput](docs/reports/README.md#getpaydashboardpayslipreportouput) - Runs the Pay Dashboard payslips report
* [getPayslip3ReportOutput](docs/reports/README.md#getpayslip3reportoutput) - Runs the verbose payslip report
* [getPensionLiabilityReportOutput](docs/reports/README.md#getpensionliabilityreportoutput) - Runs the pension liability report
* [getReportDefinitionFromApplication](docs/reports/README.md#getreportdefinitionfromapplication) - Get the report definition
* [getReportDefinitionsFromApplication](docs/reports/README.md#getreportdefinitionsfromapplication) - Gets all reports
* [getReportOutput](docs/reports/README.md#getreportoutput) - Runs the specified report definition
* [getTransformDefinitionFromApplication](docs/reports/README.md#gettransformdefinitionfromapplication) - Get the transform definition
* [getTransformDefinitionsFromApplication](docs/reports/README.md#gettransformdefinitionsfromapplication) - Gets all transform definitions
* [postReportDefinition](docs/reports/README.md#postreportdefinition) - Create a new report definition
* [postTransformDefinition](docs/reports/README.md#posttransformdefinition) - Create a new transform definition
* [putReportDefinition](docs/reports/README.md#putreportdefinition) - Updates a report definition
* [putTransformDefinition](docs/reports/README.md#puttransformdefinition) - Updates a transform definition

### [schemas](docs/schemas/README.md)

* [getSchema](docs/schemas/README.md#getschema) - Get XSD schema
* [getSchemas](docs/schemas/README.md#getschemas) - Get a list of all available schemas

### [subContractor](docs/subcontractor/README.md)

* [deleteSubContractor](docs/subcontractor/README.md#deletesubcontractor) - Delete an sub contractor
* [deleteSubContractorRevision](docs/subcontractor/README.md#deletesubcontractorrevision) - Delete an sub contractor revision matching the specified revision date.
* [deleteSubContractorRevisionByNumber](docs/subcontractor/README.md#deletesubcontractorrevisionbynumber) - Delete an SubContractor revision matching the specified revision number.
* [getSubContractorByEffectiveDate](docs/subcontractor/README.md#getsubcontractorbyeffectivedate) - Get sub contractor by effective date.
* [getSubContractorFromEmployer](docs/subcontractor/README.md#getsubcontractorfromemployer) - Get sub contractor from employer
* [getSubContractorRevisionByNumber](docs/subcontractor/README.md#getsubcontractorrevisionbynumber) - Gets the sub contractor by revision number
* [getSubContractorRevisions](docs/subcontractor/README.md#getsubcontractorrevisions) - Get all sub contractor revisions
* [getSubContractorsByEffectiveDate](docs/subcontractor/README.md#getsubcontractorsbyeffectivedate) - Get sub contractors from employer at a given effective date.
* [getSubContractorsFromEmployer](docs/subcontractor/README.md#getsubcontractorsfromemployer) - Get sub contractors from employer.
* [patchSubContractor](docs/subcontractor/README.md#patchsubcontractor) - Patches the sub contractor
* [postSubContractorIntoEmployer](docs/subcontractor/README.md#postsubcontractorintoemployer) - Create a new sub contractor
* [putSubContractorIntoEmployer](docs/subcontractor/README.md#putsubcontractorintoemployer) - Updates the sub contractor

### [tagging](docs/tagging/README.md)

* [deleteCisInstructionTag](docs/tagging/README.md#deletecisinstructiontag) - Delete CIS instruction tag
* [deleteCisLineTag](docs/tagging/README.md#deletecislinetag) - Delete CIS line tag
* [deleteCisLineTypeTag](docs/tagging/README.md#deletecislinetypetag) - Delete CIS line type tag
* [deleteEmployeeTag](docs/tagging/README.md#deleteemployeetag) - Delete employee tag
* [deleteEmployerTag](docs/tagging/README.md#deleteemployertag) - Delete employer tag
* [deleteHolidaySchemeTag](docs/tagging/README.md#deleteholidayschemetag) - Delete holiday scheme tag
* [deleteJournalLineTag](docs/tagging/README.md#deletejournallinetag) - Delete journal line tag
* [deletePayCodeTag](docs/tagging/README.md#deletepaycodetag) - Delete pay code tag
* [deletePayInstructionTag](docs/tagging/README.md#deletepayinstructiontag) - Delete pay instruction tag
* [deletePayLineTag](docs/tagging/README.md#deletepaylinetag) - Delete pay line tag
* [deletePayRunTag](docs/tagging/README.md#deletepayruntag) - Delete pay run tag
* [deletePayScheduleTag](docs/tagging/README.md#deletepayscheduletag) - Delete pay schedule tag
* [deletePermissionTag](docs/tagging/README.md#deletepermissiontag) - Delete Permission tag
* [deleteRtiTransactionTag](docs/tagging/README.md#deletertitransactiontag) - Delete RTI transaction tag
* [deleteSubContractorTag](docs/tagging/README.md#deletesubcontractortag) - Delete sub contractor tag
* [deleteThirdPartyTransactionTag](docs/tagging/README.md#deletethirdpartytransactiontag) - Delete third party transaction tag
* [deleteUserTag](docs/tagging/README.md#deleteusertag) - Delete user tag
* [getAllCisInstructionTags](docs/tagging/README.md#getallcisinstructiontags) - Get all CIS instruction tags
* [getAllCisLineTags](docs/tagging/README.md#getallcislinetags) - Get all CIS line tags
* [getAllCisLineTypeTags](docs/tagging/README.md#getallcislinetypetags) - Get all CIS line type tags
* [getAllEmployeeTags](docs/tagging/README.md#getallemployeetags) - Get all employee tags
* [getAllEmployerTags](docs/tagging/README.md#getallemployertags) - Get all employer tags
* [getAllHolidaySchemeTags](docs/tagging/README.md#getallholidayschemetags) - Get all holiday scheme tags
* [getAllJournalLineTags](docs/tagging/README.md#getalljournallinetags) - Get all journal line tags
* [getAllJournalLinesWithTag](docs/tagging/README.md#getalljournallineswithtag) - Get links to tagged journal lines
* [getAllPayCodeTags](docs/tagging/README.md#getallpaycodetags) - Get all pay code tags
* [getAllPayInstructionTags](docs/tagging/README.md#getallpayinstructiontags) - Get all pay instruction tags
* [getAllPayLineTags](docs/tagging/README.md#getallpaylinetags) - Get all pay line tags
* [getAllPayRunTags](docs/tagging/README.md#getallpayruntags) - Get all pay run tags
* [getAllPayScheduleTags](docs/tagging/README.md#getallpayscheduletags) - Get all pay schedule tags
* [getAllPermissionTags](docs/tagging/README.md#getallpermissiontags) - Get all Permission tags
* [getAllPermissionsWithTag](docs/tagging/README.md#getallpermissionswithtag) - Get links to tagged Permissions
* [getAllRtiTransactionTags](docs/tagging/README.md#getallrtitransactiontags) - Get all RTI transaction tags
* [getAllSubContractorTags](docs/tagging/README.md#getallsubcontractortags) - Get all sub contractor tags
* [getAllThirdPartyTransactionTags](docs/tagging/README.md#getallthirdpartytransactiontags) - Get all third party transaction tags
* [getAllThirdPartyTransactionsWithTag](docs/tagging/README.md#getallthirdpartytransactionswithtag) - Get links to tagged third party transactions
* [getAllUserTags](docs/tagging/README.md#getallusertags) - Get all user tags
* [getAllUsersWithTag](docs/tagging/README.md#getalluserswithtag) - Get links to tagged users
* [getCisInstructionsWithTag](docs/tagging/README.md#getcisinstructionswithtag) - Get CIS instructions with tag
* [getCisLineTypesWithTag](docs/tagging/README.md#getcislinetypeswithtag) - Get CIS line types with tag
* [getCisLinesWithTag](docs/tagging/README.md#getcislineswithtag) - Get CIS lines with tag
* [getEmployeesWithTag](docs/tagging/README.md#getemployeeswithtag) - Get employees with tag
* [getEmployersWithTag](docs/tagging/README.md#getemployerswithtag) - Get employers with tag
* [getHolidaySchemesWithTag](docs/tagging/README.md#getholidayschemeswithtag) - Get holiday schemes with tag
* [getPayCodesWithTag](docs/tagging/README.md#getpaycodeswithtag) - Get pay codes with tag
* [getPayInstructionsWithTag](docs/tagging/README.md#getpayinstructionswithtag) - Get pay instructions with tag
* [getPayLinesWithTag](docs/tagging/README.md#getpaylineswithtag) - Get pay lines with tag
* [getPayRunsWithTag](docs/tagging/README.md#getpayrunswithtag) - Get pay runs with tag
* [getPaySchedulesWithTag](docs/tagging/README.md#getpayscheduleswithtag) - Get pay schedule with tag
* [getRtiTransactionsWithTag](docs/tagging/README.md#getrtitransactionswithtag) - Get RTI transactions with tag
* [getSubContractorsWithTag](docs/tagging/README.md#getsubcontractorswithtag) - Get sub contractors with tag
* [getTagFromCisInstruction](docs/tagging/README.md#gettagfromcisinstruction) - Get CIS instruction tag
* [getTagFromCisLine](docs/tagging/README.md#gettagfromcisline) - Get CIS line tag
* [getTagFromCisLineType](docs/tagging/README.md#gettagfromcislinetype) - Get CIS line type tag
* [getTagFromEmployee](docs/tagging/README.md#gettagfromemployee) - Get employee tag
* [getTagFromEmployeeRevision](docs/tagging/README.md#gettagfromemployeerevision) - Get employee revision tag
* [getTagFromEmployer](docs/tagging/README.md#gettagfromemployer) - Get employer tag
* [getTagFromEmployerRevision](docs/tagging/README.md#gettagfromemployerrevision) - Get employer revision tag
* [getTagFromHolidayScheme](docs/tagging/README.md#gettagfromholidayscheme) - Get holiday scheme tag
* [getTagFromHolidaySchemeRevision](docs/tagging/README.md#gettagfromholidayschemerevision) - Get holiday scheme revision tag
* [getTagFromJournalLine](docs/tagging/README.md#gettagfromjournalline) - Get journal line tag
* [getTagFromPayCode](docs/tagging/README.md#gettagfrompaycode) - Get pay code tag
* [getTagFromPayInstruction](docs/tagging/README.md#gettagfrompayinstruction) - Get pay instruction tag
* [getTagFromPayLine](docs/tagging/README.md#gettagfrompayline) - Get pay line tag
* [getTagFromPayRun](docs/tagging/README.md#gettagfrompayrun) - Get pay run tag
* [getTagFromPaySchedule](docs/tagging/README.md#gettagfrompayschedule) - Get pay schedule tag
* [getTagFromPermission](docs/tagging/README.md#gettagfrompermission) - Get Permission tag
* [getTagFromRtiTransaction](docs/tagging/README.md#gettagfromrtitransaction) - Get RTI transaction tag
* [getTagFromSubContractor](docs/tagging/README.md#gettagfromsubcontractor) - Get sub contractor tag
* [getTagFromSubContractorRevision](docs/tagging/README.md#gettagfromsubcontractorrevision) - Get sub contractor revision tag
* [getTagFromThirdPartyTransaction](docs/tagging/README.md#gettagfromthirdpartytransaction) - Get third party transaction tag
* [getTagFromUser](docs/tagging/README.md#gettagfromuser) - Get user tag
* [getTagsFromCisInstruction](docs/tagging/README.md#gettagsfromcisinstruction) - Get all tags from the CIS instruction
* [getTagsFromCisLine](docs/tagging/README.md#gettagsfromcisline) - Get all tags from the CIS line
* [getTagsFromCisLineType](docs/tagging/README.md#gettagsfromcislinetype) - Get all tags from the CIS line type
* [getTagsFromEmployee](docs/tagging/README.md#gettagsfromemployee) - Get all employee tags
* [getTagsFromEmployeeRevision](docs/tagging/README.md#gettagsfromemployeerevision) - Get all employee revision tags
* [getTagsFromEmployer](docs/tagging/README.md#gettagsfromemployer) - Get all employer tags
* [getTagsFromEmployerRevision](docs/tagging/README.md#gettagsfromemployerrevision) - Get all employer revision tags
* [getTagsFromHolidayScheme](docs/tagging/README.md#gettagsfromholidayscheme) - Get all tags from the holiday scheme
* [getTagsFromHolidaySchemeRevision](docs/tagging/README.md#gettagsfromholidayschemerevision) - Get all holiday scheme revision tags
* [getTagsFromJournalLine](docs/tagging/README.md#gettagsfromjournalline) - Get tags from journal line
* [getTagsFromPayCode](docs/tagging/README.md#gettagsfrompaycode) - Get all pay code tags
* [getTagsFromPayInstruction](docs/tagging/README.md#gettagsfrompayinstruction) - Get all tags from the pay instruction
* [getTagsFromPayLine](docs/tagging/README.md#gettagsfrompayline) - Get all tags from the pay line
* [getTagsFromPayRun](docs/tagging/README.md#gettagsfrompayrun) - Get all pay run tags
* [getTagsFromPaySchedule](docs/tagging/README.md#gettagsfrompayschedule) - Get all pay schedule tags
* [getTagsFromPermission](docs/tagging/README.md#gettagsfrompermission) - Get tags from Permission
* [getTagsFromRtiTransaction](docs/tagging/README.md#gettagsfromrtitransaction) - Get all tags from RTI transaction
* [getTagsFromSubContractor](docs/tagging/README.md#gettagsfromsubcontractor) - Get all tags from the sub contractor
* [getTagsFromSubContractorRevision](docs/tagging/README.md#gettagsfromsubcontractorrevision) - Get all sub contractor revision tags
* [getTagsFromThirdPartyTransaction](docs/tagging/README.md#gettagsfromthirdpartytransaction) - Get tags from third party transaction
* [getTagsFromUser](docs/tagging/README.md#gettagsfromuser) - Get tags from user
* [putCisInstructionTag](docs/tagging/README.md#putcisinstructiontag) - Insert CIS instruction tag
* [putCisLineTag](docs/tagging/README.md#putcislinetag) - Insert CIS line tag
* [putCisLineTypeTag](docs/tagging/README.md#putcislinetypetag) - Insert CIS line type tag
* [putEmployeeTag](docs/tagging/README.md#putemployeetag) - Insert employee tag
* [putEmployerTag](docs/tagging/README.md#putemployertag) - Insert employer tag
* [putHolidaySchemeTag](docs/tagging/README.md#putholidayschemetag) - Insert holiday scheme tag
* [putJournalLineTag](docs/tagging/README.md#putjournallinetag) - Insert journal line tag
* [putPayCodeTag](docs/tagging/README.md#putpaycodetag) - Insert pay code tag
* [putPayInstructionTag](docs/tagging/README.md#putpayinstructiontag) - Insert pay instruction tag
* [putPayLineTag](docs/tagging/README.md#putpaylinetag) - Insert pay line tag
* [putPayRunTag](docs/tagging/README.md#putpayruntag) - Insert pay run tag
* [putPayScheduleTag](docs/tagging/README.md#putpayscheduletag) - Insert pay schedule tag
* [putPermissionTag](docs/tagging/README.md#putpermissiontag) - Insert Permission tag
* [putRtiTransactionTag](docs/tagging/README.md#putrtitransactiontag) - Insert RTI transaction tag
* [putSubContractorTag](docs/tagging/README.md#putsubcontractortag) - Insert sub contractor tag
* [putThirdPartyTransactionTag](docs/tagging/README.md#putthirdpartytransactiontag) - insert third party transaction tag
* [putUserTag](docs/tagging/README.md#putusertag) - Insert user tag

### [templates](docs/templates/README.md)

* [getTemplateModel](docs/templates/README.md#gettemplatemodel) - Get the object template
* [getTemplates](docs/templates/README.md#gettemplates) - Get a list of all available data object tempaltes

### [thirdPartyTransaction](docs/thirdpartytransaction/README.md)

* [deleteThirdPartyTransactionTag](docs/thirdpartytransaction/README.md#deletethirdpartytransactiontag) - Delete third party transaction tag
* [getAllThirdPartyTransactionTags](docs/thirdpartytransaction/README.md#getallthirdpartytransactiontags) - Get all third party transaction tags
* [getAllThirdPartyTransactionsWithTag](docs/thirdpartytransaction/README.md#getallthirdpartytransactionswithtag) - Get links to tagged third party transactions
* [getTagFromThirdPartyTransaction](docs/thirdpartytransaction/README.md#gettagfromthirdpartytransaction) - Get third party transaction tag
* [getTagsFromThirdPartyTransaction](docs/thirdpartytransaction/README.md#gettagsfromthirdpartytransaction) - Get tags from third party transaction
* [putThirdPartyTransactionTag](docs/thirdpartytransaction/README.md#putthirdpartytransactiontag) - insert third party transaction tag

### [thirdPartyTransmission](docs/thirdpartytransmission/README.md)

* [deleteThirdPartyTransaction](docs/thirdpartytransmission/README.md#deletethirdpartytransaction) - Delete third party transaction
* [getThirdPartyTransaction](docs/thirdpartytransmission/README.md#getthirdpartytransaction) - Get a third party transaction
* [getThirdPartyTransactions](docs/thirdpartytransmission/README.md#getthirdpartytransactions) - Get all third party transaction links

### [user](docs/user/README.md)

* [deleteUser](docs/user/README.md#deleteuser) - Deletes the user object
* [deleteUserTag](docs/user/README.md#deleteusertag) - Delete user tag
* [getAllUserTags](docs/user/README.md#getallusertags) - Get all user tags
* [getAllUsersWithTag](docs/user/README.md#getalluserswithtag) - Get links to tagged users
* [getTagFromUser](docs/user/README.md#gettagfromuser) - Get user tag
* [getTagsFromUser](docs/user/README.md#gettagsfromuser) - Get tags from user
* [getUser](docs/user/README.md#getuser) - Gets the user object
* [getUserPermissions](docs/user/README.md#getuserpermissions) - Gets the user permissions
* [getUsers](docs/user/README.md#getusers) - Gets all user objects
* [patchUser](docs/user/README.md#patchuser) - Patch user object
* [postUser](docs/user/README.md#postuser) - Post user object
* [putUser](docs/user/README.md#putuser) - Puts user object
* [putUserTag](docs/user/README.md#putusertag) - Insert user tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
