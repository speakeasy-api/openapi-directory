package openapisdk.models.operations;



public class GetGeneExpressionAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGeneExpressionAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGeneExpressionAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGeneExpressionAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}