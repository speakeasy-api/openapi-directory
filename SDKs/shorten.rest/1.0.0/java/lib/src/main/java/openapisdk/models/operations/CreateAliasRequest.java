package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAliasRequest {
    public CreateAliasQueryParams queryParams;
    public CreateAliasRequest withQueryParams(CreateAliasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAliasModel request;
    public CreateAliasRequest withRequest(openapisdk.models.shared.CreateAliasModel request) {
        this.request = request;
        return this;
    }
    public CreateAliasSecurity security;
    public CreateAliasRequest withSecurity(CreateAliasSecurity security) {
        this.security = security;
        return this;
    }
}