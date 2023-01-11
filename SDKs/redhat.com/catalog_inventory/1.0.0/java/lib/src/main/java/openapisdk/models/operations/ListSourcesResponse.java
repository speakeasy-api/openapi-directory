package openapisdk.models.operations;



public class ListSourcesResponse {
    public String contentType;
    public ListSourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SourcesCollection sourcesCollection;
    public ListSourcesResponse withSourcesCollection(openapisdk.models.shared.SourcesCollection sourcesCollection) {
        this.sourcesCollection = sourcesCollection;
        return this;
    }
    public Long statusCode;
    public ListSourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}