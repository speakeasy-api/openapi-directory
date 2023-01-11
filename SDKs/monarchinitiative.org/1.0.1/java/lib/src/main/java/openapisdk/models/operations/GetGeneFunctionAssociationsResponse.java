package openapisdk.models.operations;



public class GetGeneFunctionAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGeneFunctionAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGeneFunctionAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGeneFunctionAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}