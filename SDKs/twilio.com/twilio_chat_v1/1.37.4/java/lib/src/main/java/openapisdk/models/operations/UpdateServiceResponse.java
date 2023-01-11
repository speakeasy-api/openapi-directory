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
    public openapisdk.models.shared.ChatV1Service chatV1Service;
    public UpdateServiceResponse withChatV1Service(openapisdk.models.shared.ChatV1Service chatV1Service) {
        this.chatV1Service = chatV1Service;
        return this;
    }
}