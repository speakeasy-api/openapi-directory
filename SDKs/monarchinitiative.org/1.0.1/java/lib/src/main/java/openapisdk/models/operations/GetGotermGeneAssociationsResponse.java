package openapisdk.models.operations;



public class GetGotermGeneAssociationsResponse {
    public openapisdk.models.shared.AssociationResults associationResults;
    public GetGotermGeneAssociationsResponse withAssociationResults(openapisdk.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetGotermGeneAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGotermGeneAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}