package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsAddVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecretmanagerProjectsSecretsAddVersionPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}