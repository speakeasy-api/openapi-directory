package openapisdk.models.operations;



public class GetDiseaseCaseAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetDiseaseCaseAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetDiseaseCaseAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDiseaseCaseAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}