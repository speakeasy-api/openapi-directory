package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeYoutubeV3UpdateCommentThreadsRequest {
    public YoutubeYoutubeV3UpdateCommentThreadsQueryParams queryParams;
    public YoutubeYoutubeV3UpdateCommentThreadsRequest withQueryParams(YoutubeYoutubeV3UpdateCommentThreadsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CommentThread request;
    public YoutubeYoutubeV3UpdateCommentThreadsRequest withRequest(openapisdk.models.shared.CommentThread request) {
        this.request = request;
        return this;
    }
}