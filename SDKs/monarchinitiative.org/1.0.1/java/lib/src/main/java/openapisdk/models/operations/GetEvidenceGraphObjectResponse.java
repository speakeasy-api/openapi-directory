package openapisdk.models.operations;



public class GetEvidenceGraphObjectResponse {
    public String contentType;
    public GetEvidenceGraphObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Graph[] graphs;
    public GetEvidenceGraphObjectResponse withGraphs(openapisdk.models.shared.Graph[] graphs) {
        this.graphs = graphs;
        return this;
    }
    public Long statusCode;
    public GetEvidenceGraphObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}