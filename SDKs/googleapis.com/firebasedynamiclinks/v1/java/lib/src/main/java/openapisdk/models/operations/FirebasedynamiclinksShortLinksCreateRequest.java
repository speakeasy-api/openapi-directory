package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedynamiclinksShortLinksCreateRequest {
    public FirebasedynamiclinksShortLinksCreateQueryParams queryParams;
    public FirebasedynamiclinksShortLinksCreateRequest withQueryParams(FirebasedynamiclinksShortLinksCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateShortDynamicLinkRequest request;
    public FirebasedynamiclinksShortLinksCreateRequest withRequest(openapisdk.models.shared.CreateShortDynamicLinkRequest request) {
        this.request = request;
        return this;
    }
    public FirebasedynamiclinksShortLinksCreateSecurity security;
    public FirebasedynamiclinksShortLinksCreateRequest withSecurity(FirebasedynamiclinksShortLinksCreateSecurity security) {
        this.security = security;
        return this;
    }
}