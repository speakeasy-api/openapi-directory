package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagKeysCreateRequest {
    public CloudresourcemanagerTagKeysCreateQueryParams queryParams;
    public CloudresourcemanagerTagKeysCreateRequest withQueryParams(CloudresourcemanagerTagKeysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagKeyInput request;
    public CloudresourcemanagerTagKeysCreateRequest withRequest(openapisdk.models.shared.TagKeyInput request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerTagKeysCreateSecurity security;
    public CloudresourcemanagerTagKeysCreateRequest withSecurity(CloudresourcemanagerTagKeysCreateSecurity security) {
        this.security = security;
        return this;
    }
}