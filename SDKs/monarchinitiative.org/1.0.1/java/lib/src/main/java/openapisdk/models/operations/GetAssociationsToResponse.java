package openapisdk.models.operations;



public class GetAssociationsToResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetAssociationsToResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetAssociationsToResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssociationsToResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}