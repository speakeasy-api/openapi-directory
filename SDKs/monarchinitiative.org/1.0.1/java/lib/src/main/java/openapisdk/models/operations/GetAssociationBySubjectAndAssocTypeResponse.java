package openapisdk.models.operations;



public class GetAssociationBySubjectAndAssocTypeResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetAssociationBySubjectAndAssocTypeResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetAssociationBySubjectAndAssocTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssociationBySubjectAndAssocTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}