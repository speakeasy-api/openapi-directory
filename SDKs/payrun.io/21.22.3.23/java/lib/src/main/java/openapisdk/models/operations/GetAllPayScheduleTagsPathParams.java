package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllPayScheduleTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllPayScheduleTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}