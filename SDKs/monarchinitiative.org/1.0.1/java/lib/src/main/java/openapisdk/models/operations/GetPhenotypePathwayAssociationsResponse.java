package openapisdk.models.operations;



public class GetPhenotypePathwayAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetPhenotypePathwayAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetPhenotypePathwayAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPhenotypePathwayAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}