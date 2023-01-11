package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public SecretmanagerProjectsSecretsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}