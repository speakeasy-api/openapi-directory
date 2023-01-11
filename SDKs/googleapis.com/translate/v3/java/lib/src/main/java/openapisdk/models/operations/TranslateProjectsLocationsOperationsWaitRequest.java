package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsOperationsWaitRequest {
    public TranslateProjectsLocationsOperationsWaitPathParams pathParams;
    public TranslateProjectsLocationsOperationsWaitRequest withPathParams(TranslateProjectsLocationsOperationsWaitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranslateProjectsLocationsOperationsWaitQueryParams queryParams;
    public TranslateProjectsLocationsOperationsWaitRequest withQueryParams(TranslateProjectsLocationsOperationsWaitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WaitOperationRequest request;
    public TranslateProjectsLocationsOperationsWaitRequest withRequest(openapisdk.models.shared.WaitOperationRequest request) {
        this.request = request;
        return this;
    }
    public TranslateProjectsLocationsOperationsWaitSecurity security;
    public TranslateProjectsLocationsOperationsWaitRequest withSecurity(TranslateProjectsLocationsOperationsWaitSecurity security) {
        this.security = security;
        return this;
    }
}