package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsCreateRequest {
    public CloudidentityGroupsCreateQueryParams queryParams;
    public CloudidentityGroupsCreateRequest withQueryParams(CloudidentityGroupsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupInput request;
    public CloudidentityGroupsCreateRequest withRequest(openapisdk.models.shared.GroupInput request) {
        this.request = request;
        return this;
    }
    public CloudidentityGroupsCreateSecurity security;
    public CloudidentityGroupsCreateRequest withSecurity(CloudidentityGroupsCreateSecurity security) {
        this.security = security;
        return this;
    }
}