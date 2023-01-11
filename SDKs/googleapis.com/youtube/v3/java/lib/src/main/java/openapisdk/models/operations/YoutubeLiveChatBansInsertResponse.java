package openapisdk.models.operations;



public class YoutubeLiveChatBansInsertResponse {
    public String contentType;
    public YoutubeLiveChatBansInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveChatBan liveChatBan;
    public YoutubeLiveChatBansInsertResponse withLiveChatBan(openapisdk.models.shared.LiveChatBan liveChatBan) {
        this.liveChatBan = liveChatBan;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveChatBansInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}