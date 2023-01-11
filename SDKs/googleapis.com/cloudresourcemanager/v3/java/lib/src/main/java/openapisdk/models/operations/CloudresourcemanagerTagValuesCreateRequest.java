package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesCreateRequest {
    public CloudresourcemanagerTagValuesCreateQueryParams queryParams;
    public CloudresourcemanagerTagValuesCreateRequest withQueryParams(CloudresourcemanagerTagValuesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagValueInput request;
    public CloudresourcemanagerTagValuesCreateRequest withRequest(openapisdk.models.shared.TagValueInput request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerTagValuesCreateSecurity security;
    public CloudresourcemanagerTagValuesCreateRequest withSecurity(CloudresourcemanagerTagValuesCreateSecurity security) {
        this.security = security;
        return this;
    }
}