package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCisLineTypeIntoEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostCisLineTypeIntoEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}