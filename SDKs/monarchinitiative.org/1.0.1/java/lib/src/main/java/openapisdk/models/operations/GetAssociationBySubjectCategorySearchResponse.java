package openapisdk.models.operations;



public class GetAssociationBySubjectCategorySearchResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetAssociationBySubjectCategorySearchResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetAssociationBySubjectCategorySearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssociationBySubjectCategorySearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}