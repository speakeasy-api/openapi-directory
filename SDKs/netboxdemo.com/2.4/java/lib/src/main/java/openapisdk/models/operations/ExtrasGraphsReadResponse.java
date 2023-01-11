package openapisdk.models.operations;



public class ExtrasGraphsReadResponse {
    public String contentType;
    public ExtrasGraphsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Graph graph;
    public ExtrasGraphsReadResponse withGraph(openapisdk.models.shared.Graph graph) {
        this.graph = graph;
        return this;
    }
    public Long statusCode;
    public ExtrasGraphsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}