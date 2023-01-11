package openapisdk.models.operations;



public class CreateServiceResponse {
    public String contentType;
    public CreateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2Service chatV2Service;
    public CreateServiceResponse withChatV2Service(openapisdk.models.shared.ChatV2Service chatV2Service) {
        this.chatV2Service = chatV2Service;
        return this;
    }
}