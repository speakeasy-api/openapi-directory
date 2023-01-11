package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesTagHoldsCreateRequest {
    public CloudresourcemanagerTagValuesTagHoldsCreatePathParams pathParams;
    public CloudresourcemanagerTagValuesTagHoldsCreateRequest withPathParams(CloudresourcemanagerTagValuesTagHoldsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerTagValuesTagHoldsCreateQueryParams queryParams;
    public CloudresourcemanagerTagValuesTagHoldsCreateRequest withQueryParams(CloudresourcemanagerTagValuesTagHoldsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagHoldInput request;
    public CloudresourcemanagerTagValuesTagHoldsCreateRequest withRequest(openapisdk.models.shared.TagHoldInput request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerTagValuesTagHoldsCreateSecurity security;
    public CloudresourcemanagerTagValuesTagHoldsCreateRequest withSecurity(CloudresourcemanagerTagValuesTagHoldsCreateSecurity security) {
        this.security = security;
        return this;
    }
}