package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsFromJournalLinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagsFromJournalLinePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JournalLineId")
    public String journalLineId;
    public GetTagsFromJournalLinePathParams withJournalLineId(String journalLineId) {
        this.journalLineId = journalLineId;
        return this;
    }
}