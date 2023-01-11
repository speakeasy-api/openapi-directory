package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsFinalizedProposalsResumeRequest {
    public Adexchangebuyer2AccountsFinalizedProposalsResumePathParams pathParams;
    public Adexchangebuyer2AccountsFinalizedProposalsResumeRequest withPathParams(Adexchangebuyer2AccountsFinalizedProposalsResumePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams queryParams;
    public Adexchangebuyer2AccountsFinalizedProposalsResumeRequest withQueryParams(Adexchangebuyer2AccountsFinalizedProposalsResumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResumeProposalDealsRequest request;
    public Adexchangebuyer2AccountsFinalizedProposalsResumeRequest withRequest(openapisdk.models.shared.ResumeProposalDealsRequest request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity security;
    public Adexchangebuyer2AccountsFinalizedProposalsResumeRequest withSecurity(Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity security) {
        this.security = security;
        return this;
    }
}