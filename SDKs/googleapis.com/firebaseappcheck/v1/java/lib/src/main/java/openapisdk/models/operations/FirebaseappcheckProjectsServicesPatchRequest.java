package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsServicesPatchRequest {
    public FirebaseappcheckProjectsServicesPatchPathParams pathParams;
    public FirebaseappcheckProjectsServicesPatchRequest withPathParams(FirebaseappcheckProjectsServicesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsServicesPatchQueryParams queryParams;
    public FirebaseappcheckProjectsServicesPatchRequest withQueryParams(FirebaseappcheckProjectsServicesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1Service request;
    public FirebaseappcheckProjectsServicesPatchRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1Service request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsServicesPatchSecurity security;
    public FirebaseappcheckProjectsServicesPatchRequest withSecurity(FirebaseappcheckProjectsServicesPatchSecurity security) {
        this.security = security;
        return this;
    }
}