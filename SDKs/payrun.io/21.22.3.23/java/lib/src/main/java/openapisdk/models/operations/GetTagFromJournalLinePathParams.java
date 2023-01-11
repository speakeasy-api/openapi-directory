package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagFromJournalLinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagFromJournalLinePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JournalLineId")
    public String journalLineId;
    public GetTagFromJournalLinePathParams withJournalLineId(String journalLineId) {
        this.journalLineId = journalLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetTagFromJournalLinePathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}