package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportLinesFromPayRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetReportLinesFromPayRunPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayRunId")
    public String payRunId;
    public GetReportLinesFromPayRunPathParams withPayRunId(String payRunId) {
        this.payRunId = payRunId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayScheduleId")
    public String payScheduleId;
    public GetReportLinesFromPayRunPathParams withPayScheduleId(String payScheduleId) {
        this.payScheduleId = payScheduleId;
        return this;
    }
}