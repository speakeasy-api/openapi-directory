package openapisdk.models.operations;



public class GetDiseaseGenotypeAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetDiseaseGenotypeAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetDiseaseGenotypeAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDiseaseGenotypeAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}