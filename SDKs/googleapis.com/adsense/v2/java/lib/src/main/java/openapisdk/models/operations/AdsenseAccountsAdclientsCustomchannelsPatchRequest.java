package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsAdclientsCustomchannelsPatchRequest {
    public AdsenseAccountsAdclientsCustomchannelsPatchPathParams pathParams;
    public AdsenseAccountsAdclientsCustomchannelsPatchRequest withPathParams(AdsenseAccountsAdclientsCustomchannelsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsAdclientsCustomchannelsPatchQueryParams queryParams;
    public AdsenseAccountsAdclientsCustomchannelsPatchRequest withQueryParams(AdsenseAccountsAdclientsCustomchannelsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomChannelInput request;
    public AdsenseAccountsAdclientsCustomchannelsPatchRequest withRequest(openapisdk.models.shared.CustomChannelInput request) {
        this.request = request;
        return this;
    }
    public AdsenseAccountsAdclientsCustomchannelsPatchSecurity security;
    public AdsenseAccountsAdclientsCustomchannelsPatchRequest withSecurity(AdsenseAccountsAdclientsCustomchannelsPatchSecurity security) {
        this.security = security;
        return this;
    }
}