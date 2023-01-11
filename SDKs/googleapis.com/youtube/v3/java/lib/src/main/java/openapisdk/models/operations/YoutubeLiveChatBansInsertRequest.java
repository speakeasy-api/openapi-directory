package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveChatBansInsertRequest {
    public YoutubeLiveChatBansInsertQueryParams queryParams;
    public YoutubeLiveChatBansInsertRequest withQueryParams(YoutubeLiveChatBansInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LiveChatBan request;
    public YoutubeLiveChatBansInsertRequest withRequest(openapisdk.models.shared.LiveChatBan request) {
        this.request = request;
        return this;
    }
    public YoutubeLiveChatBansInsertSecurity security;
    public YoutubeLiveChatBansInsertRequest withSecurity(YoutubeLiveChatBansInsertSecurity security) {
        this.security = security;
        return this;
    }
}