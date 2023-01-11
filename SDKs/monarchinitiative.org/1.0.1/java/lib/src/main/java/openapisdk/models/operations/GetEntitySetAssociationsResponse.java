package openapisdk.models.operations;



public class GetEntitySetAssociationsResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetEntitySetAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetEntitySetAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEntitySetAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}