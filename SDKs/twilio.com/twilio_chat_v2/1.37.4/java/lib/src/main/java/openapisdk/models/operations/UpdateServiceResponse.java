package openapisdk.models.operations;



public class UpdateServiceResponse {
    public String contentType;
    public UpdateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2Service chatV2Service;
    public UpdateServiceResponse withChatV2Service(openapisdk.models.shared.ChatV2Service chatV2Service) {
        this.chatV2Service = chatV2Service;
        return this;
    }
}