package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatasetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerToken bearerToken;
    public GetDatasetSecurity withBearerToken(openapisdk.models.shared.SchemeBearerToken bearerToken) {
        this.bearerToken = bearerToken;
        return this;
    }
}