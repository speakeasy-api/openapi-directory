package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsSecretRolesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public SecretsSecretRolesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}