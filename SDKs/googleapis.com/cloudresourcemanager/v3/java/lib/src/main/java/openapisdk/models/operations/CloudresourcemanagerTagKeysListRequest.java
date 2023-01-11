package openapisdk.models.operations;



public class CloudresourcemanagerTagKeysListRequest {
    public CloudresourcemanagerTagKeysListQueryParams queryParams;
    public CloudresourcemanagerTagKeysListRequest withQueryParams(CloudresourcemanagerTagKeysListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudresourcemanagerTagKeysListSecurity security;
    public CloudresourcemanagerTagKeysListRequest withSecurity(CloudresourcemanagerTagKeysListSecurity security) {
        this.security = security;
        return this;
    }
}