package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPensionIntoEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostPensionIntoEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}