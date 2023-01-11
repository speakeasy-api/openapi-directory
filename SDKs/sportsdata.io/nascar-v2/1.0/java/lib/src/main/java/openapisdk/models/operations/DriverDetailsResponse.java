package openapisdk.models.operations;



public class DriverDetailsResponse {
    public String contentType;
    public DriverDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object driver;
    public DriverDetailsResponse withDriver(Object driver) {
        this.driver = driver;
        return this;
    }
    public Long statusCode;
    public DriverDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}