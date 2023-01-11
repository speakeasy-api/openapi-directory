package openapisdk.models.operations;



public class ExtrasGraphsUpdateResponse {
    public String contentType;
    public ExtrasGraphsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Graph graph;
    public ExtrasGraphsUpdateResponse withGraph(openapisdk.models.shared.Graph graph) {
        this.graph = graph;
        return this;
    }
    public Long statusCode;
    public ExtrasGraphsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}