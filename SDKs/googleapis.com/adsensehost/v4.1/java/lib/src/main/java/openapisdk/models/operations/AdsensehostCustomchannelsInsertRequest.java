package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostCustomchannelsInsertRequest {
    public AdsensehostCustomchannelsInsertPathParams pathParams;
    public AdsensehostCustomchannelsInsertRequest withPathParams(AdsensehostCustomchannelsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsensehostCustomchannelsInsertQueryParams queryParams;
    public AdsensehostCustomchannelsInsertRequest withQueryParams(AdsensehostCustomchannelsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomChannel request;
    public AdsensehostCustomchannelsInsertRequest withRequest(openapisdk.models.shared.CustomChannel request) {
        this.request = request;
        return this;
    }
    public AdsensehostCustomchannelsInsertSecurity security;
    public AdsensehostCustomchannelsInsertRequest withSecurity(AdsensehostCustomchannelsInsertSecurity security) {
        this.security = security;
        return this;
    }
}