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
    public openapisdk.models.shared.ChatV1Service chatV1Service;
    public CreateServiceResponse withChatV1Service(openapisdk.models.shared.ChatV1Service chatV1Service) {
        this.chatV1Service = chatV1Service;
        return this;
    }
}