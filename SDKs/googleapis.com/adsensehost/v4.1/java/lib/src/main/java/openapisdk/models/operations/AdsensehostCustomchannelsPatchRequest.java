package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostCustomchannelsPatchRequest {
    public AdsensehostCustomchannelsPatchPathParams pathParams;
    public AdsensehostCustomchannelsPatchRequest withPathParams(AdsensehostCustomchannelsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsensehostCustomchannelsPatchQueryParams queryParams;
    public AdsensehostCustomchannelsPatchRequest withQueryParams(AdsensehostCustomchannelsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomChannel request;
    public AdsensehostCustomchannelsPatchRequest withRequest(openapisdk.models.shared.CustomChannel request) {
        this.request = request;
        return this;
    }
    public AdsensehostCustomchannelsPatchSecurity security;
    public AdsensehostCustomchannelsPatchRequest withSecurity(AdsensehostCustomchannelsPatchSecurity security) {
        this.security = security;
        return this;
    }
}