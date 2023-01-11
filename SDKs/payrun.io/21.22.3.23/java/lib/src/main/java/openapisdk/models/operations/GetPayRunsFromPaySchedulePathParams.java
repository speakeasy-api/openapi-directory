package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayRunsFromPaySchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPayRunsFromPaySchedulePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayScheduleId")
    public String payScheduleId;
    public GetPayRunsFromPaySchedulePathParams withPayScheduleId(String payScheduleId) {
        this.payScheduleId = payScheduleId;
        return this;
    }
}