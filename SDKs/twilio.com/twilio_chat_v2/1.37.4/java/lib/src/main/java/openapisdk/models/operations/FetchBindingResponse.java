package openapisdk.models.operations;



public class FetchBindingResponse {
    public String contentType;
    public FetchBindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchBindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceBinding chatV2ServiceBinding;
    public FetchBindingResponse withChatV2ServiceBinding(openapisdk.models.shared.ChatV2ServiceBinding chatV2ServiceBinding) {
        this.chatV2ServiceBinding = chatV2ServiceBinding;
        return this;
    }
}