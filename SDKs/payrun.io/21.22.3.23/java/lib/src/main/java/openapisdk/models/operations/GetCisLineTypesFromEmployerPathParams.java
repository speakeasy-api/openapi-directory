package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisLineTypesFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetCisLineTypesFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}