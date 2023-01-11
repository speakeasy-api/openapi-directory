package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveChatModeratorsInsertRequest {
    public YoutubeLiveChatModeratorsInsertQueryParams queryParams;
    public YoutubeLiveChatModeratorsInsertRequest withQueryParams(YoutubeLiveChatModeratorsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LiveChatModerator request;
    public YoutubeLiveChatModeratorsInsertRequest withRequest(openapisdk.models.shared.LiveChatModerator request) {
        this.request = request;
        return this;
    }
    public YoutubeLiveChatModeratorsInsertSecurity security;
    public YoutubeLiveChatModeratorsInsertRequest withSecurity(YoutubeLiveChatModeratorsInsertSecurity security) {
        this.security = security;
        return this;
    }
}