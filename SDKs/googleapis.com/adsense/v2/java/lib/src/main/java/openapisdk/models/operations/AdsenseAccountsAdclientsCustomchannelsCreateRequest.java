package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsAdclientsCustomchannelsCreateRequest {
    public AdsenseAccountsAdclientsCustomchannelsCreatePathParams pathParams;
    public AdsenseAccountsAdclientsCustomchannelsCreateRequest withPathParams(AdsenseAccountsAdclientsCustomchannelsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsAdclientsCustomchannelsCreateQueryParams queryParams;
    public AdsenseAccountsAdclientsCustomchannelsCreateRequest withQueryParams(AdsenseAccountsAdclientsCustomchannelsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomChannelInput request;
    public AdsenseAccountsAdclientsCustomchannelsCreateRequest withRequest(openapisdk.models.shared.CustomChannelInput request) {
        this.request = request;
        return this;
    }
    public AdsenseAccountsAdclientsCustomchannelsCreateSecurity security;
    public AdsenseAccountsAdclientsCustomchannelsCreateRequest withSecurity(AdsenseAccountsAdclientsCustomchannelsCreateSecurity security) {
        this.security = security;
        return this;
    }
}