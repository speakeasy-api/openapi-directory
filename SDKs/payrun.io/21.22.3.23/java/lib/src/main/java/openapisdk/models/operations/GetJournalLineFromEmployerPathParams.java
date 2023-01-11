package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJournalLineFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetJournalLineFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JournalLineId")
    public String journalLineId;
    public GetJournalLineFromEmployerPathParams withJournalLineId(String journalLineId) {
        this.journalLineId = journalLineId;
        return this;
    }
}