package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsOperationsCancelRequest {
    public TranslateProjectsLocationsOperationsCancelPathParams pathParams;
    public TranslateProjectsLocationsOperationsCancelRequest withPathParams(TranslateProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranslateProjectsLocationsOperationsCancelQueryParams queryParams;
    public TranslateProjectsLocationsOperationsCancelRequest withQueryParams(TranslateProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public TranslateProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public TranslateProjectsLocationsOperationsCancelSecurity security;
    public TranslateProjectsLocationsOperationsCancelRequest withSecurity(TranslateProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}