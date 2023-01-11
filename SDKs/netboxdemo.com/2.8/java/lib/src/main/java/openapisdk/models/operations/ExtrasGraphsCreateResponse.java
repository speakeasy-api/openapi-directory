package openapisdk.models.operations;



public class ExtrasGraphsCreateResponse {
    public String contentType;
    public ExtrasGraphsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Graph graph;
    public ExtrasGraphsCreateResponse withGraph(openapisdk.models.shared.Graph graph) {
        this.graph = graph;
        return this;
    }
    public Long statusCode;
    public ExtrasGraphsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}