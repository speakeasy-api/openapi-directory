package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayintegrityDecodeIntegrityTokenRequest {
    public PlayintegrityDecodeIntegrityTokenPathParams pathParams;
    public PlayintegrityDecodeIntegrityTokenRequest withPathParams(PlayintegrityDecodeIntegrityTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PlayintegrityDecodeIntegrityTokenQueryParams queryParams;
    public PlayintegrityDecodeIntegrityTokenRequest withQueryParams(PlayintegrityDecodeIntegrityTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DecodeIntegrityTokenRequest request;
    public PlayintegrityDecodeIntegrityTokenRequest withRequest(openapisdk.models.shared.DecodeIntegrityTokenRequest request) {
        this.request = request;
        return this;
    }
    public PlayintegrityDecodeIntegrityTokenSecurity security;
    public PlayintegrityDecodeIntegrityTokenRequest withSecurity(PlayintegrityDecodeIntegrityTokenSecurity security) {
        this.security = security;
        return this;
    }
}