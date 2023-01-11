package openapisdk.models.operations;



public class GetDiseaseGeneAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetDiseaseGeneAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetDiseaseGeneAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDiseaseGeneAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}