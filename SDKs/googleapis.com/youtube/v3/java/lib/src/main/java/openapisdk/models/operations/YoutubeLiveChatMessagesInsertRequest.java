package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveChatMessagesInsertRequest {
    public YoutubeLiveChatMessagesInsertQueryParams queryParams;
    public YoutubeLiveChatMessagesInsertRequest withQueryParams(YoutubeLiveChatMessagesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LiveChatMessage request;
    public YoutubeLiveChatMessagesInsertRequest withRequest(openapisdk.models.shared.LiveChatMessage request) {
        this.request = request;
        return this;
    }
    public YoutubeLiveChatMessagesInsertSecurity security;
    public YoutubeLiveChatMessagesInsertRequest withSecurity(YoutubeLiveChatMessagesInsertSecurity security) {
        this.security = security;
        return this;
    }
}