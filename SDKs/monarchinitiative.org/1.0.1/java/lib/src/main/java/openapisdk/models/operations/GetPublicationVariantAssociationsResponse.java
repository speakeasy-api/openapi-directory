package openapisdk.models.operations;



public class GetPublicationVariantAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetPublicationVariantAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetPublicationVariantAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPublicationVariantAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}