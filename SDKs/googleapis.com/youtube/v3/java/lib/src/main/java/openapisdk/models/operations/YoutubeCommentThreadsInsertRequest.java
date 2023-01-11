package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCommentThreadsInsertRequest {
    public YoutubeCommentThreadsInsertQueryParams queryParams;
    public YoutubeCommentThreadsInsertRequest withQueryParams(YoutubeCommentThreadsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CommentThread request;
    public YoutubeCommentThreadsInsertRequest withRequest(openapisdk.models.shared.CommentThread request) {
        this.request = request;
        return this;
    }
    public YoutubeCommentThreadsInsertSecurity security;
    public YoutubeCommentThreadsInsertRequest withSecurity(YoutubeCommentThreadsInsertSecurity security) {
        this.security = security;
        return this;
    }
}