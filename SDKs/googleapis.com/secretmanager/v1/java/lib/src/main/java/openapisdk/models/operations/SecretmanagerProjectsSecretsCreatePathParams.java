package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecretmanagerProjectsSecretsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}