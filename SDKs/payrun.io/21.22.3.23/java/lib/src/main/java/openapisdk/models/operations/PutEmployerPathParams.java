package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}