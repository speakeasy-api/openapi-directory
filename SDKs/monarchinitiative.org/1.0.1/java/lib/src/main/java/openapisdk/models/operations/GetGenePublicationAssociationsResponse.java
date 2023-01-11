package openapisdk.models.operations;



public class GetGenePublicationAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGenePublicationAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGenePublicationAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGenePublicationAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}