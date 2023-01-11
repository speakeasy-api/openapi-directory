package openapisdk.models.operations;



public class AddSubscriptionResponse {
    public String contentType;
    public AddSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public AddSubscriptionResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public AddSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}