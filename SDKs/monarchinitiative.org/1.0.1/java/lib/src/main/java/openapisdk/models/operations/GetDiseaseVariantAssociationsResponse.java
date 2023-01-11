package openapisdk.models.operations;



public class GetDiseaseVariantAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetDiseaseVariantAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetDiseaseVariantAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDiseaseVariantAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}