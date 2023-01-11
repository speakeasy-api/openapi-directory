package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsVersionsDisablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecretmanagerProjectsSecretsVersionsDisablePathParams withName(String name) {
        this.name = name;
        return this;
    }
}