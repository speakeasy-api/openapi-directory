package openapisdk.models.operations;



public class GetAssociationsFromResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetAssociationsFromResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetAssociationsFromResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssociationsFromResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}