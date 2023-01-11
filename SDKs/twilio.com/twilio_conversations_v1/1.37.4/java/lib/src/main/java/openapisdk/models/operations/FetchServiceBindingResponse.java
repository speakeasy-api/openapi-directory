package openapisdk.models.operations;



public class FetchServiceBindingResponse {
    public String contentType;
    public FetchServiceBindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceBindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceBinding conversationsV1ServiceServiceBinding;
    public FetchServiceBindingResponse withConversationsV1ServiceServiceBinding(openapisdk.models.shared.ConversationsV1ServiceServiceBinding conversationsV1ServiceServiceBinding) {
        this.conversationsV1ServiceServiceBinding = conversationsV1ServiceServiceBinding;
        return this;
    }
}