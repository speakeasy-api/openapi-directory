package openapisdk.models.operations;



public class GetEntitySetHomologsResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetEntitySetHomologsResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetEntitySetHomologsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEntitySetHomologsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}