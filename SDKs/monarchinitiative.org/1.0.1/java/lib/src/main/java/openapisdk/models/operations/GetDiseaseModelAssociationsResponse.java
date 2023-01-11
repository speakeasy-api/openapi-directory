package openapisdk.models.operations;



public class GetDiseaseModelAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetDiseaseModelAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetDiseaseModelAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDiseaseModelAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}