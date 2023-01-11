package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorSubscriptionsInsertRequest {
    public MirrorSubscriptionsInsertQueryParams queryParams;
    public MirrorSubscriptionsInsertRequest withQueryParams(MirrorSubscriptionsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Subscription request;
    public MirrorSubscriptionsInsertRequest withRequest(openapisdk.models.shared.Subscription request) {
        this.request = request;
        return this;
    }
    public MirrorSubscriptionsInsertSecurity security;
    public MirrorSubscriptionsInsertRequest withSecurity(MirrorSubscriptionsInsertSecurity security) {
        this.security = security;
        return this;
    }
}