package openapisdk.models.operations;



public class GetPhenotypeGeneAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetPhenotypeGeneAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetPhenotypeGeneAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPhenotypeGeneAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}