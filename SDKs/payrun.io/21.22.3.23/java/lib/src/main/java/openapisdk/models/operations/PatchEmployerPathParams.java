package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PatchEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}