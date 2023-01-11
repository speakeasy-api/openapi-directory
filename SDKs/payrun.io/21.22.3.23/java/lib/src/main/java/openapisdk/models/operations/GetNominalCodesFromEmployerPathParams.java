package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNominalCodesFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetNominalCodesFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}