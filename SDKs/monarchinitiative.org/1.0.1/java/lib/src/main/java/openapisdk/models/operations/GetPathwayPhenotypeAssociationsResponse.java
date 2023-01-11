package openapisdk.models.operations;



public class GetPathwayPhenotypeAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetPathwayPhenotypeAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetPathwayPhenotypeAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPathwayPhenotypeAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}