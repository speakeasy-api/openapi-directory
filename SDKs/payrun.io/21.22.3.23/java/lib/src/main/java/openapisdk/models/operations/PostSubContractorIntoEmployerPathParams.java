package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSubContractorIntoEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostSubContractorIntoEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}