package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJournalInstructionTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JournalInstructionId")
    public String journalInstructionId;
    public DeleteJournalInstructionTemplatePathParams withJournalInstructionId(String journalInstructionId) {
        this.journalInstructionId = journalInstructionId;
        return this;
    }
}