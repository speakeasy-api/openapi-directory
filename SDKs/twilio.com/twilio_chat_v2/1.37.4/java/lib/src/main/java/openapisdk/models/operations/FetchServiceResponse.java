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
    public openapisdk.models.shared.ChatV2Service chatV2Service;
    public FetchServiceResponse withChatV2Service(openapisdk.models.shared.ChatV2Service chatV2Service) {
        this.chatV2Service = chatV2Service;
        return this;
    }
}