package openapisdk.models.operations;



public class GetPathwayGeneAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetPathwayGeneAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetPathwayGeneAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPathwayGeneAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}