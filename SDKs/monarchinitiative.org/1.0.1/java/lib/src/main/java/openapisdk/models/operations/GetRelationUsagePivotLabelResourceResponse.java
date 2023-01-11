package openapisdk.models.operations;



public class GetRelationUsagePivotLabelResourceResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetRelationUsagePivotLabelResourceResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetRelationUsagePivotLabelResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRelationUsagePivotLabelResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}