package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersSessionsUpdateRequest {
    public FitnessUsersSessionsUpdatePathParams pathParams;
    public FitnessUsersSessionsUpdateRequest withPathParams(FitnessUsersSessionsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FitnessUsersSessionsUpdateQueryParams queryParams;
    public FitnessUsersSessionsUpdateRequest withQueryParams(FitnessUsersSessionsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Session request;
    public FitnessUsersSessionsUpdateRequest withRequest(openapisdk.models.shared.Session request) {
        this.request = request;
        return this;
    }
    public FitnessUsersSessionsUpdateSecurity security;
    public FitnessUsersSessionsUpdateRequest withSecurity(FitnessUsersSessionsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}