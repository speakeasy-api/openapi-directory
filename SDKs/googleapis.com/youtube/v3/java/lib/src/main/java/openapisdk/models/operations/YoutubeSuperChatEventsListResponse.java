package openapisdk.models.operations;



public class YoutubeSuperChatEventsListResponse {
    public String contentType;
    public YoutubeSuperChatEventsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeSuperChatEventsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuperChatEventListResponse superChatEventListResponse;
    public YoutubeSuperChatEventsListResponse withSuperChatEventListResponse(openapisdk.models.shared.SuperChatEventListResponse superChatEventListResponse) {
        this.superChatEventListResponse = superChatEventListResponse;
        return this;
    }
}