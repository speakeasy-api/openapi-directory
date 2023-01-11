package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorSubscriptionsUpdateRequest {
    public MirrorSubscriptionsUpdatePathParams pathParams;
    public MirrorSubscriptionsUpdateRequest withPathParams(MirrorSubscriptionsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorSubscriptionsUpdateQueryParams queryParams;
    public MirrorSubscriptionsUpdateRequest withQueryParams(MirrorSubscriptionsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Subscription request;
    public MirrorSubscriptionsUpdateRequest withRequest(openapisdk.models.shared.Subscription request) {
        this.request = request;
        return this;
    }
    public MirrorSubscriptionsUpdateSecurity security;
    public MirrorSubscriptionsUpdateRequest withSecurity(MirrorSubscriptionsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}