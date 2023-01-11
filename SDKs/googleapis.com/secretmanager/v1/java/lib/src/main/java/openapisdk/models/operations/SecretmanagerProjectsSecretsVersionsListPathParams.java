package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecretmanagerProjectsSecretsVersionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}