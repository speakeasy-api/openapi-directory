package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCommentsUpdateRequest {
    public YoutubeCommentsUpdateQueryParams queryParams;
    public YoutubeCommentsUpdateRequest withQueryParams(YoutubeCommentsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Comment request;
    public YoutubeCommentsUpdateRequest withRequest(openapisdk.models.shared.Comment request) {
        this.request = request;
        return this;
    }
    public YoutubeCommentsUpdateSecurity security;
    public YoutubeCommentsUpdateRequest withSecurity(YoutubeCommentsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}