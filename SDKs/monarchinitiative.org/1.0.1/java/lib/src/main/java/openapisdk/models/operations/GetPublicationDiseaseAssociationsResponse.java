package openapisdk.models.operations;



public class GetPublicationDiseaseAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetPublicationDiseaseAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetPublicationDiseaseAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPublicationDiseaseAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}