package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsProposalsCompleteSetupRequest {
    public Adexchangebuyer2AccountsProposalsCompleteSetupPathParams pathParams;
    public Adexchangebuyer2AccountsProposalsCompleteSetupRequest withPathParams(Adexchangebuyer2AccountsProposalsCompleteSetupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsCompleteSetupQueryParams queryParams;
    public Adexchangebuyer2AccountsProposalsCompleteSetupRequest withQueryParams(Adexchangebuyer2AccountsProposalsCompleteSetupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public Adexchangebuyer2AccountsProposalsCompleteSetupRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsCompleteSetupSecurity security;
    public Adexchangebuyer2AccountsProposalsCompleteSetupRequest withSecurity(Adexchangebuyer2AccountsProposalsCompleteSetupSecurity security) {
        this.security = security;
        return this;
    }
}