package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostCustomchannelsUpdateRequest {
    public AdsensehostCustomchannelsUpdatePathParams pathParams;
    public AdsensehostCustomchannelsUpdateRequest withPathParams(AdsensehostCustomchannelsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsensehostCustomchannelsUpdateQueryParams queryParams;
    public AdsensehostCustomchannelsUpdateRequest withQueryParams(AdsensehostCustomchannelsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomChannel request;
    public AdsensehostCustomchannelsUpdateRequest withRequest(openapisdk.models.shared.CustomChannel request) {
        this.request = request;
        return this;
    }
    public AdsensehostCustomchannelsUpdateSecurity security;
    public AdsensehostCustomchannelsUpdateRequest withSecurity(AdsensehostCustomchannelsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}