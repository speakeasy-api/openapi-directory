package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutJournalLineTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutJournalLineTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JournalLineId")
    public String journalLineId;
    public PutJournalLineTagPathParams withJournalLineId(String journalLineId) {
        this.journalLineId = journalLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public PutJournalLineTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}