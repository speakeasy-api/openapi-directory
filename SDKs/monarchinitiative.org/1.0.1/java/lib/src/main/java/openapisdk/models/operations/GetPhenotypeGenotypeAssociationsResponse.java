package openapisdk.models.operations;



public class GetPhenotypeGenotypeAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetPhenotypeGenotypeAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetPhenotypeGenotypeAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPhenotypeGenotypeAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}