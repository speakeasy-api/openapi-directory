package openapisdk.models.operations;



public class GetGeneVariantAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGeneVariantAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGeneVariantAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGeneVariantAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}