package openapisdk.models.operations;



public class GetGeneOrthologPhenotypeAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGeneOrthologPhenotypeAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGeneOrthologPhenotypeAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGeneOrthologPhenotypeAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}