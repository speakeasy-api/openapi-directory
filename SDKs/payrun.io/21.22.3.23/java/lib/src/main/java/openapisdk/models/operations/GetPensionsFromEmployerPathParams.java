package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPensionsFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPensionsFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}