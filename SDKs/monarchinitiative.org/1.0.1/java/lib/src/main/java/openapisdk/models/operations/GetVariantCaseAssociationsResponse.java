package openapisdk.models.operations;



public class GetVariantCaseAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetVariantCaseAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetVariantCaseAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVariantCaseAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}