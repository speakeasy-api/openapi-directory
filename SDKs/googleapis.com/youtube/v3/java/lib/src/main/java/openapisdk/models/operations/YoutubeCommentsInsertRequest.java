package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCommentsInsertRequest {
    public YoutubeCommentsInsertQueryParams queryParams;
    public YoutubeCommentsInsertRequest withQueryParams(YoutubeCommentsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Comment request;
    public YoutubeCommentsInsertRequest withRequest(openapisdk.models.shared.Comment request) {
        this.request = request;
        return this;
    }
    public YoutubeCommentsInsertSecurity security;
    public YoutubeCommentsInsertRequest withSecurity(YoutubeCommentsInsertSecurity security) {
        this.security = security;
        return this;
    }
}