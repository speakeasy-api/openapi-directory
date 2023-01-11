package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerOrganizationsUpdateRequest {
    public CloudresourcemanagerOrganizationsUpdatePathParams pathParams;
    public CloudresourcemanagerOrganizationsUpdateRequest withPathParams(CloudresourcemanagerOrganizationsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerOrganizationsUpdateQueryParams queryParams;
    public CloudresourcemanagerOrganizationsUpdateRequest withQueryParams(CloudresourcemanagerOrganizationsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Organization request;
    public CloudresourcemanagerOrganizationsUpdateRequest withRequest(openapisdk.models.shared.Organization request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerOrganizationsUpdateSecurity security;
    public CloudresourcemanagerOrganizationsUpdateRequest withSecurity(CloudresourcemanagerOrganizationsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}