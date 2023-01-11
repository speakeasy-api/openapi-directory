package openapisdk.models.operations;



public class StatusResponse {
    public String contentType;
    public StatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String status200TextPlainString;
    public StatusResponse withStatus200TextPlainString(String status200TextPlainString) {
        this.status200TextPlainString = status200TextPlainString;
        return this;
    }
}