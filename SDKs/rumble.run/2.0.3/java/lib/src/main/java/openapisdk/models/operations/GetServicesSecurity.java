package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServicesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerAuth bearerAuth;
    public GetServicesSecurity withBearerAuth(openapisdk.models.shared.SchemeBearerAuth bearerAuth) {
        this.bearerAuth = bearerAuth;
        return this;
    }
}