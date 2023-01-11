package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsServicesBatchUpdateRequest {
    public FirebaseappcheckProjectsServicesBatchUpdatePathParams pathParams;
    public FirebaseappcheckProjectsServicesBatchUpdateRequest withPathParams(FirebaseappcheckProjectsServicesBatchUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsServicesBatchUpdateQueryParams queryParams;
    public FirebaseappcheckProjectsServicesBatchUpdateRequest withQueryParams(FirebaseappcheckProjectsServicesBatchUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchUpdateServicesRequest request;
    public FirebaseappcheckProjectsServicesBatchUpdateRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchUpdateServicesRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsServicesBatchUpdateSecurity security;
    public FirebaseappcheckProjectsServicesBatchUpdateRequest withSecurity(FirebaseappcheckProjectsServicesBatchUpdateSecurity security) {
        this.security = security;
        return this;
    }
}