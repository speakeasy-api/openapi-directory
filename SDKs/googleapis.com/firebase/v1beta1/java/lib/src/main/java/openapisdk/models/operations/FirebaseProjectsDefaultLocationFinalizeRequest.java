package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsDefaultLocationFinalizeRequest {
    public FirebaseProjectsDefaultLocationFinalizePathParams pathParams;
    public FirebaseProjectsDefaultLocationFinalizeRequest withPathParams(FirebaseProjectsDefaultLocationFinalizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsDefaultLocationFinalizeQueryParams queryParams;
    public FirebaseProjectsDefaultLocationFinalizeRequest withQueryParams(FirebaseProjectsDefaultLocationFinalizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FinalizeDefaultLocationRequest request;
    public FirebaseProjectsDefaultLocationFinalizeRequest withRequest(openapisdk.models.shared.FinalizeDefaultLocationRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsDefaultLocationFinalizeSecurity security;
    public FirebaseProjectsDefaultLocationFinalizeRequest withSecurity(FirebaseProjectsDefaultLocationFinalizeSecurity security) {
        this.security = security;
        return this;
    }
}