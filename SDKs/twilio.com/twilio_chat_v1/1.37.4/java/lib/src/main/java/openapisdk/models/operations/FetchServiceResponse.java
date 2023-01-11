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
    public openapisdk.models.shared.ChatV1Service chatV1Service;
    public FetchServiceResponse withChatV1Service(openapisdk.models.shared.ChatV1Service chatV1Service) {
        this.chatV1Service = chatV1Service;
        return this;
    }
}