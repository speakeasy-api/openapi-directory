package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJournalLineTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteJournalLineTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JournalLineId")
    public String journalLineId;
    public DeleteJournalLineTagPathParams withJournalLineId(String journalLineId) {
        this.journalLineId = journalLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public DeleteJournalLineTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}