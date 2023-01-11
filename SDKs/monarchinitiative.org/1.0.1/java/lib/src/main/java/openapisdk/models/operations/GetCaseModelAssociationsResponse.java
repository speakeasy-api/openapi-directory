package openapisdk.models.operations;



public class GetCaseModelAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetCaseModelAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetCaseModelAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCaseModelAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}