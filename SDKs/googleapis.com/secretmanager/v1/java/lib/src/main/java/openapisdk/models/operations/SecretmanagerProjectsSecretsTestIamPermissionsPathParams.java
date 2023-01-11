package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public SecretmanagerProjectsSecretsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}