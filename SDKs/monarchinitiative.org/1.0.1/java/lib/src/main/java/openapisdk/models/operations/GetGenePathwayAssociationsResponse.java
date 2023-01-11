package openapisdk.models.operations;



public class GetGenePathwayAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGenePathwayAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGenePathwayAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGenePathwayAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}