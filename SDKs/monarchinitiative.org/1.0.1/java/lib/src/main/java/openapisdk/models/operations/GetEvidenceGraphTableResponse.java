package openapisdk.models.operations;



public class GetEvidenceGraphTableResponse {
    public openapisdk.models.shared.AssociationResults[] associationResults;
    public GetEvidenceGraphTableResponse withAssociationResults(openapisdk.models.shared.AssociationResults[] associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    public String contentType;
    public GetEvidenceGraphTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEvidenceGraphTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}