package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsSecretsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public SecretsSecretsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}