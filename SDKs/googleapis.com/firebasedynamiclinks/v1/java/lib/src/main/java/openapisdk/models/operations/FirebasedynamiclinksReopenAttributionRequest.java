package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedynamiclinksReopenAttributionRequest {
    public FirebasedynamiclinksReopenAttributionQueryParams queryParams;
    public FirebasedynamiclinksReopenAttributionRequest withQueryParams(FirebasedynamiclinksReopenAttributionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIosReopenAttributionRequest request;
    public FirebasedynamiclinksReopenAttributionRequest withRequest(openapisdk.models.shared.GetIosReopenAttributionRequest request) {
        this.request = request;
        return this;
    }
    public FirebasedynamiclinksReopenAttributionSecurity security;
    public FirebasedynamiclinksReopenAttributionRequest withSecurity(FirebasedynamiclinksReopenAttributionSecurity security) {
        this.security = security;
        return this;
    }
}