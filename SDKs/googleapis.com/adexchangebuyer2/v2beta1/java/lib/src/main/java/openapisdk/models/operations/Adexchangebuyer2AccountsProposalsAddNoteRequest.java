package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsProposalsAddNoteRequest {
    public Adexchangebuyer2AccountsProposalsAddNotePathParams pathParams;
    public Adexchangebuyer2AccountsProposalsAddNoteRequest withPathParams(Adexchangebuyer2AccountsProposalsAddNotePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsAddNoteQueryParams queryParams;
    public Adexchangebuyer2AccountsProposalsAddNoteRequest withQueryParams(Adexchangebuyer2AccountsProposalsAddNoteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddNoteRequestInput request;
    public Adexchangebuyer2AccountsProposalsAddNoteRequest withRequest(openapisdk.models.shared.AddNoteRequestInput request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsProposalsAddNoteSecurity security;
    public Adexchangebuyer2AccountsProposalsAddNoteRequest withSecurity(Adexchangebuyer2AccountsProposalsAddNoteSecurity security) {
        this.security = security;
        return this;
    }
}