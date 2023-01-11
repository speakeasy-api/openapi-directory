package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPayCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostPayCodePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}