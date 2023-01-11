package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePayScheduleTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeletePayScheduleTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayScheduleId")
    public String payScheduleId;
    public DeletePayScheduleTagPathParams withPayScheduleId(String payScheduleId) {
        this.payScheduleId = payScheduleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public DeletePayScheduleTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}