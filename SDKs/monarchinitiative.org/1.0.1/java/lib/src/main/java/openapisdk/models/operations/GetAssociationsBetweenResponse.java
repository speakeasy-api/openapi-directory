package openapisdk.models.operations;



public class GetAssociationsBetweenResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetAssociationsBetweenResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetAssociationsBetweenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssociationsBetweenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}