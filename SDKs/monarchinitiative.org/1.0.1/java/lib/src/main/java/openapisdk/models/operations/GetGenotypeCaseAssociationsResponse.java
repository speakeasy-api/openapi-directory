package openapisdk.models.operations;



public class GetGenotypeCaseAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGenotypeCaseAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGenotypeCaseAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGenotypeCaseAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}