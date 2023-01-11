package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecretmanagerProjectsSecretsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}