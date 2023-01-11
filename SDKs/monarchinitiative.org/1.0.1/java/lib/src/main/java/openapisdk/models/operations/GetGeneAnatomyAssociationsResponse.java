package openapisdk.models.operations;



public class GetGeneAnatomyAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGeneAnatomyAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGeneAnatomyAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGeneAnatomyAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}