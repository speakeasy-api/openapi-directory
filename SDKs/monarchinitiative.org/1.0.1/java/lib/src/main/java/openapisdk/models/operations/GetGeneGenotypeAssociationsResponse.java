package openapisdk.models.operations;



public class GetGeneGenotypeAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGeneGenotypeAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGeneGenotypeAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGeneGenotypeAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}