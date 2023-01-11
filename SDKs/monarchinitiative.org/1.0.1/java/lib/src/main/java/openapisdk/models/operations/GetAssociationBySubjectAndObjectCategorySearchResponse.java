package openapisdk.models.operations;



public class GetAssociationBySubjectAndObjectCategorySearchResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetAssociationBySubjectAndObjectCategorySearchResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetAssociationBySubjectAndObjectCategorySearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssociationBySubjectAndObjectCategorySearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}