package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsAdclientsAdunitsCreateRequest {
    public AdsenseAccountsAdclientsAdunitsCreatePathParams pathParams;
    public AdsenseAccountsAdclientsAdunitsCreateRequest withPathParams(AdsenseAccountsAdclientsAdunitsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsAdclientsAdunitsCreateQueryParams queryParams;
    public AdsenseAccountsAdclientsAdunitsCreateRequest withQueryParams(AdsenseAccountsAdclientsAdunitsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdUnitInput request;
    public AdsenseAccountsAdclientsAdunitsCreateRequest withRequest(openapisdk.models.shared.AdUnitInput request) {
        this.request = request;
        return this;
    }
    public AdsenseAccountsAdclientsAdunitsCreateSecurity security;
    public AdsenseAccountsAdclientsAdunitsCreateRequest withSecurity(AdsenseAccountsAdclientsAdunitsCreateSecurity security) {
        this.security = security;
        return this;
    }
}