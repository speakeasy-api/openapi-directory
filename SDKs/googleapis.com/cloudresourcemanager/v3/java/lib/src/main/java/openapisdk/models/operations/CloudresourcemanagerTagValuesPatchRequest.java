package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesPatchRequest {
    public CloudresourcemanagerTagValuesPatchPathParams pathParams;
    public CloudresourcemanagerTagValuesPatchRequest withPathParams(CloudresourcemanagerTagValuesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerTagValuesPatchQueryParams queryParams;
    public CloudresourcemanagerTagValuesPatchRequest withQueryParams(CloudresourcemanagerTagValuesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagValueInput request;
    public CloudresourcemanagerTagValuesPatchRequest withRequest(openapisdk.models.shared.TagValueInput request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerTagValuesPatchSecurity security;
    public CloudresourcemanagerTagValuesPatchRequest withSecurity(CloudresourcemanagerTagValuesPatchSecurity security) {
        this.security = security;
        return this;
    }
}