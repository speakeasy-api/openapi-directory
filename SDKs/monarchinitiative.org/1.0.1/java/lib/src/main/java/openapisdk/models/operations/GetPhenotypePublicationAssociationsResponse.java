package openapisdk.models.operations;



public class GetPhenotypePublicationAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetPhenotypePublicationAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetPhenotypePublicationAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPhenotypePublicationAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}