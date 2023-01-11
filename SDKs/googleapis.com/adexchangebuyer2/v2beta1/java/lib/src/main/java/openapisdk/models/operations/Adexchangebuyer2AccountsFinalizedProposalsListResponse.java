package openapisdk.models.operations;



public class Adexchangebuyer2AccountsFinalizedProposalsListResponse {
    public String contentType;
    public Adexchangebuyer2AccountsFinalizedProposalsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProposalsResponse listProposalsResponse;
    public Adexchangebuyer2AccountsFinalizedProposalsListResponse withListProposalsResponse(openapisdk.models.shared.ListProposalsResponse listProposalsResponse) {
        this.listProposalsResponse = listProposalsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsFinalizedProposalsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}