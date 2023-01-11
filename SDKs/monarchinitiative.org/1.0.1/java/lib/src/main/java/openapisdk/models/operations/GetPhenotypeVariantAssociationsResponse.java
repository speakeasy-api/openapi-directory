package openapisdk.models.operations;



public class GetPhenotypeVariantAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetPhenotypeVariantAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetPhenotypeVariantAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPhenotypeVariantAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}