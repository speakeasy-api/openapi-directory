package openapisdk.models.operations;



public class ResellerResellernotifyUnregisterResponse {
    public String contentType;
    public ResellerResellernotifyUnregisterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResellernotifyResource resellernotifyResource;
    public ResellerResellernotifyUnregisterResponse withResellernotifyResource(openapisdk.models.shared.ResellernotifyResource resellernotifyResource) {
        this.resellernotifyResource = resellernotifyResource;
        return this;
    }
    public Long statusCode;
    public ResellerResellernotifyUnregisterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}