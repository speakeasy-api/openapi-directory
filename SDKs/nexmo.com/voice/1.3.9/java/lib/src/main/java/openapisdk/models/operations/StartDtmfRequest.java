package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDtmfRequest {
    public StartDtmfPathParams pathParams;
    public StartDtmfRequest withPathParams(StartDtmfPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DtmfRequest request;
    public StartDtmfRequest withRequest(openapisdk.models.shared.DtmfRequest request) {
        this.request = request;
        return this;
    }
    public StartDtmfSecurity security;
    public StartDtmfRequest withSecurity(StartDtmfSecurity security) {
        this.security = security;
        return this;
    }
}