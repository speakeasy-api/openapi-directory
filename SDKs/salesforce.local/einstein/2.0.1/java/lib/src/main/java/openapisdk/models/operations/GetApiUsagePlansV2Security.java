package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiUsagePlansV2Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerToken bearerToken;
    public GetApiUsagePlansV2Security withBearerToken(openapisdk.models.shared.SchemeBearerToken bearerToken) {
        this.bearerToken = bearerToken;
        return this;
    }
}