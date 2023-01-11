package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllEmployeeTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllEmployeeTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}