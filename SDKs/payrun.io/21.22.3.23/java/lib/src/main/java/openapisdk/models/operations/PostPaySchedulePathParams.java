package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPaySchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostPaySchedulePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}