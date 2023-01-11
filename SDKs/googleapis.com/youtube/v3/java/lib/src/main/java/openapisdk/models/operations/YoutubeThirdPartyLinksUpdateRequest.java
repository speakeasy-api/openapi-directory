package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeThirdPartyLinksUpdateRequest {
    public YoutubeThirdPartyLinksUpdateQueryParams queryParams;
    public YoutubeThirdPartyLinksUpdateRequest withQueryParams(YoutubeThirdPartyLinksUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ThirdPartyLink request;
    public YoutubeThirdPartyLinksUpdateRequest withRequest(openapisdk.models.shared.ThirdPartyLink request) {
        this.request = request;
        return this;
    }
}