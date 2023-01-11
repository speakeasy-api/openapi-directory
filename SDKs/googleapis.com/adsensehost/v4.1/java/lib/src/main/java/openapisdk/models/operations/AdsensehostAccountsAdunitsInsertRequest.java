package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAccountsAdunitsInsertRequest {
    public AdsensehostAccountsAdunitsInsertPathParams pathParams;
    public AdsensehostAccountsAdunitsInsertRequest withPathParams(AdsensehostAccountsAdunitsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsensehostAccountsAdunitsInsertQueryParams queryParams;
    public AdsensehostAccountsAdunitsInsertRequest withQueryParams(AdsensehostAccountsAdunitsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdUnit request;
    public AdsensehostAccountsAdunitsInsertRequest withRequest(openapisdk.models.shared.AdUnit request) {
        this.request = request;
        return this;
    }
    public AdsensehostAccountsAdunitsInsertSecurity security;
    public AdsensehostAccountsAdunitsInsertRequest withSecurity(AdsensehostAccountsAdunitsInsertSecurity security) {
        this.security = security;
        return this;
    }
}