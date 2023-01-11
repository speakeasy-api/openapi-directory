package openapisdk.models.operations;



public class GetRelationUsageResourceResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetRelationUsageResourceResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetRelationUsageResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRelationUsageResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}