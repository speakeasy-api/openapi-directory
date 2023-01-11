package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}