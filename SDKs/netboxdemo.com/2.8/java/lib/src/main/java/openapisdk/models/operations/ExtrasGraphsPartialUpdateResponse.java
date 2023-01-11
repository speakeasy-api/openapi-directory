package openapisdk.models.operations;



public class ExtrasGraphsPartialUpdateResponse {
    public String contentType;
    public ExtrasGraphsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Graph graph;
    public ExtrasGraphsPartialUpdateResponse withGraph(openapisdk.models.shared.Graph graph) {
        this.graph = graph;
        return this;
    }
    public Long statusCode;
    public ExtrasGraphsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}