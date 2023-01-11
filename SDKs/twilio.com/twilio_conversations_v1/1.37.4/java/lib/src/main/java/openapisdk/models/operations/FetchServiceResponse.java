package openapisdk.models.operations;



public class FetchServiceResponse {
    public String contentType;
    public FetchServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1Service conversationsV1Service;
    public FetchServiceResponse withConversationsV1Service(openapisdk.models.shared.ConversationsV1Service conversationsV1Service) {
        this.conversationsV1Service = conversationsV1Service;
        return this;
    }
}