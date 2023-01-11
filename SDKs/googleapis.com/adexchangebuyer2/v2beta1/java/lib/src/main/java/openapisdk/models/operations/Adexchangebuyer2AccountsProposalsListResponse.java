package openapisdk.models.operations;



public class Adexchangebuyer2AccountsProposalsListResponse {
    public String contentType;
    public Adexchangebuyer2AccountsProposalsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProposalsResponse listProposalsResponse;
    public Adexchangebuyer2AccountsProposalsListResponse withListProposalsResponse(openapisdk.models.shared.ListProposalsResponse listProposalsResponse) {
        this.listProposalsResponse = listProposalsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsProposalsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}