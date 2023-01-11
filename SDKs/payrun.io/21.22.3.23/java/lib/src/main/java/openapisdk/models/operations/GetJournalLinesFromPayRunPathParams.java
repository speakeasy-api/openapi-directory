package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJournalLinesFromPayRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetJournalLinesFromPayRunPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayRunId")
    public String payRunId;
    public GetJournalLinesFromPayRunPathParams withPayRunId(String payRunId) {
        this.payRunId = payRunId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayScheduleId")
    public String payScheduleId;
    public GetJournalLinesFromPayRunPathParams withPayScheduleId(String payScheduleId) {
        this.payScheduleId = payScheduleId;
        return this;
    }
}