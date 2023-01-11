package openapisdk.models.operations;



public class GetEdgeResourceResponse {
    public String contentType;
    public GetEdgeResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Graph[] graphs;
    public GetEdgeResourceResponse withGraphs(openapisdk.models.shared.Graph[] graphs) {
        this.graphs = graphs;
        return this;
    }
    public Long statusCode;
    public GetEdgeResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}