package openapisdk.models.operations;



public class BooksLayersGetResponse {
    public String contentType;
    public BooksLayersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Layersummary layersummary;
    public BooksLayersGetResponse withLayersummary(openapisdk.models.shared.Layersummary layersummary) {
        this.layersummary = layersummary;
        return this;
    }
    public Long statusCode;
    public BooksLayersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}