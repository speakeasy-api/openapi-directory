package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJournalInstructionFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetJournalInstructionFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JournalInstructionId")
    public String journalInstructionId;
    public GetJournalInstructionFromEmployerPathParams withJournalInstructionId(String journalInstructionId) {
        this.journalInstructionId = journalInstructionId;
        return this;
    }
}