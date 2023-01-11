package openapisdk.models.operations;



public class GetVariantGeneAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetVariantGeneAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetVariantGeneAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVariantGeneAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}