package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayCodesFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPayCodesFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}