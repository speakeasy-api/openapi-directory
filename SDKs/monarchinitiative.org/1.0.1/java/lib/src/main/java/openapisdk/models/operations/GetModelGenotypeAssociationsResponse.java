package openapisdk.models.operations;



public class GetModelGenotypeAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetModelGenotypeAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetModelGenotypeAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetModelGenotypeAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}