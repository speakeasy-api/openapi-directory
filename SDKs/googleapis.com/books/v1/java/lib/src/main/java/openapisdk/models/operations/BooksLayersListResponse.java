package openapisdk.models.operations;



public class BooksLayersListResponse {
    public String contentType;
    public BooksLayersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Layersummaries layersummaries;
    public BooksLayersListResponse withLayersummaries(openapisdk.models.shared.Layersummaries layersummaries) {
        this.layersummaries = layersummaries;
        return this;
    }
    public Long statusCode;
    public BooksLayersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}