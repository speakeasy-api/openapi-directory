package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmployerSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostEmployerSecretPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}