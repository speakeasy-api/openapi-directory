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
    public openapisdk.models.shared.ConversationsV1Service conversationsV1Service;
    public CreateServiceResponse withConversationsV1Service(openapisdk.models.shared.ConversationsV1Service conversationsV1Service) {
        this.conversationsV1Service = conversationsV1Service;
        return this;
    }
}