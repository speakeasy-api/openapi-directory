package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsVersionsDestroyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecretmanagerProjectsSecretsVersionsDestroyPathParams withName(String name) {
        this.name = name;
        return this;
    }
}