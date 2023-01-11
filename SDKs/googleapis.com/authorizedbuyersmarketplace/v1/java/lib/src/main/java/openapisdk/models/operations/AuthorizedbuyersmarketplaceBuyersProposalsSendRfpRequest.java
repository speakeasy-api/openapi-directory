package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest {
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpPathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest withPathParams(AuthorizedbuyersmarketplaceBuyersProposalsSendRfpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersProposalsSendRfpQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendRfpRequest request;
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest withRequest(openapisdk.models.shared.SendRfpRequest request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpSecurity security;
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest withSecurity(AuthorizedbuyersmarketplaceBuyersProposalsSendRfpSecurity security) {
        this.security = security;
        return this;
    }
}