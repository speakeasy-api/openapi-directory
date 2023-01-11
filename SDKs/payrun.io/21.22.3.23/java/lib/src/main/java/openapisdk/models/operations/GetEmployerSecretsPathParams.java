package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployerSecretsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetEmployerSecretsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}