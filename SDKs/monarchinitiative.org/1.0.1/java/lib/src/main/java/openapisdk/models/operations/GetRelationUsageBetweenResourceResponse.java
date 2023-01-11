package openapisdk.models.operations;



public class GetRelationUsageBetweenResourceResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetRelationUsageBetweenResourceResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetRelationUsageBetweenResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRelationUsageBetweenResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}