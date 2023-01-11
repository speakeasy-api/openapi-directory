package openapisdk.models.operations;



public class GetGeneOrthologDiseaseAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGeneOrthologDiseaseAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGeneOrthologDiseaseAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGeneOrthologDiseaseAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}