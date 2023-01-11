package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutJournalInstructionTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JournalInstructionId")
    public String journalInstructionId;
    public PutJournalInstructionTemplatePathParams withJournalInstructionId(String journalInstructionId) {
        this.journalInstructionId = journalInstructionId;
        return this;
    }
}