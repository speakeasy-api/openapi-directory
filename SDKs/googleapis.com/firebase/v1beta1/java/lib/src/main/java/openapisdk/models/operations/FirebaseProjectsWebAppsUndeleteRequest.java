package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsWebAppsUndeleteRequest {
    public FirebaseProjectsWebAppsUndeletePathParams pathParams;
    public FirebaseProjectsWebAppsUndeleteRequest withPathParams(FirebaseProjectsWebAppsUndeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsWebAppsUndeleteQueryParams queryParams;
    public FirebaseProjectsWebAppsUndeleteRequest withQueryParams(FirebaseProjectsWebAppsUndeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UndeleteWebAppRequest request;
    public FirebaseProjectsWebAppsUndeleteRequest withRequest(openapisdk.models.shared.UndeleteWebAppRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsWebAppsUndeleteSecurity security;
    public FirebaseProjectsWebAppsUndeleteRequest withSecurity(FirebaseProjectsWebAppsUndeleteSecurity security) {
        this.security = security;
        return this;
    }
}