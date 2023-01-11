package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecretmanagerProjectsSecretsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}