package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse {
    public openapisdk.models.shared.BatchUpdateDealsResponse batchUpdateDealsResponse;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse withBatchUpdateDealsResponse(openapisdk.models.shared.BatchUpdateDealsResponse batchUpdateDealsResponse) {
        this.batchUpdateDealsResponse = batchUpdateDealsResponse;
        return this;
    }
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}