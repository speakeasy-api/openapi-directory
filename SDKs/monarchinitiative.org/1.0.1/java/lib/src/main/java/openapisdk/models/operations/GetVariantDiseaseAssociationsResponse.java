package openapisdk.models.operations;



public class GetVariantDiseaseAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetVariantDiseaseAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetVariantDiseaseAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVariantDiseaseAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}