package openapisdk.models.operations;



public class PutDriversIdResponse {
    public String contentType;
    public PutDriversIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Driver driver;
    public PutDriversIdResponse withDriver(openapisdk.models.shared.Driver driver) {
        this.driver = driver;
        return this;
    }
    public Long statusCode;
    public PutDriversIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}