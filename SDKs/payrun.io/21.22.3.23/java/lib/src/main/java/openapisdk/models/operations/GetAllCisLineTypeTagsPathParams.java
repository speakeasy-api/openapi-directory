package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllCisLineTypeTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllCisLineTypeTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}