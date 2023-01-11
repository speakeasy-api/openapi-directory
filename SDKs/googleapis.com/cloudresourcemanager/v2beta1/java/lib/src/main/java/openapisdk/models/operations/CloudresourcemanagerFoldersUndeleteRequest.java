package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersUndeleteRequest {
    public CloudresourcemanagerFoldersUndeletePathParams pathParams;
    public CloudresourcemanagerFoldersUndeleteRequest withPathParams(CloudresourcemanagerFoldersUndeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerFoldersUndeleteQueryParams queryParams;
    public CloudresourcemanagerFoldersUndeleteRequest withQueryParams(CloudresourcemanagerFoldersUndeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudresourcemanagerFoldersUndeleteRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerFoldersUndeleteSecurity security;
    public CloudresourcemanagerFoldersUndeleteRequest withSecurity(CloudresourcemanagerFoldersUndeleteSecurity security) {
        this.security = security;
        return this;
    }
}