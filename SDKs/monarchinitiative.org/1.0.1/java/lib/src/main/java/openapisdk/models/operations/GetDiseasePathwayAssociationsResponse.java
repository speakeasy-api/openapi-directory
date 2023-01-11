package openapisdk.models.operations;



public class GetDiseasePathwayAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetDiseasePathwayAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetDiseasePathwayAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDiseasePathwayAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}