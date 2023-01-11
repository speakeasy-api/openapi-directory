package openapisdk.models.operations;



public class FetchUserBindingResponse {
    public String contentType;
    public FetchUserBindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserBindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceUserUserBinding chatV2ServiceUserUserBinding;
    public FetchUserBindingResponse withChatV2ServiceUserUserBinding(openapisdk.models.shared.ChatV2ServiceUserUserBinding chatV2ServiceUserUserBinding) {
        this.chatV2ServiceUserUserBinding = chatV2ServiceUserUserBinding;
        return this;
    }
}