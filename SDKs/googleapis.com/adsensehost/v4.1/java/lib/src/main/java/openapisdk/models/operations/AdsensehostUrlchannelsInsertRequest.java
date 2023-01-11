package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostUrlchannelsInsertRequest {
    public AdsensehostUrlchannelsInsertPathParams pathParams;
    public AdsensehostUrlchannelsInsertRequest withPathParams(AdsensehostUrlchannelsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsensehostUrlchannelsInsertQueryParams queryParams;
    public AdsensehostUrlchannelsInsertRequest withQueryParams(AdsensehostUrlchannelsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UrlChannel request;
    public AdsensehostUrlchannelsInsertRequest withRequest(openapisdk.models.shared.UrlChannel request) {
        this.request = request;
        return this;
    }
    public AdsensehostUrlchannelsInsertSecurity security;
    public AdsensehostUrlchannelsInsertRequest withSecurity(AdsensehostUrlchannelsInsertSecurity security) {
        this.security = security;
        return this;
    }
}