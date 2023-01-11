package openapisdk.models.operations;



public class GetGenotypeModelAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGenotypeModelAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGenotypeModelAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGenotypeModelAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}