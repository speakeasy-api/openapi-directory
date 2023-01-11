package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmployerSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutEmployerSecretPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SecretId")
    public String secretId;
    public PutEmployerSecretPathParams withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}