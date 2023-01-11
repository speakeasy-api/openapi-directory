package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllPayCodeTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllPayCodeTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}