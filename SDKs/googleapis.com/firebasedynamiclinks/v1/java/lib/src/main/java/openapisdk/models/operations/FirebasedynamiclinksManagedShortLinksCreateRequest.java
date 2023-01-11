package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedynamiclinksManagedShortLinksCreateRequest {
    public FirebasedynamiclinksManagedShortLinksCreateQueryParams queryParams;
    public FirebasedynamiclinksManagedShortLinksCreateRequest withQueryParams(FirebasedynamiclinksManagedShortLinksCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateManagedShortLinkRequest request;
    public FirebasedynamiclinksManagedShortLinksCreateRequest withRequest(openapisdk.models.shared.CreateManagedShortLinkRequest request) {
        this.request = request;
        return this;
    }
    public FirebasedynamiclinksManagedShortLinksCreateSecurity security;
    public FirebasedynamiclinksManagedShortLinksCreateRequest withSecurity(FirebasedynamiclinksManagedShortLinksCreateSecurity security) {
        this.security = security;
        return this;
    }
}