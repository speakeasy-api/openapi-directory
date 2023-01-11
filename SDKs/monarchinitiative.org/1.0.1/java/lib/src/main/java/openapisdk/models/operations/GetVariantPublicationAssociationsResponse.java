package openapisdk.models.operations;



public class GetVariantPublicationAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetVariantPublicationAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetVariantPublicationAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVariantPublicationAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}