package openapisdk.models.operations;



public class GetGeneInteractionsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGeneInteractionsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGeneInteractionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGeneInteractionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}