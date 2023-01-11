package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAliasRequest {
    public UpdateAliasQueryParams queryParams;
    public UpdateAliasRequest withQueryParams(UpdateAliasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAliasModel request;
    public UpdateAliasRequest withRequest(openapisdk.models.shared.CreateAliasModel request) {
        this.request = request;
        return this;
    }
    public UpdateAliasSecurity security;
    public UpdateAliasRequest withSecurity(UpdateAliasSecurity security) {
        this.security = security;
        return this;
    }
}