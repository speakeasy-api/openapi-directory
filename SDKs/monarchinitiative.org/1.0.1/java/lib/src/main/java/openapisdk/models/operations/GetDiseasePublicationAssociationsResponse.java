package openapisdk.models.operations;



public class GetDiseasePublicationAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetDiseasePublicationAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetDiseasePublicationAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDiseasePublicationAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}