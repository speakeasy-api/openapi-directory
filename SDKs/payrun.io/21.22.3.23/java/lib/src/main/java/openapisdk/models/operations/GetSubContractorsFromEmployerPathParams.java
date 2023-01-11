package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubContractorsFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetSubContractorsFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}