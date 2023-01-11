package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerOrganizationsSearchRequest {
    public CloudresourcemanagerOrganizationsSearchQueryParams queryParams;
    public CloudresourcemanagerOrganizationsSearchRequest withQueryParams(CloudresourcemanagerOrganizationsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchOrganizationsRequest request;
    public CloudresourcemanagerOrganizationsSearchRequest withRequest(openapisdk.models.shared.SearchOrganizationsRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerOrganizationsSearchSecurity security;
    public CloudresourcemanagerOrganizationsSearchRequest withSecurity(CloudresourcemanagerOrganizationsSearchSecurity security) {
        this.security = security;
        return this;
    }
}