package openapisdk.models.operations;



public class GetCaseVariantAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetCaseVariantAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetCaseVariantAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCaseVariantAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}