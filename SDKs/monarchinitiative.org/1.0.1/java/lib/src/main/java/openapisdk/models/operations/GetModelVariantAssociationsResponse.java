package openapisdk.models.operations;



public class GetModelVariantAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetModelVariantAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetModelVariantAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetModelVariantAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}