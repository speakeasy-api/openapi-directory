package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAccountsAdunitsPatchRequest {
    public AdsensehostAccountsAdunitsPatchPathParams pathParams;
    public AdsensehostAccountsAdunitsPatchRequest withPathParams(AdsensehostAccountsAdunitsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsensehostAccountsAdunitsPatchQueryParams queryParams;
    public AdsensehostAccountsAdunitsPatchRequest withQueryParams(AdsensehostAccountsAdunitsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdUnit request;
    public AdsensehostAccountsAdunitsPatchRequest withRequest(openapisdk.models.shared.AdUnit request) {
        this.request = request;
        return this;
    }
    public AdsensehostAccountsAdunitsPatchSecurity security;
    public AdsensehostAccountsAdunitsPatchRequest withSecurity(AdsensehostAccountsAdunitsPatchSecurity security) {
        this.security = security;
        return this;
    }
}