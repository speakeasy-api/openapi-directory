package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteModelSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerToken bearerToken;
    public DeleteModelSecurity withBearerToken(openapisdk.models.shared.SchemeBearerToken bearerToken) {
        this.bearerToken = bearerToken;
        return this;
    }
}