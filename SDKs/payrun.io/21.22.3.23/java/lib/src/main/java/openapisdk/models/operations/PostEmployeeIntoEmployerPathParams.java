package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmployeeIntoEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostEmployeeIntoEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}