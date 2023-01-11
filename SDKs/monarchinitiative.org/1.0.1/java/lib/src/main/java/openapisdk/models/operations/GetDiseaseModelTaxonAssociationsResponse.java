package openapisdk.models.operations;



public class GetDiseaseModelTaxonAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetDiseaseModelTaxonAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetDiseaseModelTaxonAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDiseaseModelTaxonAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}