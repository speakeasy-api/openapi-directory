package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagBindingsCreateRequest {
    public CloudresourcemanagerTagBindingsCreateQueryParams queryParams;
    public CloudresourcemanagerTagBindingsCreateRequest withQueryParams(CloudresourcemanagerTagBindingsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagBindingInput request;
    public CloudresourcemanagerTagBindingsCreateRequest withRequest(openapisdk.models.shared.TagBindingInput request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerTagBindingsCreateSecurity security;
    public CloudresourcemanagerTagBindingsCreateRequest withSecurity(CloudresourcemanagerTagBindingsCreateSecurity security) {
        this.security = security;
        return this;
    }
}