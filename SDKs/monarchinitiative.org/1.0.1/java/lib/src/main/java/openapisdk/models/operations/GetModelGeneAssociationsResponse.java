package openapisdk.models.operations;



public class GetModelGeneAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetModelGeneAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetModelGeneAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetModelGeneAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}