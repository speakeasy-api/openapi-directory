package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAccountsAdunitsUpdateRequest {
    public AdsensehostAccountsAdunitsUpdatePathParams pathParams;
    public AdsensehostAccountsAdunitsUpdateRequest withPathParams(AdsensehostAccountsAdunitsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsensehostAccountsAdunitsUpdateQueryParams queryParams;
    public AdsensehostAccountsAdunitsUpdateRequest withQueryParams(AdsensehostAccountsAdunitsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdUnit request;
    public AdsensehostAccountsAdunitsUpdateRequest withRequest(openapisdk.models.shared.AdUnit request) {
        this.request = request;
        return this;
    }
    public AdsensehostAccountsAdunitsUpdateSecurity security;
    public AdsensehostAccountsAdunitsUpdateRequest withSecurity(AdsensehostAccountsAdunitsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}