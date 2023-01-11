package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedynamiclinksInstallAttributionRequest {
    public FirebasedynamiclinksInstallAttributionQueryParams queryParams;
    public FirebasedynamiclinksInstallAttributionRequest withQueryParams(FirebasedynamiclinksInstallAttributionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIosPostInstallAttributionRequest request;
    public FirebasedynamiclinksInstallAttributionRequest withRequest(openapisdk.models.shared.GetIosPostInstallAttributionRequest request) {
        this.request = request;
        return this;
    }
    public FirebasedynamiclinksInstallAttributionSecurity security;
    public FirebasedynamiclinksInstallAttributionRequest withSecurity(FirebasedynamiclinksInstallAttributionSecurity security) {
        this.security = security;
        return this;
    }
}