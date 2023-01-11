package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutJournalInstructionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutJournalInstructionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JournalInstructionId")
    public String journalInstructionId;
    public PutJournalInstructionPathParams withJournalInstructionId(String journalInstructionId) {
        this.journalInstructionId = journalInstructionId;
        return this;
    }
}