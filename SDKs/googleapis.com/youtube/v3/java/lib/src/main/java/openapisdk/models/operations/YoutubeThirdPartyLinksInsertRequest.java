package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeThirdPartyLinksInsertRequest {
    public YoutubeThirdPartyLinksInsertQueryParams queryParams;
    public YoutubeThirdPartyLinksInsertRequest withQueryParams(YoutubeThirdPartyLinksInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ThirdPartyLink request;
    public YoutubeThirdPartyLinksInsertRequest withRequest(openapisdk.models.shared.ThirdPartyLink request) {
        this.request = request;
        return this;
    }
}