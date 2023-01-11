package openapisdk.models.operations;



public class PostDriversResponse {
    public String contentType;
    public PostDriversResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Driver driver;
    public PostDriversResponse withDriver(openapisdk.models.shared.Driver driver) {
        this.driver = driver;
        return this;
    }
    public Long statusCode;
    public PostDriversResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}