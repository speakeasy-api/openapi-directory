package openapisdk.models.operations;



public class GetGenotypeDiseaseAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGenotypeDiseaseAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGenotypeDiseaseAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGenotypeDiseaseAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}