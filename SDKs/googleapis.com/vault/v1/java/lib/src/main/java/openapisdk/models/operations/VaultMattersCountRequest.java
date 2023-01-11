package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersCountRequest {
    public VaultMattersCountPathParams pathParams;
    public VaultMattersCountRequest withPathParams(VaultMattersCountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersCountQueryParams queryParams;
    public VaultMattersCountRequest withQueryParams(VaultMattersCountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CountArtifactsRequest request;
    public VaultMattersCountRequest withRequest(openapisdk.models.shared.CountArtifactsRequest request) {
        this.request = request;
        return this;
    }
    public VaultMattersCountSecurity security;
    public VaultMattersCountRequest withSecurity(VaultMattersCountSecurity security) {
        this.security = security;
        return this;
    }
}