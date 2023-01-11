package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsPullRequest {
    public PubsubSubscriptionsPullQueryParams queryParams;
    public PubsubSubscriptionsPullRequest withQueryParams(PubsubSubscriptionsPullQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PullRequest request;
    public PubsubSubscriptionsPullRequest withRequest(openapisdk.models.shared.PullRequest request) {
        this.request = request;
        return this;
    }
    public PubsubSubscriptionsPullSecurity security;
    public PubsubSubscriptionsPullRequest withSecurity(PubsubSubscriptionsPullSecurity security) {
        this.security = security;
        return this;
    }
}