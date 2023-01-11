package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsSecretRolesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public SecretsSecretRolesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}