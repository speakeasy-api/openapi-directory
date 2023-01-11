package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJournalInstructionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteJournalInstructionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JournalInstructionId")
    public String journalInstructionId;
    public DeleteJournalInstructionPathParams withJournalInstructionId(String journalInstructionId) {
        this.journalInstructionId = journalInstructionId;
        return this;
    }
}