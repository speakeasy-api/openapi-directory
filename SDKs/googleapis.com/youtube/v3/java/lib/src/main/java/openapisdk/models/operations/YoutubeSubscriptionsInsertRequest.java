package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeSubscriptionsInsertRequest {
    public YoutubeSubscriptionsInsertQueryParams queryParams;
    public YoutubeSubscriptionsInsertRequest withQueryParams(YoutubeSubscriptionsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Subscription request;
    public YoutubeSubscriptionsInsertRequest withRequest(openapisdk.models.shared.Subscription request) {
        this.request = request;
        return this;
    }
    public YoutubeSubscriptionsInsertSecurity security;
    public YoutubeSubscriptionsInsertRequest withSecurity(YoutubeSubscriptionsInsertSecurity security) {
        this.security = security;
        return this;
    }
}