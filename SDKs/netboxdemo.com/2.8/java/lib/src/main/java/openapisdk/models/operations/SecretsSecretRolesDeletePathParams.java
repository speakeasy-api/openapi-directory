package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsSecretRolesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public SecretsSecretRolesDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}