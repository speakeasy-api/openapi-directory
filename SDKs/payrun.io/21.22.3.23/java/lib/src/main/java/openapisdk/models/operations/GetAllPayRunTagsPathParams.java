package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllPayRunTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllPayRunTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayScheduleId")
    public String payScheduleId;
    public GetAllPayRunTagsPathParams withPayScheduleId(String payScheduleId) {
        this.payScheduleId = payScheduleId;
        return this;
    }
}