package openapisdk.models.operations;



public class GetPublicationModelAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetPublicationModelAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetPublicationModelAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPublicationModelAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}