package openapisdk.models.operations;



public class GetRelationUsagePivotResourceResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetRelationUsagePivotResourceResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetRelationUsagePivotResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRelationUsagePivotResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}