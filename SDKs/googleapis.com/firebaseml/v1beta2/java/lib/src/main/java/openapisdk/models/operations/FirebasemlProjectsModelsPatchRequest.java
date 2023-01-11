package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasemlProjectsModelsPatchRequest {
    public FirebasemlProjectsModelsPatchPathParams pathParams;
    public FirebasemlProjectsModelsPatchRequest withPathParams(FirebasemlProjectsModelsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasemlProjectsModelsPatchQueryParams queryParams;
    public FirebasemlProjectsModelsPatchRequest withQueryParams(FirebasemlProjectsModelsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModelInput request;
    public FirebasemlProjectsModelsPatchRequest withRequest(openapisdk.models.shared.ModelInput request) {
        this.request = request;
        return this;
    }
    public FirebasemlProjectsModelsPatchSecurity security;
    public FirebasemlProjectsModelsPatchRequest withSecurity(FirebasemlProjectsModelsPatchSecurity security) {
        this.security = security;
        return this;
    }
}