package openapisdk.models.operations;



public class GetCaseDiseaseAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetCaseDiseaseAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetCaseDiseaseAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCaseDiseaseAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}