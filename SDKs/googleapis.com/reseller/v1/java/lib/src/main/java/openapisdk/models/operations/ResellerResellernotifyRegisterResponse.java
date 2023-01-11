package openapisdk.models.operations;



public class ResellerResellernotifyRegisterResponse {
    public String contentType;
    public ResellerResellernotifyRegisterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResellernotifyResource resellernotifyResource;
    public ResellerResellernotifyRegisterResponse withResellernotifyResource(openapisdk.models.shared.ResellernotifyResource resellernotifyResource) {
        this.resellernotifyResource = resellernotifyResource;
        return this;
    }
    public Long statusCode;
    public ResellerResellernotifyRegisterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}