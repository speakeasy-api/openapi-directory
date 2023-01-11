package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDocumentPermissionRequest {
    public String serverURL;
    public UpdateDocumentPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDocumentPermissionPathParams pathParams;
    public UpdateDocumentPermissionRequest withPathParams(UpdateDocumentPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDocumentPermissionUpdateDocumentPermissionRequest request;
    public UpdateDocumentPermissionRequest withRequest(UpdateDocumentPermissionUpdateDocumentPermissionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDocumentPermissionSecurity security;
    public UpdateDocumentPermissionRequest withSecurity(UpdateDocumentPermissionSecurity security) {
        this.security = security;
        return this;
    }
}