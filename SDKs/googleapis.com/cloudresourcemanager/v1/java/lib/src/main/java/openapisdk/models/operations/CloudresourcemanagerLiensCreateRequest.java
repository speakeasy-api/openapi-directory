package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerLiensCreateRequest {
    public CloudresourcemanagerLiensCreateQueryParams queryParams;
    public CloudresourcemanagerLiensCreateRequest withQueryParams(CloudresourcemanagerLiensCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Lien request;
    public CloudresourcemanagerLiensCreateRequest withRequest(openapisdk.models.shared.Lien request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerLiensCreateSecurity security;
    public CloudresourcemanagerLiensCreateRequest withSecurity(CloudresourcemanagerLiensCreateSecurity security) {
        this.security = security;
        return this;
    }
}