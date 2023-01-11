package openapisdk.models.operations;



public class GetGenotypeGenotypeAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGenotypeGenotypeAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGenotypeGenotypeAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGenotypeGenotypeAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}